"use client";
import { urlWithSlash } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarItem = ({
  menuHeaderItem,
}: {
  menuHeaderItem: menuHeaderItem;
}) => {
  const pathname = usePathname();
  return (
    <Link href={urlWithSlash(menuHeaderItem.URL)}>
      {pathname === urlWithSlash(menuHeaderItem.URL) ? (
        <Image
          src={menuHeaderItem.LOGO_FOCUS}
          alt={menuHeaderItem.TITLE}
          width={24}
          height={24}
        />
      ) : (
        <Image
          src={menuHeaderItem.LOGO}
          alt={menuHeaderItem.TITLE}
          width={24}
          height={24}
        />
      )}
    </Link>
  );
};

export default SidebarItem;
