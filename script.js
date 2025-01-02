
    const dictionaryOhumonoToEnglish = {
      "avinene": "good morning",
      "osenedor": "good night",
      "akuna": "how are you",
      "mma": "mother",
      "etteh": "father",
      "mo ye refeh": "see you tomorrow",
      "nka ku maohura": "I'm fine",
      "mofen aoshe": "food",
      "rajunor": "peace",
      "rofem": "heart",
      "etoma": "life",
      "hitaose": "hope",
      "hikarofem": "patience",
      "runyi": "gift",
      "nsanta": "i will pass",
      "sahobor_anyi_obhazi": "hand over to God",
      "henendeme": "goodness",
      "ovai": "chief",
      "hokaha": "light",
      "hodo": "blessing",
      "Obhazi": "God",
      "hokpoma": "praise",
      "rademene": "happiness",
      "royor": "river",
      "anum": "mine",
      "ozep": "love",
      "evare": "answer",
      "reyah": "greetings",
      "amor": "good afternoon",
      "erzin": "night",
      "ervum": "morning",
      "eviviyah": "afternoon",
      "tayidor": "conquer for us",
      "amah": "mouth",
      "yen": "eyes",
      "sen": "eye",
      "samaru": "thank you",
      "onaunyi": "he has done for me",
      "sadeyeng": "let see",
      "edero": "we shall say",
      "enarunyi": "we shall receive gift",
      "hene": "wealth",
      "hivinene": "waking",
      "sahono": "cry",
      "asodor": "our_father",
      "akaodor": "our_mother",
      "rofem_asum": "my_heart",
      "runyina": "_wealth",
      "abba": "welcome",
      "ruhan": "mercy"
    };

    const dictionaryEnglishToOhumono = {
      "good morning": "avinene",
      "good night": "osenedor",
      "how are you": "akuna",
      "mother": "mma",
      "father": "etteh",
      "see you tomorrow": "mo ye refeh",
      "I'm fine": "nka ku maohura",
      "food": "mofen aoshe",
      "peace": "rajunor",
      "heart": "rofem",
      "life": "etoma",
      "hope": "hitaose",
      "patience": "hikarofem",
      "gift": "runyi",
      "i will pass": "nsanta",
      "hand over to God": "sahobor_anyi_obhazi",
      "goodness": "henendeme",
      "chief": "ovai",
      "light": "hokaha",
      "blessing": "hodo",
      "God": "Obhazi",
      "praise": "hokpoma",
      "happiness": "rademene",
      "river": "royo",
      "love": "ozep",
      "answer": "evare",
      "greetings": "reyah",
      "good afternoon": "amor",
      "night": "erzin",
      "morning": "ervum",
      "afternoon": "eviviyah",
      "conquer for us": "tayidor",
      "mouth": "amah",
      "eyes": "yen",
      "eye": "sen",
      "thank you": "samaru",
      "he has done for me": "onaunyi",
      "let see": "sadeyeng",
      "we shall say": "edero",
      "we shall receive gift": "enarunyi",
      "wealth": "hene",
      "waking": "hivinene",
      "cry": "sahono",
      "our_father": "asodor",
      "our_mother": "akaodor",
      "my_heart": "rofem_asum",
      "_wealth": "runyina",
      "welcome": "abba",
      "mercy": "ruhan"
    };

    function translateText() {
      const inputText = document.getElementById("inputText").value.trim().toLowerCase();
      const direction = document.getElementById("translationDirection").value;

      const dictionary =
        direction === "ohumonoToEnglish"
          ? dictionaryOhumonoToEnglish
          : dictionaryEnglishToOhumono;

      let translation = inputText;
      for (const [key, value] of Object.entries(dictionary)) {
        const regex = new RegExp(`\\b${key}\\b`, "gi");
        translation = translation.replace(regex, value);
      }

      document.getElementById("originalText").textContent = inputText || "No input provided.";
      document.getElementById("translatedText").innerHTML = translation || "No translation found.";

      saveHistory(inputText, translation);
    }

    function reverseTranslation() {
      const select = document.getElementById("translationDirection");
      select.value =
        select.value === "ohumonoToEnglish" ? "englishToOhumono" : "ohumonoToEnglish";
    }

    function speakTranslation() {
      const translatedText = document.getElementById("translatedText").innerText;
      const utterance = new SpeechSynthesisUtterance(translatedText);
      speechSynthesis.speak(utterance);
    }

    function copyTranslation() {
      const translatedText = document.getElementById("translatedText").innerText;
      navigator.clipboard.writeText(translatedText).then(() => {
        alert("Translation copied to clipboard!");
      });
    }

    function clearFields() {
      document.getElementById("inputText").value = "";
      document.getElementById("originalText").textContent = "";
      document.getElementById("translatedText").textContent = "";
    }

    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }

    function saveHistory(original, translation) {
      const historyList = document.getElementById("translationHistory");
      const listItem = document.createElement("li");
      listItem.textContent = `Original: ${original} | Translation: ${translation}`;
      historyList.appendChild(listItem);
    }

    function downloadHistory() {
      const historyList = document.querySelectorAll("#translationHistory li");
      if (historyList.length === 0) {
        alert("No history to download!");
        return;
      }

      let historyText = "Translation History:\n\n";
      historyList.forEach((item) => {
        historyText += item.textContent + "\n";
      });

      const blob = new Blob([historyText], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "translation_history.txt";
      link.click();
    }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      console.log('Service Worker Registered');
    });
  }
