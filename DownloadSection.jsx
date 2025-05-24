export default function DownloadSection({ internships }) {
  return (
    <div className="bg-white rounded shadow mb-8">
      <h2 className="text-xl font-bold px-6 py-4">Download Request</h2>

      {/* Desktop view */}
      <div className="hidden md:block">
        <table className="w-full border border-[#DDDDDD] rounded-3xl">
          <thead>
            <tr className="border-b border-[#DDDDDD] border-[1px]">
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Link</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((internship) => (
              <tr key={internship.id}>
                <td className="p-4">{internship.date}</td>
                <td className="p-4">{internship.title} (Open)</td>
                <td className="p-4">
                  <button className="text-[#0B3854] font-medium">
                    Download
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
          <div key={internship.id}>
            <div className="mb-1">
              <span className="text-gray-600 text-sm">Date:</span>
              <span className="ml-2">{internship.date}</span>
            </div>
            <div className="mb-1">
              <span className="text-gray-600 text-sm">Title:</span>
              <span className="ml-2">{internship.title} (Open)</span>
            </div>
            <div>
              <button className="text-[#0B3854] font-medium">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
