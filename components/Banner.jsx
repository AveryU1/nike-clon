import SliderBanner from "./Navbar/SliderBanner";
import { nikeBanner } from "../public/assets";


const Banner = ({banner}) => {

  const secondElement = banner && banner.slice(1)
  //console.log(banner?.slice(0, 1));

  return (
    <>
      <SliderBanner />
      <div className='px-6 mb-8'>
        {
          secondElement && secondElement.map((item) => (
            <div key={item._id}>
              <div className="bg-[url('../public/assets/nike-banner.webp')] h-96 bg-center bg-cover bg-no-repeat" ></div>
              <section className="text-center">
                <h1 className='uppercase text-black text-5xl font-extrabold py-8'>{item.largeText}</h1>
                <p className="pb-8">{item.midText}</p>
              </section>
              <article className='text-left md:text-center'>
                <button className='bg-black text-light-gray px-6 py-2 rounded-full'>Shop</button>
              </article>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default Banner

