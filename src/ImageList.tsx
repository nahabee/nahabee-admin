import {
  Datagrid,
  Identifier,
  List,
  ListProps,
  NumberField,
  TextField,
  ImageField,
} from "react-admin";

type recordType = {
  id?: Identifier | undefined;
};

const BrandList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" sortBy="images.id" />
        <ImageField source="name" />
        <NumberField source="idPage" />
        <TextField source="brand" />
      </Datagrid>
    </List>
  );
};

export default BrandList;
