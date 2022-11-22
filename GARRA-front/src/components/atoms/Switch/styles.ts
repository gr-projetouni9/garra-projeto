import { styled } from '@app/styles'

import { motion } from 'framer-motion'

export const Background = styled(motion.div, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-start',
  width: '40px',
  height: '20px',
  padding: '1px',
  cursor: 'pointer',
  borderRadius: '10px',
  boxSizing: 'content-box',
  backgroundColor: '$tertiary'
})

export const Circle = styled(motion.div, {
  width: '20px',
  height: '20px',
  borderRadius: '20px',
  backgroundColor: '$primary'
})

export const SwitchStyle = styled(motion.button, {
  display: 'flex',
  alignItems: 'center',
  input: {
    display: 'none'
  },
  label: {
    marginLeft: '8px'
  }
})
