import { Link, useParams } from 'react-router-dom'
import './SermonsStyle.css'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'


function Sermon() {
    const datas = [
        'WHO IS GOD?', 
        'WHO IS JESUS?', 
        'WHO IS THE HOLYSPIRIT?', 
        'WHAT IS THE WORD?', 
        'HOW CAN I BE SAVED',
        'HOW CAN I BE SAVED',
        'HOW CAN I BE SAVED',
        'HOW CAN I BE SAVED',
        'HOW CAN I BE SAVED',
        
    ]
    const infos = [
        'Almighty God is often referred to as the Father, the Creator of the universe, and the sovereign ruler of all that exists. He is considered all-powerful (omnipotent), all-knowing (omniscient), and all-loving (omnibenevolent)',
        `Born to the virgin Mary in Bethlehem,
        Baptized by John the Baptist,
        Performed miracles, such as healing the sick and raising the dead,
        Taught important lessons through parables,
        Forgave those who crucified Him,
        Died on the cross for the sins of humanity,
        Rose from the dead on the third day,
        Appeared to His followers after His resurrection.`,
        
    ]
    const [answers, setAnswer] = useState(infos[0])
    const {id} =useParams()
    
        const handleClick =(index) => {
            setAnswer(infos[index]);
        };


    return (
    <div  className='s-container' id='sermon'>
        <div className='s-box'>
        <div className='left'>
            <ul className='s-list'>
                {
                    datas.map((data, index) => {
                        return(
                        <Link to={`#${index}`} path = '#{index}' className='s-tab' key={index} onClick={()=>handleClick(index)}>
                            <li className='s-tab-list'><p>{data}</p> <FaArrowRight /></li>
                        </Link>
                        )

                    })
                }
           

            </ul>
        </div>
        <div className='right'>
            <div className='right-content' id={id}><p>'{answers}'</p></div>
        </div>
        </div>
    </div>
  )
}

export default Sermon