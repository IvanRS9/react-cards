import React from 'react'
import './Card.css'

const languages = [
    {
        id: 1,
        name: 'Python',
        image: 'https://cdn.svgporn.com/logos/python.svg'
    },
    {
        id: 2,
        name: 'JavaScript',
        image: 'https://cdn.svgporn.com/logos/javascript.svg'
    },
    {
        id: 3,
        name: 'Java',
        image: 'https://cdn.svgporn.com/logos/java.svg'
    },
    {
        id: 4,
        name: 'C++',
        image: 'https://cdn.svgporn.com/logos/c-plusplus.svg'
    },
    {
        id: 5,
        name: 'C#',
        image: 'https://cdn.svgporn.com/logos/c-sharp.svg'
    }
]

const Cards = () => {
    return (
        <div>
            <div className='cards'>
                {languages.map((language) => (
                    <div className='card' key={language.id}>
                        <img src={language.image} alt="lang-svg" />
                        <h3>{language.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards
