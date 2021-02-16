const resume = {
    "header": {
        "name": "Marissa Alvarez",
        "location": "Los Angeles",
        "currentRole": "Web Developer and Software Engineer",
        "roleDescription": "I have a passion for learning new technologies and " +
        "frontend development! When I am not coding I enjoy going to the beach and playing with my pup!",
    },

    "socialLinks": [
        {
            "name": "Email",
            "url": "marissaa90@gmail.com",
            "icon": "fa fa-envelope",
            "prefix": "mailto:"
        },
        {
            "name": "LinkedIn",
            "url": "linkedin.com/in/marissa-alvarez27",
            "icon": "fa fa-linkedin",
            "prefix": "https://www."
        },
        {
            "name": "GitHub",
            "url": "github.com/malvarez27",
            "icon": "fa fa-github",
            "prefix": "https://"
        }
    ],

    "about": {
        "summary": "I am a developer with more than a year of full time experience. I am dedicated, spontaneous, and a hard working individual. " +
        "Throughout the year I have gained experiences and a successful track record of delivering high quality work. " +
        "I have a passion for tech, shaping products, developing a clean user experience, and writing readable code. " +
        "My experiences collaborating cross-functionally with different diciplines " +
        "has led me to develop a love for finding solutions to difficult problems.",

        "university": {
            "name": "Loyola Marymount University",
            "location": "Los Angeles, CA",
            "dateStarted": "August 2015",
            "dateGraduated": "May 2019",
            "degree": "B.S. in Computer Science",
            "summary": "",
        },
    },

    "portfolio": [
        {
            "title": "Personal Portfolio Website",
            "summary": "A single-page React application demonstrating my abilities and accomplishments " +
            "as a software engineer. The application is hosted on AWS Amplify connected with a custom domain name using Amazon Route 53. ",
            "url": "https://github.com/malvarez27/marissaPortfolio",
            "img": "/images/portfolioScreenshot.jpg"
        },
        {
            "title": "LOOIE",
            "summary": "Logical Organizations of Integrated Environments is an Internally developed web application for" +
            "the Factory of the Future (FoF) initiative at Northrop Grumman. The LOOIE web application tracks and manages tools, support equipment, and material movement from receipt to deployment." +
            " Click the link to learn more about my role on this project! " ,
            "url": "https://github.com/malvarez27/marissaPortfolio/blob/master/public/images/Looie.pdf",
            "img": "/images/Homepage.png"
        },
        {
          "title": "Yelp Database",
          "summary": "I analyzed data on local restaurants in order to determine ratings patterns for establishments, " +
          "see if certain categories were lacking in the area, and how to differentiate yourself if the menu for your " +
          "restauraunts is similar to your competitors." +
          " I utilized Python, MySQL, the Yelp API, and Tableau.",
          "url": "https://github.com/malvarez27/yelpDB#readme",
          "img": "/images/CreateFastFoodDB.jpg"
        },
        {
            "title": "Graphics",
            "summary": "Cartoonify and 3D Model projects completed in my LMU Graphics class. Click on the image for more information located on my github Read Me Page.",
            "url": "https://github.com/malvarez27/Graphics",
            "img": "/images/rotatingScene.jpg"
        },
        {
            "title": "Study Abroad HTML Blog",
            "summary": "When I was looking into the New Zealand study abroad program at LMU there was little to no information about student  " +
            " experiences. I had to reach out to alumni to learn more. To give back to the LMU community I used HTML and Bootstrap to  " +
            " create a study abroad blog post about my experience. This allows future students to learn about the program. My blog is now " +
            " shared by the LMU study abroad office to students looking into the program. ",
            "url": "https://malvarez27.github.io/Study-Abroad-Website-Blog/",
            "img": "/images/NZBlog.jpg"
        }
    ],

    "testimonials": [
        {
            "name": "Chris Thoman",
            "company": "SpaceX",
            "title": "Manufacturing Engineer",
            "quote": "Marissa was a colleague of mine at Loyola Marymount University who I studied abroad with. " +
            " She has an amazing work ethic.  She always goes the extra mile and makes sure everything that she " +
            "works on is top notch.  I would reccomend her for anyone looking for a hardworking, creative problem "+
            "solver who gets the job done! "
        },
        {
            "name": "Susan Callaway",
            "company": "Northrop Grumman",
            "title": "Project Manager",
            "quote": "Thank you for always being willing to step up and take on a new task or challenge. " +
              "I very much appreciate your attitude and work ethic."
        },
        {
            "name": "Doug Miller",
            "company": "Northrop Grumman",
            "title": "Manager Software Development",
            "quote": "Marissa was assigned to work with Application Design and Development team. The team used modern " +
            "technologies .Net Core, a full CI/CD pipeline, and automated testing. Her team members have all positive comments " +
            "about working with Marissa. They were particularly impressed with her enthusiasm and ability to pick up new envirnments. "
        }
    ],

    "contact": {
        "concludingStatements": [
            "Thanks for checking out some of my work! "+
            "Please do not hesitate to contact me.",
        ]
    }
};

export default resume;
