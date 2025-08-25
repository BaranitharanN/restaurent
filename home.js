 function updateTime() {
      const now = new Date();
      document.getElementById("current-time").innerText =
        now.toLocaleDateString() + " " + now.toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    window.onload = updateTime;

    function logout() {
      alert("You have been logged out.");
      window.location.href = "login.html"; // change to your login page
    }
