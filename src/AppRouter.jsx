import { Route, Routes } from  'react-router-dom'
import { HomePage } from './pages/routes'
import { CategoryPage } from './pages/CategoryPage'
import { Navbar } from './components/Navbar'




export const AppRouter = () => {
  return(
    
    <>
        <Navbar />
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/category/:category' element={<CategoryPage />} />
        </Routes>
    </>
  ) 
  
}
