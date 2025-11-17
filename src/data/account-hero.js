export const getAccountHeroData = {
    personal: {
        title: 'Personal Banking',
        title2: 'Designed Around You!',
        subtitle: "Experience a secure, modern banking platform built around your needs. Whether in branch, online, or on your phone, your finances are always at your fingertips.",
        image: "./accounts/personal.png",
        mainButton: {
            text: "Open a Personal Account",
            link: "https://internetbanking.getbucks.co.zw/signin",
        },
        // mainButton2: {
        //     text: "Open a Diaspora Account",
        //     link: "/diaspora/login",
        // },
        buttons: [
            { text: "Organized Saving", link: "#" },
            { text: "In-App Controls", link: "#" },
            { text: "Instant Tracking", link: "#" },
            { text: "Bills Manager", link: "#" }
        ],
    },
    diaspora: {
        title: "Stay Connected to home,",
        title2: "Wherever You Are.",
        subtitle: "Open a Diaspora Bank Account designed to keep you financially connected to home while you live, work, or study abroad. Wherever life takes you, your banking stays close.",
        image: "./accounts/diaspora.png",
        mainButton: {
            text: "Open a Diaspora Account",
            link: "/diaspora/login",
        },
        mainButton2: {
            text: "Open a Personal Account",
            link: "https://internetbanking.getbucks.co.zw/signin",
        },
        buttons: [
            { text: "Organized Saving", link: "#" },
            { text: "In-App Controls", link: "#" },
            { text: "Instant Tracking", link: "#" },
            { text: "Bills Manager", link: "#" }
        ]
    },
    business: {
        title: "Manage your finances with",
        title2: "confidence, anytime, anywhere!",
        subtitle: "Enjoy fast, efficeient transactions, advanced security to protect your funds, and innovative banking tools that keep you ahead in today's competitive market.",
        image: "./accounts/business.png",
        mainButton: {
            text: "Open a Business Account",
            link: "https://internetbanking.getbucks.co.zw/signin",
        },
        buttons: [
            { text: "Enhanced Credibility", link: "#" },
            { text: "Cash flow tracking", link: "#" },
            { text: "Accounting & Reporting", link: "#" },
            { text: "Access to loans", link: "#" }
        ]
    }
}