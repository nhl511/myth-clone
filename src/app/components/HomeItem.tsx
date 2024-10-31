"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import CardHasView from "./CardHasView";
import CardHasTitle from "./CardHasTitle";
import LiveCard from "./LiveCard";
import ChannelCard from "./ChannelCard";
import AlbumCard from "./AlbumCard";
import Top10Card from "./Top10Card";

enum Keyword {
  thinhhanh = "thinh_hanh",
  test = "cate_2_612",
  live = "cate_2_588",
  channel = "kenh_ca_nhan",
  album = "album",
  top10 = "preview",
  gameShow = "1",
  phimSongSong = "cate_2_604",
  sapPhatSong = "sap_ra_mat",
  kenhThieuNhi = "4",
  coTheBanSeThich = "co_the_ban_se_thich",
  chuongTrinhTruyenHinh = "cate_2_605",
  haiKich = "2",
  ads = "cate_4_584",
  kenhPhim = "5",
  xemTiep = "watching",
  kplus = "cate_2_614",
  ads2 = "cate_4_610",
  phimHaiVn = "17",
  spotv = "spotv",
  ads3 = "cate_4_589",
  thieuNhiNgoanNhatVn = "cate_2_583",
  phimHanhDongCauHinhTay = "cate_2_573",
  haiTet = "3",
  hocBaiDiNe = "cate_2_600",
  theThaoTrucTiep = "cate_2_598",
  chumPhimHboSieuManh = "cate_2_599",
  hungTest = "cate_2_597",
  phimCoTrangTrungQuoc = "11",
  hocNgoaiNguTrenMyTv = "100",
  phimMoiNhat = "60",
  phimBoGalaxy = "72",
  haiMoiNhat = "85",
}

enum viewMoreStatus {
  yes = 1,
  no = 0,
}

const keywordsOfCardHasView: string[] = [Keyword.thinhhanh];
const keywordsOfAlbumCard: string[] = [Keyword.album];
const keywordsOfCardHasTitle: string[] = [
  Keyword.test,
  Keyword.gameShow,
  Keyword.phimSongSong,
  Keyword.sapPhatSong,
  Keyword.kenhThieuNhi,
  Keyword.coTheBanSeThich,
  Keyword.haiKich,
  Keyword.ads,
  Keyword.kenhPhim,
  Keyword.xemTiep,
  Keyword.kplus,
  Keyword.ads2,
  Keyword.phimHaiVn,
  Keyword.spotv,
  Keyword.ads3,
  Keyword.thieuNhiNgoanNhatVn,
  Keyword.phimHanhDongCauHinhTay,
  Keyword.haiTet,
  Keyword.hocBaiDiNe,
  Keyword.chumPhimHboSieuManh,
  Keyword.hungTest,
  Keyword.phimCoTrangTrungQuoc,
  Keyword.hocNgoaiNguTrenMyTv,
  Keyword.phimMoiNhat,
  Keyword.phimBoGalaxy,
  Keyword.haiMoiNhat,
];
const keywordsOfLiveCard: string[] = [
  Keyword.live,
  Keyword.chuongTrinhTruyenHinh,
  Keyword.theThaoTrucTiep,
];
const keywordsOfChannelCard: string[] = [Keyword.channel];
const keywordsOfTop10Card: string[] = [Keyword.top10];

const HomeItem = ({ homeItem }: { homeItem: homeItem }) => {
  return (
    homeItem?.data?.length > 0 && (
      <div className="w-full relative">
        <div className="flex items-center justify-between">
          <h1 className="text-primary-foreground text-2xl font-bold">
            {homeItem.CATE_NAME}
          </h1>
          {homeItem.VIEW_MORE === viewMoreStatus.yes && (
            <p className="text-[var(--primary-color)] font-bold">Xem tất cả</p>
          )}
        </div>
        <Carousel opts={{ slidesToScroll: 5 }} className="w-full relative">
          <CarouselContent className="mt-2">
            {homeItem?.data?.map((item: homeDataItem, index: number) =>
              keywordsOfCardHasView.includes(homeItem.KEYWORD) ? (
                <CarouselItem className="basis-1/5">
                  {item.TYPE_CONTENT_DATA > 0 ? (
                    <AlbumCard homeDataItem={item} />
                  ) : (
                    <CardHasView homeDataItem={item} />
                  )}
                </CarouselItem>
              ) : keywordsOfAlbumCard.includes(homeItem.KEYWORD) ? (
                <CarouselItem className="basis-1/5">
                  <AlbumCard homeDataItem={item} />
                </CarouselItem>
              ) : keywordsOfLiveCard.includes(homeItem.KEYWORD) ? (
                <CarouselItem className="basis-1/4">
                  <LiveCard homeDataItem={item} />
                </CarouselItem>
              ) : keywordsOfChannelCard.includes(homeItem.KEYWORD) ? (
                <CarouselItem className="basis-1/5">
                  <ChannelCard homeDataItem={item} />
                </CarouselItem>
              ) : keywordsOfTop10Card.includes(homeItem.KEYWORD) ? (
                <CarouselItem className="basis-1/5">
                  <Top10Card homeDataItem={item} index={index + 1} />
                </CarouselItem>
              ) : keywordsOfCardHasTitle.includes(homeItem.KEYWORD) ? (
                <CarouselItem className="basis-1/5">
                  <CardHasTitle homeDataItem={item} />
                </CarouselItem>
              ) : (
                ""
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
  );
};

export default HomeItem;
