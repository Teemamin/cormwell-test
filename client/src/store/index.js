import { configureStore, createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: null,
    userLoading: true
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state,action){
            state.user = action.payload
            state.userLoading = false
        },
        logoutUser(state){
            state.user = null
            state.userLoading = false
        },
        updateUserLoading(state,action){
            state.userLoading = action.payload
        }
    }

})

export const userActions = userSlice.actions

const store = configureStore({
  reducer: {userState: userSlice.reducer},
})

export default store


