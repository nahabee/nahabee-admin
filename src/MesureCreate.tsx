import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export default interface IMesure {
  name: string;
  description: string;
}

const optionRenderer = (mesure: IMesure) =>
  ` ${(mesure.name, mesure.description)}`;

export const MesureCreate = (props: ListProps) => (
  <Create
    title="Ajouter une mesure"
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" />
      <TextInput source="description" />
      <ReferenceInput source="idMesure" reference="mesures" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
