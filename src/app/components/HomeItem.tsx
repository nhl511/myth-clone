"use client";
import {
    Carousel,
    CarouselApi,
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
import BigVideoCard from "@/app/components/bigVideoCard/BigVideoCard";
import CardsWithTimelines from "@/app/components/cardWithTimeline/CardsWithTimelines";
import {ChevronRight} from "lucide-react";
import MyHoverCardTrigger from "@/components/myHoverCardTrigger/MyHoverCardTrigger";
import {homeDataItem, hoverCardTypes} from "@/types";
import {EmblaCarouselType} from "embla-carousel";

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
    mattroilucnuadem = "cate_2_638",
    mytvRecommended = "mytv_recommend",
    suKienTrucTiep = "cate_2_529",
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
    Keyword.mattroilucnuadem

];
const keywordsOfLiveCard: string[] = [
    Keyword.live,
    Keyword.chuongTrinhTruyenHinh,
    Keyword.theThaoTrucTiep,
    Keyword.suKienTrucTiep
];
const keywordsOfChannelCard: string[] = [Keyword.channel];
const keywordsOfTop10Card: string[] = [Keyword.top10];
const keywordsOfBigVideoCard: string[] = [Keyword.mytvRecommended]
const keywordsOfCardsWithTimeline: string[] = [Keyword.sapPhatSong]


const HomeItem = ({homeItem}: { homeItem: homeItem }) => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [slidesInView, setSlidesInView] = React.useState<number[]>([])

    const updateSlidesInView = React.useCallback((emblaApi: EmblaCarouselType) => {
        setSlidesInView((slidesInView) => {
            if (slidesInView.length === emblaApi.slideNodes().length) {
                emblaApi.off('slidesInView', updateSlidesInView)
            }
            const inView = emblaApi
                .slidesInView()
                .filter((index) => !slidesInView.includes(index))
            return slidesInView.concat(inView)
        })
    }, [])

    React.useEffect(() => {
        if (!api) return

        updateSlidesInView(api)
        api.on('slidesInView', updateSlidesInView)
        api.on('reInit', updateSlidesInView)
    }, [api, updateSlidesInView])
    return (
        <div className="w-full relative">
            <div
                className="group flex items-center justify-between text-primary-foreground transition-all duration-500 hover:text-primary mb-4 mt-6">
                <div className="flex items-center">
                    <h1 className="text-2xl font-black">
                        {homeItem.CATE_NAME}
                    </h1>
                    <ChevronRight
                        className="text-primary translate-x-[-15px] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"/>
                </div>

                {homeItem.VIEW_MORE === viewMoreStatus.yes && (
                    <p className="text-primary font-bold">Xem tất cả</p>
                )}
            </div>
            {
                keywordsOfBigVideoCard.includes(homeItem.KEYWORD) ?
                    (
                        <BigVideoCard/>
                    ) : keywordsOfCardsWithTimeline.includes(homeItem.KEYWORD) ? (
                        <CardsWithTimelines/>
                    ) : (
                        <Carousel setApi={setApi} opts={{slidesToScroll: 5}} className="w-full relative">
                            <CarouselContent className="mt-2">
                                {homeItem?.data?.map((item: homeDataItem, index: number) =>
                                    keywordsOfCardHasView.includes(homeItem.KEYWORD) ? (
                                        <CarouselItem className="basis-1/5">
                                            {item.TYPE_CONTENT_DATA > 0 ? (
                                                <MyHoverCardTrigger type={hoverCardTypes.addToList}>
                                                    <AlbumCard homeDataItem={item}
                                                               inView={slidesInView.indexOf(index) > -1}
                                                    />
                                                </MyHoverCardTrigger>
                                            ) : (
                                                <MyHoverCardTrigger type={hoverCardTypes.addToList}>
                                                    <CardHasView homeDataItem={item}
                                                                 inView={slidesInView.indexOf(index) > -1}

                                                    />
                                                </MyHoverCardTrigger>
                                            )}
                                        </CarouselItem>
                                    ) : keywordsOfAlbumCard.includes(homeItem.KEYWORD) ? (
                                        <CarouselItem className="basis-1/5">
                                            <MyHoverCardTrigger type={hoverCardTypes.addToList}>
                                                <AlbumCard homeDataItem={item} inView={slidesInView.indexOf(index) > -1}
                                                />
                                            </MyHoverCardTrigger>
                                        </CarouselItem>
                                    ) : keywordsOfLiveCard.includes(homeItem.KEYWORD) ? (
                                        <CarouselItem className="basis-1/4">
                                            <LiveCard homeDataItem={item}/>
                                        </CarouselItem>
                                    ) : keywordsOfChannelCard.includes(homeItem.KEYWORD) ? (
                                        <CarouselItem className="basis-1/5">
                                            <ChannelCard homeDataItem={item}/>
                                        </CarouselItem>
                                    ) : keywordsOfTop10Card.includes(homeItem.KEYWORD) ? (
                                        <CarouselItem className="basis-1/5">
                                            <Top10Card homeDataItem={item} index={index + 1}
                                                       inView={slidesInView.indexOf(index) > -1}/>
                                        </CarouselItem>
                                    ) : (
                                        <CarouselItem className="basis-1/5">
                                            <MyHoverCardTrigger type={hoverCardTypes.addToList}>
                                                <CardHasTitle homeDataItem={item}
                                                              inView={slidesInView.indexOf(index) > -1}/>
                                            </MyHoverCardTrigger>
                                        </CarouselItem>
                                    )
                                )}
                            </CarouselContent>
                            <CarouselPrevious/>
                            <CarouselNext/>
                        </Carousel>
                    )
            }

        </div>
    );
};

export default HomeItem;
