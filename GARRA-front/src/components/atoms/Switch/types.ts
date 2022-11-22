import { FormikProps } from 'formik'
import type { TargetAndTransition, Transition } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'

interface ISwitchProps extends ComponentPropsWithoutRef<'button'> {
  name: string
  label?: string
  formik: FormikProps<any>
}

type TUseSwitch = ({
  name,
  formik
}: {
  name: string
  formik: FormikProps<any>
  onClick?: any
}) => {
  isOn: boolean
  transition: Transition
  toggleSwitch: (e: any) => void
  circleAnimation: TargetAndTransition
  backgroundAnimation: TargetAndTransition
}

export type { ISwitchProps, TUseSwitch }
