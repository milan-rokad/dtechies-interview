import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../redux/slices/userSlice'
import CommonForm from './components/CommonForm'

const initialValues = {
	username: '',
	aboutMe: '',
	email: '',
	skills: [],
}

function UserCreate() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onFinish = (values) => {
		dispatch(addUser({ id: new Date().getTime(), ...values }))
		navigate('/user')
	}

	return <CommonForm {...{ onSubmit: onFinish, initialValues }} />
}

export default UserCreate
