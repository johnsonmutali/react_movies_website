//pages
import "./index.scss"

//react
import { Link } from "react-router-dom"

export default function Errors({ error }) {
  return (
    <div className="ErrorElement">
      <div className="error__type">{error.message}</div>
      <div className="error__title">Seems like we have encountered an error.</div>
      <div className="error__message">You've landed on a URL that does't seem to
        exist in Filamu. Here's some options you can try:</div>
      <ul className="error__solutions">
        <li className="error__solutions-item">
          If you think this error is on our part, please <Link to="/contact">let us know </Link>
        </li>
        <li className="error__solutions-item">You could try a search up the header that should turn up what you are looking for</li>
        <li className="error__solutions-item">
          If you'd like to just browse, head over to the <Link to="/">home page</Link>
        </li>
        <li className="error__solutions-item">
          Make sure you're internet is turned on and is working.
        </li>
      </ul>
    </div>
  )
}

