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
const center = {
    lat: 13.845754,
    lng: 100.569766
};

function Googlemap(props: any) {
    const {coordinate} = props
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyD6Wut16Gy_rkfQPL7q4CCacKzkCijIeXs"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={coordinate}
                zoom={17}
            >
            { /* Child components, such as markers, info windows, etc. */}
            <Marker
                onLoad={onLoad}
                position={coordinate}
            />
               
            </GoogleMap>
        </LoadScript >
    )
}

export default React.memo(Googlemap)