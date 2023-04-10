import { SanityClient } from 'next-sanity'
import React from 'react'
import {sanityClient} from "../sanity"
import { HeroProduct } from '../typings'


interface Props {
    heroProducts : HeroProduct[]
  }
 

const Hero = (props: Props) => {
    console.log(props.heroProducts);
  return (
    <div>Hero</div>
  )
}

export default Hero

