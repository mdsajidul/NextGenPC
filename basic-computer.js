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
        <h2>ফাইল বা ফোল্ডার আনলক করার ধাপ</h2>
        <ol>
            <li>লক করা ফাইল বা ফোল্ডারের উপর রাইট-ক্লিক করুন এবং 'Properties' অপশনে যান।</li>
            <li>'Security' ট্যাবে ক্লিক করুন।</li>
            <li>'Edit' বাটনে ক্লিক করুন।</li>
            <li>'Group or user names' তালিকা থেকে 'Administrators' সিলেক্ট করুন।</li>
            <li>'Allow' চেকবক্সে টিক দিন 'Full control' অথবা অন্যান্য অনুমতিগুলির জন্য।</li>
            <li>'Apply' এবং তারপর 'OK' চাপুন।</li>
        </ol>
    `,
    chapter10: `
        <h2>ডিস্ক ক্লিন আপ</h2>
        <ol>
            <li>সার্চ বারে "Disk Cleanup" লিখুন এবং এন্টার চাপুন।</li>
            <li>ডিস্ক ক্লিন আপ উইন্ডো খুললে, সিস্টেম ড্রাইভ সিলেক্ট করুন (সাধারণত C: ড্রাইভ)।</li>
            <li>'OK' বাটনে ক্লিক করুন।</li>
            <li>এখন, আপনি যেসব ফাইল মুছে ফেলতে চান তা সিলেক্ট করুন।</li>
            <li>'OK' এবং তারপর 'Delete Files' এ ক্লিক করুন।</li>
        </ol>
    `,

    chapter11: `
        <h2>MS Word ফাইলে পাসওয়ার্ড দেওয়ার ধাপগুলো</h2>
<ol>
    <li>Office বাটনে (অথবা File মেনুতে) ক্লিক করুন।</li>
    <li>'Save As' সিলেক্ট করুন।</li>
    <li>'Tools' বাটনে ক্লিক করুন এবং 'General Options' সিলেক্ট করুন।</li>
    <li>'Password to open' ফিল্ডে আপনার পাসওয়ার্ড লিখুন।</li>
    <li>'OK' বাটনে ক্লিক করুন।</li>
    <li>পাসওয়ার্ড পুনরায় নিশ্চিত করতে আবার লিখুন এবং 'OK' চাপুন।</li>
    <li>ফাইলের নাম দিন এবং 'Save' বাটনে ক্লিক করুন।</li>
</ol>
<p>এভাবে আপনার MS Word ফাইলে পাসওয়ার্ড সেট হয়ে যাবে।</p>

<h2>MS Word ফাইল থেকে পাসওয়ার্ড বাদ দেওয়ার ধাপগুলো</h2>
<ol>
    <li>ফাইলটি ওপেন করুন যেটিতে পাসওয়ার্ড আছে।</li>
    <li>Office বাটনে (অথবা File মেনুতে) ক্লিক করুন।</li>
    <li>'Save As' সিলেক্ট করুন।</li>
    <li>'Tools' বাটনে ক্লিক করুন এবং 'General Options' সিলেক্ট করুন।</li>
    <li>'Password to open' ফিল্ডে থাকা পাসওয়ার্ড মুছে ফেলুন।</li>
    <li>'OK' বাটনে ক্লিক করুন।</li>
    <li>ফাইলের নামটি পুনরায় নিশ্চিত করতে 'Save' বাটনে ক্লিক করুন।</li>
</ol>
<p>এভাবে পাসওয়ার্ড বাদ দিয়ে ফাইলটি সংরক্ষণ করা হবে।</p>

    `,

    chapter12: `
        <h2> Customize বার এ আইকন আনার ধাপগুলো:</h2>
<ol>
    <li>Customize বার এর Arrow তে ক্লিক করুন।</li>
    <li>'More Commands' সিলেক্ট করুন।</li>
    <li>'Customize' ট্যাবে যান।</li>
    <li>'Popular Icons' Arrow তে ক্লিক করুন।</li>
    <li>'All Commands' সিলেক্ট করুন।</li>
    <li>যে আইকনটি যোগ করতে চান তা সিলেক্ট করুন।</li>
    <li>'Add' বাটনে ক্লিক করুন।</li>
</ol>
<p>এভাবে আপনার টুলবারে নতুন আইকন যুক্ত হবে।</p>

`,
    chapter13: `
        <h2>MS Word-এ পাওয়ার (Superscript) লেখার ধাপগুলো:</h2>
<ol>
    <li>MS Word খুলুন এবং ডকুমেন্টে যান যেখানে পাওয়ার লেখতে চান।</li>
    <li>পাওয়ার লেখা শুরু করার জন্য, সংখ্যাটি টাইপ করুন (যেমন a অথবা b)।</li>
    <li>'Home' ট্যাবে যান।</li>
    <li>'Font' গ্রুপে 'Superscript' (X²) বাটনে ক্লিক করুন।</li>
    <li>যে সংখ্যার পাওয়ার প্রয়োগ করতে চান তা টাইপ করুন (যেমন 2 বা 3)।</li>
    <li>যদি আপনি পাওয়ার লেখার শেষে ফিরে যেতে চান, তাহলে আবার 'Superscript' বাটনে ক্লিক করুন।</li>
</ol>
`,
    chapter14:
        `
    <h2>MS Word-এ নিচে লেখা (Subscript) লেখার ধাপগুলো:</h2>
<ol>
    <li>MS Word খুলুন এবং ডকুমেন্টে যান যেখানে নিচে লেখা প্রয়োজন।</li>
    <li>যে সংখ্যাটি বা অক্ষরটি নিচে লেখতে চান তা টাইপ করুন (যেমন H অথবা O)।</li>
    <li>'Home' ট্যাবে যান।</li>
    <li>'Font' গ্রুপে 'Subscript' (X₂) বাটনে ক্লিক করুন।</li>
    <li>যে সংখ্যাটি বা অক্ষরটি নিচে লেখতে চান তা টাইপ করুন (যেমন 2 বা 3)।</li>
    <li>যদি আপনি নিচে লেখার শেষে ফিরে যেতে চান, তাহলে আবার 'Subscript' বাটনে ক্লিক করুন।</li>
</ol>

        `,
    chapter15:
        `
        <h2>Color 4 প্রকার</h2>
<ol>
    <li>Font Color</li>
    <li>Highlight Color</li>
    <li>Shading Color</li>
    <li>Page Color</li>
</ol>

<p>নিচে "Color 4 প্রকার" এর কাজের বিস্তারিত নোট দেওয়া হলো:</p>
<ol>
    <li>
        <strong>Font Color</strong><br>
        <strong>ব্যবহার:</strong> টেক্সটের রঙ পরিবর্তন করতে ব্যবহৃত হয়।<br>
        <strong>বিস্তারিত:</strong> এই অপশন ব্যবহার করে আপনি লেখার রঙ পরিবর্তন করতে পারেন, যা পাঠ্যকে আরও আকর্ষণীয় এবং দৃশ্যমান করে তোলে। এটি সাধারণত টেক্সটের স্নিগ্ধতা এবং পাঠযোগ্যতা উন্নত করতে ব্যবহৃত হয়।
    </li>
    <li>
        <strong>Highlight Color</strong><br>
        <strong>ব্যবহার:</strong> টেক্সট বা ডেটা সিলেক্ট করে প্রাধান্য দেওয়ার জন্য ব্যবহার করা হয়।<br>
        <strong>বিস্তারিত:</strong> এই অপশন দিয়ে আপনি টেক্সট বা সেলগুলির পটভূমি রঙ পরিবর্তন করতে পারেন। এটি পাঠক বা ব্যবহারকারীর দৃষ্টি আকর্ষণ করার জন্য গুরুত্বপূর্ণ অংশগুলিকে হাইলাইট করতে সাহায্য করে।
    </li>
    <li>
        <strong>Shading Color</strong><br>
        <strong>ব্যবহার:</strong> সেল বা টেবিলের পটভূমি রঙ পরিবর্তন করতে ব্যবহৃত হয়।<br>
        <strong>বিস্তারিত:</strong> শেডিং কালার ব্যবহার করে আপনি সেলের বা টেবিলের পটভূমিতে একটি হালকা রঙ যোগ করতে পারেন। এটি সেলগুলির মধ্যে পার্থক্য করতে এবং ডিজাইনকে আরও আকর্ষণীয় করতে সহায়ক।
    </li>
    <li>
        <strong>Page Color</strong><br>
        <strong>ব্যবহার:</strong> পুরো পেজের পটভূমি রঙ পরিবর্তন করতে ব্যবহৃত হয়।<br>
        <strong>বিস্তারিত:</strong> এই অপশন ব্যবহার করে আপনি পুরো ডকুমেন্টের বা পেজের পটভূমির রঙ পরিবর্তন করতে পারেন। এটি পেজের সাধারণ দৃশ্য পরিবর্তন করতে এবং বিশেষ থিম তৈরি করতে সহায়তা করে।
    </li>
</ol>


`,
    chapter16:
        `
        <h2>বুলেট ৩ ধরনের</h2>
<ol>
    <li>বুলেট</li>
    <li>নাম্বার বুলেট</li>
    <li>মাল্টি বুলেট</li>
</ol>

<h3>নিচে তিন ধরনের বুলেটের কাজের বিস্তারিত তথ্য দেওয়া হলো:</h3>
<ol>
    <li>
        <strong>বুলেট</strong>
        <ul>
            <li><strong>ব্যবহার:</strong> তালিকাভুক্ত পয়েন্ট বা আইটেমগুলি উপস্থাপন করতে ব্যবহৃত হয়।</li>
            <li><strong>বিস্তারিত:</strong> সাধারণভাবে গোলাকার চিহ্নের ব্যবহার করে আইটেমগুলি সজ্জিত করা হয়। এটি তালিকার মূল পয়েন্টগুলোকে আলাদা করে এবং দ্রুত পাঠকের দৃষ্টি আকর্ষণ করতে সহায়ক।</li>
        </ul>
    </li>
    <li>
        <strong>নাম্বার বুলেট</strong>
        <ul>
            <li><strong>ব্যবহার:</strong> ক্রমিক তালিকা বা সংখ্যা দিয়ে আইটেমগুলি উপস্থাপন করতে ব্যবহৃত হয়।</li>
            <li><strong>বিস্তারিত:</strong> আইটেমগুলি সংখ্যার সাহায্যে সজ্জিত করা হয়, যা তাদের ক্রম বা গুরুত্বপূর্ণতা নির্দেশ করে। এটি ধাপ-ধাপে নির্দেশনা বা ক্রমাগত তালিকা তৈরি করার জন্য ব্যবহার করা হয়।</li>
        </ul>
    </li>
    <li>
        <strong>মাল্টি বুলেট</strong>
        <ul>
            <li><strong>ব্যবহার:</strong> একাধিক স্তরের বুলেট পয়েন্ট তৈরি করতে ব্যবহৃত হয়।</li>
            <li><strong>বিস্তারিত:</strong> প্রধান বুলেট পয়েন্টের অধীনে সাব-পয়েন্ট যোগ করতে ব্যবহৃত হয়। এটি বিস্তারিত তালিকা তৈরি করতে সাহায্য করে, যেখানে প্রতিটি স্তর নির্দিষ্ট করে সন্নিবিষ্ট তথ্য প্রদান করা হয়।</li>
        </ul>
    </li>
</ol>

`,chapter17:
        `
        <h2>Increase Indent / Decrease Indent এর কাজ</h2>

<h3>Increase Indent (ইনডেন্ট বাড়ানো):</h3>
<ul>
    <li><strong>কাজ:</strong> একটি প্যারাগ্রাফ বা টেক্সট ব্লকের বাম দিক থেকে দূরত্ব বাড়ানো।</li>
    <li><strong>ব্যবহার:</strong> এটি মূলত ব্যবহার করা হয় টেক্সট বা প্যারাগ্রাফের সজ্জা পরিবর্তনের জন্য, যেমন তালিকা বা উপশিরোনাম তৈরি করার সময়, যেখানে পাঠ্যের স্পষ্ট বিভাগ এবং স্তর দেখানো প্রয়োজন।</li>
    <li><strong>উদাহরণ:</strong> এক লেভেল বাইরের একটি তালিকার আইটেম তৈরি করার জন্য।</li>
</ul>

<h3>Decrease Indent (ইনডেন্ট কমানো):</h3>
<ul>
    <li><strong>কাজ:</strong> একটি প্যারাগ্রাফ বা টেক্সট ব্লকের বাম দিক থেকে দূরত্ব কমানো।</li>
    <li><strong>ব্যবহার:</strong> এটি মূলত ব্যবহৃত হয় প্যারাগ্রাফ বা টেক্সট ব্লকের স্থান পুনরায় ঠিক করার জন্য, যেমন যখন আপনি কোন প্যারাগ্রাফ বা টেক্সট ব্লকের স্তর পরিবর্তন করতে চান।</li>
    <li><strong>উদাহরণ:</strong> একটি স্তরের তালিকার আইটেম পুনরায় সাজানোর সময়।</li>
</ul>

<p>এভাবে ইনডেন্ট বাড়ানো এবং কমানো দ্বারা আপনি আপনার ডকুমেন্টে টেক্সটের বিভিন্ন স্তর এবং বিন্যাস সহজেই তৈরি করতে পারেন।</p>

`,chapter18:
        `
        <h2>Sort এর কাজ ও ব্যবহার</h2>

<h3>কাজ:</h3>
<ol>
    <li><strong>ডেটা সাজানো:</strong> Sort কমান্ডটি ব্যবহৃত হয় তালিকা বা টেবিলের ডেটা আলফাবেটিক্যালি (A-Z), ন্যুমেরিকালি (ছোট থেকে বড়) বা বিপরীতভাবে সাজাতে।</li>
    <li><strong>তালিকা ব্যবস্থাপনা:</strong> এটি বড় ডেটাসেট বা তালিকা আরও সহজে পড়া এবং বিশ্লেষণযোগ্য করতে সাহায্য করে।</li>
</ol>

`,chapter19:
        `
        <h2>Shading Color ব্যবহার করার ধাপগুলো:</h2>
<ol>
    <li>MS Word খুলুন এবং ডকুমেন্টে যান যেখানে শেডিং কালার প্রয়োগ করতে চান।</li>
    <li>যে টেক্সট বা প্যারাগ্রাফে শেডিং কালার প্রয়োগ করতে চান তা সিলেক্ট করুন।</li>
    <li>'Home' ট্যাবে যান।</li>
    <li>'Paragraph' গ্রুপে 'Shading' বাটনে ক্লিক করুন (এটি পেইন্ট বকসের মতো আইকন দিয়ে চিহ্নিত থাকে)।</li>
    <li>আপনার পছন্দের শেডিং কালার সিলেক্ট করুন:
        <ul>
            <li><strong>'Theme Colors'</strong>: থিমের অংশ হিসেবে প্রদত্ত রঙগুলির তালিকা।</li>
            <li><strong>'Standard Colors'</strong>: সাধারণ রঙের তালিকা।</li>
            <li><strong>'More Colors'</strong>: অতিরিক্ত রঙের বিকল্প এবং কাস্টম রঙ তৈরি করার অপশন।</li>
        </ul>
    </li>
    <li>শেডিং প্রয়োগ করা হয়েছে কিনা তা যাচাই করুন।</li>
</ol>

`,chapter20:
        `
        <h2>MS Word-এ Find and Replace ব্যবহার করার ধাপগুলো:</h2>
<ol>
    <li>MS Word খুলুন এবং ডকুমেন্টে যান যেখানে পরিবর্তন করতে চান।</li>
    <li>'Home' ট্যাবে যান।</li>
    <li>'Editing' গ্রুপে 'Replace' বাটনে ক্লিক করুন (বা কীবোর্ডে <strong>Ctrl + H</strong> চাপুন)।</li>
    <li>'Find and Replace' ডায়লগ বক্সটি ওপেন হবে।</li>
    <li>'Find what' ফিল্ডে আপনি যে টেক্সট বা শব্দটি খুঁজতে চান তা টাইপ করুন।</li>
    <li>'Replace with' ফিল্ডে আপনি যে টেক্সট বা শব্দটি প্রয়োগ করতে চান তা টাইপ করুন।</li>
    <li>নিচের বাটনগুলির মধ্যে একটি সিলেক্ট করুন:
        <ul>
            <li><strong>'Find Next'</strong>: পরবর্তী ম্যাচটি খুঁজে বের করুন।</li>
            <li><strong>'Replace'</strong>: বর্তমান ম্যাচটি প্রতিস্থাপন করুন।</li>
            <li><strong>'Replace All'</strong>: সমস্ত ম্যাচগুলোকে একসাথে প্রতিস্থাপন করুন।</li>
        </ul>
    </li>
    <li>'Close' বাটনে ক্লিক করুন ডায়লগ বক্স বন্ধ করতে।</li>
</ol>

`,
    chapter21:
        `
        <h2>MS Word এর Table-এ অংক করার জন্য ফর্মুলা ব্যবহার</h2>

<h3>Row:</h3>
<ul>
    <li><strong>ব্যাখ্যা:</strong> টেবিলের একাধিক সেল একসাথে অনুভূমিকভাবে সাজানো অংশ। প্রতিটি row একসাথে একটি সারি তৈরি করে যা একাধিক কলামের তথ্য ধারণ করে।</li>
    <li><strong>উদাহরণ:</strong> একটি টেবিলের প্রথম সারি যদি “নাম”, “বয়স”, এবং “পেশা” থাকে, তাহলে এই সারিটি একটি row।</li>
</ul>
<table border="1">
    <tr>
        <th>নাম</th>
        <th>বয়স</th>
        <th>পেশা</th>
    </tr>
    <tr>
        <td>রবিন</td>
        <td>২৫</td>
        <td>প্রকৌশলী</td>
    </tr>
    <tr>
        <td>সুমি</td>
        <td>৩০</td>
        <td>শিক্ষক</td>
    </tr>
</table>
<p>এখানে “রবিন”, “সুমি” ইত্যাদি তথ্যগুলি প্রথম row-এ।</p>

<h3>Column:</h3>
<ul>
    <li><strong>ব্যাখ্যা:</strong> টেবিলের একাধিক সেল একসাথে উল্লম্বভাবে সাজানো অংশ। প্রতিটি column একসাথে একটি স্তম্ভ তৈরি করে যা একাধিক row-এর তথ্য ধারণ করে।</li>
    <li><strong>উদাহরণ:</strong> একটি টেবিলের প্রথম column যদি “নাম” থাকে, তাহলে এই column সকল নামের তথ্য ধারণ করে।</li>
</ul>
<table border="1">
    <tr>
        <th>নাম</th>
        <th>বয়স</th>
        <th>পেশা</th>
    </tr>
    <tr>
        <td>রবিন</td>
        <td>২৫</td>
        <td>প্রকৌশলী</td>
    </tr>
    <tr>
        <td>সুমি</td>
        <td>৩০</td>
        <td>শিক্ষক</td>
    </tr>
</table>
<p>এখানে “নাম” একটি column যা “রবিন”, “সুমি” ইত্যাদি তথ্য ধারণ করে।</p>

<p><strong>বিঃ দ্রঃ</strong> কলাম (Column) কে a, b, c, d... আর রো (Row) কে 1, 2, 3, 4...... দিয়ে প্রকাশ করা হয়।</p>

<h3>পদ্ধতি-১</h3>
<ol>
    <li>টেবিলে যান যেখানে আপনি অংক করতে চান।</li>
    <li>সেলটি সিলেক্ট করুন যেখানে আপনি ফর্মুলাটি প্রয়োগ করতে চান।</li>
    <li>'Layout' ট্যাবে যান (টেবিল সিলেক্ট করার পর এই ট্যাবটি সক্রিয় হবে)।</li>
    <li>'Data' গ্রুপে 'Formula' বাটনে ক্লিক করুন।</li>
    <li>'Formula' ডায়লগ বক্সটি ওপেন হবে।
        <ul>
            <li>আপনি এখানে বিভিন্ন অংকীয় ফর্মুলা লিখতে পারবেন।</li>
        </ul>
    </li>
</ol>
<h4>সাধারণ ফর্মুলা:</h4>
<ul>
    <li><strong>যোগফল (Sum):</strong>
        <ul>
            <li>যদি আপনি টেবিলের উপর বা বামে সংখ্যাগুলো যোগ করতে চান, ফর্মুলা হবে: <code>=SUM(ABOVE)</code> অথবা <code>=SUM(LEFT)</code></li>
        </ul>
    </li>
    <li><strong>গড় নির্ণয় (Average):</strong>
        <ul>
            <li>যদি আপনি গড় নির্ণয় করতে চান: <code>=AVERAGE(ABOVE)</code></li>
        </ul>
    </li>
    <li><strong>বিয়োগ (Subtraction):</strong>
        <ul>
            <li>আপনি দুটি সেলের সংখ্যা বিয়োগ করতে পারেন, যেমন: <code>=A1-B1</code>
                <p>এখানে, A1 = ১ম কলাম এর ১ম রো, A2 = ১ম কলাম এর ২য় রো</p>
            </li>
        </ul>
    </li>
    <li><strong>গুণ (Multiplication):</strong>
        <ul>
            <li>দুটি সংখ্যা গুণ করতে চাইলে: <code>=A1*B1</code></li>
        </ul>
    </li>
    <li><strong>ভাগ (Division):</strong>
        <ul>
            <li>দুটি সংখ্যা ভাগ করতে চাইলে: <code>=A1/B1</code></li>
        </ul>
    </li>
</ul>
<h4>ফর্মুলা প্রয়োগ করার পর:</h4>
<ol>
    <li>'OK' বাটনে ক্লিক করুন।</li>
    <li>আপনার নির্বাচিত সেলে ফর্মুলার রেজাল্ট দেখাবে।</li>
    <li>উদাহরণ: আপনি যদি একটি টেবিলের উপর থাকা সংখ্যাগুলোর যোগফল বের করতে চান, তাহলে সেলে <code>=SUM(ABOVE)</code> ফর্মুলা লিখে OK চাপুন, এবং এটি সেই সংখ্যাগুলোর যোগফল দেখাবে।</li>
</ol>

<h3>পদ্ধতি-২</h3>
<ol>
    <li>প্রথমে টেবিলে যান যেখানে আপনি যোগফল বের করতে চান।</li>
    <li>যে সেলে যোগফল বের করতে চান, সেই সেলটি সিলেক্ট করুন।</li>
    <li>কীবোর্ডে <strong>Ctrl + F9</strong> চাপুন। এটি আপনাকে একটি ফর্মুলা ইনপুট ফিল্ড তৈরি করতে সাহায্য করবে, যেখানে <code>{}</code> ব্র্যাকেট দেখা যাবে।</li>
    <li>ব্র্যাকেটের ভিতর লিখুন: <code>=SUM(শুরুর ঘর:শেষের ঘর)</code>
        <br><strong>উদাহরণ:</strong> আপনি যদি প্রথম থেকে তৃতীয় ঘর পর্যন্ত যোগফল বের করতে চান, তাহলে এটি হবে: <code>=SUM(A1:A3)</code>
    </li>
    <li>তারপর <strong>F9</strong> চাপুন ফর্মুলাটি কার্যকর করার জন্য। সেলটিতে যোগফল প্রদর্শিত হবে। যদি F9 চাপার পরেও যোগফল প্রদর্শিত না হয় তবে প্রথমে F9 এ চেপে তার পরে <strong>Shift + F9</strong> এ চাপুন।</li>
</ol>
<h4>ফর্মুলার উদাহরণ:</h4>
<ul>
    <li>যদি আপনি A1 থেকে A3 পর্যন্ত সংখ্যার যোগফল বের করতে চান, তাহলে:
        <ol>
            <li><strong>Ctrl + F9</strong></li>
            <li><code>{ =SUM(A1:A3) }</code></li>
            <li><strong>F9</strong></li>
        </ol>
    </li>
</ul>

`,chapter22:
        `
        <h2>টেবিলের মধ্যে ম্যানুয়ালি যোগ, বিয়োগ, গুণ, ভাগ করার ধাপগুলো:</h2>

<h3>1. যোগ (Addition) করা:</h3>
<ol>
    <li>প্রথমে টেবিলে যান যেখানে আপনি যোগফল বের করতে চান।</li>
    <li>সেলটি সিলেক্ট করুন যেখানে আপনি ফলাফল দেখাতে চান।</li>
    <li>কীবোর্ডে <strong>Ctrl + F9</strong> চাপুন, {} ব্র্যাকেট দেখা যাবে।</li>
    <li>ব্র্যাকেটের ভিতর ফর্মুলা লিখুন: <code>=A1 + A2 + A3</code></li>
    <li>তারপর <strong>F9</strong> চাপুন, যোগফল দেখাবে।</li>
</ol>

<h3>2. বিয়োগ (Subtraction) করা:</h3>
<ol>
    <li>সেল সিলেক্ট করে কীবোর্ডে <strong>Ctrl + F9</strong> চাপুন।</li>
    <li>ব্র্যাকেটের ভিতর ফর্মুলা লিখুন: <code>=A1 - A2</code></li>
    <li><strong>F9</strong> চাপুন, বিয়োগের ফলাফল দেখাবে।</li>
</ol>

<h3>3. গুণ (Multiplication) করা:</h3>
<ol>
    <li>সেল সিলেক্ট করে <strong>Ctrl + F9</strong> চাপুন।</li>
    <li>ফর্মুলা লিখুন: <code>=A1 * A2</code></li>
    <li><strong>F9</strong> চাপুন, গুণের ফলাফল দেখাবে।</li>
</ol>

<h3>4. ভাগ (Division) করা:</h3>
<ol>
    <li>সেল সিলেক্ট করে <strong>Ctrl + F9</strong> চাপুন।</li>
    <li>ফর্মুলা লিখুন: <code>=A1 / A2</code></li>
    <li><strong>F9</strong> চাপুন, ভাগের ফলাফল দেখাবে।</li>
</ol>

<h4>উদাহরণ:</h4>
<p>আপনি যদি A1 এবং A2 সেলে থাকা সংখ্যা যোগ করতে চান, তাহলে টাইপ করবেন: <code>{=A1 + A2}</code> তারপর <strong>F9</strong> চাপলে ফলাফল দেখাবে।</p>

<h2>শতকরা হার নির্ণয়ের ধাপগুলো:</h2>
<ol>
    <li>টেবিলের সেই সেল সিলেক্ট করুন যেখানে আপনি শতকরা হার (% Percentage) বের করতে চান।</li>
    <li>কীবোর্ডে <strong>Ctrl + F9</strong> চাপুন, একটি {} ব্র্যাকেট তৈরি হবে।</li>
    <li>ব্র্যাকেটের ভিতরে ফর্মুলা লিখুন: <code>=A1 * X%</code>
        <p>এখানে, A1 হচ্ছে সেই সংখ্যার শতকরা হার (%) বের করতে চান এবং X হচ্ছে কত পার্সেন্ট (%)</p>
    </li>
    <li>তারপর <strong>F9</strong> চাপুন, ফর্মুলাটি কার্যকর হবে এবং আপনি শতকরা হার দেখতে পাবেন।</li>
</ol>

<h4>উদাহরণ:</h4>
<p>যদি আপনি জানতে চান 200 এর 25% কত: <code=(200*25%)</code>
    <br>এরপর <strong>F9</strong> চাপলে ফলাফল দেখাবে 50%।
</p>
<p><strong>(বিঃ দ্রঃ</strong> এই সূত্র টি <strong>Ctrl + F9</strong> চাপলে সেকেন্ড ব্র্যাকেট {} আসলে তার ভেতরে লিখতে হবে)</p>

`,chapter23:
        `
<h2>টেবিল তৈরি করা:</h2>
<p>টেবিল এ ক্লিক করে <strong>Insert Table</strong> এ ক্লিক করে টেবিল নেওয়া যায়।</p>

<h3>Text থেকে Table বানানোর জন্য</h3>
<p>উদাহরণ:</p>
<pre>
Sajid,Sirajganj,2003
Samir,Dhaka,2004
</pre>
<p>এই ধরনের টেক্সট থাকলে টেবিল বানানোর জন্য:</p>
<ol>
    <li>Text সিলেক্ট করুন।</li>
    <li>টেবিল (Insert Menu) এ যান।</li>
    <li><strong>Convert Text To Table</strong> নির্বাচন করুন।</li>
    <li>Separate Text at সেকশন এ যেইটা নির্বাচন করতে হবে তার ভিত্তিতে লেখা আলাদা করা হয়েছে (দাড়ি, কমা, স্পেস, Tab ইত্যাদি)।</li>
    <li>অথবা <strong>Others</strong> এ ক্লিক করে <strong>Others</strong> এর পাশে Box এ লিখে দিতে হবে।</li>
</ol>

<p>উদাহরণ হিসেবে:</p>
<pre>
Sajid,Sirajganj,2003
Samir,Dhaka,2004
</pre>
<p>যেহেতু কমা (,) দিয়ে আলাদা করা আছে, তাই এইটার ক্ষেত্রে Box টিতে কমা লিখতে হবে।</p>

`,

    chapter24:
        `
        <h2>ডকুমেন্টে কোনো ছবি যোগ করার জন্য:</h2>
<ol>
    <li><strong>Insert</strong> (Menu Bar) এ যান।</li>
    <li><strong>Picture</strong> নির্বাচন করুন।</li>
    <li>যেই ছবিটি নিতে চান তা <strong>Select</strong> করতে হবে।</li>
    <li>ফাইলটি ইনসার্ট করতে <strong>Enter</strong> এ ক্লিক করুন।</li>
</ol>

<h3>অন্য অপশনগুলো:</h3>
<ul>
    <li><strong>Shapes</strong> অপশন থেকে বিভিন্ন ধরনের শেপ (ত্রিভূজ, চতুর্ভূজ, বৃত্ত ইত্যাদি) নেওয়া যায়।</li>
    <li><strong>Icons</strong> অপশন থেকে বিভিন্ন ধরনের আইকন, ছবি, ক্লিপ আর্ট ইত্যাদি নেওয়া যায়।</li>
    <li><strong>3D Models</strong> অপশন থেকে 3D মডেল নেওয়া যায়।</li>
</ul>

`,chapter25:
        `
        <h2>Shape</h2>
<p>কোনো Shape নেওয়ার পরে তা Select করলে Menu Bar এ “Shape Format” নামে নতুন একটা অপশন আসে। সেখানে যেয়ে Shape গুলো বিভিন্ন ভাবে কাস্টোমাইজ করা যায়। যেমনঃ-</p>
<ol>
    <li><strong>Shape Fill</strong> – Shape এর রঙ পরিবর্তন করার জন্য ব্যবহার করা হয়।</li>
    <li><strong>Shape Outline</strong> – Shape এর বাহিরের অংশের রঙ পরিবর্তন করা, Outline মুছে ফেলা, Outline এর পুরুত্ব বাড়ানো বা কমানোর জন্য, এবং বিভিন্ন ধরনের Outline প্রয়োগ করার জন্য এটি ব্যবহার করা হয়।</li>
    <li><strong>Shape Effects</strong> – Shape এর উপরে বিভিন্ন Effects প্রয়োগ করার জন্য ব্যবহার করা হয়।</li>
    <li><strong>Position</strong> – এই অপশনের সাহায্যে Shape টি Document এর ডান, বাম, উপরে বা নিচে সরানো যায়।</li>
    <li><strong>Wrap Text</strong> – এর সাহায্যে লেখা ছবির চারপাশে কিভাবে থাকবে তা নির্ধারণ করা হয়।</li>
    <li><strong>Bring Forward</strong> – Shape কে অন্য Shape গুলোর উপরে আনার জন্য ব্যবহার করা হয়।</li>
    <li><strong>Bring Backward</strong> – Shape কে অন্য Shape গুলোর নিচে নামানোর জন্য ব্যবহার করা হয়।</li>
    <li><strong>Rotate</strong> – এর সাহায্যে Shape গুলোকে ঘুরানো বা Rotate করানো হয়।</li>
</ol>
<p>(বিঃ দ্রঃ Shape / Picture / Icon ইত্যাদি মাউস এর সাহায্য যায়গা পরিবর্তন করাতে চাইলে প্রথমে তা Select করতে হবে, তারপরে Wrap Text এ যেয়ে Through তে ক্লিক করতে হবে। তাহলে মাউস দিয়ে সরানো যাবে)</p>

`,chapter26:
        `
        <h2>Table দিয়ে ব্যানার তৈরির ধাপসমূহ:</h2>
<ol>
    <li>প্রথমে একটি টেবিল নিন।</li>
    <li>যতগুলো ছবি এবং ছবির ক্যাপশন/টেক্সট লাগবে, ততগুলো ঘর তৈরি করুন।</li>
    <li>ছবির ঘরগুলোতে Height এবং Width সেট করুন, ছবির আকার অনুযায়ী।<br>
        <strong>এর জন্য:</strong>
        <ul>
            <li>ঘরগুলো সিলেক্ট করুন।</li>
            <li>Layout (Menu Bar) &gt; Cell Size (Ribbon Bar) এ যান।</li>
            <li>Height এবং Width অপশন ব্যবহার করে ঘরগুলোর আকার ঠিক করুন।</li>
        </ul>
    </li>
    <li>পুরো টেবিল সিলেক্ট করুন।<br>
        <strong>এর জন্য:</strong>
        <ul>
            <li>Layout (Menu Bar) &gt; AutoFit &gt; Fixed Column Width সিলেক্ট করুন।</li>
        </ul>
    </li>
    <li>যে Row-এ ছবি বসাবেন সেগুলো সিলেক্ট করুন।<br>
        <strong>এর জন্য:</strong>
        <ul>
            <li>Layout &gt; Properties &gt; Row &gt; Specify Height টিক দিন।</li>
            <li>পাশের "At least" থেকে Exactly সিলেক্ট করুন, তারপর OK চাপুন।</li>
        </ul>
    </li>
    <li>Table-এ ক্লিক করে Insert (Menu Bar) &gt; Picture (Ribbon Bar) &gt; Select Picture &gt; Enter চাপুন।</li>
    <li>সবগুলো ছবি বসানোর পরে:<br>
        <strong>এর জন্য:</strong>
        <ul>
            <li>Layout &gt; Autofit &gt; AutoFit Contents সিলেক্ট করুন।</li>
        </ul>
    </li>
    <li>প্রয়োজনীয় টেক্সট লিখুন।</li>
    <li>পুরো টেবিল সিলেক্ট করুন।<br>
        <strong>এর জন্য:</strong>
        <ul>
            <li>Home &gt; Border এর Arrow (Ribbon Bar-এর Paragraph অংশে) &gt; Borders and Shading এ ক্লিক করুন।</li>
            <li>Color সিলেক্ট করুন।</li>
            <li>Background এর Color অনুযায়ী Border Color সিলেক্ট করুন।</li>
        </ul>
    </li>
    <li>OK চাপুন।</li>
</ol>
<p>এভাবে আপনি একটি টেবিল ব্যবহার করে সুন্দর একটি ব্যানার তৈরি করতে পারবেন।</p>

`,chapter27:
        `
<h2>Page এর Margin বা Border সরানোর নিয়ম:</h2>
<ol>
    <li>Office Button এ ক্লিক করুন।</li>
    <li>Word Option-এ যান।</li>
    <li>Advanced সিলেক্ট করুন।</li>
    <li>Show Document Content এর ভেতরে Show text boundaries-এর টিক তুলে দিন।</li>
</ol>

`,chapter28:
        `
<h2>Smart Art যোগ করার ধাপ:</h2>
<ol>
    <li>Insert-এ ক্লিক করুন।</li>
    <li>Smart Art সিলেক্ট করুন।</li>
    <li>যেই ডিজাইন পছন্দ হয়, সেটি Select করুন।</li>
    <li>OK চাপুন।</li>
</ol>

`,chapter29:
        `
<h2>Graph/Chart যোগ করার ধাপ:</h2>
<ol>
    <li>Insert-এ যান।</li>
    <li>Chart-এ ক্লিক করুন।</li>
    <li>পছন্দমতো Chart সিলেক্ট করুন।</li>
    <li>OK চাপুন।</li>
</ol>
<p>OK ক্লিক করলে একটি Chart এবং পাশের একটি Excel File আসবে। সেই Excel File থেকে Chart এর Data Edit করতে হবে।</p>

<h3>Excel File কেটে দেওয়ার পরে পুনরায় Data Edit করতে চাইলে:</h3>
<ol>
    <li>Chart সিলেক্ট করুন।</li>
    <li>Edit Data (Ribbon Bar)-এ ক্লিক করুন।</li>
</ol>

`,chapter30:
        `
<h2>Hyperlink যোগ করার ধাপসমূহ:</h2>
<p>কোনো Text বা ছবিতে লিঙ্ক বসানোর জন্য:</p>
<ol>
    <li>Text বা ছবি সিলেক্ট করুন।</li>
    <li>Insert (Menu Bar) এ যান।</li>
    <li>Hyperlink এ ক্লিক করুন।</li>
    <li>Address-এ ফাইলের লোকেশন/Address লিখুন বা Browse করে ফাইল সিলেক্ট করুন।</li>
    <li>OK চাপুন।</li>
</ol>

`,chapter31:
        `
<h2>Bookmark যোগ করার ধাপসমূহ:</h2>
<ol>
    <li>যে Text/Paragraph/Page-কে Bookmark করবেন, সেটি সিলেক্ট করুন।</li>
    <li>Insert (Menu Bar) এ যান।</li>
    <li>Bookmark-এ ক্লিক করুন।</li>
    <li>Bookmark Name-এ একটি নাম লিখুন।</li>
    <li>Add চাপুন।</li>
    <li>OK চাপুন।</li>
</ol>

<h3>Bookmark ব্যবহার করতে চাইলে:</h3>
<ol>
    <li>Insert (Menu Bar) > Bookmark এ যান।</li>
    <li>সেখান থেকে সংরক্ষিত Bookmark Name-টি সিলেক্ট করুন।</li>
    <li>Go To-তে ক্লিক করলে সেই অংশে চলে যাবে।</li>
</ol>

`,chapter32:
        `
<h2>Colon (:) কে এক লাইনে Align করার ধাপসমূহ:</h2>
<p>উদাহরণ:</p>
<pre>
Name         :
Father’s Name :
Mother’s Name :
Mobile Number  :
</pre>

<p>এইভাবে Colon (:) গুলোকে এক লাইনে আনার জন্য:</p>
<ol>
    <li>Text গুলো সিলেক্ট করুন।</li>
    <li>মাউসের Right Button-এ ক্লিক করুন।</li>
    <li>Paragraph-এ যান।</li>
    <li>Tabs-এ ক্লিক করুন।</li>
    <li>Tab Stop Position-এ পেজের উপরে থাকা স্কেল অনুযায়ী, যেখানে Colon (:) টি Align করতে চান, সেই পজিশন (যেমন: “2.5”) লিখুন।</li>
    <li>Set করুন।</li>
    <li>OK চাপুন।</li>
    <li>Colon (:)-এর সামনে গিয়ে Keyboard-এর Tab Button-এ ক্লিক করুন।</li>
    <li>Colon (:) গুলো স্কেল অনুযায়ী 2.5 পজিশনে Align হবে।</li>
</ol>

`,chapter33:
        `
<h2>Header ব্যবহার করার ধাপ:</h2>
<ol>
    <li>Insert (Menu Bar)-এ যান।</li>
    <li>Header-এ ক্লিক করুন।</li>
    <li>বিভিন্ন ধরণের Header ডিজাইন থেকে যেকোনোটি সিলেক্ট করুন।</li>
    <li>প্রয়োজন অনুযায়ী Header-এ টেক্সট টাইপ করুন।</li>
    <li>পরিবর্তন সম্পন্ন হলে <strong>Close Header and Footer</strong>-এ ক্লিক করুন অথবা ডাবল ক্লিক করে ডকুমেন্টের মূল অংশে চলে যান।</li>
</ol>

`,chapter34:
        `
<h2>Footer ব্যবহার করার ধাপ:</h2>
<ol>
    <li>Insert (Menu Bar)-এ যান।</li>
    <li>Footer-এ ক্লিক করুন।</li>
    <li>বিভিন্ন ধরণের Footer ডিজাইন থেকে যেকোনোটি সিলেক্ট করুন।</li>
    <li>প্রয়োজন অনুযায়ী Footer-এ টেক্সট টাইপ করুন।</li>
    <li>পরিবর্তন সম্পন্ন হলে <strong>Close Header and Footer</strong>-এ ক্লিক করুন অথবা ডাবল ক্লিক করে ডকুমেন্টের মূল অংশে চলে যান।</li>
</ol>

`,

    chapter35:
        `
<h2>Page Number ব্যবহার করার ধাপ:</h2>
<ol>
    <li>Insert (Menu Bar)-এ যান।</li>
    <li>Page Number-এ ক্লিক করুন।</li>
    <li>পেজ নম্বর কোথায় বসাতে চান তা সিলেক্ট করুন (উপর, নিচ, পাশে ইত্যাদি)।</li>
    <li>পছন্দমতো Page Number এর স্টাইল সিলেক্ট করুন।</li>
    <li>প্রয়োজনে <strong>Format Page Numbers</strong>-এ গিয়ে Number Format বা Starting Number ঠিক করতে পারেন।</li>
    <li>কাজ শেষ হলে <strong>Close Header and Footer</strong>-এ ক্লিক করুন।</li>
</ol>

`,
chapter36:
        `
<h2>Word Art ব্যবহার করার ধাপসমূহ:</h2>
<ol>
    <li>Insert (Menu Bar)-এ যান।</li>
    <li>Word Art (Ribbon Bar)-এ ক্লিক করুন।</li>
    <li>আপনার পছন্দের Style সিলেক্ট করুন।</li>
    <li>“Your Text Here”-এর জায়গায় আপনার প্রয়োজনীয় Text লিখুন।</li>
    <li>Font Box থেকে Font এবং Size পরিবর্তন করুন।</li>
    <li>OK তে ক্লিক করুন।</li>
</ol>

<h2>Word Art এর Text Edit করার নিয়ম:</h2>
<ol>
    <li>Text-এর উপরে ক্লিক করুন।</li>
    <li>Format (Menu Bar)-এ যান।</li>
    <li>Edit Text (Ribbon Bar)-এ ক্লিক করুন।</li>
</ol>

<h2>Word Art এর Text এর মধ্যকার দূরত্ব কমানোর নিয়ম:</h2>
<ol>
    <li>Edit Text-এর পাশে Spacing Icon-এ ক্লিক করুন।</li>
    <li>পছন্দমতো দূরত্ব সিলেক্ট করুন।</li>
</ol>

<h2>Word Art এর Style পরিবর্তন করার নিয়ম:</h2>
<ol>
    <li>Text-এ ক্লিক করুন।</li>
    <li>Format (Menu Bar)-এ যান।</li>
    <li>Word Style থেকে পছন্দ অনুযায়ী Style সিলেক্ট করুন।</li>
</ol>

<h2>Word Art দেওয়ার সময় Text Select করলে আসা কিছু অতিরিক্ত অপশন:</h2>
<ul>
    <li><strong>Shape Fill:</strong>
        <ul>
            <li>লেখার Color পরিবর্তন করতে পারেন।</li>
            <li>Shape Fill → Picture-এ গেলে Text-এর ভেতরে ছবি বা Texture অ্যাড করা যায়।</li>
        </ul>
    </li>
    <li><strong>Shape Outline:</strong>
        <ul>
            <li>Shape Outline-এর Color পরিবর্তন করা যায়।</li>
            <li>Shape Outline → No Outline থেকে Outline সরানো যায়।</li>
            <li>Shape Outline → Shape Weight-এ গিয়ে Outline মোটা বা চিকন করা যায়।</li>
            <li>Shape Outline → Dashes দিয়ে বিভিন্ন ধরনের Outline দেওয়া যায়।</li>
            <li>Shape Outline → Pattern-এ Outline-এ Pattern অ্যাড করা যায়।</li>
        </ul>
    </li>
    <li><strong>Change Shape:</strong>
        <ul>
            <li>Text-কে বিভিন্ন আকারে পরিবর্তন করা যায়।</li>
        </ul>
    </li>
    <li><strong>Shadow Effect:</strong>
        <ul>
            <li>Text-এ Shadow Effect অ্যাড করা যায়।</li>
            <li>চারপাশে থাকা Shadow Effect-এর Icon-এ ক্লিক করে ছায়া ডানে/বামে/উপরে/নিচে নেওয়া যায়।</li>
        </ul>
    </li>
    <li><strong>3D Effect:</strong>
        <ul>
            <li>Text-এ বিভিন্ন ধরনের 3D Effect দেওয়া যায়।</li>
            <li>3D Effect → 3D Color দিয়ে Color পরিবর্তন করা যায়।</li>
            <li>3D Effect → Depth দিয়ে গভীরতা কম/বেশি করা যায়।</li>
            <li>3D Effect → Direction দিয়ে 3D Effect-এর দিক পরিবর্তন করা যায়।</li>
            <li>3D Effect → Lighting দিয়ে Lighting-এর দিক পরিবর্তন করা যায়।</li>
            <li>3D Effect → Surface দিয়ে 3D Effect-এ বিভিন্ন উপাদান (যেমন: লোহা/প্লাস্টিক) অ্যাড করা যায়।</li>
            <li>চারপাশে থাকা 3D Effect-এর Icon-গুলোতে ক্লিক করে 3D Effect-কে ডানে/বামে/উপরে/নিচে সরানো যায়।</li>
        </ul>
    </li>
</ul>

`,
chapter37:
        `
<h2>Equation যোগ করার ধাপসমূহ:</h2>
<ol>
    <li>Insert (Menu Bar)-এ যান।</li>
    <li>Equation (Ribbon Bar)-এ ক্লিক করুন।</li>
    <li>Insert New Equation সিলেক্ট করুন।</li>
    <li>শর্টকাট ব্যবহার করতে চাইলে Alt + = প্রেস করুন।</li>
</ol>

`,
chapter38:
        `
<h2>Symbol আনার ধাপসমূহ:</h2>
<ol>
    <li>Insert (Menu Bar)-এ যান।</li>
    <li>Symbol (Ribbon Bar)-এ ক্লিক করুন।</li>
    <li>প্রয়োজনীয় Symbol সিলেক্ট করুন।</li>
    <li>Insert এ ক্লিক করুন।</li>
</ol>

`,
chapter39:
        `
<h2>Word Art এ Shape Fill</h2>
<ol>
    <li>Word Art-এর Text সিলেক্ট করুন।</li>
    <li>Format (Menu Bar)-এ যান।</li>
    <li>Shape Fill (Ribbon Bar)-এ ক্লিক করুন।</li>
    <li>এখান থেকে পছন্দমতো Color সিলেক্ট করুন।</li>
</ol>

<h2>Word Art এ Shape Fill দিয়ে লেখার ভেতরে Color এর পরিবর্তে ছবি যোগ করার ধাপ:</h2>
<ol>
    <li>Word Art-এর Text সিলেক্ট করুন।</li>
    <li>Format (Menu Bar)-এ যান।</li>
    <li>Shape Fill (Ribbon Bar)-এ ক্লিক করুন।</li>
    <li>Picture অপশনে ক্লিক করুন।</li>
    <li>আপনার কম্পিউটার থেকে পছন্দের Picture সিলেক্ট করুন।</li>
    <li>Insert-এ ক্লিক করুন, এবং ছবিটি লেখার ভেতরে যোগ হয়ে যাবে।</li>
</ol>

<h2>Word Art এ Shape Outline দিয়ে Color পরিবর্তনের ধাপ:</h2>
<ol>
    <li>Word Art-এর Text সিলেক্ট করুন।</li>
    <li>Format (Menu Bar)-এ যান।</li>
    <li>Shape Outline (Ribbon Bar)-এ ক্লিক করুন।</li>
    <li>এখান থেকে পছন্দমতো Color সিলেক্ট করুন।</li>
</ol>

<h2>Shape Outline সরানোর ধাপ:</h2>
<ol>
    <li>Shape Outline (Ribbon Bar)-এ যান।</li>
    <li>No Outline-এ ক্লিক করুন।</li>
</ol>

<h2>Shape Outline-এর মোটা বা চিকন করার ধাপ:</h2>
<ol>
    <li>Shape Outline (Ribbon Bar)-এ ক্লিক করুন।</li>
    <li>Weight অপশনে যান।</li>
    <li>আপনার পছন্দ অনুযায়ী Weight সিলেক্ট করুন (মোটা বা চিকন)।</li>
</ol>

<h2>Shape Outline-এ বিভিন্ন ধরনের ড্যাশ যোগ করার ধাপ:</h2>
<ol>
    <li>Shape Outline (Ribbon Bar)-এ ক্লিক করুন।</li>
    <li>Dashes অপশনে যান।</li>
    <li>পছন্দমতো Dash Style সিলেক্ট করুন।</li>
</ol>

<h2>Shape Outline-এ Pattern যোগ করার ধাপ:</h2>
<ol>
    <li>Shape Outline (Ribbon Bar)-এ ক্লিক করুন।</li>
    <li>Pattern অপশনে যান।</li>
    <li>পছন্দমতো Pattern সিলেক্ট করুন।</li>
</ol>

<h2>Word Art-এ Change Shape দিয়ে Text-এর আকৃতি পরিবর্তনের ধাপ:</h2>
<ol>
    <li>Word Art-এর Text সিলেক্ট করুন।</li>
    <li>Format (Menu Bar)-এ যান।</li>
    <li>Change Shape (Ribbon Bar)-এ ক্লিক করুন।</li>
    <li>এখানে বিভিন্ন আকারের অপশন আসবে।</li>
    <li>পছন্দমতো Shape সিলেক্ট করুন।</li>
</ol>

<h2>Word Art-এ Shadow Effects যোগ করার ধাপ:</h2>
<ol>
    <li>Word Art-এর Text সিলেক্ট করুন।</li>
    <li>Format (Menu Bar)-এ যান।</li>
    <li>Shadow Effects (Ribbon Bar)-এ ক্লিক করুন।</li>
    <li>এখানে Shadow অপশনের বিভিন্ন ধরনের স্টাইল দেখা যাবে।</li>
</ol>

<h2>Shadow Effects এর চারদিকে চারটা Shadow Effect Icon ব্যবহার করার নিয়ম:</h2>
<ol>
    <li>Shadow Effects (Ribbon Bar)-এ ক্লিক করুন।</li>
    <li>চারদিকে চারটি Shadow Effect Icon থাকবে (ডানে/বামে/উপরে/নিচে)।</li>
    <li>যেকোনো Icon এ ক্লিক করে Shadow কে বিভিন্ন দিকে স্থানান্তর করুন (যেমন ডানে, বামে, উপরে, বা নিচে)।</li>
</ol>

<h2>Word Art-এ 3D Effect যোগ করার ধাপ:</h2>
<ol>
    <li>Word Art-এর Text সিলেক্ট করুন।</li>
    <li>Format (Menu Bar)-এ যান।</li>
    <li>3D Effects (Ribbon Bar)-এ ক্লিক করুন।</li>
</ol>

<h2>3D Effect-এ বিভিন্ন অপশন কাস্টমাইজ করার নিয়ম:</h2>
<ol>
    <li><strong>3D Color:</strong>
        <ol>
            <li>3D Effects-এ ক্লিক করুন।</li>
            <li>3D Color অপশনে যান।</li>
            <li>আপনার পছন্দ অনুযায়ী Color সিলেক্ট করুন।</li>
        </ol>
    </li>
    <li><strong>Depth:</strong>
        <ol>
            <li>3D Effects-এ ক্লিক করুন।</li>
            <li>Depth অপশনে যান।</li>
            <li>গভীরতা কমাতে বা বাড়াতে স্লাইডার ব্যবহার করুন।</li>
        </ol>
    </li>
    <li><strong>Direction:</strong>
        <ol>
            <li>3D Effects-এ ক্লিক করুন।</li>
            <li>Direction অপশনে যান।</li>
            <li>3D Effect এর দিক পরিবর্তন করতে পছন্দমতো অপশন সিলেক্ট করুন।</li>
        </ol>
    </li>
    <li><strong>Lighting:</strong>
        <ol>
            <li>3D Effects-এ ক্লিক করুন।</li>
            <li>Lighting অপশনে যান।</li>
            <li>Lighting এর দিক পরিবর্তন করতে পছন্দমতো অপশন সিলেক্ট করুন।</li>
        </ol>
    </li>
    <li><strong>Surface:</strong>
        <ol>
            <li>3D Effects-এ ক্লিক করুন।</li>
            <li>Surface অপশনে যান।</li>
            <li>Surface-এর উপরে লোহা, প্লাস্টিক ইত্যাদি এফেক্ট যোগ করতে পছন্দমতো অপশন সিলেক্ট করুন।</li>
        </ol>
    </li>
</ol>

<h2>3D Effect এর চারদিকে চারটা 3D Effect Icon ব্যবহার করার নিয়ম:</h2>
<ol>
    <li>3D Effects-এ ক্লিক করুন।</li>
    <li>চারদিকে চারটি 3D Effect Icon থাকবে (ডানে/বামে/উপরে/নিচে)।</li>
    <li>যেকোনো Icon-এ ক্লিক করে 3D Effect কে বিভিন্ন দিকে স্থানান্তর করুন।</li>
</ol>

`,
};

// Function to show content based on chapter selection
function showContent(chapter) {
    // Update content
    document.getElementById('text-sample').innerHTML = content[chapter] || "যেকোনো একটা অধ্যায়ে ক্লিক করুন।";

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

    // Toggle visibility and button text
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
    showContent('chapter'); // Load initial chapter content
    document.querySelector('.sidebar').style.display = 'block'; // Ensure sidebar is visible initially
});

// Attach event listener to the toggle button
document.getElementById('toggleSidebar').addEventListener('click', toggleSidebar);
