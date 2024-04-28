import React from 'react'
import { FlatList, Text, View } from 'react-native'
import PriceItem from './PriceItem'
import { PremiumPackages } from '../../utils/const/PremiumPrice'

export default function PriceList() {
    return (
        <View>
            <FlatList
                data={PremiumPackages}
                renderItem={({ item }) => <PriceItem item={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


