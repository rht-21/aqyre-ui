import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-start md:gap-2 group lg:min-w-[140px]"
    >
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
      >
        <path
          d="M15.4862 9C15.5559 9.45126 15.5119 10.0367 15.3595 10.7008M15.3595 10.7008C14.647 13.8037 11.5647 18.6233 6.63251 19.4919C6.63251 19.4919 5.28441 19.7802 4.54266 19.0227C3.28198 17.7351 3.41266 14.3283 14.0208 11.0015C14.456 10.865 14.9075 10.764 15.3595 10.7008ZM15.3595 10.7008C19.6125 10.1058 23.899 12.8624 14.8758 21M7.53125 6C9 6 13 5.5 15.5352 5M11.5306 3C10.5 7 9.5 10.5 11.5306 19"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-foreground duration-150 group-hover:stroke-primary"
        />
      </svg>
      <h6 className="max-lg:hidden text-lg font-medium">Aqyre UI</h6>
    </Link>
  );
};

export default Logo;
