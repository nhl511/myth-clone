import {create} from "zustand";
import {hoverCardTypes} from "@/types";

export const useStore = create<any>((set) => ({
    isOpenExpandSidebar: true,
    coordinate: {
        x: undefined,
        y: undefined,
    },
    isShowHover: false,
    hoverData: null,
    hoverCardType: 0,
    setIsOpenExpandSidebar: (state: boolean) =>
        set({isOpenExpandSidebar: state}),

    setCoordinate: (x: number, y: number) => set({coordinate: {x, y}}),
    setIsShowHover: (state: boolean) => set({isShowHover: state}),
    setHoverData: (state: any) => set({hoverData: state}),
    setHoverCardType: (state: hoverCardTypes) => set({hoverCardType: state}),
}));
