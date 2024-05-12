import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signOut,
} from "firebase/auth";


export const loginWithEmailAndPassword = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        return getUserData(userCredential)

    } catch (error) {
        throw error;
    }
}

export const registerWithEmailAndPassword = async (email, password) => {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)

        return getUserData(userCredential)

    } catch (error) {
        console.log('Error register in: ', error)
        throw error;
    }
}

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




const getUserData = (userCredential) => {
    const user = userCredential.user
    const token = user.stsTokenManager.accessToken

    return userData = { user, token }
}