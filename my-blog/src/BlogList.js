const BlogList = (props) => {

    const blogs = props.blogsProps;
    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
            <div className="blog-preview" key = {blog.id}>
                <h2>{blog.title}</h2>
                <h4>Written by {blog.author}</h4>
               <br />
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;