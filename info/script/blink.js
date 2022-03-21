const MacintoshText = document.querySelector(
    ".macintosh div:nth-child(1) section"
);

text = MacintoshText.innerHTML;
blink = true;

setInterval(() => {
    if (blink) {
        MacintoshText.innerHTML = text + "▌";
        blink = false;
    } else {
        MacintoshText.innerHTML = text;
        blink = true;
    }
}, 800);
