export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center p-4">
      <button
        className="mx-1 px-2"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        ←
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`mx-1 w-8 h-8 rounded-full flex items-center justify-center ${
            currentPage === page
              ? "bg-[#0B3854] text-white"
              : "bg-white text-[#0B3854]"
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="mx-1 px-2"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        →
      </button>
    </div>
  );
}
