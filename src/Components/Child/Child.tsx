import React from 'react'
import Styled from './Chiled.style'


const Child = () => {

  return (
    <>
        <Styled.Continer>
        <Styled.WarapperContainer>
          <Styled.BigHeader>
            <span className="block">Ready to dive in?</span>
            <span className="block">Start your free trial today.</span>
          </Styled.BigHeader>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Get started </a>
            </div>
            <div className="ml-3 inline-flex">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"> Learn more </a>
            </div>
          </div>
        </Styled.WarapperContainer>
      </Styled.Continer>
       
    </>
  )
}


export default Child