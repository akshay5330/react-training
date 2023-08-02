import React from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/abs">NextJS is Greate Framework</Link>
        </li>
        <li>Something else</li>
      </ul>
    </>
  );
};

export default NewsPage;
