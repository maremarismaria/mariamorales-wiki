import type { Article } from "@/types";
import { articlesDictionary as articles } from "@/db/utils/philology/articles/articlesDictionary";

const slug = "/articles/philology";

export default [
  {
    href: `${slug}/${articles["Ramon_Gomez_de_la_Serna_Greguerias_radio_y_el_cine"]}`,
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
  {
    href: `${slug}/${articles["La_tradicion_clasica_en_De_Institutione_Feminae_Christianae"]}`,
    title:
      "La tradición clásica en 'De Institutione Feminae Christianae' de Juan Luis Vives. Estudio de las figuras femeninas mitológico-literarias",
    tags: [
      "TFG",
      "Juan Luis Vives",
      "Renaissance Literature",
      "Latin",
      "Greek",
      "Women",
      "Mithology",
      "Conduct books",
    ],
  },
] as Article[];
