import { useState } from "react";
import BookItem from "./BookItem";

// eslint-disable-next-line react/prop-types
export default function Show({books,onDeleteItem}){

    
    const[selectedBookProperty, setSelectedBookProperty]=useState("title");
    const[searchString,setSearchString]=useState("");

    // eslint-disable-next-line react/prop-types
    let filterBooks=books.filter((book)=>{
        if(selectedBookProperty==="title"){
            return book.title.toLowerCase().includes(searchString.toLowerCase());
        }
        else if(selectedBookProperty==="author"){
            return book.author.toLowerCase().includes(searchString.toLowerCase());
        }
        else if(selectedBookProperty==="genre"){
            return book.genre.toLowerCase().includes(searchString.toLowerCase());
        }
        else{
            return book.review.toLowerCase().includes(searchString.toLowerCase());
        }
    });

    function handlerSearchString(e){
        setSearchString(e.target.value);
    }

    function handlerSelectBookProperty(e){
        setSelectedBookProperty(e.target.value);
    }



    let k=1;
    function handlerDelete(deletedItemId){
        onDeleteItem(deletedItemId)
    }
    // eslint-disable-next-line react/prop-types
    return (
        <div>
            <div>
                <h2>Search</h2>
                <label htmlFor="search" >Search</label>
                <input type="text" id="search" value={searchString} onChange={handlerSearchString}/>

                
                <label htmlFor="property" >Property</label>
                <select id="property" value={selectedBookProperty} onChange={handlerSelectBookProperty}>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="genre">Genre</option>
                    <option value="review">Review</option>

                </select>

             </div>
            <ul>
            {filterBooks.map((i)=><BookItem key={++k} id={i.id} title={i.title} author={i.author} genre={i.genre} pages={i.pages} review={i.review} onDelete={handlerDelete} />)}
            </ul>
        </div>)
}