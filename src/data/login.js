export const getLoginData = {
    personal: {
        title: 'Welcome to',
        title2: 'Personal Banking',
        subtitle: 'Please enter your credentials to access your personal banking account.',
        image: './accounts/personal.png',
        registerLink: '/personal/register',
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
                link: '',
            },
            {
                text: 'Forgot Password?',
                type: 'link',
                link: '',
            }
        ]
    },
    business: {
        title: 'Welcome to',
        title2: 'Business Banking',
        subtitle: 'Please enter your credentials to access your business banking account.',
        image: './accounts/business.png',
        registerLink: '/business/register',
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
                link: '',
            },
            {
                text: 'Forgot Password?',
                type: 'link',
                link: '',
            }
        ],
    },
    diaspora: {
        title: 'Welcome to',
        title2: 'Diaspora Banking',
        subtitle: 'Please enter your credentials to access your diaspora banking account.',
        image: './accounts/diaspora.png',
        registerLink: '/diaspora/register',
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
                link: '',
            },
            {
                text: 'Forgot Password?',
                type: 'link',
                link: '',
            }
        ]
    }
}