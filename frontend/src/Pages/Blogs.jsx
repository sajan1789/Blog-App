import React from "react";
import { useState, useEffect } from "react";
import '../Styles/blog.css'
import { useToast ,CircularProgress} from "@chakra-ui/react";
import NoBlogs from "./NoBlogs";
const Blogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const toast=useToast()
  const [blog, setBlog] = useState([]);
 
  const getBlog = () => {
    setIsLoading(true)
    fetch("https://fine-blue-dhole-gear.cyclic.app/blogs", {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false)
        setBlog(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getBlog();
  }, []);
  const handleDelete = (id) => {
     setIsLoading2(true)
    fetch(`https://fine-blue-dhole-gear.cyclic.app/blogs/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    }).then((res )=> res.json())
     .then((res)=>{
      setIsLoading2(false)
      console.log(res)
      getBlog()
      toast({
        position: 'top',
        title: 'Blogs deleted successfull',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      
     })
     .catch((err)=>{
      console.log(err)
     })
  };
  if(isLoading){
    return <div style={{marginTop:"200px"}}><CircularProgress isIndeterminate color="blue.300" /></div>
  }
  return (
    <div className="blogs-container">
      <div className="blogs-list">
        {blog.length > 0 ? (
          blog.map((blog, index) => (
            
            <div key={index} className="blog">
               <h1>{blog.title}</h1>
              <h2>{blog.content}</h2>
              <p className="timestamp">Created on: {blog.timestamp}</p>
              <div>
              <button
                className="delete-button"
                onClick={() => handleDelete(blog._id)}
              >
                Delete
              </button>
              </div>
            </div>
            
            
            
          ))
        ) : (
          <NoBlogs />
        )}
      </div>
    </div>
  );
};

export default Blogs;
