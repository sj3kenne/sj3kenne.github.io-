import React from "react"
import './NotFoundCss.css'
//import { Helmet } from "react-helmet"
 
function NotFoundPage(props) {
  return (
    <>
        {/* <Helmet>
                <title>You're Lost!</title>
        </Helmet> */}
        <div id="notfound">
        <div class="notfound">
            <div class="notfound-404">
            <h3>Oops! Page not found</h3>
            <h1><span>4</span><span>0</span><span>4</span></h1>
            </div>
            <h2>I am sorry, but the page you requested was not found</h2>
        </div>
        </div>
    </>
  )
}
 
export default NotFoundPage;