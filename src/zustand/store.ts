import { create } from "zustand";

export const useStore = create<any>((set) => ({
  isOpenExpandSidebar: true,
  coordinate: {
    x: undefined,
    y: undefined,
  },
  isShowHover: false,
  hoverData: null,
  setIsOpenExpandSidebar: (state: boolean) =>
    set({ isOpenExpandSidebar: state }),

  setCoordinate: (x: number, y: number) => set({ coordinate: { x, y } }),
  setIsShowHover: (state: boolean) => set({ isShowHover: state }),
  setHoverData: (state: any) => set({ hoverData: state }),
}));
