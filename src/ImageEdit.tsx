import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import ButtonNumField from "./ButtonNumField";
import { PostEditActions } from "./PostEditActions";

const ImageEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    <SimpleForm>
      <NumberInput source="id" />
      <TextInput source="name" />
      <TextInput source="brand" />
      <NumberInput source="idPage" />
      {/* NumberInput hidden for value, ButtonNumField for design */}
      <NumberInput source="admin" style={{ display: "none" }} />
      <ButtonNumField source="admin" label="Admin" />
    </SimpleForm>
  </Edit>
);

export default ImageEdit;
