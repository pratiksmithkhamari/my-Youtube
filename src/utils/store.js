import {configureStore} from '@reduxjs/toolkit'
import navSlice from './navSlice'
import searchSlice from './searchSlice'
import messageSlice from './messageSlice'

const store = configureStore({
    reducer:{
        navBar: navSlice,
        search: searchSlice,
        chat: messageSlice,
    },
})

export default store