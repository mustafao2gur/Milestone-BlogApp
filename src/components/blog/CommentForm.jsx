import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import useBlogCalls from "../../hooks/useBlogCalls";
import CommentCard from "./CommentCard";
import { useEffect } from "react";
 function CommentForm({ comments }) {
 
    const { getBlogsData } = useBlogCalls();

useEffect(() => {
      getBlogsData("detail");
    }, []);

console.log(comments);
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        minWidth:200,
        bgcolor: "background.paper",
      }}
    >
        {comments.map((item)=>{
         return (
           <>
             <Divider variant="inset" component="li" />
             <ListItem>
               <ListItemText
                 primary={item.user}
                 secondary={
                   <React.Fragment>
                     <Typography
                       sx={{ display: "inline", mr: 2 }}
                       component="span"
                       variant="body4"
                       color="text.secondary"
                     >
                       {new Date(item.time_stamp).toUTCString().slice(0, 16)}
                     </Typography>
                     <Typography
                       component="p"
                       variant="body1"
                       color="text.primary"
                     >
                       {item.content}
                     </Typography>
                   </React.Fragment>
                 }
               />
             </ListItem>
           </>
         );
       
        }
             
        )}
    
    </List>
  );
}

export default CommentForm;