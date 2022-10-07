import { useEffect,useState } from 'react';
import Card from '../UI/Card';
import MealsItem from './MealsItem/MealsItem';
import Styled from './AvailableMeal.module.css';

const AvailableMeal = () => {
  const [Meals,setMeals]=useState([]);
  useEffect(()=>{
    const fetchData=async ()=>{
      const respose=await fetch('https://http-database-17681-default-rtdb.firebaseio.com/Meals.json');
      const responseData=await respose.json();

      let loadedData=[];
      for(const key in responseData){
        loadedData.push({
          id:key,
          name:responseData[key].name,
          description:responseData[key].description,
          price:responseData[key].price,
        });
      }
      setMeals(loadedData); 
    }
    fetchData();
  },[]);

    const mealsItem=Meals.map(meals => <MealsItem id={meals.id} key={meals.id} Name={meals.name} Description={meals.description} price={meals.price} />);
  return <section className={Styled.meals}>
    <Card>
    <ul>
        {mealsItem}
    </ul>
    </Card>
  </section>
}

export default AvailableMeal