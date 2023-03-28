import React,{useEffect} from "react";
import Header from "../components/Header";
import ListBooks from "../components/ListBooks";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import paths from "../router/paths";
import { useSelector } from "react-redux";

const Books = () => {
  const navigate = useNavigate();
  const { loginState } = useSelector((state) => state);
  /*
  useEffect(()=>{
    if(!loginState.success)
    navigate("/login")
  },[])
  */
  return (
    <div>
      <Header />
      <div className="container mb-3 text-center">
        <Button
          text={"Add a book"}
          type={"success"}
          className="w-100 fs-5"
          //onClick={()=>navigate("/add-book")} asagidaki paths.addBook ile ayni
          onClick={() => navigate(paths.addBook)}
        />
      </div>
      <ListBooks />
    </div>
  );
};

export default Books;
