import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import "../style/post.css"

export default function TrendingFeed(){
    const {REACT_APP_X_RAPIDAPI_HOST : X_RAPIDAPI_HOST, REACT_APP_X_RAPIDAPI_KEY : X_RAPIDAPI_KEY} = process.env

    const [items, setItems] = useState([]);

    const playVideoInViewport = entries => entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.play()
        }else{
            entry.target.pause()
            entry.target.currentTime = 0
        }
    })
    const observer = new IntersectionObserver(playVideoInViewport, {threshold: 0.5})

    const canPlay = ({target}) => {
        observer.observe(target)
        console.log("canplay", target)
        target.addEventListener("click", ({target}) => target.paused ? target.play() : target.pause())
    }

    useEffect(()=>{
        fetch(`https://${X_RAPIDAPI_HOST}/trending/feed`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": X_RAPIDAPI_HOST,
                "x-rapidapi-key": X_RAPIDAPI_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setItems(data)
        })
        .catch(err => {
            console.error(err);
        });
    }, [])

    return items.length ? (
        <div className="post-container">
            {items.map(item =>
                <section key={item.id} className="post">
                    <video src={item.videoUrl} loop onCanPlay={canPlay}></video>
                    <div className="post-sidebar">
                        <h2>{item.text}</h2>
                        <Link to={"/users/"+item.authorMeta.id}>{item.authorMeta.name}<img src={item.authorMeta.avatar}></img></Link>
                        <p>{item.hashtags.map(tag => '#'+tag.name).join()}</p>
                        <div className="post-sidebar__button">
                            <span className="material-icons"> favorite_border </span>
                            <p>{item.diggCount}</p>
                        </div>
                        <div className="post-sidebar__button">
                            <span className="material-icons"> message </span>
                            <p>{item.playCount}</p>
                        </div>
                    </div>
                </section>
            )}
        </div>    
    ) : (<h1>Loading...</h1>)
    }