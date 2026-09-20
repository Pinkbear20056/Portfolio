// 이 파일의 텍스트와 이미지 경로만 바꾸면 사이트 내용을 수정할 수 있습니다.
// 프로젝트·경력은 디자인 확인용 예시입니다. 실제 이력으로 교체해 주세요.
window.SITE = {
  name: 'YUJIN', location: 'Vancouver, BC, Canada', email: 'yj.yujin.song@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yujin-song-527513309/',
  cv: 'assets/Yujin Song - Resume.pdf',
  tagline: 'CHOSE COMPUTING SCIENCE TO STAY CREATIVE AND SOLVE REAL PROBLEMS.',
  introduction: 'Hi, I’m Yujin, Computing Science student at Simon Fraser University. I enjoy both building creative software and solving real world problem I face. I’m interested in back-end development and robotics, while exploring cybersecurity and mathematics in my spare time.',
  tools: [
    { name: 'GLASSES', label: '01 / WEAR', description: 'I first wore glasses in 5th grade. Until middle school I think I wore it hybrid, like only when I had class. But unfortunately I became a full-time glasser from 10th grade.' },
    { name: 'REPLICA', label: '02 / SCENT', description: 'Last summer I took a summer off and went back to Korea. At that time, me and my highschool bestfriend were so obsessed to the idea that we want to get our first perfume, we went to all the famous perfume shop. I liked this perfume design but it smelled like a professional in 40s.' },
    { name: 'WINTER WIND', label: '03 / MUSIC', description: 'I have played piano for 9 years in my life from 1st grade to 9th grade. This is the last song I have played in 9th grade. I still want to practice that song until the end!' },
    { name: 'SHOWMAKER', label: '04 / KEYRING', description: 'My GOAT. Best League of Legends player in the world' },
    { name: 'SEA SHELL', label: '05 / OBJECT', description: 'I have lived in Australia for 1 year and half in my kindergarten. We went to beach every year and I collected losts of shells!' },
    { name: 'Chemistry', label: '06 / Life', description: 'I also liked chemistry in mhy highschool. I still have CH2O keyring at home, which I made in my highschool.' }
  ],
  projects: [
    {
      title: 'Schedule Mate',
      subtitle: 'Your own digital space to gather/share your friends and your course schedule.',
      images: ['assets/schedulemate title.png', 'assets/schedulemate.png'],
      tag: '01 / SOLVING PROBLEM',
      description: 'Sick and tired of sharing course schedule screenshots? ScheduleMate is a university timetable app that gathers all of my friends’ schedules in one place. Build an editable weekly timetable from real SFU course data, add personal blocks, and compare it side by side with your friends’ schedules.',
      details: 'Front end built with React (Vite) and React Router. Back end built with Node.js, Express and MongoDB, with JWT authentication, a friend system, notifications, dark mode and PWA support.',
      link: 'https://github.com/Pinkbear20056/scheduleMate', linkLabel: 'View on GitHub'
    },
    {
      title: 'Aether',
      subtitle: 'Hand motion detecting computer vision project',
      images: ['assets/sideview_GrabbingMotion_open2.png', 'assets/sideview_GrabbingMotion_grabbing1.png'],
      tag: '02 / COMPUTER VISION (Robotics)',
      description: 'Aether is a club project made at SFU AKCSE: a robot arm you control with just your laptop webcam. Computer vision tracks your hand and recognizes gestures like opening and grabbing.',
      details: 'Built with Python, OpenCV and MediaPipe, plus ROS 2 and Gazebo for simulation.',
      role: [
        'On the software team, I built the XY coordinate detection for the tracked hand and the side-view grabbing motion detection.',
        'I also set up pytest tests and a GitHub Actions workflow that runs them automatically.'
      ],
      link: 'https://github.com/sfu-akcse/Aether', linkLabel: 'View on GitHub'
    },
    {
      title: 'Oh My Graph',
      subtitle: 'What is the equation of the graph you are stepping on?',
      images: ['assets/ohmygraph1.png', 'assets/ohmygraph2.png'],
      tag: '03 / CREATIVE DEVELOPMENT',
      description: 'Oh My Graph is a math-themed game made for the SFU Summer Summit 2026 game jam. A pixel-art student moves along the points of a graph, and your job is to complete the equation of the curve they are stepping on.',
      details: 'Built by two developers for the SFU Summer Summit 2026, hosted by the SFU Game Dev Club and Interactive Arts and Technology, and submitted on itch.io.',
      link: 'https://itch.io/jam/summer-summit-2026/rate/4981658', linkLabel: 'View on itch.io'
    }
  ],
  experiences: [
    {
      title: 'EDUCATION', caption: 'EDUCATION', date: 'Expected May 2027',
      organization: 'Simon Fraser University · Fraser International College',
      image: 'assets/experience1-web.jpg', alt: 'Sunset over an SFU building', photoTitle: 'SFU SUNSET', note: 'One of the prettiest sunsets I have seen at SFU.', focus: '50% 78%',
      points: [
        'Bachelor’s degree in Computing Science with a minor in Mathematics, Faculty of Applied Science, SFU (Burnaby, BC).',
        'Relevant coursework: Data Structures and Algorithms, Probability and Statistics, Linear Algebra, Linear Optimization, System Programming, Introduction to Artificial Intelligence.',
        'Began in the Computing Science major at Fraser International College (Sep 2023 – Aug 2024), taking Calculus I and II. Nominated student for a GPA over 3.67.',
        'Course project (CMPT 201): a Unix-like shell in C with process creation, foreground/background execution, built-in commands and command history, using fork(), execvp() and waitpid().',
        'Skills: Python, C++, C, HTML, CSS, JavaScript, TypeScript, Ruby, Assembly; FastAPI, Express.js, React, Ruby on Rails, TailwindCSS; SQLite, MongoDB, Node.js, Git, Docker, Bash, OpenCV, REST APIs, Vite.'
      ]
    },
    {
      title: 'SFU CYBERSECURITY CLUB', caption: 'CYBERSECURITY', date: 'Jan 2025 – Present',
      organization: 'Co-Founder, President · Burnaby, BC',
      image: 'assets/experience2-web.jpg', alt: 'SFU Cybersecurity Club booth', photoTitle: 'CLUBS DAY', note: 'SFU Cybersecurity Club at Clubs Day.', focus: '50% 50%',
      points: [
        'Co-founded the club and served as its first president, setting up its structure and procedures together with 8+ executive members.',
        'Organized cybersecurity activities such as CTFs and workshops, so that members have a place to get started in cybersecurity.'
      ]
    },
    {
      title: 'ROBOTICS & RESEARCH', caption: 'ROBOTICS & RESEARCH', date: 'Jan 2026 – Present',
      organization: 'SFU Ascension Robotics · MARS Lab, SFU',
      image: 'assets/experience3-web.jpg', alt: 'Black bears seen from a bus window', photoTitle: 'FIRST BEAR', note: 'The day I saw a bear for the first time.', focus: '50% 45%',
      points: [
        'Ascension Robotics, Computer Vision Team (C++, OpenCV): co-developed a findRobotCenter function using linear algebra and geometric constraints, and implemented a drawSelectedPosition function with OpenCV for aiming practice on target panels.',
        'Ascension Robotics: implemented a yaw estimation function designed by a teammate, translating the math into C++ code. Also helped the Business Team plan a large event by recommending venues that lowered the projected cost by about $700.',
        'MARS Lab, volunteer student researcher (Python, ROS 2, Jul 2026 – Present): studying Hamilton–Jacobi reachability and Control Barrier Function controllers for safety-critical robotics.',
        'MARS Lab: set up and ran TurtleBot3, Unitree and AgileX simulation environments using ROS 2, MuJoCo and RViz.'
      ]
    },
    {
      title: 'STUDENT LEADERSHIP & WORK', caption: 'LEADERSHIP & WORK', date: '2023 – Present',
      organization: 'Math Student Union · Clash of Equations · ETOOS',
      image: 'assets/experience4-web.jpg', alt: 'Watching a League of Legends event with other students', photoTitle: 'WATCH PARTY', note: 'The annual League of Legends watch party at school.', focus: '50% 42%',
      points: [
        'Math Student Union, SFSS representative and non-executive councillor (May 2026 – Present): represent the Mathematics Student Union at SFSS Council meetings and share council discussions, policies and initiatives with the MSU executive team.',
        'Clash of Equations math competition, team leader (Mar 2026): led a 3-person team across calculus, linear algebra and number theory. Earned full marks in calculus and partial marks in linear algebra, contributing 11 of the team’s 21 points (the overall average was 8.86).',
        'ETOOS, a Korean private academy, English lecturer assistant and manager (part-time, Mar – Jul 2023, Goyang-si, KR): managed attendance and assignment tracking for 30+ students on an internal platform, stayed in touch with students and parents, and helped build an Excel score-analysis spreadsheet.'
      ]
    },
    {
      title: 'SUMMER GAME JAM 2026', caption: 'GAME JAM', date: 'Sep 2026',
      organization: 'Game Developer · SFU Burnaby Campus',
      image: 'assets/experience5-web.jpg', alt: 'Announcement slide at the SFU Summer Game Jam', photoTitle: 'GAME JAM', note: 'A snapshot from the SFU Summer Game Jam.', focus: '50% 55%',
      points: [
        'Made Oh My Graph, a 2D educational game in C# and Unity, as a two-person team at the SFU Summer Game Jam.',
        'Players complete mathematical functions to generate paths and guide a character through each level.',
        'Implemented piecewise-function generation, keyboard answer input, real-time graph visualization and gameplay that speeds up as levels progress.',
        'Oh My Graph was announced as “Closest to Placing” at the jam.'
      ]
    }
  ]
};
