import { useContext } from "react"
import BlogPostsContext from "../context/blogPostsContext"


export default function ListLayout() {
    const context = useContext(BlogPostsContext)

    const articles = context.articles.slice(context.init, context.init + context.count)
    return (
        <ul > 
            {articles.map(a => {
                return <li ><a href={a.link}>{a.title}</a></li>
            })}
        </ul>
    )
}