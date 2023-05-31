import Image from 'next/image'
import React from 'react'

type Props = {
    name: string,
    images: string,

}

const Card = (props: Props) => {

    const { name, images } = props

    return (
        <div className='flex flex-col bg-black text-white items-center justify-center p-5 rounded-lg'>
            {name}
            <Image src={images} alt='' width={200} height={200} />
        </div>
    )
}

export default Card