import philology from "@/migration/db/utils/philology/articles/articlesList";
import engineering from "@/migration/db/utils/engineering/articles/articlesList";
import { State } from "@/migration/types";

export const store: () => State = () => ({
    articles: {
        philology,
        engineering,
    },
});

export const getters = {
    getPhilologyArticles() {
        return philology;
    },

    getEngineeringArticles() {
        return engineering;
    },
};
