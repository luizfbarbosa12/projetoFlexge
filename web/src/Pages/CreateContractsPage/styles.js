import { Form, Space } from "antd";
import styled from "styled-components";

const {Item} = Form

export const FormContainer = styled(Space)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
`;

export const FormItem = styled(Item)`
    width: 35rem;
`

export const FormFilter = styled(Item)`
  width: 15rem;
`

export const FormFiltersContainer = styled(Space)`
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`