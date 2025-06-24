import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../../redux/about/actions";
import "./Title.css"


function Title(props) {
    console.log('props title >', props);
    const text = useSelector(state => {
        console.log(state);
        const { text } = state;
        return text.text;
    });
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(inputText(e.target.value))
    }

    return (
        <div className="card-title">
            <div className="card-title-top">
                <input className="inputtitle" type="text" onChange={handleChange} />
            </div>
            <p>{text}</p>
        </div>
    )

}
export default Title;

