import BlogPostsContext from "../context/blogPostsContext";

export default function BlogPosts({children, articles}) {

    //Pagination options
    let windowQuery = {}

    window.location.search.replace("?", "").split("&").forEach( part => {
        let keyValue = part.split("=")
        windowQuery[keyValue[0]] = keyValue[1]
    })
    let value = {
        articles,
        init: +windowQuery.init,
        count: +windowQuery.count
    }

    return (
        <BlogPostsContext.Provider value={value}>
            {children}
        </BlogPostsContext.Provider>
    )
}