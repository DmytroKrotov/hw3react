// eslint-disable-next-line react/prop-types
export default function BookItem({id,title,author,pages,genre,review,onDelete}){
    function handlerClick(){
        onDelete(id);
    }
   return   <li>
            <h2>Title: {title}</h2>
            <p>Id: {id}</p>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>
            <p>Pages: {pages}</p>
            <p>Review: {review}</p>
            <button onClick={handlerClick}>Delete</button>
            </li>
}