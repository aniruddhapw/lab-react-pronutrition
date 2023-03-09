
import React ,{useState,useEffect} from 'react';
import FoodBox from './Components/FoodBox';
import Search from './Components/Search';
import TodayFoods from './Components/TodayFoods';
import "./App.css"



const foodsData = [
  { name: 'Pizza', image: 'https://i.imgur.com/eTmWoAN.png', calories: 400 },
  { name: 'Salad', image: 'https://i.imgur.com/DupGBz5.jpg', calories: 150 },
  { name: 'Sweet Potato', image: 'https://i.imgur.com/hGraGyR.jpg', calories: 100 },
  // ...
];

function App() {
  const [foodList, setFoodList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFoodList(foodsData);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFoodList = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Pro Nutration</h1>
        <Search searchTerm={searchTerm} onSearch={handleSearch} />
      </header>
      <div className="container">
        <TodayFoods foods={filteredFoodList} />
      </div>
    </div>
  );
}

export default App;
