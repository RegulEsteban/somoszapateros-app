import React, { useState } from 'react'
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css';
import { Card } from "flowbite-react"
import Image from 'next/image';

const Releases = (props) => {
    const [state, setState] = useState({ isMoving: false });
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const images = [
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    ];
    const texts = [
        "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
        "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
        "React Carousel with Server Side Rendering Support – Part 1",
        "React Carousel with Server Side Rendering Support – Part 2",
        "Flutter Xcode couldn’t find any iOS App Development provisioning profiles"
    ];
    const fakerData = Array(12)
        .fill(0)
        .map((item, index) => {
        return {
            image: images[index],
            headline: "w3js -> web front-end studio",
            description: texts[index] || texts[0]
        };
    });
    
    return (
        <>
            <div className="flex flex-col text-center py-6">
                <h3 className="flex-1 text-4xl text-sz-dark">Nuevos lanzamientos</h3>
            </div>
            <Carousel
                className='mt-8 mb-12'
                responsive={responsive}
                ssr
                slidesToSlide={1}
                centerMode
                infinite
                deviceType={props.deviceType}
                key={'carousel'}
                >
                {fakerData.map((card, index) => {
                    return <div className="max-w-sm mx-5" key={'carousel-'+index}>
                        <Card imgSrc={card.image}>
                        <h5 className="text-2xl font-bold tracking-tight text-sz-gray dark:text-white">
                            {card.headline}
                        </h5>
                        <p className="font-normal text-sz-dark dark:text-gray-400">
                            {card.description}
                        </p>
                        </Card>
                    </div>
                })}
            </Carousel>
        </>
    )
}

export default Releases