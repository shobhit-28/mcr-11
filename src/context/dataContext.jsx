/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { movies } from "../data/data";

export const DataContext = createContext()

export const DataHandler = ({children}) => {

    const initialState = {
        movieData: movies,
    }

    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState(initialState)

    return (
        <DataContext.Provider value={{
            data: data.movieData
        }}>
            {children}
        </DataContext.Provider>
    )

}