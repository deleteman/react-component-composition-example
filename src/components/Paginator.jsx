import { useContext } from "react";
import BlogPostsContext from "../context/blogPostsContext";
import styles from './ListLayout.module.css'

export default function Paginator() {

    const context = useContext(BlogPostsContext)

    const perPage = 4;

    let pages = []
    for(let i = 0; i < context.articles.length; i += perPage) {
        let init = pages.length * perPage;
        pages.push(
            <a href={`?init=${init}&count=${perPage}`}>{pages.length + 1}</a>
        )
    }

    return (
        <div className={styles.paginator}>
            {pages.map( p => p)}
        </div>
    )
}