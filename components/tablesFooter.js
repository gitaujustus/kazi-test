// TableFooter.js
import React from 'react';

const TableFooter = ({ 
  entriesPerPage, 
  setEntriesPerPage, 
  currentPage, 
  setCurrentPage, 
  totalEntries, 
  indexOfFirstEntry, 
  indexOfLastEntry 
}) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  return (
    <section className="flex flex-wrap bg-white p-4 justify-between items-center rounded-b-lg">
      <div className="flex items-center space-x-2">
        <p>Show</p>
        <select 
          className="border rounded px-2 py-1"
          value={entriesPerPage}
          onChange={(e) => setEntriesPerPage(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <span>Entries</span>
      </div>
      <div className='flex flex-wrap gap-2 items-center'>
        <p>Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries</p>
        <div className="flex gap-2">
          <button 
            className="px-3 py-1 border rounded text-gray-600"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button className="px-3 py-1 bg-red-500 text-white rounded">{currentPage}</button>
          <button 
            className="px-3 py-1 border rounded text-gray-600"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default TableFooter;