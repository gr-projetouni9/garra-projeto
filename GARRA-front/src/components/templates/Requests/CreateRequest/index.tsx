import { Close, Description, Form, Header, Quantity, Style } from './styles'

import Button from '@app/components/atoms/Button'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { useFormik } from 'formik'

interface ICreateRequestProps {
  onCloseClick: () => void
}

export const CreateRequest = ({ onCloseClick }: ICreateRequestProps) => {
  const user = useAppSelector(({ userStore }) => userStore.user)

  const formik = useFormik({
    initialValues: { quantity: 1, description: '' },
    onSubmit: async data => {
      try {
        if (user) {
          await api.post(
            '/requests',
            { ...data, user_id: user.id },
            { headers: { Authorization: `Bearer ${user.token}` } }
          )
          onCloseClick()
        }
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <Style>
      <Header>
        Criar novo pedido
        <button type='button' onClick={onCloseClick}>
          <Close />
        </button>
      </Header>

      <Form>
        <Quantity>
          Quantidade:
          <input
            min={1}
            type='number'
            name='quantity'
            value={formik.values.quantity}
            onChange={formik.handleChange}
          />
        </Quantity>

        <Description htmlFor='description'>
          O que você deseja?
          <textarea
            id='description'
            name='description'
            draggable={false}
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </Description>

        <Button
          type='button'
          onClick={e => {
            e.preventDefault()
            formik.handleSubmit()
          }}
        >
          Realizar pedido
        </Button>
      </Form>
    </Style>
  )
}
