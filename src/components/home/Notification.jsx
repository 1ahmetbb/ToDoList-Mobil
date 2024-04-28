import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Notification({setModalVisible}) {

    return (
        <View className='bg-[#343a4080] w-full h-full'>
        <View className='bg-white w-80 h-full absolute right-0 '>
            <View className='p-[10px] '>
                <Text className='text-primary font-medium text-[16px] '>Duyurular</Text>

                <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    className='w-[25px] h-[25px] bg-[#F8f9fa] rounded-full items-center absolute right-[10px] top-[8px] '>
                    <Ionicons name="close" size={20} color="#343A40" />
                </TouchableOpacity>

                <View className='mt-5 '>
                    <TouchableOpacity className='mt-[10px] bg-[#f8f9fa] flex-row justify-between items-center p-[10px] '>
                        <View className='flex-row gap-[7px] items-center '>
                            <MaterialIcons name="local-post-office" size={20} color="#343A40" />

                            <View>
                                <Text className='text-primary text-[13px] '>Yeni Güncelleme Geldi</Text>

                                <Text className='text-secondary text-[11px] mt-[3px]'>V1.4.3</Text>
                            </View>
                        </View>

                        <MaterialIcons name="keyboard-arrow-right" size={20} color="#343A40" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    )
}

