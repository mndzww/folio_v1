// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "M. Naufaldi Dzakwan",
    message: "I'm a <em><u>Instrumentation Physics</u></em> student who has walked the path, gaining considerable experience in <em><u>AI/ML development</u></em>. And previously also experienced as a <em><u>IoT/Robotics Enthusiast</u></em> at my project in university. Currently, I'm developing Autonomous Car called SLAM Car to help Localisation and Mapping area in case at Logistic needs.",
    basedLocation: "Bekasi, Indonesia ",
    resumeLink: "https://drive.google.com/file/d/1ANg_3j_SvgW-v7MsuwzMvF0SMLAkZu7c/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/recentportrait.png'
}

const socialMediaLinks = {
    github: "https://github.com/mndzww",
    linkedin: "https://www.linkedin.com/in/mnaufaldidzakwan/",
    // medium: "",
    instagram: "https://www.instagram.com/mndzww__",
    stackoverflow: "",
    // xtwitter: ""
} // 

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is M. Naufaldi Dzakwan, an undergraduate student in Instrumentation Physics at <em><strong>Padjadjaran University</strong></em>. I’m passionate about turning abstract concepts into real-world solutions—especially where coding meets instrumentation. Recently, I was honored to be accepted into the <u>AI/ML path</u> of the <em><strong>Google Developer Student Club at ITB</strong></em>. I’m excited to deepen my skills and apply them to my role as a teaching assistant.",
        "You might not always find me in our department these days—but chances are, if I'm not coding or assisting in a lab, I’m probably on the <u>campus badminton court</u> <em>smashing birdies instead of bugs</em>. 😄🏸"
    ], // Separated items are paragraphs
    techStack: [
        "LaTex",
        "Python",
        "JavaScript",
        "Vue.js",
        "C/C++",
        "SQL"
    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpeg",
    photo3Link: "images/portrait3.jpeg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "AI-IoT-UI/UX Academy --",
        company: {
            name: "Samsung Innov. Campus & COMPFEST UI",
            link: "https://www.linkedin.com/in/mnaufaldidzakwan/"
        },
        duration: "Aug 2023 - May 2024",
        bulletPoints: [
            "During the AI/IoT Academy hosted by Samsung Innovation Campus and Skillvul Batch 5, I explored comprehensive topics in Artificial Intelligence and the Internet of Things. The program began with fundamental programming, then progressed to <u>IoT systems, covering MQTT protocols, IoT architecture</u>, and how AI is integrated into real-world projects by Arduino/ESP32.",
            "In addition, I participated in the UI/UX Academy organized by COMPFEST 15 - University of Indonesia, held in a hybrid format. The program culminated in a Night Graduation, where participants from all tracks—Product Management, UI/UX, Software Engineering, and Data Science—collaborated in solving a real-world case study challenge together.",
            // "Laid the groundwork for the modernized campus digital signage system and management application which supports 360 digital signs and 50 different organizations on campus."
        ],
        hashtags: [
            "IoT Architecture",
            "UI/UX",
            "MQTT Server Protocol",
            "AI/ML",
            "C&P",
            "Arduino-ESP32",
            "IoT Systems"
        ]
    },
    {
        position: "BEM Kema Unpad, AsLabKom 24/25 --",
        company: {
            name: "Saturasi, LabKom Unpad",
            link: "https://kema.unpad.ac.id/"
        },
        duration: "May 2024 - Dec 2024",
        bulletPoints: [
            "At BEM KEMA Unpad, I work in the Media and Information Department, managing Tech. Information. I <u>redesigned official website</u> to be more eye-catching and aligned with the department’s current visual identity, using <u>Figma</u> for UI/UX prototyping and <u>WordPress-Elementor</u> for implementation.",
            "I also serve as the <u>Coordinator of Computer Lab Assistants</u> (Aslabkom) for the 2024/2025 academic year. This year, we centralized <u>all practicum information</u> into a dedicated <u>practicum website</u>, developed in collaboration with HIFI FMIPA Unpad as our hosting partner. We’ve also shifted to <u>LaTeX for lab report</u> submissions, introducing a more professional and structured documentation format."
        ],
        hashtags: [
            "Coordinator Asisstants",
            "Numerical Computation",
            "Figma & Wordpress-Elementor",
            "Programming Algorithms"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "<em>Website Praktikum AKN 24/25</em>",
        yearCompleted: "2025",
        description: "Developed a <u>centralized practicum website</u> aimed at streamlining access to essential information for students participating. Additionally, the website features a dedicated section to highlight who top-performing students on their final project scores.",
        techStack: "Figma, Wordpress-Elementor",
        links: [
            {
                label: "",
                type: "git",
                url: "#"
            },
            {
                label: "",
                type: "external",
                url: "https://hifi.fmipa.unpad.ac.id/akn-24-25/"
            }
        ],
        imageLink: "images/web_praktikum.png",
        alignLeft: false
    },
    {
        projectName: "<em>Mini - IoT Smart Farm Based on PID Controller</em>",
        yearCompleted: "2024",
        description: "Designed a this project using the Arduino R4 WiFi, integrated with the Arduino Cloud IoT framework. The system enables real-time monitoring and control of environmental parameters based on predefined thresholds.",
        techStack: "Arduino R4 IoT, Arduino Cloud, C Programming",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/mndzww"
            },
            {
                label: "",
                type: "external",
                url: "https://github.com/mndzww"
            }
        ],
        imageLink: "images/mini_iot.png",
        alignLeft: true
    },
    {
        projectName: "<em>Website BEM Kema Unpad Saturasi</em>",
        yearCompleted: "2024",
        description: "I <u>redesigned official website</u> to be more eye-catching and aligned with the department’s current visual identity, using Figma for UI/UX prototyping and WordPress-Elementor for implementation",
        techStack: "Figma, Wordpress-Elementor",
        links: [
            {
                label: "",
                type: "git",
                url: "https://kema.unpad.ac.id/"
            },
            {
                label: "",
                type: "external",
                url: "https://kema.unpad.ac.id/"
            }
        ],
        imageLink: "images/web_bem.png",
        alignLeft: false
    },
    {
        projectName: "<em>Raspi AI-Image Processing</em>",
        yearCompleted: "2025",
        description: "<u>Raspberry Pi env.</u> provides a powerful alternative to Arduino and ESP for AI image processing, enabling local running of complex AI models for real-time vision tasks.",
        techStack: "Python, OpenCV, PyTorch",
        links: [
            {
                label: "",
                type: "external",
                url: "https://github.com/mndzww"
            }
        ],
        imageLink: "images/raspi.png",
        alignLeft: true
    },
    // {
    //     projectName: "Sudoku Game & Solver",
    //     yearCompleted: "2021",
    //     description: "Built a Sudoku game UI incorporating the Java Swing library. Randomly generates a Sudoku puzzle and solves itself using the backtracking algorithm written in Java..",
    //     techStack: "Java",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/feifyKike/sudokusolver"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://youtu.be/lXOjOrjf5hU"
    //         }
    //     ],
    //     imageLink: "images/sudoku_pic.png",
    //     alignLeft: false
    // },
    // {
    //     projectName: "Trivia Quiz",
    //     yearCompleted: "2020",
    //     description: "Interested in taking a fun and interactive pop quiz? Using the HTML, CSS3, JavaScript, and jQuery I created a quiz that can be taken on numerous topics of your choice and gives instant feedback. The entire project is built mostly on JavaScript and all the functionality and events are controlled through functions such as ReadDisplay and Validate. The HTML portion of the online quiz only serves as the skeleton and template for elements that will be created via JS.",
    //     techStack: "JS, HTML, CSS",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/feifyKike/JS-API-Quiz"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://codepen.io/Max_the_coder/pen/yLXZOYL" //https://codepen.io/Max_the_coder/pen/yLXZOYL
    //         }
    //     ],
    //     imageLink: "images/trivia_pic.png",
    //     alignLeft: true
    // },
    // {
    //     projectName: "Coronavirus Report",
    //     yearCompleted: "2020",
    //     description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
    //     techStack: "Python",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://youtu.be/gw5kb1QKVp0"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://github.com/feifyKike/Covid-Cases-Visual"
    //         }
    //     ],
    //     imageLink: "images/covid_pic.png",
    //     alignLeft: false
    // }
]

const archiveLink = "https://github.com/mndzww"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "As I approach my 7th semester, I am looking to pursue an internship specifically in the field of AI and training related to industrial instrumentation.",
        ], // paragraph breaks will be entered after each item,
        link: {
            other: "https://forms.gle/r9pDGRTRSbc7LNME8"
        },
        responseTimeMessage: "#"
    },
    formEmbedLink: "https://forms.gle/r9pDGRTRSbc7LNME8" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}
