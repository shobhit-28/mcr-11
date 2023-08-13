/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { movies } from "../data/data";

export const DataContext = createContext()

export const DataHandler = ({children}) => {

    const [data, setData] = useState(localStorage.getItem('Movies') ? JSON.parse(localStorage.getItem('Movies')) : movies)

    const addToWatchList = videoID => {
        localStorage.setItem('Movies', JSON.stringify(data.map((movie) => movie.id === videoID ? {...movie, watchlist: true} : movie )))
        setData(data.map((movie) => movie.id === videoID ? {...movie, watchlist: true} : movie ))
    }
    
    const removeFromWatchList = videoID => {
        localStorage.setItem('Movies', JSON.stringify(data.map((movie) => movie.id === videoID ? {...movie, watchlist: false} : movie )))
        setData(data.map((movie) => movie.id === videoID ? {...movie, watchlist: false} : movie ))
    }

    return (
        <DataContext.Provider value={{
            data,
            addToWatchList,
            removeFromWatchList
        }}>
            {children}
        </DataContext.Provider>
    )

}