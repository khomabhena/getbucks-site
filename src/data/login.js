export const getLoginData = {
    personal: {
        title: 'Welcome to',
        title2: 'Personal Banking',
        subtitle: 'Please enter your credentials to access your personal banking account.',
        image: './accounts/personal.png',
        registerText: "Don't have an account?",
        registerLinkText: "Sign Up",
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
        registerText: "Don't have an account?",
        registerLinkText: "Sign Up",
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
        registerText: "Don't have an account?",
        registerLinkText: "Sign Up",
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
    },
    contactUs: {
        title: 'Get in Touch',
        title2: 'Send Us an Email',
        subtitle: 'We will get in touch with you shortly.',
        image: './accounts/diaspora.png',
        registerText: "",
        registerLinkText: "",
        registerLink: '',
        inputs: [
            {
                id: 'contact-fullname',
                type: 'text',
                name: 'fullname',
                placeholder: 'Fullname',
                required: true,
            },
            {
                id: 'contact-email',
                type: 'email',
                name: 'email',
                placeholder: 'Your Email',
                required: true,
            },
            {
                id: 'contact-number',
                type: 'number',
                name: 'number',
                placeholder: 'Mobile Number',
                required: true,
            },
            {
                id: 'contact-message',
                type: 'textarea',
                name: 'message',
                placeholder: 'Your Message',
                required: true,
            },
        ],
        buttons: [
            {
                text: 'Send Email',
                type: 'submit',
                link: '',
            },
            {
                text: '',
                type: 'link',
                link: '',
            }
        ]
    }
}