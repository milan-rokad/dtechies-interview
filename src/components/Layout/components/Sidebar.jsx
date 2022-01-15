import { Layout, Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const { Sider } = Layout

const menus = [
	{
		id: '1',
		path: '/',
		label: 'Dashboard',
	},
	{
		id: '2',
		path: '/user',
		label: 'User',
	},
	{
		id: '3',
		path: '/project',
		label: 'Project',
	},
]

const styles = {
	header: {
		color: 'blue',
		fontSize: '1.4rem',
		fontWeight: 'bold',
	},
	menu: { height: '100%', borderRight: 0 },
}

function Sidebar() {
	const [activeMenu, setActiveMenu] = useState('1')
	const location = useLocation()

	useEffect(() => {
		const pathNameArr = location?.pathname?.split('/')
		const activeMenu = menus.find((menu) => menu.path === `/${pathNameArr?.[1]}`)
		setActiveMenu(activeMenu?.id)
	}, [location])

	return (
		<Sider width={200} className='site-layout-background'>
			<Header style={styles.header}>Task 2</Header>
			<Menu mode='inline' selectedKeys={[activeMenu]} style={styles.menu}>
				{menus.map((menu) => (
					<Menu.Item key={menu.id}>
						<Link to={menu.path}>{menu.label}</Link>
					</Menu.Item>
				))}
			</Menu>
		</Sider>
	)
}

export default Sidebar
