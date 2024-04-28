import React from 'react'
import { TextInput, View, Text } from 'react-native'

export default function CustomTextInput() {
    return (
        <View className='w-full h-12 rounded-[6px] border-[1px] border-border bg-white relative'>
            <TextInput
                selectionColor={'#343A40'}
                className='h-full  px-[15px] text-[13px]'
                placeholder='Baslik'
                onChangeText={(value) => { console.log('Selam') }}
            //value={state[type]}
            />
            <Text className='text-[12px] text-primary absolute -top-[8px] left-[10] bg-white px-[3px] border-l-[1px] border-r-[1px] border-border'>
                Baslik
            </Text>
        </View>
    )
}