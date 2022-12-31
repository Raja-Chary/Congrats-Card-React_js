const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      ></img>
      <h1 className="name">Kiran V</h1>
      <p className="description">
        Vishnu Institute Computer Education and Technology, Bhimavaram
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      ></img>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
