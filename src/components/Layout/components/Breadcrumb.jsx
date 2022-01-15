import { Breadcrumb } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const { Item } = Breadcrumb

const breadcrumbNameMap = {
	// User
	'/user': 'User',
	'/user/create': 'Create',
	'/user/edit': 'Edit',
	'/user/view': 'View',

	// Project
	'/project': 'Project',
	'/project/create': 'Create',
	'/project/edit': 'Edit',
	'/project/view': 'View',
}

function AppBreadcrumb() {
	const location = useLocation()

	const pathNamesArr = location.pathname.split('/').filter((x) => x)

	return (
		<Breadcrumb style={{ margin: '16px 0' }}>
			<Link to={'/'}>
				<Item>Home</Item>
			</Link>

			{pathNamesArr.map((_, index) => {
				const last = index === pathNamesArr.length - 1
				const to = `/${pathNamesArr.slice(0, index + 1).join('/')}`

				return last ? (
					<Item key={index}>{breadcrumbNameMap[to]}</Item>
				) : (
					<Link underline='hover' to={to} key={index}>
						<Item key={index}>{breadcrumbNameMap[to]}</Item>
					</Link>
				)
			})}
		</Breadcrumb>
	)
}

export default AppBreadcrumb
