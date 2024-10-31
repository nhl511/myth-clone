import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = [
    {
      title: "Giới thiệu MyTV",
      path: "",
    },
    {
      title: "Tin tức",
      path: "",
    },
    {
      title: "Hướng dẫn sử dụng",
      path: "",
    },
    {
      title: "Thông tin khác",
      path: "",
    },
    {
      title: "Điều khoản và chính sách",
      path: "",
    },
    {
      title: "Truyền hình MyTV kèm Internet",
      path: "",
    },
  ];

  const socialLinks = [
    {
      src: "/images/fb.svg",
      path: "",
    },
    {
      src: "/images/tiktok.svg",
      path: "",
    },
    {
      src: "/images/youtube.svg",
      path: "",
    },
    {
      src: "/images/ig.svg",
      path: "",
    },
  ];
  return (
    <div className="flex flex-col gap-3 text-sm text-gray-500 w-[170px]">
      {links.map((link) => (
        <Link href={link.path}>
          <p className="truncate"> {link.title}</p>
        </Link>
      ))}
      <div className="flex gap-5 mt-2">
        {socialLinks.map((socialLink) => (
          <Image src={socialLink.src} alt="" width={24} height={24} />
        ))}
      </div>
      <div className="w-full h-[64px] relative overflow-hidden mt-2">
        <Image src="/images/verify.svg" alt="" fill objectFit="contain" />
      </div>
      <div className="flex flex-col gap-3 mt-2 text-gray-500">
        <p>
          Giấy phép cung cấp dịch vụ Phát thanh, Truyền hình trên mạng Internet
          số 401/GP-BTTT cấp ngày 23/9/2020
        </p>
        <p>
          Công ty Phát triển dịch vụ Truyền hình- Công ty Truyền hình MyTV Địa
          chỉ : Số 97 Nguyễn Chí Thanh - Đống Đa - Hà Nội
        </p>
        <p>
          Email : mytv@vnpt.vn <br /> Hotline 18001166
        </p>
        <p>Copyright © 2023 MyTV all rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
