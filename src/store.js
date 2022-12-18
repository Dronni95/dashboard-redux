import { filterReducer } from 'features/filters/filterSlice'
import { positionReducer } from 'features/positions/positionSlice'

const { configureStore } = require('@reduxjs/toolkit')

export const store = configureStore({
	reducer: {
		filters: filterReducer,
		positions: positionReducer,
	},
	devTools: true,
})
