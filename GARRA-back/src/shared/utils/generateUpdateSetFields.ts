export const generateUpdateSetFields = (data: object) => {
  const generated = []

  for (const [key, value] of Object.entries(data)) {
    const valueExists = value || String(value) === '0'
    valueExists && generated.push(`"${key}" = '${value}'`)
  }

  return generated.reduce(
    (prev, curr, index) =>
      `${prev} ${curr} ${index === generated.length - 1 ? '' : ','}`,
    ''
  )
}
