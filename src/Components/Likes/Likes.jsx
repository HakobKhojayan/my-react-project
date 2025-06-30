import { connect } from "react-redux";
import { decrementLikes, incrementLikes } from "../../redux/about/actions";
import "./Likes.css"

function Likes(props) {
    console.log("render>", props);

    return (
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>🤍{props.likes}</button>
            <button disabled={props.likes === 0} onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )

}

function mapStateToProps(state) {
    const { likes } = state;
    return {
        likes: likes.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Likes)