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
      </div>
    </nav>
  );
}

export default Navbar;
