
export default function Hamburger({toggleMenu, isOpen} : {toggleMenu: () => void, isOpen: boolean}) {
    return (
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition duration-300 ease-in-out"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Conditional rendering for hamburger or close icon */}
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" // Close icon (X)
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7" // Hamburger icon
                ></path>
              )}
            </svg>
          </button>
        </div>
    )
}