import React from 'react';
import './menu-item.styles.scss';
const Menuitem= ({title,imageUrl,size}) =>(
<div className={`${size} menu-item`}>
<div style={{
    backgroundImage:`url(${imageUrl})`
}} className="background-img">
    </div>
<div className="content">
    <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">shop</span>
</div>
</div>

)
export default Menuitem;