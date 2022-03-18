import React, { Component } from 'react';
import app from './app.css';

class Images extends Component {


        render() {
            const preparedImageList = this.props.images.map(image => {
                    return (
                        <img key={image.id} src={image.urls.regular}  alt="" />
                    )
            });
        return (
            <div className="image-list-container">
                {this.props.images.length} tane resim var
                {preparedImageList}
            </div>
        );
    }
}

export default Images;