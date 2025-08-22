import React from 'react'

const AccountHeroLayout = ({ data }) => {

  return (
    <section className=' w-full -mt-24 md:-mt-64 xl:mt-4 mb-32 min-h-screen flex flex-col-reverse xl:flex-row'>
      
      <article className=' basis-1 xl:basis-3/5'>
        <h1 className=' text-xl xl:text-5xl mt-12 xl:mt-32 font-semibold text-gray-800'><span>{data.title}</span><br />{data.title2}</h1>
        <p className=' text-sm xl:text-2xl mt-4 xl:mt-12 text-gray-800'>
            {data.subtitle}
        </p>
        <div className=' flex flex-coll xl:flex-row mt-12 gap-4 flex-wrap'>
            {
                data?.buttons?.map((button, index) => (
                    <a key={index} href={button.link}>
                        <button className=' text-xs xl:text-lg cursor-pointer border-3 py-2 px-2 xl:px-4 rounded-2xl border-[#faa818] shadow-xl hover:scale-95 hover:shadow-[#faa818] hover:shadow-sm ease-in-out transition-all'>
                            {button.text}
                        </button>
                    </a>
                ))
            }
        </div>
        <a href={data.mainButton.link} className=''>
            <button className=' mt-12 xl:mt-24 cursor-pointer bg-[#faa818] px-6 py-4 text-gray-50 rounded-2xl text-sm xl:text-2xl shadow-xl hover:scale-95 hover:shadow-gray-300 hover:shadow-sm ease-in-out transition-all'>{data.mainButton.text}</button>
        </a>
        {
            data.mainButton2 && 
            <a href={data.mainButton2.link} className=''>
                <button className=' ml-4 mt-12 xl:mt-24 cursor-pointer bg-[#faa818] px-6 py-4 text-gray-50 rounded-2xl text-sm xl:text-2xl shadow-xl hover:scale-95 hover:shadow-gray-300 hover:shadow-sm ease-in-out transition-all'>{data.mainButton2.text}</button>
            </a>
        }
      </article>

      <div className=' basis-1 xl:basis-2/5'>
        <img className=' rounded-4xl xl:mt-8 scale-70 md:scale-80 xl:scale-90  hover:scale-95 hover:shadow-[#faa819] shadow-lg hover:shadow-2xl ease-in-out transition-all' src={data.image} alt="" />
      </div>

    </section>
  )
}

export default AccountHeroLayout
