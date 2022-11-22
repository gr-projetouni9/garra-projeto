/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @next/next/no-img-element */
import {
  BarCode,
  BarCodeField,
  Button,
  Form,
  Input,
  Label,
  Section,
  Style,
  Video
} from './styles'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { TNextPageWithLayout } from '@app/types/next.types'

import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

const CreateProduct: TNextPageWithLayout = () => {
  const user = useAppSelector(({ userStore }) => userStore.user)
  const [showBarcode, setShowBarcode] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  const getVideo = async () => {
    if (!videoRef.current?.srcObject) {
      try {
        const media = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: { ideal: 'environment' },
            width: 1920,
            height: 1080
          }
        })

        if (videoRef.current) videoRef.current.srcObject = media

        videoRef.current?.play()
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    getVideo()
  }, [getVideo])

  const formik = useFormik({
    initialValues: { name: '', quantity: 1, barcode: '' },
    onSubmit: async data => {
      if (user?.token) {
        await api.post('/products', data, {
          headers: { Authorization: `Bearer ${user.token}` }
        })
      }

      router.push('/admin')
    }
  })

  if (!user?.register || !user?.token) return <></>

  return (
    <>
      <Style>
        <Section>
          <Form>
            <Label htmlFor=''>
              Nome:
              <Input
                type='text'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </Label>

            <Label>
              Quantidade:
              <Input
                min={1}
                max={10}
                type='number'
                name='quantity'
                defaultValue={1}
                value={formik.values.quantity}
                onChange={formik.handleChange}
              />
            </Label>

            <BarCodeField>
              <input
                type='text'
                name='barcode'
                onChange={formik.handleChange}
                value={formik.values.barcode}
                placeholder='Código de barras'
              />

              <button
                type='button'
                onClick={() => {
                  setShowBarcode(prev => !prev)
                }}
              >
                <BarCode />
              </button>
            </BarCodeField>

            <Video
              ref={videoRef}
              css={{ display: showBarcode ? 'block' : 'none' }}
            />

            <Button
              onClick={e => {
                e.preventDefault()
                formik.handleSubmit()
              }}
            >
              Adicionar
            </Button>
          </Form>
        </Section>
      </Style>
    </>
  )
}

export default CreateProduct
