---
title: "42"
---
<style>
  #readme-content table {
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
  }
  #readme-content table th,
  #readme-content table td {
    border: 1px solid #ddd;
    padding: 8px 12px;
    text-align: left;
  }
  #readme-content table th {
    background-color: #f5f5f5;
    font-weight: bold;
  }
  #readme-content table tr:nth-child(even) {
    background-color: #f9f9f9;
  }
</style>

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