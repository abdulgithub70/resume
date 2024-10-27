document.addEventListener("DOMContentLoaded", function () {
    console.log("Resume page is loaded");

    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', function () {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Header Section
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 0);
        doc.text("Abdullah Saifi", 20, 20);

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(11);
        doc.text("New Delhi, India", 20, 30);
        doc.text("+(91)7053851429 saifiabduldelhi@gmail.com", 20, 36);
        doc.setTextColor(0, 0, 255);
        doc.textWithLink("LinkedIn", 20, 42, { url: "https://linkedin.com/in/abdullah-saifi-ba99b32%204a" });
        doc.textWithLink("GitHub", 55, 42, { url: "https://github.com/abdulgithub70" });

        // Education Section
        doc.setTextColor(0, 0, 0);
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(13);
        doc.text("Education", 20, 55);

        doc.setFont("Helvetica", "bold");
        doc.setFontSize(11);
        doc.text("Jamia Hamdard University", 20, 63);
        doc.setFont("Helvetica", "normal");
        doc.text("Bachelor of Technology in Computer Science Engineering- CGPA- 6.7", 20, 69);
        doc.text("2020-2024", 160, 69, { align: "right" });
        doc.text("Intermediate | CBSE | CGPA- 6.1", 20, 75);
        doc.text("2019", 160, 75, { align: "right" });
        doc.text("High-School | CBSE | CGPA- 7.8", 20, 81);
        doc.text("2017", 160, 81, { align: "right" });

        // Coursework / Skills Section
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(13);
        doc.setTextColor(0, 0, 0);
        doc.text("Coursework / Skills", 20, 95);

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(11);
        doc.text("DBMS             Operating System             OOPs Concept", 20, 102);
        doc.text("Web Development         DSA", 20, 109);

        // Internship Section
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(13);
        doc.text("Internship", 20, 122);

        doc.setFont("Helvetica", "bolditalic");
        doc.setFontSize(11);
        doc.text("Alaric Tech Genius | Full Stack Web Development Training (JAVA Track)", 20, 129);

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(10);
        doc.text("During my Internship, I had the opportunity to work on both backend and frontend development.", 20, 135);
        doc.text("I utilized Java and Spring Boot to build and maintain backend services, ensuring seamless integration", 20, 140);
        doc.text("with the frontend. On the frontend, I worked with React to develop interactive and user-friendly", 20, 145);
        doc.text("web interfaces. This hands-on experience allowed me to strengthen my skills in building full-stack", 20, 150);
        doc.text("applications and collaborating with cross-functional teams.", 20, 155);

        // Projects Section
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(13);
        doc.text("PROJECTS", 20, 170);

        doc.setFont("Helvetica", "bolditalic");
        doc.setFontSize(11);
        doc.text("eNoteBook", 20, 177);
        doc.setFont("Helvetica", "normal");
        doc.text("| MongoDB, Express, React, Node.js and JWT for secure user Authentication.", 50, 177);

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(10);
        doc.text("Developed eNoteBook, a comprehensive note-taking application using the MERN stack", 20, 183);
        doc.text("(MongoDB, Express, React, Node.js). The application enables user to create, edit and organize", 20, 188);
        doc.text("notes with a user-friendly interface. It features user authentication, CRUD operation,", 20, 193);
        doc.text("and persistent storage of notes. JWTs were implemented to handle user login and", 20, 198);
        doc.text("authorization, ensuring that request to the application is authenticated.", 20, 203);

        doc.setFont("Helvetica", "bolditalic");
        doc.setFontSize(11);
        doc.text("Voice Powered Expense Tracker", 20, 215);
        doc.setFont("Helvetica", "normal");
        doc.text("| React, JavaScript, Context API, Local Storage, Web Speech API.", 100, 215);

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(10);
        doc.text("Developed a comprehensive Expense Budget Tracker application using React and", 20, 221);
        doc.text("JavaScript, incorporating advanced features such as state management with context API,", 20, 226);
        doc.text("persistent data storage via Local Storage, and a responsive user interface designed", 20, 231);
        doc.text("with Material UI. A standout feature of the application is the integration of voice", 20, 236);
        doc.text("capabilities allowing users to interact with the tracker through voice commands,", 20, 241);
        doc.text("significantly enhancing accessibility and user experience.", 20, 246);

        // Technical Skills Section
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(13);
        doc.text("TECHNICAL SKILLS", 20, 260);

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(11);
        doc.text("Languages: Java, HTML, CSS, JavaScript, SQL", 20, 267);
        doc.text("Developer Tools: Eclipse IDE, STS, VS Code, IntelliJ", 20, 274);
        doc.text("Technologies: Spring Boot, Spring MVC, ReactJS, NodeJS, ExpressJS, MongoDB, MySQL,", 20, 281);
        doc.text("Git, GitHub", 20, 288);

        // Save the PDF
        doc.save('Abdullah_Saifi_Resume.pdf');
    });
});
