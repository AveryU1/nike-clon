import Link from "next/link";
import { sliderBannerLinks } from "../../constants";
import { useEffect, useState } from "react";



const SliderBanner = () => {

    const [moveSlider, setMoveSlider] = useState(0);

    const progresSlider = () => {
        setMoveSlider(moveSlider => (moveSlider + 1) % sliderBannerLinks.length);
    };

    useEffect(() => {
        const intervalId = setTimeout(() => {
            progresSlider();
        }, 5000);

        return () => clearTimeout(intervalId);
    }, [moveSlider]);

    const sliderStyles = {
        transform: `translateX(${-moveSlider * 100}%)`
    };



    return (

        <div className="h-auto min-h-[58px] relative bg-[#f5f5f5] pt-3 overflow-hidden whitespace-nowrap">
            <ul className="transition-all" style={sliderStyles}>
                {sliderBannerLinks.map(bannerText => (
                    <li key={bannerText.link} className="w-full inline-block align-middle whitespace-normal text-center">
                        <span className="font-medium text-base leading-none block align-middle"> {bannerText.text} </span>
                        <div className="inline-block text-xs leading-loose">
                            <p>
                                <Link href="/" className="underline">{bannerText.link}</Link>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default SliderBanner