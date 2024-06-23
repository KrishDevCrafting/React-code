import React, { useEffect, useState } from "react";

export const TakeData = () => {
  const [error, setError] = useState(null);
  const [reviewerName, setReviewerName] = useState(null);
  const value =
    "https://raw.githubusercontent.com/KrishDevCrafting/review-sentiment-analysis/main/reviewsData.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(value);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const dataRes = await response.json();

        // Find the review by Amgad
        const review = dataRes.find(review => review.reviewer_name === 'Carole');
        if (review) {
          setReviewerName(review.reviewer_name);
        } else {
          setReviewerName(null);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      {/* <h1 className="text-center">Hello,Krishu...!</h1>
      {data.map((e)=>(
<h1>{e.review_id }</h1>
    ))} */}

      {/* <div>
        <table className="table border">
          <tr>Name</tr>
          {data.map((e) => (
            <td>{e.review_id.reviewer_name}</td>
          ))}
          {data.map((e) => (
            <td>{e.review_id}</td>
          ))}

          <tr></tr>
          <tr></tr>
        </table>
      </div> */}
      {/* <div>
      {error && <div>Error: {error}</div>}
      {reviewerName ? (
        <div>{reviewerName}</div>
      ) : (
        <div>No review found by Amgad.</div>
      )}
    </div> */}
    <h1>{reviewerName}</h1>
    </>
  );
};
