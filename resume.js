document.addEventListener("DOMContentLoaded", function() {
    console.log("Resume page is loaded");

    const downloadBtn = document.getElementById('download-btn');

    downloadBtn.addEventListener('click', function() {
        // Use jsPDF to create a PDF of the resume
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text("Abdullah Saifi - Full Stack Developer", 20, 20);
        
        doc.setFontSize(14);
        doc.text("Contact No: 7053851429", 20, 40);
        doc.text("Email: saifiabduldelhi@gmail.com", 20, 50);
        doc.text("GitHub: github.com/abdulgithub70", 20, 60);
        doc.text("LinkedIn: linkedin.com/in/abdullah-saifi-ba99b32%204a", 20, 70);

        doc.setFont('Helvetica', 'bold');
        doc.text("Summary", 20, 90);
        doc.text("I have a solid understanding of Java and am proficient in React.js, with additional skills in JavaScript and Python. My experience includes working on both backend and frontend development, allowing me to handle full-stack projects effectively. I am adept at creating robust server-side applications as well as dynamic, user-friendly websites.", 20, 100, { maxWidth: 170 });

        doc.setFont('Helvetica', 'bold');
        doc.text("Education", 20, 135);
        doc.text("Btech Computer Science Engineering, Jamia Hamdard University (08/2020 - 07/2024) - CGPA: 6.8/10", 20, 140);
        doc.text("Intermediate, CBSE (05/2018 - 03/2019) - CGPA: 6.1/10", 20, 150);
        doc.text("High School, CBSE (04/2016 - 03/2017) - CGPA: 7.8/10", 20, 160);


        doc.setFont('Helvetica', 'bold');
        doc.text("Skills", 20, 180);
        doc.text("Java, HTML, CSS, JavaScript, Node.js, Express.js, React.js, Spring Boot, Python, Spring MVC, SQL, MongoDB", 20, 190, { maxWidth: 170 });

        doc.setFont('Helvetica', 'bold');
        doc.text("Internship", 20, 210);
        doc.text("Full stack development internship where I learned key concepts of Java and gained knowledge about backend development. I worked on a basic Spring Boot project and also learned React.js for building websites.", 20, 220, { maxWidth: 170 });

        doc.setFont('Helvetica', 'bold');
        doc.text("Projects", 20, 240);
        doc.text("Full-Stack CRUD Application: Developed a comprehensive full-stack application with a Java-based REST API supporting CRUD operations and a dynamic website using React.js.", 20, 250, { maxWidth: 170 });
        doc.text("Old Car Price Prediction with Machine Learning: Developed a predictive model using linear regression to estimate the prices of old cars and created a user-friendly website powered by Flask to display the predictions.", 20, 270, { maxWidth: 170 });

        doc.save('Abdullah_Saifi_Resume.pdf');
    });
});
