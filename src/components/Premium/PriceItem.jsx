import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

export default function PriceItem({ item: { price1, price2, price3, title, icon } }) {

    const [selected, setSelected] = useState(false)

    return (
        <Pressable
            className={` border mt-[10px] border-border rounded-[6px] px-[10px] py-[15px] ${selected && 'border-main'} `}
            onPress={() => setSelected(!selected)}>

            <View className='flex-row justify-between items-center '>
                <View className='flex-row gap-[7px] items-center'>
                    {icon}
                    <Text className={`text-primary text-[16px] font-medium ${selected && 'text-main'}`}>{title}</Text>
                </View>

                <View>
                    <Text className={`text-primary text-[16px] font-bold ${selected && 'text-main'}`}>{price1}<Text className='text-[13px]'>{price2}</Text><Text>{price3}</Text></Text>
                </View>
            </View>

        </Pressable>
    )
}
