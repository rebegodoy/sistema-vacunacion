// login.js - Manejo del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const rol = document.getElementById("rol").value;

  // Por ahora redirige directo al dashboard (mock)
  // Cuando el back esté listo, acá va la llamada a POST /api/login
  console.log("Login:", { usuario, password, rol });

  window.location.href = "dashboard.html";
});