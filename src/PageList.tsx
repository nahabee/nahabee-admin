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

const PageList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" sortBy="pages.id" />
        <TextField source="title" />
      </Datagrid>
    </List>
  );
};

export default PageList;
