import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllSkills } from '../../../redux/slices/commonSlice'

const { Option } = Select

function CommonForm(props) {
	const { initialValues, onSubmit, type } = props

	const skills = useSelector(getAllSkills)

	return (
		<Form
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 14 }}
			layout='vertical'
			initialValues={initialValues}
			onFinish={onSubmit}
		>
			<Form.Item name='username' label='Username' rules={[{ required: true }]}>
				<Input placeholder='Enter a username' disabled={type === 'VIEW'} />
			</Form.Item>

			<Form.Item name='aboutMe' label='About Me'>
				<Input.TextArea placeholder='Enter about yourself' disabled={type === 'VIEW'} />
			</Form.Item>

			<Form.Item name='email' label='Email' rules={[{ required: true, type: 'email' }]}>
				<Input placeholder='Enter an email' disabled={type === 'VIEW'} />
			</Form.Item>

			<Form.Item name='skills' label='Skills' rules={[{ required: true }]}>
				<Select
					mode='multiple'
					placeholder='select at least one skill'
					disabled={type === 'VIEW'}
					style={{ width: '100%' }}
				>
					{skills.map((skill) => (
						<Option value={skill.id} label={skill.title} key={skill.id}>
							<div>{skill.title}</div>
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
