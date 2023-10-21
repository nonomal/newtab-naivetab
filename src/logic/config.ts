import pkg from '../../package.json'

const UI_LANGUAGE = chrome.i18n.getUILanguage()
const CURR_LANG = UI_LANGUAGE || 'en-US'

export const defaultConfig = {
  general: {
    isFirstOpen: true,
    version: pkg.version,
    appearance: 'auto' as 'light' | 'dark' | 'auto',
    pageTitle: 'NaiveTab',
    lang: CURR_LANG,
    drawerPlacement: 'right' as 'left' | 'right',
    openPageFocusElement: 'root',
    isLoadPageAnimationEnabled: false,
    isBackgroundImageEnabled: true,
    backgroundImageSource: 1 as 0 | 1 | 2, // 0:localFile, 1:network, 2:Photo of the Day
    backgroundImageHighQuality: false,
    backgroundImageNames: ['ChukchiSea_ZH-CN7218471261', 'DolomitesMW_ZH-CN3307894335'],
    backgroundImageDescs: [
      '楚科奇海的浮游植物水华，美国阿拉斯加州海岸附近 (© Norman Kuring/Kathryn Hansen/U.S. Geological Survey/NASA)',
      '多洛米蒂山上空的银河，意大利 (© Carlos Fernandez/Getty Images)',
    ],
    isBackgroundImageCustomUrlEnabled: false,
    backgroundImageCustomUrls: ['https://cn.bing.com/th?id=OHR.ChukchiSea_ZH-CN7218471261_1920x1080.jpg', 'https://cn.bing.com/th?id=OHR.DolomitesMW_ZH-CN3307894335_1920x1080.jpg'],
    favoriteImageList: [
      {
        name: 'ChukchiSea_ZH-CN7218471261',
        desc: '楚科奇海的浮游植物水华，美国阿拉斯加州海岸附近 (© Norman Kuring/Kathryn Hansen/U.S. Geological Survey/NASA)',
      },
      {
        name: 'DolomitesMW_ZH-CN3307894335',
        desc: '多洛米蒂山上空的银河，意大利 (© Carlos Fernandez/Getty Images)',
      },
      {
        name: 'YosemiteNightSky_ZH-CN5864740024',
        desc: '半穹顶景观点上空的银河，优胜美地国家公园，加利福尼亚州 (© Cory Marshall/Tandem Stills + Motion)',
      },
      {
        name: 'LavaTube_ZH-CN5458469336',
        desc: '漏出“天窗”的熔岩管，夏威夷火山国家公园 (© Tom Schwabel/Tandem Stills + Motion)',
      },
      {
        name: 'YurisNight_ZH-CN5738817931',
        desc: '宇航员杰夫·威廉姆斯在国际空间站拍摄到的地球 (© Jeff Williams/NASA)',
      },
      {
        name: 'PrathameshJaju_ZH-CN2207606082',
        desc: '月球的高清合成影像 (© Prathamesh Jaju)',
      },
      {
        name: 'ChurchillBears_ZH-CN1430090934',
        desc: '好奇地看着相机的北极熊，加拿大丘吉尔镇 (© Matthias Breiter/Minden Pictures)',
      },
      {
        name: 'WinterHalo_ZH-CN0666553211',
        desc: '厄尔士山脉上的光晕，德国萨克森州 (© Martin Ruegner/Getty Images)',
      },
      {
        name: 'DarwinsArch_ZH-CN9740478501',
        desc: '达尔文岛的达尔文拱门，厄瓜多尔加拉帕戈斯 (© miralex/Getty Images)',
      },
      {
        name: 'PoetrysCave_ZH-CN3196193909',
        desc: '鸟瞰罗卡附近的Grotta della Poesia，意大利莱切 (© Amazing Aerial Agency/Offset by Shutterstock)',
      },
      {
        name: 'Balsamroot_ZH-CN9456182640',
        desc: '山下盛开的箭叶脂根菊，美国大提顿国家公园 (© Mike Cavaroc/Tandem Stills + Motion)',
      },
      {
        name: 'HalfwayDay_ZH-CN1333459630',
        desc: '分隔两个湖泊的公路，苏格兰高地 (© Abstract Aerial Art/Getty Images)',
      },
    ],
    layout: {
      xOffsetKey: 'right',
      xOffsetValue: 1,
      xTranslateValue: 0,
      yOffsetKey: 'top',
      yOffsetValue: 50,
      yTranslateValue: -50,
    },
    fontFamily: 'Arial',
    fontSize: 14,
    fontColor: ['rgba(44, 62, 80, 1)', 'rgba(255, 255, 255, 1)'],
    primaryColor: ['rgba(16, 152, 173, 1)', 'rgba(16, 152, 173, 1)'],
    backgroundColor: ['rgba(53, 54, 58, 1)', 'rgba(53, 54, 58, 1)'],
    bgOpacity: 1,
    bgBlur: 0,
  },
  bookmark: {
    enabled: false,
    isListenBackgroundKeystrokes: true,
    isDblclickOpen: false,
    dblclickIntervalTime: 200, // ms
    isNewTabOpen: false,
    isNameVisible: true,
    keymap: {
      KeyQ: {
        url: 'www.baidu.com',
        name: '',
      },
      KeyW: {
        url: 'www.weibo.com',
        name: 'weibo',
      },
      KeyE: {
        url: 'www.toutiao.com',
        name: '',
      },
      KeyR: {
        url: 'www.draw.io',
        name: '',
      },
      KeyT: {
        url: 'stackblitz.com',
        name: '',
      },
      KeyA: {
        url: 'www.taobao.com',
        name: '',
      },
      KeyS: {
        url: 'www.jd.com',
        name: '',
      },
      KeyD: {
        url: 'www.douban.com',
        name: '',
      },
      KeyG: {
        url: 'www.google.com',
        name: '',
      },
      KeyZ: {
        url: 'www.zhihu.com',
        name: '',
      },
      KeyX: {
        url: 'www.v2ex.com',
        name: '',
      },
      KeyV: {
        url: 'www.douyin.com',
        name: '',
      },
      KeyB: {
        url: 'www.bilibili.com',
        name: '',
      },
      KeyN: {
        url: 'www.youku.com',
        name: '',
      },
      KeyM: {
        url: 'v.qq.com',
        name: 'tencent',
      },
    },
    layout: {
      xOffsetKey: 'left',
      xOffsetValue: 50,
      xTranslateValue: -50,
      yOffsetKey: 'top',
      yOffsetValue: 1,
      yTranslateValue: 0,
    },
    keyboardType: 61 as 'hhkb' | number,
    keycapType: 'gmk',
    keycapPadding: 1.5,
    keycapSize: 60,
    keycapKeyFontFamily: 'OpenCherry',
    keycapKeyFontSize: 12,
    keycapBookmarkFontFamily: 'Arial',
    keycapBookmarkFontSize: 12,
    mainFontColor: ['rgba(34,34,34,1.0)', 'rgba(228,222,221,1.0)'],
    mainBackgroundColor: ['rgba(255, 255, 255, 1)', 'rgba(95,92,82,1.0)'],
    emphasisOneFontColor: ['rgba(255, 255, 255, 0.9)', 'rgba(228,222,221,1.0)'],
    emphasisOneBackgroundColor: ['rgba(55,54,52,1.0)', 'rgba(51,52,48,1.0)'],
    emphasisTwoFontColor: ['rgba(255, 255, 255, 0.9)', 'rgba(228,222,221,1.0)'],
    emphasisTwoBackgroundColor: ['rgba(34, 34, 34, 1)', 'rgba(51,52,48,1.0)'],
    isBorderEnabled: false,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: ['rgba(71,85,105, 1)', 'rgba(73, 73, 77, 1)'],
  },
  clockDigital: {
    enabled: true,
    format: 'HH:mm:ss',
    unitEnabled: false,
    layout: {
      xOffsetKey: 'left',
      xOffsetValue: 50,
      xTranslateValue: -50,
      yOffsetKey: 'top',
      yOffsetValue: 50,
      yTranslateValue: -50,
    },
    fontFamily: 'LESLIEB',
    fontSize: 90,
    letterSpacing: 1.5,
    fontColor: ['rgba(228, 228, 231, 1)', 'rgba(228, 228, 231, 1)'],
    isShadowEnabled: true,
    shadowColor: ['rgba(33, 33, 33, 1)', 'rgba(33, 33, 33, 1)'],
    unit: {
      fontSize: 35,
    },
  },
  clockAnalog: {
    enabled: false,
    layout: {
      xOffsetKey: 'left',
      xOffsetValue: 50,
      xTranslateValue: -50,
      yOffsetKey: 'top',
      yOffsetValue: 25,
      yTranslateValue: 0,
    },
    width: 150,
  },
  date: {
    enabled: true,
    format: 'YYYY-MM-DD dddd',
    layout: {
      xOffsetKey: 'left',
      xOffsetValue: 50,
      xTranslateValue: -50,
      yOffsetKey: 'top',
      yOffsetValue: 57,
      yTranslateValue: 0,
    },
    fontFamily: 'LESLIEB',
    fontSize: 30,
    letterSpacing: 1,
    fontColor: ['rgba(228, 228, 231, 1)', 'rgba(228, 228, 231, 1)'],
    isShadowEnabled: true,
    shadowColor: ['rgba(33, 33, 33, 1)', 'rgba(33, 33, 33, 1)'],
  },
  calendar: {
    enabled: true,
    weekBeginsOn: 1, // 1 monday, 7 sunday
    layout: {
      xOffsetKey: 'right',
      xOffsetValue: 0,
      xTranslateValue: 0,
      yOffsetKey: 'bottom',
      yOffsetValue: 0,
      yTranslateValue: 0,
    },
    width: 50,
    borderRadius: 4,
    fontFamily: 'Arial',
    fontSize: 14,
    fontColor: ['rgba(44, 62, 80, 1)', 'rgba(255, 255, 255, 1)'],
    backgroundColor: ['rgba(255, 255, 255, 1)', 'rgba(52, 52, 57, 1)'],
    backgroundActiveColor: ['rgba(250, 82, 82, 0.7)', 'rgba(250, 82, 82, 0.7)'],
    isBorderEnabled: false,
    borderWidth: 1,
    borderColor: ['rgba(239, 239, 245, 1)', 'rgba(73, 73, 77, 1)'],
    isShadowEnabled: true,
    shadowColor: ['rgba(14, 30, 37, 0.12)', 'rgba(14, 30, 37, 0.12)'],
    holidayFontColor: ['rgba(250, 82, 82, 1)', 'rgba(250, 82, 82, 1)'],
    restFontColor: ['rgba(44, 62, 80, 1)', 'rgba(53, 54, 58, 1)'],
    restItemBackgroundColor: ['rgba(213, 255, 203, 0.8)', 'rgba(169, 180, 156, 1)'],
    restLabelFontColor: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)'],
    restLabelBackgroundColor: ['rgba(32, 146, 0, 1)', 'rgba(32, 146, 0, 1)'],
    workFontColor: ['rgba(44, 62, 80, 1)', 'rgba(53, 54, 58, 1)'],
    workItemBackgroundColor: ['rgba(255, 221, 221, 1)', 'rgba(218, 181, 181, 1)'],
    workLabelFontColor: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)'],
    workLabelBackgroundColor: ['rgba(250, 82, 82, 1)', 'rgba(250, 82, 82, 1)'],
  },
  search: {
    enabled: true,
    iconEnabled: true,
    suggestionEnabled: true,
    placeholder: '',
    urlName: 'Baidu',
    urlValue: 'https://www.baidu.com/s?word={query}',
    layout: {
      xOffsetKey: 'left',
      xOffsetValue: 50,
      xTranslateValue: -50,
      yOffsetKey: 'bottom',
      yOffsetValue: 30,
      yTranslateValue: 0,
    },
    padding: 25,
    width: 400,
    height: 45,
    borderRadius: 5.5,
    fontFamily: 'Arial',
    fontSize: 18,
    fontColor: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)'],
    isBorderEnabled: true,
    borderWidth: 1,
    borderColor: ['rgba(101, 101, 101, 0.28)', 'rgba(71,85,105, 1)'],
    backgroundColor: ['rgba(152, 152, 152, 0.2)', 'rgba(74, 74, 74, 0.1)'],
    isShadowEnabled: true,
    shadowColor: ['rgba(31, 31, 31, 0.5)', 'rgba(31, 31, 31, 0.5)'],
  },
  memo: {
    enabled: false,
    countEnabled: true,
    content: '',
    layout: {
      xOffsetKey: 'right',
      xOffsetValue: 20,
      xTranslateValue: 0,
      yOffsetKey: 'top',
      yOffsetValue: 20,
      yTranslateValue: 0,
    },
    width: 200,
    height: 200,
    borderRadius: 4,
    fontFamily: 'Arial',
    fontSize: 14,
    fontColor: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)'],
    isBorderEnabled: true,
    borderWidth: 1,
    borderColor: ['rgba(101, 101, 101, 0.28)', 'rgba(71,85,105, 1)'],
    backgroundColor: ['rgba(152, 152, 152, 0.2)', 'rgba(24, 24, 24, 0.3)'],
    isShadowEnabled: true,
    shadowColor: ['rgba(31, 31, 31, 0.5)', 'rgba(31, 31, 31, 0.5)'],
  },
  weather: {
    enabled: false,
    apiKey: '72db57326f9f494ab04d1d431bc127e9',
    city: {
      id: '101010300', // 101010300
      name: '中国-北京市-北京-朝阳', // "中国-北京市-北京-朝阳"
    },
    temperatureUnit: 'c', // 'c' | 'f'
    speedUnit: 'kph', // 'kph' | 'mph'
    iconEnabled: true,
    forecastEnabled: false,
    layout: {
      xOffsetKey: 'left',
      xOffsetValue: 50,
      xTranslateValue: -50,
      yOffsetKey: 'bottom',
      yOffsetValue: 5,
      yTranslateValue: 0,
    },
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 14,
    fontColor: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)'],
    iconSize: 50,
  },
  news: {
    enabled: false,
    sourceList: ['toutiao', 'baidu'] as NewsSources[],
    refreshIntervalTime: 90,
    layout: {
      xOffsetKey: 'left',
      xOffsetValue: 0,
      xTranslateValue: 0,
      yOffsetKey: 'bottom',
      yOffsetValue: 0,
      yTranslateValue: 0,
    },
    margin: 6,
    width: 370,
    height: 340,
    borderRadius: 4,
    fontFamily: 'Arial',
    fontSize: 14,
    fontColor: ['rgba(15, 23, 42, 1)', 'rgba(255, 255, 255, 1)'],
    fontActiveColor: ['rgba(36, 64, 179, 1)', 'rgba(155, 177, 254, 1)'],
    backgroundColor: ['rgba(255, 255, 255, 1)', 'rgba(52, 52, 57, 1)'],
    backgroundActiveColor: ['rgba(239, 239, 245, 1)', 'rgba(73, 73, 77, 1)'],
    isBorderEnabled: true,
    borderWidth: 1,
    borderColor: ['rgba(239, 239, 245, 1)', 'rgba(73, 73, 77, 1)'],
    isShadowEnabled: true,
    shadowColor: ['rgba(14, 30, 37, 0.12)', 'rgba(14, 30, 37, 0.12)'],
  },
}

export const defaultLocalState = {
  currAppearanceLabel: 'light' as 'light' | 'dark',
  currAppearanceCode: 0 as 0 | 1, // 0:light | 1:dark
  isUploadConfigStatusMap: {
    general: {
      loading: false,
      syncTime: 0,
      syncId: '',
    },
    bookmark: {
      loading: false,
      syncTime: 0,
      syncId: '',
    },
    clockDigital: {
      loading: false,
      syncTime: 0,
      syncId: '',
    },
    clockAnalog: {
      loading: false,
      syncTime: 0,
      syncId: '',
    },
    date: {
      loading: false,
      syncTime: 0,
      syncId: '',
    },
    calendar: {
      loading: false,
      syncTime: 0,
      syncId: '',
    },
    search: {
      loading: false,
      syncTime: 0,
      syncId: '',
    },
    weather: {
      loading: false,
      syncTime: 0,
      syncId: '',
    },
    memo: {
      loading: false,
      syncTime: 0,
      syncId: '',
    },
    news: {
      loading: false,
      syncTime: 0,
      syncId: '',
    },
  },
}
