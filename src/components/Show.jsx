import BookItem from "./BookItem";

// eslint-disable-next-line react/prop-types
export default function Show({books,onDeleteItem}){
    let k=1;
    function handlerDelete(deletedItemId){
        onDeleteItem(deletedItemId)
    }
    // eslint-disable-next-line react/prop-types
    return <div>{books.map((i)=><BookItem key={++k} id={i.id} title={i.title} author={i.author} genre={i.genre} pages={i.pages} review={i.review} onDelete={handlerDelete} />)}</div>
}