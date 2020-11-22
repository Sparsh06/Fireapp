import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMark from './LocationMark';
import LocationInfo from './LocationInfo';
import {useState} from 'react';

const Map = ({eventData,center,zoom}) =>{  
     const [LocationIn,setLocationIn] = useState(null);
      const marker = eventData.map((ev,index) =>{
          if(ev.categories[0].id === 8){
              return  <LocationMark key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={()=>setLocationIn({
                 id: ev.id, title:ev.title
              })} />
          }
          return null
      })


    return (
       <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyBHvRkDkFETepeHVBecvWx6CKKhzBLpFOE'}}
        defaultCenter={center}
          defaultZoom={zoom}
        >
          {marker}
        </GoogleMapReact>
        {LocationIn && <LocationInfo info={LocationIn}/>}
       </div>
    )
}

Map.defaultProps = {
    center:{
        lat: 42.3265,
        lng: -122.8756
    },

    zoom : 6
}

export default Map;