import React from "react";
import { useRouter} from 'next/router'

const DetailPage = () => {
  const route = useRouter();

  const newsId = route.query.newsId;
  
  return <h1>The Detail Page</h1>;
};

export default DetailPage;
