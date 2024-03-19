
import {useState,useEffect} from 'react';
import axios from 'axios'
import List from './List';
import useFetch from "../hooks/useFetch"
const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    const [isLoading,setIsLoaded] = useState(false)

    useFetch('blogs/getblogs',setBlogs,setIsLoaded);

    const handleClick = (id)=>{
        const filterdBlogs = blogs.filter((blog)=>blog.blog_id!==id)
        setBlogs(filterdBlogs)
        axios.delete(`blogs/deleteblogs?blog_id=${id}`)
    }

    console.log(blogs, "returned")
    return (
        <div className="blogContainer">
            <div  className="blogHeading">
                <h1>Web Dev Blogs</h1>
            </div>
        {  isLoading && <List blogs={blogs} handleClick={handleClick} /> }
        </div>
     );
}


 
export default Blogs;