import React from "react";

import './Styles/Carousel.css';


const Carousel = () =>{

    return(
        <section class="carousel">
			<section class="carousel__container">
				<div class="carousel-item">
					<img class="carousel-item__img" src="https://images.pexels.com/photos/5994821/pexels-photo-5994821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="People"/>
					<div class="carousel-item__details">
					
						<p class="carousel_item__details--tittle">Titulo decriptivo</p>
						<p class="carousel_item__details--subtittle">2019 16+  114 minutos</p>
					</div>
				</div>
				<div class="carousel-item">
					<img class="carousel-item__img" src="https://images.pexels.com/photos/5994821/pexels-photo-5994821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="People"/>
					<div class="carousel-item__details">
						
						<p class="carousel_item__details--tittle">Titulo decriptivo</p>
						<p class="carousel_item__details--subtittle">2019 16+  114 minutos</p>
					</div>
				</div>
				<div class="carousel-item">
					<img class="carousel-item__img" src="https://images.pexels.com/photos/5994821/pexels-photo-5994821.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="People"/>
					<div class="carousel-item__details">
						
						<p class="carousel_item__details--tittle">Titulo decriptivo</p>
						<p class="carousel_item__details--subtittle">2019 16+  114 minutos</p>
					</div>
				</div>
				
			</section>
		</section>
    )
}



export default Carousel;