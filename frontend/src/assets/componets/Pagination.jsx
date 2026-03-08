import { Link } from 'react-router-dom';
import { ArrowSquareLeftIcon, ArrowSquareRightIcon } from '@phosphor-icons/react'

function Pagination({ currentPage, totalPages }) {
  const prev = [];
  const next = [];

  for (let i = currentPage - 2; i < currentPage; i++) {
    if (i >= 1) {
      prev.push(i);
    }
  }

  for (let i = currentPage + 1; i <= currentPage + 2; i++) {
    if (i <= totalPages) {
      next.push(i);
    }
  }

  return (
    <>
      <div className="flex justify-center py-4">
        <div className="flex gap-2">
          <Link to={`/posts?page=${currentPage - 1}`}
          className="p-1 text-gray-600 hover:text-blue-500 flex justify-center items-center border border-gray-600 hover:border-blue-500 rounded transition-colors duration-200">
            <ArrowSquareLeftIcon size={32} />
          </Link>
          {prev.map((page) => (
            <Link key={page} to={`/posts?page=${page}`}
            className="px-3 py-2 border border-gray-400 hover:border-blue-500 hover:text-blue-500 rounded transition-colors duration-200">
              {page}
            </Link>
          ))}
          <div className="px-3 py-2 text-gray-600 border border-gray-900 cursor-not-allowed bg-gray-300 rounded">
            {currentPage}
          </div>
          {next.map((page) => (
            <Link key={page} to={`/posts?page=${page}`}
            className="px-3 py-2 border border-gray-400 hover:border-blue-500 hover:text-blue-500 rounded transition-colors duration-200">
              {page}
            </Link>
          ))}
          <Link to={`/posts?page=${currentPage + 1}`}
          className="p-1 flex text-gray-600 hover:text-blue-500 justify-center items-center border border-gray-600 hover:border-blue-500 rounded transition-colors duration-200">
            <ArrowSquareRightIcon size={32} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Pagination;