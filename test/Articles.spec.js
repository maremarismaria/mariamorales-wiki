import { mount } from "@vue/test-utils";
import Articles from "@/components/Articles/Articles.vue";
import ArticleItem from "@/components/Articles/ArticleItem.vue";
import articlesList from "@/migration/db/utils/philology/articles/articlesList";

describe("[Articles & ArticleItem]", () => {
  test("Articles list renders properly", () => {
    const wrapper = mount(Articles, {
      propsData: {
        articles: articlesList,
      },
      stubs: {
        NuxtLink: true,
      },
    });

    const children = wrapper.findAllComponents(ArticleItem);
    expect(children).toHaveLength(articlesList.length);

    articlesList.forEach(({ title, href }, i) => {
      const item = children.at(i);
      expect(item.text()).toContain(title);

      if (href) {
        const link = item.find("a");
        expect(link.attributes("href")).toContain(href);
      }
    });
  });
});
