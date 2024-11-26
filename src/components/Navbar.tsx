"use client";
import React, {useEffect, useRef, useState} from "react";
import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {Bell, CircleUser, Download, Menu, Search} from "lucide-react";
import {useStore} from "@/zustand/store";
import Image from "next/image";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "./ui/hover-card";
import BuyCard from "./hoverCard/BuyCard";
import DownloadCard from "./hoverCard/DownloadCard";
import NotificationCard from "./hoverCard/NotificationCard";
import UserCard from "./hoverCard/UserCard";
import SearchList from "@/components/search/SearchList";
import {Dialog, DialogContent} from "@/components/ui/dialog";
import BuyDialog from "@/components/buyDialog/BuyDialog";
import LoginDialog from "@/components/loginDialog/LoginDialog";
import {usePathname, useRouter} from "next/navigation";


const Navbar = ({search, product}: { search: search, product: product }) => {
    const {isOpenExpandSidebar, setIsOpenExpandSidebar} = useStore();
    const [isScrolledToTop, setIsScrolledToTop] = useState(true);
    const [isOpenSearchList, setIsOpenSearchList] = useState(false);
    const [isFadeIn, setIsFadeIn] = useState(true);
    const inputRef = useRef<any>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isNestedDialogOpen, setIsNestedDialogOpen] = useState(false);
    const [keyword, setKeyword] = useState("");
    const router = useRouter()
    const pathname = usePathname()
    let timerId = useRef<any>(null);

    const handleDialogOpen = () => setIsDialogOpen(true);

    const handleBlur = (e) => {
        setIsFadeIn(false);
        if (!inputRef.current.contains(e.relatedTarget)) {
            setTimeout(() => {
                setIsOpenSearchList(false);
                setIsFadeIn(true)
            }, 400)
        }
    }
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolledToTop(window.scrollY === 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (pathname === "/") {
            setKeyword("");
        }
    }, [pathname]);

    useEffect(() => {
        if (keyword) {
            timerId.current = setTimeout(() => {
                setIsOpenSearchList(false)
                router.push("/tim-kiem?k=" + keyword);
            }, 1000)
        }
        return () => clearTimeout(timerId.current)
    }, [keyword]);

    const handleSearch = () => {
        router.push("/tim-kiem?k=" + keyword);
    }

    const handleKeydown = (e) => {
        if (e.key === "Enter") {
            setIsOpenSearchList(false)
            router.push("/tim-kiem?k=" + keyword);
        }

    }

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
                    <Menu style={{width: "24px", height: "24px"}} strokeWidth={2}/>
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
            <div className="relative">
                <div
                    className={`flex w-[512px] h-full bg-[#121212] bg-opacity-15 relative ${!isOpenSearchList && "hover:bg-[var(--gray)]"} ${isOpenSearchList ? "rounded-t-md" : "rounded-md"} `}
                    onClick={() => setIsOpenSearchList(true)}>
                    <Input
                        ref={inputRef}
                        onBlur={handleBlur}
                        placeholder="Tìm kiếm phim truyện, thể thao"
                        className={`${isOpenSearchList ? "rounded-t-md" : "rounded-md"} text-primary-foreground text-lg font-bold border-none !placeholder-[#a7a8a8] focus-visible:ring-transparent focus:bg-[#121212] focus:bg-opacity-50 focus:backdrop-blur`}
                        value={keyword}
                        onChange={e => {
                            setKeyword(e.target.value)
                            clearTimeout(timerId.current)
                        }}
                        onKeyDown={handleKeydown}

                    />
                    <Search
                        className="text-primary-foreground absolute right-3 top-[8px]"
                        style={{width: "20px", height: "20px"}}
                        size={36}
                        strokeWidth={2}
                        onClick={handleSearch}
                    />

                </div>
                {
                    isOpenSearchList && (
                        <SearchList isOpen={isFadeIn} search={search}/>
                    )
                }

            </div>
            <div className="flex items-center gap-4">
                <HoverCard openDelay={0} closeDelay={175}>
                    <HoverCardTrigger asChild>
                        <Button className="bg-primary text-sm font-bold" size="lg" onClick={handleDialogOpen}
                        >
                            Mua gói
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[328px] p-0 border-none">
                        <BuyCard/>
                    </HoverCardContent>
                </HoverCard>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="border-none bg-none w-[720px] p-0 rounded-3xl">
                        <BuyDialog product={product} setIsNestedDialogOpen={setIsNestedDialogOpen}
                                   setIsDialogOpen={setIsDialogOpen}/>
                    </DialogContent>
                </Dialog>
                <Dialog open={isNestedDialogOpen} onOpenChange={setIsNestedDialogOpen}>
                    <DialogContent className="w-[768px] bg-background border-none">
                        <LoginDialog/>
                    </DialogContent>
                </Dialog>

                <HoverCard openDelay={0} closeDelay={175}>
                    <HoverCardTrigger asChild>
                        <Button
                            size="icon"
                            className="text-primary-foreground bg-transparent"
                        >
                            <Download
                                style={{width: "20px", height: "20px"}}
                                size={36}
                                strokeWidth={2.25}
                            />
                        </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[360px] p-0 border-none">
                        <DownloadCard/>
                    </HoverCardContent>
                </HoverCard>
                <HoverCard openDelay={0} closeDelay={175}>
                    <HoverCardTrigger asChild>
                        <Button
                            size="icon"
                            className="text-primary-foreground bg-transparent"
                        >
                            <Bell
                                style={{width: "20px", height: "20px"}}
                                size={36}
                                strokeWidth={2.25}
                            />
                        </Button>
                    </HoverCardTrigger>
                    <Dialog>
                        <HoverCardContent className="w-[360px] p-0 border-none bg-transparent">
                            <NotificationCard/>
                        </HoverCardContent>
                        <DialogContent className="w-[768px] bg-background border-none">
                            <LoginDialog/>
                        </DialogContent>
                    </Dialog>

                </HoverCard>
                <HoverCard openDelay={0} closeDelay={175}>
                    <HoverCardTrigger asChild>
                        <Button
                            size="icon"
                            className="text-primary-foreground bg-transparent"
                        >
                            <CircleUser
                                style={{width: "40px", height: "40px"}}
                                strokeWidth={1.25}
                            />
                        </Button>
                    </HoverCardTrigger>
                    <Dialog>
                        <HoverCardContent className="w-[479px] p-0 border-none"
                        >
                            <UserCard/>
                        </HoverCardContent>
                        <DialogContent className="w-[768px] bg-background border-none">
                            <LoginDialog/>
                        </DialogContent>
                    </Dialog>
                </HoverCard>

            </div>
        </div>
    );
};

export default Navbar;
