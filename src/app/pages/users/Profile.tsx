import React from "react";

function Profile() {
  return (
    <div>
      Profile
      <div>
        <img src="https://placeimg.com/80/80/people" />
        <h1 className="text-xl inter">Mari Jaoshvili</h1>
        <h2 className="username"> mjaosh@umich.edu </h2>

        <h2 className="profileHeaders">Favorites</h2>
        <h2 className="profileHeaders"> Hosted</h2>
        <h2 className="profileHeaders">Applied To</h2>
      </div>
    </div>
  );
}

export default Profile;
