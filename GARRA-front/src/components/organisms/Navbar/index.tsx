/* eslint-disable @typescript-eslint/no-extra-semi */

/* eslint-disable @next/next/no-img-element */
import { Boxes, Content, DefaultAvatar, Logout, Style } from './styles'

import { useAppDispatch } from '@app/hooks/useAppDispatch'
import { useAppSelector } from '@app/hooks/useAppSelector'

import { userStore } from '@app/store/user'
import { verifyAuthenticationThunk } from '@app/store/user/extraReducers/verifyAuthentication'

import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'

const Navbar = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const user = useAppSelector(({ userStore }) => userStore.user)

  useEffect(() => {
    ;(async () => {
      const res = await dispatch(verifyAuthenticationThunk({}))

      if (!res?.payload?.id && router.pathname !== '/') router.push('/')

      if (
        res?.payload?.id &&
        !res.payload.register &&
        router.pathname.includes('admin')
      )
        router.push('/requests')

      if (res.payload.register && router.pathname.includes('requests'))
        router.push('/admin')
    })()
  }, [dispatch, router])

  if (!user?.token) return <></>

  return (
    <Style>
      <Content className='logo'>
        <button
          type='button'
          onClick={() => {
            router.push(user.register ? '/admin' : '/requests')
          }}
        >
          <img src='/logo.png' alt='Garra logo' />
        </button>

        <div>
          {user.register && (
            <button
              onClick={() => {
                router.push('/admin')
              }}
            >
              <Boxes />
            </button>
          )}

          <button
            type='button'
            onClick={() => {
              router.push('/profile')
            }}
          >
            <DefaultAvatar />
          </button>

          <button
            type='button'
            onClick={() => {
              dispatch(userStore.actions.logout())
              router.push('/')
            }}
          >
            <Logout />
          </button>
        </div>
      </Content>
    </Style>
  )
}

export const getNavbarLayout = (page: ReactElement) => (
  <>
    <Navbar />

    {page}
  </>
)

export default Navbar
