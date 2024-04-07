import "./BookItem.css"

// eslint-disable-next-line react/prop-types
export default function BookItem({id,title,author,pages,genre,review,onDelete}){
    function handlerClick(){
        onDelete(id);
    }
   return   <div className="book">
            <h2 className="bookProperty">Title: {title}</h2>
            <p className="bookProperty"> Id: {id}</p>
            <p className="bookProperty">Author: {author}</p>
            <p className="bookProperty">Genre: {genre}</p>
            <p className="bookProperty">Pages: {pages}</p>
            <p className="bookProperty">Review: {review}</p>
            <button className="deleteButton" onClick={handlerClick}>Delete</button>
            </div>
}