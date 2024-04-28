import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loader: false,
    errorMessage: {
        statusCode: false,
        message: '',

    },
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setLoader: (state) => {
            state.loader = !state.loader
        },

        setErrorMessage: (state, actions) => {
            //console.log(actions)
            state.errorMessage.statusCode = actions.payload.statusCode
            state.errorMessage.message = actions.payload.message
        }
    },
},)

// Action creators are generated for each case reducer function
export const { setLoader, setErrorMessage } = generalSlice.actions

export default generalSlice.reducer