import React from 'react'
import UserStack from './UserStack'
import AuthStack from './AuthStack'
import Loader from '../components/shared/Loader';
import { useSelector } from 'react-redux'
import { StatusBar } from 'react-native';
import app from '../../firebaseConfig';

export default function StackNavigatior() {
    const { loader } = useSelector((state) => state.general)
    const isLogin = true;


    return (
        <>
            {isLogin ? <UserStack /> : <AuthStack />}

            {loader && <Loader loader = {loader}/>}

            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />

        </>
    )
}

