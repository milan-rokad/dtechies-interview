import { FileProtectOutlined, UserOutlined } from '@ant-design/icons/lib/icons'
import { Card, Col, Row, Statistic } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { projectsSelectors } from '../../redux/slices/projectSlice'
import { usersSelectors } from '../../redux/slices/userSlice'

const style = {
	card: {
		width: 'auto',
		justifyContent: 'center',
		textAlignLast: 'center',
		backgroundColor: '#f5f5f5',
	},
}

function Dashboard() {
	const usersData = useSelector(usersSelectors.selectAll)
	const projectsData = useSelector(projectsSelectors.selectAll)

	return (
		<Row gutter={16} style={{ padding: '1rem' }}>
			<Col span={6}>
				<Card style={style.card}>
					<Statistic title='Total User' value={usersData?.length || 0} prefix={<UserOutlined />} />
				</Card>
			</Col>
			<Col span={6}>
				<Card style={style.card}>
					<Statistic
						title='Total Projects'
						value={projectsData?.length || 0}
						prefix={<FileProtectOutlined />}
					/>
				</Card>
			</Col>
		</Row>
	)
}

export default Dashboard
