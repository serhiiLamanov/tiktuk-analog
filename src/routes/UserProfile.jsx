import{Link, useParams} from "react-router-dom"
import { useEffect } from "react"

export default function UserProfile(){
    const {REACT_APP_X_RAPIDAPI_HOST : X_RAPIDAPI_HOST, REACT_APP_X_RAPIDAPI_KEY : X_RAPIDAPI_KEY} = process.env
    let { userId } = useParams()

    useEffect(()=>{
        fetch(`https://${X_RAPIDAPI_HOST}/user/feed/${userId}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": X_RAPIDAPI_HOST,
                "x-rapidapi-key": X_RAPIDAPI_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // setItems(data)
        })
        .catch(err => {
            console.error(err);
        });
    })

    return(
        <main>
            <h2>UserProfile</h2>
            <h3>user ID {userId}</h3>

            <Link to="/TrendingFeed">return to TrendingFeed</Link>
        </main>
    )
}