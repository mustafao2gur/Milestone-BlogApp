import React, { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import CommentCard from '../components/blog/CommentCard';

const Detail = () => {

const {getCommet}=useBlogCalls()
const {details}=useSelector((state)=>state.blog)
const { id } = useParams();

useEffect(() => {
getCommet("blogs", id);
}, [])

console.log(details);


  return (
    <div>
      <CommentCard details={details}/>
    </div>
  )
}

export default Detail