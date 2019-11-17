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
                id:1,
                linkUrl:'hats'
            },{
                title: 'jackets',
                imageUrl: 'https://image.freepik.com/free-photo/two-leather-jackets-with-glasses-flowers_134398-2599.jpg',
                id:2,
                linkUrl:''
            },{
                title: 'watches',
                imageUrl: 'https://image.freepik.com/free-photo/businessman-checking-time_1357-97.jpg',
                id:3,
                linkUrl:''
            },{
                title: 'mens',
                imageUrl: 'https://image.freepik.com/free-photo/man-holding-his-hand-his-pants-pocket_23-2148316579.jpg',
                id:4,
                size:'large',
                linkUrl:''
            },{
                title: 'womens',
                imageUrl: 'https://image.freepik.com/free-photo/model-cute-adult-portrait-urban_1139-817.jpg',
                id:5,
                size:'large',
                linkUrl:''
            }]
        }
    }
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,imageUrl,id,size,linkUrl}) =>(
                        <Menuitem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}></Menuitem>


                        
                        // this.state.sections.map(({...otherSectionProps}) =>(
                        //     <Menuitem {...otherSectionProps}></Menuitem>
                    ))
                }
            </div>
        )
    }
}
export default Dircctory;
