const daysHavePassed = (date: Date): number => (new Date().getTime() - date?.getTime()) / 24 / 3600 / 1000

export {
  daysHavePassed
}