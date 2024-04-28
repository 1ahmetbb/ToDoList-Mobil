import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';

export default function Header({ setModalVisible }) {
    return (
        <View className='bg-white flex-row justify-between p-[10] items-center'>
            <View className='flex-row gap-[7px] items-center'>
                <View>
                    <Image
                        className=''
                        source={require('../../../assets/images/user.jpg')}
                    />
                </View>
                <View>
                    <Text className='text-primary font-medium mb-[3px]' >Hoşgeldin Ahmet</Text>
                    <Text className='text-secondary' >Üye</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <View className='relative w-[32px] h-[32px] bg-[#F8F9FA] justify-center items-center rounded-full' >
                    <Feather name="bell" size={18} color="#343A40" />

                    <View className='absolute right-1 top-1 bg-[#FF3200] w-[12px] h-[12px]  rounded-full justify-center items-center '>

                        <Text className='text-[10px] text-white'>1</Text>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

