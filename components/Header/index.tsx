"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import './style.css';


const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // References to header and submenu elements
  const headerRef = useRef<HTMLDivElement>(null);
  const submenuRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    // Run once on mount to set the initial sticky state
    handleStickyNavbar();

    // Add scroll event listener
    window.addEventListener("scroll", handleStickyNavbar);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  // Handle clicks outside of header and submenu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If we have an open submenu
      if (openIndex !== -1) {
        const clickedElement = event.target as Node;
        
        // Check if the click is outside the header
        if (headerRef.current && !headerRef.current.contains(clickedElement)) {
          setOpenIndex(-1);
          return;
        }
        
        // Check if the click is inside the active submenu
        const activeSubmenu = submenuRefs.current[openIndex];
        if (activeSubmenu && !activeSubmenu.contains(clickedElement)) {
          // Check if the click was on a parent menu item (don't close if clicking the toggle itself)
          const isClickOnMenuToggle = (clickedElement as HTMLElement).closest('button[aria-label="Toggle submenu"]');
          if (!isClickOnMenuToggle) {
            setOpenIndex(-1);
          }
        }
      }
      
      // Also close the mobile navbar when clicking outside
      if (navbarOpen) {
        const clickedElement = event.target as Node;
        const navbar = document.getElementById("navbarCollapse");
        const toggleButton = document.getElementById("navbarToggler");
        
        if (navbar && 
            toggleButton && 
            !navbar.contains(clickedElement) && 
            !toggleButton.contains(clickedElement)) {
          setNavbarOpen(false);
        }
      }
    };

    // Add click event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openIndex, navbarOpen]);

  const pathname = usePathname();

  return (
    <>
      <header
        ref={headerRef}
        className={`header font-bold left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white shadow-sticky backdrop-blur-sm"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12" style={{ marginRight: 0 }}>
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-2"
                } `}
              >
                <img className="hidden w-full dark:block" style={{ width: 125 }} src="/images/logo/3.png" alt="Logo" />
                <img className="w-full dark:hidden" style={{ width: 125 }} src="/images/logo/3-dark.png" alt="Logo" />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-9">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {!menuItem.submenu ? (
                          // Menu item without submenu
                          <Link
                            href={menuItem.path || "#"}
                            target={menuItem.newTab ? "_blank" : "_self"}
                            rel={menuItem.newTab ? "noopener noreferrer" : ""}
                            className={`flex py-2 text-xl lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              pathname === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          // Menu item with submenu - now wrapped in a div for layout
                          <div className="flex items-center justify-between">
                            {/* Make the parent menu item also clickable */}
                            <Link
                              href={menuItem.path || "#"}
                              target={menuItem.newTab ? "_blank" : "_self"}
                              rel={menuItem.newTab ? "noopener noreferrer" : ""}
                              className={`flex py-2 text-xl lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                                pathname === menuItem.path
                                  ? "text-primary dark:text-white"
                                  : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              }`}
                            >
                              {menuItem.title}
                            </Link>
                            
                            {/* Dropdown toggle button */}
                            <button
                              onClick={() => handleSubmenu(index)}
                              className="flex-none cursor-pointer py-2 text-xl text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:ml-2 lg:py-6"
                              aria-label="Toggle submenu"
                            >
                              <span>
                                <svg width="25" height="25" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                            
                            {/* Submenu */}
                            <div
                              ref={el => submenuRefs.current[index] = el}
                              className={`submenu absolute left-0 z-50 rounded-md bg-white transition-all duration-300 min-w-[250px] py-3 px-4 shadow-lg dark:bg-dark ${
                                openIndex === index ? "block opacity-100 visible" : "hidden opacity-0 invisible"
                              } lg:group-hover:opacity-100 lg:group-hover:visible`}
                              style={{
                                top: "100%"
                              }}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  target={submenuItem.newTab ? "_blank" : "_self"}
                                  rel={submenuItem.newTab ? "noopener noreferrer" : ""}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <img className="w-full dark:hidden sample" style={{ width: 125, paddingRight: 30 }} src="/images/logo/2.png" alt="Logo" />
                <img className="w-full dark:hidden sample" style={{ width: 140, paddingRight: 30 }} src="/images/logo/1.png" alt="Logo" />
                <img className="hidden w-full dark:block lg-hidden sample" style={{ width: 125, paddingRight: 30 }} src="/images/logo/2.png" alt="Logo" />
                <img className="hidden w-full dark:block lg-hidden sample" style={{ width: 140, paddingRight: 30 }} src="/images/logo/1.png" alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Add a spacer to prevent content from being hidden beneath the fixed header */}
      <div style={{ height: "80px" }}></div>
    </>
  );
};

export default Header;