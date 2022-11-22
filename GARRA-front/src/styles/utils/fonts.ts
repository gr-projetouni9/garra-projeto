export const fonts = {
  fontDecoration: (value: string) => {
    let fontStyle

    if (value.includes('italic')) fontStyle = 'italic'
    else if (value.includes('oblique')) fontStyle = 'oblique'
    else if (value.includes('normal')) fontStyle = 'normal'

    let textDecoration

    if (value.includes('overline') && value.includes('underline'))
      textDecoration = 'underline overline'
    else if (value.includes('underline')) textDecoration = 'underline'
    else if (value.includes('overline')) textDecoration = 'overline'
    else if (value.includes('line-through')) textDecoration = 'line-through'
    else if (value.includes('none')) textDecoration = 'none'

    let fontWeight

    if (value.includes('bold')) fontWeight = 'bold'
    else if (value.includes('0')) {
      fontWeight = value.split(' ').find(element => element.includes('0'))
    }

    return { fontStyle, textDecoration, fontWeight }
  }
}
