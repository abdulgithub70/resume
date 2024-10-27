document.addEventListener("DOMContentLoaded", function () {
    console.log("Resume page is loaded");

    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', function () {
        // Use jsPDF to create a PDF of the resume
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Header
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(16);
        doc.setTextColor(44, 62, 80);
        doc.text("Abdullah Saifi", 20, 20);

        // Contact Info
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
        doc.text("New Delhi, India", 20, 30);
        doc.text("Contact No: +(91)7053851429", 20, 37);
        doc.text("Email: saifiabduldelhi@gmail.com", 20, 44);
        doc.text("LinkedIn: linkedin.com/in/abdullah-saifi-ba99b32%204a", 20, 51);
        doc.text("GitHub: github.com/abdulgithub70", 20, 58);

        // Section: Education
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Education", 20, 70);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
        doc.text("B.Tech Computer Science Engineering, Jamia Hamdard University", 20, 77);
        doc.text("CGPA: 6.8/10", 20, 84);
        doc.text("Intermediate, CBSE (2019) - CGPA: 6.1", 20, 91);
        doc.text("High School, CBSE (2017) - CGPA: 7.8", 20, 98);

        // Section: Skills
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Coursework / Skills", 20, 110);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
        doc.text("DBMS | Operating System | OOPs Concept | Web Development | DSA", 20, 117);

        // Section: Internship
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Internship", 20, 130);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
        doc.text("Alaric Tech Genius | Full Stack Web Development Training (JAVA Track)", 20, 137);
        doc.text("Experience in Java and Spring Boot for backend, React for frontend.", 20, 144);

        // Section: Projects
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Projects", 20, 157);

        doc.setFont('Helvetica', 'bold');
        doc.text("eNoteBook:", 20, 164);
        doc.setFont('Helvetica', 'normal');
        doc.setTextColor(51, 51, 51);
        doc.text("MERN stack note-taking app with secure authentication and CRUD operations.", 20, 171);

        doc.setFont('Helvetica', 'bold');
        doc.text("Voice Powered Expense Tracker:", 20, 185);
        doc.setFont('Helvetica', 'normal');
        doc.text("React app with Context API, Local Storage, and Web Speech API integration.", 20, 192);

        // Section: Technical Skills
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Technical Skills", 20, 205);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
        doc.text("Languages: Java, HTML, CSS, JavaScript, SQL", 20, 212);
        doc.text("Developer Tools: Eclipse IDE, STS, VS Code, IntelliJ", 20, 219);
        doc.text("Technologies: Spring Boot, Spring MVC, ReactJS, NodeJS, ExpressJS, MongoDB,", 20, 226);
        doc.text("MySQL, Git, GitHub", 20, 233);

        // Save the PDF
        doc.save('Abdullah_Saifi_Resume.pdf');
    });
});
