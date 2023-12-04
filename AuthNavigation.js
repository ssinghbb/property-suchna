import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './src/routes/Routes'
import { useSelector, useDispatch } from 'react-redux'
import { getData, storeData } from './src/utils/asyncStorageHandler'
import { setUser } from './redux/slices/userSlice'


const AuthNavigation = () => {
	const dispatch = useDispatch();

	console.log("AuthNavigation page start:",)

	const user = useSelector((state) => state?.user?.user?.user);
	// const userr = useSelector((state) => state);
	// console.log("user:", user)
	// console.log("user: in auth navigation", user?.phoneNumber)
	// console.log("user: in auth navigation", user?._id)
	const [currentUser, setCurrentUser] = useState(null)
	const [isLogin, setIsLogin] = useState(false)
	const userHandler = user => user ? setCurrentUser(user) : setCurrentUser(null)

	// console.log("user:", user)
	useEffect(() => {
		userHandler(user)

		getLocalStorageLoginInfo()
		return () => {
		}
	}, [user?._id])
	const getLocalStorageLoginInfo = async () => {
		// console.log("----------getLocalStorageLoginInfo:")
		let _data = await getData('user')
		if (_data) {
			dispatch(setUser(_data));

			// console.log("-------------_data:",await _data)
			setIsLogin(true)
		}
		else {
			setIsLogin(false)

		}
		// console.log("_data:---------", await _data)
	}

	// console.log("------isLogin", isLogin)
	return <>{isLogin ? <SignedInStack /> : <SignedOutStack />}</>
}

export default AuthNavigation