import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { projectsSelectors, updateProject } from '../../redux/slices/projectSlice'
import CommonForm from './components/CommonForm'

function ProjectEdit() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const params = useParams()
	const id = parseInt(params?.id)

	const data = useSelector((state) => projectsSelectors.selectById(state, id))

	const onFinish = (values) => {
		dispatch(updateProject({ id, changes: values }))
		navigate('/project')
	}

	return <CommonForm {...{ onSubmit: onFinish, initialValues: data }} />
}

export default ProjectEdit
