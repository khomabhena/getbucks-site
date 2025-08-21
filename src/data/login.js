export const getLoginData = {
    personal: {
        title: 'Welcome to',
        title2: 'Personal Banking',
        subtitle: 'Please enter your credentials to access your personal banking account.',
        image: './accounts/personal.png',
        inputs: [
            {
                id: 'personal-username',
                type: 'text',
                name: 'username',
                placeholder: 'Username',
                required: true,
            },
            {
                id: 'personal-password',
                type: 'password',
                name: 'password',
                placeholder: 'Password',
                required: true,
            }
        ],
        buttons: [
            {
                text: 'Login',
                type: 'submit',
                link: '/personal-dashboard',
            },
            {
                text: 'Forgot Password?',
                type: 'link',
                link: '/reset-password',
            }
        ]
    },
    business: {
        title: 'Welcome to',
        title2: 'Business Banking',
        subtitle: 'Please enter your credentials to access your business banking account.',
        image: './accounts/business.png',
        inputs: [
            {
                id: 'business-username',
                type: 'text',
                name: 'username',
                placeholder: 'Username',
                required: true,
            },
            {
                id: 'business-password',
                type: 'password',
                name: 'password',
                placeholder: 'Password',
                required: true,
            }
        ],
        buttons: [
            {
                text: 'Login',
                type: 'submit',
                link: '/business-dashboard',
            },
            {
                text: 'Forgot Password?',
                type: 'link',
                link: '/reset-password',
            }
        ],
    },
    diaspora: {
        title: 'Welcome to',
        title2: 'Diaspora Banking',
        subtitle: 'Please enter your credentials to access your diaspora banking account.',
        image: './accounts/diaspora.png',
        inputs: [
            {
                id: 'diaspora-username',
                type: 'text',
                name: 'username',
                placeholder: 'Username',
                required: true,
            },
            {
                id: 'diaspora-password',
                type: 'password',
                name: 'password',
                placeholder: 'Password',
                required: true,
            }
        ],
        buttons: [
            {
                text: 'Login',
                type: 'submit',
                link: '/diaspora-dashboard',
            },
            {
                text: 'Forgot Password?',
                type: 'link',
                link: '/reset-password',
            }
        ]
    }
}