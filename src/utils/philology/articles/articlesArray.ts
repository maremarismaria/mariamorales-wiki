import type { Article } from "@/types";
import { articlesDictionary as articles } from "@/utils/philology/articles/articlesDictionary";

const baseURL = "https://mariamorales.wiki";
const slug = "articles/philology";

export default [
  {
    href: `${baseURL}/${slug}/${articles["Ramon_Gomez_de_la_Serna_Greguerias_radio_y_el_cine"]}`,
    title: "Ramón Gómez de la Serna: Greguerías y otros divertimentos en la radio y el cine",
    tags: [
      "TFM",
      "Contemporary Literature",
      "Ramón Gómez de la Serna",
      "Greguerías",
      "Radio",
      "Film",
      "Avant-Garde",
    ],
  },
] as Article[];
