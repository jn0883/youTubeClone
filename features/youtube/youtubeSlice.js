import { configureStore } from '@reduxjs/toolkit'

const initialState = {
    video:[],
    currentPlaying: null,
    searchTerm:"",
    searchResults:[],
    nextpageToker:null,
    recommendedVideo:[]

}