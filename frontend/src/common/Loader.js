import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner className='my-3' animation='grow' role='status' variant='info' style={{ width: '8rem', height: '8rem', margin: 'auto', display: 'block' }}>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
