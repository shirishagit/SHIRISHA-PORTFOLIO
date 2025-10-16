
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
});

const educationData = [
  {
    institution: "Andhra Mahila Sabha Arts and Science College for Women",
    degree: "Bachelor of Administration (B.A.)",
    year: "2022 – 2025",
    location: "Hyderabad, India"
  }
];

const educationList = document.getElementById('education-list');
educationData.forEach(edu => {
  const card = document.createElement('div');
  card.className = 'education-card';
  card.innerHTML = `
    <h3>${edu.degree}</h3>
    <p><strong>Institution:</strong> ${edu.institution}</p>
    <p><strong>Location:</strong> ${edu.location}</p>
    <p><strong>Year:</strong> ${edu.year}</p>
  `;
  educationList.appendChild(card);
});