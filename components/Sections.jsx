import React from 'react'

const Sections = () => {
  return (
    <div className="flex flex-col md:flex-row mb-12">
        <div className="flex-1">
            <figure className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 text-white">
                <a href="#">
                    <img className="w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                </a>
                <figcaption className="absolute px-4 text-5xl top-2/4 w-full text-center">
                    <h3 className="font-bold">Para él</h3>
                </figcaption>
            </figure>
        </div>
        <div className="flex-1">
            <figure className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 text-white">
                <a href="#">
                    <img className="w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description" />
                </a>
                <figcaption className="absolute px-4 text-5xl top-2/4 w-full text-center">
                    <h3 className="font-bold">Para ella</h3>
                </figcaption>
            </figure>
        </div>
    </div>
  )
}

export default Sections