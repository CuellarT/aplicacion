import { useState } from "react";
import CategoriesList from "./CategoriesList";

const Categories = ({categories = [], setCategories}) => {
  const [inputValue, setInputValue] =useState("")

  const handleInput = ({target}) => {
    setInputValue(target.value)
  }
  
  const handleAddCategoriButton = () => {
    if (!categories.includes(inputValue)){
        setCategories([inputValue, ...categories])
    setInputValue("")
    }
  }
  
  return (
    <>
    <input
    onChange={(e) => handleInput(e)}
    placeholder="Write category name"
    type="text"
    value={inputValue}
    />
    <button
    className="btn btn-danger btn-sm m2"
    onClick={handleAddCategoriButton}
    type="button">Add</button>
    <br />
    <CategoriesList categories={categories} />
    </>
  )
}

export default Categories;