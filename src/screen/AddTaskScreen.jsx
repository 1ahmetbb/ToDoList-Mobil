import React, {useReducer} from 'react'
import { Text, View } from 'react-native'
import AddTaskSvg from '../components/AddTask/AddTaskSvg'
import CustomTextInput from '../components/shared/TextInput'
import Button from '../components/shared/Button'
import TextArea from '../components/shared/TextArea'
import Dropdown from '../components/shared/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { setErrorMesage} from '../redux/generalSlice'

export default function AddTaskScreen() {
    const reduxDispatch = useDispatch();
    const { errorMesage } = useSelector((state) => state.general)

    
    const initialState = {
        title: '',
        icon: '',
        description: ''
    }
    const [state, dispatch] = useReducer(inputReducer, initialState)

    const addTaskTamplate = () => {
        if (Boolean(state.title.trim()) || Boolean(state.title.trim())) {
            addTask(state)
            dispatch({ type: 'title', value: '' })
            dispatch({ type: 'description', value: '' })
        } else {
            reduxDispatch(setErrorMesage({ statusCode: true, message: 'Lutfen alanlari doldurunuz' }))
        }
    }

    return (
        <View className='bg-white flex-1 m-[10px] p-[10px] rounded-[6px] '>

            <View className='w-full items-center '>
                <AddTaskSvg />
            </View>

            <View className='mt-5 w-full '>
                <CustomTextInput dispatch={dispatch} state={state} title='Baslik' type='title' />
            </View>

            <View className='mt-5 w-full '>
                <Dropdown type='icon' dispatch={dispatch} state={state} />
            </View>

            <View className='mt-5 w-full '>
                <TextArea  dispatch={dispatch} state={state} title='Aciklama' type='description'/>
            </View>

            <TouchableOpacity className='mt-5 w-3/5 ' onPress={addTaskTamplate}>
                <Button title={'Ekle'} />
            </TouchableOpacity>

        </View>
    )
}

