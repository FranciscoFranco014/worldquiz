
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const CategoryCard = ({category, alt, src, gradientColor}) => {
    return(
        <div className="  basis-1/4 flex-col  flex-wrap justify-center gap-4 mt-10">
            <Link 
                to={`/category/${category}`} 
                className={`grid bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r ${gradientColor} transition-all hover:scale-105`}
            >
        
        <div className=" blur-load p-5 flex justify-center items-center " >
            <img 
                src={src} 
                alt={alt} 
                className='w-36' 
                loading="lazy"
            />
        </div>

        <h1 className='flex flex-col text-2xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
            {category}
        </h1>
        
        </Link>
        
        </div>

    )
}