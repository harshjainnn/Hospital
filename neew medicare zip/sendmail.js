function SendMail() {
    var fullName = document.getElementById("fullName").value;
    var phoneNumber = document.getElementById("number").value;
    var emailId = document.getElementById("email_id").value;
    var dateAppointment = document.getElementById("date").value;
    var message = document.getElementById("message").value;

    if (!/^[a-zA-Z\s]*$/.test(fullName)) {
        alert("Please enter a valid name.");
        return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
        alert("Please enter a valid phone number.");
        return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailId)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!fullName || !phoneNumber || !emailId || !dateAppointment || !message) {
        alert("Please fill all the fields.");
        return; 
    }

    var params = {
        from_name: "Harsh Jain",
        to_name: fullName,
        phone_number: phoneNumber,
        email_id: emailId,
        date_appointment: dateAppointment,
        message: message
    };

    try {
        emailjs.send("service_45tsx98", "template_i1msqgt", params).then(function(response) {
            alert("Your appointment has been scheduled!");
            console.log("Email sent, status: " + response.status);
        }, function(error) {
            console.log("Failed to send email: ", error);
        });
    } catch (error) {
        console.log("Caught an error: ", error);
    }
}
