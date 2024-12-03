import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },

    {
      id: 2,
      name: "Contact Us",
      path: "/",
    },
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.png" alt="espe logo" width={100} height={50} />
        <ul className="md:flex gap-10 hidden">
          {menu.map((item, index) => (
            <Link href={item.path}>
              <li
                key={index}
                className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get started</Button>
    </div>
  );
};

export default Header;
