import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/homePage/homePage"
import { WatchlistPage } from "./pages/watchlistPage/watchlistPage"
import { DetailsPage } from "./pages/detailsPage/detailsPage"
import { NavBar } from "./components/navBar/navBar"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/watchlist" element={<WatchlistPage />}/>
        <Route path="/vid/:videoID" element={<DetailsPage />}/>
      </Routes>
    </div>
  )
}

export default App
