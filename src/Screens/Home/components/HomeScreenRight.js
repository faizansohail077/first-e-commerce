import React from 'react'
import Product from '../../../components/Product/Product'
import image1 from '../../../images/download.jpeg'
import image2 from '../../../images/images.jpeg'

const HomeScreenRight = () => {
    return (
        <div>
            <div className="home__row">
                <Product children={'Subscribe'} id={1234} price={7.25} rating={2} title="Packages" image={image1} />
                <Product children={'Add to Cart'} id={1234} price={7.25} rating={2} title="Vacuum Cleaner" image={image2} />
            </div>

            <div className="home__row">
                <Product children={'Add to Cart'} id={1234} price={7.25} rating={2} title="Vacuum Cleaner" image={image2} />
                <Product children={'Subscribe'} id={1234} price={7.25} rating={2} title="Packages" image={image1} />
                <Product children={'Add to Cart'} id={1234} price={7.25} rating={2} title="Vacuum Cleaner" image={image2} />
            </div>


            <div className="home__row">
                <Product children={'Subscribe'} id={1234} price={7.25} rating={2} title="Packages" image={image1} />
            </div>
        </div>
    )
}

export default HomeScreenRight
