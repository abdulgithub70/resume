document.addEventListener("DOMContentLoaded", function () {
    console.log("Resume page is loaded");

    const downloadBtn = document.getElementById('download-btn');

    downloadBtn.addEventListener('click', function () {
        // Use jsPDF to create a PDF of the resume
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Title (H1 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(22);
        doc.setTextColor(44, 62, 80); // Dark color for title
        doc.text("Abdullah Saifi - Full Stack Developer", 20, 20);

        // Contact Info (normal font size)
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(14);
        doc.setTextColor(51, 51, 51); // Dark grey for contact info
        doc.text("Contact No: 7053851429", 20, 40);
        doc.text("Email: saifiabduldelhi@gmail.com", 20, 50);
        doc.text("GitHub: github.com/abdulgithub70", 20, 60);
        doc.text("LinkedIn: linkedin.com/in/abdullah-saifi-ba99b32%204a", 20, 70);

        // Section Title (H2 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(18);
        doc.setTextColor(41, 128, 185); // Blue color for section titles
        doc.text("Summary", 20, 90);

        // Section Content (normal font size)
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(14);
        doc.setTextColor(51, 51, 51); // Dark grey for content
        doc.text("I have a solid understanding of Java and am proficient in React.js, with additional skills in", 20, 100, { maxWidth: 170 });
        doc.text("Java and Python. My experience includes working on both backend and frontend development,", 20, 110, { maxWidth: 170 });
        doc.text("allowing me to handle full-stack projects effectively. I am adept at creating robust server-side", 20, 120, { maxWidth: 170 });
        doc.text("applications as well as dynamic, user-friendly websites.", 20, 130, { maxWidth: 170 });

        // Section Title (H2 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(18);
        doc.setTextColor(41, 128, 185); // Blue color for section titles
        doc.text("Education", 20, 150);

        // Education Content
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(14);
        doc.setTextColor(51, 51, 51);
        doc.text("Btech Computer Science Engineering, Jamia Hamdard University", 20, 160);
        doc.text("(08/2020 - 07/2024) - CGPA: 6.8/10", 20, 170);
        doc.text("Intermediate, CBSE (05/2018 - 03/2019) - CGPA: 6.1/10", 20, 180);
        doc.text("High School, CBSE (04/2016 - 03/2017) - CGPA: 7.8/10", 20, 190);

        // Section Title (H2 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(18);
        doc.setTextColor(41, 128, 185);
        doc.text("Skills", 20, 210);

        // Skills Content
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(14);
        doc.setTextColor(51, 51, 51);
        doc.text("Java | Python | React.js | Node.js | Spring Boot | Spring MVC | Git | GitHub | Linux | SQL | MongoDB", 20, 220, { maxWidth: 170 });

        // Section Title (H2 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(18);
        doc.setTextColor(41, 128, 185);
        doc.text("Internship", 20, 240);

        // Internship Content
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(14);
        doc.setTextColor(51, 51, 51);
        doc.text("Full stack development internship where I learned key concepts of Java and gained knowledge", 20, 250, { maxWidth: 170 });
        doc.text("about backend development. I worked on a basic Spring Boot project and also learned React.js", 20, 260, { maxWidth: 170 });
        doc.text("for building websites.", 20, 270, { maxWidth: 170 });

        // Section Title (H2 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(18);
        doc.setTextColor(41, 128, 185);
        doc.text("Projects", 20, 290);

        // Projects Content
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(14);
        doc.setTextColor(51, 51, 51);
        doc.text("Full-Stack CRUD Application: Developed a comprehensive full-stack application with a Java-", 20, 300, { maxWidth: 170 });
        doc.text("based REST API supporting CRUD operations and a dynamic website using React.js.", 20, 310, { maxWidth: 170 });
        doc.text("Old Car Price Prediction with Machine Learning: Developed a predictive model using linear", 20, 320, { maxWidth: 170 });
        doc.text("regression to estimate the prices of old cars and created a user-friendly website powered by", 20, 330, { maxWidth: 170 });
        doc.text("Flask to display the predictions.", 20, 340, { maxWidth: 170 });

        doc.save('Abdullah_Saifi_Resume.pdf');
    });
});
