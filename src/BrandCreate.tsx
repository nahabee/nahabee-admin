import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  Validator,
  required,
  maxLength,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const validateBrand: Validator[] = [required(), maxLength(255)];

export default interface IBrand {
  name: string;
}

const optionRenderer = (brand: IBrand) => ` ${brand.name}`;

export const BrandCreate = (props: ListProps) => (
  <Create
    title="Ajouter une marque"
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" validate={validateBrand} />

      <ReferenceInput source="idBrand" reference="brands" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
