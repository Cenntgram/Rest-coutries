import React, { useState } from 'react'
import { FadeLoader } from 'react-spinners';


const Loading = (props) => {
    const [color, setColor] = useState('hsl(150, 100%, 66%)');
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "",
      };
  return (
    <div className='loading'>
        <FadeLoader
        color={color}
        loading={props.newLoading}
        cssOverride={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading