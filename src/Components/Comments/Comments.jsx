import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid"
import { commentCreate } from "../../redux/about/actions";
import SingleComments from "../SingleComments/SingleComments";
import "./Comments.css"


function Comments() {
    const [textComment, setTextComment] = useState('');
    const comments = useSelector(state => {
        const { comments } = state;
        return comments.comments
    });

    const dispatch = useDispatch();

    const hendleInput = (e) => {
        setTextComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (textComment) {
            const id = uniqid()
            dispatch(commentCreate(textComment, id));
            setTextComment(e.target.value = "");
        }
    }

    return (
        <div className="card-commets">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" className="card-input" value={textComment} onChange={hendleInput} />
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(res => {
                return <SingleComments key={res.id} data={res} />
            })}
        </div>
    )
}
export default Comments;
