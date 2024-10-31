"use client";
import React from "react";
import SidebarItem from "./components/sideBarItem/SidebarItem";
import { useStore } from "@/zustand/store";

const Sidebar = ({
  menuHeaderItems,
}: {
  menuHeaderItems: menuHeaderItem[];
}) => {
  const { isOpenExpandSidebar } = useStore();
  return (
    !isOpenExpandSidebar && (
      <div className="w-[72px]">
        <div className="w-[72px] flex flex-col items-center gap-8 pt-28 z-40 fixed">
          {menuHeaderItems?.map((menuHeaderItem: menuHeaderItem) => (
            <SidebarItem
              key={menuHeaderItem.MENU_ID}
              menuHeaderItem={menuHeaderItem}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default Sidebar;
