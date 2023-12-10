import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e?.preventDefault();
    const keyword = searchRef.current.value;

    if(keyword.trim() === '' || keyword.length < 3) return;
    navigate(`/search/${keyword}`);
  };

  return (
    <div className="d-flex justify-content-end gap-2" role="search">
      <input className="form-control" type="search" placeholder="Cari film..." aria-label="Search" ref={searchRef} onKeyDown={(e) => {
        if(e.key === 'Enter') {
          handleSearch();
        }
      }} />
      <button className="btn btn-danger position-absolute" onClick={handleSearch}>
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default InputSearch;
