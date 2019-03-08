import React from 'react';
import DefaultShowText from './DefaultShowText';
import PlantShowText from './PlantShowText';




const ShowItem = ({ plant, ...props }) => {

            if (plant.id) {
                return <PlantShowText plant={plant}/>                
            } 
            return <DefaultShowText />
}

export default ShowItem;