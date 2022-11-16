import React, { useState } from "react";
import { Form, Input, Select, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { countryList } from "../../countries";
import { brazilStates } from "../../estados";
import {
  FormContainer,
  FormItem,
} from "../../Pages/CreateContractsPage/styles";
import useForm from "../../hooks/useForm";
import useSelectForm from "../../hooks/useSelectForm";

const CreateContractForm = () => {
  const [form, onChange] = useForm({
    city: "",
    documentNumber: "",
    socialReason: "",
    address: "",
    district: "",
    number: "",
    zipCode: "",
    email: "",
    phone: "",
    contractStarts: "",
    contractEnds: "",
  });
  const [selectForm, handleSelectChange] = useSelectForm({
    country: "",
    state: "",
    dueDay: "",
    company: "",
  });

  const props = {
    name: "file",
    action: "#",
    headers: {
      authorization: "authorization-text",
    },
  };

  return (
    <Form size="small" layout="vertical">
      <FormContainer size="large">
        <FormItem
          label="Country"
          name="country"
          rules={[{ required: true, message: "Please select a country" }]}
        >
          <Select
            value={selectForm.country}
            onChange={(e) => handleSelectChange(e, "country")}
            name="country"
            placeholder="Select a country"
            options={countryList.map((country, index) => {
              return {
                key: `${country}${index}`,
                value: country,
                label: country,
              };
            })}
          />
        </FormItem>
        <FormItem
          label="State"
          name="state"
          rules={[{ required: true, message: "Please select a state" }]}
        >
          <Select
            value={selectForm.state}
            onChange={(e) => handleSelectChange(e, "state")}
            name="state"
            options={brazilStates.map((state, index) => {
              return {
                key: index,
                value: state,
                label: state,
              };
            })}
          />
        </FormItem>
        <FormItem name="city" label="City" labelAlign="top">
          <Input value={form.city} onChange={onChange} name="city" />
        </FormItem>

        <FormItem
          name="documentNumber"
          label="Document number"
          labelAlign="top"
        >
          <Input
            name="documentNumber"
            onChange={onChange}
            value={form.documentNumber}
          />
        </FormItem>
        <FormItem name="socialReason" label="Social Reason" labelAlign="top">
          <Input
            type="text"
            name="socialReason"
            onChange={onChange}
            value={form.socialReason}
          />
        </FormItem>

        <FormItem
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please select a country" }]}
        >
          <Input name="address" onChange={onChange} value={form.address} />
        </FormItem>
        <FormItem
          label="District"
          name="district"
          rules={[{ required: true, message: "Please select a state" }]}
        >
          <Input name="district" onChange={onChange} value={form.district} />
        </FormItem>
        <FormItem
          name="number"
          label="Number"
          labelAlign="top"
          rules={[
            {
              type: "number",
              message: "The input is not valid",
            },
            {
              required: true,
              message: "Please write down your city",
            },
          ]}
        >
          <Input name="number" onChange={onChange} value={form.number} />
        </FormItem>
        <FormItem
          name="zipCode"
          label="Zip code"
          labelAlign="top"
          rules={[
            {
              type: "number",
              message: "The input is not valid",
            },
            {
              required: true,
              message: "Please write down your city",
            },
          ]}
        >
          <Input name="zipCode" onChange={onChange} value={form.zipCode} />
        </FormItem>
        <FormItem
          name="email"
          label="Email"
          labelAlign="top"
          rules={[
            {
              type: "email",
              message: "The input is not valid",
            },
            {
              required: true,
              message: "Please write down your city",
            },
          ]}
        >
          <Input name="email" onChange={onChange} value={form.email} />
        </FormItem>
        <FormItem name="phone" label="Phone" labelAlign="top">
          <Input name="phone" onChange={onChange} value={form.phone} />
        </FormItem>
        <FormItem
          name="contractStarts"
          label="Contract starts in"
          labelAlign="top"
          rules={[
            {
              type: "date",
              message: "The input is not valid",
            },
            {
              required: true,
              message: "Please write down your city",
            },
          ]}
        >
          <Input
            type="date"
            name="contractStarts"
            onChange={onChange}
            value={form.contractStarts}
          />
        </FormItem>
        <FormItem name="contractEnds" label="Contract ends in" labelAlign="top">
          <Input
            type="date"
            name="contractEnds"
            onChange={onChange}
            value={form.contractEnds}
          />
        </FormItem>
        <FormItem
          label="Due day"
          name="dueDay"
          rules={[{ required: true, message: "Please select a day" }]}
        >
          <Select
            value={selectForm.dueDay}
            onChange={(e) => handleSelectChange(e, "dueDay")}
            name="dueDay"
            options={new Array(5).fill(null).map((_, index) => {
              return {
                key: index,
                value: `${index}`,
                label: `${index}`,
              };
            })}
          />
        </FormItem>
        <FormItem label="Upload the contract" name="due-day">
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Select a file</Button>
          </Upload>
        </FormItem>
        <FormItem
          label="Select a Company"
          name="company"
          rules={[{ required: true, message: "Please select a company" }]}
        >
          <Select
            value={selectForm.company}
            onChange={(e) => handleSelectChange(e, "company")}
            name="company"
            options={new Array(5).fill(null).map((_, index) => {
              return {
                key: index,
                value: `Company${index}`,
                label: `Company${index}`,
              };
            })}
          />
        </FormItem>
      </FormContainer>
    </Form>
  );
};

export default CreateContractForm;
