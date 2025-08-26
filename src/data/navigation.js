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
    ourBoard: [
        {
            active: true,
            link: '/board-members',
            name: 'Board Members',
        },
        {
            active: false,
            link: '/management',
            name: 'Management Team',
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
        },
    ],
    management: [
        {
            active: false,
            link: '/board-members',
            name: 'Board Members',
        },
        {
            active: true,
            link: '/management',
            name: 'Management Team',
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
        },
    ],
    financialReports: [
        {
            active: true,
            link: '/financial-reports',
            name: 'Financial Reports',
        },
        {
            active: false,
            link: '/events',
            name: 'Key Events',
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
        },
    ],
    keyEvents: [
        {
            active: false,
            link: '/financial-reports',
            name: 'Financial Reports',
        },
        {
            active: true,
            link: '/events',
            name: 'Key Events',
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
        },
    ],
}