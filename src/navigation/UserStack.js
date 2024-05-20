import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddTaskScreen, CompletedScreen, HomeScreen, Profile, TaskScreen } from '../screen';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from 'react-native'

const Tab = createBottomTabNavigator();

export default function UserStack() {
    return (

        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text className='text-[11px] text-main font-medium'>Ana Sayfa</Text>
                                :
                                <Text className='text-[11px] text-secondary '>Ana Sayfa</Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <Entypo name="home" size={20} color="#3B5BDB" />
                                :
                                <Entypo name="home" size={20} color="#868E96" />
                        ),
                    }}
                />

                <Tab.Screen name="Task" component={TaskScreen}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text className='text-[11px] text-main font-medium'>Tasklarım</Text>
                                :
                                <Text className='text-[11px] text-secondary '>Tasklarım</Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <FontAwesome5 name="tasks" size={20} color="#3B5BDB" />
                                :
                                <FontAwesome5 name="tasks" size={20} color="#868E96" />
                        ),
                    }}
                />

                <Tab.Screen name="AddTask" component={AddTaskScreen}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text className='text-[11px] text-main font-medium'>Task Ekle</Text>
                                :
                                <Text className='text-[11px] text-secondary '>Task Ekle</Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <Entypo name="add-to-list" size={23} color="#3B5BDB" />
                                :
                                <Entypo name="add-to-list" size={23} color="#868E96" />
                        ),
                    }}
                />

                <Tab.Screen name="Completed" component={CompletedScreen}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text className='text-[11px] text-main font-medium'>Tamamlanan</Text> :
                                <Text className='text-[11px] text-secondary '>Tamamlanan</Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <MaterialIcons name="task-alt" size={20} color="#3B5BDB" />
                                :
                                <MaterialIcons name="task-alt" size={20} color="#868E96" />
                        ),
                    }}
                />

                <Tab.Screen name="Profile" component={Profile}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            focused ?
                                <Text className='text-[11px] text-main font-medium'>Profil</Text> :
                                <Text className='text-[11px] text-secondary '>Profil</Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            focused ?
                                <FontAwesome5 name="user" size={20} color="#3B5BDB" />
                                :
                                <FontAwesome5 name="user" size={20} color="#868E96" />

                        )
                    }}
                /> 
            </Tab.Navigator>
        </NavigationContainer>
    )
}






