import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Homepage() {
  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/reviewss",
  );

  if (loading) {
    return <p>Loading.... :)</p>;
  }
  if (error) {
    return <p>Error..... :(</p>;
  }

  if (data) {
    return (
      <div>
        {data.map((review) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review["attributes"].rating}</div>
            <h2>{review["attributes"].title}</h2>
            <small>Console list</small>
            <p>{review["attributes"].body.substring(0, 200)}....</p>
            <Link to={`/details/${review.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    );
  }
}
