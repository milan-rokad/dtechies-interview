import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { projectsSelectors } from '../../redux/slices/projectSlice'
import CommonForm from './components/CommonForm'

function ProjectView() {
	const params = useParams()
	const id = parseInt(params?.id)

	const data = useSelector((state) => projectsSelectors.selectById(state, id))

	return <CommonForm {...{ initialValues: data, type: 'VIEW' }} />
}

export default ProjectView
