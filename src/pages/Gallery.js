import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Gallery = () => {

    const [images, setImages] = useState([]);

    const navigate = useNavigate();

    const getImages = async () => {
        const res = await axios.get("/API/all-images");
        console.log(res);
        setImages(res.data);
    }

    useEffect(() => {
        getImages()
    }, [])

    if(images.length === 0) {
        return <h1 className="h4 text-center title">There are no Images yet</h1>
    }

    return (
        <div className="row">
            {images.map((image) => (
                <div
                className="col-md-4 p-1"
                key={image._id}
                onClick={() => navigate(`/image-detail/${image._id}`)}>
                    <img
                        src={image.url}
                        alt={image.title}
                        className="img-fluid h-100 w-100"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            ))}
        </div>
    )
}

export default Gallery
