import React from 'react'
import { tabs } from '../../helper'
import './index.scss'

function Header({ activeTab, setActiveTab }) {
	return (
		<div className='d-flex justify-content-between w-100 border-bottom border-2 pb-3'>
			{/* Heading */}
			<div className='d-flex header-heading-container'>
				<div className='justify-content-center align-items-center rounded pb-3 image-container bgd-primary'>
					<ion-icon name='trending-up-outline'></ion-icon>
				</div>
				<div className='d-flex flex-column justify-content-center px-2 ps-4 content-container color-primary'>
					<div className='fw-bold heading'>Your Progress</div>
					<div>IELTS Academic</div>
				</div>
			</div>

			{/* Navigation tabs */}
			<div className='d-flex align-items-end navigation-tabs'>
				<ul className='nav nav-pills'>
					{tabs.map((tab) => (
						<li
							key={tab.id}
							className='nav-item cursor-pointer px-3 '
							onClick={() => setActiveTab(tab.id)}
						>
							<a
								className={`nav-link color-gray remove-border-radius  ${
									tab.id === activeTab ? ' fw-bold nav-item-active' : ''
								}`}
							>
								{tab.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Header
