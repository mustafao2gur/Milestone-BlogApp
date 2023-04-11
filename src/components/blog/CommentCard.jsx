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

import { btnDetail, cardButton, iconStyle } from "../styles/globalStyle"

import useBlogCalls from "../../hooks/useBlogCalls";

import { useState } from "react";
import CommentForm from "./CommentForm";

import { useSelector } from "react-redux";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router";

const CommentCard = ({
  setOpen,
  details,
  handleOpen,
  handleClose,

  open,
  showComment,
  setShowComment,
}) => {

  const { author, content, image, likes, publish_date, id, comments ,comment_count,post_views} = details;

const navigate=useNavigate()

  const [info, setInfo] = useState({
    content: "",
  });

  const [toggle, setToggle] = useState(false);

  const { getLike, postComments, deleteData } = useBlogCalls();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });

    console.log(e.target.value);
  };
  const { currentUser } = useSelector((state) => state.auth);
  const handleToggle = () => {
    setToggle(!toggle);
    setShowComment(!showComment);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postComments("comments", id, {
      ...info,
      post: id,
    });
    setInfo({});
  };
  const [data, setData] = useState(details)
const handleDelete=()=>{
navigate("/")
  deleteData("blogs",id)
console.log(id)
}

const handleUpdate=()=>{
  setData(data);
  handleOpen()

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
              <MessageIcon onClick={handleToggle} />{comment_count}
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <RemoveRedEyeIcon />{post_views}
            </Typography>
          </Box>

          {details.author === currentUser && (
            <Box
              sx={{
                my: 3,
                display: "flex",
                gap: 3,
                justifyContent: "center",
              }}
            >
              <Button
                onClick={handleUpdate}
                variant="contained"
                size="small"
                color="success"
              >
                Update Blog
              </Button>
              <Button
                variant="contained"
                size="small"
                color="error"
                onClick={handleDelete}
              >
                Delete Blog
              </Button>
            </Box>
          )}
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
          ></Typography>

          {toggle && (
            <Box onSubmit={handleSubmit} component="form">
              <TextField
                label="comments"
                id={info.post}
                name="content"
                type="text"
                variant="outlined"
                onChange={handleChange}
              />

              <Button type="submit" sx={btnDetail} variant="contained">
                ADD COMMENT
              </Button>
            </Box>
          )}
        </CardActions>
      </Card>

      <UpdateModal
        handleSubmit={handleSubmit}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        info={details}
        handleChange={handleChange}
        setOpen={setOpen}
      />
      {showComment && <CommentForm comments={comments} id={id} />}
      {/* 
      <DeleteModal
            open={openDelete}
            handleCloseDelete={handleCloseDelete}
            id={details.id}
            /> */}
    </div>
  );
};

export default CommentCard;
