export interface Room {
    title: string;
    slug: string;
    image: string;
    available: number;
    address: string;
    price: string;
    guests: string;
    short_description: string;
    description: string;
    images: string[];
    features: {
        icon: string;
        label: string;
    }[];
}

export const rooms: Room[] = [
    {
        title: "Standard Room 1",
        slug: "standard-room-1",
        image: "/images/IMG_8653.svg",
        available: 2,
        address: "House 29, 1st Avenue. Family Homes Estate, Asaba",
        price: "130,000",
        guests: '1-4 Guests',
        short_description: `At Daczy Place, we understand that being away from home doesn't mean compromising
        on comfort.`,
        description: `At Daczy Place, we understand that being away from home doesn't mean compromising
        on comfort. We provide premium short-let apartments and serviced accommodations
        designed to make you feel at home, wherever you are. At Daczy Place, we understand
        that being away from home doesn't mean compromising on comfort. We provide
        premium short-let apartments and serviced accommodations designed to make you feel
        at home, wherever you are.`,
        images: [
            "/images/IMG_8689.svg", 
            "/images/IMG_8711.svg", 
            "/images/IMG_8697.svg",
            "/images/IMG_8634.svg",
        ],
        features: [
            {
                icon: 'power',
                label: '24Hr Power'
            },
            {
                icon: 'wifi',
                label: 'Starlink',
            },
            // {
            //     icon: 'food',
            //     label: 'Breakfast',
            // },
            // {
            //     icon: 'bed',
            //     label: 'King Bed'
            // }
        ]
    },
    {
        title: "Standard Room 2",
        slug: "standard-room-2",
        image: "/images/IMG_8688.svg",
        available: 1,
        address: "House 31, 1st Avenue. Family Homes Estate, Asaba",
        price: "130,000",
        guests: '1-4 Guests',
        short_description: `At Daczy Place, we understand that being away from home doesn't mean compromising
        on comfort.`,
        description: `At Daczy Place, we understand that being away from home doesn't mean compromising
        on comfort. We provide premium short-let apartments and serviced accommodations
        designed to make you feel at home, wherever you are. At Daczy Place, we understand
        that being away from home doesn't mean compromising on comfort. We provide
        premium short-let apartments and serviced accommodations designed to make you feel
        at home, wherever you are.`,
        images: [
            "/images/IMG_8638.svg", 
            "/images/IMG_8612.svg", 
            "/images/IMG_8619.svg",
            "/images/IMG_8621.svg"
        ],
        features: [
            {
                icon: 'power',
                label: '24Hr Power'
            },
            {
                icon: 'bed',
                label: 'Free wifi',
            },
            // {
            //     icon: 'food',
            //     label: 'Breakfast',
            // },
            // {
            //     icon: 'bed',
            //     label: 'King Bed'
            // }
        ] 
    }
]