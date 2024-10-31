"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Bell, CircleUser, Download, Menu, Search } from "lucide-react";
import { useStore } from "@/zustand/store";
import Image from "next/image";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import BuyCard from "./hoverCard/BuyCard";
import DownloadCard from "./hoverCard/DownloadCard";
import NotificationCard from "./hoverCard/NotificationCard";
import UserCard from "./hoverCard/UserCard";

const Navbar = () => {
  const { isOpenExpandSidebar, setIsOpenExpandSidebar } = useStore();
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledToTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`h-[72px] w-full flex items-center justify-between px-[18px] fixed z-50 transition-colors duration-500 ease-in-out bg-gradient-to-b from-[#121212]/70 to-[#121212]/4 ${
        !isScrolledToTop && "bg-background"
      }`}
    >
      <div className="flex items-center gap-6">
        <Button
          className="bg-background text-primary-foreground hover:bg-secondary hover:text-secondary-foreground"
          size="icon"
          onClick={() => setIsOpenExpandSidebar(!isOpenExpandSidebar)}
        >
          <Menu style={{ width: "24px", height: "24px" }} strokeWidth={2} />
        </Button>
        <div>
          <Image
            src="/images/mytv.svg"
            alt="mytv logo"
            layout="responsive"
            width={100}
            height={50}
          />
        </div>
      </div>
      <div>
        <div className="flex w-[512px] h-full bg-[#121212] bg-opacity-15 relative hover:bg-secondary">
          <Input
            placeholder="Tìm kiếm phim truyện, thể thao"
            className="text-primary-foreground text-lg font-bold border-none !placeholder-[#a7a8a8] focus-visible:ring-transparent focus:bg-secondary"
          />
          <Search
            className="text-primary-foreground absolute right-3 top-[8px]"
            style={{ width: "20px", height: "20px" }}
            size={36}
            strokeWidth={2}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <HoverCard openDelay={350} closeDelay={175}>
          <HoverCardTrigger asChild>
            <Button className="bg-primary text-sm font-bold" size="lg">
              Mua gói
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-[328px] p-0 border-none">
            <BuyCard />
          </HoverCardContent>
        </HoverCard>
        <HoverCard openDelay={350} closeDelay={175}>
          <HoverCardTrigger asChild>
            <Button
              size="icon"
              className="text-primary-foreground bg-transparent"
            >
              <Download
                style={{ width: "20px", height: "20px" }}
                size={36}
                strokeWidth={2.25}
              />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-[360px] p-0 border-none">
            <DownloadCard />
          </HoverCardContent>
        </HoverCard>
        <HoverCard openDelay={350} closeDelay={175}>
          <HoverCardTrigger asChild>
            <Button
              size="icon"
              className="text-primary-foreground bg-transparent"
            >
              <Bell
                style={{ width: "20px", height: "20px" }}
                size={36}
                strokeWidth={2.25}
              />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-[360px] p-0 border-none bg-transparent">
            <NotificationCard />
          </HoverCardContent>
        </HoverCard>
        <HoverCard openDelay={350} closeDelay={175}>
          <HoverCardTrigger asChild>
            <Button
              size="icon"
              className="text-primary-foreground bg-transparent"
            >
              <CircleUser
                style={{ width: "40px", height: "40px" }}
                strokeWidth={1.25}
              />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-[479px] p-0 border-none">
            <UserCard />
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};

export default Navbar;
