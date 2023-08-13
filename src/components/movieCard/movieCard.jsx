/* eslint-disable react/prop-types */

import { useContext } from "react"
import { DataContext } from "../../context/dataContext"

import { AiFillClockCircle, AiOutlineClockCircle } from "react-icons/ai"

export const MovieCard = ({ movie }) => {
    const { addToWatchList, removeFromWatchList } = useContext(DataContext)

    const addToWatchListClickHandler = event => {
        event.stopPropagation()
        addToWatchList(movie.id)
    }
    
    const removeFromWatchListClickHandler = event => {
        event.stopPropagation()
        removeFromWatchList(movie.id)
    }

    return (
        <div className="w-[17rem] relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] duration-700 hover:shadow-[rgba(0,_0,_0,_0.5)_0px_8px_18px] rounded-lg overflow-hidden flex flex-col justify-between pb-2 cursor-pointer">
            <div className="w-[17rem]">
                <img src={movie.imageURL} alt={movie.title} />
            </div>
            <div className="p-2 flex flex-col gap-2">
                <p className="text-xl font-semibold text-center">{movie.title}</p>
                <p className="text-sm text-center">{movie.summary}</p>
            </div>
            {movie?.watchlist
                ?
                <div className="absolute top-0 right-0 bg-white/90 p-2" onClick={(event) => removeFromWatchListClickHandler(event)}>
                    <AiFillClockCircle />
                </div>
                :
                <div className="absolute top-0 right-0 bg-white/90 p-2" onClick={(event) => addToWatchListClickHandler(event)}>
                    <AiOutlineClockCircle />
                </div>

            }
        </div>
    )
}
