"use client";
import { useState } from "react";
import Pagination from "./Pagination";
import DownloadSection from "./DownloadSection";
import { FaLinkedinIn } from "react-icons/fa";

export default function InternshipListing({ internships }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-200 rounded p-6 mb-8 text-center">
        <h2 className="text-xl font-bold">Images For Ad Purpose</h2>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block bg-white rounded shadow mb-8">
        <table className="w-full border border-[#DDDDDD] rounded-3xl">
          <thead>
            <tr className="border-b border-[#DDDDDD] border-[1px]">
              <th className="p-4 text-left">Profile</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Total Views</th>
              <th className="p-4 text-left">Actions</th>
              <th className="p-4 text-left">Shared on LinkedIn</th>
              <th className="p-4"></th>
            </tr>
          </thead>

          <tbody>
            {internships.map((internship) => (
              <tr key={internship.id}>
                <td className="p-4">{internship.title}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      internship.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {internship.status}
                  </span>
                </td>
                <td className="p-4">{internship.views}</td>
                <td className="p-4">
                  <button className="bg-[#0B3854] text-white px-4 py-2 rounded text-sm">
                    View Applications({internship.applications})
                  </button>
                </td>
                <td className="p-4">
                  {internship.shared && (
                    <div className="w-6 h-6 bg-blue-600 flex items-center justify-center rounded text-white">
                      <FaLinkedinIn size={12} />
                    </div>
                  )}
                </td>
                <td className="p-4">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        {internships.map((internship) => (
          <div key={internship.id} className="bg-white rounded shadow mb-4 p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{internship.title}</h3>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between mb-2">
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  internship.status === "Active"
                    ? "bg-green-200 text-green-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {internship.status}
              </span>
              <span className="text-sm text-gray-600">
                Views: {internship.views}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-[#0B3854] text-white px-3 py-1 rounded text-xs">
                View Applications({internship.applications})
              </button>
              {internship.shared && (
                <div className="w-5 h-5 bg-blue-600 flex items-center justify-center rounded text-white">
                  <FaLinkedinIn size={10} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={5}
      />

      <DownloadSection internships={internships} />
    </div>
  );
}
