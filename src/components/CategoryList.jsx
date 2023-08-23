/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Link } from 'react-router-dom'
import { imgs, categories } from '../data'
import { CategoryCard } from './CategoryCard'

const [
    imgCiencia,
    imgDeportes,
    imgFilosofia,
    imgGeografia,
    imgHistoria,
    imgLiteratura,
    imgTecnologia,
    imgEsports] = imgs

export const CategoryList = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4'>
        
        <CategoryCard 
            category={categories.ciencia} 
            src={imgCiencia} 
            alt={`Cateogría ${categories.ciencia}`} 
            gradientColor="from-blue-500 to-yellow-200" 
        />

         {/* Category Deportes */}
        {/* Category Ciencia */}
        <CategoryCard 
            category={categories.deportes} 
            src={imgDeportes} 
            alt={`Cateogría ${categories.deportes}`} 
            gradientColor="from-lime-400 to-pink500" 
        />
         {/* Category Filosofia */}
       {/* Category Ciencia */}
        <CategoryCard 
            category={categories.filosofia} 
            src={imgFilosofia} 
            alt={`Cateogría ${categories.filosofia}`} 
            gradientColor="from-red-400 to-white-200" 
        />
         {/* Category Geografia */}
        {/* Category Ciencia */}
        <CategoryCard 
            category={categories.geografia} 
            src={imgGeografia} 
            alt={`Cateogría ${categories.geografia}`} 
            gradientColor="from-cyan-500 to-green-500" 
        />
        {/* Category Historia */}
        {/* Category Ciencia */}
        <CategoryCard 
            category={categories.historia} 
            src={imgHistoria} 
            alt={`Cateogría ${categories.historia}`} 
            gradientColor="from-cyan-500 to-green-500" 
        />
        {/* Category Literatura */}
        {/* Category Ciencia */}
        <CategoryCard 
            category={categories.literatura} 
            src={imgLiteratura} 
            alt={`Cateogría ${categories.literatura}`} 
            gradientColor="from-amber-500 to-pink-500" 
        />
         {/* Category Tecnologia */}
        
        <CategoryCard 
            category={categories.tecnologia} 
            src={imgTecnologia} 
            alt={`Cateogría ${categories.tecnologia}`} 
            gradientColor="from-purple-500 to-red-300" 
        />

        <CategoryCard 
            category={categories.esports} 
            src={imgEsports} 
            alt={`Cateogría ${categories.esports}`} 
            gradientColor="from-purple-500 to-pink-500" 
        />
    </div>
  )
}
