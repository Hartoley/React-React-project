import React from 'react'
import './bigvideobox.css'
import Videos from './Videos'

const Bigvideobox = ({viewed, vspan, extra}) => {
  return (
    <>
        <div className="bigBox">
            <p className='videoHeadlines'>{viewed}<span>{vspan}</span>{extra} </p>
            <div className="videoBox">
                <Videos image={require('../src/Images/udemy.png' )} title='DevOps Projects | Real Time DevOps & GitOps Projects' authorName='Abby Zayn' price='₦39,900 '/>
                <Videos image={require('../src/Images/udemy.png' )} title='DevOps Projects | Real Time DevOps & GitOps Projects' authorName='Abby Zayn' price='₦39,900 '/>
                <Videos image={require('../src/Images/udemy.png' )} title='DevOps Projects | Real Time DevOps & GitOps Projects' authorName='Abby Zayn' price='₦39,900 '/>
                <Videos image={require('../src/Images/udemy.png' )} title='DevOps Projects | Real Time DevOps & GitOps Projects' authorName='Abby Zayn' price='₦39,900 '/>
                <Videos image={require('../src/Images/udemy.png' )} title='DevOps Projects | Real Time DevOps & GitOps Projects' authorName='Abby Zayn' price='₦39,900 '/>
            </div>
            {/* Master Your DevOps Skills with Real challengeRating: 4.7 out of 52915 reviews40 total hours246 lecturesIntermediateCurrent price: ₦39,900 */}
        </div>
    </>
  )
}

export default Bigvideobox