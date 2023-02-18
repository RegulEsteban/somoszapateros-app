import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
//import Dropdown from './Dropdown';
import { Dropdown } from "flowbite-react";

const Navbar = ({ header }) => {
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState("transparent");
	const [textColor, setTextColor] = useState("white");
	const [sizeFont, setSizeFont] = useState("2.25rem");

	const handleNav = () => {
		setNav(!nav);
	};

  	useEffect(() => {
    	const changeColor = () => {
      		if (window.scrollY >= 90) {
        		setColor("#ffffff");
        		setTextColor("#0A0908");
        		setSizeFont("1.75rem");
      		} else {
        		setColor("transparent");
        		setTextColor("#fff");
        		setSizeFont("2.25rem");
      		}
    	};
    	window.addEventListener("scroll", changeColor);
  	}, []);

  	return (
    	<div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      		<div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        		<Link href="/">
					<h1 style={{ color: `${textColor}`, fontSize: `${sizeFont}` }} className="font-bold duration-500">
						{header.siteTitle}
					</h1>
        		</Link>
        		<ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          			<li className="p-4" key={101}>
            			<Dropdown label="Para él" trigger="hover" color={"none"} className={"duration-700 rounded-sm"} size={"lg"} inline={true}>
							<Dropdown.Item>Botas y Botines</Dropdown.Item>
							<Dropdown.Item>Mocasines y Loafers</Dropdown.Item>
							<Dropdown.Item>Zapato Casual/Vestir</Dropdown.Item>
							<Dropdown.Item>Sneakers</Dropdown.Item>
							<Dropdown.Item>Accesorios</Dropdown.Item>
						</Dropdown>
          			</li>
					<li className="p-4" key={102}>
            			<Dropdown label="Para ella" trigger="hover" color={"none"} className={"duration-700 rounded-sm"} size={"lg"} inline={true}>
							<Dropdown.Item>Botas y Botines</Dropdown.Item>
							<Dropdown.Item>Mocasines y Loafers</Dropdown.Item>
							<Dropdown.Item>Zapato Casual/Vestir</Dropdown.Item>
							<Dropdown.Item>Sneakers</Dropdown.Item>
							<Dropdown.Item>Accesorios</Dropdown.Item>
						</Dropdown>
          			</li>
					{header.headerMenuItems.map((item, key) => (
            			<li className="p-4" key={item.ID}>
              				{item.title == "Carrito" ? (
                				<Link href={item.url}>
                  					<AiOutlineShoppingCart size={20} />
                				</Link>
              				) : (
                				<Link href={item.url}>{item.title}</Link>
              				)}
            			</li>
          			))}
        		</ul>

        		{/* Mobile Button */}
        		<div onClick={handleNav} className="block sm:hidden z-10">
          			{nav ? (
            			<AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          			) : (
            			<AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          			)}
        		</div>
        		{/* Mobile Menu */}
        		<div className={nav ? 
					"sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" :
              		"sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          		}>
          			<ul>
            			<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
              				<Link href="/">Home</Link>
            			</li>
            			{header.headerMenuItems.map((item, key) => (
              				<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500" key={item.ID}>
                				<Link href={item.url}>{item.title}</Link>
              				</li>
            			))}
          			</ul>
        		</div>
      		</div>
    	</div>
  	);
};

export default Navbar;
