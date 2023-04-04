import React, { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const Detail = () => {
const {getCommet}=useBlogCalls()
const {details}=useSelector((state)=>state.blog)
    const { id } = useParams();
useEffect(() => {
getCommet("blogs", id);
}, [])
console.log(details);
console.log(id);
  return (
    <div>Detail</div>
  )
}

export default Detail