// হাদিসগুলোর একটি তালিকা
const hadiths = [
    "প্রকৃত মুসলমান সেই, যার হাত ও মুখের অনিষ্ট থেকে অন্য মুসলমান নিরাপদ থাকে। (সহিহ বুখারী)",
    "তোমাদের মধ্যে সেই ব্যক্তি উত্তম, যে অন্যদের কল্যাণ করে। (সহিহ মুসলিম)",
    "অন্যের জন্য সে জিনিসই চাও যা তুমি নিজের জন্য চাও। (সহিহ বুখারী)",
    "আল্লাহ্‌ তাঁর বান্দাকে ক্ষমা করতে ভালোবাসেন। (তিরমিজি)",
    "যে ব্যক্তি সবরের সাথে বিপদ সহ্য করে, আল্লাহ্‌ তাকে উত্তম পুরস্কার দান করবেন। (সহিহ মুসলিম)",
];

// দু'আ এর তালিকা (শুধুমাত্র বাংলা অর্থ সহ)
const duas = [
    {
        banglaMeaning: "হে আমাদের পালনকর্তা! আমাদেরকে পার্থিব জীবনে কল্যাণ দান করুন এবং পরকালীন জীবনেও কল্যাণ দান করুন। এবং আমাদেরকে জাহান্নামের আগুন হতে রক্ষা করুন।"
    },
    {
        banglaMeaning: "হে আল্লাহ! আমি আপনার কাছে সুস্থতা প্রার্থনা করছি।"
    },
    {
        banglaMeaning: "হে আমার পালনকর্তা! আমার বুককে প্রসারিত করুন এবং আমার কাজকে সহজ করুন।"
    },
    {
        banglaMeaning: "হে আল্লাহ! আমি তোমার কাছে চিন্তা ও দুঃখ থেকে আশ্রয় চাই।"
    },
    {
        banglaMeaning: "হে অন্তরের পরিবর্তনকারী, আমার অন্তরকে তোমার দ্বীনের উপর দৃঢ় রাখ।"
    }
];

// এলোমেলোভাবে হাদিস বা দু'আ নির্বাচন এবং প্রদর্শন করা
function showRandomContent(contentArray, textElementId, dua = false) {
    const randomIndex = Math.floor(Math.random() * contentArray.length);
    const selectedContent = contentArray[randomIndex];

    if (dua) {
        // শুধুমাত্র বাংলা অর্থ প্রদর্শন করা
        document.getElementById(textElementId).textContent = selectedContent.banglaMeaning;
    } else {
        document.getElementById(textElementId).textContent = selectedContent;
    }
}

// হাদিস বোতামে ক্লিক করার ফাংশন
document.getElementById("hadithButton").addEventListener("click", function () {
    showRandomContent(hadiths, "hadithText");
    document.getElementById("hadithSection").style.display = "block";
    document.getElementById("duaSection").style.display = "none";
    document.getElementById("nextButton").style.display = "block"; // Next button প্রদর্শন
});

// দু'আ বোতামে ক্লিক করার ফাংশন
document.getElementById("duaButton").addEventListener("click", function () {
    showRandomContent(duas, "duaText", true);
    document.getElementById("hadithSection").style.display = "none";
    document.getElementById("duaSection").style.display = "block";
    document.getElementById("nextButton").style.display = "block"; // Next button প্রদর্শন
});

// Next button-এর ফাংশন
document.getElementById("nextButton").addEventListener("click", function () {
    if (document.getElementById("hadithSection").style.display === "block") {
        showRandomContent(hadiths, "hadithText");
    } else if (document.getElementById("duaSection").style.display === "block") {
        showRandomContent(duas, "duaText", true);
    }
});

// মেনু বাটনে ক্লিক করার ফাংশন
document.getElementById("menuBar").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Hide the sidebar
    } else {
        sidebar.style.left = "0px"; // Show the sidebar
    }
});

// পৃষ্ঠা লোড হলে Next button লুকানো
document.getElementById("nextButton").style.display = "none"; // Initially hide the Next button
// Function to change font size
function changeFontSize(size) {
    document.body.style.fontSize = size + 'px';
}

// স্লাইডার পরিবর্তনের ফাংশন শুধুমাত্র hadithText এবং duaText এর জন্য
document.getElementById("fontSizeSlider").addEventListener("input", function () {
    const fontSize = this.value + 'px'; // Get the slider value and append 'px'

    // Change the font size of hadithText and duaText only
    document.getElementById("hadithText").style.fontSize = fontSize;
    document.getElementById("duaText").style.fontSize = fontSize;

    // Update the displayed font size value
    document.getElementById("fontSizeValue").textContent = fontSize;
});