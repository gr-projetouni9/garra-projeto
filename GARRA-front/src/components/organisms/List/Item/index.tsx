import { Content, Header, Style } from './styles'

import { theme } from '@app/styles'

import { Arrow } from '@app/components/atoms/Arrow'
import { Close } from '@app/components/atoms/Close'

import { ReactNode, useState } from 'react'

export interface IItemProps {
  variant?: 'primary' | 'secondary' | 'black'
  item?: {
    content: ReactNode
    header?: ReactNode[]
    lowOpacity?: boolean
    onCloseClick?: () => void
    customHeader?: ReactNode[] | ReactNode
  }
}

const DefaultHeader = ({
  item,
  variant = 'primary',
  showContent
}: {
  showContent?: boolean
  item: IItemProps['item']
  variant: IItemProps['variant']
}) => {
  return (
    <Header
      variant={variant as any}
      css={{ ul: { alignItems: item?.onCloseClick ? 'center' : 'flex-end' } }}
    >
      <Arrow direction={showContent ? 'up' : 'down'} />

      {item?.header && (
        <ul>
          {item.header.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {item?.onCloseClick && (
        <Close
          css={{ ml: '$4' }}
          onClick={item.onCloseClick}
          color={theme.colors.tertiary.value}
        />
      )}
    </Header>
  )
}

export const Item = ({ variant, item }: IItemProps) => {
  const [showContent, setShowContent] = useState(false)

  return (
    <Style
      variant={variant as any}
      css={{ opacity: item?.lowOpacity ? 0.7 : 1 }}
    >
      <header>
        <button
          type='button'
          style={{ width: '100%' }}
          onClick={() => setShowContent(prev => !prev)}
        >
          {item?.customHeader || (
            <DefaultHeader
              item={item}
              variant={variant}
              showContent={showContent}
            />
          )}
        </button>
      </header>

      {showContent && <Content>{item?.content}</Content>}
    </Style>
  )
}
