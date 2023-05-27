import React, { Component } from "react";

class MovieReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=Q6j8phR078kxCIYPaxE3fuBqeZvkFJvV"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ reviews: data.results });
      })
      .catch((error) => {
        console.error("Error fetching movie reviews:", error);
      });
  }

  render() {
    const reviews = this.state.reviews;

    return (
      <div>
        <h1 style={{color:"red"}}>Movie Reviews</h1>
        {reviews.map((review) => (
          <div key={review.display_title}>
            <h2>{review.display_title}</h2>
            <p>Byline: {review.byline}</p>
            <p>Critic Pick: {review.critics_pick ? "Yes" : "No"}</p>
            <p>Headline: {review.headline}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default MovieReviews;
