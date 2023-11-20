import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    console.log("value:", value)
    console.log("key:", key)
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        return true;
    } catch (e) {
        console.log("e:", e)
        // saving error
        return false;
    }
};
export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        console.log("jsonValue:", jsonValue)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("e:", e)
        // error reading value
    }
};

export const removeLocalStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        console.log("e:", e)
        // remove error
    }

    console.log('Done.')
}