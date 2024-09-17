import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';


const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://66e31677494df9a478e43bca.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    <div className="content__top">
      <Categories/>
      <Sort/>
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {isLoading
        ? [...Array(6)].map((_, index) => <Skeleton key={index} />)
        : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
    </div>
    </>
  )
}

export default Home;