import React from 'react'
import { Text, View, TextInput } from 'react-native'

export default function TextArea() {
    return (
        <View className='w-full rounded-[6px] border-[1px] border-border bg-white relative'>
            <TextInput
                multiline ={true}
                selectionColor={'#343A40'}
                numberOfLines={12}
                className='px-[15px] text-[13px] py-[15px] '
                placeholder='Açıklama'
                onChangeText={(value) => { console.log('Selam') }}
                style={{textAlignVertical:'top'}}
            //value={state[type]}
            />
            <Text className='text-[12px] text-primary absolute -top-[8px] left-[10] bg-white px-[3px] border-l-[1px] border-r-[1px] border-border'>
                Baslik
            </Text>
        </View>
    )
}

