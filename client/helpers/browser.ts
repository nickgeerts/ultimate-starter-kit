export default class browser {
  static iOS(userAgent: string) {
    return /(ipod|iphone|ipad)/i.test(userAgent)
  }

  static touch(userAgent: string) {
    return this.mobile(userAgent) || this.tablet(userAgent)
  }

  static mobile(userAgent: string) {
    return !this.tablet(userAgent) && /[^-]mobi/i.test(userAgent)
  }

  static tablet(userAgent: string) {
    return /tablet/i.test(userAgent) && !/tablet pc/i.test(userAgent)
  }
}
