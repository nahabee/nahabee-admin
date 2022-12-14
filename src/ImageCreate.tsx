import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export default interface IImage {
  name: string;
  brand: string;
  idPage: number;
  type: number;
}

const optionRenderer = (image: IImage) =>
  ` ${(image.name, image.brand, image.idPage, image.type)}`;

export const ImageCreate = (props: ListProps) => (
  <Create
    title="Ajouter une image"
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" />
      <NumberInput source="idPage" />
      <NumberInput source="type" />
      <TextInput source="brand" />
      <ReferenceInput source="idBrand" reference="brands" disabled>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
