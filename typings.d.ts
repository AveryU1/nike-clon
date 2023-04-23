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