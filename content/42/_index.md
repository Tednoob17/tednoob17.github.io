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
    border: 1px solid #333;
    padding: 8px 12px;
    text-align: left;
    color: #000;
  }
  #readme-content table th {
    background-color: #ddd;
    font-weight: bold;
    color: #000;
  }
  #readme-content table tr:nth-child(even) {
    background-color: #fff;
  }
  #readme-content table tr:nth-child(odd) {
    background-color: #f0f0f0;
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