const HeaderMenu = ({ title, page }) => {
  return (
    <>
      <h1 className="text-center mt-5 text-light">{title} #{page}</h1>
    </>
  );
};

export default HeaderMenu;
