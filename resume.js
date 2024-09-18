document.addEventListener("DOMContentLoaded", function () {
    console.log("Resume page is loaded");

    const downloadBtn = document.getElementById('download-btn');

    downloadBtn.addEventListener('click', function () {
        // Use jsPDF to create a PDF of the resume
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Title (H1 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(16); // Reduce font size
        doc.setTextColor(44, 62, 80); // Dark color for title
        doc.text("Abdullah Saifi - Full Stack Developer", 20, 25); // Moved down by 5 units

        // Contact Info (normal font size)
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11); // Reduce font size for contact
        doc.setTextColor(51, 51, 51); // Dark grey for contact info
        doc.text("Contact No: 7053851429", 20, 35);  // Adjusted y-position
        doc.text("Email: saifiabduldelhi@gmail.com", 20, 40);
        doc.text("GitHub: github.com/abdulgithub70", 20, 45);
        doc.text("LinkedIn: linkedin.com/in/abdullah-saifi-ba99b32%204a", 20, 50);

        // Section Title (H2 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13); // Reduced font size for headings
        doc.setTextColor(41, 128, 185); // Blue color for section titles
        doc.text("Summary", 20, 65); // Moved down

        // Section Content (normal font size)
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11); // Reduce font size for content
        doc.setTextColor(51, 51, 51); // Dark grey for content
        doc.text("I have a solid understanding of Java and am proficient in React.js, with additional skills in", 20, 70, { maxWidth: 170 });
        doc.text("Java and Python. My experience includes working on both backend and frontend development,", 20, 75, { maxWidth: 170 });
        doc.text("allowing me to handle full-stack projects effectively.", 20, 80, { maxWidth: 170 });

        // Section Title (H2 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Education", 20, 95); // Moved down

        // Education Content
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
        doc.text("Btech Computer Science Engineering, Jamia Hamdard University", 20, 100);
        doc.text("(08/2020 - 07/2024) - CGPA: 6.8/10", 20, 105);
        doc.text("Intermediate, CBSE (05/2018 - 03/2019) - CGPA: 6.1/10", 20, 110);
        doc.text("High School, CBSE (04/2016 - 03/2017) - CGPA: 7.8/10", 20, 115);

        // Section Title (H2 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Skills", 20, 130); // Moved down

        // Skills Content
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
        doc.text("Java | Python | React.js | Node.js | Spring Boot | Spring MVC | Git | GitHub | Linux | SQL | MongoDB", 20, 135, { maxWidth: 170 });

        // Section Title (H2 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Internship", 20, 150); // Moved down

        // Internship Content
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
        doc.text("Full stack development internship where I learned key concepts of Java and gained knowledge", 20, 155, { maxWidth: 170 });
        doc.text("about backend development. I worked on a basic Spring Boot project and also learned React.js", 20, 160, { maxWidth: 170 });
        doc.text("for building websites.", 20, 165, { maxWidth: 170 });

        // Section Title (H2 equivalent)
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(13);
        doc.setTextColor(41, 128, 185);
        doc.text("Projects", 20, 180); // Moved down

        // Projects Content
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
        doc.text("Full-Stack CRUD Application: Developed a comprehensive full-stack application with a Java-", 20, 185, { maxWidth: 170 });
        doc.text("based REST API supporting CRUD operations and a dynamic website using React.js.", 20, 190, { maxWidth: 170 });
        doc.text("Old Car Price Prediction with Machine Learning: Developed a predictive model using linear", 20, 195, { maxWidth: 170 });
        doc.text("regression to estimate the prices of old cars and created a user-friendly website powered by", 20, 200, { maxWidth: 170 });
        doc.text("Flask to display the predictions.", 20, 205, { maxWidth: 170 });

        doc.save('Abdullah_Saifi_Resume.pdf');
    });
});
