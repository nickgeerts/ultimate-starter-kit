export default function classNames(params: { [index: string]: boolean }) {
  const keys = Object.keys(params)
  const validKeys: Array<string> = []

  keys.forEach(key => {
    if (params[key]) validKeys.push(key)
  })
  return validKeys.join(' ')
}
