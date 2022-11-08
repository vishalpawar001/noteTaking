import React, { useState } from "react";
import Note from "./components/Note";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  //states

  const [notes, setNotes] = useState([{
    title:"itle",
    content:"you can write content here"
  },
  {
    title:"tle2",
    content:"you can write content here"
  },
  {
    title:"itle3",
    content:"you can write content here"
  }]);

  const [newNote, setNewNote] = useState({
    title:"",
    content:""
  })

  // functions 
  function handleChange(event){
      const {name, value} = event.target;
      
        setNewNote((prev)=>{

          if(name==="title"){
            return {title:value, content:prev.content}
          }else{
            return {title:prev.title, content:value}
          }
        })
      
  }

  function deleteNote(id){
    setNotes((prev)=>{
      return  prev.filter(
        (item, index)=>{
          return id !== index;
      })
    })
  }


  function returnNotes(noteObj, index){
    return(
      <Note key={index} id={index} title={noteObj.title} content={noteObj.content} deleteNote = {deleteNote} />
    )
  }


  function addTheNote(prev){

      const noteObj={
        title: newNote.title,
        content:newNote.content
      }
      setNotes((prev)=>{
          return [...prev, noteObj];
      });

      setNewNote({
        title:"",
        content:""
      })

  }
  // return 

  return <>

    <Header/>

   
    <div>
      <h1> Add Note </h1>
      <input onChange={handleChange} type="text" value={newNote.title} name="title" /> Title <br/> <br/>
      <input onChange={handleChange} type="text" value={newNote.content} name="content" /> Content <br/> <br/>
      <button type="submit" onClick={addTheNote}> Add </button>
    </div>

    <div className="container" >
        {notes.map(returnNotes)}
    </div>

    <Footer/> 
  </>
}

export default App;