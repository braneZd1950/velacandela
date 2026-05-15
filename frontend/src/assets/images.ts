import logoImg from './Vela Candela logo.png'
import brandImg from './Vela Candela.jpg'
import candle1 from './WhatsApp Image 2026-05-04 at 15.56.40.jpeg'
import candle2 from './WhatsApp Image 2026-05-04 at 15.56.40 (1).jpeg'
import candle3 from './WhatsApp Image 2026-05-05 at 09.33.14.jpeg'

export const images = {
  logo: logoImg,
  brand: brandImg,
  candles: [candle1, candle2, candle3] as const,
}
