import React from "react";
import Header from "../components/Header";
import ListBooks from "../components/ListBooks";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
      <Header />
      <div className="container mb-3 text-center">
        <Button 
        text={"Add a book"} 
        type={"success"} 
        className="w-100 fs-5" 
        onClick={()=>navigate("/add-book")}
        />
      </div>
      <ListBooks />
    </div>
  );
};

export default Home;
