import type { TStoreState } from '@app/types/redux.types'

import type { TypedUseSelectorHook } from 'react-redux'

export type TUseAppSelector = TypedUseSelectorHook<TStoreState>
