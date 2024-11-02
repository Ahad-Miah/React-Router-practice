import { useLoaderData, useNavigate } from "react-router-dom";


const Details = () => {
    const user = useLoaderData();
    const {name,id,email}=user;
    const navigate =useNavigate();
    const handleback=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Details about user {id}</h1>
            <h1>Name: {name}</h1>
            <h1>ID: {id}</h1>
            <h1>Email: {email}</h1>
            <button onClick={handleback} className="btn">Go back</button>
        </div>
    );
};

export default Details;