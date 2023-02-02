
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}