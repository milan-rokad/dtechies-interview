import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import NotFound from './components/ErrorPage/NotFound'
import Layout from './components/Layout'
import ProjectCreate from './components/Projects/Create'
import ProjectEdit from './components/Projects/Edit'
import ProjectList from './components/Projects/List'
import ProjectView from './components/Projects/View'
import UserCreate from './components/User/Create'
import UserEdit from './components/User/Edit'
import UserList from './components/User/List'
import UserView from './components/User/View'

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Dashboard />} />

				{/* Users */}
				<Route path='user'>
					<Route path='' element={<UserList />} />
					<Route path='create' element={<UserCreate />} />
					<Route path='edit/:id' element={<UserEdit />} />
					<Route path='view/:id' element={<UserView />} />
				</Route>

				{/* Projects */}
				<Route path='project'>
					<Route path='' element={<ProjectList />} />
					<Route path='create' element={<ProjectCreate />} />
					<Route path='edit/:id' element={<ProjectEdit />} />
					<Route path='view/:id' element={<ProjectView />} />
				</Route>

				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default AppRoutes
