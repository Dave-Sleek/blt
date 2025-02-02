
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
      "anum": "me",
      "ahnum": "my",
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
      "asodor": "our_father",
      "akaodor": "our_mother",
      "rofem_asum": "my_heart",
      "runyina": "_wealth",
      "abba": "welcome",
      "ruhan": "mercy",
      "remare": "character",
      "odam": "fine",
      "affa": "market",
      "orom": "man",
      "gwa": "woman",
      "gwan": "child",
      "gwen": "one",
      "ava": "two",
      "aneozeng": "who knows",
      "refe": "tomorrow",
      "aretah": "nothing is impossible",
      "arettah": "_nothing is impossible",
      "faodor": "our own",
      "fatune": "what you think",
      "agwo": "you",
      "ngherere": "excuss",
      "eriri": "church",
      "jian": "come",
      "okpokoro": "table",
      "teh": "go",
      "nviza": "I'm going",
      "ekirika": "clock",
      "anzep azep": "I love_you",
      "ohahara": "resemblance",
      "eseh": "chair",
      "ofa": "cup",
      "ngbakari": "glass",
      "nkene": "plate",
      "efa": "dog",
      "iwa": "broom",
      "okpo": "robber",
      "okpoho": "money",
      "hovihare": "progress",
      "oviza": "left",
      "aneota": "who is above",
      "odamadam": "good",
      "hovone": "unity"
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
      "me": "anum",
      "my": "ahnum",
      "eye": "sen",
      "thank you": "samaru",
      "he has done for me": "onaunyi",
      "let see": "sadeyeng",
      "we shall say": "edero",
      "we shall receive gift": "enarunyi",
      "wealth": "hene",
      "waking": "hivinene",
      "our_father": "asodor",
      "our_mother": "akaodor",
      "my_heart": "rofem_asum",
      "_wealth": "runyina",
      "welcome": "abba",
      "mercy": "ruhan",
      "character": "remare",
      "fine": "odam",
      "market": "affa",
      "man": "orom",
      "woman": "gwa",
      "child": "gwan",
      "one": "gwen",
      "two": "ava",
      "who knows": "aneozeng",
      "tomorrow": "refe",
      "nothing is impossible": "aretah",
      "_nothing is impossible": "arettah",
      "our own": "faodor",
      "what you think": "fatune",
      "you": "agwo",
      "excuss": "ngherere",
      "church": "eriri",
      "come": "jian",
      "table": "okpokoro",
      "go": "teh",
      "going": "nviza",
      "clock": "ekirika",
      "I love_you": "anzep azep",
      "resemblance": "ohahara",
      "chair": "eseh",
      "cup": "ofa",
      "glass": "ngbakari",
      "plate": "nkene",
      "dog": "efa",
      "broom": "iwa",
      "robber": "okpo",
      "money": "okpoho",
      "progress": "hovihare",
      "left": "oviza",
      "who is above": "aneota",
      "good": "odamadam",
      "unity": "hovone"
    };

  let typingTimer; // Timer identifier
  const typingInterval = 500; // Time in milliseconds (0.5 seconds)

  const inputTextArea = document.getElementById("inputText");
  const originalTextElement = document.getElementById("originalText");
  const translatedTextElement = document.getElementById("translatedText");
  const historyList = document.getElementById("translationHistory");

  // Automatically update translation on keyup
  inputTextArea.addEventListener("input", () => {
    clearTimeout(typingTimer); // Clear the timer on every keystroke
    typingTimer = setTimeout(() => {
      updateTranslation();
    }, typingInterval); // Call updateTranslation after typing stops
  });

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

      // saveHistory(inputText, translation);

      // Save history only when a valid translation exists
    if (inputText && translation && inputText !== translation) {
      saveHistory(translation);
    }
    }

    function reverseTranslation() {

      const original = document.getElementById("originalText").textContent;
      const translation = document.getElementById("translatedText").textContent;

      document.getElementById("inputText").value = translation;
      document.getElementById("originalText").textContent = translation;
      document.getElementById("translatedText").textContent = original;

      const select = document.getElementById("translationDirection");
      select.value =
        select.value === "ohumonoToEnglish" ? "englishToOhumono" : "ohumonoToEnglish";
      translateText();
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

    // function toggleDarkMode() {
    //   document.body.classList.toggle("dark-mode");
    // }

    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
  
      const isDarkMode = document.body.classList.contains("dark-mode");
      document.getElementById("lightLogo").style.display = isDarkMode ? "none" : "block";
      document.getElementById("darkLogo").style.display = isDarkMode ? "block" : "none";
    }

    // function saveHistory(original, translation) {
    //   const historyList = document.getElementById("translationHistory");
    //   const listItem = document.createElement("li");
    //   listItem.textContent = `Original: ${original} | Translation: ${translation}`;
    //   historyList.appendChild(listItem);
    // }

    function saveHistory(translation) {
      // Avoid duplicating the last saved history entry
      const lastEntry = historyList.lastElementChild?.textContent;
      if (lastEntry === translation) return;
  
      const listItem = document.createElement("li");
      listItem.textContent = translation;
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

  const networkStatusContainer = document.getElementById("networkStatusContainer");

// Function to check and update network status
    function updateNetworkStatus() {
      if (navigator.onLine) {
        networkStatusContainer.style.display = "none";
      } else {
        networkStatusContainer.style.display = "flex";
      }
    }

    // Add event listeners for online and offline events
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    // Check the network status on page load
    updateNetworkStatus();


    // Initialize EmailJS

  function submitFeedback(event) {
    event.preventDefault(); // Prevent page reload
    
    const name = document.getElementById("name").value.trim() || "Anonymous";
    const feedback = document.getElementById("feedback").value.trim();

    if (feedback) {
      const templateParams = {
        name,
        feedback,
      };

      // Send email using EmailJS
      emailjs
        .send('service_7doimgo', 'template_6axipkg', templateParams) // Replace with your IDs
        .then(
          () => {
            document.getElementById("feedbackResponse").style.display = "block";
            document.getElementById("feedbackError").style.display = "none";
            document.getElementById("feedbackForm").reset();
          },
          () => {
            document.getElementById("feedbackResponse").style.display = "none";
            document.getElementById("feedbackError").style.display = "block";
          }
        );
    }
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      console.log('Service Worker Registered');
    });
  }
