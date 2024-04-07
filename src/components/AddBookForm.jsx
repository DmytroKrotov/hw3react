import { useState } from "react";
import "./AddBookForm.css"
export default function AddBookForm({onNewBookCreate}){
    const [titleNew,setTitle]=useState();
    const [authorNew,setAuthor]=useState();
    const [genreNew,setGenre]=useState();
    const [pagesNew,setPages]=useState();
    const [reviewNew,setReview]=useState();

    

    const[titleErrorMessage,setTitleErrorMessage]=useState("the field cannot be empty");
    const[authorErrorMessage,setAuthorErrorMessage]=useState("the field cannot be empty");
    const[genreErrorMessage,setGenreErrorMessage]=useState("the field cannot be empty");
    const[reviewErrorMessage,setReviewErrorMessage]=useState("the field cannot be empty");
    const[pagesErrorMessage,setPagesErrorMessage]=useState("value cannot be 0");
    

    function handlerTitleChange(e){
        if(e.target.value===""){
            setTitleErrorMessage("the field cannot be empty");

        }
        else{
            setTitleErrorMessage("Correct");
            setTitle(e.target.value);
        }
        
        
    }
    function handlerAuthorChange(e){
        if(e.target.value===""){
            setAuthorErrorMessage("the field cannot be empty");

        }
        else{
            setAuthorErrorMessage("Correct");
            setAuthor(e.target.value);
        }
    }
    function handlerGenreChange(e){
        if(e.target.value===""){
            setGenreErrorMessage("the field cannot be empty");

        }
        else{
            setGenreErrorMessage("Correct");
            setGenre(e.target.value);
        }
    }
    function handlerPagesChange(e){
        if(e.target.value=="0"){
            setPagesErrorMessage("value cannot be 0");

        }
        else{
            setPagesErrorMessage("Correct");
            setPages(e.target.value);
        }
    }
    function handlerReviewChange(e){
        if(e.target.value===""){
            setReviewErrorMessage("the field cannot be empty");

        }
        else{
            setReviewErrorMessage("Correct");
            setReview(e.target.value);
        }
    }

    function handlerSubmit(e){
        e.preventDefault();
        
        onNewBookCreate({title:titleNew,author:authorNew,genre:genreNew,pages:pagesNew,review:reviewNew})
        

    }



    return (
        <form className="addForm" onSubmit={handlerSubmit}>
            <div className="formItem">
            <input type="text" name="title" placeholder="Set title" onChange={handlerTitleChange}/>
            <p className="formError">{titleErrorMessage}</p>
            </div>
            <div className="formItem">
            <input type="text" name="author" placeholder="Set author" onChange={handlerAuthorChange}/>
            <p className="formError">{authorErrorMessage}</p>
            </div>
            <div className="formItem">
            <input type="text" name="genre" placeholder="Set genre" onChange={handlerGenreChange}/>
            <p className="formError">{genreErrorMessage}</p>
            </div>
            <div className="formItem">
            <input type="text" name="pages" placeholder="Set pages" onChange={handlerPagesChange}/>
            <p className="formError">{pagesErrorMessage}</p>
            </div>
            <div className="formItem">
            <input type="text" name="review" placeholder="Set review" onChange={handlerReviewChange}/>
            <p className="formError">{reviewErrorMessage}</p>
            </div>           
            <button className="createButton" type="submit">Create</button>
        </form>
    )
}