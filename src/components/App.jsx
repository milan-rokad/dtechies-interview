import Layout from './Layout'
import TrendAnalysis from './TrendAnalysis'
import Progress from './Progress'

function App() {
	return (
		<Layout>
			<Progress />
			<div className='break'></div>
			<TrendAnalysis />
		</Layout>
	)
}

export default App
