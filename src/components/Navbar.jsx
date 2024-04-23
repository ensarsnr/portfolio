import React, { useState } from "react";

function Navbar() {
  const languages = {
    en: {
      name: "English",
      flag: "🇬🇧",
      viewBox: "0 0 3900 3900",
    },
    de: {
      name: "Turkish",
      flag: "🇹🇷",
    },
    // it: {
    //   name: "Italiano",
    //   flag: "#009246",
    //   viewBox: "0 0 512 512",
    // },
    // cn: {
    //   name: "中文 (繁體)",
    //   flag: "#de2910",
    //   viewBox: "0 0 512 512",
    // },
  };

  const [openLanguage, setOpenLanguage] = useState("hidden");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const toggleLanguageDropdown = () => {
    setOpenLanguage(openLanguage === "hidden" ? "block" : "hidden");
  };

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    toggleLanguageDropdown();
  };

  return (
    <nav className="bg-[#8121d0]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-white cursor-pointer"
              onClick={toggleLanguageDropdown}
            >
              <span>{languages[selectedLanguage].name}</span>
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 0 1-.707-.293l-5-5a1 1 0 0 1 1.414-1.414L10 9.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5A1 1 0 0 1 10 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`${
                openLanguage === "hidden" ? "hidden" : ""
              } absolute top-12 right-0 z-10 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700`}
            >
              <ul className="py-1">
                {Object.keys(languages).map((lang) => (
                  <li key={lang}>
                    <button
                      onClick={() => changeLanguage(lang)}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    >
                      <span className="flex items-center space-x-2">
                        <div className="mr-2">{languages[lang].flag}</div>
                        <span>{languages[lang].name}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
