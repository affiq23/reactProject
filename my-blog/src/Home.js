import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([ // blogs initially set to this array
        { title: "My new website!", body: "lorem ipsum...", author: "mario", id: 1 },
        { title: "Welcome party!", body: "lorem ipsum...", author: "luigi", id: 2 },
        { title: "Webdev top tips!", body: "lorem ipsum...", author: "mario", id: 3 }
    ]);
    const [name, setName] = useState("mario");

    const handleDelete = (id) => {
       const newBlogs = blogs.filter((blog) => blog.id !== id);
       setBlogs(newBlogs);                                                                                                                       
    }

    useEffect(() => {
        console.log("useEffect ran");
        console.log(blogs);
    }, [name]); // now useEffect only runs if name is changed, not if the whole page renders
    
    return (  
        <div className="home">
            <BlogList blogsProps = {blogs} title = "All Blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName("luigi")}>Change name</button>
            <p>{name}</p>
        </div>
    );
}
 
export default Home;

