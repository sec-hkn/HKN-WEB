"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, RefObject } from "react";
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
  const submenuRefs = useRef<(RefObject<HTMLDivElement> | null)[]>(
    menuData.map(() => null)
  );

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
  const handleSubmenu = (index: number) => {
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
        const activeSubmenu = submenuRefs.current[openIndex]?.current;
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
        <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between gap-4 py-1">
            {/* Left Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="header-logo flex items-center py-2"
              >
                <img
                  className="hidden w-[125px] h-auto dark:block"
                  src="/images/logo/3.png"
                  alt="IEEE-HKN Logo"
                />
                <img
                  className="w-[125px] h-auto dark:hidden"
                  src="/images/logo/3-dark.png"
                  alt="IEEE-HKN Logo"
                />
              </Link>
            </div>

            {/* Mobile Toggler */}
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? " top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? " top-[-8px] -rotate-45" : ""
                }`}
              />
            </button>

            {/* Center Navigation Links */}
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-4 z-30 w-[250px] rounded-lg border border-body-color/20 bg-white px-6 py-4 shadow-xl duration-300 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:shadow-none lg:opacity-100 ${
                navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:items-center lg:gap-5 xl:gap-8">
                {menuData.map((menuItem, index) => (
                  <li key={menuItem.id} className="group relative">
                    {!menuItem.submenu ? (
                      <Link
                        href={menuItem.path || "#"}
                        target={menuItem.newTab ? "_blank" : "_self"}
                        rel={menuItem.newTab ? "noopener noreferrer" : ""}
                        className={`flex py-2 text-[16px] xl:text-[17px] font-semibold whitespace-nowrap transition-colors duration-200 lg:py-6 ${
                          pathname === menuItem.path
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/80 dark:hover:text-white"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <div className="flex items-center">
                        <Link
                          href={menuItem.path || "#"}
                          target={menuItem.newTab ? "_blank" : "_self"}
                          rel={menuItem.newTab ? "noopener noreferrer" : ""}
                          className={`flex py-2 text-[16px] xl:text-[17px] font-semibold whitespace-nowrap transition-colors duration-200 lg:py-6 ${
                            pathname === menuItem.path
                              ? "text-primary dark:text-white"
                              : "text-dark hover:text-primary dark:text-white/80 dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                        <button
                          onClick={() => handleSubmenu(index)}
                          className="ml-1 cursor-pointer p-1 text-dark group-hover:text-primary dark:text-white/80 dark:group-hover:text-white"
                          aria-label="Toggle submenu"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 25 24"
                            className="transition-transform duration-200"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                        <div
                          ref={(el) => {
                            if (el) {
                              submenuRefs.current[index] = { current: el };
                            }
                          }}
                          className={`submenu absolute left-0 z-50 min-w-[220px] rounded-lg bg-white px-4 py-3 shadow-xl transition-all duration-300 dark:bg-dark ${
                            openIndex === index
                              ? "block opacity-100 visible"
                              : "hidden opacity-0 invisible"
                          } lg:group-hover:opacity-100 lg:group-hover:visible`}
                          style={{ top: "100%" }}
                        >
                          {menuItem.submenu.map((submenuItem) => (
                            <Link
                              href={submenuItem.path}
                              key={submenuItem.id}
                              target={submenuItem.newTab ? "_blank" : "_self"}
                              rel={submenuItem.newTab ? "noopener noreferrer" : ""}
                              className="block rounded py-2 text-sm font-medium text-dark hover:text-primary dark:text-white/80 dark:hover:text-white lg:px-3"
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

            {/* Right Partner Logos */}
            <div className="hidden lg:flex items-center flex-shrink-0 gap-3 xl:gap-5 pl-4">
              <img
                className="h-9 xl:h-10 w-auto object-contain dark:hidden"
                src="/images/logo/2.png"
                alt="IEEE Logo"
              />
              <img
                className="h-9 xl:h-10 w-auto object-contain dark:hidden"
                src="/images/logo/1.png"
                alt="Sai Ram Logo"
              />
              <img
                className="hidden h-9 xl:h-10 w-auto object-contain dark:block"
                src="/images/logo/2.png"
                alt="IEEE Logo"
              />
              <img
                className="hidden h-9 xl:h-10 w-auto object-contain dark:block"
                src="/images/logo/1.png"
                alt="Sai Ram Logo"
              />
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