import React from 'react'
import Layout from '../components/Layout';
import NextLink from 'next/link';
import Link from 'next/link'

const about = () => {
  return (
    <Layout>
    <div className="about">
     <h1>About us </h1>  
     <h1>Making delicious cakes, having relaxing chairs in a smoking free environment and keeping our prices reasonable are all different ways to achieve this goal.</h1>
     <p>We provide last minute cake options with minimum 1-2 days lead time upon request as well as fast cake delivery services. Our professional cake bakers and froster would be able to provide you with the best birthday cake experience you will ever find. We have many different cake flavours to choose from, and we are one of the highest rated cake shops on Google. Our cakes are less sweet, moist and soft. If you're not a fan of cake, you should try one of ours because we just might convert you into one. ☺</p>
     <h1>Our mission is to make people happy.</h1>
     <p>We strongly believe that a pretty cake can also taste delicious. We take pride in designing our intricate cake designs and constantly keeping up with the trend to bring the best cake designs for you. One of our best trending cake designs, CakeShop, has sold over 10,000 and have been featured in many food blogs. The main difference in the taste of our cakes is that we use only premium fresh cream instead of the usual buttercream for all our inner creams. We can achieve a softer and lighter taste in this way.</p>
       
            <NextLink href="/" passHref>
                  <Link>
                 <button className='backbutton'>Back Home</button> 
                  </Link>
            </NextLink>
    </div>
    </Layout>
  )
}

export default about
