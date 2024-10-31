import { AccordionItem } from "@/components/ui/accordion";
import { urlWithSlash } from "@/lib/utils";
import { useStore } from "@/zustand/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NonSelectItem = ({
  menuHeaderItem,
}: {
  menuHeaderItem: menuHeaderItem;
}) => {
  const pathname = usePathname();
  return (
    <AccordionItem
      value={menuHeaderItem.MENU_ID.toString()}
      className="border-none"
    >
      <Link href={urlWithSlash(menuHeaderItem.URL)}>
        <div
          className={`w-full py-4 flex items-center justify-between cursor-pointer hover:bg-menu-item-hover relative z-40 bg-background ${
            pathname === urlWithSlash(menuHeaderItem.URL) &&
            "bg-menu-item-hover !text-primary"
          }`}
        >
          <div className="flex items-center gap-6">
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

            <p>{menuHeaderItem.TITLE}</p>
          </div>
        </div>
      </Link>
    </AccordionItem>
  );
};

export default NonSelectItem;
