import { urlFor } from "../sanity";

const Trending = ({ trendingProduct }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl pb-4">Trending</h2>
            <div className="w-full flex flex-col md:flex-row">
                {trendingProduct &&
                    trendingProduct.map(trending => (
                        <div
                            key={trending._id}
                            className="relative pb-1 w-[50%]"
                        >
                            <img
                                className="w-full"
                                src={urlFor(trending.image).url()}
                                alt={trending.name}
                            />
                            <div className="absolute bottom-4 pl-4">
                                <h3 className="text-light-gray text-lg">
                                    {trending.name}
                                </h3>
                                <p className="text-light-gray text-xl font-medium">
                                    {trending.midText}
                                </p>
                                <button className="text-black bg-white px-6 py-2 mt-6 rounded-full font-medium">
                                    Shop
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Trending;
