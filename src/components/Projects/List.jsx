import {
	DeleteOutlined,
	EditOutlined,
	EyeOutlined,
	PlusOutlined,
} from '@ant-design/icons/lib/icons'
import { Button, Row, Space, Table } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProject, projectsSelectors } from '../../redux/slices/projectSlice'
import { usersSelectors } from '../../redux/slices/userSlice'

function RenderDevelopers({ record }) {
	const allUsers = useSelector(usersSelectors.selectEntities)
	const developers = record.developers.map((devId) => allUsers[devId].username)
	return developers.join(', ')
}

function RenderLeader({ record }) {
	const leader = useSelector((state) => usersSelectors.selectById(state, record.leader))
	return leader?.username || ''
}

function ProjectList() {
	const dispatch = useDispatch()

	const [deleteModal, setDeleteModal] = useState({ visible: false, item: null })

	const projectsData = useSelector(projectsSelectors.selectAll)

	const handleDeleteModalCancel = () => {
		setDeleteModal(false)
	}

	const handleDeleteModalConfirm = () => {
		dispatch(deleteProject(deleteModal.item))
		handleDeleteModalCancel()
	}

	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: 'Team Leader',
			dataIndex: 'leader',
			key: 'leader',
			render: (text, record) => <RenderLeader {...{ record }} />,
		},
		{
			title: 'Developers',
			dataIndex: 'developers',
			key: 'developers',
			render: (text, record) => <RenderDevelopers {...{ record }} />,
		},
		{
			title: 'Actions',
			key: 'actions',
			render: (_text, record) => (
				<Space size='middle'>
					<Link to={`/project/view/${record?.id}`}>
						<EyeOutlined />
					</Link>
					<Link to={`/project/edit/${record?.id}`}>
						<EditOutlined />
					</Link>
					<span className='cursor-pointer'>
						<DeleteOutlined onClick={() => setDeleteModal({ visible: true, item: record.id })} />
					</span>
				</Space>
			),
		},
	]

	return (
		<div>
			<Row style={{ justifyContent: 'flex-end', marginBottom: '1rem' }}>
				<Link to='/project/create'>
					<Button style={{ alignItem: 'end' }}>
						<PlusOutlined /> Create
					</Button>
				</Link>
			</Row>

			<Table dataSource={projectsData} columns={columns} />

			<Modal
				title='Delete Record'
				visible={deleteModal.visible}
				onOk={handleDeleteModalConfirm}
				onCancel={handleDeleteModalCancel}
			>
				<p className='text-danger'>Are you sure you want to delete this record?</p>
			</Modal>
		</div>
	)
}

export default ProjectList
