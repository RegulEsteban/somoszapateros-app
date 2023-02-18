import React from "react";

const DescriptionContent = () => {
	return (
		<div className="flex flex-col md:flex-row mt-16 bg-sz-brown">
            <div className="flex-1 self-center">
                <div className="relative px-4 text-center max-w-lg m-auto">
                    <h3 className="text-5xl font-bold text-sz-dark mb-4">Somos Artesanos</h3>
                    <p className="text-sz-dark px-4 text-lg">Somos una tienda en línea que continúa promoviendo la tradición de la elaboración de calzado, que se origina desde 1873 en el municipio de San Mateo Atenco. Dando paso al reconocimiento nacional de que en este municipio, también... <br/><strong>SOMOS ZAPATEROS</strong>.</p>
                    <button className="bg-sz-brown-dark text-white p-3 px-6 mt-12 hover:bg-sz-brown-light hover:text-sz-dark">Comprar</button>
                </div>
            </div>
            <div className="flex-1">
                <figure className="relative">
                    <a href="#">
                        <img className="w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                    </a>
                </figure>
            </div>
        </div>
	);
};

export default DescriptionContent
