import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/homePage/homePage"
import { WatchlistPage } from "./pages/watchlistPage/watchlistPage"
import { DetailsPage } from "./pages/detailsPage/detailsPage"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/watchlist" element={<WatchlistPage />}/>
        <Route path="/vid/:videoID" element={<DetailsPage />}/>
      </Routes>
    </div>
  )
}

export default App
