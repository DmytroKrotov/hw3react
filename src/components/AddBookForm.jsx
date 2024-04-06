import { useState } from "react";
export default function AddBookForm({onNewBookCreate}){
    const [titleNew,setTitle]=useState();
    const [authorNew,setAuthor]=useState();
    const [genreNew,setGenre]=useState();
    const [pagesNew,setPages]=useState();
    const [reviewNew,setReview]=useState();

    function handlerTitleChange(e){
        setTitle(e.target.value);
    }
    function handlerAuthorChange(e){
        setAuthor(e.target.value);
    }
    function handlerGenreChange(e){
        setGenre(e.target.value);
    }
    function handlerPagesChange(e){
        setPages(e.target.value);
    }
    function handlerReviewChange(e){
        setReview(e.target.value);
    }

    function handlerSubmit(e){
        e.preventDefault();
        
        onNewBookCreate({title:titleNew,author:authorNew,genre:genreNew,pages:pagesNew,review:reviewNew})
        

    }



    return (
        <form onSubmit={handlerSubmit}>
            <input type="text" name="title" placeholder="Set title" onChange={handlerTitleChange}/>
            <input type="text" name="author" placeholder="Set author" onChange={handlerAuthorChange}/>
            <input type="text" name="genre" placeholder="Set genre" onChange={handlerGenreChange}/>
            <input type="text" name="pages" placeholder="Set pages" onChange={handlerPagesChange}/>
            <input type="text" name="review" placeholder="Set review" onChange={handlerReviewChange}/>
            <button type="submit">Create</button>
        </form>
    )
}