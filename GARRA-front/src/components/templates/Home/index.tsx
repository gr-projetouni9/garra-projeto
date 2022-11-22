/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-extra-semi */
import {
  ArrowButton,
  Button,
  Error,
  Field,
  Forgot,
  Form,
  Logo,
  Style,
  Switch
} from './styles'

import { signInYupSchema, signUpYupSchema } from './schemas'

import { Link } from '@app/components/atoms/Link'
import Alert from '@app/components/atoms/icons/Alert'
import Arrow from '@app/components/atoms/icons/Arrow'

import { useAppDispatch } from '@app/hooks/useAppDispatch'

import { signInThunk } from '@app/store/user/extraReducers/signIn'
import { verifyAuthenticationThunk } from '@app/store/user/extraReducers/verifyAuthentication'

import { api } from '@app/services/api'

import { TButtonProps } from '@app/types/react.types'

import { useFormik } from 'formik'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const Err = ({ error, ...props }: any) =>
  error ? (
    <Error {...props}>
      <Alert />
      {error}
    </Error>
  ) : (
    <></>
  )

const Home = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [isAdmin, setIsAdmin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const signUpFormik = useFormik({
    initialValues: {
      email: '',
      admin: false,
      password: '',
      register: '',
      full_name: '',
      confirmPassword: '',
      place: '',
      sector: ''
    },
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema: signUpYupSchema,
    onSubmit: async data => {
      try {
        const res = await api.post('/users', {
          full_name: data.full_name,
          email: data.email,
          password: data.password
        })

        if (data.register)
          await api.post('/admins', {
            register: data.register,
            user_id: res.data.createdUser.id
          })

        setShowSignUp(false)
      } catch (error) {
        console.log(error)
      }
    }
  })

  const signInFormik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: signInYupSchema,
    onSubmit: async data => {
      try {
        const res: any = await dispatch(signInThunk(data))

        if (res?.payload?.user?.id)
          router.push(res?.payload?.user?.register ? '/admin' : '/requests')
      } catch (error) {
        console.log(error)
      }
    }
  })

  useEffect(() => {
    ;(async () => {
      const res = await dispatch(verifyAuthenticationThunk({}))
      if (res?.payload?.id)
        router.push(res?.payload?.register ? '/admin' : '/requests')
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    signUpFormik.setFieldValue('register', '')
  }, [isAdmin])

  useEffect(() => {
    signInFormik.resetForm()
    signUpFormik.resetForm()

    setIsAdmin(false)
  }, [showSignUp])

  const toggleSignUp: TButtonProps['onClick'] = e => {
    e.preventDefault()
    setShowSignUp(prev => !prev)
  }

  return (
    <>
      <Head>
        <title>Garra</title>
      </Head>

      <Style>
        <Form>
          {showSignUp && (
            <ArrowButton onClick={toggleSignUp}>
              <Arrow />
            </ArrowButton>
          )}

          <Logo src='/logo.png' alt='Garra logo' />

          <Err
            error={
              (signUpFormik.touched.full_name &&
                signUpFormik?.errors.full_name) ||
              (signUpFormik.touched.email && signUpFormik?.errors.email) ||
              (signUpFormik.touched.password &&
                signUpFormik?.errors.password) ||
              (signUpFormik.touched.confirmPassword &&
                signUpFormik?.errors.confirmPassword) ||
              (signUpFormik.touched.register &&
                signUpFormik?.errors.register) ||
              (signUpFormik.touched.place && signUpFormik?.errors.place) ||
              (signUpFormik.touched.sector && signUpFormik?.errors.sector)
            }
          />

          {showSignUp ? (
            <>
              <div className='content'>
                <Field
                  type='text'
                  name='full_name'
                  placeholder='Nome completo'
                  onBlur={signUpFormik.handleBlur}
                  onChange={signUpFormik.handleChange}
                  value={signUpFormik.values.full_name}
                />

                <Field
                  type='text'
                  name='email'
                  placeholder='E-mail'
                  onBlur={signUpFormik.handleBlur}
                  value={signUpFormik.values.email}
                  onChange={signUpFormik.handleChange}
                />

                <Field
                  type='password'
                  placeholder='Senha'
                  name='password'
                  onBlur={signUpFormik.handleBlur}
                  value={signUpFormik.values.password}
                  onChange={signUpFormik.handleChange}
                />

                <Field
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirmar senha'
                  onBlur={signUpFormik.handleBlur}
                  onChange={signUpFormik.handleChange}
                  value={signUpFormik.values.confirmPassword}
                />

                <Switch
                  name='admin'
                  formik={signUpFormik}
                  label='Sou administrador'
                  onClick={() => setIsAdmin(prev => !prev)}
                />

                {isAdmin && (
                  <>
                    <Field
                      type='text'
                      name='register'
                      placeholder='Registro'
                      onBlur={signUpFormik.handleBlur}
                      onChange={signUpFormik.handleChange}
                      value={signUpFormik.values.register}
                    />

                    <Field
                      type='text'
                      name='place'
                      placeholder='Local'
                      onBlur={signUpFormik.handleBlur}
                      value={signUpFormik.values.place}
                      onChange={signUpFormik.handleChange}
                    />

                    <Field
                      type='text'
                      name='sector'
                      placeholder='Setor'
                      onBlur={signUpFormik.handleBlur}
                      value={signUpFormik.values.sector}
                      onChange={signUpFormik.handleChange}
                    />
                  </>
                )}
              </div>

              <Button
                type='submit'
                css={{ mt: '$4' }}
                onClick={e => {
                  e.preventDefault()
                  signUpFormik.handleSubmit(e as any)
                }}
              >
                CADASTRAR
              </Button>
            </>
          ) : (
            <>
              <Err
                error={
                  (signInFormik.touched.email && signInFormik?.errors.email) ||
                  (signInFormik.touched.password &&
                    signInFormik?.errors.password)
                }
              />

              <Field
                type='text'
                name='email'
                placeholder='E-mail'
                value={signInFormik.values.email}
                onBlur={signInFormik.handleBlur}
                onChange={signInFormik.handleChange}
              />

              <Field
                type='password'
                name='password'
                placeholder='Senha'
                onBlur={signInFormik.handleBlur}
                value={signInFormik.values.password}
                onChange={signInFormik.handleChange}
              />

              <Button
                type='submit'
                onClick={e => {
                  e.preventDefault()
                  signInFormik.handleSubmit()
                }}
              >
                ENTRAR
              </Button>

              <Button type='button' onClick={toggleSignUp}>
                CADASTRAR
              </Button>

              <Forgot>
                Esqueceu a sua senha? <br />
                <Link>Clique aqui</Link> para recuperar.
              </Forgot>
            </>
          )}
        </Form>
      </Style>
    </>
  )
}

export default Home
