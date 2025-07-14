import NavLinks from "../Navbar/NavLinks";
export default function Footer() {
    return (
   
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 rounded-t-lg shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start text-center md:text-left gap-8">

        {/* Church Info & Copyright Section */}
        <div className="flex-1 flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-white mb-2">Chicago Yemisrach Evangelical Church</h3>
          <p className="text-sm">
            5850 N. Elston Avenue Chicago, Il 60646    
          </p>
          <p className="text-sm">
            Phone: (123) 456-7890
          </p>
          <p className="text-sm mb-4">
            Email: info@cyechurch.org
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Chicago Yemisrach Evangelical Church. All rights reserved.
          </p>
        </div>

        {/* Service Times & Legal Links Section */}
        <div className="flex-1 flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h4 className="text-lg font-semibold text-white mb-2">Service Times</h4>
          <p className="text-sm mb-4">
            Sunday Worship: 10:00 AM - 12:00 PM 
            <br/>
            Friday Prayers: 7:00PM - 9:00PM
          </p>
          <h4 className="text-lg font-semibold text-white mb-2">Legal</h4>
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out text-sm">
              Terms of Service
            </a>
          </nav>
        </div>

        {/* Social Media Links Section */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold text-white mb-2">Connect With Us</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out text-lg"
              aria-label="Facebook"
            >
              {/* Facebook SVG Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 13.5h2.793l.417-2.112h-3.21c-.504 0-.663-.223-.663-.679v-1.204h3.407v-2.112h-3.407v-2.482c0-.504.629-.86 1.345-.86h1.962v-2.112c-.36-.057-.728-.086-1.096-.086-2.316 0-3.876 1.41-3.876 3.993v1.892h-2.28v2.112h2.28v6.079h3.811v-6.079z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out text-lg"
              aria-label="Twitter"
            >
              {/* Twitter SVG Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6c-.77.34-1.6.56-2.46.66.88-.53 1.56-1.37 1.88-2.38-.82.49-1.74.84-2.72 1.02C18.15 4.5 17.06 4 15.88 4c-2.38 0-4.31 1.93-4.31 4.31 0 .34.04.67.11.98C8.57 9.17 5.75 7.6 3.84 5.09c-.39.67-.62 1.45-.62 2.29 0 1.49.76 2.81 1.92 3.59-.7-.02-1.35-.21-1.92-.5v.05c0 2.09 1.49 3.84 3.47 4.23-.36.1-.74.15-1.13.15-.28 0-.55-.03-.8-.08.55 1.72 2.14 2.97 4.03 3.01-1.48 1.16-3.34 1.86-5.38 1.86-.35 0-.69-.02-1.03-.06C2.94 19.82 5.04 20 7.21 20c8.65 0 13.38-7.14 13.38-13.38 0-.2-.01-.4-.02-.6z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300 ease-in-out text-lg"
              aria-label="Instagram"
            >
              {/* Instagram SVG Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2c3.273 0 3.682.013 4.966.072 1.171.054 1.812.247 2.226.413.414.166.757.404 1.109.756.352.352.59.695.756 1.109.166.414.359 1.055.413 2.226.059 1.284.072 1.693.072 4.966s-.013 3.682-.072 4.966c-.054 1.171-.247 1.812-.413 2.226-.166.414-.404.757-.756 1.109-.352.352-.695.59-1.109.756-.414.166-1.055.359-2.226.413-1.284.059-1.693.072-4.966.072s-3.682-.013-4.966-.072c-1.171-.054-1.812-.247-2.226-.413-.414-.166-.757-.404-1.109-.756-.352-.352-.59-.695-.756-1.109-.166-.414-.359-1.055-.413-2.226-.059-1.284-.072-1.693-.072-4.966s.013-3.682.072-4.966c.054-1.171.247-1.812.413-2.226.166-.414.404-.757.756-1.109.352-.352.695-.59 1.109-.756.414-.166 1.055-.359 2.226-.413C8.318 2.013 8.727 2 12 2zm0 1.88c-3.203 0-3.585.016-4.85.071-1.043.048-1.547.228-1.81.332-.266.104-.457.25-.668.461-.212.211-.363.402-.461.668-.104.263-.284.767-.332 1.81-.055 1.265-.071 1.647-.071 4.85s.016 3.585.071 4.85c.048 1.043.228 1.547.332 1.81.104.266.25.457.461.668.211.212.402.363.668.461.263.104.767.284 1.81.332 1.265.055 1.647.071 4.85.071s3.585-.016 4.85-.071c1.043-.048 1.547-.228 1.81-.332.266-.104.457-.25.668-.461.212-.211.363-.402.461-.668.104-.263.284-.767.332-1.81.055-1.265.071-1.647.071-4.85s-.016-3.585-.071-4.85c-.048-1.043-.228-1.547-.332-1.81-.104-.266-.25-.457-.461-.668-.211-.212-.402-.363-.668-.461-.263-.104-.767-.284-1.81-.332C15.585 3.896 15.203 3.88 12 3.88zm0 3.65c-2.468 0-4.47 2.002-4.47 4.47s2.002 4.47 4.47 4.47 4.47-2.002 4.47-4.47-2.002-4.47-4.47-4.47zm0 1.88c1.458 0 2.59 1.132 2.59 2.59s-1.132 2.59-2.59 2.59-2.59-1.132-2.59-2.59 1.132-2.59 2.59-2.59zm6.368-5.32a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
    )
}