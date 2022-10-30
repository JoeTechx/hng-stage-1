import React from "react"
import Header from  "./component/header/Header"
import Button from  "./component/button/Button"
import Footer from  "./component/footer/Footer"
import "./index.css"

const App = () => {
    return(
        <div className="link__tree">
             <Header/>
             <Button/>
             <Footer/>
        </div>
    )
}

export default App