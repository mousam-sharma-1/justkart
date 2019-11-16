import React from 'react';
import Menuitem from '../menu-items/menu-item.component';
import './directory.styles.scss';

class Dircctory extends React.Component{
    constructor(){
        super()

        this.state={
            sections:[{
                title: 'hats',
                imageUrl: 'https://image.freepik.com/free-psd/_34168-1105.jpg',
                id:1
            },{
                title: 'jackets',
                imageUrl: 'https://image.freepik.com/free-photo/two-leather-jackets-with-glasses-flowers_134398-2599.jpg',
                id:2
            },{
                title: 'watches',
                imageUrl: 'https://image.freepik.com/free-photo/businessman-checking-time_1357-97.jpg',
                id:3
            },{
                title: 'mens',
                imageUrl: 'https://image.freepik.com/free-photo/man-holding-his-hand-his-pants-pocket_23-2148316579.jpg',
                id:4,
                size:'large'
            },{
                title: 'womens',
                imageUrl: 'https://image.freepik.com/free-photo/model-cute-adult-portrait-urban_1139-817.jpg',
                id:5,
                size:'large'
            }]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,imageUrl,id,size}) =>(
                        <Menuitem key={id} title={title} imageUrl={imageUrl} size={size}></Menuitem>
                    ))
                }
            </div>
        )
    }
}
export default Dircctory;
