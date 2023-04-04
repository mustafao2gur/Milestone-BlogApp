import  { useEffect } from 'react'
import useBlogCalls from '../hooks/useBlogCalls';
import { useSelector } from 'react-redux';
import Card from '../components/blog/Card';
import { Grid } from '@mui/material';
import { flexCard } from '../components/styles/globalStyle';


const Dashboard = () => {
  const { getBlogsData } = useBlogCalls();
  const {blogs}=useSelector((state)=>state.blog)


  useEffect(() => {
getBlogsData("blogs")
  }, [])
  
  return (
    <>
      <Grid container sx={flexCard}>
        {blogs.map((item) => (
          <Grid item key={item.id}>
            <Card item={item} />
          </Grid>
        ))}
 
      </Grid>
    </>
  );
}

export default Dashboard