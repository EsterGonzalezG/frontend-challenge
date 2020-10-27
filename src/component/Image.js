import React from "react";
import PropTypes from 'prop-types';


export const Image = ({ item }) => (
    <img loading="lazy" className='l-marginBottom-16' src={item.imgUrl} alt={item.title}/>
)

Image.prototype = {
    imgUrl: PropTypes.string,
    title: PropTypes.string
}