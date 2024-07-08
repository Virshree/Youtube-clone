import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {GOOGLE_API_KEY, SEARCH_RESULTS_API} from '../utils/constants'
import { getSearchSuggestionData } from "../utils/searchSlice";

const ButtonList = () => {


const navigate = useNavigate();
const dispatch = useDispatch();

const getSearchSuggestionsResults = async (category) => {
  navigate(`/results?search_query=${category}`);
  const data = await fetch(
    `${SEARCH_RESULTS_API}q=${category}`
  );
  const result = await data.json();
  console.log(result);
  dispatch(getSearchSuggestionData(result?.items));
};
  return (
    <div className='flex'>
       {buttonList.map((list, i) => (
          <Button
            key={i}
            name={list.name}
            getCategory={getSearchSuggestionsResults}
          />
        ))}
      
      
    </div>
  )
}

export default ButtonList
export const buttonList = [
  {
    name: "All",
  },
  { name: "Mixes" },
  { name: "Comedy" },
  { name: "News" },
  { name: "Gadgets" },
  { name: "Fitness" },
  { name: "Bollywood Songs" },
];
