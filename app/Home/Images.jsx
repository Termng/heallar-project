import React from 'react'
// import Playcon from '../../public/images/play-button-svgrepo-com.svg'
import Image from 'next/image'
import caduceus from './../../public/images/caduceus.svg'
import cardiogram from './../../public/images/cardiogram.svg'
import drug from './../../public/images/drug.svg'
import medkit from './../../public/images/medkit.svg'
import medscope from './../../public/images/medscope.svg'
import playcircle from './../../public/images/playcirce.svg'
import write from './../../public/images/write.svg'
import user from './../../public/images/user-alt-1-svgrepo-com.svg'

// const PlayIcon = () => {
//   return (
//     <div>
//         <Image src= {Playcon} alt = "Play Icon" width={20}>

//         </Image>
//     </div>
//   )
// }

// export default PlayIcon

export function Caduceus() {
  return (
    <div>
      <Image src={caduceus} alt = {caduceus} width={20}></Image>
    </div>
  );
}
export function Person() {
  return (
    <div>
      <Image src={user} alt = {user} width={20}></Image>
    </div>
  );
}
export function Cardiogram() {
  return (
    <div>
      <Image src={cardiogram} alt = {cardiogram} width={20}></Image>
    </div>
  );
}
export function Drug() {
  return (
    <div>
      <Image src={drug} alt = {drug} width={20}></Image>
    </div>
  );
}
export function Medkit() {
  return (
    <div>
      <Image src={medkit} alt = {medkit} width={20}></Image>
    </div>
  );
}
export function Medscope() {
  return (
    <div>
      <Image src={medscope} alt = {medscope} width={20}></Image>
    </div>
  );
}
export function Playcircle() {
  return (
    <div>
      <Image src={playcircle} alt = {playcircle} width={20}></Image>
    </div>
  );
}
export function Write() {
  return (
    <div>
      <Image src={write} alt = {write} width={20}></Image>
    </div>
  );
}