// Сабақтар бейнелерінің тізімі
const courses = [
  { title: "HTML & CSS Basics", videoId: "UB1O30fR-EE" },
  { title: "JavaScript Introduction", videoId: "PkZNo7MFNFg" },
  { title: "React for Beginners", videoId: "Ke90Tje7VS0" },
];

// Курстарды көрсету функциясы
function displayCourses() {
  const coursesContainer = document.getElementById("courses");

  courses.forEach(course => {
    const courseDiv = document.createElement("div");
    courseDiv.className = "course";

    courseDiv.innerHTML = `
      <h3>${course.title}</h3>
      <iframe src="https://www.youtube.com/embed/${course.videoId}" allowfullscreen></iframe>
    `;

    coursesContainer.appendChild(courseDiv);
  });
}

// Бетті жүктегенде бейнелерді көрсету
displayCourses();
