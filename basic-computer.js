// JavaScript for managing the sidebar and content display

// Content for each chapter
const content = {
    chapter1: `
        <h2>ফাইল ওপেন করার যেসব পদ্ধতি বেশি ব্যবহার করা হয়</h2>
        <ol>
            <li><strong>ডাবল-ক্লিকের মাধ্যমে ফাইল ওপেন করা</strong>
                <ol>
                    <li>ফাইলের উপর মাউস নিয়ে যান।</li>
                    <li>মাউসের Left বাটন দিয়ে ডাবল-ক্লিক করুন।</li>
                </ol>
            </li>
            <li><strong>রাইট-ক্লিকের মাধ্যমে ফাইল ওপেন করা</strong>
                <ol>
                    <li>ফাইলের উপর রাইট-ক্লিক করুন।</li>
                    <li>'Open' অপশনটি সিলেক্ট করুন।</li>
                </ol>
            </li>
            <li><strong>Enter বাটন দিয়ে ফাইল ওপেন করা</strong>
                <ol>
                    <li>ফাইল এর উপরে মাউস এর Left বাটন দিয়ে একটা ক্লিক করুন।</li>
                    <li>Enter বাটনে ক্লিক করুন।</li>
                </ol>
            </li>
        </ol>
    `,
    chapter2: `
        <h2>ফাইল বা ফোল্ডার এর নাম পরিবর্তন</h2>
        <p>কাজ কোন ফাইল বা ফোল্ডারের নাম পরিবর্তন করার প্রয়োজন হলে, আপনি এটি বিভিন্ন উপায়ে করতে পারেন।</p>
        <h3>কীভাবে ব্যবহার করবেন</h3>
        <h4>পদ্ধতি ১</h4>
        <ol>
            <li>যে ফাইল বা ফোল্ডারের নাম পরিবর্তন করতে চান সেটির উপর রাইট-ক্লিক করুন।</li>
            <li>মেনু থেকে Rename এ ক্লিক করুন।</li>
            <li>নতুন নাম টাইপ করুন এবং Enter প্রেস করুন।</li>
        </ol>
        <h4>পদ্ধতি ২</h4>
        <ol>
            <li>যে ফাইল বা ফোল্ডারের নাম পরিবর্তন করতে চান সেটি সিলেক্ট করুন।</li>
            <li>ফাইলের নামের উপর লেফট-ক্লিক করুন এবং নতুন নাম টাইপ করুন।</li>
            <li>Enter প্রেস করুন।</li>
        </ol>
        <h4>পদ্ধতি ৩</h4>
        <ol>
            <li>যে ফাইল বা ফোল্ডারের নাম পরিবর্তন করতে চান সেটি সিলেক্ট করুন।</li>
            <li>F2 ফাংশন কী প্রেস করুন।</li>
            <li>নতুন নাম টাইপ করুন এবং Enter প্রেস করুন।</li>
        </ol>
    `,
    chapter3: `
        <h2>একই নামে দুইটা Folder খোলার ধাপ</h2>
        <ol>
            <li>Folder খুলে Rename সিলেক্ট করুন।</li>
            <li>ডিলেট Rename।</li>
            <li>Alt বাটন এ চাপ দিয়ে ধরে নাম্বার কী থেকে 255 চাপ দিতে হবে।</li>
            <li>অন্য কোনো Folder এর নাম (যেই Folder এর নামে Folder খুলতে চাই) লিখতে হবে।</li>
            <li>Enter এ ক্লিক করতে হবে।</li>
        </ol>
    `,
    chapter4: `
        <h2>Icon Change করার ধাপ</h2>
        <ol>
            <li>ডেস্কটপে বা ফোল্ডারে যান যেখানে ফোল্ডার বা শর্টকাট ফাইলটি রয়েছে।</li>
            <li>যে ফোল্ডার বা শর্টকাটের আইকন পরিবর্তন করতে চান সেটির উপর রাইট-ক্লিক করুন।</li>
            <li>রাইট-ক্লিক করার পর 'Properties' অপশনটি সিলেক্ট করুন।</li>
            <li>যদি এটি একটি ফোল্ডার হয়, তাহলে 'Customize' ট্যাবে যান।</li>
            <li>যদি এটি একটি শর্টকাট হয়, তাহলে 'Shortcut' ট্যাবে যান।</li>
            <li>'Change Icon' বাটনে ক্লিক করুন।</li>
            <li>ডিফল্ট আইকন তালিকা থেকে একটি আইকন সিলেক্ট করুন অথবা 'Browse' বাটনে ক্লিক করে আপনার পছন্দমতো আইকন ফাইল (যেমন .ico) সিলেক্ট করুন।</li>
            <li>আইকনটি সিলেক্ট করে 'OK' বাটনে ক্লিক করুন।</li>
            <li>'Apply' বাটনে ক্লিক করুন এবং তারপর 'OK' চাপুন।</li>
        </ol>
    `,
    chapter5: `
        <h2>আইকন চেঞ্জ করার মাধ্যমে ফোল্ডার বা ফাইল হাইড করার ধাপ</h2>
        <ol>
            <li>'Properties' অপশনে যান।</li>
            <li>'Change Icon' বাটনে ক্লিক করুন।</li>
            <li>খালি (transparent) আইকন সিলেক্ট করে 'OK' বাটনে ক্লিক করুন।</li>
            <li>'Apply' এবং তারপর 'OK' চাপুন।</li>
        </ol>
    `,
    chapter6: `
        <h2>আইকন হাইড করার ধাপগুলো</h2>
        <ol>
            <li>ফোল্ডারের উপর রাইট-ক্লিক করে 'Properties' অপশনে যান।</li>
            <li>'General' ট্যাবে ক্লিক করুন।</li>
            <li>'Hidden' চেকবক্সটি সিলেক্ট করুন।</li>
            <li>'Apply' এবং তারপর 'OK' চাপুন।</li>
        </ol>
    `,
    chapter7: `
        <h2>হাইড করা ফাইল বা ফোল্ডার ফিরিয়ে আনার ধাপগুলো</h2>
        <ol>
            <li>ফাইল এক্সপ্লোরার খুলুন (যেমন Windows Explorer)।</li>
            <li>মেনু বার থেকে 'Organize' ক্লিক করুন এবং তারপর 'Folder and search options' সিলেক্ট করুন।</li>
            <li>'View' ট্যাবে যান।</li>
            <li>'Hidden files and folders' সেকশনে 'Show hidden files, folders, and drives' সিলেক্ট করুন।</li>
            <li>'Apply' এবং তারপর 'OK' চাপুন।</li>
            <li>ফাইল বা ফোল্ডারের উপর রাইট-ক্লিক করুন এবং 'Properties' অপশনে যান।</li>
            <li>'General' ট্যাবে গিয়ে 'Hidden' চেকবক্সটি আনচেক করুন।</li>
            <li>'Apply' এবং তারপর 'OK' চাপুন।</li>
        </ol>
    `,
    chapter8: `
        <h2>শাট ডাউন শর্টকাট তৈরির ধাপগুলো</h2>
        <ol>
            <li>ডেস্কটপে রাইট-ক্লিক করুন এবং 'New' > 'Shortcut' সিলেক্ট করুন।</li>
            <li>'Type the location of the item' বক্সে নিম্নলিখিত কমান্ডটি লিখুন:<br> <code>shutdown /s /f /t 00</code>
                <ul>
                    <li><code>/s</code> কম্পিউটার শাট ডাউন করার জন্য।</li>
                    <li><code>/f</code> কম্পিউটারে কোনো ফাইল অপেন থাকা অবস্থায় যেন জোড় পূর্বক বন্ধ হয়।</li>
                    <li><code>/t 00</code> শাট ডাউনের জন্য বিলম্ব সময় শূন্য সেকেন্ডে সেট করে।</li>
                </ul>
            </li>
            <li>'Next' বাটনে ক্লিক করুন।</li>
            <li>শর্টকাটের নাম দিন (যেমন "Shutdown") এবং 'Finish' বাটনে ক্লিক করুন।</li>
            <li>Icon পরিবর্তন করুন।</li>
        </ol>
    `,
    chapter9: `
        <h2>ফাইল বা ফোল্ডার লক করার ধাপ</h2>
        <ol>
            <li>ফাইল বা ফোল্ডারের উপর রাইট-ক্লিক করুন এবং 'Properties' অপশনে যান।</li>
            <li>'Security' ট্যাবে ক্লিক করুন।</li>
            <li>'Edit' বাটনে ক্লিক করুন।</li>
            <li>'Group or user names' তালিকা থেকে 'Administrators' সিলেক্ট করুন।</li>
            <li>'Deny' চেকবক্সে টিক দিন 'Full control' অথবা আপনার প্রয়োজন অনুযায়ী অন্যান্য অনুমতিগুলির জন্য।</li>
            <li>'Apply' এবং তারপর 'OK' চাপুন।</li>
            <li>এভাবে ফাইল বা ফোল্ডারটি লক হয়ে যাবে এবং অনুমতি ছাড়া কেউ তা অ্যাক্সেস করতে পারবে না।</li>
        </ol>
        <h2>ফাইল বা ফোল্ডার আনলক করার ধাপগুলো</h2>
        <ol>
            <li>ফাইল বা ফোল্ডারের উপর রাইট-ক্লিক করুন এবং 'Properties' অপশনে যান।</li>
            <li>'Security' ট্যাবে ক্লিক করুন।</li>
            <li>'Edit' বাটনে ক্লিক করুন।</li>
            <li>'Group or user names' তালিকা থেকে 'Administrators' সিলেক্ট করুন।</li>
            <li>Remove এ ক্লিক করুন।</li>
            <li>'Apply' এবং তারপর 'OK' চাপুন।</li>
            <li>এভাবে লক করা ফাইল বা ফোল্ডার আবার আনলক হয়ে যাবে।</li>
        </ol>
    `,
    chapter10: `
        <h2>ফাইল বা ফোল্ডার জিপ করার ধাপগুলো</h2>
        <ol>
            <li>ফাইল বা ফোল্ডার সিলেক্ট করুন যেটি আপনি জিপ করতে চান।</li>
            <li>ফাইল বা ফোল্ডারের উপর রাইট-ক্লিক করুন।</li>
            <li>'Add to “File_Name.rar” সিলেক্ট করুন।</li>
            <li>একটি নতুন জিপ ফাইল তৈরি হবে। আপনার পছন্দমতো নাম দিন এবং 'Enter' চাপুন।</li>
            <li>এভাবে আপনার নির্বাচিত ফাইল বা ফোল্ডারটি একটি জিপ ফাইলে পরিণত হবে।</li>
        </ol>
        <h2>ফাইল বা ফোল্ডার আনজিপ করার ধাপগুলো:</h2>
        <ol>
            <li>ফাইলের উপর রাইট-ক্লিক করুন।</li>
            <li>'Extract Here' অপশনটি সিলেক্ট করুন।</li>
        </ol>
    `,
};

// Function to show content based on chapter selection
function showContent(chapter) {
    // Update content
    document.getElementById('text-sample').innerHTML = content[chapter] || "Select a chapter to view its content.";

    // Update active class on sidebar links
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
    });

    // Add active class to the clicked link
    const activeLink = Array.from(links).find(link => link.getAttribute('onclick').includes(chapter));
    if (activeLink) {
        activeLink.classList.add('active'); // Add active class to the clicked link
    }
}

// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const button = document.getElementById('toggleSidebar');

    // Check if the sidebar is currently visible
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';  // Show sidebar
        button.textContent = 'Hide Sidebar';  // Change button text
    } else {
        sidebar.style.display = 'none';  // Hide sidebar
        button.textContent = 'Show Sidebar';  // Change button text
    }
}

// Initialize the page with the first chapter
document.addEventListener('DOMContentLoaded', () => {
    showContent('chapter1'); // Load initial chapter content
    // Ensure sidebar is visible
    document.querySelector('.sidebar').style.display = 'block';
});

// Attach event listener to the toggle button
document.getElementById('toggleSidebar').addEventListener('click', toggleSidebar);
