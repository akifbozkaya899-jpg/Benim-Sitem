const yazilar = [
    "Bilimle düþünüyorum",
    "Oyun geliþtiriyorum",
    "Kod yazýyorum",
    "Deney yapýyorum"
];

let sira = 0;
const yazi = document.getElementById("degisen-yazi");

setInterval(() => {
    sira = (sira + 1) % yazilar.length;
    yazi.textContent = yazilar[sira];
}, 2000);
