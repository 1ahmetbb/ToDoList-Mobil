import React from 'react'
import { Text, View } from 'react-native'

export default function Section({ children }) {
    return (
        <View className='mt-5 mx-[10px]'>
            {children}
        </View>
    )
}

