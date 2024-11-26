"use client"
import React from 'react';
import Image from "next/image";

const Splash = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timerId = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(timerId)
    }, [])


    React.useEffect(() => {
        if (loading)
            document.body.style.overflow = "hidden";

    }, []);


    return (
        <div
            className={`w-full h-screen bg-background fixed z-50 top-0 flex justify-center items-center transition-all duration-700 ${!loading ? "opacity-0 invisible" : "opacity-100 visible"}`}>
            <div className="w-[217px] h-[178px] relative">
                <Image src="/images/MyTV_large_logo.png" alt="" fill
                       className={`transition-opacity duration-300 ${!loading ? "opacity-0" : "opacity-100"}`}
                       priority
                />
            </div>
        </div>
    );
};

export default Splash;