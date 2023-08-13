import { useContext } from "react"
import { useParams } from "react-router-dom"
import { DataContext } from "../../context/dataContext"

export const DetailsPage = () => {
    const { videoID } = useParams()

    const { data, addToWatchList, removeFromWatchList } = useContext(DataContext)


    const video = data.find(({ id }) => String(id) === videoID)

    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div className="w-6/12 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 flex gap-4 rounded-xl mt-4">
                <div className="w-1/2">
                    <img src={video.imageURL} alt={video.title} />
                </div>
                <div className="w-1/2 flex flex-col justify-evenly font-medium">
                    <p className="text-3xl font-semibold">{video.title}</p>
                    <p className="">{video.summary}</p>
                    <p className="">{`Year: ${video.year}`}</p>
                    <p className="">{`Genre: ${video.genre.join(', ')}`}</p>
                    <p className="">{`Rating: ${video.rating}`}</p>
                    <p className="">{`Director: ${video.director}`}</p>
                    <p className="">{`Writer: ${video.writer}`}</p>
                    <p className="">{`Cast: ${video.cast.join(', ')}`}</p>
                    {video.watchlist
                        ?
                        <button className="w-full bg-black text-white p-2 rounded-lg" onClick={() => removeFromWatchList(video.id)}>Remove from Watchlist</button>
                        :
                        <button className="w-full bg-black text-white p-2 rounded-lg" onClick={() => addToWatchList(video.id)}>Add to Watchlist</button>
                    }
                </div>
            </div>
        </div>
    )
}
