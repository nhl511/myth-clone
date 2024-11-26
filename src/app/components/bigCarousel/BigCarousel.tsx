import React from 'react';
import {ChevronLeft, ChevronRight} from "lucide-react";


const BigCarousel = ({children, setSlide, slide, dataLength, setDirectionAnimating}: {
    children: React.ReactNode,
    setSlide: any,
    slide: number,
    dataLength: number,
    setDirectionAnimating: any
}) => {

    React.useEffect(() => {
        const timeerId = setInterval(() => {
            nextSlide()
        }, 3000)
        return () => clearInterval(timeerId)
    })

    const nextSlide = () => {
        setSlide(slide === dataLength - 1 ? 0 : slide + 1);
        setDirectionAnimating("left");

    }
    const prevSlide = () => {
        setSlide(slide === 0 ? dataLength - 1 : slide - 1);
        setDirectionAnimating("right");
    }

    return (
        <div className="relative flex justify-center items-center w-full h-[690px] overflow-hidden">
            {
                children
            }
            <div
                className="absolute z-30 top-0 w-full h-full bg-gradient-to-r from-[#121212]/100 to-transparent via-[#121212]/5">
            </div>

            <div className="absolute top-1/2 w-full flex justify-between z-50 text-foreground">
                <ChevronLeft
                    style={{width: "40px", height: "40px"}}
                    strokeWidth={3}
                    className="hover:text-primary-foreground cursor-pointer"
                    onClick={prevSlide}
                />
                <ChevronRight
                    style={{width: "40px", height: "40px"}}
                    strokeWidth={3}
                    className="hover:text-primary-foreground cursor-pointer"
                    onClick={nextSlide}
                />
            </div>
            <div
                className="absolute bottom-0 w-full h-full z-30"
                style={{background: "linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(18,18,18,0) 25%)"}}
            >
            </div>
        </div>
    );
};

export default BigCarousel;