import { Style } from './styles'

import { IItemProps, Item } from './Item'

interface IListProps {
  variant?: IItemProps['variant']
  items: IItemProps['item'][]
}

const List = ({ variant, items, ...props }: IListProps) => (
  <Style {...props}>
    {items.map((item, index) => (
      <li key={index}>
        <Item variant={variant} item={item} />
      </li>
    ))}
  </Style>
)

export default List
