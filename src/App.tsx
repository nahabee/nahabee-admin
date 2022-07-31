import * as React from "react";
import { Admin, Resource, fetchUtils, EditGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import UserList from "./UserList";
import UserEdit from "./UserEdit";
import BrandList from "./BrandList";
import BrandEdit from "./BrandEdit";
import { BrandCreate } from "./BrandCreate";
import MesureList from "./MesureList";
import MesureEdit from "./MesureEdit";
import { ImageCreate } from "./ImageCreate";
import PageList from "./PageList";
import PageEdit from "./PageEdit";
import { PageCreate } from "./PageCreate";
import ImageList from "./ImageList";
import ImageEdit from "./ImageEdit";
import FormList from "./FormList";
import { MesureCreate } from "./MesureCreate";
import authProvider from "./authProvider";

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const { token } = JSON.parse(localStorage.getItem("auth") || "");
  options.headers.set("Authorization", `${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  "https://nahabee.herokuapp.com/api",
  httpClient
);

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit} />
    <Resource name="form" list={FormList} />
    <Resource
      name="brands"
      list={BrandList}
      edit={BrandEdit}
      create={BrandCreate}
    />
    <Resource
      name="mesures"
      list={MesureList}
      edit={MesureEdit}
      create={MesureCreate}
    />
    <Resource
      name="images"
      list={ImageList}
      edit={ImageEdit}
      create={ImageCreate}
    />
    <Resource
      name="pages"
      list={PageList}
      edit={PageEdit}
      create={PageCreate}
    />
  </Admin>
);

export default App;
