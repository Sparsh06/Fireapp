import { Icon } from '@iconify/react';
import LocationIcon from '@iconify/icons-mdi/fire-alert';
import React from 'react';

const LocationMark = ({lat,lng,onClick}) => {
    return(
        <div className="location-marker"  onClick={onClick}>
          <Icon icon={LocationIcon} className="location-icon" />

        
        </div>
    )
}

export default LocationMark;