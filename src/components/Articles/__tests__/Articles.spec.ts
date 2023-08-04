import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Articles from "../Articles.vue";
import articlesArray from "@/utils/philology/articles/articlesArray";

describe("List of articles", () => {
  it("renders properly", () => {
    const wrapper = mount(Articles, { props: { articles: articlesArray } });
    articlesArray.forEach(({ title }) => {
      expect(wrapper.text()).toContain(title);
    });
  });
});
