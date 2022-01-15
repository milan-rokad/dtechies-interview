import { useState } from 'react'
import Content from './components/Content'
import Header from './components/Header'

function Progress() {
	const [activeTab, setActiveTab] = useState(1)
	return (
		<div className='p-3 w-100'>
			<Header {...{ activeTab, setActiveTab }} />
			<Content {...{ activeTab }} />
		</div>
	)
}

export default Progress
