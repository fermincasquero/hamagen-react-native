import texts from './texts.json';

const localeData: LocaleData = texts;

export interface LocaleData {
  languages: Languages,
  [languageKey: string]: Strings
}

export interface Languages {
  title: string,
  short: {
    [languageKey: string]: string
  },
  long: {
    [languageKey: string]: string
  }
}

export interface Strings {
  general: {
    start: string,
    additionalInfo: string
  },
  languages: {
    title: string,
    short: {
      [languageKey: string]: string
    },
    long: {
      [languageKey: string]: string
    }
  },
  forceUpdate: {
    title: string,
    desc: string
  },
  forceTerms: {
    title: string,
    desc: string,
    approve: string
  },
  welcome: {
    title: string,
    subTitle1: string,
    subTitle2: string
  },
  location: {
    title: string,
    subTitle1: string,
    subTitle2IOS: string,
    subTitle2Android: string,
    dataAnonymous: string,
    consent1: string,
    consent2: string,
    approveLocation: string
  },
  locationIOS: {
    title: string,
    subTitle1: string,
    subTitle2: string,
    goToSettings: string,
    set: string
  },
  notifications: {
    title: string,
    subTitle1: string,
    subTitle2: string,
    approveNotifications: string
  },
  allSet: {
    allGood: string
  },
  scanHome: {
    hasData: string,
    noData: string,
    exposureHistory: string,
    noDataDesc: string,
    noExposure: string,
    noExposure1: string,
    noExposure2: string,
    noExposure3: string,
    noExposure4: string,
    accordingToData: string,
    from: string,
    at: string,
    until: string,
    notFound: string,
    recommendation: string,
    found: string,
    exposureEvents: string,
    reportedAt: string,
    inDate: string,
    fromHour: string,
    toHour: string,
    wereYouThere: string,
    no: string,
    canContinue: string,
    yes: string,
    needDirections: string
  },
  exposuresHistory: {
    title: string,
    noExposures: string
  },
  exposureInstructions: {
    title: string,
    weUnderstand: string,
    wrong: string,
    keepSafe: string,
    goIntoIsolation: string,
    reportIsolation: string,
    allInstructions: string,
    reportSite: string
  },
  locationHistory: {
    beforeCheckTitle: string,
    beforeCheckDesc: string,
    beforeCheckDesc2: string,
    beforeCheckButton: string,
    skip: string,
    successFoundTitle: string,
    successFoundDesc: string,
    successFoundButton: string,
    successNotFoundTitle: string,
    successNotFoundDesc: string,
    successNotFoundButton: string,
    failedTitle: string,
    failedDesc: string,
    failedButton: string,
    info: string,
    moreInfo: string
  }
}

export default localeData;
