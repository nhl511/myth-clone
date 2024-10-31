import { urlWithSlash } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SubMenuItem = ({ subMenuItem }: { subMenuItem: subMenuItem }) => {
  const pathname = usePathname();
  return (
    <Link href={urlWithSlash(subMenuItem.URL)}>
      <p
        className={`pl-12 hover:bg-menu-item-hover py-4 ${
          pathname === urlWithSlash(subMenuItem.URL) &&
          "text-primary-foreground"
        }`}
      >
        {subMenuItem.TITLE}
      </p>
    </Link>
  );
};

export default SubMenuItem;
