"use client";
import { useStore } from "@/zustand/store";
import React, { useEffect, useState } from "react";
import ExpandSidebarItem from "./components/expandSideBarItem/ExpandSidebarItem";
import Footer from "../Footer";
import { Accordion } from "../ui/accordion";

const ExpandSidebar = ({
  menuHeaderItems,
}: {
  menuHeaderItems: menuHeaderItem[];
}) => {
  const { isOpenExpandSidebar } = useStore();
  const [defaultAccordionId, setDefaultAccordionId] = useState("1");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedActiveItemId = localStorage.getItem("activeAccordionId");
      if (storedActiveItemId) setDefaultAccordionId(storedActiveItemId);
    }
  }, []);

  return (
    isOpenExpandSidebar && (
      <div className="w-[212px] mt-[72px]">
        <div className="custom-scroll w-[212px] pl-[24px] pt-6 flex flex-col items-start z-40 fixed h-full overflow-hidden pb-8 gap-3 text-sm hover:overflow-y-scroll overscroll-contain font-bold">
          <div className="w-[155px]">
            <div className="w-full">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                value={defaultAccordionId}
                onValueChange={setDefaultAccordionId}
              >
                {menuHeaderItems?.map((menuHeaderItem: menuHeaderItem) => (
                  <ExpandSidebarItem
                    key={menuHeaderItem.MENU_ID}
                    menuHeaderItem={menuHeaderItem}
                  />
                ))}
              </Accordion>
            </div>
          </div>

          <hr className="border border-foreground w-full" />
          <Footer />
        </div>
      </div>
    )
  );
};

export default ExpandSidebar;
