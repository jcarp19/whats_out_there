// returns 10 news stories (optional: able to load more) based on set space-related criteria.
// uses the newsapi
// TO DO: make route to newsapi

import { ArticlesEntity } from "../models/NewsInterface";

// used type "any" to avoid errors, but switch back to "ArticlesEntity" when retrieving all the data.
export default function NewsFeed({ title, author, url, description, content }: ArticlesEntity) {



    return (
        <div className="info-card">
            <p className="newsfeed_title"><a href={url} className="newsfeed_url">{title}</a></p>
            <p className="newsfeed_author">{author}</p>
            <p className="newsfeed_description">{description}</p>
            <details>
                <summary>Full Story</summary>
                <p className="newsfeed_content">{content}</p>
            </details>
        </div>
    )
}




// // newsapi key
// //  01506b975fb14e549a407f6016bb935b
// // https://newsapi.org/v2/everything?domains=nasa.gov&apiKey=01506b975fb14e549a407f6016bb935b
// // https://newsapi.org/