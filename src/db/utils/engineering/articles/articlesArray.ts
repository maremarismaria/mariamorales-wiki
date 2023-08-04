import type { Article } from "@/types";
import { articlesDictionary as articles } from "@/db/utils/engineering/articles/articlesDictionary";

export default [
  {
    href: articles["Front_End_Testing_Summary"],
    title: "Front-End Testing Best Practices",
    tags: ["Summary", "Front-End", "Testing", "Engineering"],
  },
  {
    href: articles["Introduction_To_SVG"],
    title: "Introduction to SVG",
    tags: ["WIP", "Summary", "Introduction", "HTML", "SVG", "React", "SVG Component"],
  },
] as Article[];
