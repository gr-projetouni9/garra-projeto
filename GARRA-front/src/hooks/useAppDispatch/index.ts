import type { TStoreDispatch } from '@app/types/redux.types'

import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<TStoreDispatch>()
