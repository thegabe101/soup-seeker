import React from 'react';
import { soupTypes } from '../soup-types';

function SoupImage() {

    return (
        <div>
            {soupTypes.map(
                (
                    { src },
                    index
                ) => {
                    return (
                        <div key={index}>
                            <img className="soupImg" src={src} />
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