export type langType = keyof typeof langConfig

const toConf = {
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

export const langConfig = {
  en: {
    name: 'English',
    short: 'en',
    dir: 'ltr',
    to: (date: Date) => date.toLocaleDateString('en-US', toConf),
    toTime: (date: Date) => new Intl.DateTimeFormat('en-US', timeConf).format(date),
    calendarType: 'iso8601',
    currencySymbol: '$',
    convertNumber: (num: number, currency?: boolean) => {
      if (currency) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num)
      }

      return num.toLocaleString('en-US')
    }
  },
  fa: {
    name: 'Persian',
    short: 'fa',
    dir: 'rtl',
    to: (date: Date) => date.toLocaleDateString('fa-IR', toConf),
    toTime: (date: Date) => new Intl.DateTimeFormat('fa-IR', timeConf).format(date),
    calendarType: 'islamic',
    currencySymbol: 'تومان',
    convertNumber: (num: number, currency?: boolean) => {
      if (currency) {
        const formattedNumber = new Intl.NumberFormat('fa-IR', {
          style: 'currency',
          currency: 'IRR'
        }).format(num)

        return formattedNumber.replace('ریال', 'تومان') // replace ریا ل with تومان
      }

      return num.toLocaleString('fa-IR')
    }
  }
}
