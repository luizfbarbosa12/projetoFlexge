import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Button, Space, Select } from "antd";
import { DropdownLabel } from "./styles";

const Filters = () => {
  return (
    <Space align="end" direction="horizontal">
      <label htmlFor="">
        Document Number
        <Input type="number" size="small" />
      </label>
      <label htmlFor="">
        Social Reason
        <Input size="small" />
      </label>
      <DropdownLabel htmlFor="">
        Company
        <Select
          size="small"
          options={new Array(15).fill(null).map((_, index) => {
            return {
              key: index,
              value: `Company${index}`,
              label: ` Company${index}`,
            };
          })}
          placeholder="Please select"
        />
      </DropdownLabel>
      <Button size="small">
        <SearchOutlined /> Search
      </Button>
    </Space>
  );
};

export default Filters;
