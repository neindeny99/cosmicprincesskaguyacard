function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Update button text
    const btn = document.querySelector('.dark-mode-toggle button');
    if (body.classList.contains('dark-mode')) {
        btn.innerText = "라이트 모드로 전환";
    } else {
       btn.innerText = "다크 모드로 전환";
   }
}

card-insert{position:absolute; inset:0; transition:transform 0.6s ease; transform-style:preserve-3d;}card-data-open="true">{.card-insert{transform:rotateY(180deg);}}.card-face{position:absolute; inset:0; border-radius:15px; backface-visibility:hidden; display:flex; align-items:center; justify-content:center;}.card-inner{width:100%; height:100%; object-fit:cover;} .r-border{border: 5px solid #8BFF; important; box-shadow: 0 0 15px rgba(255,0,0,1);} .sr-border{border: 5px solid #FFD700; important; box-shadow: 0 0 15px rgba(255,215,0,1);} .ssr-border{border: 5px solid #FF1493; important; box-shadow: 0 0 15px rgba(255,20,147,1); animation:ssrGlow 1.5s linear infinite alternate;} @keyframes ssrGlow{from{box-shadow:0 0 5px deeppink, 0 0 10px deeppink;}to{box-shadow:0 0 20px deeppink, 0 0 30px hotpink;}}.card-back{background:#c1c1c1; transform:rotateY(180deg);}.card-front{background:white;}.card-image{width:100%; height:100%; object-fit:cover;} .Rarity-Borders{/* r-border */ border: 5px solid yellow !important; box-shadow: 0 0 15px rgba(255, 255, 0, 0.6);} /* sr-border */{border: 5px solid deepsky !important; animation:srGlow 1.5s linear forwards; srGlow 1.5s ease infinite alternate; @keyframes srGlow{ from{ box-shadow:0 0 5px deeppink, 0 0 15px hotpink;} to{ box-shadow:0 0 30px hotpink, 0 0 40px hotpink;}}}/* ssr-border */{background:gold;}.f-resetBtn{ background:red; color:white;}