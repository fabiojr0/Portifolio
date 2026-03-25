import React from "react";
import { Link } from "react-scroll";

function NavLink({ to, label, onClick, variant = "desktop" }) {
  const variants = {
    desktop:
      'text-zinc-500 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 font-medium cursor-pointer transition-colors duration-300 text-sm lg:text-base relative after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:to-rose-500 after:transition-all after:duration-300 hover:after:w-full',
    mobile:
      "text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 font-medium cursor-pointer transition-all duration-200 text-sm py-2.5 px-3 rounded-lg",
  };

  return (
    <Link
      className={variants[variant]}
      to={to}
      spy={true}
      duration={500}
      offset={-80}
      smooth
      activeClass={variant === "desktop" ? "!text-red-600 dark:!text-red-400 after:!w-full" : ""}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export default NavLink;
