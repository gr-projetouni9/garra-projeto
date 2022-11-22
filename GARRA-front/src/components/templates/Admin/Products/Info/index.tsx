import { Style } from './styles'

import { IProduct } from '@app/types/api.types'

import { formatDate } from '@app/utils/date/format'

interface IInfo {
  data: IProduct
}

const Info = ({ data }: IInfo) => (
  <Style>
    <li>
      <strong>NOME:</strong> {data.name}
    </li>

    <li>
      <strong>QUANTIDADE:</strong> {data.quantity}
    </li>

    <li>
      <strong>CÓDIGO DE BARRAS:</strong> {data.barcode}
    </li>

    <li>
      <strong>LOCAL:</strong> Almoxarifado
    </li>

    <li>
      <strong>SETOR:</strong> Segundo Andar
    </li>

    <li>
      <strong>ADICIONADO POR:</strong> {data.author?.full_name}
    </li>

    <li>
      <strong>CRIADO EM:</strong> {formatDate(data.created_at)}
    </li>

    <li>
      <strong>MODIFICADO EM:</strong> {formatDate(data.updated_at)}
    </li>
  </Style>
)

export default Info
