import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const PageEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="description" />
      {/* NumberInput hidden for value, ButtonNumField for design */}
      <NumberInput source="admin" style={{ display: "none" }} />
    </SimpleForm>
  </Edit>
);

export default PageEdit;
