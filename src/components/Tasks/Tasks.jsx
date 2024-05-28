import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Section from '../shared/Section'
import { AntDesign } from '@expo/vector-icons';
import ListItem from '../shared/ListItem';
import { getTask } from '../../taskProcess/taskProcess';


export default function Tasks() {

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        getTaskList();
    }, [])

    const getTaskList = async () => {
        const tasks = await getTask();
        tasks.forEach(doc => {
            const segments = doc._key.path.segments;
            const lenght = segments.lenght;
            const taskId = segments[lenght - 1]
            //console.log(segments[lenght-1])
            setTaskList(prevList => [...prevList, { id: taskId, ...doc.data() }])
        });
    }

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
                {/* <ListItem detail={true} /> */}

                {taskList.map((item, index) => (
                    <View key={index}>
                        <ListItem item={true} />
                    </View>
                ))}

            </View>
        </Section>
    )
}

