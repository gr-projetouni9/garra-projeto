/* eslint-disable @next/next/no-img-element */
import {
  Avatar,
  Card,
  ConfirmPasswordModal,
  DefaultAvatar,
  Error,
  Form,
  Header,
  Input,
  Label,
  Logo,
  Style,
  Submit
} from './styles'

import { profileYupSchema } from './schemas'

import { Close } from '@app/components/atoms/Close'

import Modal from '@app/components/molecules/Modal'
import { IForwardModal } from '@app/components/molecules/Modal/types'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { TNextPageWithLayout } from '@app/types/next.types'

import { useFormik } from 'formik'
import Head from 'next/head'
import { useEffect, useRef } from 'react'

const Profile: TNextPageWithLayout = () => {
  const user = useAppSelector(({ userStore }) => userStore.user)
  const modalRef = useRef<IForwardModal>(null)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      register: '',
      full_name: '',
      newPassword: '',
      confirmNewPassword: ''
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: profileYupSchema,
    onSubmit: async data => {
      console.log('test', data)
      const newEmail = data.email === user?.email ? undefined : data.email

      const newName =
        data.full_name === user?.full_name ? undefined : data.full_name

      const newRegister =
        data.register === user?.register ? undefined : data.register

      try {
        await api.patch(
          '/users',
          { ...data, email: newEmail, full_name: newName, register: undefined },
          { headers: { Authorization: `Bearer ${user?.token}` } }
        )

        if (data.register) {
          await api.patch(
            '/admins',
            { register: newRegister, user_id: user?.id },
            { headers: { Authorization: `Bearer ${user?.token}` } }
          )
        }

        modalRef.current?.triggerModal({ open: false })
      } catch (error) {
        console.log(error)
      }
    }
  })

  useEffect(() => {
    formik.setFieldValue('email', user?.email)
    formik.setFieldValue('register', user?.register)
    formik.setFieldValue('full_name', user?.full_name)
  }, [user])

  if (!user?.token) return <></>

  return (
    <>
      <Head>
        <title>Garra</title>
      </Head>

      <Style>
        <Card>
          <Header>
            <Logo src='logo.png' alt='logo' />

            <Avatar>
              <DefaultAvatar src='user.svg' alt='avatar' />
            </Avatar>
          </Header>

          <Form onSubmit={formik.handleSubmit}>
            <Modal ref={modalRef}>
              <ConfirmPasswordModal>
                <Close
                  onClick={() =>
                    modalRef.current?.triggerModal({ open: false })
                  }
                />

                <Label htmlFor=''>
                  Senha atual:
                  <Input
                    type='password'
                    name='password'
                    placeholder='*************'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Label>

                <Submit
                  type='submit'
                  onClick={e => {
                    e.preventDefault()
                    formik.handleSubmit()
                  }}
                >
                  Confirmar alterações
                </Submit>
              </ConfirmPasswordModal>
            </Modal>

            <Error
              error={
                (formik.touched.full_name && formik?.errors.full_name) ||
                (formik.touched.email && formik?.errors.email) ||
                (formik.touched.password && formik?.errors.password) ||
                (formik.touched.confirmNewPassword &&
                  formik?.errors.confirmNewPassword) ||
                (formik.touched.register && formik?.errors.register)
              }
            />

            <Label htmlFor=''>
              Nome:
              <Input
                type='text'
                name='full_name'
                value={formik.values.full_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Label>

            <Label htmlFor=''>
              Email:
              <Input
                type='text'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Label>

            {user?.register && (
              <Label htmlFor=''>
                Registro:
                <Input
                  name='register'
                  type='text'
                  value={formik.values.register}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Label>
            )}

            <Label htmlFor=''>
              Nova Senha:
              <Input
                type='password'
                name='newPassword'
                placeholder='*************'
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Label>

            <Label htmlFor=''>
              Confirmar senha:
              <Input
                type='password'
                name='confirmNewPassword'
                onBlur={formik.handleBlur}
                placeholder='*************'
                onChange={formik.handleChange}
                value={formik.values.confirmNewPassword}
              />
            </Label>
          </Form>
        </Card>

        <Submit
          type='button'
          onClick={e => {
            e.preventDefault()
            modalRef.current?.triggerModal({ open: true })
          }}
        >
          Salvar alterações
        </Submit>
      </Style>
    </>
  )
}

export default Profile
