import React from 'react';
import TabBar from './TabBar';

const Footer = ({category, onSelect}) => {    
    return (
        <div>
            <TabBar 
                onSelect={onSelect}
                category={category}
             />
        </div>
    )
}

export default Footer;