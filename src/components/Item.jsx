import React from 'react';
import '../assets/styles/components/Item.scss'
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const Item = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://picsum.photos/200/300" alt=""/>
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt=""/>
                <img className="carousel-item__details--img" src={plusIcon} alt=""/>
            </div>
            <p className="carousel-item__details--title">title</p>
            <p className="carousel-item__details--subtitle">description</p>

        </div>
    </div>
);

export default Item;