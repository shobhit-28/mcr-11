import { useContext } from "react"
import { DataContext } from "../../context/dataContext"
import { MovieCard } from "../../components/movieCard/movieCard"

export const WatchlistPage = () => {
    const { data } = useContext(DataContext)

    return (
        <div className="page">
            {data.filter((movie) => movie.watchlist).length > 0
                ?
                <div className="flex flex-wrap gap-6 mt-4">
                    {data.filter((movie) => movie.watchlist).map((data, index) => <MovieCard movie={data} key={index} />)}
                </div>
                :
                <div className="w-full h-[75vh] flex justify-center items-center">
                    <p className="text-2xl font-semibold">
                        Add Movies to watchlist to see them here
                    </p>
                </div>
            }
        </div>
    )
}
