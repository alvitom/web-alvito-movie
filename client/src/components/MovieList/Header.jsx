const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <>
    {linkHref && linkTitle ? (
      <div className="d-flex justify-content-between align-items-center">
      <h2 className="text-light">{title}</h2>
      <a href={linkHref} className="btn btn-danger">
          {linkTitle}
        </a>
        </div>
    ) : (
      <h1 className="text-light text-center mb-4">{title}</h1>
    )}
    </>
  );
};

export default Header;
