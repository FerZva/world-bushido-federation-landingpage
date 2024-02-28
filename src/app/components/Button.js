import React from 'react';

const Button = ({buttontext})  => {
  return (
    <button className="bg-buttonbg py-1 px-5 rounded-md hover:bg-buttonbghover">
        {buttontext}
    </button>
  )
}

export default Button;