import React from 'react'

function NewsArticleList({ articles }) {
  return (
    <div>
        <h1>List of News Articles</h1>
        <br></br>
        {
            articles.map(article => {
                return(
                    <div key={article.id}>
                        <h2>{article.id} {article.title} | {article.category}</h2>
                        <p>{article.description}</p>
                        <br></br>
                    </div>

                )
            })
        }
    </div>
  )
}

export default NewsArticleList

export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()

    return{
        props:{
            articles: data,
        }
    }
}