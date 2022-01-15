import { configureStore } from '@reduxjs/toolkit'
import commonReducer from './slices/commonSlice'
import projectsReducer from './slices/projectSlice'
import usersReducer from './slices/userSlice'

export const store = configureStore({
	reducer: {
		common: commonReducer,
		users: usersReducer,
		projects: projectsReducer,
	},
})

export default store
