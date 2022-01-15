import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

export const usersAdapter = createEntityAdapter()

export const usersSlice = createSlice({
	name: 'users',
	initialState: usersAdapter.getInitialState(),
	reducers: {
		addUser: usersAdapter.addOne,
		updateUser: usersAdapter.updateOne,
		deleteUser: usersAdapter.removeOne,
	},
})

export const { addUser, deleteUser, updateUser } = usersSlice.actions

export default usersSlice.reducer

/** Selectors */
export const usersSelectors = usersAdapter.getSelectors((state) => state.users)
