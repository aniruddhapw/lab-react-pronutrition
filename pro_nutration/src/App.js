
import React ,{useState} from 'react';
import FoodBox from './Components/FoodBox';
import Search from './Components/Search';


const initialFoods = [
  { name: 'Pizza', image: 'https://i.imgur.com/eTmWoAN.png', calories: 400 },
  { name: 'Salad', image: 'https://i.imgur.com/DupGBz5.jpg', calories: 150 },
  { name: 'Sweet Potato', image: 'https://i.imgur.com/hGraGyR.jpg', calories: 100 },

];

const App = () => {
   const [foods, setFoods] = useState(initialFoods);
   const [filteredFoods, setFilteredFoods] = useState(initialFoods);

  const handleSearch = (query) => {
    const newFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log("searched");
     setFilteredFoods(newFoods);
  };
  return (
    <div>
      <Search onSearch={handleSearch} />
      {filteredFoods.map((food, index) => (
        <FoodBox key={index} food={food} />
      ))}
    </div>
  );
};

export default App;

