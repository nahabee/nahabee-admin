import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export default interface IPage {
  title: string;
  description: string;
}

const optionRenderer = (page: IPage) => ` ${(page.title, page.description)}`;

export const PageCreate = (props: ListProps) => (
  <Create
    title="Ajouter une page"
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="title" />
      <TextInput source="description" />
      <ReferenceInput source="idPage" reference="pages" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
