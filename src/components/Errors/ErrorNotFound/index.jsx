import "./index.scss"

import { Link } from "react-router-dom"

const ErrorNotFound = () => {
  return (
    <div className="errorNotFound">
      <h2 className="error-type">invalid destination!</h2>
      <h1 className="error-title">sorry, we can't seem to find the URL you are looking for</h1>
      <p className="error-text">Youve landed on a URL that doesnt seem to exist
        on filamu. Here are some options:</p>
      <ul className="error-list">
        <li className="error-list_item">If you think the error is on our part,
          please <Link to="/contact"> let us know</Link></li>
        <li className="error-list_item">If you'd like to just browse, head over to the <Link to="/movies"> movies page</Link></li>
      </ul>
    </div>
  )
}

export default ErrorNotFound