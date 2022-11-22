import type { TUseSwitch } from './types'

import { theme } from '@app/styles'

import type { TargetAndTransition, Transition } from 'framer-motion'
import { useEffect, useState } from 'react'

const transition: Transition = { type: 'tween', duration: 0.3 }

const useSwitch: TUseSwitch = ({ name, formik, onClick }) => {
  const [isOn, setIsOn] = useState(formik.values[name])

  const backgroundAnimation: TargetAndTransition = {
    backgroundColor: isOn
      ? [theme.colors.secondary.value, theme.colors.primary.value]
      : [theme.colors.primary.value, theme.colors.secondary.value]
  }

  const circleAnimation: TargetAndTransition = {
    x: isOn ? [0, 20] : [20, 0],
    backgroundColor: isOn
      ? [theme.colors.tertiary.value, theme.colors.tertiary.value]
      : [theme.colors.tertiary.value, theme.colors.tertiary.value]
  }

  const toggleSwitch = (e: any) => {
    e.preventDefault()
    onClick && onClick(e)
    formik.setFieldValue(name, !isOn)
  }

  useEffect(() => {
    setIsOn(formik.values[name])
  }, [setIsOn, name, formik.values])

  return {
    isOn,
    transition,
    toggleSwitch,
    circleAnimation,
    backgroundAnimation
  }
}

export { useSwitch }
