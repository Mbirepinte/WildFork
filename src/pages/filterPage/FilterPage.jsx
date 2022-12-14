/* eslint-disable import/no-unresolved */
import PropTypes from "prop-types";
import "./filterPage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import Filter from "@components/Filter/Filter";
import { useState, useEffect } from "react";
import Title from "@components/Title/Title";
import { Link } from "react-router-dom";
import Button from "@components/ButtonExport/Button";
import { motion } from "framer-motion";

/* Gère le responsive du Carousel */

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    partialVisibilityGutter: 40,
  },
};

function FilterPage({ selectFilter, chooseMusic }) {
  /* Mes constantes */
  const [filters, setFilters] = useState([]);
  const [area, setArea] = useState([]);
  const [selectedCat, setSelectedCat] = useState("Beef");
  const [selectedArea, setSelectedArea] = useState("");
  const [selection, setSelection] = useState([]);
  const [filterTheme, setFilterTheme] = useState("CATEGORY");
  const [allRecipes, setAllRecipes] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);
  const [button, setButton] = useState("-none");
  const [hooverText, setHooverText] = useState("");       

  /*  Crée un tableau allMeals avec toutes les recettes au montage FilterPage */
  const allMeals = [];
  const idMeal = [];
  const supDuplicates = [];

  const filterDuplicate = (array) => {
    array.forEach((el) => {
      if (!idMeal.includes(el.idMeal)) {
        supDuplicates.push(el);
        idMeal.push(el.idMeal);
      }
    });
  };

  const RMCarousel = Carousel.default? Carousel.default: Carousel;

  const manipulateList = (list) => {
    if (list) {
      list.forEach((element) => allMeals.push(element));
      filterDuplicate(allMeals);
    }
    setAllRecipes(supDuplicates);
  };

  const meals = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabet.split("");
    if (allMeals.length === 0) {
      alphabetArray.map((letter) =>
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
          .then((response) => manipulateList(response.data.meals))
      );
    }
  };

  /*  Intie la page avec tous  les filtres */

  const filterSelector = () => {
    if (filters.length === 0) {
      const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
      axios.get(url).then((response) => setFilters(response.data.categories));
    }
  };

  /* Gère la sélection */

  const mouseOver = (event) => {
    setSelectedCat(event.target.alt);
    setHooverText(event.target.alt);
  };

  const filterCat = () => {
    const filterCategory = allRecipes.filter(
      (el) => el.strCategory === selectedCat
    );
    const tempArea = [];

    filterCategory.forEach((meal) => {
      if (
        tempArea.includes(meal.strArea) === false &&
        meal.strArea !== "Unknown"
      ) {
        tempArea.push(meal.strArea);
      }
    });
    setArea(tempArea);
    setCategoryArray(filterCategory);
  };

  useEffect(() => {
    filterCat();
    console.warn(allRecipes, "allRcipesfiltered");
  }, [selectedCat]);

  const mouseOut = () => {
    setHooverText("");
  };

  /* Selection par catégorie */

  const categorySelector = () => {
    setFilterTheme("AREA");
    setButton("");
  };

  /* selection par Pays */

  const mouseOverArea = (event) => {
    setSelectedArea(event.target.alt);
    setHooverText(event.target.alt);
    chooseMusic(event.target.alt);
  };

  const filterArea = () => {
    const countryArray = categoryArray.filter(
      (el) => el.strArea === selectedArea
    );
    setSelection(countryArray);
  };

  useEffect(() => filterArea(), [selectedArea]);

  useEffect(() => selectFilter(selection), [selection]);

  const chooseArea = () => {
    console.warn(selectedCat, selectedArea, "selection finale");
    console.warn(selection, "Final array");
    setFilterTheme("selection");
  };

  const backToCategory = () => {
    setFilterTheme("CATEGORY");
    setButton("-none");
  };

  useEffect(() => {
    meals();
    console.warn(allMeals, "allMealsStart");
    filterSelector();
  }, []);

  return (
    <motion.section
      id="filterPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
    >
      <div className="filter-block">
        <Title title={`SELECT BY ${filterTheme}`} />
        <div className="filter">
          <RMCarousel responsive={responsive} draggable="false" ssr>
            {filterTheme === "CATEGORY" && filters.length > 0
              ? filters.map((icon) => (
                  <Filter
                    category={icon.strCategory}
                    clickCategory={categorySelector}
                    mouseOver={mouseOver}
                    mouseOut={mouseOut}
                    hooverText={hooverText}
                  />
                ))
              : area.map((flag) => (
                  <Link to="../filter-result">
                    <Filter
                      category={flag}
                      clickCategory={chooseArea}
                      mouseOver={mouseOverArea}
                      mouseOut={mouseOut}
                      hooverText={hooverText}
                    />
                  </Link>
                ))}
          </RMCarousel>
        </div>
        {button === "" ? (
          <Button
            content="GO BACK TO CATEGORY"
            myClass="littleButton"
            myHandle={backToCategory}
          />
        ) : null}
      </div>
    </motion.section>
  );
}

export default FilterPage;

FilterPage.propTypes = {
  responsive: PropTypes.object,
  selectFilter: PropTypes.func.isRequired,
  chooseMusic: PropTypes.func.isRequired,
};
