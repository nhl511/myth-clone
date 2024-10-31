import { convertNameToSlug } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ListCateItem = ({
  listCateItem,
  url,
}: {
  listCateItem: listCateItem;
  url: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={convertNameToSlug({
        prefix: url,
        cateName: listCateItem.CATE_NAME,
      })}
    >
      <p
        className={`py-4 pl-12 hover:bg-menu-item-hover 
        ${
          pathname ===
            convertNameToSlug({
              prefix: url,
              cateName: listCateItem.CATE_NAME,
            }) && "text-primary-foreground"
        }
        `}
      >
        {listCateItem.CATE_NAME}
      </p>
    </Link>
  );
};

export default ListCateItem;
