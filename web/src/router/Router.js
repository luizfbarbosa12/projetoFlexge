import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useContext} from 'react'
import { UserContext } from "../contexts/userContext";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Contracts from "../Pages/Contracts/Contracts";
import CreateContractsPage from "../Pages/CreateContractsPage/CreateContractsPage";
import {Layout} from 'antd'
const Router = () => {
    const { currentUser } = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/create-contracts" element={<CreateContractsPage />} />
        </Routes>
      </BrowserRouter>
      <Layout.Footer style={{ textAlign: "center" }}>{currentUser && `O usuário ${currentUser} está logado`}</Layout.Footer>
    </>
  );
};

export default Router;
