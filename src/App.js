import React ,{useState, useEffect}from "react";
import "./App.css";
import ToDo from './ToDo'
import {Button,FormControl,Input,TextField} from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

export default function App() {
  const [todos,setTodo]=useState([]);
  const [input,setInput]=useState('');

  // when app is loaded we need to initialize database

  useEffect(()=>{
    // this code fire when app.js load
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
        setTodo(snapshot.docs.map(doc=>
           ({
             id:doc.id,
             todo:doc.data().todo
            
            })
           ))
    })
  },[]);

  const Add_todo=(e)=>{
    e.preventDefault();
    
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }
  return (
    <div className='container'>
      <h1>ToDo LiSt</h1>
      <div className='inner-container'>
        <FormControl>
          <div>
              <TextField id="filled-basic" label="Add todo here" variant="filled" value={input} onChange={e=>setInput(e.target.value)} />
              <span style={{ cursor: 'Pointer' ,padding:'15px' }}>
              <LibraryAddIcon id="btn" disabled={!input} type='submit' onClick={Add_todo} variant="outlined" color="primary" size="small" />
              </span>
                            
           </div>
        </FormControl>
        
        <div>
          <ul>
            {todos.map(todo=>(<ToDo todo={todo}/> ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
