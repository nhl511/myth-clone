import React, {useEffect, useRef} from 'react';
import {useStore} from "@/zustand/store";
import {hoverCardTypes} from "@/types";

const MyHoverCardTrigger = ({children, type}: { children: React.ReactNode, type: hoverCardTypes }) => {
    const elementRef = useRef<any>(null);
    const {setCoordinate, setIsShowHover, setHoverData, setHoverCardType} = useStore();
    let timerId = useRef<any>(null);
    const [childData, setChildData] = React.useState(null);

    const handleChildData = (data) => {
        setChildData(data);
    };

    const handleMouseEnter = () => {
        clearTimeout(timerId.current);

        timerId.current = setTimeout(() => {
            setHoverCardType(type)
            setHoverData(childData)
            const rect = elementRef.current.getBoundingClientRect();
            const centerX = rect.x + (rect.width - 300) / 2;
            const centerY = rect.y + (rect.height - 286) / 2;
            setCoordinate(centerX, centerY);
            setIsShowHover(true);
        }, 1000);

    };

    const handleMouseLeave = () => {
        clearTimeout(timerId.current);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleMouseLeave);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleMouseLeave);
        };
    }, []);
    return (
        <div
            ref={elementRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/*{children}*/}
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {sendDataToWrapper: handleChildData})
            )}
        </div>
    );
};

export default MyHoverCardTrigger;