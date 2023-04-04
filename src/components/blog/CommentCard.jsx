
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FaceIcon from "@mui/icons-material/Face";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, TextField } from "@mui/material";

import {
  btnDetail,
  cardButton,
  cardStyle,
  iconStyle,
} from "../styles/globalStyle";
import { useNavigate } from "react-router";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { useState } from "react";
import CommentForm from "./CommentForm";


const CommentCard = ({ details }) => {
  const { author, content, image, likes, publish_date, id, comments } = details;

  const [info, setInfo] = useState({
   

    content: "",
  });
  const [toggle, setToggle] = useState(false)
  const { getLike, postComments } = useBlogCalls();
// const {comments}=useSelector((state)=>state.blog)
const handleChange=(e)=>{
    setInfo({ ...info, [e.target.name]:e.target.value }      );
    console.log(e.target.value)
  }
  console.log(info)
  const handleToggle=()=>{
setToggle(!toggle);


  }
const  handleClick=()=>{
  postComments("comments",id,{...info,post:id})

}
  return (
    <div>
      <Card>
        <Typography
          component="div"
          sx={{ display: "flex", justifyContent: "center", mt: 2 }}
        >
          <img
            height="150"
            src={
              image ? image : "https://www.w3schools.com/howto/img_avatar.png"
            }
            alt="img"
          />
        </Typography>
        <CardContent>
          <Typography
            sx={{ textAlign: "justify", minHeight: "120px" }}
            variant="body2"
            color="text.secondary"
          >
            {content}
          </Typography>
          <Typography sx={{ my: 1, fontSize: "0.9rem" }}>
            {publish_date}
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <FaceIcon />
            {author}
          </Typography>
        </CardContent>
        <CardActions sx={cardButton}>
          <Box sx={iconStyle}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <ThumbUpIcon onClick={() => getLike("likes", details.id)} />
              {likes}
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <MessageIcon onClick={handleToggle}/>2
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <RemoveRedEyeIcon />3
            </Typography>
          </Box>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
          ></Typography>
{toggle &&
<Box >
  <CommentForm comments={comments}/>
      <TextField
            label="comments"
            id={info.post}
            name="content"
            type="text"
            variant="outlined"
            onChange={handleChange}
          />

          <Button type="submit" sx={btnDetail} variant="contained" onClick={handleClick} >
            ADD COMMENT
          </Button>
</Box>
       }
        </CardActions>
      </Card>
    </div>
  );
};

export default CommentCard