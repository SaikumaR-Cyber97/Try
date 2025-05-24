import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B3854] text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Workinsta Logo"
                width={140}
                height={40}
              />
            </div>
            <p className="text-sm mb-6">
              Workinsta focuses on connecting young talents as a consultant and
              collaborate independently on their own terms. We aim at increased
              collaboration in IT for a high-tech world. Our objective is to
              give every member of our platform the required opportunity to
              realize their dreams of achieving their goals of becoming an
              entrepreneur.
            </p>
            <p className="text-sm mb-4">
              We strictly advise using your own discretion on any confidential
              information to be shared, such as name, Phone, Address, ID, Photo
              or any other information.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-gray-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/saved-jobs"
                  className="text-sm hover:text-gray-300"
                >
                  Saved Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Candidate</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/browse-jobs"
                  className="text-sm hover:text-gray-300"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/browse-employers"
                  className="text-sm hover:text-gray-300"
                >
                  Browse Employers
                </Link>
              </li>
              <li>
                <Link
                  href="/candidate-dashboard"
                  className="text-sm hover:text-gray-300"
                >
                  Candidate Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/saved-jobs"
                  className="text-sm hover:text-gray-300"
                >
                  Saved Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/post-job" className="text-sm hover:text-gray-300">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  href="/browse-candidates"
                  className="text-sm hover:text-gray-300"
                >
                  Browse Candidates
                </Link>
              </li>
              <li>
                <Link
                  href="/employers-dashboard"
                  className="text-sm hover:text-gray-300"
                >
                  Employers Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/applications"
                  className="text-sm hover:text-gray-300"
                >
                  Applications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm hover:text-gray-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-gray-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex justify-between items-center">
          <p className="text-sm">© 2025 Workinsta. All Rights Reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
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
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
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
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
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
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
