import { configureStore, createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state,action){
            state.user = action.payload
        },
        logoutUser(state){
            state.user = null
        }
    }

})

export const userActions = userSlice.actions

const store = configureStore({
  reducer: {userState: userSlice.reducer},
})

export default store


