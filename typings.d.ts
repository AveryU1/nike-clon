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