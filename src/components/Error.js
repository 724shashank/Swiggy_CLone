import { useRouteError } from "react-router";
const Error=()=>{
    const err = useRouteError();

    return(
        <div>
        <h1>{err.data}</h1>
        <h2>Error Code "{err.status}" Page {err.statusText}</h2>
        <h3></h3>
        </div>
        
    )
}

export default Error ;