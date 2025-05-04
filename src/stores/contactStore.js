import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
    state: () => ({
        contacts: [
            {
                id: 1,
                type: "Email",
                value: "sawalrever23@gmail.com",
                icon: "icon-[ic--outline-email]",
                link: "mailto:sawalrever23@gmail.com"
            },
            {
                id: 2,
                type: "Discord",
                value: "razorr.",
                icon: "icon-[ic--baseline-discord]",
            },
            {
                id: 3,
                type: "X (Twitter)",
                value: "@ryukzrever",
                icon: "icon-[prime--twitter]",
                link: "https://x.com/ryukzrever"
            },
            {
                id: 4,
                type: "LinkedIn",
                value: "in/muhammad-shahwal",
                icon: "icon-[mdi--linkedin]",
                link: "https://www.linkedin.com/in/muhammad-shahwal/"
            }
        ]
    }),

    getters: {
        getContactMethods: (state) => state.contactMethods
    }
})