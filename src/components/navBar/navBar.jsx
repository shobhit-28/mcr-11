import { NavLink } from "react-router-dom"

export const NavBar = () => {

  return (
    <div className="fixed h-[10vh] w-full flex justify-around items-center bg-white/80 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <NavLink className={({isActive}) => `text-xl font-semibold ${isActive && 'text-red-500'}`} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => `text-xl font-semibold ${isActive && 'text-red-500'}`} to='/watchlist'>WatchList</NavLink>
    </div>
  )
}
