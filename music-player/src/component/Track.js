import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { auth } from "../Token";


const URL = "https://api.spotify.com";

//api headers
const apiHeaders = new Headers();
apiHeaders.append("Authorization", `${auth.token}`);

//ajax header options
const reqOptions = {
    method: "GET",
    headers: apiHeaders,
    redirect: "follow"
};

function Track(props) {

    let {id} = useParams();

    console.log("id is: ",id);
    console.log("props is : ", props);

    const [tracks, setTracks] = useState([]);

    const [audio, setAudio] = useState();//create a custom audio
    const[playing, setPlaying] = useState(false);
    const [preUrl, setPreUrl] = useState(null);

    useEffect(() => {
        getTracks()
    }, [])

    const getTracks = () => {
        fetch(`${URL}/v1/artists/${id}/top-tracks?market=IN`, reqOptions)
            .then(res => res.json())
            .then(data => {
                console.log("data = ", data);
                setTracks(data.tracks);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const playAudio = (url) => {
        //create instance for an Audio
        const myAudio =new Audio(url);
        if(!playing){
            myAudio.play();
            setAudio(myAudio);
            setPlaying(true);
            setPreUrl(url);
        }else{
          //play to pause state
          audio.pause();
          if(preUrl===url){
            setPlaying(false);
          }else{
            //pause to play
            myAudio.play();
            setAudio(myAudio);
            setPreUrl(url);
          }
        }
        }

    const trackIcon = (url) => {
        if(!url)
            return (<span className="text-danger">No Track Found</span>);
        if(playing && preUrl === url)
            return (<button className="btn btn-sm btn-outline-warning fs-3">Pause</button>)
        return (<button className="btn btn-sm btn-outline-success fs-3" onClick={playAudio}>Play</button>)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="offset-3 col-md-6">
                    <h1 className="display-1 text-center bg-light py-3 my-3">Tracks</h1>
                </div>
            </div>

            <div className="row">
                {
                    tracks.map((track, index) => {
                        const {id, name, album, preview_url} = track
                        return (
                            <div className="col-md-4 mb-2 mt-2" key={index}>
                                <div className="card">
                                    <div className="card-header">
                                        <img src={album.images[0].url} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body">
                                        <h6 className="display-6 text-secondary">{name}</h6>
                                    </div>
                                    <div className="card-footer">
                                        { trackIcon(preview_url) }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Track;