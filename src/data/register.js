export const getRegistrationData = {
    personal: {
        title: 'Welcome to',
        title2: 'Personal Banking',
        subtitle: 'Please enter your details to create your personal banking account.',
        image: './accounts/personal.png',
        loginLink: '/personal/login',
        inputs: [
            {
                id: 'personal-name',
                type: 'text',
                name: 'name',
                placeholder: 'Name',
                required: true,
            },
            {
                id: 'personal-surname',
                type: 'text',
                name: 'surname',
                placeholder: 'Surname',
                required: true, 
            },
            {
                id: 'personal-id-number',
                type: 'text',
                name: 'idNumber',
                placeholder: 'ID Number',
                required: true,
            },
            {
                id: 'personal-address',
                type: 'text',
                name: 'address',
                placeholder: 'Address',
                required: true,
            },
            {
                id: 'personal-email',
                type: 'email',
                name: 'email',
                placeholder: 'Email Address',
                required: true,
            },
            {
                id: 'personal-password',
                type: 'password',
                name: 'password',
                placeholder: 'Password',
                required: true,
            },
            {
                id: 'personal-confirm-password',
                type: 'password',
                name: 'confirmPassword',
                placeholder: 'Confirm Password',
                required: true,
            }
        ]
    },
    diaspora: {
        title: 'Welcome to',
        title2: 'Diaspora Banking',
        subtitle: 'Please enter your details to create your diaspora banking account.',
        image: './accounts/diaspora.png',
        loginLink: '/diaspora/login',
        inputs: [
            {
                id: 'diaspora-name',
                type: 'text',
                name: 'name',
                placeholder: 'Name',
                required: true,
            },
            {
                id: 'diaspora-surname',
                type: 'text',
                name: 'surname',
                placeholder: 'Surname',
                required: true, 
            },
            {
                id: 'diaspora-id-number',
                type: 'text',
                name: 'idNumber',
                placeholder: 'ID Number',
                required: true,
            },
            {
                id: 'diaspora-address',
                type: 'text',
                name: 'address',
                placeholder: 'Address',
                required: true,
            },
            {
                id: 'diaspora-email',
                type: 'email',
                name: 'email',
                placeholder: 'Email Address',
                required: true,
            },
            {
                id: 'phone-number',
                type: 'text',
                name: 'phoneNumber',
                placeholder: 'Phone Number',
                required: true,
            },
            {
                id: 'diaspora-password',
                type: 'password',
                name: 'password',
                placeholder: 'Password',
                required: true,
            },
            {
                id: 'diaspora-confirm-password',
                type: 'password',
                name: 'confirmPassword',
                placeholder: 'Confirm Password',
                required: true,
            }
        ]
    },
    business: {
        title: 'Welcome to',
        title2: 'Business Banking',
        subtitle: 'Please enter your details to create your business banking account.',
        image: './accounts/business.png',
        loginLink: '/business/login',
        inputs: [
            {
                id: 'business-name',
                type: 'text',
                name: 'name',
                placeholder: 'Business Name',
                required: true,
            },
            {
                id: 'business-registration-number',
                type: 'text',
                name: 'registrationNumber',
                placeholder: 'Registration Number',
                required: true,
            },
            {
                id: 'business-address',
                type: 'text',
                name: 'address',
                placeholder: 'Business Address',
                required: true,
            },
            {
                id: 'business-email',
                type: 'email',
                name: 'email',
                placeholder: 'Email Address',
                required: true,
            },
            {
                id: 'business-director',
                type: 'text',
                name: 'director',
                placeholder: 'Director Name 1',
                required: true,
            },
            {
                id: 'business-director2',
                type: 'text',
                name: 'director2',
                placeholder: 'Director Name 2',
                required: false,
            },
            {
                id: 'business-phone-number',
                type: 'text',
                name: 'phoneNumber',
                placeholder: 'Phone Number',
                required: true,
            },
            {
                id: 'business-password',
                type: 'password',
                name: 'password',
                placeholder: 'Password',
                required: true,
            },
            {
                id: 'business-confirm-password',
                type: 'password',
                name: 'confirmPassword',
                placeholder: 'Confirm Password',
                required: true,
            }
        ]
    }
}