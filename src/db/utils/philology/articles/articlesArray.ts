import type { Article } from "@/types";
import { articlesDictionary as articles } from "@/db/utils/philology/articles/articlesDictionary";

const slug = "/articles/philology";

export default [
  {
    href: "#",
    title: "WIP",
    tags: [
      "Ph.D.",
      "Philology",
      "Applied Linguistics",
      "Greece",
      "Latin",
      "Greek",
      "Inheritance",
      "Foundations"
    ],
  },
  {
    href: `${slug}/${articles["Ramon_Gomez_de_la_Serna_Greguerias_radio_y_el_cine"]}`,
    title: "Ramón Gómez de la Serna: Greguerías y otros divertimentos en la radio y el cine",
    tags: [
      "Final Master's Project (TFM)",
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
      "Bachelor's Thesis (TFG)",
      "Juan Luis Vives",
      "Renaissance Literature",
      "Latin",
      "Greek",
      "Greece",
      "Women",
      "Mithology",
      "Conduct books",
    ],
  },
  {
    href: `${slug}/${articles["El_discurso_performativo_de_Ramon_Gomez_de_la_Serna_una_aproximacion"]}`,
    title: "El discurso performativo de Ramón Gómez de la Serna: una aproximación",
    tags: [
      "Essay",
      "Ramón Gómez de la Serna",
      "Ramonismo",
      "Radio",
      "Film",
      "Spanish Language",
      "Theatre",
      "Avant-Garde",
    ],
  },
  {
    href: `${slug}/${articles["Oscar_Wilde_y_una_muerte_sin_importancia"]}`,
    title:
      "'Oscar Wilde y una muerte sin importancia' de Gyles Brandreth: novela de detectives",
    tags: [
      "Essay",
      "Oscar Wilde",
      "Gyles Brandreth",
      "Novela de detectives",
    ],
  },
  {
    href: `${slug}/${articles["El_tiempo_entre_costuras"]}`,
    title:
      "'El tiempo entre costuras' como producto cultural: claves de un éxito literario y audiovisual",
    tags: [
      "Essay",
      "Culture",
      "Product",
      "TV Show",
      "Spanish Literature"
    ],
  },
  {
    href: `${slug}/${articles["El_metacine_en_la_película_El_extra"]}`,
    title:
      "El metacine en la película 'El extra' de Miguel M. Delgado",
    tags: [
      "Essay",
      "Mexican Culture",
      "Miguel M. Delgado",
      "Film",
      "Theatre",
      "Inheritance",
    ],
  },
  {
    href: `${slug}/${articles["Epistola_Cadaver_Anotada"]}`,
    title: "[Anotada] Epístola Cádaver",
    tags: ["Writings", "Avant-Garde", "Spanish Literature"],
  },
  {
    href: articles["Epistola_Cadaver"],
    title: "Epístola Cádaver",
    tags: ["Writings", "Avant-Garde", "Spanish Literature"],
  },
  {
    href: articles["Greguerias"],
    title: "Greguerías",
    tags: ["Writings", "Greguería", "Ramón Gómez de la Serna"],
  },
] as Article[];
