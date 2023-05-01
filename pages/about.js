import React from 'react'
import Layout from '../components/Layout';
import NextLink from 'next/link';
import Link from 'next/link'

const about = () => {
  return (
    <Layout>
    <div className="about">
     <h1>About us </h1>  
     <h1>Our mission is to make lives better by placing healthy puppies in happy homes</h1>
     <p>We are a community of dog lovers, committed to connecting the nation’s top breeders to caring, responsible individuals and families. We hold ourselves and our customers to the highest standards and aim to improve the life of each puppy, breeder and owner who joins our family.</p>
     <h1>We have placed over 200,000 puppies into over 200,000 homes.</h1>
     <p>chow puppies ready to leave. All our Chow Chow pups and dogs get the best start to life and are well socialized. This is a strong bloodline, with many Champion winning Cho Chow in the pedigree. ✔️ Henry breeder is a certified expert who breeds with Chow Chow. We team has audited very thorougly Jat’s kennel before contracting Jat’s breeder. All Chow Chow puppies for sale coming from Jat breeder are top quality and healthy. ✔️ We not only markets the cutest puppies and dogs available from qualified and ethical breeders, but also makes sure that Chow Chow puppies on sale are in good mental and physical health. If you opt for Henry, you will also be supporting less fortunate dogs as we supports dog shelters. ✔️ We all know how difficult it is to find a trusted breeder and check puppies, especially if there are no Chow Chow breeders in your neighbourhood. Let us do all the hassle part of the puppy selection process, which may be very bureaucratic and complicated.✔️If you choose us you don’t</p>
       
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
