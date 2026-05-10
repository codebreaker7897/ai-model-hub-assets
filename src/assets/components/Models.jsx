import React, { use } from 'react';

const Models = ({modelPromise}) => {
    // --------------hocks----
    const Models = use(modelPromise)
    console.log(Models)
    // --------------hocks end----

    return (
        <div className='py-20 max-w-7xl max-auto' >
           <div className='text-center '>
             <h2 className='text-5xl font-bold'>Choose Your AI MOdel</h2>
            <p>One subcaption gives you access to all fontier AI Model</p>
           </div>


{/* --------map start--------- */}
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>
            
            {Models.map(model=> <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-100'>

               <div className='flex  justify-center items-center h-56 bg-zinc-300 '>

                <img className='h-40 w-40 ' src={model.image} alt="" />
               </div>

               <div className='p-4'>
                <h2 className='text-2xl font-bold'> {model.title} </h2>
               </div>

               <div>
                <p> {model.description} </p>
               </div>

               <div className='text-2xl font-bold space-y-3'> ${model.price}/ months </div>

                <button className='btn w-full bg-red-700 text-white rounded-lg mt-5'>subscribe now</button>

            </div>)}
        </div>
{/* --------map start--------- */}
        </div>
    );
};

export default Models;