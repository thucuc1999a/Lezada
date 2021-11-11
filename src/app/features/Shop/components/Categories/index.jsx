import React from 'react';
import PropTypes from 'prop-types';
import  './style.scss';
Categories.propTypes = {
    
};

function Categories({listCate}) {
  
  

    
   
    return (
        <div className="list-category">
        <p> All Categoriy</p>
        <ul className="list-cate">
        {listCate.map(index=>(
            <li className="list-item" >
            <a href="#"  className="item-cate">{index}</a>
             </li> 

        ))}
     
      
      
      </ul>
   
           
           
         
       
      

            
        </div>
    );
}

export default Categories;