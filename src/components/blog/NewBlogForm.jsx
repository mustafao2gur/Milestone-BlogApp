import { Box, Button, Container, CssBaseline, MenuItem, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import useBlogCalls from '../../hooks/useBlogCalls';

const NewBlogForm = () => {

const { categories } = useSelector((state) => state.blog);

  const { getCategories, postBlog } = useBlogCalls();


const [info, setInfo] = useState({
  title: "",
  image: "",
  category: "",
  status: "",
  content: "",
});

     
        useEffect(() => {

          getCategories("categories")
        }, []); 
 
        console.log(categories);

        const hamdleChange=(e)=>{
          setInfo({...info,[e.target.name]:e.target.value})

        }
        const handleSubmit=(e)=>{
          e.preventDefault()
          postBlog("blogs",info)
          setInfo({})
        }

  return (
    <div>
      <Container component="main" maxWidth="xs" sx={{ minHeight: "90vh" }}>
        <CssBaseline />
        <Box>
          <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: "darkslategray",
                letterSpacing: "3px",
                fontFamily: "fantasy",
                marginTop: "10px",
               
              }}
            >
            NEW BLOG
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
              color="success"
              onChange={hamdleChange}
              value={info.title || ""}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image URL"
              type="url"
              id="imageUrl"
              color="success"
              onChange={hamdleChange}
              value={info.image || ""}
            />

            <TextField
              margin="dense"
              select
              fullWidth
              label="Category"
              id="category"
              name="category"
              required
              onChange={hamdleChange}
              value={info.category || "" }
            >
              <MenuItem>Please choose...</MenuItem>
              {categories?.map((item) => {
                return (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </TextField>
            <TextField
              margin="dense"
              select
              fullWidth
              label="Status"
              id="status"
              name="status"
              required
              onChange={hamdleChange}
              value={info.status || ""}
            >
              <MenuItem>Please choose...</MenuItem>
              <MenuItem value="d">Draft</MenuItem>
              <MenuItem value="p">Published</MenuItem>
            </TextField>
            <TextField
              placeholder="Content"
              multiline
              rows={2}
              margin="normal"
              required
              fullWidth
              name="content"
              label="Content"
              id="content"
              color="success"
              onChange={hamdleChange}
              value={info.content || ""}

            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "secondary.main" },
              }}
            >
              Blog
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default NewBlogForm