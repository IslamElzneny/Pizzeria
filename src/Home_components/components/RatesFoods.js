import React from "react";

const RatesFoods=()=>{
    return(
        <div className="RateFoods">
            <div className="AppStore_foods">
                <div className="icon_rate">
                    <i class="fab fa-app-store"></i>
                </div>

                <div className="number_rate">
                    <span>4.0</span>
                </div>

                <div className="stars_rate">
                    <div className="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star fa-customize"></i>
                    </div>
                    <div className="reviews">
                        <span> 1234 reviews </span>
                    </div>
                </div>
            </div>


            <div className="AppGoogle">
                <div className="icon_rate">
                    <i class="fab fa-google-play"></i>
                </div>

                <div className="number_rate">
                    <span>3.0</span>
                </div>

                <div className="stars_rate">
                    <div className="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star fa-customize"></i>
                        <i class="far fa-star fa-customize"></i>
                    </div>
                    <div className="reviews">
                        <span> 2345 reviews </span>
                    </div>
                </div>
            </div>

            <div className="servics_foods">
                <div className="icon_rate">
                    <i class="fas fa-utensils"></i>
                </div>

                <div className="number_rate">
                    <span>4.9</span>
                </div>

                <div className="stars_rate">
                    <div className="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div className="reviews">
                        <span> 678 reviews </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatesFoods;