function checkAnswers() {
    let totalMarks = 0;
 // Get Student's Name
 const studentName = document.getElementById("studentName").value;

 // Display Student's Name in the test form
 if (studentName) {
     document.getElementById("displayName").innerText = `Student Name: ${studentName}`;
 } else {
     document.getElementById("displayName").innerText = "Student Name: Not Provided";
 }
    // Question 1 (Yes/No)
    const no1 = document.getElementById("Automated ML").checked;
    const yes1 = document.getElementById("Azure Machine Learning designer").checked;

    // Correct answer for Question 1 is "Artificial intelligence"
    if (yes1 && !no1) {
        totalMarks += 5;
    }

    // Question 2 (Dropdown)
    const question2 = document.getElementById("question2").value;

    // Correct answer for Question 2 is "label"
    if (question2 === "features") {
        totalMarks += 5;
    }
    const selectedWorkloadAI = document.querySelector('input[name="workloadAI"]:checked');

    // Correct answer for Question 1 is "Computer Vision"
    if (selectedWorkloadAI && selectedWorkloadAI.value === "Regression") {
        totalMarks += 5;
    }
    const selectedWork = document.querySelector('input[name="train"]:checked');

    // Correct answer for Question 1 is "Computer Vision"
    if (selectedWork && selectedWork.value === "VALUE2") {
        totalMarks += 5;
    }
    const question5 = document.getElementById("question5").value;

// Correct answer for Question 2 is "label"
if (question5 === "Regression") {
    totalMarks += 5;
}
const isSupervisedChecked = document.getElementById("Python").checked;
    const isUnsupervisedChecked = document.getElementById("R").checked;

    // Correct answers for Question 4 are "Supervised Learning" and "Unsupervised Learning"
    if (isSupervisedChecked) totalMarks += 2.5; // Partial marks for Supervised Learning
    if (isUnsupervisedChecked) totalMarks += 2.5; // Partial marks for Unsupervised Learning

    const question7 = document.getElementById("question7").value;

    // Correct answer for Question 2 is "label"
    if (question7 === "Classification") {
        totalMarks += 5;
    }
    const question8 = document.getElementById("question8").value;

    // Correct answer for Question 2 is "label"
    if (question8 === "Regression") {
        totalMarks += 5;
    }
    const selectWork = document.querySelector('input[name="AI"]:checked');

    // Correct answer for Question 1 is "Computer Vision"
    if (selectWork && selectWork.value === "Yes") {
        totalMarks += 5;
    }
    const selecWork = document.querySelector('input[name="images"]:checked');

    // Correct answer for Question 1 is "Computer Vision"
    if (selecWork && selecWork.value === "11") {
        totalMarks += 5;
    }
    // Display the result
    const resultPage = `result.html?name=${encodeURIComponent(studentName)}&marks=${totalMarks}`;
    window.location.href = resultPage;
}

