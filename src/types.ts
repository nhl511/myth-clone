interface menuHeaderItem {
    MENU_ID: number;
    TITLE: string;
    URL: string;
    LOGO: string;
    LOGO_FOCUS: string;
    SUB_MENU: subMenuItem[];
    LIST_CATES: listCateItem[];
}

interface trailerItem {
    CONTENT_ID: number;
    CONTENT_NAME: string;
    CONTENT_NAME_IMAGE: string;
    CONTENT_DESC: string;
    CONTENT_PUBLISH_YEAR: number;
    CONTENT_COUNTRY: string;
    CONTENT_DURATION: string;
    CONTENT_AGE: string;
    WEBAPP_MAIN_IMAGE: string;
    WEBAPP_BACKGROUND_IMAGE: string;
}

interface subMenuItem {
    MENU_ID: number;
    TITLE: string;
    URL: string;
}

interface listCateItem {
    CATE_ID: number;
    CATE_NAME: string;
}

interface homeItem {
    CATE_ID: number;
    CATE_NAME: string;
    data: homeDataItem[];
    KEYWORD: string;
    VIEW_MORE: number;
}

export interface homeDataItem {
    CONTENT_ID: number;
    CONTENT_NAME: string;
    VIEW_COUNT: string;
    CONTENT_PUBLISH_YEAR: string;
    LOCKED_LEVEL: string;
    CONTENT_HOR_POSTER: string;
    CONTENT_VER_POSTER: string;
    START_TIME: string;
    IS_LIVE: number;
    TYPE_CONTENT_DATA: number;
    TOTAL_EPISODE: number;
    IS_MYLIST: number;
    TRAILER_PATH: string;
}

interface mytvRecommendedItem {
    CONTENT_ID: number;
    CONTENT_NAME: string;
    CONTENT_NAME_IMAGE: string;
    CONTENT_DESC: string;
    CONTENT_VER_POSTER: string;
    CONTENT_HOR_POSTER: string;
    TRAILER_PATH: string;
}

export interface upCommingItem {
    CONTENT_ID: number;
    CONTENT_VER_POSTER: string;
    START_TIME: string;
}

interface searchDataItem {
    CONTENT_ID: number;
    CONTENT_HOR_POSTER: string;
    CONTENT_NAME: string;
    CONTENT_PUBLISH_YEAR: string;
    CONTENT_DURATION: string;
    CONTENT_COUNTRY: string;
    LOCKED_LEVEL: string;
}

interface search {
    title: string;
    data: searchDataItem[];
}

interface productItem {
    PRODUCT_ID: number;
    PRODUCT_NAME: string;
    PRODUCT_DESC: string;
    PRICE: number;
    BANNER: string;
}

interface product {
    group_id: number;
    group_name: string;
    products: productItem[];
}

export interface suggestionItem {
    term: string;
}

export interface countryItem {
    C_ID: number;
    C_NAME_VN: string;
}

export interface contentTypeItem {
    TYPE_ID: number;
    TYPE_NAME: string;
}

export interface searchItem {
    CONTENT_ID: number;
    CONTENT_HOR_POSTER: string;
}

export enum hoverCardTypes {
    addToList = 1,
    booking = 2,
}
