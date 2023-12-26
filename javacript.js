document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

/* arbol de navidad*/


const baubles = document.querySelectorAll(".liarbol");
const lights = document.querySelectorAll(".liarbol:nth-child(odd)");
const maxX = 30;
const maxY = 35;
const baublesLength = baubles.length;

baubles.forEach((bauble, i) => {
  // Tree
  const y = Math.pow(i / baublesLength, 0.5) * maxY * 2 - maxY;
const x =
    Math.pow((maxX * i) / baublesLength, 0.5) *
    5.5 *
    Math.random() *
    (i % 2 === 0 ? 1 : -1);
const r = Math.random();
const n = Math.random();

bauble.style.setProperty("--x", `${x}vmin`);
bauble.style.setProperty("--y", `${y}vmin`);
bauble.style.setProperty("--r", `${r}turn`);
bauble.style.setProperty("--sign", n > 0.5 ? -1 : 1);
bauble.style.setProperty("--s", Math.random() * 0.875 + 0.125);
bauble.style.setProperty("--hue", Math.random() * 360);

bauble.textContent =
    Math.random() >= 0.2 ? "2024" : Math.random() >= 0.5 ? "2🎅" : "1🎁";

    if (i % 2 === 0) {
        bauble.animate(
        { opacity: [1, 1, 0] },
        {
        duration: 2000 + Math.random() * 3000,
        iterations: Infinity,
        direction: "alternate",
        delay: Math.random() * -16000,
        easing: "ease-in"
}
    );
}
const animation = bauble.animate(
    { transform: ["rotateX(1turn) rotateY(2turn)"] },
    {
      duration: 7000 + Math.random() * 13000,
    iterations: Infinity,
direction: "alternate",
      delay: Math.random() * -16000,
easing: "ease-in",
composite: "add"
    }
);
if (
    i % 2 === 1 ||
    !window.matchMedia?.("(prefers-reduced-motion: no-preference)")
) {
    animation.pause();
}
});
