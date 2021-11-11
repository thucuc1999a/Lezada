import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useEffect, useParams, useState } from "react";
import api from "../../../../api/axiosService";
import Detail from "../../components/Detail";

function DetailProductPage({ match }) {
  const [product, setProduct] = useState([]);
  const {
    params: { id}
  } = match;
  useEffect(() => {
    const endpoint = "/product";
    const fetchData = async () => {
      const result = await api.get(`${endpoint}/${id}`);
      //let thisPro = result.find((b) => b.id === params);
      
      setProduct(result);
      //console.log(result);
    };
    fetchData();
    return () => {
      // clean up
    };
  }, [id]);

  return (
    <div className="container">
      
      <Detail data={product} />
    </div>
  );
}

export default DetailProductPage;
