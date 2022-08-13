import Link from "next/link";
import React, { FC } from "react";

interface NavbarItemProps {
  className: string;
  value: string;
  href?: string;
}

const NavbarItem: FC<NavbarItemProps> = (props) => {
  const { value, href, className } = props;

  if (!href) {
    return (
      <li className={className}>
        <a href="#">{value}</a>
      </li>
    );
  }

  return (
    <li className={className}>
      <Link href={href}>
        <a>{value}</a>
      </Link>
    </li>
  );
};

export default NavbarItem;
