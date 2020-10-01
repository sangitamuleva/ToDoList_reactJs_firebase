import React ,{useState}from "react";
import {List ,ListItem,ListItemText,ListItemAvatar,Button, Modal,Input}from '@material-ui/core';
import './ToDo.css'
import db from "./firebase";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ToDO(props){
  const classes = useStyles();

  const [open,setOpen]=useState(false);
  const [input,setInput]=useState();
  const handleOpen= () =>{
    setOpen(true);
  };

  const handleClose= () =>{
    setOpen(false);
  };

  const updateTodo =() =>{
    db.collection('todos').doc(props.todo.id).set({
        todo:input
    },{merge:true})
    setOpen(false);
  };

  return (
    <div>
    <Modal open={open} onClose={e=>setOpen(false)} className={classes.modal}>
    <Fade in={open}>
          <div className={classes.paper}>
            <Input placeholder={props.todo.todo} value={input} onChange={e =>setInput(e.target.value)}/>
            <Button onClick={updateTodo}>Update</Button>
          </div>
      </Fade>
        
    </Modal>

    <List className="to_do_list">
      <ListItem id="todo1">
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary={props.todo.created} />
        <EditIcon onClick={e=>setOpen(true)} id="edit" />
        <DeleteOutlineIcon onClick={event=>{db.collection('todos').doc(props.todo.id).delete()}} id="delete"/>
      </ListItem>
     
      
    </List>
    </div>
    )
}

export default ToDO;