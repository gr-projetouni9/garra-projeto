export const size = {
  size: (value: string | number) => ({ width: value, height: value }),
  minSize: (value: string | number) => ({ minWidth: value, minHeight: value }),
  maxSize: (value: string | number) => ({ minWidth: value, minHeight: value }),
  windowSize: (value: string | number) => ({
    width: `${value}vw`,
    height: `${value}vh`
  })
}
