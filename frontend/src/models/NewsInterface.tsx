// export default interface NewsInterface {
//     status: string;
//     totalResults: number;
//     articles: (ArticlesEntity)[];
// }
// export interface ArticlesEntity {
//     source: Source;
//     author: string;
//     title: string;
//     description: string;
//     url: string;
//     urlToImage: string;
//     publishedAt: string;
//     content: string;
// }
// export interface Source {
//     id?: null;
//     name: string;
// }

export default interface NewsInterface {
    totalArticles: number;
    articles: (ArticlesEntity)[];
  }
  export interface ArticlesEntity {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    source: Source;
  }
  export interface Source {
    name: string;
    url: string;
  }
  