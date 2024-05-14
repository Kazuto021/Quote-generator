import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Quotes from '../Components/Quotes'


const mainRouter = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="" Component={App} />
                <Route path="/quotes" Component={Quotes} />
            </Routes>
        </BrowserRouter>
    )
}

export default mainRouter