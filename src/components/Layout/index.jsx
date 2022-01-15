import { Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBreadcrumb from './components/Breadcrumb'
import Sidebar from './components/Sidebar'

const { Content } = Layout
const styles = {
	layout: { padding: '0 24px 24px' },
	content: {
		padding: 24,
		margin: 0,
		minHeight: 280,
	},
}

function Layout1() {
	return (
		<Layout>
			<Sidebar />

			<Layout style={styles.layout}>
				<AppBreadcrumb />
				<Content className='site-layout-background' style={styles.content}>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	)
}

export default Layout1
