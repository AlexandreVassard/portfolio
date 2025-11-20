// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-[#16f2b3] text-xl font-bold">
            ALEXANDRE VASSARD
          </Link>
        </div>
        {/*<ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 lg:mt-0 lg:h-auto lg:max-h-screen lg:w-auto lg:flex-row lg:space-x-1 lg:border-0 lg:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#a-propos"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                À PROPOS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#competences"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                COMPÉTENCES
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#projects"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PROJETS
              </div>
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;
