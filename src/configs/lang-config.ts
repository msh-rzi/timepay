export type langType = keyof typeof langConfig

const dateConf = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  weekday: 'long'
} as const

const timeConf = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
} as const

const d = {
  toDate: (date: Date, locale: Intl.LocalesArgument) => date.toLocaleDateString(locale, dateConf),
  toTime: (date: Date, locale: Intl.LocalesArgument) => new Intl.DateTimeFormat(locale, timeConf).format(date),
  formatNumber: (locale: string, currencySymbol: string | null) => (num: number, currency?: boolean) => {
    const options = currency ? { style: 'currency', currency: currencySymbol } : undefined

    const formattedNumber = new Intl.NumberFormat(locale, options as any).format(num)

    return currencySymbol && locale === 'fa-IR' ? formattedNumber.replace('ریال', 'تومان') : formattedNumber
  }
}

export const langConfig = {
  en: {
    name: 'English',
    short: 'en',
    dir: 'ltr',
    calendarType: 'iso8601',
    currencySymbol: '$',
    formatDate: (date: Date) => d.toDate(date, 'en-US'),
    formatTime: (date: Date) => d.toTime(date, 'en-US'),
    formatNumber: d.formatNumber('en-US', 'USD')
  },
  fa: {
    name: 'Persian',
    short: 'fa',
    dir: 'rtl',
    calendarType: 'islamic',
    currencySymbol: 'تومان',
    formatDate: (date: Date) => d.toDate(date, 'fa-IR'),
    formatTime: (date: Date) => d.toTime(date, 'fa-IR'),
    formatNumber: d.formatNumber('fa-IR', 'IRR')
  }
}
