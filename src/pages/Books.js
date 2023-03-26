import React from "react";
import Header from "../components/Header";
import ListBooks from "../components/ListBooks";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import paths from "../router/paths";

const Books = () => {
    const navigate = useNavigate()
  return (
    <div>
      <Header />
      <div className="container mb-3 text-center">
        <Button 
        text={"Add a book"} 
        type={"success"} 
        className="w-100 fs-5" 
        //onClick={()=>navigate("/add-book")} asagidaki paths.addBook ile ayni
        onClick={()=>navigate(paths.addBook)}
        />
      </div>
      <ListBooks />
    </div>
  );
};

export default Books;
