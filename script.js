// Password and heart elements
const correctPassword = 'IV-V-MMXXV';
const heart = document.getElementById("heart");
const music = document.getElementById("music");

// Love letter message
const loveLetter = `I don’t really know where to begin, because no words could ever match how I feel about you… but I’ll try anyway.
  
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

I love you endlessly. 🫶🌙`;

// Function to unlock heart and reveal letter
function unlockHeart() {
  const input = document.getElementById("passwordInput").value.trim();
  if (input === correctPassword) {
    heart.classList.add("unlocked");

    // Make sure music is ready to play
    music.volume = 0.7;
    music.muted = false;
    music.play().catch((e) => console.error("Music play failed:", e));

    // Reveal the letter
    revealLetter();
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// Reveal the letter with a typewriter effect
function revealLetter() {
  const letterOverlay = document.getElementById("letterOverlay");
  const loveLetterElement = document.getElementById("loveLetter");

  letterOverlay.style.display = "flex";  // Show the letter overlay
  loveLetterElement.innerHTML = "";  // Clear any old content
  typeWriter(loveLetter, 0);  // Start the typing effect

  // Start the falling petals
  setInterval(createPetal, 500);
}

// Typewriter effect for the love letter
function typeWriter(text, i) {
  const loveLetterElement = document.getElementById("loveLetter");

  if (i < text.length) {
    loveLetterElement.innerHTML += text.charAt(i);  // Add next character
    i++;
    setTimeout(() => typeWriter(text, i), 50);  // Adjust speed if needed
  }
}

// Petal creation (for animation)
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  // Random horizontal position
  petal.style.left = Math.random() * 100 + "vw";

  // Random animation duration and delay
  petal.style.animationDuration = (Math.random() * 3 + 5) + "s";
  petal.style.animationDelay = Math.random() * 2 + "s";

  document.getElementById("petals-container").appendChild(petal);

  // Remove the petal when animation ends
  setTimeout(() => {
    petal.remove();
  }, 10000);
}
