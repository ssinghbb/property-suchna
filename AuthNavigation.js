import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './src/routes/Routes'
import { useSelector, useDispatch } from 'react-redux'
import { getData, storeData } from './src/utils/asyncStorageHandler'
import { setUser } from './redux/slices/userSlice'
import { useNavigation } from '@react-navigation/native'
import * as ExpoLinking from 'expo-linking';
import { Linking } from 'react-native'

const AuthNavigation = () => {
	// console.log("navigation:", navigation)
	const dispatch = useDispatch();
	const navigation=useNavigation()
	// console.log("nav:", nav.navigate('test'))
	

	// console.log("AuthNavigation page start:",)

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
		//userHandler(user)
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
			handleDeepLink()
		}
		else {
			setIsLogin(false)

		}
		// console.log("_data:---------", await _data)
	}
	const handleDeepLink = async () => {
		// Handle the deep link URL, navigate to the appropriate screen, etc.
		// console.log('Deep link received:', url);

		// let aaa= Linking.createURL("https://abc.property.com/test")
		// console.log("aaa:", aaa)
		// let iii=await ExpoLinking.createURL("https://abc.property.com/?id=658bf3151cd1ff7aced044cb")
		// console.log("ExpoLinking:",await ExpoLinking.parse(iii))
		// console.log("iii:", iii)

		let url = await Linking.getInitialURL()
		console.log("ab:", url)
		if (url) {
			let postId=  ExpoLinking.parse(url)
			console.log("postId:", postId?.queryParams?.id)
			let _postId= postId?.queryParams?.id
			// Alert.alert(_postId, "postid");

			// Alert.alert(url, "first if");
			if (url.includes('exp://192.168.149.226:8081') || url.includes('https://abc.property.com/post')) {
				// Alert.alert(url, "if");
				navigation.navigate("postId",{id:_postId})

  
		  }
		}
		else {
			// Alert.alert(url, "else")
		}
		
  
	  };

	// console.log("------isLogin", isLogin)
	return <>{isLogin ? <SignedInStack /> : <SignedOutStack />}</>
}

export default AuthNavigation