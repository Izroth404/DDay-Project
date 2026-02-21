function addEvent() {
      const input = document.getElementById('new-event');
      const text = input.value.trim();
      if (text) {
        const li = document.createElement('li');
        li.textContent = text;
        li.onclick = () => li.remove(); // click to delete
        document.getElementById('timeline-list').appendChild(li);
        input.value = '';
      }
    }

    function addEvent() {
    const text = document.getElementById('new-event').value;
    if (!text) return;

    // Optional: Ask for a photo URL
    const photoUrl = prompt("Enter the photo URL (or leave blank for default):") || "404.webp";

    const timeline = document.querySelector('.timeline-v2');
    const newItem = document.createElement('div');
    
    const isLeft = timeline.children.length % 2 === 0;
    newItem.className = `timeline-item ${isLeft ? 'left' : 'right'}`;

    newItem.innerHTML = `
        <a href="${photoUrl}" target="_blank" class="icon-link">
            <div class="icon-circle border-blue">
                <span class="icon">✨</span>
            </div>
        </a>
        <div class="content">
            <h3>${text}</h3>
            <p>Tap icon to view memory ❤️</p>
        </div>
    `;

    timeline.appendChild(newItem);
    document.getElementById('new-event').value = "";
}


// document.addEventListener('DOMContentLoaded', () => {
//     const modal = document.getElementById('timeline-popup');
//     const popupBody = document.getElementById('popup-body');
//     const closeBtn = document.querySelector('.close-btn');

//     // Select all icon links
//     const links = document.querySelectorAll('.icon-link');

//     links.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault(); // Stop from opening new tab
//             const url = link.getAttribute('href');
//             popupBody.innerHTML = ''; // Clear previous content

//             if (url.endsWith('.jpeg') || url.endsWith('.jpg') || url.endsWith('.png')) {
//                 // It's a photo
//                 popupBody.innerHTML = `<img src="${url}" alt="Memory">`;
//             } else if (url.endsWith('.mp4')) {
//                 // It's a video
//                 popupBody.innerHTML = `<video controls autoplay style="width:100%"><source src="${url}" type="video/mp4"></video>`;
//             } else if (url.endsWith('.html')) {
//                 // It's another page (like dhurandar.html)
//                 popupBody.innerHTML = `<iframe src="${url}"></iframe>`;
//             }

//             modal.style.display = "block";
//         });
//     });

//     // Close when clicking X
//     closeBtn.onclick = () => modal.style.display = "none";

//     // Close when clicking outside the box
//     window.onclick = (event) => {
//         if (event.target == modal) modal.style.display = "none";
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;

            // Optional: Close other open FAQ items (Accordion Style)
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle the 'active' class on the clicked item
            item.classList.toggle('active');
        });
    });
});

function sendQuestionToWA() {
    const qInput = document.getElementById('user-question-only');
    const question = qInput.value.trim();
    const myNumber = ""; // Your number

    if (question === "") {
        alert("You have to type something first! ❤️");
        return;
    }

    // This creates a link: https://wa.me/number?text=Hi! I have a question: [Question]
    const encodedMsg = encodeURIComponent("Hi! Question from the website: " + question);
    const waLink = `https://wa.me/${myNumber}?text=${encodedMsg}`;

    // Open WhatsApp
    window.open(waLink, '_blank');

    // Optional: Clear the input after sending
    qInput.value = "";
}

function checkSecret(url) {
    // 1. Get the value from the input box
    const userInput = document.getElementById('secret-answer').value.trim().toLowerCase();
    
    // 2. Define the correct answer (no spaces, simplified)
    const correctAnswer = "x^2y^4+xsiny"; 
    // Alternative simpler password if that's too hard:
    const easyPassword = "your_choice"; 

    if (userInput === correctAnswer || userInput === "x2y4+xsiny=0" || userInput === "x^2*y^4+x*siny=0" || userInput === "(x^2*y^4)+(x*siny)=0" ) {
        alert("Correct! Opening the secret chapter... ❤️");
        window.location.href = "htmlfiles/secretpage.html"; // Make sure this file exists!
    } else {
        alert("Not quite! Hint: It's an exact differential equation. 😉");
    }
}

// Function to track visits locally
function trackVisits() {
    let visits = localStorage.getItem('visitCount');
    
    if (visits === null) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    
    localStorage.setItem('visitCount', visits);
    document.getElementById('visit-count').innerText = `You've visited this memory ${visits} times ✨`;
}

// Run the function when the page loads
window.onload = trackVisits;