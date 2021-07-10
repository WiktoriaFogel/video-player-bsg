import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Card, List, Image, Row, Col } from 'antd';

const { Title } = Typography;

const Home: React.FC = () => {

    const history = useHistory();
    const [mediaList1, setMediaList1] = useState<any[]>([]);
    const [mediaList2, setMediaList2] = useState<any[]>([]);


    const handlePlayer = (item: any): any => {
        history.push('/player', { id: item.Id })
    }

    const handleImage = (item: any): string => {
        for (let image of item.Images) {
            if (image.ImageTypeCode === "FRAME") {
                return image.Url;
            }
        }
        return 'https://upload.wikimedia.org/wikipedia/commons/7/72/16x9_by_Pengo.svg';
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch("https://thebetter.bsgroup.eu/Media/GetMediaList", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify({
                "MediaListId": 3,
                "IncludeImages": true,
                "PageSize": 15
            })
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.Entities);
                setMediaList1(data.Entities);
            })

        fetch("https://thebetter.bsgroup.eu/Media/GetMediaList", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify({
                "MediaListId": 10,
                "IncludeImages": true,
                "PageSize": 15
            })
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.Entities);
                setMediaList2(data.Entities);
            })

    }, []);

    return (
        <Row>
            <Col span={12}>
                <Card style={{ marginTop: "2%", marginLeft: "10px", marginRight: "10px", overflowY: "scroll", height: "650px" }}>
                    <Title level={3}>Action Movies</Title>
                    <List
                        itemLayout="horizontal"
                        dataSource={mediaList1}
                        renderItem={item => (
                            <Card hoverable onClick={() => handlePlayer(item)}>
                                <List.Item.Meta
                                    avatar={<Image src={handleImage(item)} style={{ aspectRatio: "16/9", width: "220px" }} />}
                                    title={item.Title}
                                    description={item.Description}
                                />
                            </Card>
                        )}
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card style={{ marginTop: "2%", marginLeft: "10px", marginRight: "10px", overflowY: "scroll", height: "650px" }}>
                    <Title level={3}>Sport Videos</Title>
                    <List
                        itemLayout="horizontal"
                        dataSource={mediaList2}
                        renderItem={item => (
                            <Card hoverable onClick={() => handlePlayer(item)}>
                                <List.Item.Meta
                                    avatar={<Image src={handleImage(item)} style={{ aspectRatio: "16/9", width: "220px" }} />}
                                    title={item.Title}
                                    description={item.Description}
                                />
                            </Card>
                        )}
                    />
                </Card>
            </Col>
        </Row>

    );
}

export default Home;