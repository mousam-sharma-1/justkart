import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const Menuitem= ({title,imageUrl,size,history,linkUrl,match}) =>(
<div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
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
export default withRouter(Menuitem);