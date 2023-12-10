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
        <button className="btn btn-danger" onClick={handlePrevPage} disabled={page <= 1}>
          Prev
        </button>
        <p className="my-auto p-1">
          {page} of {lastPage}
        </p>
        <button className="btn btn-danger" onClick={handleNextPage} disabled={page >= lastPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
