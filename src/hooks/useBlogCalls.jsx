import axios from "axios";

import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getBlogs, getDetail } from "../features/blogSlice";
import useAxios from "./useAxios";


const useBlogCalls = () => {
  // const BASE_URL = "http://32151.fullstack.clarusway.com/api/";
  const dispatch = useDispatch();
 const { axiosWithToken,axiosPublic } = useAxios();

  //!----------------------------------getBlogsData-----------------
  const getBlogsData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get(`api/${url}/`);
      dispatch(getBlogs({data,url}));

    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!-------------------------------getCommet----------------------

  const getCommet = async (url,  id ) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`api/${url}/${id}/`);
      console.log(data)
      dispatch(getDetail({ data }));

    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
   
    
  };
   //!--------------------------------getlike----------------
     const getLike = async (url, id) => {
       dispatch(fetchStart());
       try {
         const { data } = await axiosWithToken.post(`api/${url}/${id}/`);
         console.log(data);
         getBlogsData("blogs");
       } catch (error) {
         console.log(error);
         dispatch(fetchFail());
       }
     };
  return { getBlogsData, getCommet, getLike };
};

export default useBlogCalls;