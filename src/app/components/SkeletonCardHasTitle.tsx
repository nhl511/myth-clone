import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SkeletonCardHasTitle = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Skeleton className="w-full h-[120px]" />
      <Skeleton className="w-full h-[28px]" />
    </div>
  );
};

export default SkeletonCardHasTitle;
