import {useState} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([ // blogs initially set to this array
        { title: "My new website!", body: "lorem ipsum...", author: "mario", id: 1 },
        { title: "Welcome party!", body: "lorem ipsum...", author: "luigi", id: 2 },
        { title: "Webdev top tips!", body: "lorem ipsum...", author: "mario", id: 3 }
    ]);
    
    return (  
        <div className="home">
            <BlogList blogsProps = {blogs} />
        </div>
    );
}
 
export default Home;

