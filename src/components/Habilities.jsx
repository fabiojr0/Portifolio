import React from 'react';


function Habilities() {
    const tecnologiesImgs = [
        "./tecnologies/react.png",
        "./tecnologies/tailwindcss.svg",
        "./tecnologies/js.png",
        "./tecnologies/figma.png",
        "./tecnologies/html.png",
        "./tecnologies/css.png",
        "./tecnologies/python.png",
        "./tecnologies/node-js.png",
        "./tecnologies/c-sharp.png",
        "./tecnologies/unity.png",
        "./tecnologies/sql.png",
        "./tecnologies/mongodb.png",
    ]

  return (
    <div className='flex flex-col justify-between items-center gap-10'>
        <h2 className='gradientText gradientBP font-bold text-xl'>Habilidades</h2>
        <div className='grid grid-cols-4 grid-rows-3 gap-4 p-4'>
            {tecnologiesImgs.map((item) => {
                return <img src={item} className='w-full h-full p-3' key={item.substring(item.indexOf("s/") +2, item.lastIndexOf("."))}/>
            })}
        </div>
    </div>
  )
}

export default Habilities
