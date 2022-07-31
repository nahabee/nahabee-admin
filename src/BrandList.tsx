import {
  Datagrid,
  Identifier,
  List,
  ListProps,
  NumberField,
  TextField,
} from "react-admin";

type recordType = {
  id?: Identifier | undefined;
};

const BrandList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" sortBy="brands.id" />
        <TextField source="name" />
      </Datagrid>
    </List>
  );
};

export default BrandList;
