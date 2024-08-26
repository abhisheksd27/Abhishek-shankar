import { meta, shopify, starbucks, tesla, varcons, webstack,hero } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    python,
    canvas,
    django,
    flask,
    bootstrap,
    c,
    mysql,
    postgresql,
    pandas,
    numpy,
    instagram,
    postman,
    docker,
    Leetcode,
    school,
    vue,
    pycharm,
    snapgram,
    summiz,
    threads,
} from "../assets/icons";

export const skills = [
    // Languages
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Programming Language",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Programming Language",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Programming Language",
    },
    {
        imageUrl: numpy,
        name: "NumPy",
        type: "Programming Language",
    },

    // Frameworks
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: vue,
        name: "Vue.js",
        type: "Frontend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },

    // Databases
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },

    // Developer Tools
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "API Development",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Containerization",
    },
    {
        imageUrl: pycharm,
        name: "PyCharm",
        type: "IDE",
    },

    // Additional
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: canvas,
        name: "Canvas",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // Add additional skills if needed
];


export const education = [
    {
        degree: "B.E in Information Science and Engineering",
        institution: "CMR Institute of Technology",
        location: "Bangalore, India",
        date: "2020 - 2024",
        details: [
            "CGPA: 8.43"
        ],
        imageUrl: school // Path to the image
    },
    {
        degree: "PCMB",
        institution: "R N Shetty PU College",
        location: "Kundapura, India",
        date: "2018 - 2020",
        details: [
            "Percentage: 83.5%"
        ],
        imageUrl: school // Path to the image
    },
    {
        degree: "SSLC",
        institution: "Govt. High School Aloor",
        location: "Kundapura, India",
        date: "2018",
        details: [
            "Percentage: 93.12%"
        ],
        imageUrl: school // Path to the image
    }
];

export const experiences = [
    {
        title: "Full-Stack Intern",
        company_name: "Webstack Academy",
        icon: webstack, // Replace with relevant company icon
        iconBg: "#EDEDED",
        date: "Jan 2024 - Feb 2024",
        points: [
            "Honed skills in API development with a focus on backend-frontend integration.",
            "Configured endpoints, managed HTTP requests, and addressed integration challenges.",
        ],
    },
    {
        title: "Machine Learning Intern (Research Based)",
        company_name: "Varcons Technologies",
        icon: varcons, // Replace with relevant company icon
        iconBg: "#F8F8F8",
        date: "Feb 2024 - Mar 2024",
        points: [
            "Focused on hands-on implementation and problem-solving in machine learning.",
            "Utilized frameworks like NumPy, Pandas, and Matplotlib for data cleaning and implementing algorithms.",
        ],
    },
    {
        title: "Web Development Freelancer",
        company_name: "Self-Employed",
        icon: hero, // Replace with relevant icon if available
        iconBg: "#F0F0F0",
        date: "Mar 2024 - Present",
        points: [
            "Developed and maintained websites and web applications for various clients.",
            "Handled front-end and back-end development, ensuring seamless user experiences and robust functionality.",
            "Utilized modern technologies such as React, Node.js, and Tailwind CSS to deliver high-quality solutions.",
        ],
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/abhisheksd27',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abhishekshankar27/',
    },
    {
        name:"Leetcode",
        iconUrl: Leetcode,
        link: 'https://leetcode.com/u/FirewallFox/',
    },
    {
        name:"Instagram",
        iconUrl: instagram,
        link: 'https://www.instagram.com/abhishek_.shankar/?next=%2Fabhishek._shankkar%2F',
    }
];
export const projects = [
    {
        iconUrl: pricewise, // First icon
        theme: 'btn-back-red',
        name: 'Full-Stack Authentication Application',
        description: 'Built a secure full-stack authentication application using MERN stack, JWT, Google OAuth, Redux, and Firebase, demonstrating advanced authentication and security practices.',
        link: 'https://authentication-app-gczq.onrender.com/',
    },
    {
        iconUrl: estate, // Second icon
        theme: 'btn-back-blue',
        name: 'PropertEase',
        description: 'Developed a MERN stack project where users can find hotels, rental places, and message landlords, with authentication using Firebase.',
        link: 'https://github.com/abhisheksd27/PropertEase',
    },
    {
        iconUrl: pricewise, // First icon
        theme: 'btn-back-green',
        name: 'Lip to Speech Synthesis',
        description: 'Developed a machine learning model for translating lip movements into speech using Flask, HTML, and CSS.',
        link: 'https://github.com/abhisheksd27/LTS-flask-server',
    },
    {
        iconUrl: estate, // Second icon
        theme: 'btn-back-purple',
        name: 'MERN Stack Blog application',
        description: 'Designed and developed a feature-rich personal blog using React.js, ExpressJS, NodeJS, MongoDB, with Google OAuth and more.',
        link: 'https://abhishekshankar.onrender.com',
    },
    {
        iconUrl: pricewise, // First icon
        theme: 'btn-back-yellow',
        name: 'Road Accident Prediction Model',
        description: 'Developed a web application for predicting road accident severity with Flask, MySQL, and Gradient Boosting Algorithm.',
        link: 'https://github.com/abhisheksd27/Road-Accident-Prediction-model',
    },
    {
        iconUrl: estate, // Second icon
        theme: 'btn-back-red',
        name: 'Event Management System',
        description: 'Developed a Django application for managing college events with multiple user roles and permissions.',
        link: 'https://github.com/abhisheksd27/eventmanagmentdjangoprj',
    },
    
    {
        iconUrl: pricewise, // First icon
        theme: 'btn-back-yellow',
        name: 'Edusity University Website',
        description: 'Developed a React-based university website to showcase educational programs and campus facilities, with a focus on responsive design.',
        link: 'https://edusity-two.vercel.app/',
    },
    {
        iconUrl: estate, // Second icon
        theme: 'btn-back-purple',
        name: 'Money Tracker',
        description: 'Created a React application for tracking income, expenses, and budgets, with a user-friendly interface and responsive design.',
        link: 'https://github.com/abhisheksd27/MoneyTracker-personal',
    },
    {
        iconUrl: pricewise, // First icon
        theme: 'btn-back-red',
        name: 'MovieHunt',
        description: 'Developed a React app for searching new movies and watching trailers, with a focus on user-friendly design and seamless interaction.',
        link: 'https://movie-hunt-woad.vercel.app/',
    },
    
    {
        iconUrl: estate, // Second icon
        theme: 'btn-back-yellow',
        name: 'ChatBot using OpenAI',
        description: 'Developed a web-based chatbot using Django and OpenAI API for dynamic conversations and user authentication.',
        link: 'https://github.com/abhisheksd27/chatgpt-open-api-project',
    },
    {
        iconUrl: pricewise, // First icon
        theme: 'btn-back-purple',
        name: 'Django Route Planning and Location Management',
        description: 'Implemented a web-based application using Django and Google API for route planning and location management.',
        link: 'https://github.com/abhisheksd27/django-google-map-api-project',
    },
    {
        iconUrl: estate, // Second icon
        theme: 'btn-back-red',
        name: 'Student Management System',
        description: 'Developed a Django-based student management system with features for tracking academic progress and administrative tasks.',
        link: 'https://github.com/abhisheksd27/Student-management-system',
    },
    {
        iconUrl: pricewise, // First icon
        theme: 'btn-back-blue',
        name: 'Social Network',
        description: 'Built a social networking platform using Django, HTML, CSS, and JavaScript, focusing on user interaction and data management.',
        link: 'https://github.com/abhisheksd27/socialnetwork',
    },
    {
        iconUrl: estate, // Second icon
        theme: 'btn-back-green',
        name: 'Stellar Finds',
        description: 'Utilized various NASA APIs to fetch and display data about space findings using React and NASA API integration.',
        link: 'hhttps://stellar-finds.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-purple',
        name: 'Cosmic View',
        description: 'Cosmic View is a website that updates new information every day using React.',
        link: 'https://cosmic-view.vercel.app/',
    },
    {
        iconUrl: pricewise, // First icon
        theme: 'btn-back-blue',
        name: 'Emoji Interpreter',
        description: 'Created an interactive web app to translate text into emojis using React, enhancing communication through visual expressions.',
        link: 'https://emoji-interpreter-theta.vercel.app/',
    },
    {
        iconUrl: estate, // Second icon
        theme: 'btn-back-green',
        name: 'Meme Generator',
        description: 'Developed a React app for creating custom memes by adding text to selected images, ensuring a user-friendly and interactive experience.',
        link: 'https://meme-generator-psi-ashy.vercel.app/',
    },
    {
        iconUrl: estate, // Second icon
        theme: 'btn-back-blue',
        name: 'Simple Weather Application',
        description: 'Developed a lightweight web tool using JavaScript, HTML, and CSS to provide real-time weather information.',
        link: 'https://abhisheksd27.github.io/weather/',
    },
    {
        iconUrl: pricewise, // First icon
        theme: 'btn-back-green',
        name: 'Simple QR Code Generator',
        description: 'Built a web application using HTML, CSS, and JavaScript for generating QR codes from user input.',
        link: 'https://abhisheksd27.github.io/QRCodeGenerator/',
    }
];
