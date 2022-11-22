import { useModal } from './logic'
import { Style } from './styles'
import type { IForwardModal, IModalProps } from './types'

import { forwardRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = forwardRef<IForwardModal, IModalProps>(
  ({ children, ...props }, ref) => {
    const { onBackgroundClick, modal } = useModal(ref)

    return modal.open === true ? (
      createPortal(
        <Style {...props}>
          {children}
          <div className='transparentBackground' onClick={onBackgroundClick} />
        </Style>,
        document.getElementById('modal') as Element
      )
    ) : (
      <></>
    )
  }
)

export default Modal

Modal.displayName = 'Modal'
