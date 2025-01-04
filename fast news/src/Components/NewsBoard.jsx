import { useEffect, useState } from "react"
import NewsItem from './NewsItem'

const apiKey = import.meta.env.VITE_API_KEY

console.log(apiKey)

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
  
  fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
  }, [category])

  return (
    <div>
      <h1 className="text-center fw-bold">Fastest <span className="badge bg-danger">News</span></h1>
      {articles.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

export default NewsBoard