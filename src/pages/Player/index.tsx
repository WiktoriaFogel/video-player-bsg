import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import { Card } from 'antd';

const Player: React.FC = (props: any) => {

    const [url, setUrl] = useState("");
    const mediaId = props.location.state.id;

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch("https://thebetter.bsgroup.eu/Media/GetMediaPlayInfo", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify({
                "MediaId": mediaId,
                "StreamType": "TRIAL"
            })
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUrl(data.ContentUrl);
            })
    }, []);


    return (
        <Card style={{ marginTop: "2%", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
            <ReactPlayer style={{ marginLeft: "auto", marginRight: "auto" }} url={url} controls={true} />
        </Card>
    );
}

export default Player;