export const margin = {
  m: (value: string | number) => ({ margin: value }),
  mt: (value: string | number) => ({ marginTop: value }),
  mr: (value: string | number) => ({ marginRight: value }),
  mb: (value: string | number) => ({ marginBottom: value }),
  ml: (value: string | number) => ({ marginLeft: value }),
  mx: (value: string | number) => ({ marginLeft: value, marginRight: value }),
  my: (value: string | number) => ({ marginTop: value, marginBottom: value })
}
