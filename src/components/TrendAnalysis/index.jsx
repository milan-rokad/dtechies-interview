import React from 'react'
import { tableData } from './helper'
import './index.scss'

function TrendAnalysis() {
	return (
		<div className='trend-analysis-container p-3 w-100 mt-2'>
			<div className='fw-bold mb-2 title'>Trend Analysis</div>
			<table className='table '>
				<thead className=''>
					<tr>
						{tableData.columns.map((col, i) => (
							<th key={`column_${i}`} scope='col'>
								{col}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableData.data.map((row, i) => (
						<tr key={`row_${i}`} className='remove-row-border'>
							{row.map((cell, j) => (
								<td key={`cell_${i}_${j}`} className={i === 0 ? ' fw-bold highlight' : ''}>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default TrendAnalysis
