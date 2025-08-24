import Business from "../pages/Business"

export const getNavigationData = {
    landingPage: [
        {
            active: false,
            link: '/personal',
            name: 'Personal',
        },
        {
            active: false,
            link: '/business',
            name: 'Business',
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
        },
        {
            active: false,
            link: '/about-us',
            name: 'About Us',
        },
    ],
    personal: [
        {
            active: true,
            link: '/personal',
            name: 'Personal',
        },
        {
            active: false,
            link: '/business',
            name: 'Business',
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
        },
        {
            active: false,
            link: '/about-us',
            name: 'About Us',
        },
    ],
    business: [
        {
            active: false,
            link: '/personal',
            name: 'Personal',
        },
        {
            active: true,
            link: '/business',
            name: 'Business',
        },
        {
            active: true,
            link: '/investor-relations',
            name: 'Investor Relations',
        },
        {
            active: false,
            link: '/about-us',
            name: 'About Us',
        },
    ],
    aboutUs: [
        {
            active: false,
            link: '/personal',
            name: 'Personal',
        },
        {
            active: false,
            link: '/business',
            name: 'Business',
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
        },
        {
            active: true,
            link: '/about-us',
            name: 'About Us',
        },
    ],
    investorRelations: [
        {
            active: false,
            link: '/personal',
            name: 'Personal',
        },
        {
            active: false,
            link: '/business',
            name: 'Business',
        },
        {
            active: true,
            link: '/investor-relations',
            name: 'Investor Relations',
        },
        {
            active: false,
            link: '/about-us',
            name: 'About Us',
        },
    ],
}