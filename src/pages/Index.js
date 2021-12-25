import React from 'react'
import Logo from '../assets/logo.svg'; 

const Index = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-7">
                    <img src={Logo} alt="Logo gallery" width="100%"/>
                </div>
                <div className="col-sm-5">
                    <h1 className="title">App React Gallery</h1>
                    <p className="context">
                        App de galería de imágenes desarrollada con el stack de MERN 
                        (Mongodb, Express, React y NodeJs). Utilizando el servicio de DigitalOcean
                        Spaces para almacenar las imágenes en la nube y que sean accesibles para
                        cualquier usuario.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Index
