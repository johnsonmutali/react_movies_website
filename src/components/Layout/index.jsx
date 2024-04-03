import "./index.scss";
import {
    NavLink,
    Outlet,
    Form,
    useNavigate
} from "react-router-dom";

import {
    useState
} from "react"

import Dp from "../../assets/images/hyde.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logo, Search } from "../Icons.jsx"


const Layout = ({ onSearch }) => {
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
                <Form
                    className="header-form"
                    method="get"
                    name="search"
                    onSubmit={(e) => {
                        e.preventDefault()
                        onSearch(query)
                        handleSubmit()
                    }}>
                    <label
                        className="header-label"
                        htmlFor="searchbar"
                    ><button className="btn search-btn" type="submit">
                            <Search /></button></label>
                    <input
                        id="searchbar"
                        name="search"
                        type="text"
                        placeholder="search for a movie"
                        onChange={e => setQuery(e.target.value)}
                    />
                </Form>
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