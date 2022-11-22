export const update = (state: any, { payload }: any) => {
  state.user = { ...state.user, ...payload }
}
