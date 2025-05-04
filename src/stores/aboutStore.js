import { defineStore } from 'pinia'

export const useAboutStore = defineStore('about', {
    state: () => ({
        experiences: [
            {
                id: 1,
                company: "Bangkit Academy",
                position: "Mobile Development (Apprenticeship)",
                period: "Sep 2024 - Dec 2024",
                description: "Participated in Google's Bangkit Academy program, focusing on mobile development. Collaborated on team projects, developed Android applications using Kotlin, and implemented modern architecture patterns like MVVM.",
                skills: ["Kotlin", "Android", "Git", "MVVM"]
            },
            {
                id: 2,
                company: "Alterra Academy",
                position: "Back-end Engineer (Apprenticeship)",
                period: "Feb 2024 - Jul 2024",
                description: "Developed and maintained RESTful APIs for various applications. Implemented database design, authentication systems, and worked with containerization technologies. Collaborated with front-end and mobile developers to ensure seamless integration.",
                skills: ["Go", "Echo", "MySQL", "Docker", "Clean Architecture"]
            }
        ],
        education: [
            {
                id: 1,
                institution: "Mikroskil University",
                degree: "Bachelor of Computer Science",
                period: "2021 - 2025",
                description: "Focused on software engineering principles, algorithms, data structures, and system design. Completed coursework in web development, mobile applications, database management, and cybersecurity fundamentals.",
                skills: ["Software Engineering", "Data Structures", "Algorithms", "Web Development", "Mobile Development"]
            }
        ],
        background: {
            name: "Muhammad Shahwal Ramadhan Boger",
            location: "Medan, Indonesia",
            summary: "fresh graduate in Informatics Engineering from Mikroskil University with a strong passion for Software Engineering, Back-end Development, and Cyber Security. Highly adaptable, detail-oriented, and a collaborative team player. Experienced in building scalable mobile and back-end solutions, with a strong foundation in problem-solving and system architecture.",
            openToWork: "Currently, I'm open to both internship and full-time opportunities where I can contribute my skills while continuing to grow as a developer. I'm eager to join a team where I can make meaningful contributions and learn from experienced professionals."
        }
    }),
})