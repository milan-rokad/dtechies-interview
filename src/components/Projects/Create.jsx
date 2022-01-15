import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProject } from '../../redux/slices/projectSlice'
import CommonForm from './components/CommonForm'

const initialValues = {
	title: '',
	description: '',
	leader: '',
	developers: [],
}

function ProjectCreate() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onFinish = (values) => {
		dispatch(addProject({ id: new Date().getTime(), ...values }))
		navigate('/project')
	}

	return <CommonForm {...{ onSubmit: onFinish, initialValues }} />
}

export default ProjectCreate
