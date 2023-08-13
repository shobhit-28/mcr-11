import { useContext } from "react"
import { DataContext } from "../../context/dataContext"

export const HomePage = () => {
    const { data } = useContext(DataContext)

    return (
        <div className="page">HomePage</div>
    )
}
