import React, { useEffect } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { setLoader } from '../../redux/generalSlice'
import { useDispatch } from 'react-redux'


export default function Loader({ loader }) {

    const dispatch = useDispatch()
    useEffect(() => {
        let timeout;

        timeout = setTimeout(() => {
            dispatch(setLoader())
        }, 2000);

        return () => {
            clearTimeout(timeout)
        };

    }, [loader])

    return (
        <View className='absolute w-full h-full bg-[#91f2ae4f] justify-center items-center '>

            <ActivityIndicator size="small" color="#3B5BDB" />

            <Text className='text-main ' >Loader...</Text>

        </View>
    )
}

