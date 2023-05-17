import React from 'react'
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <Oval
        height={120}
        width={120}
        color="blue"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="blue"
        strokeWidth={3}
        strokeWidthSecondary={2}
      />
    </div>
  )
}

export default Loader