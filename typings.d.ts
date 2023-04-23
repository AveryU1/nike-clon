export interface HeroProduct {
    _id: string;
    name: string;
    image: {
        assets: {
            _ref: string;
        }
    }
    slug: {
        current: string;
    }
}

export interface TrendingProduct {
    _id: string;
    name: string;
    midText: string,
    image: {
        assets: {
            _ref: string;
        }
    }
    slug: {
        current: string;
    }
}