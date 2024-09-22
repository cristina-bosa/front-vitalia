import React from "react";

interface HeroProps {
	title: string;
	subtitle?: string;
	description?: string;
}
const Hero : React.FC<HeroProps> = ({title, subtitle, description}) => {
		return(
			<section className={"hero"}>
				<h1 className={"text-color-secondary text-3xl"}>{title}</h1>
				<p className={"text-color-dark-light"}>{subtitle}</p>
				<p className={"text-color-dark-light"}>{description}</p>
</section>
)
}

export default Hero;