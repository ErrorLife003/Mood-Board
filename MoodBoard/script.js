const moods = {
  "😄": { quote: "Smiling through the chaos!", theme: "yellowTheme" },
  "😢": { quote: "Crying is brave too.", theme: "blueTheme" },
  "😡": { quote: "You’re allowed to be mad.", theme: "redTheme" },
  "😴": { quote: "Rest is productive.", theme: "darkTheme" },
  "🤩": { quote: "You’re shining today!", theme: "purpleTheme" }
};

const emojis = document.querySelectorAll(".emoji");
const quoteContainer = document.getElementById("quoteContainer");

emojis.forEach(emoji => {
  emoji.addEventListener("click", () => {
    const mood = moods[emoji.textContent];
    document.body.className = mood.theme;
    document.getElementById("emojiContainer").style.display = "none";
    quoteContainer.textContent = mood.quote;
  });
});
