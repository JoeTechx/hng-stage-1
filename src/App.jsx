import React from "react"
import Header from  "./component/header/Header"
import Button from  "./component/button/Button"
import Social from  "./component/social/Social"
import Footer from  "./component/footer/Footer"
import "./index.css"

const App = () => {
    return(
        <div className="link__tree">
             <Header/>
             <Button/>
             <Social/>
             <Footer/>
        </div>
    )
}

export default App