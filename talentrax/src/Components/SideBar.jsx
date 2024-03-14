import React from 'react';

const SideBar = () => {



    return (
        <div>
            <h3>Color</h3>
            <input type="checkbox" />
            <label >Red</label>
            <br />
            <input type="checkbox" />
            <label >Green</label>
            <br />
            <input type="checkbox" />
            <label >Blue</label>

            <h3>Shape</h3>
            <input type="checkbox" />
            <label >Small</label>
            <br />
            <input type="checkbox" />
            <label >Medium</label>
            <br />
            <input type="checkbox" />
            <label >Large</label>

            <h3>Size</h3>
            <input type="checkbox" />
            <label >Round</label>
            <br />
            <input type="checkbox" />
            <label >Oval</label>

        </div>
    )
}

export default SideBar