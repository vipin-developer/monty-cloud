'use client'
import React,{ useEffect, useState } from "react";

const Main = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((json) => setApiData(json));
    }, []);
    return (
      <>
        {apiData.map((item) => {
          return <div>{item.title}</div>;
        })}
      </>
    );
}
 
export default Main;