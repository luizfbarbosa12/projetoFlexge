import { Content } from "antd/lib/layout/layout";
import {
  Divider,
  Typography,
  Cascader,
  Form,
  Input,
  Button,
  Table,
  Space,
  Layout,
  Breadcrumb,
} from "antd";
import React from "react";
import CreateContractForm from "../../components/CreateContractForm/CreateContractForm";
import { FormFilter, FormFiltersContainer } from "./styles";
import {
  ArrowLeftOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import { HomeOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useProtectedPage} from '../../hooks/useProtectedPage'
const { Header } = Layout;
const { Title } = Typography;

const NewContractField = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CreateContractsPage = () => {
  useProtectedPage()
const navigate = useNavigate()

  const handleClickGoBack = () => {
    navigate("/contracts")
  }
  const products = [
    "Licenças por pacote",
    "Licenças extras",
    "Placement test comercial",
    "Assessoria de implantação",
    "White label (full, academic, + parents)",
    "Taxa de atualização do sistema (white label)",
  ];
  const columns = [
    {
      title: "Product",
      dataIndex: "productName",
      colSpan: 1,
      icon1: <EditOutlined />,
      icon2: <DeleteOutlined />,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      colSpan: 1,
      icon1: <EditOutlined />,
      icon2: <DeleteOutlined />,
    },
    {
      title: "Final Unit Price",
      colSpan: 1,
      dataIndex: "finalUnitPrice",
      icon1: <EditOutlined />,
      icon2: <DeleteOutlined />,
    },
    {
      title: "Installments",
      colSpan: 1,
      dataIndex: "installments",
      icon1: <EditOutlined />,
      icon2: <DeleteOutlined />,
    },
    {
      title: "Paid Installments",
      colSpan: 1,
      dataIndex: "paidInstallments",
      icon1: <EditOutlined />,
      icon2: <DeleteOutlined />,
    },
    {
      title: "Beginning of Term",
      colSpan: 1,
      dataIndex: "beginningOfTerm",
      icon1: <EditOutlined />,
      icon2: <DeleteOutlined />,
    },
    {
      title: "Actions",
      colSpan: 1,
      dataIndex: "icon",
      icon1: <EditOutlined />,
      icon2: <DeleteOutlined />,
    },
  ];
  const data = [
    {
      key: "1",
      productName: "Licenças por pacote",
      amount: 100,
      finalUnitPrice: "R$ 28,00",
      installments: 5,
      paidInstallments: 2,
      beginningOfTerm: "20/09/2021",
      icon: (
        <>
          <EditOutlined />
          <DeleteOutlined />
        </>
      ),
    },
    {
      key: "1",
      productName: "Licenças extras",
      amount: 1,
      finalUnitPrice: "R$ 35,00",
      installments: "N/A",
      paidInstallments: 2,
      beginningOfTerm: "20/09/2021",
      icon: (
        <>
          <EditOutlined />
          <DeleteOutlined />
        </>
      ),
    },
    {
      key: "1",
      productName: "Placement test comercial",
      amount: 100,
      finalUnitPrice: "R$ 10,00",
      installments: 5,
      paidInstallments: 2,
      beginningOfTerm: "20/09/2021",
      icon: (
        <>
          <EditOutlined />
          <DeleteOutlined />
        </>
      ),
    },
    {
      key: "1",
      productName: "Assessoria de implantação",
      amount: 100,
      finalUnitPrice: "R$ 2000,00",
      installments: 5,
      paidInstallments: 2,
      beginningOfTerm: "20/09/2021",
      icon: (
        <>
          <EditOutlined />
          <DeleteOutlined />
        </>
      ),
    },
    {
      key: "1",
      productName: "White label (full, academic, + parents)",
      amount: 100,
      finalUnitPrice: "R$ 3000,00",
      installments: 5,
      paidInstallments: 2,
      beginningOfTerm: "20/09/2021",
      icon: (
        <>
          <EditOutlined />
          <DeleteOutlined />
        </>
      ),
    },
    {
      key: "1",
      productName: "Taxa de atualização do sistema (white label)",
      amount: 100,
      finalUnitPrice: "R$ 50,00",
      installments: 5,
      paidInstallments: 2,
      beginningOfTerm: "20/09/2021",
      icon: (
        <>
          <EditOutlined />
          <DeleteOutlined />
        </>
      ),
    },
  ];

  return (
    <Content>
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
        <Content style={{ padding: "50px" }}>
          <div className="site-layout-content">
            <NewContractField>
              <Title level={5}>Contracts</Title>
              <Button onClick={handleClickGoBack}>
                <ArrowLeftOutlined /> Back
              </Button>
            </NewContractField>
          </div>
          <Divider />

          <Title level={5}>Create Contract</Title>
          <CreateContractForm />
          <Title level={5}>Contract's products</Title>
          <Divider />
          <Form size="small" layout="vertical">
            <FormFiltersContainer>
              <FormFilter
                label="Product"
                name="product"
                rules={[{ required: true, message: "Please select a country" }]}
              >
                <Cascader
                  size="small"
                  options={products.map((product) => {
                    return {
                      value: product,
                      label: product,
                    };
                  })}
                  placeholder="Please select"
                />
              </FormFilter>
              <FormFilter label="Amount" name="amount">
                <Input type="number" />
              </FormFilter>
              <FormFilter
                label="Final Unit Price (R$)"
                name="final-unit-price"
                rules={[{ required: true, message: "Please fill this area" }]}
              >
                <Input type="text" />
              </FormFilter>
              <FormFilter label="Installments" name="installments">
                <Input type="number" />
              </FormFilter>
              <FormFilter label="Paid installments" name="paid-installments">
                <Input type="number" />
              </FormFilter>
              <FormFilter label="Beginning of Term" name="term-starts">
                <Input type="date" />
              </FormFilter>
              <Button>
                <PlusOutlined /> Add
              </Button>
            </FormFiltersContainer>
          </Form>
          <Table
            style={{ margin: "1rem 0" }}
            columns={columns}
            dataSource={data}
            bordered
          />
          <Divider />
          <Space style={{ width: "100%", justifyContent: "flex-end" }}>
            <Button>
              <RedoOutlined />
              Discard changes
            </Button>
            <Button>
              <PlusOutlined /> Create contract
            </Button>
          </Space>
        </Content>
      </Layout>
    </Content>
  );
};

export default CreateContractsPage;
