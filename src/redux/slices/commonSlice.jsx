import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
	skills: [
		{
			id: 1,
			title: 'HTML',
		},
		{
			id: 2,
			title: 'CSS',
		},
		{
			id: 3,
			title: 'Javascript',
		},
		{
			id: 4,
			title: 'Typescript',
		},
		{
			id: 5,
			title: 'NodeJs',
		},
		{
			id: 6,
			title: 'NestJs',
		},
		{
			id: 7,
			title: 'ReactJs',
		},
		{
			id: 8,
			title: 'NextJs',
		},
	],
}

export const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {},
})

export default commonSlice.reducer

/**  Selectors */
export const getAllSkills = createSelector(
	(state) => state.common.skills,
	(item) => item
)
