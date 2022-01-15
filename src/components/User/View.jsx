import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { usersSelectors } from '../../redux/slices/userSlice'
import CommonForm from './components/CommonForm'

function UserView() {
	const params = useParams()
	const id = parseInt(params?.id)

	const data = useSelector((state) => usersSelectors.selectById(state, id))

	return <CommonForm {...{ initialValues: data, type: 'VIEW' }} />
}

export default UserView
