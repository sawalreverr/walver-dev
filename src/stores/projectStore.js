import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
    state: () => ({
        projects: [
            {
                id: 1,
                title: "Bebastukar - Backend",
                description: "Developed the backend for Bebastukar, a secondhand exchange platform with user registration, community discussions, item listings, and AI chatbot assistance.",
                image: "/src/assets/images/projects/bebastukar.png",
                tags: ["Go", "Echo", "Cloudinary", "MySQL", "Docker", "Generative AI"],
                link: "https://github.com/sawalreverr/bebastukar-be"
            },
            {
                id: 2,
                title: "RecyThing - Backend",
                description: "Developed the backend for Recything, a mobile app enabling recycling education, litter reporting, and gamified rewards, paired with a web dashboard for admin data management.",
                image: "/src/assets/images/projects/recything.png",
                tags: ["Go", "Echo", "Cloudinary", "EC2", "MySQL", "Docker", "OpenAI"],
                link: "https://github.com/RECYTHNG/recything-be"
            },
            {
                id: 3,
                title: "Planitorium - Mobile App",
                description: "A mobile application for efficient activity planning and corn disease detection.",
                image: "/src/assets/images/projects/planitorium.png",
                tags: ["Kotlin", "Android", "MVVM", "Figma"],
                link: "https://github.com/Planitorium/planitorium-md"
            },
            {
                id: 4,
                title: "Sentiment Analysis IKN",
                description: "Developed a sentiment analysis system using IndoBERT and XGBoost to analyze and classify public sentiment toward Indonesia's new capital city (IKN) from X platform data, deployed via an interactive Streamlit dashboard.",
                image: "/src/assets/images/projects/did-a-analisis.png",
                tags: ["Python", "Streamlit", "Indobert", "XGBoost"],
                link: "https://github.com/sawalreverr/did-a-analisis",
            },
            {
                id: 5,
                title: "Portfolio Website",
                description: "A personal portfolio website showcasing my projects.",
                image: "/src/assets/images/projects/portfolio.png",
                tags: ["Vue", "Tailwind CSS", "DaisyUI"],
                link: "https://github.com/sawalreverr/did-a-analisis",
            },
        ]
    }),

    getters: {
        getAllProjects: (state) => state.projects,
        getProjectsByTag: (state) => (tag) => {
            return state.projects.filter(project => project.tags.includes(tag))
        }
    }
})