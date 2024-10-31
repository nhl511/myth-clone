"use client";

import { urlWithSlash } from "@/lib/utils";
import NonSelectItem from "./nonSelectItem/NonSelectItem";
import SelectItem from "./selectItem/SelectItem";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ExpandSidebarItem = ({
  menuHeaderItem,
}: {
  menuHeaderItem: menuHeaderItem;
}) => {
  const pathname = usePathname();

  useEffect(() => {
    if (urlWithSlash(menuHeaderItem.URL) === pathname) {
      localStorage.setItem(
        "activeAccordionId",
        menuHeaderItem.MENU_ID.toString()
      );
    }
  }, [pathname]);
  return menuHeaderItem?.SUB_MENU?.length > 0 ||
    menuHeaderItem?.LIST_CATES?.length > 0 ? (
    <SelectItem menuHeaderItem={menuHeaderItem} />
  ) : (
    <NonSelectItem menuHeaderItem={menuHeaderItem} />
  );
};

export default ExpandSidebarItem;
