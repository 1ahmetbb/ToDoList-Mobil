import React from 'react'
import { Text, View } from 'react-native'
import Header from '../components/Premium/Header'
import PremiumContent from '../components/Premium/PremiumContent'

export default function PremiumScreen() {
    return (
        <View className='flex-1 '>
            <Header />
            <PremiumContent />
        </View>
    )
}

