import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Section from '../shared/Section'
import { AntDesign } from '@expo/vector-icons';
import ListItem from '../shared/ListItem';


export default function Tasks() {
    return (
        <Section>
            <View className='flex-row justify-between items-center'>
                <Text className='text-[16px] text-primary font-medium '>Yapılacaklar Listesi</Text>

                <TouchableOpacity className='flex-row gap-[7px] items-center '>
                    <AntDesign name="pluscircle" size={16} color="#3B5BDB" />
                    <Text className='text-main text-[13px]'>Task Ekle</Text>
                </TouchableOpacity>
            </View>

            <View className='mt-[10px] '>
                <ListItem detail={true} />
                <ListItem detail={true} />
                <ListItem detail={true} />
                <ListItem detail={true} />
                <ListItem detail={true} />
            </View>
        </Section>
    )
}

