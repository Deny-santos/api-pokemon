'use client'

import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'

type Props = {}

const Page = (props: Props) => {
  //back_default
  const [pokemonn, setPokemonn] = useState<string[]>([])
  const [pokemonImages, setPokemonImages] = useState<string[]>([])

  useEffect(() => {
    const pokedata = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1100")
        setPokemonn(response.data.results)
        
        
        
        const poklist = response.data.results
        const pokemonArr: string[] = []

        poklist.map( async (el: any) => {
          const pokemonResponse = await axios.get(el.url);
          const pokemonImageUrl = pokemonResponse.data.sprites.front_default;
          pokemonArr.push(pokemonImageUrl)
        })
        setPokemonImages(pokemonArr)
      } catch (error) {
        console.log(error)
      }
    }

    pokedata()

  }, [])

  return (
    <div className='flex flex-wrap p-10 gap-5 items-center justify-center'>
      {pokemonn.map((pokemon, index) => (
        <Card images={pokemonImages[index]} name={pokemon.name} />
      ))}


    </div>
  )
}

export default Page

