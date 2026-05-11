import { useState } from "react";


const ModelCard = ({model}) => {
  // -----state use start---------
      const [isSubcribed, setIsSubscribed] = useState (false)

      const handleSubscription = ()=>{
        setIsSubscribed(true)
      }
// -----state use end---------
    return (
          <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-100'>

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

                <button onClick={handleSubscription} className='btn w-full bg-red-700 text-white rounded-lg mt-5'>
                    {isSubcribed ? "Subscribed" : "Subscribe now"}
                </button>

            </div>
    );
};

export default ModelCard;