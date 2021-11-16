import React,{useState} from 'react';
import './App.css';
import Axios from "axios";
import RecipeComponent from './component/RecipeComponent';

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([])
  const [healthLabel, sethealthLabel] = useState("vegan")
  
  const YOUR_APP_ID = "081a4054";
  const YOUR_APP_KEY = "3e95b25f50aa6f35579aaedb27187b4f";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`
  
  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits)
    console.log(result.data);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="App">
        <h1 className="App-title" >Food Recipe Plaza</h1>


        <form className="app-search" onSubmit={onSubmit}>
          <input type="text" placeholder="enter ingridient" 
          value={query} 
          onChange={(e) => setquery(e.target.value)} />
          <button className="app_btn" type="submit" value="Search">Search</button>

          <select className="app-health">
            <option onClick={() => sethealthLabel("Vegan")}>Vegan</option>
            <option onClick={() => sethealthLabel("Vegetarian")}>Vegetarian</option>
            <option onClick={() => sethealthLabel("Egg-Free")}>Egg-Free</option>
            <option onClick={() => sethealthLabel("Gluten-Free")}>Gluten-Free</option>
            <option onClick={() => sethealthLabel("Keto-Friendly")}>Keto-Friendly</option>
            <option onClick={() => sethealthLabel("Fish-Free")}>Fish-Free</option>
            <option onClick={() => sethealthLabel("Alcohol-Free")}>Alcohol-Free</option>
            <option onClick={() => sethealthLabel("Dairy-Free")}>Dairy-Free</option>
            <option onClick={() => sethealthLabel("Mustard-Free")}>Mustard-Free</option>
          </select>
        </form>


        <div className="app-recipe">
          {recipes.map(recipe =>{
            return <RecipeComponent recipe={recipe}/>
          })}
        </div>
    </div>
  );
}

export default App;
