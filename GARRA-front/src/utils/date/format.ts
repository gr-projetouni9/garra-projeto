export const formatDate = (date?: string) => {
  const us = date?.split('T')[0].split('-')
  if (us) return `${us[2]}/${us[1]}/${us[0]}`
  return date
}
