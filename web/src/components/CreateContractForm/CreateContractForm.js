import React from 'react'
import { Form, Input, Cascader, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { countryList } from "../../countries";
import { brazilStates } from "../../estados";
import { FormContainer, FormItem } from "../../Pages/CreateContractsPage/styles";
const CreateContractForm = () => {
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
            <Cascader
              size="small"
              options={countryList.map((country) => {
                return {
                  value: country,
                  label: country,
                };
              })}
              placeholder="Please select"
            />
          </FormItem>
          <FormItem
            label="State"
            name="state"
            rules={[{ required: true, message: "Please select a state" }]}
          >
            <Cascader
              size="small"
              options={brazilStates.map((state, index) => {
                return {
                  value: state,
                  label: state,
                };
              })}
              placeholder="Please select"
            />
          </FormItem>
          <FormItem name="city" label="City" labelAlign="top">
            <Input />
          </FormItem>

          <FormItem
            name="document-number"
            label="Document number"
            labelAlign="top"
            rules={[
              {
                type: "number",
                message: "The input is not valid",
              },
              {
                required: true,
                message: "Please write down the document number",
              },
            ]}
          >
            <Input />
          </FormItem>
          <FormItem
            name="social-reason"
            label="Social Reason"
            labelAlign="top"
            rules={[
              {
                type: "text",
                message: "The input is not valid",
              },
              {
                required: true,
                message: "Please write down the social reason",
              },
            ]}
          >
            <Input />
          </FormItem>

          <FormItem
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please select a country" }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="District"
            name="district"
            rules={[{ required: true, message: "Please select a state" }]}
          >
            <Input />
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
            <Input />
          </FormItem>
          <FormItem
            name="zip-code"
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
            <Input />
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
            <Input />
          </FormItem>
          <FormItem name="phone" label="Phone" labelAlign="top">
            <Input />
          </FormItem>
          <FormItem
            name="starts-in"
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
            <Input type="date" />
          </FormItem>
          <FormItem name="ends-in" label="Contract ends in" labelAlign="top">
            <Input type="date" />
          </FormItem>
          <FormItem
            label="Due day"
            name="due-day"
            rules={[{ required: true, message: "Please select a day" }]}
          >
            <Cascader
              size="small"
              options={new Array(5).fill(null).map((_, index) => {
                return {
                  value: `${index}`,
                  label: `${index}`,
                };
              })}
              placeholder="Please select"
            />
          </FormItem>
          <FormItem label="Upload the contract" name="due-day">
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Select a file</Button>
            </Upload>
          </FormItem>
          <FormItem
            label="Select a company"
            name="company"
            rules={[{ required: true, message: "Please select a company" }]}
          >
            <Cascader
              size="small"
              options={new Array(5).fill(null).map((_, index) => {
                return {
                  value: `Company${index}`,
                  label: `Company${index}`,
                };
              })}
              placeholder="Please select"
            />
          </FormItem>
        </FormContainer>
      </Form>
  )
}

export default CreateContractForm