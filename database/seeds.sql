-- Seeds for Paths
INSERT INTO Paths (name, description, image, createdAt, updatedAt)
VALUES ("Frontend", "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.", "https://i.imgur.com/TVP2v51.jpg", "2019-01-28 09:00:00", "2019-01-28 09:00:00");

INSERT INTO Paths (name, description, image, createdAt, updatedAt)
VALUES ("Backend", "Back end Development refers to the server side of development where you are primarily focused on how the site works. This type of web development usually consists of three parts: a server, an application, and a database.", "https://codecondo.com/wp-content/uploads/2017/09/back-end-developer.jpg", "2019-01-28 09:00:00", "2019-01-28 09:00:00");

INSERT INTO Paths (name, description, image, createdAt, updatedAt)
VALUES ("DevOps", "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity.", "https://cdn-images-1.medium.com/max/1200/1*CSZxfOMlVsKsrMkqTxFiMQ.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00");


-- Seeds for Front End
INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("HTML", "Hypertext Markup Language is the standard markup language for creating web pages and web applications.", "https://ih1.redbubble.net/image.361593789.5453/ap,550x550,12x12,1,transparent,t.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("CSS", "CSS is a language for specifying how documents are presented to users — how they are styled, laid out, etc.", "https://neoteric.eu/wp-content/uploads/2016/03/CSS-Logo-214x300-1.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Javascript", "JavaScript is the programming language of the web. You can use it to add dynamic behavior, store information, and handle requests and responses on a website.", "https://github.com/abranhe/programming-languages-logos/blob/master/src/javascript/javascript_256x256.png?raw=true", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("JQuery", "jQuery is a JavaScript Library that greatly simplifies JavaScript programming and is easy to learn.", "https://github.com/abranhe/programming-languages-logos/blob/master/src/javascript/javascript_256x256.png?raw=true", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("TypeScript", "TypeScript is designed for development of large applications and transcompiles to JavaScript.", "https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/typescript/typescript_256x256.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Bootstrap", "A popular front end framework", "http://pluspng.com/img-png/bootstrap-logo-png-logo-228.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("SASS", "An dynamic extension of CSS", "https://creativestudios.design/wp-content/uploads/2016/05/Sass-Tutorials-400x231.jpg", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("React", "React is a JavaScript library for building user interfaces.", "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs2/4445319/original/a80d251ffc93fb2706ea41afa69b1f7608c09a6b/create-reusable-react-js-components.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Redux", "While React has built-in methods to help manage the state of your application, libraries like Redux give you a framework and a method to do so cleanly and efficiently.", "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Angular JS", "For single-page applications, the AngularJS framework creates rich interactive features for a real-time experience.", "https://s3-us-west-2.amazonaws.com/cosmicjs/2051b220-f3e7-11e8-a2f6-9bca35b9aa63-angular.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Vue", "A JavaScript framework for building interfaces", "https://vuejs.org/images/logo.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("JSON", "Represent your data in text", "https://i0.wp.com/mydevgeek.com/wp-content/uploads/2017/09/json.png?w=256&ssl=1", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);




-- Seeds for Back End
INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Node", "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuNjkPk_E8cAmmUC0iYn0IXzlMrkpqKsjfuDQdQ5yohQdMg8m", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Express", "A fast, unopinionated, minimalist web framework for Node.js", "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/thumb/expressjslogo.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Python", "Python is used as a scripting language, and programmers can easily produce readable and functional code in a very short period of time.", "https://www.andreabacciu.com/wp-content/uploads/2015/02/Python-Logo-PNG-Image.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Django", "A popular web framework for Python", "https://milindtech.com/wp-content/uploads/2018/02/django-logo.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Ruby", "A popular programming language renowned for its simplicity and elegance.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxS2_g61gBhCB6F1R0rRjRm4mjd6etOIocD7jq2Ae3AKVse7C2", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("PHP", "PHP is a popular general-purpose scripting language that is especially suited to web development.", "http://fractalconsultancy.com/wp-content/uploads/2013/12/logo_php.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("JAVA", "Java is a general-purpose computer-programming language that is concurrent, class-based, and object-oriented.", "https://diylogodesigns.com/wp-content/uploads/2017/07/java-logo-vector-768x768.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Firebase", "A realtime backend for your web or mobile app", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxS2_g61gBhCB6F1R0rRjRm4mjd6etOIocD7jq2Ae3AKVse7C2", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Perl", "Nicknamed `the Swiss Army chainsaw of scripting languages` because of its flexibility and power.", "http://blogs.perl.org/users/jakeoff/perl-logo.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Mongo", "MongoDB is a cross-platform document-oriented database program.", "http://blogs.perl.org/users/jakeoff/perl-logo.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);


-- Seeds for DevOps
INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("C++", "C++ is a sophisticated, efficient and a general-purpose programming language based on C", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/140px-ISO_C%2B%2B_Logo.svg.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 3);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)

VALUES ("Linux", "Linux is the best-known and most-used open source operating system.", "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 3);

INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Rust", "Rust is a multi-paradigm systems programming language focused on safety, especially safe concurrency.", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/144px-Rust_programming_language_black_logo.svg.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 3);


INSERT INTO Subjects (name, description, image, createdAt, updatedAt, pathid)
VALUES ("Go", "Go (also called GoLang) is a programming language developed by Google engineers to create dependable and efficient software.", "https://sdtimes.com/wp-content/uploads/2018/02/golang.sh_-490x490.png", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 3);



-- FRONT END LANGUAGES-resources

-- Seeds for HTML
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Quick Intro", "A little introduction to HTML from Udemy", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", "https://blog.prototypr.io/a-little-introduction-to-html-2f82cd9f602c" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learn HTML in 12 Minutes", "This is a great introduction to HTML in just a few minutes. You'll get a feel for how HTML files are started along with some basic tags.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qSA_k1iE99Tf-0gAGSdLbgkUTTM7AdX5OFKGRIQqJbEXXqVA", "https://www.youtube.com/watch?v=bWPMSSsVdPk" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learn the Basics of HTML", "Learn the basics of HTML with this interactive Codecademy course. The introduction here gives an overview of the structure, purpose, and syntax of the language.", "https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?", "https://www.codecademy.com/learn/learn-html" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 1);


-- Seeds for CSS
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Build Responsive Real World Websites with HTML5 and CSS3", "The easiest way to learn modern web design, HTML5 and CSS3 step-by-step from scratch. Design AND code a huge project.", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", "https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("A free visual guide to CSS", "Learn by example: cssreference.io is a free visual guide to CSS. It features the most popular properties, and explains them with illustrated and animated examples.", "https://udemy-images.udemy.com/course/750x422/59535_1f48_6.jpg", "https://cssreference.io/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("What Are The Benefits of Using a CSS Framework?", "Learn why to use CSS", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZAKknrDDds6fRgBha2F9qlEBepWVfF0iXQFyCqusmIeWodlR", "https://css-tricks.com/what-are-the-benefits-of-using-a-css-framework/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 2);


-- Seeds for Javascript
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("The Complete JavaScript Course 2019: Build Real Projects!", "Master JavaScript with the most complete course on the market! Projects, challenges, quizzes, ES6+, OOP, AJAX, Webpack", "https://udemy-images.udemy.com/course/750x422/59535_1f48_6.jpg", "https://www.udemy.com/the-complete-javascript-course/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 3);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("JavaScript: Understanding the Weird Parts", "An advanced JavaScript course for everyone! Scope, closures, prototypes, 'this', build your own framework, and more.", "https://udemy-images.udemy.com/course/750x422/59535_1f48_6.jpg", "https://www.udemy.com/understand-javascript/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 3);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("A Beginners Guide to Advanced JavaScript & ES6 - ES2017", "Learn tough topics like: 'this', scope, 'new' , hoisting, ES6, & More! Take your JS knowledge to the next level!", "https://udemy-images.udemy.com/course/750x422/59535_1f48_6.jpg", "https://www.udemy.com/advanced-javascript-course/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 3);



-- Seeds for JQuery
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("The Complete jQuery Course: From Beginner To Advanced!", "Use jQuery to create stunning animations, provide fast feedback forms, handle all user events and perform Ajax calls.", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/jquery-tutorial", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 4);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Introduction to jQuery", "Learn the basics of jQuery, a JavaScript library that allows you to easily add dynamic behavior to static web pages.", "https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?rect=375%2C0%2C2256%2C1412&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548", "https://www.codecademy.com/learn/learn-jquery","2019-01-28 09:00:00", "2019-01-28 09:00:00",  4);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Intro to jQuery-Manipulating Websites with Ease", "This course will teach you how to use jQuery’s core features - DOM element selections, traversal and manipulation.","https://www.t-systems.com/image/579972/4x3/fc/350/263/f251c799283a15515b4fc7b3558c70e9/jH/im-el-udacity-png.png", "https://www.udacity.com/course/intro-to-jquery--ud245", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 4);


-- Seeds for TypeScript
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Introduction to TypeScript 2", "Learn all the basics of TypeScript to build great web applications. TypeScript is the future of web development.", "https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2018/02/22125436/open-edx-banner.jpg", "https://www.edx.org/course/introduction-to-typescript-2-2" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 5);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("TypeScript Fundamentals", "The essential introduction to statically typed JavaScript.", "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png", "https://typescriptcourses.com/typescript-fundamentals" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 5);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Understanding TypeScript", "Don't limit the Usage of TypeScript to Angular 2! Learn the Basics, its Features, Workflows and how to use it!", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/understanding-typescript/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 5);


-- Seeds for Bootstrap
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Get Started with Bootstrap", "An overview of Bootstrap, how to download and use, basic templates and examples, and more.", "http://pluspng.com/img-png/bootstrap-logo-png-logo-228.png", "https://getbootstrap.com/getting-started/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 6);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Getting Started with Bootstrap 3", "Create a Minimal Website Layout", "https://realpython.com/static/real-python-placeholder-4.d9524cd39927.jpg", "http://www.realpython.com/blog/design/getting-started-with-bootstrap-3" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 6);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Bootstrap 4 From Scratch With 5 Projects", "Master the latest version of Bootstrap (4.1.1) and build 5 real world themes while learning HTML5 semantics & CSS3", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/bootstrap-4-from-scratch-with-5-projects/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 6);



-- Seeds for SASS
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Sass Basics", "CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help.", "http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg", "http://sass-lang.com/tutorial.html", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 7);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Advanced CSS and Sass: Flexbox, Grid, Animations and More!", "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/advanced-css-and-sass/", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 7);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("The Sass Course! Learn Sass for Real-World Websites", "No B.S. Guide to Learn Sass, Improve Your Workflow and Style Time-Saving, Clean Websites", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/learn-sass/", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 7);


-- Seeds for React
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Getting Started with React", "This page is an overview of the React documentation and related resources.", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png", "https://facebook.github.io/react/docs/getting-started.html", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 8);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("React Native Express", "Learn React Native, the cross-platform app framework", "http://www.reactnativeexpress.com/fsrn-book@2x.png", "http://www.reactnativeexpress.com/", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 8);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("The Complete Guide (incl. React Router & Redux", "The Complete Guide (incl. React Router & Redux)", "Dive in and learn React from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/react-the-complete-guide-incl-redux/", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 8);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("React Crash Course 2018", "React Tutorial with Examples", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qSA_k1iE99Tf-0gAGSdLbgkUTTM7AdX5OFKGRIQqJbEXXqVA", "https://www.youtube.com/watch?v=Ke90Tje7VS0", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 8);


-- Seeds for Redux
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learn Redux", "In 2.5 hours, You'll build 'Reduxstagram' — a simple photo app that will simplify the core ideas behind Redux, React Router and React.js", "https://learnredux.com/images/RDX/share.png", "https://learnredux.com/", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 9);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Redux Blog", "The simplest React Redux tutorial I wish I had when I started learning", "https://www.valentinog.com/blog/wp-content/uploads/2017/12/redux-react-tutorial-beginner-2018.png", "https://www.valentinog.com/blog/redux/", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 9);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Getting Started with Redux", "The creator of Redux - will teach you how to manage state in your React application with Redux.", "https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/025/full/EGH_Redux-New.png", "https://egghead.io/courses/getting-started-with-redux", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 9);


-- Seeds for Angular JS
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Shaping Up With Angular", "Angular is easy to learn yet powerful enough to help you develop complex single-page web applications. This path includes content covering Angular 2 and beyond.", "https://www.pluralsight.com/content/dam/pluralsight/newsroom/brand-assets/logos/PS_logo_F-11.png", "https://www.pluralsight.com/paths/angular", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 10);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learn AngularJS 1.X", "Learn how to easily build single-page web applications using this popular JavaScript framework.", "https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?rect=375%2C0%2C2256%2C1412&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548", "https://www.codecademy.com/learn/learn-angularjs", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 10);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Angular 7 (formerly Angular 2) - The Complete Guide", "Master Angular (Angular 2+, incl. Angular 7) and build awesome, reactive web apps with the successor of Angular.js", "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/890575/hackr_20logo_20200_20by_20200.png", "https://hackr.io/tutorial/angular-7-the-complete-guide", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 10);

-- Seeds for Vue
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Vue Getting Started Guide", "The complete guidebook to Vue.", "https://vuejs.org/images/logo.png", "https://vuejs.org/guide/","2019-01-28 09:00:00", "2019-01-28 09:00:00", 11);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("The Net Ninja Vue Tutorial Playlist", "Vue JS 2 Tutorial", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qSA_k1iE99Tf-0gAGSdLbgkUTTM7AdX5OFKGRIQqJbEXXqVA", "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa","2019-01-28 09:00:00", "2019-01-28 09:00:00", 11);


-- Seeds for JSON
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("What is JSON?","What It Is, How It Works, & How to Use It", "https://www.copterlabs.com/wp-content/themes/copter-2018/dist/images/logo-copter-white.svg", "http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/","2019-01-28 09:00:00", "2019-01-28 09:00:00", 12);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("JSON Validator", "Test it out.",  "https://wolfpaulus.com/wp-content/uploads/2016/12/jsonlogo.png", "http://jsonlint.com/", "2019-01-28 09:00:00", "2019-01-28 09:00:00",12);


-- BACK END LANGUAGES-resources (node, express, react)
-- Seeds for Node
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Node.js Tutorial- W3 Schools", "Our `Show Node.js` tool makes it easy to learn Node.js, it shows both the code and the result.", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", "https://www.codecademy.com/learn/learn-express" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 13);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("What exactly is Node.js?", "Node.js is a JavaScript runtime environment. Sounds great, but what does that mean? How does that work?", "https://cdn.mos.cms.futurecdn.net/xJGh6cXvC69an86AdrLD98.jpg", "https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 13);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Introduction to NodeJS", "The ultimate beginner guide to creating web applications using Node.js, Express and MongoDB.", "https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2018/02/22125436/open-edx-banner.jpg", "https://www.edx.org/course/introduction-to-nodejs-4" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 13);


-- Seeds for Express
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learn Express", "Learn how to make back-end apps and APIs using the popular Express.js framework", "https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?rect=375%2C0%2C2256%2C1412&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548", "https://www.codecademy.com/learn/learn-express" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 14);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Node.js Express FrameWork Tutorial - Learn in 10 Minutes", "Try this", "https://udemy-images.udemy.com/course/750x422/59535_1f48_6.jpg", "https://blog.prototypr.io/a-little-introduction-to-html-2f82cd9f602c" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 14);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Just Express (with a bunch of node and http). In detail.", "No MERN or MEAN... just Express js. For those who've learned a bit about the most awesome node framework, and want more.", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/just-express-with-a-bunch-of-node-and-http-in-detail/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 14);



-- Seeds for Python
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Python", "Start here", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", "https://www.codecademy.com/learn/python" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 15);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learn X in Y minutes", "Learn Python in one document", "https://udemy-images.udemy.com/course/750x422/59535_1f48_6.jpg", "http://learnxinyminutes.com/docs/python/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 15);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Pip and Virtualenv for Python", "A non-magical introduction to Pip and Virtualenv for Python beginners", "https://static.makeuseof.com/wp-content/uploads/2017/09/HTML-Effects-Featured-670x335.jpg", "https://www.dabapps.com/blog/introduction-to-pip-and-virtualenv-python/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 15);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("REST APIs with Flask and Python", "Build professional REST APIs with Python, Flask, Flask-RESTful, and Flask-SQLAlchemy", "https://static.makeuseof.com/wp-content/uploads/2017/09/HTML-Effects-Featured-670x335.jpg", "https://www.udemy.com/rest-api-flask-and-python/?" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 15);

-- Seeds for Django
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Want to Learn Django?","Start here.", "https://www.tutorialspoint.com/django/images/django-mini-logo.jpg", "http://elweb.co/want-to-learn-django-start-here/", 16);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Django Tutorial for Beginners", "A course for beginners", "https://i.ytimg.com/vi/Sf9h2mpuID0/maxresdefault.jpg", "https://www.tutorialspoint.com/django/", 16);


-- Seeds for Ruby
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learn Ruby", "Learn to program in Ruby, a ﬂexible and beginner-friendly language used to create sites like Codecademy.", "https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?", "https://www.codecademy.com/learn/learn-ruby" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 17);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Ruby on Rails Tutorial", "Learn Web Development with Rails", "https://softcover.s3.amazonaws.com/636/ruby_on_rails_tutorial_4th_edition/images/cover-web.png", "https://www.railstutorial.org/book" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 17);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Ruby on Rails Web Development Specialization", "Become a Rails Developer. Create modern full-stack web applications in five courses.", "https://media.glassdoor.com/companyupdate/w300/654749/coursera-companyupdate-1544639211918.jpg", "https://www.coursera.org/specializations/ruby-on-rails" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 17);


-- Seeds for PHP
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("PHP for Beginners - Become a PHP Master - CMS Project", "PHP for Beginners: learn everything you need to become a professional PHP developer with practical exercises & projects.", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", "https://www.udemy.com/php-for-complete-beginners-includes-msql-object-oriented/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 18);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Make your own blog with PHP", "A small, interactive course to teach beginners the PHP programming language.", "https://static.makeuseof.com/wp-content/uploads/2017/09/HTML-Effects-Featured-670x335.jpg", "https://ilovephp.jondh.me.uk/en/tutorial/make-your-own-blog" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 18);

-- Seeds for JAVA
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Intro to Programming in Java", "Take your first steps towards becoming a Java developer! Learn Java syntax and create conditional statements, loops, and functions.", "https://www.t-systems.com/image/579972/4x3/fc/350/263/f251c799283a15515b4fc7b3558c70e9/jH/im-el-udacity-png.png", "https://www.udacity.com/course/java-programming-basics--ud282","2019-01-28 09:00:00", "2019-01-28 09:00:00", 19);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learn Java", "Learn the basics of the popular Java language in this introductory course.", "https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?rect=375%2C0%2C2256%2C1412&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548", "https://www.codecademy.com/learn/learn-java", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 19);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Java Tutorial for Complete Beginners", "Learn to program using the Java programming language", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/java-tutorial/", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 19);

-- Seeds for Firebase
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("5 Minute Chat Tutorial", "Documentation Overview", "https://firebase.google.com/images/brand-guidelines/logo-standard.png", "https://www.firebase.com/tutorial/#gettingstarted", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 20);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Firebase Tutorials and Courses", "Learn Firebase online from the best Firebase tutorials & courses voted by the programming community.", "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/890575/hackr_20logo_20200_20by_20200.png", "https://hackr.io/tutorials/learn-firebase", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 20);


-- Seeds for Perl
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learn Perl 5 By Doing It", "Learn Perl by actually creating useful, working Perl programs for everything from web scraping to fixing your data.", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/perltutorial/", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 21);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Perl 5 Essential Training", "Learn the basics of Perl syntax, from conditionals, loops, and data structures to regular expressions, functions, and object-oriented programming, and learn how to install and customize Perl scripts.", "https://www.denverlibrary.org/sites/dplorg/files/lynda.jpg", "https://www.lynda.com/Perl-tutorials/Perl-5-Essential-Training/447321-2.html", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 21);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Perl Programming for Beginners", "Design a Perl Application.", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/perl-programming-for-beginners/", 21);

-- Seeds for Mongo
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learning MongoDB", "A comprehensive guide to MongoDB for ultra-fast, fault tolerant management of big data, including advanced data analysis", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/learning-mongodb2/", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 22);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Introduction to MongoDB", "This course will get you up and running with MongoDB quickly, and teach you how to leverage its power for data analytics.", "https://media.glassdoor.com/companyupdate/w300/654749/coursera-companyupdate-1544639211918.jpg", "https://www.coursera.org/learn/introduction-mongodb", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 22);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("MongoDB Basics", "This course will provide an introduction to MongoDB, Compass (the MongoDB GUI), the MongoDB query language, and Atlas, MongoDB's hosted database as a service", "https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2018/02/22125436/open-edx-banner.jpg", "https://www.edx.org/course/mongodb-basics", "2019-01-28 09:00:00", "2019-01-28 09:00:00", 22);



-- DEV OPS LANGUAGES-resources (C++, Linux, Rust, Go)
-- Seeds for Go
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
<<<<<<< HEAD
VALUES ("Advanced C++ Programming Training Course", "Take your C++ Programming Training Course Will Take Your Skills To The Next Level.", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/advanced-c-programming/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 23);
=======

VALUES ("Advanced C++ Programming Training Course", "Take your C++ Programming Training Course Will Take Your Skills To The Next Level.", "https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png", "https://www.udemy.com/advanced-c-programming/?utm_source=adwords-learn&utm_medium=udemyads&utm_campaign=NEW-AW-PROS-TECH-US-DSA-1-EN-ENG_._ci__._sl_ENG_._vi_TECH_._sd_All_._la_EN_._&utm_content=deal4584&utm_term=_._ag_60674438611_._ad_311050878850_._de_c_._dm__._pl__._ti_aud-296047865446:dsa-304639795903_._li_9032076_._pd__._&gclid=Cj0KCQiAheXiBRD-ARIsAODSpWPzP2Mqfg5Soq80T4hfKfsj2kVFZZaUhqQz5O8TonYrfsgfJXUvcesaAvlcEALw_wcB" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 23);
>>>>>>> 288b02dd850d73758f6aa10076fa9e28d5934678

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learn C++", "Learn one of the most powerful programming languages in the world and become a rockstar developer", "https://pentagram-production.imgix.net/1cbbfce1-48d5-4257-95e5-745c10e6492e/eo_codecademy_01.jpg?rect=375%2C0%2C2256%2C1412&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548", "https://www.codecademy.com/learn/learn-c-plus-plus" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 23);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Introduction to C#", "In this course, you will be introduced to the C# language and the world of .NET programming.", "https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2018/02/22125436/open-edx-banner.jpg", "https://www.edx.org/course/introduction-to-c-sharp-3" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 23);



-- Seeds for C++
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)

VALUES ("Introduction to Linux", "Never learned Linux? Want a refresh? Take this course free or get a verified certificate for $99!", "https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2018/02/22125436/open-edx-banner.jpg", "https://www.edx.org/course/introduction-to-linux" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 24);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Introduction to DevOps: Transforming and Improving Operations", "Learn how to transform your organization using the principles and practices of DevOps.", "https://cdn-blog.lawrencemcdaniel.com/wp-content/uploads/2018/02/22125436/open-edx-banner.jpg", "https://www.edx.org/course/introduction-to-devops-transforming-and-improving-operations" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 24);


-- Seeds for Rust
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("The Rust Programming Language Book", "Start here", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", "https://doc.rust-lang.org/book/second-edition/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 25);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("First Look: Rust", "You can build stuff!", "https://www.denverlibrary.org/sites/dplorg/files/lynda.jpg", "https://www.lynda.com/Rust-tutorials/First-Look-Rust/711813-2.html" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 25);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Are We Web Yet?", "Get your first look at Rust, an open-source systems programming language that focuses on speed, memory safety, and parallelism", "https://udemy-images.udemy.com/course/750x422/59535_1f48_6.jpg", "http://www.arewewebyet.org/" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 25);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Why is Rust Difficult?", "Understand Rust.", "https://static.makeuseof.com/wp-content/uploads/2017/09/HTML-Effects-Featured-670x335.jpg", "https://vorner.github.io/difficult.html" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 25);


-- Seeds for Rust
INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)

VALUES ("Learn How To Code: Google's Go (golang) Programming Language", "The Ultimate Comprehensive Course - Perfect for Both Beginners and Experienced Developers", "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/890575/hackr_20logo_20200_20by_20200.png", "https://hackr.io/tutorial/learn-how-to-code-googles-go-golang-programming-language" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 26);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learn Go Programming", "Wanna learn Go? You’re in the right place! This will be a series of tutorials to teach you Go!", "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/890575/hackr_20logo_20200_20by_20200.png", "https://hackr.io/tutorial/learn-go-programming" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 26);

INSERT INTO Resources (name, description, image, link, createdAt, updatedAt, subjectid)
VALUES ("Learn how to build a web application with Go.", "If you are using PHP/Python/Ruby, you will learn how to build a web application with Go.", "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/890575/hackr_20logo_20200_20by_20200.png", "https://hackr.io/tutorial/build-web-application-with-golang" , "2019-01-28 09:00:00", "2019-01-28 09:00:00", 26);

