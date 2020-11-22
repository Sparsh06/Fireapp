import React from 'react';


const LocationInfo = ({info}) =>{
    return(
        <div class="location-info">
          <h2>Location Info</h2>
             <ul>
                 <li>
    ID :<strong>{ info.id }</strong>
                 </li>
    <li>ID: <strong>{ info.title }</strong></li>
             </ul>
        </div>
    )
}

export default LocationInfo;