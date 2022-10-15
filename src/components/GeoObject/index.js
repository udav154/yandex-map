import React from "react";
import { GeoObject } from "react-yandex-maps";


const GeoObjectCom = ({ coord = [], type = 'Point', radius = 10, ...props }) => {
    if (!(Array.isArray(coord[0]))) {
        const geoobject = {
            type: type,
            coordinates: coord,
            radius: radius
        }
        return <GeoObject geometry={geoobject} />
    } else {
        return (
            coord.map((el) => {
                const geoobject = {
                    type: type,
                    coordinates: el,
                    radius: radius
                }
                return <GeoObject key={el[0]} geometry={geoobject} />
            }))
    }
}

export default GeoObjectCom