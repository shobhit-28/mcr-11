/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { movies } from "../data/data";

export const DataContext = createContext()

export const DataHandler = ({children}) => {

    const [data, setData] = useState(movies)

    const addToWatchList = videoID => {
        setData(data.map((movie) => movie.id === videoID ? {...movie, watchlist: true} : movie ))
    }
    
    const removeFromWatchList = videoID => {
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