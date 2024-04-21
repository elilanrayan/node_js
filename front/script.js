const formulaire = document.getElementById("formulaire");

formulaire.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);

  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email : email, password : password}),
  });

  const data = await response.json();

  const token = data.token;

  localStorage.setItem("token", token);
  window.location.href = "./profil.html";
});

const getMyProfile = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch("/getMyProfile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  console.log(data);
};



