// returns 10 news stories (optional: able to load more) based on set space-related criteria.
// uses the newsapi
// TO DO: make route to newsapi
import placeholder from "../images/placeholder.png"
import parklistbackground from "../images/parklistbackground.png"
import { ArticlesEntity } from "../models/NewsInterface";

// used type "any" to avoid errors, but switch back to "ArticlesEntity" when retrieving all the data.
export default function NewsFeed({ title, url, description, content, publishedAt, image }: ArticlesEntity) {
    function replaceImage(image: any) {
        if (image.includes('403') || !image.includes("jpg")){
          return placeholder;
        } else {
            return image
        }
      }

    function handleError(){
        // onError={(e) => {e.target.onerror = null; e.target.src = placeholder}}
    }


    return (
        <div className="info-card newsfeed-card">
            <div className="newsfeed-div">
                <img className="newsfeed-pix" src={replaceImage(image)} />
                <div className="newsfeed-text">
                    <p className="newsfeed_title">{title}</p>
                    <p className="newsfeed_content">{description}</p>
                    <a href={url} className="newsfeed_url" target="_blank">Click to read full story</a>
                </div>
            </div>
        </div>
    )



}
