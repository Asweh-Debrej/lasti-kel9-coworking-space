import { createContext, useState } from 'react';

const NavbarContext = createContext(
  {
    currentPage: "beranda",
    setCurrentPage: (page) => {},
  }
);

export const NavbarProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("beranda");

  const allowedPages = ["beranda", "tentang", "kontak", "fasilitas"];

  function setCurrentPageHandler(page) {
    if (allowedPages.includes(page)) {
      setCurrentPage(page);
    } else {
      setCurrentPage("beranda");
    }
  }

  console.log("updated");

  return (
    <NavbarContext.Provider
      value={{
        currentPage,
        setCurrentPage : setCurrentPageHandler,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

export default NavbarContext;
