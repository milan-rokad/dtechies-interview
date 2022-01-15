import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { usersSelectors } from '../../../redux/slices/userSlice'

const { Option } = Select

function CommonForm(props) {
	const { initialValues, onSubmit, type } = props

	const usersData = useSelector(usersSelectors.selectAll)

	return (
		<Form
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 14 }}
			layout='vertical'
			initialValues={initialValues}
			onFinish={onSubmit}
		>
			<Form.Item name='title' label='Title' rules={[{ required: true }]}>
				<Input placeholder='Enter a title' disabled={type === 'VIEW'} />
			</Form.Item>

			<Form.Item name='description' label='Description' rules={[{ required: true }]}>
				<Input.TextArea placeholder='Enter a description' disabled={type === 'VIEW'} />
			</Form.Item>

			<Form.Item name='leader' label='Team Leader' rules={[{ required: true }]}>
				<Select
					placeholder='select at least one skill'
					disabled={type === 'VIEW'}
					style={{ width: '100%' }}
				>
					{usersData.map((user) => (
						<Option
							value={user.id}
							label={`${user.username} (${user.id})`}
							key={'leader' + user.id}
						>
							<div>{`${user.username} (${user.id})`}</div>
						</Option>
					))}
				</Select>
			</Form.Item>

			<Form.Item name='developers' label='Developers' rules={[{ required: true }]}>
				<Select
					mode='multiple'
					placeholder='select at least one developer'
					disabled={type === 'VIEW'}
					style={{ width: '100%' }}
				>
					{usersData.map((user) => (
						<Option
							value={user.id}
							label={`${user.username} (${user.id})`}
							key={'developers' + user.id}
						>
							<div>{`${user.username} (${user.id})`}</div>
						</Option>
					))}
				</Select>
			</Form.Item>

			<Form.Item>
				<Button style={{ marginRight: '10px' }}>
					<Link to='/user'> Cancel</Link>
				</Button>
				{type !== 'VIEW' && (
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				)}
			</Form.Item>
		</Form>
	)
}

export default CommonForm
