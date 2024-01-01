import {useState, useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
    // grab data, but call it blogs
    
    return (  
        <div className="home">
            { error && <div></div>}
            { isPending && <div>Loading blogs....</div> }
             {blogs && <BlogList blogsProps = {blogs} title = "All Blogs!"/> } 
        </div>
    );
}
 
export default Home;

