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

interface homeDataItem {
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
}
