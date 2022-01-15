import React from 'react'
import './index.scss'

function Layout({ children }) {
	return (
		<div className='container flex-column d-flex align-middle p-0 layout-container'>{children}</div>
	)
}

export default Layout
