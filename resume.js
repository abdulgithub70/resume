document.addEventListener("DOMContentLoaded", function () {
    console.log("Resume page is loaded");

    const downloadBtn = document.getElementById('download-btn');

    downloadBtn.addEventListener('click', function () {
        // Use jsPDF to create a PDF of the resume
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Title (H1 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(16); // Title font size
        doc.setTextColor(44, 62, 80); // Dark color for title
        doc.text("Abdullah Saifi - Full Stack Developer", 20, 25);

        // Contact Info
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11); // Contact info font size
        doc.setTextColor(51, 51, 51); // Dark grey for contact info
        doc.text("Contact No: 7053851429", 20, 35);  
        doc.text("Email: saifiabduldelhi@gmail.com", 20, 40);
        doc.text("GitHub: github.com/abdulgithub70", 20, 45);
        doc.text("LinkedIn: linkedin.com/in/abdullah-saifi-ba99b32%204a", 20, 50);

        // Section Title (H2 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13); // Section title font size
        doc.setTextColor(41, 128, 185); // Blue color for section titles
        doc.text("Summary", 20, 65);

        // Section Content with increased line spacing
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11); // Content font size
        doc.setTextColor(51, 51, 51);
        doc.text("I have a solid understanding of Java and am proficient in React.js, with additional skills in", 20, 70, { maxWidth: 170 });
        doc.text("Java and Python. My experience includes working on both backend and frontend development,", 20, 76, { maxWidth: 170 }); // Increased y spacing
        doc.text("allowing me to handle full-stack projects effectively.", 20, 82, { maxWidth: 170 });

        // Education Section
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Education", 20, 95);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
        doc.text("Btech Computer Science Engineering, Jamia Hamdard University", 20, 100);
        doc.text("(08/2020 - 07/2024) - CGPA: 6.8/10", 20, 106);
        doc.text("Intermediate, CBSE (05/2018 - 03/2019) - CGPA: 6.1/10", 20, 112);
        doc.text("High School, CBSE (04/2016 - 03/2017) - CGPA: 7.8/10", 20, 118);

        // Skills Section
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Skills", 20, 130);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
        doc.text("Java | Python | React.js | Node.js | Spring Boot | Spring MVC | Git | GitHub | Linux | SQL | MongoDB", 20, 136, { maxWidth: 170 });

        // Internship Section
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Internship", 20, 150);

        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
        doc.text("Full stack development internship where I learned key concepts of Java and gained knowledge", 20, 156, { maxWidth: 170 });
        doc.text("about backend development. I worked on a basic Spring Boot project and also learned React.js", 20, 162, { maxWidth: 170 });
        doc.text("for building websites.", 20, 168, { maxWidth: 170 });

        // Projects Section with Bold Titles
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Projects", 20, 180);

        // Project 1 - Full-Stack CRUD Application (Bold Title)
        doc.setFont('Helvetica', 'bold'); // Bold for project title
        doc.text("Full-Stack CRUD Application:", 20, 186);

        // Project 1 Description
        doc.setFont('Helvetica', 'normal'); // Back to normal font
        doc.setTextColor(51, 51, 51);
        doc.text("Developed a comprehensive full-stack application with a Java-based REST API supporting", 20, 192, { maxWidth: 170 });
        doc.text("CRUD operations and a dynamic website using React.js.", 20, 198, { maxWidth: 170 });

        // Project 2 - Old Car Price Prediction (Bold Title)
        doc.setFont('Helvetica', 'bold'); // Bold for project title
        doc.text("Old Car Price Prediction with Machine Learning:", 20, 204);

        // Project 2 Description
        doc.setFont('Helvetica', 'normal'); // Back to normal font
        doc.setTextColor(51, 51, 51);
        doc.text("Developed a predictive model using linear regression to estimate the prices of old cars and", 20, 210, { maxWidth: 170 });
        doc.text("created a user-friendly website powered by Flask to display the predictions.", 20, 216, { maxWidth: 170 });

        doc.save('Abdullah_Saifi_Resume.pdf');
    });
});
