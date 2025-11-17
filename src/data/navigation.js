import Business from "../pages/Business"

export const getNavigationData = {
    landingPage: [
        {
            active: false,
            link: '/personal',
            name: 'Personal',
            subMenu: [],
        },
        {
            active: false,
            link: '/business',
            name: 'Business',
            subMenu: [],
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
            subMenu: [],
        },
        {
            active: false,
            link: '#',
            name: 'About Us',
            subMenu: [
                {
                    name: "About Us",
                    link: "/about-us",
                },
                {
                    name: "Contact Us",
                    link: "/contact-us",
                },
            ]
        },
    ],
    personal: [
        {
            active: true,
            link: '/personal',
            name: 'Personal',
            subMenu: [],
        },
        {
            active: false,
            link: '/business',
            name: 'Business',
            subMenu: [],
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
            subMenu: [],
        },
        {
            active: false,
            link: '#',
            name: 'About Us',
            subMenu: [
                {
                    name: "About Us",
                    link: "/about-us",
                },
                {
                    name: "Contact Us",
                    link: "/contact-us",
                },
            ],
        },
    ],
    business: [
        {
            active: false,
            link: '/personal',
            name: 'Personal',
            subMenu: [],
        },
        {
            active: true,
            link: '/business',
            name: 'Business',
            subMenu: [],
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
            subMenu: [],
        },
        {
            active: false,
            link: '#',
            name: 'About Us',
            subMenu: [
                {
                    name: "About Us",
                    link: "/about-us",
                },
                {
                    name: "Contact Us",
                    link: "/contact-us",
                },
            ],
        },
    ],
    aboutUs: [
        {
            active: false,
            link: '/personal',
            name: 'Personal',
            subMenu: [],
        },
        {
            active: false,
            link: '/business',
            name: 'Business',
            subMenu: [],
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
            subMenu: [],
        },
        {
            active: true,
            link: '#',
            name: 'About Us',
            subMenu: [
                {
                    name: "About Us",
                    link: "/about-us",
                },
                {
                    name: "Contact Us",
                    link: "/contact-us",
                },
            ],
        },
    ],
    investorRelations: [
        {
            active: false,
            link: '/personal',
            name: 'Personal',
            subMenu: [],
        },
        {
            active: false,
            link: '/business',
            name: 'Business',
            subMenu: [],
        },
        {
            active: true,
            link: '/investor-relations',
            name: 'Investor Relations',
            subMenu: [],
        },
        {
            active: false,
            link: '#',
            name: 'About Us',
            subMenu: [
                {
                    name: "About Us",
                    link: "/about-us",
                },
                {
                    name: "Contact Us",
                    link: "/contact-us",
                },
            ],
        },
    ],
    ourBoard: [
        {
            active: true,
            link: '/board-members',
            name: 'Board Members',
            subMenu: [],
        },
        {
            active: false,
            link: '/management',
            name: 'Management Team',
            subMenu: [],
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
            subMenu: [],
        },
    ],
    management: [
        {
            active: false,
            link: '/board-members',
            name: 'Board Members',
            subMenu: [],
        },
        {
            active: true,
            link: '/management',
            name: 'Management Team',
            subMenu: [],
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
            subMenu: [],
        },
    ],
    financialReports: [
        {
            active: true,
            link: '/financial-reports',
            name: 'Financial Reports',
            subMenu: [],
        },
        {
            active: false,
            link: '/events',
            name: 'Key Events',
            subMenu: [],
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
            subMenu: [],
        },
    ],
    keyEvents: [
        {
            active: false,
            link: '/financial-reports',
            name: 'Financial Reports',
            subMenu: [],
        },
        {
            active: true,
            link: '/events',
            name: 'Key Events',
            subMenu: [],
        },
        {
            active: false,
            link: '/investor-relations',
            name: 'Investor Relations',
            subMenu: [],
        },
    ],
}