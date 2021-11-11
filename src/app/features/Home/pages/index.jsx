import React from 'react';

import HomeRender from './HomeRender';
import Banner from '../../../components/Banner';

HomeFeature.propTypes = {
    
};

function HomeFeature(props) {
    return (
        <div>
        <Banner />
        <HomeRender />
            
        </div>
    );
}

export default HomeFeature;