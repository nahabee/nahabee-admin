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

const FormList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" sortBy="forms.id" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="message" />
      </Datagrid>
    </List>
  );
};

export default FormList;
