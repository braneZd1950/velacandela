import logo from './Vela Candela logo.png'

import buketMale120g from './Buket MAle 120g.jpeg'
import buket300g from './Buket 300g.jpeg'
import buketMedium200g from './Buket Medium 200g.jpeg'
import buketVelike300g from './Buket Velike 300g.jpeg'
import buket400g from './Buket 400g.jpeg'
import buket400g2 from './Buket 400g (2).jpeg'
import colorPalete from './Color palete.jpeg'
import colorPaleteBuket from './Color palete buket.jpeg'
import kaktusMale80g from './Kaktus male 80g.jpeg'
import kaktusMedium170g from './Kaktus medium 170g.jpeg'
import kaktusVelike300g from './kaktus velike 300g.PNG'
import kaktusVelike300g2 from './Kaktus velike 300g 2.PNG'
import koktel from './Koktel.jpeg'
import ladySet from './Lady Set.jpeg'
import ladySet2 from './Lady Set (2).jpeg'
import liepaNasa100g from './liepa Nasa 100g.png'
import margarida from './Margarida.jpeg'
import margarida2 from './Margarida (2).jpeg'
import mediumRose from './Medium Rose.jpeg'
import mediumSunshine from './Medium Sunshine.jpeg'
import pacifiko from './Pacifiko.jpeg'
import smallTedibear from './Small Tedibear.jpeg'

export type GalleryImage = {
  id: string
  src: string
  labelHr: string
  labelEn: string
}

export const galleryImages: GalleryImage[] = [
  { id: 'buket-male-120g', src: buketMale120g, labelHr: 'Buket mali 120g', labelEn: 'Small bouquet 120g' },
  { id: 'buket-300g', src: buket300g, labelHr: 'Buket 300g', labelEn: 'Bouquet 300g' },
  { id: 'buket-medium-200g', src: buketMedium200g, labelHr: 'Buket srednji 200g', labelEn: 'Medium bouquet 200g' },
  { id: 'buket-velike-300g', src: buketVelike300g, labelHr: 'Buket veliki 300g', labelEn: 'Large bouquet 300g' },
  { id: 'buket-400g', src: buket400g, labelHr: 'Buket 400g', labelEn: 'Bouquet 400g' },
  { id: 'buket-400g-2', src: buket400g2, labelHr: 'Buket 400g', labelEn: 'Bouquet 400g' },
  { id: 'color-palete', src: colorPalete, labelHr: 'Paleta boja', labelEn: 'Color palette' },
  { id: 'color-palete-buket', src: colorPaleteBuket, labelHr: 'Paleta boja — buket', labelEn: 'Color palette bouquet' },
  { id: 'kaktus-male-80g', src: kaktusMale80g, labelHr: 'Kaktus mali 80g', labelEn: 'Small cactus 80g' },
  { id: 'kaktus-medium-170g', src: kaktusMedium170g, labelHr: 'Kaktus srednji 170g', labelEn: 'Medium cactus 170g' },
  { id: 'kaktus-velike-300g', src: kaktusVelike300g, labelHr: 'Kaktus veliki 300g', labelEn: 'Large cactus 300g' },
  { id: 'kaktus-velike-300g-2', src: kaktusVelike300g2, labelHr: 'Kaktus veliki 300g', labelEn: 'Large cactus 300g' },
  { id: 'koktel', src: koktel, labelHr: 'Koktel', labelEn: 'Cocktail' },
  { id: 'lady-set', src: ladySet, labelHr: 'Lady Set', labelEn: 'Lady Set' },
  { id: 'lady-set-2', src: ladySet2, labelHr: 'Lady Set', labelEn: 'Lady Set' },
  { id: 'liepa-nasa-100g', src: liepaNasa100g, labelHr: 'Naša ljepa 100g', labelEn: 'Our lovely 100g' },
  { id: 'margarida', src: margarida, labelHr: 'Margarida', labelEn: 'Margarida' },
  { id: 'margarida-2', src: margarida2, labelHr: 'Margarida', labelEn: 'Margarida' },
  { id: 'medium-rose', src: mediumRose, labelHr: 'Srednja ruža', labelEn: 'Medium rose' },
  { id: 'medium-sunshine', src: mediumSunshine, labelHr: 'Srednje sunce', labelEn: 'Medium sunshine' },
  { id: 'pacifiko', src: pacifiko, labelHr: 'Pacifiko', labelEn: 'Pacifiko' },
  { id: 'small-tedibear', src: smallTedibear, labelHr: 'Mali medvjed', labelEn: 'Small teddy bear' },
]

export const images = {
  logo,
  brand: colorPaleteBuket,
}
