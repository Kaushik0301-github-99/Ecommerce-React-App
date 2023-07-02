import React from "react";
import { useEffect, useState } from "react";
import { getAllProductData } from "../Service/ApiService";
import Card from "./Card";
function Products(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getAllProductData();
        setData(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      {data.map((_data, index) => {
        return (
          <div key={index}>
            <Card data={_data}></Card>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
