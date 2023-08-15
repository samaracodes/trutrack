import React from "react";
import { useParams } from "react-router-dom";

const CarId = () => {
    const { slug } = useParams()
    console.log(slug)
    return (
        <div>
            <h1>Car ID</h1>
        </div>
    )
}

export default CarId