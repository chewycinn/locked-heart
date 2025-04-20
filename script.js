const correctPassword = "IV-V-MMXXV"; // Roman numeral password
const music = document.getElementById("bgMusic");
const heart = document.getElementById("heart");
const letterOverlay = document.getElementById("letterOverlay");
const typedText = document.getElementById("typedText");

const loveLetter = `
I don’t really know where to begin, because no words could ever match how I feel about you… but I’ll try anyway.

How are you, pretty baby? Have I already told you today that I love everything about you?

And when I say everything, I mean everything from your skin to your pure soul. Even the parts of yourself you don’t like... I love those too.

The things you see as flaws I see as beautiful pieces of the person I adore.

I love you the way the moon loves to show up in every phase: half, quarter, or full.

That means I love every version of you—even the darker sides. And I’ll be here through all of it.

I want to give you all that I have, even when you're not at your best.

And in your full moon phase, when you’re feeling your fullest and brightest—I want to be there, cheering you on, building dreams with you, and celebrating every moment until the hard days finally pay off.

I want you to always remember where you came from—to look back and reflect on how much you've grown along the way.

And most of all, I want to walk beside you through it all—every step, every season, every chapter.

You’ll never be alone, baby. I’m yours completely. Always. 

I love you endlessly. 🫶🌙
`;

function unlockHeart() {
  const input = document.getElementById("passwordInput").value.trim();
  if (input === correctPassword) {
    heart.classList.add("unlocked");
    music.play();
    revealLetter();
  } else {
    alert("That’s not quite it… try again, love 💌");
  }
}

function revealLetter() {
  letterOverlay.style.display = "flex";
  typeWriter(loveLetter, 0);
}

function typeWriter(text, i) {
  const loveLetterElement = document.getElementById("loveLetter");

  if (i < text.length) {
    loveLetterElement.innerHTML += text.charAt(i);
    loveLetterElement.parentElement.scrollTop = loveLetterElement.parentElement.scrollHeight;
    setTimeout(() => typeWriter(text, i + 1), 30);
  } else {
    // ✅ After typing is complete, show the photo gallery
    setTimeout(() => {
      document.querySelector('.photo-gallery').classList.remove('hidden');
      document.querySelector('.photo-gallery').classList.add('show');

      document.querySelector('.photo-title').classList.remove('hidden');
      document.querySelector('.photo-title').classList.add('show');
    }, 500); // Add a little pause after typing ends
  }
}

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.animationDuration = `${Math.random() * 3 + 5}s`;
  petal.style.animationDelay = `${Math.random() * 2}s`;
  document.getElementById("petals-container").appendChild(petal);
  setTimeout(() => petal.remove(), 10000);
}

function createButterfly() {
  const butterfly = document.createElement("div");
  butterfly.classList.add("butterfly");
  butterfly.style.left = `${Math.random() * 100}vw`;
  butterfly.style.animationDuration = `${Math.random() * 5 + 6}s`;
  butterfly.style.animationDelay = `${Math.random() * 2}s`;
  document.getElementById("petals-container").appendChild(butterfly);
  setTimeout(() => butterfly.remove(), 12000);
}

