import Head from "next/head";
import FooterContent from "../../components/FooterContent";
import Navbar from "../../components/Navbar";

function DetailProduct({ posts }) {
    
	return (
		<div>
			<Head>
				<title>Photography Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
            {(posts && posts.data ? <Navbar header={posts.data.header} /> : null)}

			<FooterContent />
		</div>
	);
}

export async function getStaticProps({params}) {
	const res = await fetch('https://tienda.somoszapateros.com/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer');
    const posts = await res.json();

    console.log(params)
    
	return {
		props: {
			posts
		},
	};
}

export async function getStaticPaths() {
	//const { data: products } = await getProductsData();
	
	// Expected Data Shape: [{ params: { slug: 'pendant' } }, { params: { slug: 'shirt' } }],
	const pathsData = [];
	/*
	products.length && products.map( ( product ) => {
		if ( product.slug ) {
			pathsData.push( { params: { slug: product.slug ?? '' } } );
		}
	} );
	*/
	return {
		paths: pathsData,
		fallback: true,
	};
}

export default DetailProduct;