import{useParams} from "react-router-dom"
import { useEffect } from "react"

export default function UserProfile(){
    let { userId } = useParams()

    useEffect(()=>{
        fetch("https://tiktok33.p.rapidapi.com/user/feed/"+userId, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST,
                "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    })

    return(
        <main>
            <h2>UserProfile</h2>
            <h3>user ID {userId}</h3>
        </main>
    )
}