import React, { useState } from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'

export default function Input({ item: { title, icon, isSecure = false, isSecureIcon, type }, dispatch, state }) {

    const [isVisible, setIsVisible] = useState(true);

    const handleChangeVisible = () => { setIsVisible(!isVisible) }

    const changeFormInfo = (type, value) => {
        dispatch(
            { type, value, }
        )
    }

    return (
        <>
            {
                isSecure ?
                    <View className='w-full h-12 rounded-[6px] border-[1px] border-border bg-white relative'>
                        <View className='absolute left-[10px] top-[12]'>{icon}</View>
                        <TextInput
                            selectionColor={'#343A40'}
                            className='h-full  px-[37px] text-[13px]'
                            secureTextEntry={isVisible}
                            placeholder={title}
                            onChangeText={(value) => { changeFormInfo(type, value) }}
                            value={state[type]}
                        />
                        <Text className='text-[12px] text-primary absolute -top-[8px] left-[10] bg-white px-[3px] border-l-[1px] border-r-[1px] border-border'>
                            {title}
                        </Text>
                        <TouchableOpacity className='absolute right-[10px] top-[12]' onPress={handleChangeVisible} >
                            {
                                isVisible
                                    ?
                                    isSecureIcon.notVisible
                                    :
                                    isSecureIcon.visible
                            }
                        </TouchableOpacity>
                    </View>
                    :
                    <View className='w-full h-12 rounded-[6px] border-[1px] border-border bg-white relative'>
                        <View className='absolute left-[10px] top-[12]'>{icon}</View>
                        <TextInput
                            selectionColor={'#343A40'}
                            className='h-full  px-[37px] text-[13px]'
                            placeholder={title}
                            onChangeText={(value) => { changeFormInfo(type, value) }}
                            value={state[type]}
                        />
                        <Text className='text-[12px] text-primary absolute -top-[8px] left-[10] bg-white px-[3px] border-l-[1px] border-r-[1px] border-border'>
                            {title}
                        </Text>
                    </View>
            }
        </>
    )
}