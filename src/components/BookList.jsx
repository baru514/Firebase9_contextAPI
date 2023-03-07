import { useCollection } from "../hooks/useCollection";

export default function BookList({ books }) {

  const { delDocu } = useCollection('books');
  const handleDelete = async (id) => {
    await delDocu(id);
  }
  const getSingle = (book) => {
    console.log(book.title, book.idUniq, book.uid)
  }
  return (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <span onClick={()=>getSingle(book)}>{book.title}</span>
            <button className='del' onClick={()=>handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}