import { useSwitch } from './logic'
import { Background, Circle, SwitchStyle } from './styles'
import type { ISwitchProps } from './types'

const Switch = ({ label, name, formik, onClick, ...props }: ISwitchProps) => {
  const {
    isOn,
    transition,
    toggleSwitch,
    circleAnimation,
    backgroundAnimation
  } = useSwitch({ name, formik, onClick })

  return (
    <SwitchStyle
      role='switch'
      data-cy={name}
      aria-checked={isOn}
      onClick={toggleSwitch}
      {...(props as any)}
    >
      <Background transition={transition} animate={backgroundAnimation}>
        <Circle animate={circleAnimation} transition={transition} />

        <input name={name} checked={isOn} type='checkbox' readOnly />
      </Background>

      {label && <label htmlFor={name}>{label}</label>}
    </SwitchStyle>
  )
}

export { Switch }
