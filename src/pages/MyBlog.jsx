import { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import Card from "../components/blog/Card";
import { Grid } from "@mui/material";
import { flexCard } from "../components/styles/globalStyle";

const MyBlog = () => {
  const { getMyBlogData } = useBlogCalls();
  const { myBlog } = useSelector((state) => state.blog);
  const { id } = useSelector((state) => state.auth);

  useEffect(() => {
    getMyBlogData("blogs",id);
  }, []);

  return (
    <>
      <Grid container sx={flexCard}>
        {myBlog?.map((item) => (
          <Grid item key={item.id}>
            <Card item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MyBlog;
