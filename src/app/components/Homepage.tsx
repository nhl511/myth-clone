"use client";
import React, { useCallback, useEffect, useState } from "react";
import HomeItem from "./HomeItem";
import { getHome } from "@/services/apis/homePage.service";
import { useInView } from "react-intersection-observer";
import SkeletonCardHasTitle from "./SkeletonCardHasTitle";
import SkeletonHomepageItem from "./SkeletonHomepageItem";

const Homepage = ({ home }: { home: homeItem[] }) => {
  const [homeItems, setHomeItems] = useState<any>(home);
  const [page, setPage] = useState(2);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [scrollTrigger, isInView] = useInView();

  // const fetcher = async () => {
  //   const result = await getHome(1);
  //   return result;
  // };
  // const { data, isLoading } = useSWR("HomePage=1", fetcher);

  const loadMoreHomeItems = useCallback(async () => {
    const result = await getHome(page);
    if (result?.length === 0) {
      setHasMoreData(false);
    }
    setHomeItems((prevHomeItems: any) => [...prevHomeItems, ...result]);
    setPage((prevPage) => prevPage + 1);
    console.log(page);
  }, [page]);

  useEffect(() => {
    if (home?.length !== 0) {
      setHomeItems(home);
      setPage(2);
      setHasMoreData(true);
    }
  }, [home]);

  useEffect(() => {
    if (isInView && hasMoreData) loadMoreHomeItems();
  }, [isInView, hasMoreData]);

  return (
    <div className="absolute z-40 top-[60%] left-0 right-0">
      <div className="mx-[48px] flex flex-col gap-6">
        {homeItems?.map((homeItem: homeItem) => (
          <HomeItem homeItem={homeItem} />
        ))}
      </div>
      {hasMoreData && (
        <div
          ref={scrollTrigger}
          className="mx-[48px] flex flex-col gap-6 mt-10"
        >
          <SkeletonHomepageItem />
          <div className="w-full flex gap-4">
            <SkeletonCardHasTitle />
            <SkeletonCardHasTitle />
            <SkeletonCardHasTitle />
            <SkeletonCardHasTitle />
            <SkeletonCardHasTitle />
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
