const BlogList = (props) => {
    const blogs = props.blogsProps;
    const title = props.title;
    const handleDelete = props.handleDelete;

    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
            <div className="blog-preview" key = {blog.id}>
                <h2>{blog.title}</h2>
                <h4>Written by {blog.author}</h4>
                <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
               <br />
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;