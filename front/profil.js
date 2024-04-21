document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      window.location.href = "./index.html";
    }
  
    const response = await fetch("/getMyProfile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (response.status === 401 || response.status === 403) {
      window.location.href = "./index.html";
      localStorage.removeItem("token");
    }
  
    const data = await response.json();
  
    document.getElementById("email").value = data.email;
    document.getElementById("name").value = data.name;
  });