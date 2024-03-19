
import {useEffect} from 'react'
import axios from 'axios'

const useFetch = (url,setBlogs,setIsLoaded)=>{

    useEffect(()=>{
           getData();
    },[])


    const getData = ()=>{
        axios(url).then(data=>{
        setBlogs([...data.data])
        setIsLoaded(true)
        })
    }

}


export default useFetch