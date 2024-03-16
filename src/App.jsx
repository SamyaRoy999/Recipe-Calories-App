import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import RecipesFunction from './components/RecipesFunction/RecipesFunction'

export default function App() {
  return (
    <div className='mx-auto container font-Lexend '>
      <Header/>
      <Banner/>
      <OurRecipes/>
      <RecipesFunction/>
    </div>
  )
}
