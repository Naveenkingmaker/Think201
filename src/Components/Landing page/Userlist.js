import React from "react";
import './Userlist.css'
import RecipeReviewCard from "./Card";
const LandingPage = ()=>{
return(
    <div className="page-container">
<div className="image-container">
    <div className="card">
  <RecipeReviewCard />
  </div>
</div>
    </div>
)
}
export default LandingPage;