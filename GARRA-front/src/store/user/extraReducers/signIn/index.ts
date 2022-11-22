import { api } from '@app/services/api'

import { createAsyncThunk } from '@reduxjs/toolkit'

const signIn = async (data: any) => {
  try {
    const response = await api.post(`/auth/sign-in`, data)

    const { id, token } = response.data

    if (id && token) {
      const response = await api.get(`/users/${id}`)

      const user = response.data.user

      localStorage.setItem('@GARRA-token', token)

      if (user) {
        try {
          const adminsRes = await api.get(`/admins/${id}`)

          const register = adminsRes.data.admin.register

          return { user: { token, ...user, register }, loading: false }
        } catch (error) {
          return { user: { token, ...user }, loading: false }
        }
      }
    }
  } catch (error: any) {
    return { error: 'Error inesperado tente novamente mais tarde' }
  }

  return { loading: false, user: undefined }
}

const signInThunk = createAsyncThunk('userStore/sign-in', signIn)

const signInExtraReducers = ({ addCase }: any) => {
  addCase(signInThunk.pending, (state: any) => ({ ...state, loading: true }))

  addCase(signInThunk.fulfilled, (state: any, { payload }: any) => ({
    ...state,
    ...payload,
    loading: false
  }))

  addCase(signInThunk.rejected, (state: any) => ({
    ...state,
    loading: false
  }))
}

export { signInExtraReducers, signInThunk }
