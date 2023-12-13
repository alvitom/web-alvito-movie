const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((currentPage) => currentPage + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((currentPage) => currentPage - 1);
    scrollTop();
  };

  return (
    <>
      <div className="d-flex justify-content-center gap-3 text-light fs-5 mb-5">
        {page <= 1 ? (
          <button className="btn btn-danger disabled">Prev</button>
        ) : (
          <button className="btn btn-danger" onClick={handlePrevPage}>
            Prev
          </button>
        )}
        <p className="my-auto p-1">
          {page} of {lastPage}
        </p>
        {page >= lastPage ? (
          <button className="btn btn-danger disabled">Next</button>
        ) : (
          <button className="btn btn-danger" onClick={handleNextPage}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Pagination;
