export const logout = (state: any) => {
  state.user = undefined
  localStorage.removeItem('@GARRA-token')
}
