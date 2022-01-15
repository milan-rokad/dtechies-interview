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
import { deleteUser, usersSelectors } from '../../redux/slices/userSlice'

function RenderSkills({ record }) {
	const allSkills = useSelector((state) => state?.common?.skills || [])
	const skills = allSkills.filter((skill) => record.skills.includes(skill.id))
	return skills.map((skill) => skill.title).join(', ')
}

function UserList() {
	const dispatch = useDispatch()

	const [deleteModal, setDeleteModal] = useState({ visible: false, item: null })

	const usersData = useSelector(usersSelectors.selectAll)

	const handleDeleteModalCancel = () => {
		setDeleteModal(false)
	}

	const handleDeleteModalConfirm = () => {
		dispatch(deleteUser(deleteModal.item))
		handleDeleteModalCancel()
	}

	const columns = [
		{
			title: 'Username',
			dataIndex: 'username',
			key: 'username',
		},
		{
			title: 'About Me',
			dataIndex: 'aboutMe',
			key: 'aboutMe',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Skills',
			key: 'skills',
			render: (_text, record) => <RenderSkills {...{ record }} />,
		},
		{
			title: 'Actions',
			key: 'actions',
			render: (_text, record) => (
				<Space size='middle'>
					<Link to={`/user/view/${record?.id}`}>
						<EyeOutlined />
					</Link>
					<Link to={`/user/edit/${record?.id}`}>
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
				<Link to='/user/create'>
					<Button style={{ alignItem: 'end' }}>
						<PlusOutlined /> Create
					</Button>
				</Link>
			</Row>

			<Table dataSource={usersData} columns={columns} />

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

export default UserList
