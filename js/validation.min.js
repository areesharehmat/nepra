document.getElementById("nepraForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let valid = true;

    // Reset errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.querySelectorAll("input").forEach(el => el.classList.remove("error-field"));
    document.getElementById("formMessage").textContent = "";
    document.getElementById("formMessage").className = "";
  // Name
    const name = document.getElementById("name");
    if (name.value.trim().length < 3 || !/^[A-Za-z\s]+$/.test(name.value)) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters and only letters/spaces.";
        name.classList.add("error-field");
        valid = false;
    }

  // Email
    const email = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById("emailError").textContent = "Please enter a valid email (example@domain.com).";
        email.classList.add("error-field");
        valid = false;
    }

  // Phone
  const phone = document.getElementById("phone").value.trim();
  if (!/^\d{10,15}$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone must be 10-15 digits.";
    valid = false;
  } else {
    document.getElementById("phoneError").textContent = "";
  }

  // Company
  const company = document.getElementById("company").value.trim();
  if (company.length < 2) {
    document.getElementById("companyError").textContent = "Company must be at least 2 characters.";
    valid = false;
  } else {
    document.getElementById("companyError").textContent = "";
  }

  // Role
  const role = document.getElementById("role").value.trim();
  if (role.length < 2) {
    document.getElementById("roleError").textContent = "Role must be at least 2 characters.";
    valid = false;
  } else {
    document.getElementById("roleError").textContent = "";
  }

  // Date
  const date = document.getElementById("date").value;
  const today = new Date().toISOString().split("T")[0];
  if (!date || date <= today) {
    document.getElementById("dateError").textContent = "Select a future date.";
    valid = false;
  } else {
    document.getElementById("dateError").textContent = "";
  }

  // Time
  const time = document.getElementById("time").value;
  if (!time) {
    document.getElementById("timeError").textContent = "Please select a time.";
    valid = false;
  } else {
    document.getElementById("timeError").textContent = "";
  }

  // Terms
  const terms = document.getElementById("terms").checked;
  if (!terms) {
    document.getElementById("termsError").textContent = "You must accept the terms.";
    valid = false;
  } else {
    document.getElementById("termsError").textContent = "";
  }

  // Submit if valid
    if (valid) {
        document.getElementById("formMessage").textContent = "Form submitted successfully!";
        document.getElementById("formMessage").classList.add("success");

        // simulate successful submission
        // in production you’d do: this.submit();
    } else {
        document.getElementById("formMessage").textContent = "Please fix the errors above.";
        document.getElementById("formMessage").classList.add("error");
    }
});
