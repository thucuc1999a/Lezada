import React from 'react';
import './style.scss';
function Color({color}) {
    //console.log(color)
    return (
        
        <div className="color-item" >
        <a href="#" >{color ==="nâu"? ( <div className="brown"></div>) :  null}</a>
        <a href="#" >{color ==="vàng" ? ( <div className="yellow"></div>) : null}</a>
        <a href="#" >{color ==="xanh dương" ? ( <div className="blue"></div>) : null}</a>
        <a href="#" >{color ==="đỏ" ? ( <div className="red"></div>) : null}</a>
        <a href="#" >{color ==="cam" ? ( <div className="orange"></div>) : null}</a>
        <a href="#" >{color ==="tím" ? ( <div className="purple"></div>) : null}</a>
        <a href="#" > {color ==="hồng" ? ( <div className="pink"></div>) : null}</a>
        <a href="#" > {color ==="xanh lá" ? ( <div className="green"></div>) : null}</a>
        <a href="#" > {color ==="đen" ? ( <div className="black"></div>) : null}</a>
        <a href="#" >{color ==="trắng" ? ( <div className="white"></div>) : null}</a>
        
        
        
        </div>
        
        
    );
}

export default Color;