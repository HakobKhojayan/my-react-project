import Input from "../../Components/Input";
import "./register.css"
import { useForm } from "react-hook-form";

export default function Register() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const data = [
        {
            id: 1,
            type: "text",
            placeholder: "first name",
            name: "first"
        },
        {
            id: 2,
            type: "text",
            placeholder: "last Name",
            name: "last"
        },
        {
            id: 3,
            type: "email",
            placeholder: "email",
            name: "mail"
        },
        {
            id: 4,
            type: "password",
            placeholder: "password",
            name: "password"
        },
    ]
    return (
        <div className="divreg">
            <form onSubmit={handleSubmit(onSubmit)}>
                {data.map((e) => {
                    return <Input key={e.id} type={e.type} placeholder={e.placeholder} register={register} name={e.name} />
                })}
                <div className="dd">
                    <input type="submit" value={"sexmir"} />
                </div>
            </form>
        </div>

    )
}