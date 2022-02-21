import React from 'react';
import './button.css'

const Button = ({text,color,bcolor,height,width,bradius,fs,fw}) => {
  return <div className='butt-cont' style={{width:'100%'}}>
      <button style={{
          color: color,
          backgroundColor:bcolor,
          height:height,
          width:width,
          border:'none',
          fontSize:fs,
          fontWeight:fw,
          borderRadius:bradius,
          padding: '10.5px 4px',
          cursor:'pointer',
          '@media (max-width: 600px)': {
            
            fontSize:'10px',
            fontWeight:'700',
          },
      }}>
          {text}
      </button>
  </div>;
};

Button.defaultProps = {
    color:"white",
    bcolor:"green",
    borderRadius:"none"
}

export default Button;
