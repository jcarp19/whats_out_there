

// export default interface NewsInterface {
//     totalArticles: number;
//     articles: (ArticlesEntity)[];
//   }
//   export interface ArticlesEntity {
//     title: string;
//     description: string;
//     content: string;
//     url: string;
//     image: string;
//     publishedAt: string;
//     source: Source;
//   }
//   export interface Source {
//     name: string;
//     url: string;
//   }
  
export default interface NewsInterface {
  _id: string,
  title: string,
  description: string,
  url: string,
  image: string
}