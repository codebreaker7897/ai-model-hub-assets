import React, { use,  } from 'react';
import ModelCard from './ModelCard';

const Models = ({modelPromise}) => {
    // --------------hocks----
    const Models = use(modelPromise)
    // --------------hocks end----
    
  

    return (
        <div className='container mx-auto py-20 px-4' >
           <div className='text-center '>
             <h2 className='text-5xl font-bold'>Choose Your AI MOdel</h2>
            <p>One subcaption gives you access to all fontier AI Model</p>
           </div>


{/* --------map start--------- */}
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
            
            {Models.map(model=> 
         
         <ModelCard model={model}/>
            )}
        </div>
{/* --------map end--------- */}
        </div>
    );
};

export default Models;