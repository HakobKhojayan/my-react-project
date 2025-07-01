import {useEffect, useState} from "react"
import { useDispatch } from "react-redux"
import { commentDelete } from "../../redux/about/actions"
import "./SingleComments.css"




function SingleComments({data}) {
    const [commentText, setCommentText] = useState('')
    const {text, id} = data
    const dispatch = useDispatch()

    const handleUpdate = (e) => {
        e.preventDefault()
        console.log('submit ->>', commentText);
    }

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(commentDelete(id))
    }
    useEffect(() => {
        if(text) {
            setCommentText(text)
        }
    },[text]);

    const hendleInput =(e) =>{
        setCommentText(e.target.value)
    }

    return(
        <form onSubmit={handleUpdate} className="comment-item">
            <span onClick={handleDelete}  className="comment-item-delete">X</span>
            <input type="text" value={commentText}  onChange={hendleInput}/>
            <input type="submit" hidden/>
        </form>
    )
}
export default SingleComments