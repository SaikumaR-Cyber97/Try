import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Welcome to Workinsta</h1>
      <p className="mb-6">
        The platform that connects entrepreneurs and talents.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/dashboard"
          className="bg-[#0B3854] text-white px-6 py-3 rounded hover:bg-[#0a2e45]"
        >
          Go to Dashboard
        </Link>
        <Link
          href="/post"
          className="bg-gray-200 text-[#0B3854] px-6 py-3 rounded hover:bg-gray-300"
        >
          Post Internship/Job
        </Link>
      </div>
    </div>
  );
}
