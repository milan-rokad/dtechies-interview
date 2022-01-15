import React from 'react'
import { staticsData } from '../../helper'
import './index.scss'

function Content({ activeTab }) {
	return (
		<div className='content-container pt-4 pb-2'>
			<div className='container'>
				<div className='d-flex justify-content-center'>
					<div className='d-flex flex-column justify-content-center align-items-center rounded-circle statics-circle'>
						<span className='heading fw-bold'>6.5</span>
						<span className='sub-heading'>Band</span>
					</div>
					<div className='d-flex align-items-center px-3 color-primary'>
						{staticsData[activeTab].map((data, i) => (
							<div key={data.id} className={`px-4 text-center ${i !== 0 ? 'add-border' : ''}`}>
								<div style={{ display: 'table-caption' }}>{data.title}</div>
								<div className='fw-bold gray'>{data.value}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Content
