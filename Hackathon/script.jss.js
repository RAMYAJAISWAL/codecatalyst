// Button actions
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".auth-buttons button:nth-child(1)");
  const signupBtn = document.querySelector(".auth-buttons button:nth-child(2)");
  const downloadBtn = document.querySelector(".download button");

  loginBtn.addEventListener("click", () => {
    alert("Redirecting to login page...");
    // window.location.href = "login.html"; // Uncomment when login page is ready
  });

  signupBtn.addEventListener("click", () => {
    alert("Redirecting to signup page...");
    // window.location.href = "signup.html"; // Uncomment when signup page is ready
  });

  downloadBtn.addEventListener("click", () => {
    alert("Download started!");
    // Add real app download link here
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.getElementById("signupBtn");
    const signupForm = document.getElementById("signupForm");
  
    signupBtn.addEventListener("click", () => {
      signupForm.style.display = "block"; // Show form
      signupBtn.style.display = "none";   // Optional: Hide button after click
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');

    // Toggle to Signup Form
    showSignup.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    // Toggle to Login Form
    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});