let accessToken;

document.getElementById("loginBtn").addEventListener("click", async () => {
  const username = document.getElementById("#username_input").value;
  const password = document.getElementById("#password_input").value;

  const response = await fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();

  if (data.accessToken) {
    accessToken = data.accessToken;
    document.getElementById(
      "output"
    ).innerHTML = `Logged in. Access token: ${accessToken}`;
  } else {
    document.getElementById("output").innerHTML = `Invalid credentials`;
  }
});

document
  .getElementById("accessProtectedBtn")
  .addEventListener("click", async () => {
    const response = await fetch("/protected", {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const data = await response.json();
    document.getElementById(
      "output"
    ).innerHTML = `Protected data: ${JSON.stringify(data)}`;
  });

document.getElementById("refreshBtn").addEventListener("click", async () => {
  const response = await fetch("/token", { method: "POST" });
  const data = await response.json();
  accessToken = data.accessToken;
  document.getElementById(
    "output"
  ).innerHTML = `Token refreshed. New access token: ${accessToken}`;
});

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await fetch("/logout", { method: "POST" });
  accessToken = null;
  document.getElementById("output").innerHTML = "Logged out";
});
