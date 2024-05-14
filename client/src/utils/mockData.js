import { AUTH, CATALOG, MYBOOKS } from "./const";

export const pages = [
  { id: 1, page: "S-book", route: AUTH },
  { id: 2, page: "Catalog", route: CATALOG },
  { id: 3, page: "MyBooks", route: MYBOOKS },
];

export const registerData = [
  {
    id: 1,
    title: "Registration",
    subPlace: ["E-mail", "Password"],
    buttonText: "Sign In",
  },
];

export const authData = [
  {
    id: 2,
    title: "Authorization",
    subPlace: ["E-mail", "Password"],
    buttonText: "Sign Up",
  },
];

export const customer = {
  id: 101,
  name: "Egor Yarovitsyn",
  email: "egoryarovitsyn1@gmail.com",
};

export const columnsData = [
  { id: 1, title: "Catalog" },
  { id: 2, title: "Users" },
  { id: 3, title: "Favorites" },
  { id: 4, title: "MyBook" },
];
