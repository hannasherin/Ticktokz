document.getElementById("enquiryForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Message
    if (message === "") {
        alert("Please enter your message");
        return;
    }

    // First name
    if (firstname === "") {
        alert("First name is required");
        return;
    }

    // Last name
    if (lastname === "") {
        alert("Last name is required");
        return;
    }

    

    // Email
    if (email === "") {
        alert("Email is required");
        return;
    }

    // Email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    alert("Enquiry submitted successfully! 🎉");

    document.getElementById("enquiryForm").reset();

});