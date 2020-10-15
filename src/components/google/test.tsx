import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
const containerStyle = {
    width: '400px',
    height: '400px'
};

const onLoad = (marker: any) => {
    console.log('marker: ', marker)
}


function Googlemap(props: any) {
    const { lat, lng } = props
    const center = {
        lat: {lat},
        lng: {lng}
    };

    const position = {
        lat: {lat},
        lng: {lng}
    }
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyD6Wut16Gy_rkfQPL7q4CCacKzkCijIeXs"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}
            >
            { /* Child components, such as markers, info windows, etc. */}
            <Marker
                onLoad={onLoad}
                position={position}
            />
               
            </GoogleMap>
        </LoadScript >
    )
}

export default React.memo(Googlemap)