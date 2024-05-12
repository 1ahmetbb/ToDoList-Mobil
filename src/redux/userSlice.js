import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    signOut,
    signInWithEmailAndPassword,
} from 'firebase/auth'

const initialState = {
    name: '',
    surname: '',
    email: '',
    password: '',
    rpassword: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserValidationInput: (state, action) => {
            const { type, value } = action.payload
            state[type] = value
        },

        signinWithEmailAndPassword: (state, action) => {

        },
    },
})

//logout
export const logout = createAsyncThunk('user/logout', async () => {
    try {

    } catch (error) {

    }
})

//oto kayit
export const register = createAsyncThunk('user/register', async ({ email, password }) => {
    try {
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        const token = userCredential.stsTokenManager.accessToken

        await sendEmailVerification(user)

        await AsyncStorage.setItem('')

        return token
    } catch (error) {
        throw error
    }
})


// Action creators are generated for each case reducer function
export const { setUserValidationInput, signinWithEmailAndPassword } = userSlice.actions

export default userSlice.reducer