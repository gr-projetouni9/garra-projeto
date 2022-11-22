export const radius = {
  radius: (value: string | number) => ({ borderRadius: value }),

  radiusLB: (value: string | number) => ({ borderBottomLeftRadius: value }),
  radiusLT: (value: string | number) => ({ borderTopLeftRadius: value }),
  radiusRT: (value: string | number) => ({ borderTopRightRadius: value }),
  radiusBT: (value: string | number) => ({ borderBottomTopRadius: value }),

  radiusL: (value: string | number) => ({
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value
  }),
  radiusT: (value: string | number) => ({
    borderTopLeftRadius: value,
    borderTopRightRadius: value
  }),
  radiusR: (value: string | number) => ({
    borderTopRightRadius: value,
    borderBottomRightRadius: value
  }),
  radiusB: (value: string | number) => ({
    borderBottomRightRadius: value,
    borderBottomLeftRadius: value
  })
}
