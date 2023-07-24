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
export interface PopProductsHome {
    _id: string;
    name: string;
    image: {
        assets: {
            _ref: string;
        }
    };
    category: string;
    price: number;
    slug: {
        current: string;
    };

}

export interface TrendingProduct {
    _id: number;
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

export interface CardShoes {
    _id: string;
    largeText: string;
    midText: string;
    image: {
        assets: {
            _ref: string;
        }
    }
}

export interface SummerShopProducts {
    _id: string;
    name: string;
    image: {
        assets: {
            _ref: string;
        }
    }
}