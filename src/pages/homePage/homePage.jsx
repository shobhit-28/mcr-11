import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/dataContext"
import { MovieCard } from "../../components/movieCard/movieCard"

export const HomePage = () => {
    const { data } = useContext(DataContext)

    const [searchData, setSearchData] = useState(data)

    const searchMovies = (event) => {
        setSearchData(
            [
                ...data.filter((movie) => movie.title.slice(0, event.target.value.length).toLowerCase() === event.target.value.toLowerCase()),
                ...data.filter((movie) => movie.title.slice(0, event.target.value.length).toLowerCase() !== event.target.value.toLowerCase())
                    .filter((movie) => movie.title.concat(movie.director).concat(movie.cast.join('')).toLowerCase().includes(event.target.value.toLowerCase()))
            ]
        )
    }

    useEffect(() => {
        setSearchData(data)
    }, [data])

    return (
        <div className="page">
            <input type="text" name="" id="" placeholder="Search" className="border outline-none py-2 px-4 my-6 w-full rounded-3xl text-center text-lg font-medium" onChange={(event) => searchMovies(event)} />
            {searchData.length > 0
                ?
                <div className="flex flex-wrap gap-6">
                    {searchData.map((data, index) => <MovieCard movie={data} key={index} />)}
                </div>
                :
                <div className="w-full h-[55vh] flex justify-center items-center">
                    <p className="text-2xl font-semibold">
                        NOT FOUND
                    </p>
                </div>
            }
        </div>
    )
}
