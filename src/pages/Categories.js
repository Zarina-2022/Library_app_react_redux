import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import ListCategories from "../components/ListCategories";

const Categories = () => {
    const navigate = useNavigate()
 
  return (
    <div>
      <Header />
      <div className="container mb-3 text-center">
        <Button
          text={"Add a category"}
          type={"primary"}
          className="w-100 fs-5"
          onClick={() => navigate("/add-category")}
        />
      </div>
      <ListCategories />
    </div>
  );
};

export default Categories;
