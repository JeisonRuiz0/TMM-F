import React from "react";
import './Styles/Carousel.css';
import c1 from '.././Assets/sepatara/c1.jpg';
import c2 from '.././Assets/sepatara/c2.jpg';
import c3 from '.././Assets/sepatara/c3.jpg';
import c4 from '.././Assets/sepatara/c4.jpg';
import c5 from '.././Assets/sepatara/c5.png';
import c6 from '.././Assets/sepatara/c6.jpg';
import c7 from '.././Assets/sepatara/c7.jpg';
import c8 from '.././Assets/sepatara/c8.jpg';
import c9 from '.././Assets/sepatara/c9.jpg';
import d1 from '.././Assets/sepatara/c1.jpg';
import d2 from '.././Assets/sepatara/c2.jpg';
import d3 from '.././Assets/sepatara/c3.jpg';
import d4 from '.././Assets/sepatara/c4.jpg';
import d5 from '.././Assets/sepatara/c5.png';
import d6 from '.././Assets/sepatara/c6.jpg';
import d7 from '.././Assets/sepatara/c7.jpg';




const Carousel = () => {
	const carouselData = [
		{
			title: "Terminación y entrega del Coliseo San Antonio",
			subtitle: "",
			imageSrc:  c1 ,
		},
		{
			title: "Pavimentación del Centro Histórico",
			subtitle: "",
			imageSrc:  c2 ,
		},
		{
			title: "Se inicio al proyecto de la nueva Terminal de Transporte para Tunja",
			subtitle: "",
			imageSrc:  c3 ,
		},
		{
			title: "Se apoyo la gestión para la construcción de Unicentro Tunja",
			subtitle: "",
			imageSrc:  c4 ,
		},
		{
			title: "Se inicia la construcción del Viaducto de Tunja",
			subtitle: "",
			imageSrc: c5 ,
		},
		{
			title: "Se ilumina la Catedral como atractivo turístico nocturno",
			subtitle: "",
			imageSrc: c6 ,
		},
		{
			title: "Descontaminación de los rios La Vega y Jordán",
			subtitle: "",
			imageSrc:  c7 ,
		},
		{
			title: "Formalización de alfarería y construcción de hornos tipo colmena",
			subtitle: "",
			imageSrc: c8 ,
		},
		{
			title: "Se invirtio en la recuperación de Teatro Cultural",
			subtitle: "",
			imageSrc: c9 ,
		},

	];

	return (
		<section className="carousel">
			<h1 className="primary-heading">Como Concejal César López aprobó grandes proyectos para Tunja</h1>
			<section className="carousel__container">
				{carouselData.map((item, index) => (
					<div className="carousel-item" key={index}>
						<img
							className="carousel-item__img"
							src={item.imageSrc}
							alt={item.title}
						/>
						<div className="carousel-item__details">
							<p className="carousel_item__details--title">{item.title}</p>
							<p className="carousel_item__details--subtittle">{item.subtitle}</p>
						</div>
					</div>
				))}
			</section>
		</section>
	)
}



export default Carousel;