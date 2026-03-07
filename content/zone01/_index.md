<div class="panel-overlay" id="overlay" onclick="closePanel()"></div>
<div class="panel" id="panel">
  <div class="panel-bar">
    <span class="panel-name" id="panel-name">—</span>
    <div class="panel-links">
      <a class="panel-link" id="panel-link-pub" href="#" target="_blank">↗ public.01-edu.org</a>
      <a class="panel-link" id="panel-link-gh" href="#" target="_blank">↗ GitHub</a>
    </div>
    <button class="panel-close" onclick="closePanel()">✕</button>
  </div>
  <div class="panel-body" id="panel-body">
    <div class="panel-loading">
      <div class="panel-loading-dot"></div>
      <div class="panel-loading-dot"></div>
      <div class="panel-loading-dot"></div>
    </div>
  </div>
</div>

<!-- ── HEADER ── -->
<header>
  <div class="wrap">
    <div class="header-inner">
      <a class="logo" href="#">
        <div class="logo-box">01</div>
        <div class="logo-text">
          <div class="t">Zone<span>01</span></div>
          <div class="s">Curriculum Map</div>
        </div>
      </a>
      <nav class="nav">
        <a href="#piscines">Piscines</a>
        <a href="#branches">Branches</a>
        <a href="#tools">Outils</a>
        <a href="#repos">Repos</a>
      </nav>
      <a class="gh-link" href="https://github.com/01-edu/public" target="_blank">↗ 01-edu/public</a>
    </div>
  </div>
</header>

<!-- ── HERO ── -->
<section class="hero">
  <div class="wrap">
    <div class="hero-glow"></div>
    <div class="eyebrow">Zone01 · École par les pairs · Curriculum open-source</div>
    <h1><span class="d">Learn by</span> <span class="h">doing.</span><br><span class="d">Build by</span> <span class="h">failing.</span></h1>
    <div class="hero-stats">
      <div><div class="hstat-n">24</div><div class="hstat-l">Mois total</div></div>
      <div><div class="hstat-n">4</div><div class="hstat-l">Piscines</div></div>
      <div><div class="hstat-n">130+</div><div class="hstat-l">Exercices Go</div></div>
      <div><div class="hstat-n">92+</div><div class="hstat-l">Exercices Rust</div></div>
      <div><div class="hstat-n">8</div><div class="hstat-l">Branches</div></div>
    </div>
    <p>// Cliquez sur un exercice pour lire son énoncé directement ici<br>// Source → github.com/01-edu/public · public.01-edu.org</p>
  </div>
</section>

<!-- ── PHASES ── -->
<section class="sec">
  <div class="wrap">
    <div class="sec-head"><span class="sec-tag">01</span><h2 class="sec-title">Structure du cursus</h2></div>
    <div class="phases rev">
      <div class="phase">
        <div class="phase-n">01</div>
        <div class="ppill" style="background:rgba(57,255,143,.1);color:var(--accent);border:1px solid rgba(57,255,143,.2);">Sélection</div>
        <div class="phase-title">Go Piscine</div>
        <div class="phase-dur">⏱ 4 semaines</div>
        <div class="phase-desc">Programme de sélection. Intro CLI et programmation via Go. Seuls les candidats retenus deviennent étudiants.</div>
        <div class="phase-foot">12 Quests · 4 Exams · 3 Raids</div>
        <div class="phase-bar" style="background:var(--accent);"></div>
      </div>
      <div class="phase">
        <div class="phase-n">02</div>
        <div class="ppill" style="background:rgba(162,89,255,.1);color:var(--ai);border:1px solid rgba(162,89,255,.2);">Socle</div>
        <div class="phase-title">Curriculum Global</div>
        <div class="phase-dur">⏱ 18 mois</div>
        <div class="phase-desc">4 piscines (Go, JS, Rust, Java) + 50+ projets. Objectif : niveau mid-to-senior Full Stack.</div>
        <div class="phase-foot">4 Piscines · 50+ Projets · Groupes &amp; Solo</div>
        <div class="phase-bar" style="background:var(--ai);"></div>
      </div>
      <div class="phase">
        <div class="phase-n">03</div>
        <div class="ppill" style="background:rgba(255,140,66,.1);color:var(--blockchain);border:1px solid rgba(255,140,66,.2);">Spécialisation</div>
        <div class="phase-title">Branches</div>
        <div class="phase-dur">⏱ 6 mois</div>
        <div class="phase-desc">8 branches thématiques. Chaque branche = piscine intro + 4 à 8 projets approfondis.</div>
        <div class="phase-foot">AI · Blockchain · DevOps · Cyber · Mobile · Java · Games · UX</div>
        <div class="phase-bar" style="background:var(--blockchain);"></div>
      </div>
    </div>
  </div>
</section>

<!-- ── PISCINES ── -->
<section class="sec" id="piscines">
  <div class="wrap">
    <div class="sec-head">
      <span class="sec-tag">02</span>
      <h2 class="sec-title">Piscines — Exercices par Quest</h2>
      <span class="sec-sub">💡 Cliquez sur un exercice pour lire l'énoncé</span>
    </div>

    <!-- GO -->
    <div class="pool rev">
      <div class="pool-hd">
        <div class="pool-ico" style="background:rgba(0,172,215,.12);color:var(--go);">Go</div>
        <div>
          <div class="pool-name" style="color:var(--go);">Piscine Go — Sélection (4 semaines)</div>
          <div class="pool-meta">12 Quests · 4 Exams · 3 Raids · Shell + Golang · Testée via go-tests (Docker)</div>
        </div>
        <a class="pool-lnk" href="https://github.com/01-edu/public/tree/master/subjects" target="_blank">↗ Sujets</a>
      </div>
      <div class="quests">

        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 01</span><span class="q-title">Introduction au Shell</span><span class="q-notion">CLI · curl · chmod · find · grep · jq</span><span class="q-count">13 ex</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--go)">
            <div class="ex" onclick="openSubject('introduction')"><span class="ex-n">introduction</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('make-it-better')"><span class="ex-n">make-it-better</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('to-git-or-not-to-git')"><span class="ex-n">to-git-or-not-to-git</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('who-are-you')"><span class="ex-n">who-are-you</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('cl-camp1')"><span class="ex-n">cl-camp1</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('cl-camp2')"><span class="ex-n">cl-camp2</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('cl-camp3')"><span class="ex-n">cl-camp3</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('cl-camp4')"><span class="ex-n">cl-camp4</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('cl-camp5')"><span class="ex-n">cl-camp5</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('cl-camp6')"><span class="ex-n">cl-camp6</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('cl-camp7')"><span class="ex-n">cl-camp7</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('cl-camp8')"><span class="ex-n">cl-camp8</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('now-get-to-work')"><span class="ex-n">now-get-to-work</span><span class="ex-view-icon">⊞</span></div>
          </div>
        </div>

        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 02</span><span class="q-title">Go — Variables, Boucles, If/Else, PrintRune</span><span class="q-notion">Loops · ASCII · z01.PrintRune</span><span class="q-count">8 ex</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--go)">
            <div class="ex" onclick="openSubject('printalphabet')"><span class="ex-n">printalphabet</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('printreversealphabet')"><span class="ex-n">printreversealphabet</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('printdigits')"><span class="ex-n">printdigits</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('isnegative')"><span class="ex-n">isnegative</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('printcomb')"><span class="ex-n">printcomb</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('printcomb2')"><span class="ex-n">printcomb2</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('printnbr')"><span class="ex-n">printnbr</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('printcombn')"><span class="ex-n">printcombn</span><span class="ex-view-icon">⊞</span></div>
          </div>
        </div>

        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 03</span><span class="q-title">Strings, Pointers, Range Loops</span><span class="q-notion">Modulo · Division · Pointeurs · atoi</span><span class="q-count">11 ex + Exam 1 + Raid 1</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--go)">
            <div class="ex" onclick="openSubject('pointone')"><span class="ex-n">pointone</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('ultimatepointone')"><span class="ex-n">ultimatepointone</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('divmod')"><span class="ex-n">divmod</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('ultimatedivmod')"><span class="ex-n">ultimatedivmod</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('printstr')"><span class="ex-n">printstr</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('strlen')"><span class="ex-n">strlen</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('swap')"><span class="ex-n">swap</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('strrev')"><span class="ex-n">strrev</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('basicatoi')"><span class="ex-n">basicatoi</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('atoi')"><span class="ex-n">atoi</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('sortintegertable')"><span class="ex-n">sortintegertable</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex ex-special"><span class="badge badge-exam">Exam 1</span><span class="ex-n" style="color:var(--muted);margin-left:.4rem;">4h — Quests 2 &amp; 3</span></div>
            <div class="ex ex-special"><span class="badge badge-raid">Raid 1</span><span class="ex-n" style="color:var(--muted);margin-left:.4rem;">Square Drawing — Projet groupe</span></div>
          </div>
        </div>

        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 04</span><span class="q-title">Algorithmique — Récursion &amp; Itération</span><span class="q-notion">Fibonacci · Primes · Factorial</span><span class="q-count">9 ex</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--go)">
            <div class="ex" onclick="openSubject('iterativefactorial')"><span class="ex-n">iterativefactorial</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('recursivefactorial')"><span class="ex-n">recursivefactorial</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('iterativepower')"><span class="ex-n">iterativepower</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('recursivepower')"><span class="ex-n">recursivepower</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('fibonacci')"><span class="ex-n">fibonacci</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('sqrt')"><span class="ex-n">sqrt</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('isprime')"><span class="ex-n">isprime</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('findnextprime')"><span class="ex-n">findnextprime</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('eightqueens')"><span class="ex-n">eightqueens</span><span class="ex-view-icon">⊞</span></div>
          </div>
        </div>

        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 05</span><span class="q-title">Strings avancées, Runes, Bytes, Bases</span><span class="q-notion">toupper · capitalize · printnbrbase</span><span class="q-count">18 ex</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--go)">
            <div class="ex" onclick="openSubject('firstrune')"><span class="ex-n">firstrune</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('nrune')"><span class="ex-n">nrune</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('lastrune')"><span class="ex-n">lastrune</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('index')"><span class="ex-n">index</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('compare')"><span class="ex-n">compare</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('toupper')"><span class="ex-n">toupper</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('tolower')"><span class="ex-n">tolower</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('capitalize')"><span class="ex-n">capitalize</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('isalpha')"><span class="ex-n">isalpha</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('isnumeric')"><span class="ex-n">isnumeric</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('islower')"><span class="ex-n">islower</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('isupper')"><span class="ex-n">isupper</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('isprintable')"><span class="ex-n">isprintable</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('concat')"><span class="ex-n">concat</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('basicjoin')"><span class="ex-n">basicjoin</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('join')"><span class="ex-n">join</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('printnbrbase')"><span class="ex-n">printnbrbase</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('atoibase')"><span class="ex-n">atoibase</span><span class="ex-view-icon">⊞</span></div>
          </div>
        </div>

        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 06-07</span><span class="q-title">Os.Args, Make &amp; Append, Slices</span><span class="q-notion">Arguments · Slices · Memory</span><span class="q-count">9 ex + Exam 2 + Raid 2</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--go)">
            <div class="ex" onclick="openSubject('printprogramname')"><span class="ex-n">printprogramname</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('printparams')"><span class="ex-n">printparams</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('revparams')"><span class="ex-n">revparams</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('sortparams')"><span class="ex-n">sortparams</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('makerange')"><span class="ex-n">makerange</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('concatparams')"><span class="ex-n">concatparams</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('splitwhitespaces')"><span class="ex-n">splitwhitespaces</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('split')"><span class="ex-n">split</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('convertbase')"><span class="ex-n">convertbase</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex ex-special"><span class="badge badge-exam">Exam 2</span><span class="ex-n" style="color:var(--muted);margin-left:.4rem;">4h — Quests 2 à 6</span></div>
            <div class="ex ex-special"><span class="badge badge-raid">Raid 2</span><span class="ex-n" style="color:var(--muted);margin-left:.4rem;">Sudoku — résolution algorithmique</span></div>
          </div>
        </div>

        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 08-09</span><span class="q-title">Structs, Fichiers, Fonctions en argument</span><span class="q-notion">Struct · File I/O · Higher order · map/foreach</span><span class="q-count">12 ex + Exam 3 + Raid 3</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--go)">
            <div class="ex" onclick="openSubject('boolean')"><span class="ex-n">boolean</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('point')"><span class="ex-n">point</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('displayfile')"><span class="ex-n">displayfile</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('cat')"><span class="ex-n">cat</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('ztail')"><span class="ex-n">ztail</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('foreach')"><span class="ex-n">foreach</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('map')"><span class="ex-n">map</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('any')"><span class="ex-n">any</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('countif')"><span class="ex-n">countif</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('issorted')"><span class="ex-n">issorted</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('doop')"><span class="ex-n">doop</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('sortwordarr')"><span class="ex-n">sortwordarr</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex ex-special"><span class="badge badge-exam">Exam 3</span><span class="ex-n" style="color:var(--muted);margin-left:.4rem;">4h — Quests 2 à 8</span></div>
            <div class="ex ex-special"><span class="badge badge-raid">Raid 3</span><span class="ex-n" style="color:var(--muted);margin-left:.4rem;">File Reader — Manipulation de fichiers</span></div>
          </div>
        </div>

        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 10</span><span class="q-title">Hackathon — Tous concepts en équipe</span><span class="q-notion">rot · enigma · activebits · compact</span><span class="q-count">12 ex</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--go)">
            <div class="ex" onclick="openSubject('rot14')"><span class="ex-n">rot14</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('abort')"><span class="ex-n">abort</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('collatzcountdown')"><span class="ex-n">collatzcountdown</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('comcheck')"><span class="ex-n">comcheck</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('enigma')"><span class="ex-n">enigma</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('pilot')"><span class="ex-n">pilot</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('fixthemain')"><span class="ex-n">fixthemain</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('compact')"><span class="ex-n">compact</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('activebits')"><span class="ex-n">activebits</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('max')"><span class="ex-n">max</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('unmatch')"><span class="ex-n">unmatch</span><span class="ex-view-icon">⊞</span></div>
          </div>
        </div>

        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 11-12</span><span class="q-title">Linked Lists &amp; Binary Trees</span><span class="q-notion">Data structures · Pointers · Recursion</span><span class="q-count">15 ex + Exam 4 QUAD</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--go)">
            <div class="ex" onclick="openSubject('listpushback')"><span class="ex-n">listpushback</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('listpushfront')"><span class="ex-n">listpushfront</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('listsize')"><span class="ex-n">listsize</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('listlast')"><span class="ex-n">listlast</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('listreverse')"><span class="ex-n">listreverse</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('listforeach')"><span class="ex-n">listforeach</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('listremoveif')"><span class="ex-n">listremoveif</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('listmerge')"><span class="ex-n">listmerge</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('listsort')"><span class="ex-n">listsort</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('sortlistinsert')"><span class="ex-n">sortlistinsert</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('btreeinsertdata')"><span class="ex-n">btreeinsertdata</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('btreeapplyinorder')"><span class="ex-n">btreeapplyinorder</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('btreesearchitem')"><span class="ex-n">btreesearchitem</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('btreelevelcount')"><span class="ex-n">btreelevelcount</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('btreeisbinary')"><span class="ex-n">btreeisbinary</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex ex-special"><span class="badge badge-exam">Exam 4</span><span class="ex-n" style="color:var(--muted);margin-left:.4rem;">8h QUAD — Examen final</span></div>
          </div>
        </div>

      </div>
    </div>

    <!-- RUST -->
    <div class="pool rev">
      <div class="pool-hd">
        <div class="pool-ico" style="background:rgba(247,76,0,.12);color:var(--rust);">Rs</div>
        <div>
          <div class="pool-name" style="color:var(--rust);">Piscine Rust (4 semaines)</div>
          <div class="pool-meta">9 Quests · 3 Raids · Performance · Memory Safety · Testée via rust-tests (Docker)</div>
        </div>
        <a class="pool-lnk" href="https://github.com/Tednoob17/Zone01-Rust-Pool" target="_blank">↗ Exemple étudiant</a>
      </div>
      <div class="quests">
        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 01</span><span class="q-title">Types de base, Fonctions, Structs</span><span class="q-notion">Scalars · Conversions · Tuples</span><span class="q-count">11 ex</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--rust)">
            <div class="ex" onclick="openSubject('fibonacci2')"><span class="ex-n">fibonacci2</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('scalar')"><span class="ex-n">scalar</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('temperature_conv')"><span class="ex-n">temperature_conv</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('looping')"><span class="ex-n">looping</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('speed_transformation')"><span class="ex-n">speed_transformation</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('groceries')"><span class="ex-n">groceries</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('reverse_string')"><span class="ex-n">reverse_string</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('find_factorial')"><span class="ex-n">find_factorial</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('matrix_transposition')"><span class="ex-n">matrix_transposition</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('division_and_remainder')"><span class="ex-n">division_and_remainder</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('tuples')"><span class="ex-n">tuples</span><span class="ex-view-icon">⊞</span></div>
          </div>
        </div>
        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 02</span><span class="q-title">Ownership, Borrow Checker, Références</span><span class="q-notion">Move · Copy · &amp;ref · &amp;mut</span><span class="q-count">10 ex</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--rust)">
            <div class="ex" onclick="openSubject('ownership')"><span class="ex-n">ownership</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('copy')"><span class="ex-n">copy</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('borrow')"><span class="ex-n">borrow</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('doubtful')"><span class="ex-n">doubtful</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('borrow_me_the_reference')"><span class="ex-n">borrow_me_the_reference</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('changes')"><span class="ex-n">changes</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('string_literals')"><span class="ex-n">string_literals</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('name_initials')"><span class="ex-n">name_initials</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('arrange_it')"><span class="ex-n">arrange_it</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('tic_tac_toe')"><span class="ex-n">tic_tac_toe</span><span class="ex-view-icon">⊞</span></div>
          </div>
        </div>
        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 03</span><span class="q-title">Structs, Strings, HashMaps</span><span class="q-notion">Hashing · Edit distance · Collections</span><span class="q-count">12 ex</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--rust)">
            <div class="ex" onclick="openSubject('circle')"><span class="ex-n">circle</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('card_deck')"><span class="ex-n">card_deck</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('arrays')"><span class="ex-n">arrays</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('strings')"><span class="ex-n">strings</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('edit_distance')"><span class="ex-n">edit_distance</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('to_url')"><span class="ex-n">to_url</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('capitalizing')"><span class="ex-n">capitalizing</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('hashing')"><span class="ex-n">hashing</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('string_permutation')"><span class="ex-n">string_permutation</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('bigger')"><span class="ex-n">bigger</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('simple_hash')"><span class="ex-n">simple_hash</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('collect')"><span class="ex-n">collect</span><span class="ex-view-icon">⊞</span></div>
          </div>
        </div>
        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 04-05</span><span class="q-title">Error Handling, Enums, Option/Result</span><span class="q-notion">Option · Result · ? · panic!</span><span class="q-count">15 ex</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--rust)">
            <div class="ex" onclick="openSubject('unwrap_or_expect')"><span class="ex-n">unwrap_or_expect</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('panic')"><span class="ex-n">panic</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('handling')"><span class="ex-n">handling</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('profanity_filter')"><span class="ex-n">profanity_filter</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('question_mark')"><span class="ex-n">question_mark</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('banner')"><span class="ex-n">banner</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('cipher')"><span class="ex-n">cipher</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('error_types')"><span class="ex-n">error_types</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('boxing_todo')"><span class="ex-n">boxing_todo</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('macro_calculator')"><span class="ex-n">macro_calculator</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('shopping_mall')"><span class="ex-n">shopping_mall</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('mobs')"><span class="ex-n">mobs</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('does_it_fit')"><span class="ex-n">does_it_fit</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('middle_day')"><span class="ex-n">middle_day</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('expected_variable')"><span class="ex-n">expected_variable</span><span class="ex-view-icon">⊞</span></div>
          </div>
        </div>
        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 06</span><span class="q-title">Traits, Génériques, Algèbre linéaire</span><span class="q-notion">impl Trait · Generics · Matrix · Lifetimes</span><span class="q-count">16 ex</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--rust)">
            <div class="ex" onclick="openSubject('traits')"><span class="ex-n">traits</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('lifetimes')"><span class="ex-n">lifetimes</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('lalgebra_scalar')"><span class="ex-n">lalgebra_scalar</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('matrix')"><span class="ex-n">matrix</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('matrix_ops')"><span class="ex-n">matrix_ops</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('matrix_mult')"><span class="ex-n">matrix_mult</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('lalgebra_vector')"><span class="ex-n">lalgebra_vector</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('blood_types')"><span class="ex-n">blood_types</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('border_cross')"><span class="ex-n">border_cross</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('roman_numbers')"><span class="ex-n">roman_numbers</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('generics')"><span class="ex-n">generics</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('roman_numbers_iter')"><span class="ex-n">roman_numbers_iter</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('vector_operations')"><span class="ex-n">vector_operations</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('events')"><span class="ex-n">events</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('delete_prefix')"><span class="ex-n">delete_prefix</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('commits_stats')"><span class="ex-n">commits_stats</span><span class="ex-view-icon">⊞</span></div>
          </div>
        </div>
        <div class="quest">
          <div class="q-head" onclick="tog(this)"><span class="q-num">Quest 07-08-09</span><span class="q-title">Smart Pointers, Closures, Iterators</span><span class="q-notion">Box · Rc · RefCell · FnMut · Iterator trait</span><span class="q-count">27 ex</span><span class="q-tog">▾</span></div>
          <div class="q-body" style="--ex-c:var(--rust)">
            <div class="ex" onclick="openSubject('box_it')"><span class="ex-n">box_it</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('borrow_box')"><span class="ex-n">borrow_box</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('box_recursion')"><span class="ex-n">box_recursion</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('how_many_references')"><span class="ex-n">how_many_references</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('ref_cell')"><span class="ex-n">ref_cell</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('drop_the_thread')"><span class="ex-n">drop_the_thread</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('closures')"><span class="ex-n">closures</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('sales')"><span class="ex-n">sales</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('adding')"><span class="ex-n">adding</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('get_products')"><span class="ex-n">get_products</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('highest')"><span class="ex-n">highest</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('iterators')"><span class="ex-n">iterators</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('slices_to_map')"><span class="ex-n">slices_to_map</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('step_iterator')"><span class="ex-n">step_iterator</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('project_motion')"><span class="ex-n">project_motion</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('stars')"><span class="ex-n">stars</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('pangram')"><span class="ex-n">pangram</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('diamond_creation')"><span class="ex-n">diamond_creation</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('scores')"><span class="ex-n">scores</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('pig_latin')"><span class="ex-n">pig_latin</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('spelling')"><span class="ex-n">spelling</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('rgb_match')"><span class="ex-n">rgb_match</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('rot')"><span class="ex-n">rot</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('logic_number')"><span class="ex-n">logic_number</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('searching')"><span class="ex-n">searching</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('talking')"><span class="ex-n">talking</span><span class="ex-view-icon">⊞</span></div>
            <div class="ex" onclick="openSubject('ordinal')"><span class="ex-n">ordinal</span><span class="ex-view-icon">⊞</span></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ── BRANCHES ── -->
<section class="sec" id="branches">
  <div class="wrap">
    <div class="sec-head"><span class="sec-tag">03</span><h2 class="sec-title">Les 8 Branches — 6 mois de spécialisation</h2><span class="sec-sub">Repos dédiés par branche</span></div>
    <div class="branches rev">
      <a class="br" href="https://github.com/01-edu/Branch-AI" target="_blank">
        <div class="br-glow" style="background:var(--ai);"></div>
        <div class="br-top"><span class="br-ico">🧠</span><span class="br-dur">6 mois</span></div>
        <div class="br-name" style="color:var(--ai);">Artificial Intelligence</div>
        <div class="br-desc">ML, deep learning, NLP, image processing. Cas réels : finance, vision, traitement du langage naturel.</div>
        <div class="br-stack"><span class="stag">Python</span><span class="stag">TensorFlow</span><span class="stag">Pandas</span><span class="stag">Sklearn</span><span class="stag">NLP</span></div>
        <div class="br-bar" style="background:var(--ai);"></div>
      </a>
      <a class="br" href="https://github.com/01-edu/Branch-Blockchain" target="_blank">
        <div class="br-glow" style="background:var(--blockchain);"></div>
        <div class="br-top"><span class="br-ico">⛓️</span><span class="br-dur">6 mois</span></div>
        <div class="br-name" style="color:var(--blockchain);">Blockchain &amp; Crypto</div>
        <div class="br-desc">Smart contracts, DeFi, NFTs. Développement dApps avec Solidity et Web3.</div>
        <div class="br-stack"><span class="stag">Solidity</span><span class="stag">Ethereum</span><span class="stag">Web3.js</span><span class="stag">Hardhat</span><span class="stag">React</span></div>
        <div class="br-bar" style="background:var(--blockchain);"></div>
      </a>
      <a class="br" href="https://github.com/01-edu/public/tree/master/subjects" target="_blank">
        <div class="br-glow" style="background:var(--devops);"></div>
        <div class="br-top"><span class="br-ico">☁️</span><span class="br-dur">6 mois</span></div>
        <div class="br-name" style="color:var(--devops);">Cloud DevOps</div>
        <div class="br-desc">Déploiement réseau, serveurs, IaC, CI/CD, conteneurisation et orchestration Kubernetes.</div>
        <div class="br-stack"><span class="stag">Docker</span><span class="stag">Kubernetes</span><span class="stag">Terraform</span><span class="stag">Jenkins</span><span class="stag">AWS</span></div>
        <div class="br-bar" style="background:var(--devops);"></div>
      </a>
      <a class="br" href="https://github.com/01-edu/public/tree/master/subjects" target="_blank">
        <div class="br-glow" style="background:var(--cyber);"></div>
        <div class="br-top"><span class="br-ico">🔐</span><span class="br-dur">6 mois</span></div>
        <div class="br-name" style="color:var(--cyber);">Cybersecurity</div>
        <div class="br-desc">Pentest, cryptographie, reverse engineering, exploitation, CTF et forensics.</div>
        <div class="br-stack"><span class="stag">CTF</span><span class="stag">Pentest</span><span class="stag">Cryptography</span><span class="stag">Forensics</span><span class="stag">Reverse</span></div>
        <div class="br-bar" style="background:var(--cyber);"></div>
      </a>
      <a class="br" href="https://github.com/01-edu/public/tree/master/subjects" target="_blank">
        <div class="br-glow" style="background:var(--mobile);"></div>
        <div class="br-top"><span class="br-ico">📱</span><span class="br-dur">6 mois</span></div>
        <div class="br-name" style="color:var(--mobile);">Mobile Applications</div>
        <div class="br-desc">Développement cross-platform avec Dart &amp; Flutter. Apps iOS et Android, gestion d'état, REST.</div>
        <div class="br-stack"><span class="stag">Dart</span><span class="stag">Flutter</span><span class="stag">iOS</span><span class="stag">Android</span><span class="stag">REST</span></div>
        <div class="br-bar" style="background:var(--mobile);"></div>
      </a>
      <a class="br" href="https://github.com/01-edu/public/tree/master/subjects" target="_blank">
        <div class="br-glow" style="background:var(--java);"></div>
        <div class="br-top"><span class="br-ico">🏗️</span><span class="br-dur">6 mois</span></div>
        <div class="br-name" style="color:var(--java);">Java Full Stack</div>
        <div class="br-desc">Spring Boot, Angular, PostgreSQL, MongoDB, Jenkins, SonarQube. Apps enterprise scalables.</div>
        <div class="br-stack"><span class="stag">Spring Boot</span><span class="stag">Angular</span><span class="stag">PostgreSQL</span><span class="stag">MongoDB</span><span class="stag">Jenkins</span></div>
        <div class="br-bar" style="background:var(--java);"></div>
      </a>
      <a class="br" href="https://github.com/01-edu/public/tree/master/subjects" target="_blank">
        <div class="br-glow" style="background:var(--games);"></div>
        <div class="br-top"><span class="br-ico">🎮</span><span class="br-dur">6 mois</span></div>
        <div class="br-name" style="color:var(--games);">Video Games — Unreal Engine 5</div>
        <div class="br-desc">Game design et development avec UE5 (Epic Games). Blueprints, C++, 3D, physique, animations.</div>
        <div class="br-stack"><span class="stag">Unreal Engine 5</span><span class="stag">C++</span><span class="stag">Blueprints</span><span class="stag">3D</span></div>
        <div class="br-bar" style="background:var(--games);"></div>
      </a>
      <a class="br" href="https://github.com/01-edu/UX-UI" target="_blank">
        <div class="br-glow" style="background:var(--ux);"></div>
        <div class="br-top"><span class="br-ico">✨</span><span class="br-dur">6 mois</span></div>
        <div class="br-name" style="color:var(--ux);">User Experience UX/UI</div>
        <div class="br-desc">UX Research, wireframing, prototypage haute fidélité, Design System, tests utilisateurs.</div>
        <div class="br-stack"><span class="stag">Figma</span><span class="stag">UX Research</span><span class="stag">Prototyping</span><span class="stag">Design System</span></div>
        <div class="br-bar" style="background:var(--ux);"></div>
      </a>
    </div>
  </div>
</section>

<!-- ── TOOLS / MOULINETTE ── -->
<section class="sec" id="tools">
  <div class="wrap">
    <div class="sec-head"><span class="sec-tag">04</span><h2 class="sec-title">Outils de test — La moulinette Zone01</h2><span class="sec-sub">Pas de norminette, mais un système complet</span></div>

    <div class="tools-grid rev">

      <a class="tool" href="https://github.com/01-edu/go-tests" target="_blank">
        <div class="tool-bar" style="background:var(--go);"></div>
        <div class="tool-top">
          <span class="tool-icon">🐹</span>
          <div class="tool-hd">
            <div class="tool-name" style="color:var(--go);">go-tests</div>
            <div class="tool-type">Image Docker · Correction automatique · 541 commits</div>
          </div>
          <span class="tool-badge" style="color:var(--go);border-color:rgba(0,172,215,.3);">★ 47</span>
        </div>
        <p class="tool-desc">La moulinette principale de la <strong>piscine Go</strong>. Image Docker contenant tous les tests unitaires pour chaque exercice. Le test passe silencieusement si correct, affiche des erreurs sinon — exactement comme la Norminette de 42.</p>
        <div class="tool-usage">
          <div class="tool-usage-title">Commandes locales</div>
          <div class="tool-cmd">./test_one.sh isnegative</div>
          <div class="tool-cmd" style="margin-top:.3rem;opacity:.6;">./test_all.sh</div>
          <div class="tool-cmd" style="margin-top:.3rem;opacity:.6;">./test_with_docker.sh [EX] [PATH] [ALLOWED_FN]*</div>
        </div>
      </a>

      <a class="tool" href="https://github.com/01-edu/rust-tests" target="_blank">
        <div class="tool-bar" style="background:var(--rust);"></div>
        <div class="tool-top">
          <span class="tool-icon">🦀</span>
          <div class="tool-hd">
            <div class="tool-name" style="color:var(--rust);">rust-tests</div>
            <div class="tool-type">Image Docker · Correction automatique Rust</div>
          </div>
          <span class="tool-badge" style="color:var(--rust);border-color:rgba(247,76,0,.3);">★ 5</span>
        </div>
        <p class="tool-desc">Equivalent du go-tests pour la <strong>piscine Rust</strong>. Image Docker hébergeant les tests de chaque exercice Rust. Même fonctionnement : silence = succès, output = échec.</p>
        <div class="tool-usage">
          <div class="tool-usage-title">Même interface que go-tests</div>
          <div class="tool-cmd">./test_one.sh ownership</div>
          <div class="tool-cmd" style="margin-top:.3rem;opacity:.6;">./test_all.sh</div>
        </div>
      </a>

      <a class="tool" href="https://github.com/01-edu/rc" target="_blank">
        <div class="tool-bar" style="background:var(--accent);"></div>
        <div class="tool-top">
          <span class="tool-icon">🚔</span>
          <div class="tool-hd">
            <div class="tool-name" style="color:var(--accent);">rc — Restrictions Checker</div>
            <div class="tool-type">Go · Vérificateur de fonctions interdites</div>
          </div>
          <span class="tool-badge" style="color:var(--accent);border-color:rgba(57,255,143,.3);">Interne</span>
        </div>
        <p class="tool-desc">L'équivalent de la <strong>Norminette côté sécurité</strong> de 42. Analyse les fichiers source Go pour vérifier que seules les fonctions autorisées sont utilisées. Chaque exercice a sa liste de fonctions permises (<code>--allow-builtin</code>).</p>
        <div class="tool-usage">
          <div class="tool-usage-title">Utilisé dans test_with_docker.sh</div>
          <div class="tool-cmd">--allow-builtin github.com/01-edu/z01.PrintRune</div>
          <div class="tool-cmd" style="margin-top:.3rem;opacity:.6;">strconv.Atoi os.Args fmt.Println</div>
        </div>
      </a>

      <a class="tool" href="https://github.com/01-edu/go-tests-training" target="_blank">
        <div class="tool-bar" style="background:var(--ai);"></div>
        <div class="tool-top">
          <span class="tool-icon">🏋️</span>
          <div class="tool-hd">
            <div class="tool-name" style="color:var(--ai);">go-tests-training</div>
            <div class="tool-type">Go · Entraînement équipe contenu · Tests locaux</div>
          </div>
          <span class="tool-badge" style="color:var(--ai);border-color:rgba(162,89,255,.3);">Training</span>
        </div>
        <p class="tool-desc">Version d'entraînement du système de test pour l'équipe pédagogique. Permet d'écrire et tester de nouveaux exercices localement avant de les intégrer sur la plateforme. Même structure que go-tests mais vide de tests.</p>
        <div class="tool-usage">
          <div class="tool-usage-title">Dépôts nécessaires côte à côte</div>
          <div class="tool-cmd">~/Desktop/piscine-go/</div>
          <div class="tool-cmd" style="margin-top:.3rem;opacity:.6;">~/Desktop/go-tests-training/</div>
        </div>
      </a>

      <div class="tool" style="cursor:default;">
        <div class="tool-bar" style="background:var(--devops);"></div>
        <div class="tool-top">
          <span class="tool-icon">🔁</span>
          <div class="tool-hd">
            <div class="tool-name" style="color:var(--devops);">CI/CD Plateforme</div>
            <div class="tool-type">GitHub Actions · Docker · Gitea interne</div>
          </div>
          <span class="tool-badge" style="color:var(--devops);border-color:rgba(0,229,192,.3);">Auto</span>
        </div>
        <p class="tool-desc">Sur la plateforme Zone01, à chaque <code>git push</code> étudiant, les tests Docker tournent automatiquement. Résultat affiché dans le dashboard. Le score est calculé selon les tests passés — comme la moulinette d'Epitech.</p>
        <div class="tool-usage">
          <div class="tool-usage-title">Flow étudiant</div>
          <div class="tool-cmd">git push → Docker tests → Score dashboard</div>
        </div>
      </div>

      <div class="tool" style="cursor:default;">
        <div class="tool-bar" style="background:var(--blockchain);"></div>
        <div class="tool-top">
          <span class="tool-icon">📋</span>
          <div class="tool-hd">
            <div class="tool-name" style="color:var(--blockchain);">Audit Peer (Code Review)</div>
            <div class="tool-type">Évaluation entre pairs · Grille de questions</div>
          </div>
          <span class="tool-badge" style="color:var(--blockchain);border-color:rgba(255,140,66,.3);">Peer</span>
        </div>
        <p class="tool-desc">Après les tests automatiques, les projets sont audités par d'autres étudiants. Grille de questions générées automatiquement : l'auditeur doit vérifier le fonctionnement, la compréhension du code, les bonus… Similaire à la soutenance de 42.</p>
        <div class="tool-usage">
          <div class="tool-usage-title">Combinaison tests + humain</div>
          <div class="tool-cmd">Auto-tests → Peer audit → Validation finale</div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ── REPOS ── -->
<section class="sec" id="repos">
  <div class="wrap">
    <div class="sec-head"><span class="sec-tag">05</span><h2 class="sec-title">Repos clés de l'organisation 01-edu</h2></div>
    <div class="repos rev">
      <a class="repo" href="https://github.com/01-edu/public" target="_blank">
        <div class="repo-top"><span class="repo-name">01-edu/public</span><span class="repo-lang"><span class="ldot" style="background:var(--js);"></span>JavaScript</span></div>
        <p class="repo-desc">📚 Source centrale de tout le curriculum. Tous les énoncés, quests, projets. Servi via public.01-edu.org.</p>
        <div class="repo-stats"><span>★ 329</span><span>🍴 553</span><span>CNAME → public.01-edu.org</span></div>
      </a>
      <a class="repo" href="https://github.com/01-edu/go-tests" target="_blank">
        <div class="repo-top"><span class="repo-name">01-edu/go-tests</span><span class="repo-lang"><span class="ldot" style="background:var(--go);"></span>Go</span></div>
        <p class="repo-desc">🐹 Moulinette piscine Go. Docker + test_one.sh + test_all.sh + test_with_docker.sh + rc intégré.</p>
        <div class="repo-stats"><span>★ 47</span><span>🍴 25</span><span>541 commits</span></div>
      </a>
      <a class="repo" href="https://github.com/01-edu/rust-tests" target="_blank">
        <div class="repo-top"><span class="repo-name">01-edu/rust-tests</span><span class="repo-lang"><span class="ldot" style="background:var(--rust);"></span>Rust</span></div>
        <p class="repo-desc">🦀 Moulinette piscine Rust. Image Docker pour tests automatiques de tous les exercices Rust.</p>
        <div class="repo-stats"><span>★ 5</span><span>🍴 10</span></div>
      </a>
      <a class="repo" href="https://github.com/01-edu/rc" target="_blank">
        <div class="repo-top"><span class="repo-name">01-edu/rc</span><span class="repo-lang"><span class="ldot" style="background:var(--accent);"></span>Go</span></div>
        <p class="repo-desc">👮 Restrictions Checker — vérifie que seules les fonctions autorisées sont appelées. La "Norminette" de Zone01.</p>
        <div class="repo-stats"><span>Utilisé par go-tests</span></div>
      </a>
      <a class="repo" href="https://github.com/01-edu/go-tests-training" target="_blank">
        <div class="repo-top"><span class="repo-name">01-edu/go-tests-training</span><span class="repo-lang"><span class="ldot" style="background:var(--go);"></span>Go</span></div>
        <p class="repo-desc">🏋️ Env d'entraînement pour écrire des tests d'exercices. Utilisé par l'équipe pédagogique.</p>
        <div class="repo-stats"><span>Go 78%</span><span>Shell 18%</span></div>
      </a>
      <a class="repo" href="https://github.com/01-edu/z01" target="_blank">
        <div class="repo-top"><span class="repo-name">01-edu/z01</span><span class="repo-lang"><span class="ldot" style="background:var(--go);"></span>Go</span></div>
        <p class="repo-desc">Lib Go commune (z01.PrintRune, z01.PrintStr…). Utilisée dans tous les exercices de la piscine Go.</p>
        <div class="repo-stats"><span>★ 23</span><span>🍴 25</span></div>
      </a>
      <a class="repo" href="https://github.com/01-edu/Branch-Blockchain" target="_blank">
        <div class="repo-top"><span class="repo-name">01-edu/Branch-Blockchain</span><span class="repo-lang"><span class="ldot" style="background:var(--blockchain);"></span>JS</span></div>
        <p class="repo-desc">⛓️ Contenu complet branche Blockchain — Solidity, DeFi, NFTs, smart contracts, dApps.</p>
        <div class="repo-stats"><span>★ 5</span><span>🍴 7</span></div>
      </a>
      <a class="repo" href="https://github.com/01-edu/UX-UI" target="_blank">
        <div class="repo-top"><span class="repo-name">01-edu/UX-UI</span><span class="repo-lang"><span class="ldot" style="background:var(--ux);"></span>Shell</span></div>
        <p class="repo-desc">🎨 Contenu branche UX/UI — design, prototypage, UX research, Design System.</p>
        <div class="repo-stats"><span>🍴 2</span></div>
      </a>
      <a class="repo" href="https://github.com/01-edu/superhero-api" target="_blank">
        <div class="repo-top"><span class="repo-name">01-edu/superhero-api</span><span class="repo-lang"><span class="ldot" style="background:var(--js);"></span>JS</span></div>
        <p class="repo-desc">🦸 REST API super-héros open-source. Utilisée dans les projets JavaScript de la piscine JS.</p>
        <div class="repo-stats"><span>🍴 53</span><span>MIT</span></div>
      </a>
      <a class="repo" href="https://github.com/F-OLIVIER/Formation-Zone01" target="_blank">
        <div class="repo-top"><span class="repo-name">F-OLIVIER/Formation-Zone01</span><span class="repo-lang"><span class="ldot" style="background:var(--accent);"></span>Étudiant</span></div>
        <p class="repo-desc">📖 Zone01 Rouen 2023-2025 — Go, Rust, JS, React, Next.js, Solidity, GraphQL, SQLite, Docker.</p>
        <div class="repo-stats"><span>Go 31%</span><span>JS 24%</span><span>Rust 22%</span></div>
      </a>
      <a class="repo" href="https://github.com/Tednoob17/Zone01-Rust-Pool" target="_blank">
        <div class="repo-top"><span class="repo-name">Tednoob17/Zone01-Rust-Pool</span><span class="repo-lang"><span class="ldot" style="background:var(--rust);"></span>Étudiant</span></div>
        <p class="repo-desc">🦀 9 quests Rust documentées avec exercices et liens officiels. Référence pour la piscine Rust.</p>
        <div class="repo-stats"><span>★ 2</span><span>9 quests</span></div>
      </a>
      <a class="repo" href="https://www.youtube.com/channel/UCDmJ2SyrBNWEekOCmheEocQ/playlists" target="_blank">
        <div class="repo-top"><span class="repo-name">YouTube 01-edu</span><span class="repo-lang">▶ Playlists</span></div>
        <p class="repo-desc">📺 Vidéos pédagogiques officielles pour chaque notion de chaque quest — Go, Rust, JS, Java...</p>
        <div class="repo-stats"><span>Lié aux Quests</span></div>
      </a>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-inner">
      <span class="foot-txt">// Zone01 Curriculum Map · github.com/01-edu/public · Mars 2026</span>
      <div class="foot-links">
        <a href="https://github.com/01-edu/public" target="_blank">GitHub</a>
        <a href="https://public.01-edu.org" target="_blank">public.01-edu.org</a>
        <a href="https://01edu.org" target="_blank">01edu.org</a>
        <a href="https://www.youtube.com/channel/UCDmJ2SyrBNWEekOCmheEocQ/playlists" target="_blank">YouTube</a>
      </div>
    </div>
  </div>
</footer>

<script>
  /* ── QUEST TOGGLE ── */
  function tog(h) { h.closest('.quest').classList.toggle('open'); }

  /* ── REVEAL ── */
  const io = new IntersectionObserver((e) => {
    e.forEach((el, i) => { if (el.isIntersecting) { setTimeout(() => el.target.classList.add('in'), i * 60); io.unobserve(el.target); }});
  }, { threshold: 0.04 });
  document.querySelectorAll('.rev').forEach(el => io.observe(el));

  /* ── PANEL SUBJECT VIEWER ── */
  const panel = document.getElementById('panel');
  const overlay = document.getElementById('overlay');
  const panelBody = document.getElementById('panel-body');
  const panelName = document.getElementById('panel-name');
  const panelLinkPub = document.getElementById('panel-link-pub');
  const panelLinkGh = document.getElementById('panel-link-gh');

  let currentSubject = null;

  if (typeof marked !== 'undefined') {
    marked.setOptions({ breaks: true, gfm: true });
  }

  async function openSubject(name) {
    if (currentSubject === name && panel.classList.contains('open')) return;
    currentSubject = name;

    panelName.textContent = name;
    panelLinkPub.href = `https://public.01-edu.org/subjects/${name}/`;
    panelLinkGh.href = `https://github.com/01-edu/public/tree/master/subjects/${name}`;

    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    panelBody.innerHTML = `
      <div class="panel-loading">
        <div class="panel-loading-dot"></div>
        <div class="panel-loading-dot"></div>
        <div class="panel-loading-dot"></div>
      </div>`;

    // Fetch README from raw GitHub — works from any web host (GitHub Pages, Hugo, etc.)
    const urls = [
      `https://raw.githubusercontent.com/01-edu/public/master/subjects/${name}/README.md`,
      `https://raw.githubusercontent.com/01-edu/public/master/subjects/${name}/en.md`,
    ];

    let md = null;
    for (const url of urls) {
      try {
        const res = await fetch(url);
        if (res.ok) { md = await res.text(); break; }
      } catch(e) {}
    }

    if (md) {
      // Resolve relative images to raw GitHub URLs
      md = md.replace(/!\[([^\]]*)\]\((?!http)([^)]+)\)/g,
        `![$1](https://raw.githubusercontent.com/01-edu/public/master/subjects/${name}/$2)`);
      panelBody.innerHTML = `<div class="md-content">${marked.parse(md)}</div>`;
    } else {
      panelBody.innerHTML = `
        <div class="panel-error">
          <span style="font-size:2rem;">📄</span>
          <span>Impossible de charger le README.</span>
          <span style="margin-top:.5rem;">
            <a href="https://public.01-edu.org/subjects/${name}/" target="_blank"
               style="color:var(--accent);font-family:'JetBrains Mono',monospace;font-size:.75rem;">
              ↗ Ouvrir sur public.01-edu.org
            </a>
          </span>
        </div>`;
    }
  }

  function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    currentSubject = null;
  }

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });
</script>
</body>