

function Headers({ page, setPage }) {
  return (
    <div className="flex justify-between text-black bg-slate-200 shadow-lg p-3 w-full">
      <div className="hover:bg-slate-50">
        <button
          onClick={() => setPage(1)}
          className={page == 1 && "font-bold text-blue-900"}>
          DISSCUSSION FOURM
        </button>
      </div>
      <div>
        <button
          onClick={() => setPage(2)}
          className={page == 2 && "font-bold text-blue-900"}>
          MARKETING STORIES
        </button>
      </div>
    </div>
  );
}

export default Headers
