import React from 'react'
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
        <Oval
      height={120}
      width={120}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#4fa94d"
      strokeWidth={3}
      strokeWidthSecondary={2}
    /> 
    </div>
  )
}

export default Loader