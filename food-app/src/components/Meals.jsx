import MealItem from './MealItem';
import useHTTP from './hooks/useHTTP';
import Error from './Error';

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHTTP('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p className='center'>Fetching meals...</p>;
  }
  if (error) {
    return <Error title='Failed to fetch meals' message={error} />;
  }

  return (
    <ul id='meals'>
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
