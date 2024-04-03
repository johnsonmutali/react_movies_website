import "./index.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Logo, Hamburger, Search } from "../Icons.jsx"

import {
    faFacebook,
    faTwitter,
    faGithub
} from '@fortawesome/free-brands-svg-icons'

import {
    NavLink,
    Form
} from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="pages footer__section">
                <ul className="pages__list">
                    <h3 className="footer__title">pages</h3>
                    <li className="footer__item">
                        <NavLink to="/"  >home</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink to="/movies"  >movies</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink to="/tv"  >tv</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink to="/genre"  >genres</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink to="/about"  >about</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink to="/contact"  >contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="genres footer__section">
                <ul className="footer__list">
                    <h3 className="footer__title">pages</h3>
                    <li className="footer__item">
                        <NavLink to="/movies/action"  >action</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink to="/movies/aniamtion"  >animation</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink to="/movies/thriller"  >thriller</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink to="/movies/commedy"  >commedy</NavLink>
                    </li>
                    <li className="footer__item">
                        <NavLink to="/movies/reality"  >reality tv</NavLink>
                    </li>
                </ul>
            </div>
            <div className="cta footer__section">
                <h3 className="footer__title">subscribe</h3>
                <p>
                    subscribe to our mailing list to get latest news and updates about
                    movies, shows and more
                </p>
                <Form
                    method="post"
                    action="/layout"
                    className="footer__form"
                >
                    <input
                        className="cta__input"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required />
                    <button className="btn cta__btn" type="submit">subscribe</button>
                </Form>
            </div>
            <div className="socials footer__section">
                <div className="socials__links">
                    <h3 className="footer__title">social links</h3>
                    <div className="icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </div>
                <div className="socials__copy-right">
                    <h3 className="footer__title">copyright</h3>
                    <p className="highlight">copyrights &c; filamu.com. All rights reserved.</p>
                    <p className="disclaimer">Disclaimer: This site does not store any
                        files on a server. All contents are provided by an affiliated
                        third party</p>
                </div>
            </div>
        </div>
    )
}