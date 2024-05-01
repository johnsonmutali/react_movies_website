import "./index.scss";
import {
  NavLink,
  Outlet,
  useNavigate
} from "react-router-dom";

import {
  useState
} from "react"

import Dp from "../../assets/images/hyde.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logo } from "../Icons.jsx"

const Layout = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const handleSubmit = () => {
    navigate("/movies")
  }
  return (
    <div className="layout">
      <header>
        <div className="logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="nav">
          <NavLink to="/">home</NavLink>
          <NavLink to="movies">movies</NavLink>
          <NavLink to="tv">shows</NavLink>
          <NavLink to="genre">genres</NavLink>
          <NavLink to="about">about</NavLink>
          <NavLink to="contact">contact</NavLink>
        </div>

        <div className="dp img-container">
          <img
            className="dp__img"
            src={Dp}
          />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div >
  )
}

export default Layout