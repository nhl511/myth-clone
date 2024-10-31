import Image from "next/image";
import React, { useEffect } from "react";
import SubMenuItem from "../subMenuItem/SubMenuItem";
import ListCateItem from "../listCateItem/ListCateItem";
import { usePathname } from "next/navigation";
import { convertNameToSlug, urlWithSlash } from "@/lib/utils";
import Link from "next/link";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SelectItem = ({ menuHeaderItem }: { menuHeaderItem: menuHeaderItem }) => {
  const pathname = usePathname();

  const urls =
    menuHeaderItem.SUB_MENU &&
    menuHeaderItem.SUB_MENU.map((item) => urlWithSlash(item.URL));
  const listItemAsUrls =
    menuHeaderItem.LIST_CATES &&
    menuHeaderItem.LIST_CATES.map((item) =>
      convertNameToSlug({
        prefix: menuHeaderItem.URL,
        cateName: item.CATE_NAME,
      })
    );

  return (
    <AccordionItem
      value={menuHeaderItem.MENU_ID.toString()}
      className="border-none"
    >
      <Link href={urlWithSlash(menuHeaderItem.URL)} className="">
        <AccordionTrigger
          className={`flex items-center justify-between cursor-pointer py-4 font-bold hover:bg-menu-item-hover hover:no-underline ${
            (urls?.includes(pathname) || listItemAsUrls?.includes(pathname)) &&
            "!text-primary bg-menu-item-hover"
          }`}
        >
          <div className="flex items-center gap-6">
            {urls?.includes(pathname) || listItemAsUrls?.includes(pathname) ? (
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
        </AccordionTrigger>
      </Link>

      <AccordionContent className="flex flex-col pb-4">
        {menuHeaderItem?.SUB_MENU?.length > 0 &&
          menuHeaderItem.SUB_MENU.map((subMenuItem: subMenuItem) => (
            <SubMenuItem subMenuItem={subMenuItem} />
          ))}
        {menuHeaderItem?.LIST_CATES?.length > 0 &&
          menuHeaderItem.LIST_CATES.map((listCateItem: listCateItem) => (
            <ListCateItem
              url={menuHeaderItem.URL}
              listCateItem={listCateItem}
            />
          ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default SelectItem;
