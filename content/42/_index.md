---
title: "42"
---
<div id="readme-content">Loading...</div>

<script>
  fetch("https://api.github.com/repos/Tednoob17/42/readme", {
    headers: { Accept: "application/vnd.github.html+json" }
  })
  .then(r => r.text())
  .then(html => {
    document.getElementById("readme-content").innerHTML = html;
  })
  .catch(() => {
    document.getElementById("readme-content").innerHTML = "<p>Could not load README.</p>";
  });
</script>