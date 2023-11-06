import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './src/routes/Routes'
// import { SignedInStack, SignedOutStack } from './navigation'
import { useSelector, useDispatch } from 'react-redux'



const AuthNavigation = () => {
	const user = useSelector((state) => state.user.user);
	console.log("user:", user)

	const [currentUser, setCurrentUser] = useState(null)


	const userHandler = user =>
		user ? setCurrentUser(user) : setCurrentUser(null)

	useEffect(() => {

		userHandler(user)
		return () => {

		}
	}, [user])


	return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>
}

export default AuthNavigation