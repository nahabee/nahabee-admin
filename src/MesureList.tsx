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

const MesureList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" sortBy="mesures.id" />
        <TextField source="name" />
        <TextField source="description" />
      </Datagrid>
    </List>
  );
};

export default MesureList;
