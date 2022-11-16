import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Breadcrumb, Layout, Typography, Button, Divider, Table } from "antd";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import {
  HomeOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Filters from "../../components/Filters/Filters/Filters";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
const { Title } = Typography;
const { Content, Header } = Layout;

const NewContractField = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Contracts = () => {
  useProtectedPage()
  const [contracts, setContracts] = useState();
  const navigate = useNavigate();

  const handleClickNewContract = () => {
    navigate("/create-contracts");
  };
  
  useEffect(() => {
    const headers = { headers: { authorization: window.localStorage.getItem("token") } }
    axios
      .get("http://localhost:3001/contracts", headers)
      .then((response) => {
        setContracts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      title: "Document Number",
      dataIndex: "documentNumber",
      colSpan: 1,
    },
    {
      title: "Social Reason",
      dataIndex: "socialReason",
      colSpan: 1,
    },
    {
      title: "Company",
      colSpan: 1,
      dataIndex: "company",
    },
  ];
  return (
    <Layout>
      <Header>
        <HeaderMenu />
      </Header>
      <Breadcrumb separator=">" style={{ margin: "16px" }}>
        <Breadcrumb.Item>
          <HomeOutlined /> Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>Contracts</Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{ padding: "20px", minHeight: "80vh" }}>
        <div className="site-layout-content">
          <NewContractField>
            <Title level={5}>Contracts</Title>
            <Button onClick={handleClickNewContract}>
              <PlusOutlined /> New contract
            </Button>
          </NewContractField>
          {/* inserir logica para mudar isso aqui pro botao de voltar quando estiver na outra pagina */}
          <Divider />
        </div>
        <Filters />
        <Table
          style={{ margin: "1rem 0" }}
          columns={columns}
          dataSource={contracts && contracts}
          bordered
        />
      </Content>
    </Layout>
  );
};

export default Contracts;
