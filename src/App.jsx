import React from 'react'
import Card from './Components/Card'
import Cards from './Components/Cards'


const App = () => {
  const languages = [
    {
      id: 1,
      name: 'Python',
      image: 'https://cdn.svgporn.com/logos/python.svg',
      fcolor: '#306998',
      scolor: '#ff0000'
    },
    {
      id: 2,
      name: 'JavaScript',
      image: 'https://cdn.svgporn.com/logos/javascript.svg',
      fcolor: '#f7df1e',
      scolor: '#ff0000'
    },
    {
      id: 3,
      name: 'Java',
      image: 'https://cdn.svgporn.com/logos/java.svg',
      fcolor: '#5382a1',
      scolor: '#ff0000'
    },
    {
      id: 4,
      name: 'C++',
      image: 'https://cdn.svgporn.com/logos/c-plusplus.svg',
      fcolor: '#00599c',
      scolor: '#00599a'
    },
    {
      id: 5,
      name: 'C#',
      image: 'https://cdn.svgporn.com/logos/c-sharp.svg',
      fcolor: '#68217a',
      scolor: '#68217c'
    }
  ]

  return (
    <div>
      {/* <Card /> */}
      {/* <Cards /> */}

      <div className='cards'>
        {languages.map((language) => (
          <Card
            key={language.id}
            lang={language.name}
            img={language.image}
            fcolor={language.fcolor}
            scolor={language.scolor}
          />
        ))}
      </div>
    </div>
  )
}

export default App

