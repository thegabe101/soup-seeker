import React from 'react';
import { soupTypes } from '../soup-types';

function SoupImage() {

    return (
        <div>
            {soupTypes.map(
                (
                    { src, index },
                    key
                ) => {
                    return (
                        <div key={key}>
                            <img className="soupImg" src={src} index={index} />
                        </div>
                    )
                }
            )}
        </div>
    );
};

export default SoupImage;



    //test map
    // <div>{soupArray.map((name, index) => <button>{name.name}</button>)}</div>