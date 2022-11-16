import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../Pages/LoginPage/LoginPage"
import Contracts from "../Pages/Contracts/Contracts"
import CreateContractsPage from "../Pages/CreateContractsPage/CreateContractsPage"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route index element={<LoginPage/>}/> 
            <Route path="/contracts" element={<Contracts/>} />
            <Route path="/create-contracts" element={<CreateContractsPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router