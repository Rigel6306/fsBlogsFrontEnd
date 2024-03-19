import {useState,useEffect} from 'react'

const List = ({blogs,handleClick}) => {

 

    return ( 

<>
    {blogs.map((blog)=>{
            return(
            <div className="blogBody" key={blog.blog_id}>
                <div className="title"> {blog.blog_name} <h3></h3> </div>
                <div className="author"> <h4>{blog.author}</h4> </div>
                <div className="content">
                    <p>{blog.blog_content}</p>
                </div>
                <button className='deleteBtn' onClick={()=>{handleClick(blog.blog_id)}} >Delete</button>
            </div>
            )
      })}
</>
     );
}
 
export default List;


