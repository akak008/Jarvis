const btn = document.querySelector('.talk2');
const content2 = document.querySelector('.content2');
const content = document.querySelector('.content');
const go = document.querySelector('#start')

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
    };
    
    function wishMe() {
        var day = new Date();
        var hour = day.getHours();
    
        if (hour >= 0 && hour < 12) {
            speak("Good Morning Sir...");
        } else if (hour >= 12 && hour < 17) {
            speak("Good Afternoon Sir...");
        } else {
            speak("Good Evening Sir...");
        }
    }
    
    go.addEventListener('click', () => {
        content.textContent = "Starting...";
        speak("Initializing JARVIS...");
        wishMe();
    });

btn.addEventListener('click', () => {
    content2.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open Google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open coffee")) {
        window.open("https://akcoffeeshop.vercel.app/", "_blank");
        speak("Opening Coffee Shop...");
    }
}