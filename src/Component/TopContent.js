import './TopContentStyles.css'
import React, { useEffect, useState } from 'react'


function TopContent() {
    const content = ['Living For Jesus Making a difference', 'For God So Love the world,']
    const [contents, setContent] = useState(content[0])

    const postate = () => {setContent(prev => prev===content[0] ? content[1] : content[0])}
    
    useEffect(()=> {
        const interval = setInterval(postate, 2000)

        return (()=> {clearInterval(interval)})

    }, [])

  return (
    <div className='top-cont'>
        <div className='top-cont-text'>
            <h1>{contents}</h1>

        </div>
    </div>
  )
}

export default TopContent
