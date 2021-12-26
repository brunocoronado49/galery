import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const ImageDetail = () => {

    const [image, setImage] = useState({
        title: '',
        url: '',
        _id: '',
    })

    const params = useParams();
    const navigate = useNavigate();

    const getImage = async () => {
        const res = await axios.get(`/API/get-image/${params.id}`)
        setImage(res.data)
    }

    const handleDelete = async () => {
        const res = await axios.delete(`/API/delete-image/${params.id}`)
        console.log(res)
        navigate('/gallery')
    }

    useEffect(() => {
        getImage()
    }, [params.id])

    return (
        <div>
            <center>
                <img src={image.url} alt={image.title} width="70%"/>
                <br />
                <br />
                <h1 className="titleImage">{image.title}</h1>
                <button className="btn btn-outline-warning" onClick={handleDelete}>Delete</button>
            </center>
        </div>
    )
}

export default ImageDetail
