"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div>
      <h1>header</h1>
      <nav>
        <ul className="">
          <li className="">
            <Link
              className={`${pathName === "/deshboard" ? "text-blue-500" : ""}`}
              href="/deshboard"
            >
              deshboard
            </Link>
          </li>
          <li>
            <Link
              className={`${
                pathName === "/deshboard/profile" ? "text-blue-500" : ""
              }`}
              href="/deshboard/profile"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName === "/contact" ? "text-blue-500" : ""}`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName === "/contact" ? "text-blue-500" : ""}`}
              href="/blog"
            >
              blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
