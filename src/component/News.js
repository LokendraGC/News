import React from "react";
import NewsItem from "./News_item";
import data from "./data";

export default function News() {

    // const [news,setNews] = React.useState([data])

    console.log(data)
    return (
        <div className="container my-4">
            <h2>News Top Headlines</h2>
     
            <div className="row">
          {data && data.map(elem=>{
            return (
                <div className="col-md-4"  key={elem.url}>
                    <NewsItem
                      
                        title={console.log(`title ${elem.title}`)}
                        description={elem.description}
                        urlImage={elem.urlToImage} 
                    />
                </div>

            )
          })}
                <div className="col-md-4">
                    <NewsItem
                        title="mytitle"
                        description="myDesc"
                    />
                </div>
                <div className="col-md-4">
                    <NewsItem
                        title="mytitle"
                        description="myDesc"
                    />
                </div>

            </div>
        </div>
    )
}