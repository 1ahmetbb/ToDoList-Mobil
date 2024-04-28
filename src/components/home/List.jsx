import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Section from '../shared/Section';
import ListItem from '../shared/ListItem';

export default function List() {
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
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </View>

            <TouchableOpacity className='mt-[10px]'>
                <Text className='text-center text-secondary tex-[11px] underline '>Hedefini Gör</Text>
            </TouchableOpacity>

        </Section>
    )
}

