import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id={3}
            title="Data Structures and Algorithms Made Easy: Narshima Charumarchi"
            price={45.5}
            rating={2}
            image="https://www.guru99.com/images/2/060520_1045_14BESTAlgor1.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903889"
            title="SQL and Phyton Programming in one"
            price={20.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/41kfV-2x0AL.jpg"
          />
          <Product
            id="2389930"
            title="Introduction to Programming with Phyton "
            price={80.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51L31bIonaL.jpg"
          />
          <Product
            id="4903449"
            title="Rain drops: Litrature Reader"
            price={25.99}
            rating={3}
            image="https://www.centralbooksonline.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/9/7/9789385976735.jpg"
          />
          <Product
            id="238997"
            title="Richard Darwins : The Selfish Gene"
            price={80.99}
            rating={5}
            image="https://inteng-storage.s3.amazonaws.com/img/iea/AzwkQo94Gb/sizes/the-selfish-gene_resize_md.jpeg"
          />
        </div>
        
        <div className="home__row">
          <Product
            id="12321341"
            title="MP CompatProtien Powder:The Athletes complete Powder, A new muscular boy arrives.."
            price={35.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81ExmUn0rQL._AC_SL1500_.jpg"
          />
          <Product
            id="49538004"
            title="Discreate Mathmatics fourth Addition 'Great innovation': An open Eddition by Oscar Livin"
            price={29.0}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLaPpRIFi-BQC0d_06YPzXrOtX1KM8P8UJg&usqp=CAU"
          />
           </div>


        <div className="home__row">
          <Product
            id="4903850"
            title="Mi smart band Digital Watch - For Men(3)·Brand: Mi"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440:Bio Life Health Care - Offering BIG SCREEN Black LED TV, Screen Size: 32 Inch, Wifi,Hotspot at Rs 12000/piece in Dehradun, Uttarakhand"
            price={1094.98}
            rating={4}
            image="https://static.toiimg.com/photo/54807903.cms"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
