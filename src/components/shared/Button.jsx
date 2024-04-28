import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default function Button({ title }) {
    return (
        <View className='bg-main w-full h-12 rounded-[6px] justify-center items-center'>
            <Text className='text-white text-[16px] font-bold'>{title}</Text>
        </View>
    )
}

