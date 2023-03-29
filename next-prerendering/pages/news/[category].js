function ArticleListByCategory(){


}

export default ArticleListByCategory

export async function getServerSideProps(context){
    const { params } = context
    const { category } = params
    const response = await fetch(
    `http://localhost:4000/news?category=${category}`
    )
    const data = await response.json()

    return{
        props: {
            articles: data,
            category,
        },
    }
}