import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

export const projectsAdapter = createEntityAdapter()

export const projectsSlice = createSlice({
	name: 'projects',
	initialState: projectsAdapter.getInitialState(),
	reducers: {
		addProject: projectsAdapter.addOne,
		updateProject: projectsAdapter.updateOne,
		deleteProject: projectsAdapter.removeOne,
	},
})

export const { addProject, deleteProject, updateProject } = projectsSlice.actions

export default projectsSlice.reducer

/** Selectors */
export const projectsSelectors = projectsAdapter.getSelectors((state) => state.projects)
