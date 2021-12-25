import React from 'react'

const About = () => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h3>Información</h3>
                    <hr />
                    <p>
                        App de galería de imágenes desarrollada con el stack de MERN 
                        (Mongodb, Express, React y NodeJs). Utilizando el servicio de DigitalOcean
                        Spaces para almacenar las imágenes en la nube y que sean accesibles para
                        cualquier usuario.
                    </p>
                    <br />
                    <p>Francisco Rangel</p>
                </div>
            </div>
        </div>
    )
}

export default About
