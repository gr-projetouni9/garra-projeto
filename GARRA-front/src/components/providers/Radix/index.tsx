import { IChildrenProps } from '@app/types/react.types'

import * as RadixToast from '@radix-ui/react-toast'
import * as RadixTooltip from '@radix-ui/react-tooltip'

export const RadixProvider = ({ children }: IChildrenProps) => (
  <RadixToast.Provider>
    <RadixTooltip.Provider delayDuration={0} disableHoverableContent>
      {children}
    </RadixTooltip.Provider>
  </RadixToast.Provider>
)
