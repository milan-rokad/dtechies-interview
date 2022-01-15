import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser, usersSelectors } from '../../redux/slices/userSlice'
import CommonForm from './components/CommonForm'

function UserEdit() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const params = useParams()
	const id = parseInt(params?.id)

	const data = useSelector((state) => usersSelectors.selectById(state, id))

	const onFinish = (values) => {
		dispatch(updateUser({ id, changes: values }))
		navigate('/user')
	}

	return <CommonForm {...{ onSubmit: onFinish, initialValues: data }} />
}

export default UserEdit
