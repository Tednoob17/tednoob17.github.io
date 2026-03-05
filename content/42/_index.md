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
    // Convertir les images relatives en URLs absolutes GitHub
    html = html.replace(/src="\.\/([^"]+)"/g, 'src="https://raw.githubusercontent.com/Tednoob17/42/main/$1"');
    html = html.replace(/src="([^"\/][^":]+)"/g, 'src="https://raw.githubusercontent.com/Tednoob17/42/main/$1"');
    document.getElementById("readme-content").innerHTML = html;
  })
  .catch(() => {
    document.getElementById("readme-content").innerHTML = "<p>Could not load README.</p>";
  });
</script>