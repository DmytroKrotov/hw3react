import { useState } from 'react'
import Show from './components/Show'
import AddBookForm from './components/AddBookForm'
import './App.css'

function App() {
  const [libruary, setLibruary] = useState([]);


  function getUniqueId(arr){
    let newId=Math.random();
    if(arr.filter((i)=>i.id===newId).length>0){
      return newId=getUniqueId(arr);
    }
    else{
      return newId;
    }
  }

  function handlerNewBookCreate(newBook){
    let Id=getUniqueId(libruary);
    setLibruary((prevLibruary)=>{
     return [{id:Id,title:newBook.title,author:newBook.author,genre:newBook.genre,pages:newBook.pages,review:newBook.review},...prevLibruary]
    });
  }

  function handlerDeleteItem(deletedId){
    setLibruary((prevLibruary) => {
      return prevLibruary.filter((i)=>i.id!==deletedId);
    });
  }

  return (
    <>
      <AddBookForm onNewBookCreate={handlerNewBookCreate}/>
      <Show books={libruary} onDeleteItem={handlerDeleteItem}/>
    </>
  )
}

export default App
