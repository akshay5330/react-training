import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItems from "./MealItems/MealItems";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, sethttpError] = useState();

  useEffect (() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-8e698-default-rtdb.firebaseio.com/meals.json');

      if (!response.ok){
        throw new Error ('Something Went Wrong');
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    }

    fetchMeals().catch((error) => {
    setIsLoading(false);
    sethttpError(error.message)});

  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  };

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  };

  const MeaslList = meals.map((meal) => 
    <MealItems id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
  return ( 
  <section className={classes.meals}>
      <Card>
        <ul>{MeaslList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
