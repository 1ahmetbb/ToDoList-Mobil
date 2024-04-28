import React from 'react'
import { Dimensions, ScrollView, TouchableOpacity, View } from 'react-native'
import PriceList from './PriceList'
import PremiumProperty from './PremiumProperty'
import Button from '../shared/Button'

export default function PremiumContent() {

    const width = Dimensions.get('window').width - 90

    return (
        <ScrollView className='flex-1 mx-[10px] -mt-5 p-[10px] rounded-[6px] bg-white mb-5'>
            <PriceList />
            <PremiumProperty />
            <View className='items-center'>
                <TouchableOpacity style={{ width: width }} className='mt-5 '>
                    <Button title={'Devam Et'} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
