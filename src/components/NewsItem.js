import React, { Component } from 'react'
    
export class NewsItem extends Component {
   
    render() {
        let {title,description,imageurl,newsurl}=this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageurl?imageurl:"https://images.wsj.net/im-466251/social"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sn btn-dark">Read-More</a>
                        </div>  
                </div>
            </div>
        )
    }
}

export default NewsItem

 