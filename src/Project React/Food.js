import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Project React/Food.css'
import food from  '../images/food2.png'
export default function Food() {
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null); 

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => {
                setCategories(res.data.categories);
            })
            .catch(error => {
                console.error('Error fetching categories: ', error);
            });
    }, []);

    const fetchMealsByCategory = (category) => {
        // Fetch meals by category
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => {
                setMeals(res.data.meals);
            })
            .catch(error => {
                console.error(`Error fetching meals for category ${category}: `, error);
            });
    };

    const fetchMealDetails = (mealId) => {
        // Fetch meal details by ID
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => {
                setSelectedMeal(res.data.meals[0]); 
            })
            .catch(error => {
                console.error(`Error fetching meal details for meal ID ${mealId}: `, error);
            });
    };

    const handleClickMeal = (mealId) => {
        fetchMealDetails(mealId);
    };

    const handleBackToMeals = () => {
        setSelectedMeal(null);
    };

    return (
        <div className="container">
         <marquee>   <img src={food} style={{borderRadius:'60%', width:'200px'}} alt='' /></marquee>
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <input
                        type="text" style={{margin:'10px'}}
                        className="form-control"
                        placeholder="Search 'Dishes'... "
                        />
                        <button type="button"  class="btn btn-info" >Search</button>                        
                </div>
            </div>

<h3 style={{margin:'30px'}}>What's on your mind?
</h3>
            {!selectedMeal && (
                <div className="row justify-content-center">
                    {categories.map(category => (
                        <div key={category.idCategory} className="col-md-auto mb-3 text-center">
                            <div style={{ width: '250px', height: '150px', borderRadius: '50%', overflow: 'hidden' }}>
                                <img src={category.strCategoryThumb} className="img-fluid" alt={category.strCategory} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', }} />
                            </div>
                            <h5 className="mt-2">{category.strCategory}</h5>
                            <button id='btn' onClick={() => fetchMealsByCategory(category.strCategory)}>Show Meals</button>
                        </div>
                    ))}
                </div>
            )}

            {!selectedMeal && (
                <div className="row justify-content-center mt-4">
                    {meals.map(meal => (
                        <div key={meal.idMeal} className="col-md-auto mb-3 text-center">
                            <img src={meal.strMealThumb} className="img-fluid" alt={meal.strMeal} style={{ width: '100%', height: '150px', objectFit: 'cover',borderRadius: '50%' }} />
                            <h5 className="mt-2">{meal.strMeal}</h5>
                            <button id='btn1' onClick={() => handleClickMeal(meal.idMeal)}>View Details</button>
                        </div>
                    ))}
                </div>
            )}

            {selectedMeal && (
                <div>
                    <button onClick={handleBackToMeals}>Back to Meals</button>
                    <h2>{selectedMeal.strMeal}</h2>
                    <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} style={{ width: '100%', maxWidth: '300px', height: 'auto',borderRadius:'50%'}} />
                    <h3>Additives:</h3>
                    <ul>
                        {Array.from({ length: 20 }, (_, index) => index + 1).map(index => {
                            const ingredientName = selectedMeal[`strIngredient${index}`];
                            const ingredientMeasure = selectedMeal[`strMeasure${index}`];

                            if (ingredientName) {
                                return (
                                    <li key={index}>
                                        <img
                                            src={`https://www.themealdb.com/images/ingredients/${ingredientName}-Small.png`}
                                            alt={ingredientName}
                                            style={{ width: '50px', height: '50px',borderRadius:'50%', objectFit: 'cover', marginRight: '10px' }}
                                        />
                                        {`${ingredientName} - ${ingredientMeasure}`}
                                    </li>
                                );
                            }
                            return null;
                        })}
                    </ul>
                    <h3>Instructions:</h3>
                    <p>{selectedMeal.strInstructions}</p>
                </div>
            )}
        </div>
    );
}

