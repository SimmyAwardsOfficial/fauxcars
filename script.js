let role = "";
let votes = {};

function startGame(selectedRole) {
    role = selectedRole;
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";

    if (role === "spectator") {
        document.getElementById("voting-section").style.display = "block";
    } else {
        document.getElementById("host-speech").innerText = "As an actor, you await the results...";
    }

    showJoke();
}

function showJoke() {
    const jokes = [
        "Why did the actor bring a ladder? To reach for the stars!",
        "This year's nominees are so talented, even their acceptance speeches are Oscar-worthy!",
        "I asked AI to predict the winners, but it just kept saying 'I'm not programmed for disappointment.'"
    ];
    document.getElementById("joke").innerText = jokes[Math.floor(Math.random() * jokes.length)];
}

function vote(actor) {
    votes[actor] = (votes[actor] || 0) + 1;
    alert("Vote cast for " + actor);
    document.getElementById("voting-section").style.display = "none";
    nextSegment();
}

function nextSegment() {
    document.getElementById("joke").innerText = "";
    document.getElementById("host-speech").innerText = "And the winner is...";

    const nominees = ["John Dandridge", "Michael Stern", "Leon Hardy"];
    const winner = nominees[Math.floor(Math.random() * nominees.length)];
    document.getElementById("winner-announcement").innerText = winner + " wins Best Actor!";
    document.getElementById("winner-section").style.display = "block";

    if (role === "actor" && winner === "John Dandridge") {
        document.getElementById("speech-section").style.display = "block";
    } else {
        document.getElementById("clap-message").innerText = "The audience claps enthusiastically!";
    }
}

function giveSpeech() {
    const speech = document.getElementById("speech").value;
    alert("Your speech: " + speech);
    document.getElementById("speech-section").style.display = "none";
    document.getElementById("clap-message").innerText = "The audience claps enthusiastically!";
}
