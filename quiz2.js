const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const timerCount = document.getElementById('timer-count');
const timerBar = document.getElementById('timer-bar');
const scoreDisplay = document.getElementById('score');
const totalQuestionsDisplay = document.getElementById('total-questions');

const questions = [
    // Existing questions
    {
        question: 'বাংলাদেশের রাজধানী কি?',
        answers: [
            { text: 'ঢাকা', correct: true },
            { text: 'কক্সবাজার', correct: false },
            { text: 'চট্টগ্রাম', correct: false },
            { text: 'রাজশাহী', correct: false }
        ]
    },
    {
        question: 'পৃথিবীর সবচেয়ে বড় মহাসাগর কোনটি?',
        answers: [
            { text: 'অ্যাটলান্টিক', correct: false },
            { text: 'ইন্ডিয়ান', correct: false },
            { text: 'প্যাসিফিক', correct: true },
            { text: 'আর্কটিক', correct: false }
        ]
    },
    {
        question: 'সাধারণত মানব দেহে কতটি হৃৎপিণ্ড থাকে?',
        answers: [
            { text: '১', correct: true },
            { text: '২', correct: false },
            { text: '৩', correct: false },
            { text: '৪', correct: false }
        ]
    },
    {
        question: 'মহাকাশে সর্বপ্রথম মানুষ হিসেবে কে গিয়েছিলেন?',
        answers: [
            { text: 'নিল আর্মস্ট্রং', correct: true },
            { text: 'ইউরি গাগারিন', correct: false },
            { text: 'চার্লস লিন্ডবার্গ', correct: false },
            { text: 'জন গ্লেন', correct: false }
        ]
    },
    {
        question: 'বাংলাদেশের জাতীয় ফুল কোনটি?',
        answers: [
            { text: 'শাপলা', correct: true },
            { text: 'পদ্ম', correct: false },
            { text: 'জুঁই', correct: false },
            { text: 'গোলাপ', correct: false }
        ]
    },
    {
        question: 'জলবায়ুর পরিবর্তনের জন্য সবচেয়ে বড় কারণ কি?',
        answers: [
            { text: 'গ্রীনহাউজ গ্যাস', correct: true },
            { text: 'মহাসাগর', correct: false },
            { text: 'জ্বালানি', correct: false },
            { text: 'বৃষ্টিপাত', correct: false }
        ]
    },
    {
        question: 'বিশ্বকাপ ক্রিকেট ২০২৩-এ বাংলাদেশের কোন খেলোয়াড় সর্বোচ্চ রান করেন?',
        answers: [
            { text: 'মাহমুদুল্লাহ রিয়াদ', correct: true },
            { text: 'সাকিব আল হাসান', correct: false },
            { text: 'তামিম ইকবাল', correct: false },
            { text: 'লিটন দাস', correct: false }
        ]
    },
    {
        question: 'ব-দ্বীপ পরিকল্পনা ২১০০-এ কয়টি ভৌগোলিক হটস্পট নির্ধারণ করা হয়েছে?',
        answers: [
            { text: '৪', correct: false },
            { text: '৫', correct: false },
            { text: '৬', correct: true },
            { text: '৭', correct: false }
        ]
    },
    {
        question: 'বাংলাদেশ সর্বাধিক জনশক্তি রপ্তানি করে কোন দেশে?',
        answers: [
            { text: 'সংযুক্ত আরব আমিরাত', correct: true },
            { text: 'কাতার', correct: false },
            { text: 'সৌদি আরব', correct: false },
            { text: 'মালয়েশিয়া', correct: false }
        ]
    },
    {
        question: 'কতজন নারী ২০২৩ সালের বেগম রোকেয়া পদক পেয়েছেন?',
        answers: [
            { text: '৩', correct: false },
            { text: '৪', correct: false },
            { text: '৫', correct: true },
            { text: '৬', correct: false }
        ]
    },
    {
        question: 'শাহজালাল আন্তর্জাতিক বিমানবন্দরের তৃতীয় টার্মিনালের স্থপতি কে?',
        answers: [
            { text: 'রোহানি বাহারিন', correct: true },
            { text: 'নাসির উদ্দিন', correct: false },
            { text: 'জাহাঙ্গীর আলম', correct: false },
            { text: 'অফিকুল ইসলাম', correct: false }
        ]
    },
    {
        question: 'বাংলাদেশের ২১তম জিওগ্রাফিক্যাল ইন্ডিকেটর (জিআই) প্রোডাক্ট কোনটি?',
        answers: [
            { text: 'বাংলাদেশের ব্ল্যাক বেঙ্গাল ছাগল', correct: true },
            { text: 'হরিণের মাংস', correct: false },
            { text: 'সীতাকুণ্ডের তাজা মাছ', correct: false },
            { text: 'কুষ্টিয়ার মিষ্টি', correct: false }
        ]
    },
    {
        question: 'নিচে উল্লেখিত বাংলাদেশ সরকারের কোন মডেলটি জাতিসংঘ স্বীকৃতি দিয়েছে?',
        answers: [
            { text: 'কমিউনিটি ক্লিনিক', correct: true },
            { text: 'শিক্ষা সেবা', correct: false },
            { text: 'নিরাপদ খাদ্য', correct: false },
            { text: 'গ্রামীন ব্যাংক', correct: false }
        ]
    },
    {
        question: 'ইসরাইলে পরিচালিত হামাসের সাম্প্রতিক অপারেশনের নাম কী?',
        answers: [
            { text: 'আল-আকসা ফ্লাড', correct: true },
            { text: 'ডিফেন্স শিল্ড', correct: false },
            { text: 'স্টর্ম রাইজিং', correct: false },
            { text: 'অপারেশন গ্লোবাল', correct: false }
        ]
    },
    {
        question: 'বাংলাদেশ ডেলটা প্ল্যান ২১০০’ প্রণয়নে কারিগরি সহায়তা প্রদানকারী দেশ কোনটি?',
        answers: [
            { text: 'নেদারল্যান্ডস', correct: true },
            { text: 'জার্মানি', correct: false },
            { text: 'ফ্রান্স', correct: false },
            { text: 'অস্ট্রেলিয়া', correct: false }
        ]
    },
    {
        question: '২০২৩ সালের জন্য জাতিসংঘে ঘোষিত ‘বিশ্ব পর্যটন রাজধানী’ কোনটি?',
        answers: [
            { text: 'সমরখন্দ', correct: true },
            { text: 'নেপলস', correct: false },
            { text: 'লিসবন', correct: false },
            { text: 'প্যারিস', correct: false }
        ]
    },
    {
        question: 'কোন দেশ ২০২৩ সালে প্রেস ফ্রিডম সূচকে সর্বোচ্চ স্কোর করেছে?',
        answers: [
            { text: 'নরওয়ে', correct: true },
            { text: 'সুইডেন', correct: false },
            { text: 'ফিনল্যান্ড', correct: false },
            { text: 'ডেনমার্ক', correct: false }
        ]
    },
    {
        question: 'বাংলাদেশের আশ্রিত রোহিঙ্গা শরণার্থীদের জন্য সর্বোচ্চ মানবিক সাহায্য এসেছে?',
        answers: [
            { text: 'যুক্তরাষ্ট্র', correct: true },
            { text: 'যুক্তরাজ্য', correct: false },
            { text: 'জাপান', correct: false },
            { text: 'কানাডা', correct: false }
        ]
    },
    {
        question: 'সর্বশেষ BRICS সম্মেলন (২০২৩) অনুষ্ঠিত হয়?',
        answers: [
            { text: 'জোহানেসবার্গে', correct: true },
            { text: 'নতুন দিল্লি', correct: false },
            { text: 'বেইজিং', correct: false },
            { text: 'মস্কো', correct: false }
        ]
    },
    {
        question: 'জলবায়ু পরিবর্তন বিষয়ক ‘COP 28’ কোথায় অনুষ্ঠিত হয়?',
        answers: [
            { text: 'সংযুক্ত আরব আমিরাত', correct: true },
            { text: 'কাতার', correct: false },
            { text: 'মিসর', correct: false },
            { text: 'জাপান', correct: false }
        ]
    },
    {
        question: 'ঋষি সুনাক-এর দলের নাম কি?',
        answers: [
            { text: 'কনজারভেটিভ পার্টি', correct: true },
            { text: 'লেবার পার্টি', correct: false },
            { text: 'লিবারেল ডেমোক্র্যাট', correct: false },
            { text: 'সবুজ পার্টি', correct: false }
        ]
    },
    {
        question: 'সম্প্রতি ইসরাইলের বিরুদ্ধে আন্তর্জাতিক বিচার আদালতে (আইসিজে) মামলা করেছে কোন দেশ?',
        answers: [
            { text: 'দক্ষিণ আফ্রিকা', correct: true },
            { text: 'ভারত', correct: false },
            { text: 'পাকিস্তান', correct: false },
            { text: 'ব্রাজিল', correct: false }
        ]
    },
    {
        question: 'আফগানিস্তানের সর্বোচ্চ নেতা কে?',
        answers: [
            { text: 'মোহাম্মদ হাসান আখুন্দ', correct: true },
            { text: 'হাক্কানি', correct: false },
            { text: 'জালালউদ্দিন', correct: false },
            { text: 'আব্দুল গনি বারাদার', correct: false }
        ]
    },
    {
        question: '১৮তম সার্ক সম্মেলন কোথায় অনুষ্ঠিত হয়?',
        answers: [
            { text: 'নেপাল', correct: true },
            { text: 'ভারত', correct: false },
            { text: 'বাংলাদেশ', correct: false },
            { text: 'শ্রীলঙ্কা', correct: false }
        ]
    },

    {
        question: '২০২২-২০২৩ অর্থবছরে বাংলাদেশের জিডিপি প্রবৃদ্ধির হার কত ছিল?',
        answers: [
            { text: '৫%', correct: false },
            { text: '৬%', correct: false },
            { text: '৬.৫%', correct: true },
            { text: '৭%', correct: false }
        ]
    },
    {
        question: '২০২৩ সালের বিশ্বকাপ ক্রিকেটের মাস্কটের নাম কী?',
        answers: [
            { text: 'ব্লেজ', correct: false },
            { text: 'ঢঙ্ক', correct: false },
            { text: 'ব্লেজ ও ঢঙ্ক', correct: true },
            { text: 'ব্লেজার', correct: false }
        ]
    },
    {
        question: 'গ্রীষ্মকালীন অলিম্পিক কোথায় অনুষ্ঠিত হবে?',
        answers: [
            { text: 'টোকিও', correct: false },
            { text: 'প্যারিসে', correct: true },
            { text: 'লন্ডনে', correct: false },
            { text: 'রিও', correct: false }
        ]
    },
    {
        question: '২০২৩ সালে সাহিত্যে নোবেল পুরস্কার লাভ করেন কে?',
        answers: [
            { text: 'অলিভিয়া ডেনা', correct: false },
            { text: 'জন ফোস', correct: true },
            { text: 'অলিভিয়া স্মিথ', correct: false },
            { text: 'ক্যারল টেইলর', correct: false }
        ]
    },
    {
        question: 'রাফাহ ক্রসিং কোন দুইটি দেশের সীমান্তে অবস্থিত?',
        answers: [
            { text: 'মিশর-ফিলিস্তিন', correct: true },
            { text: 'লেবানন-সিরিয়া', correct: false },
            { text: 'জর্ডান-ইরাক', correct: false },
            { text: 'ইরান-তুরস্ক', correct: false }
        ]
    },
    {
        question: '২০২৩ সালে ক্রিকেট বিশ্বকাপে বাংলাদেশ মোট কয়টি ম্যাচ খেলেছিল?',
        answers: [
            { text: '৭', correct: false },
            { text: '৮', correct: false },
            { text: '৯', correct: true },
            { text: '১০', correct: false }
        ]
    },
    {
        question: 'কর্ণফুলী নদীর তলদেশে সদ্য স্থাপিত বঙ্গবন্ধু টানেলের মূল দৈর্ঘ্য (শুধুমাত্র টানেল অংশ) কত কি.মি.?',
        answers: [
            { text: '২.৫ কি.মি.', correct: false },
            { text: '৩ কি.মি.', correct: false },
            { text: '৩.৩২ কি.মি.', correct: true },
            { text: '৪ কি.মি.', correct: false }
        ]
    },
    {
        category: 'সাধারন জ্ঞান সাম্প্রতিক বিশ্ব',
        question: 'Zoom কোন দেশের তৈরিকৃত অডিও-ভিডিও যোগাযোগ প্লাটফর্ম?',
        answers: [
            { text: 'যুক্তরাজ্য', correct: false },
            { text: 'যুক্তরাষ্ট্র', correct: true },
            { text: 'কানাডা', correct: false },
            { text: 'অস্ট্রেলিয়া', correct: false }
        ]
    },
    {
        question: 'রূপপুর পারমাণবিক বিদ্যুৎ কেন্দ্র কোন দেশের সহায়তায় তৈরি হয়েছে?',
        answers: [
            { text: 'ভারত', correct: false },
            { text: 'রাশিয়া', correct: true },
            { text: 'চীন', correct: false },
            { text: 'যুক্তরাষ্ট্র', correct: false }
        ]
    },
    {
        question: 'বাংলাদেশের ২৯তম গ্যাসক্ষেত্র কোথায় অবস্থিত?',
        answers: [
            { text: 'সিলেট', correct: false },
            { text: 'ভোলা, সদর', correct: true },
            { text: 'চট্টগ্রাম', correct: false },
            { text: 'রংপুর', correct: false }
        ]
    },
    {
        question: 'বাংলাদেশের জিডিপিতে কোন খাতের অবদান সবচেয়ে বেশি?',
        answers: [
            { text: 'কৃষি', correct: false },
            { text: 'শিল্প', correct: true },
            { text: 'সেবা', correct: false },
            { text: 'গৃহস্থালি', correct: false }
        ]
    },
    {
        question: 'সর্বশেষ বিশ্বশান্তি সূচকে শীর্ষ দেশ কোনটি?',
        answers: [
            { text: 'জাপান', correct: false },
            { text: 'ফিনল্যান্ড', correct: true },
            { text: 'স্বিডেন', correct: false },
            { text: 'নরওয়ে', correct: false }
        ]
    },
    {
        question: 'বিবিএস-এর সাম্প্রতিক জরিপ অনুযায়ী দেশে দারিদ্র্যের হার কত শতাংশ?',
        answers: [
            { text: '১৫%', correct: false },
            { text: '১৮.৭%', correct: true },
            { text: '২০%', correct: false },
            { text: '২২%', correct: false }
        ]
    },
    {
        question: '২০২৪ সালে প্রকাশিত ওয়ার্ল্ড হ্যাপিনেস রিপোর্ট অনুযায়ী বিশ্বের সুখীতম দেশ কোনটি-',
        answers: [
            { text: 'জাপান', correct: false },
            { text: 'ফিনল্যান্ড', correct: true },
            { text: 'সুইডেন', correct: false },
            { text: 'ডেনমার্ক', correct: false }
        ]
    },
    {
        question: 'এই বছরে ১ জুলাইয়ের পর পাবলিক বিশ্ববিদ্যালয়ে নতুন যোগদানকৃত শিক্ষকরা কোন সার্বজনীন পেনশন স্কিমের অন্তর্ভুক্ত হবেন-',
        answers: [
            { text: 'প্রত্যয়', correct: true },
            { text: 'বিমা', correct: false },
            { text: 'সুরক্ষা', correct: false },
            { text: 'অফার', correct: false }
        ]
    },
    {
        question: 'বৈশ্বিক বায়ুমান প্রতিবেদন অনুযায়ী ২০২৩ সালে ঢাকা কততম দূষিত নগরী ছিল-',
        answers: [
            { text: 'প্রথম', correct: false },
            { text: 'দ্বিতীয়', correct: true },
            { text: 'তৃতীয়', correct: false },
            { text: 'চতুর্থ', correct: false }
        ]
    },
    {
        question: 'কক্সবাজার বিমানবন্দরে কত ফুট দৈর্ঘ্যের রানওয়ে তৈরি করা হচ্ছে-',
        answers: [
            { text: '৮০০০ ফুট', correct: false },
            { text: '৯৫০০ ফুট', correct: true },
            { text: '১০০০০ ফুট', correct: false },
            { text: '১২০০০ ফুট', correct: false }
        ]
    },
    {
        question: 'ভাষাভাষী জনসংখ্যার দিক দিয়ে বাংলা পৃথিবীর কততম ভাষা-',
        answers: [
            { text: '৫ম', correct: false },
            { text: '৬ষ্ঠ', correct: false },
            { text: '৭ম', correct: true },
            { text: '৮ম', correct: false }
        ]
    },
    {
        question: 'বিশ্বের সবচেয়ে ঘনবসতিপূর্ণ শহর কোনটি-',
        answers: [
            { text: 'ঢাকা', correct: true },
            { text: 'মুম্বাই', correct: false },
            { text: 'নিউইয়র্ক', correct: false },
            { text: 'টোকিও', correct: false }
        ]
    },
    {
        question: 'লিওনেল মেসি কত বার বিশ্ব ফুটবলের গৌরবময় পুরস্কার ব্যালন ডি’অর লাভ করেন-',
        answers: [
            { text: '৬ বার', correct: false },
            { text: '৭ বার', correct: false },
            { text: '৮ বার', correct: true },
            { text: '৯ বার', correct: false }
        ]
    },
    {
        question: 'বাংলাদেশের সর্ববৃহৎ বায়ু বিদ্যুৎ কেন্দ্র কোথায় অবস্থিত-',
        answers: [
            { text: 'সাতক্ষীরা', correct: false },
            { text: 'কক্সবাজার', correct: true },
            { text: 'নাটোর', correct: false },
            { text: 'বগুড়া', correct: false }
        ]
    },
    {
        question: 'পুলিশী সাহায্য পাওয়ার শর্টকোড কোনটি-',
        answers: [
            { text: '৯৯৭', correct: false },
            { text: '৯৯৮', correct: false },
            { text: '৯৯৯', correct: true },
            { text: '৯০০', correct: false }
        ]
    },
    {
        question: 'ভারত কর্তৃক সম্প্রতি চাঁদে প্রেরিত চন্দ্রযানের নাম কী-',
        answers: [
            { text: 'চন্দ্রযান-১', correct: false },
            { text: 'চন্দ্রযান-২', correct: false },
            { text: 'চন্দ্রযান-৩', correct: true },
            { text: 'চন্দ্রযান-৪', correct: false }
        ]
    },
    {
        question: 'বিশ্বের প্রথম স্যাটেলাইট কবে উৎক্ষেপণ করা হয়-',
        answers: [
            { text: '১৯৫৭ সালে', correct: true },
            { text: '১৯৬০ সালে', correct: false },
            { text: '১৯৬৫ সালে', correct: false },
            { text: '১৯৭০ সালে', correct: false }
        ]
    },
    {
        question: 'গোল্ডেন গ্লোব পুরস্কার ২০২৪-এর সেরা নাট্য চলচ্চিত্রের জন্য মনোনীত ছবির নাম কী-',
        answers: [
            { text: 'বার্বারিয়ান', correct: false },
            { text: 'রাইজিং', correct: true },
            { text: 'দ্য সিটি', correct: false },
            { text: 'ভানিশ', correct: false }
        ]
    },
    {
        question: 'বর্তমান প্রধানমন্ত্রীর নাম কি?',
        answers: [
            { text: 'শেখ হাসিনা', correct: true },
            { text: 'বেগম খালেদা জিয়া', correct: false },
            { text: 'আ স ম আবদুর রব', correct: false },
            { text: 'মওদুদ আহমেদ', correct: false }
        ]
    },
    {
        question: 'বাংলাদেশের প্রথম মহিলা প্রধানমন্ত্রীর নাম কী?',
        answers: [
            { text: 'শেখ হাসিনা', correct: false },
            { text: 'কাজী নজরুল ইসলাম', correct: false },
            { text: 'পঁচিশে বৈশাখ', correct: false },
            { text: 'বেগম রোকেয়া', correct: true }
        ]
    },
    {
        question: 'মিয়ানমারের সীমান্ত বাহিনীর নাম কী?',
        answers: [
            { text: 'বর্ডার গার্ড পুলিশ', correct: true },
            { text: 'সীমান্ত রক্ষী বাহিনী', correct: false },
            { text: 'সীমান্ত পুলিশ', correct: false },
            { text: 'জাতীয় নিরাপত্তা বাহিনী', correct: false }
        ]
    },
    {
        question: 'মালয়েশিয়ার বর্তমান রাজা কে?',
        answers: [
            { text: 'মুহাম্মদ অল্লাহ', correct: false },
            { text: 'ইব্রাহীম সুলতান', correct: true },
            { text: 'আলফোনসো', correct: false },
            { text: 'মোহাম্মদ রহমান', correct: false }
        ]
    },
    {
        question: 'আন্তর্জাতিক বিচার আদালতের (ICJ) নতুন প্রেসিডেন্ট কে?',
        answers: [
            { text: 'নাওয়াফ সালাম (লেবানন)', correct: true },
            { text: 'জেনিফার এলকিনস', correct: false },
            { text: 'রবার্ট ফক্স', correct: false },
            { text: 'লিন্ডা গ্রেস', correct: false }
        ]
    },
    {
        question: 'গাযায় ইসরায়েলের গণহত্যা নিয়ে আন্তর্জাতিক বিচার আদালত (ICJ) মামলা করে কোন দেশ?',
        answers: [
            { text: 'দক্ষিণ আফ্রিকা', correct: true },
            { text: 'বাংলাদেশ', correct: false },
            { text: 'ভারত', correct: false },
            { text: 'প্যালেস্টাইন', correct: false }
        ]
    },
    {
        question: '২০২৪ সালের বাদশাহ ফয়সাল পুরস্কার লাভ করেন কে?',
        answers: [
            { text: 'ওয়ায়েল হাল্লাক', correct: true },
            { text: 'মোহাম্মাদ সাম্মাক', correct: true },
            { text: 'জেরি মেন্ডেল', correct: true },
            { text: 'হাওয়ার্ড ইউয়ান', correct: true },
            { text: 'হাও চ্যাং', correct: true }
        ]
    },
    {
        question: 'চাঁদে সফলভাবে নাভোযান পাঠানোয় পঞ্চম দেশ কোনটি?',
        answers: [
            { text: 'জাপান', correct: true },
            { text: 'চীন', correct: false },
            { text: 'ভারত', correct: false },
            { text: 'যুক্তরাষ্ট্র', correct: false }
        ]
    },
    {
        question: 'কোন দেশে বিশ্বের সবচেয়ে উঁচু ঝুলন্ত মসজিদ উদ্বোধন করা হয়?',
        answers: [
            { text: 'সৌদী আরব', correct: true },
            { text: 'মালয়েশিয়া', correct: false },
            { text: 'বাহরাইন', correct: false },
            { text: 'কাতার', correct: false }
        ]
    },
    {
        question: 'স্থলভাগে প্রথম ক্ষুদ্র পারমাণবিক বিদ্যুৎকেন্দ্র কোন দেশে অবস্থিত?',
        answers: [
            { text: 'রাশিয়া', correct: true },
            { text: 'যুক্তরাষ্ট্র', correct: false },
            { text: 'ফ্রান্স', correct: false },
            { text: 'জাপান', correct: false }
        ]
    },
    {
        question: 'প্রবাসী আয় গ্রহণে শীর্ষ কোন দেশ?',
        answers: [
            { text: 'ভারত', correct: true },
            { text: 'বাংলাদেশ', correct: false },
            { text: 'মিসর', correct: false },
            { text: 'ফিলিপাইন', correct: false }
        ]
    },
    {
        question: 'প্রবাসী আয়ের উৎসে শীর্ষ দেশ কোনটি?',
        answers: [
            { text: 'যুক্তরাষ্ট্র', correct: true },
            { text: 'সংযুক্ত আরব আমিরাত', correct: false },
            { text: 'কানাডা', correct: false },
            { text: 'যুক্তরাজ্য', correct: false }
        ]
    },
    {
        question: 'বিশ্বের দীর্ঘতম ঝুলন্ত সেতুর নাম কী?',
        answers: [
            { text: 'Sky Bridge 721 (চেক প্রজাতন্ত্র)', correct: true },
            { text: 'মিলেনিয়াম ব্রিজ', correct: false },
            { text: 'জিরো ব্রিজ', correct: false },
            { text: 'পেট্রাস ব্রিজ', correct: false }
        ]
    },
    {
        question: 'সংযুক্ত আরব আমিরাতের বর্তমান প্রেসিডেন্ট কে?',
        answers: [
            { text: 'শেখ মোহাম্মাদ বিন জায়েদ আল নাহিয়ান', correct: true },
            { text: 'শেখ জায়েদ', correct: false },
            { text: 'শেখ হালিদ', correct: false },
            { text: 'শেখ ফাহিম', correct: false }
        ]
    },
    {
        question: 'বিশ্বের সর্ববৃহৎ ঝুলন্ত সেতুর নাম কী?',
        answers: [
            { text: 'চানাক্কালে সেতু, তুরস্ক', correct: true },
            { text: 'রিভার ম্যান্টল ব্রিজ', correct: false },
            { text: 'পুনের ব্রিজ', correct: false },
            { text: 'অল টাইম ব্রিজ', correct: false }
        ]
    },
    {
        question: 'যুক্তরাষ্ট্রের তৈরী কাঁধে বহনযোগ্য আকাশ প্রতিরক্ষাব্যবস্থার নাম কী?',
        answers: [
            { text: 'স্ট্রিঙ্গার', correct: true },
            { text: 'হালো', correct: false },
            { text: 'এপ্যাচি', correct: false },
            { text: 'স্টিংগার', correct: false }
        ]
    },
    {
        question: '৮ মার্চ ২০২২ ইরান কোন সামরিক স্যাটেলাইট উৎক্ষেপণ করে?',
        answers: [
            { text: 'Noor-2', correct: true },
            { text: 'Noor-1', correct: false },
            { text: 'Zafar', correct: false },
            { text: 'Ameer', correct: false }
        ]
    },
    {
        question: 'ইউক্রেনের বর্তমান প্রেসিডেন্ট কে?',
        answers: [
            { text: 'ভ্লদিমির জেলেনস্কি', correct: true },
            { text: 'পেত্রো পোরোশেঙ্কো', correct: false },
            { text: 'ভ্লাদিমির পুতিন', correct: false },
            { text: 'ইগর গেরাসিমোভ', correct: false }
        ]
    },
    {
        question: '২০২১ সালের বৈশ্বিক বায়ুমান প্রতিবেদনে সবচেয়ে দূষিত রাজধানী কোনটি?',
        answers: [
            { text: 'নয়াদিল্লী (ভারত)', correct: true },
            { text: 'ঢাকা', correct: false },
            { text: 'বেজিং', correct: false },
            { text: 'কুয়ালালামপুর', correct: false }
        ]
    },
    {
        question: '২৭ ফেব্রুয়ারী ২০২২ কোন দেশের জনগণ পারমাণবিক অস্ত্র রাখার জন্য সংবিধান সংশোধনের পক্ষে রায় দেয়?',
        answers: [
            { text: 'বেলারুশ', correct: true },
            { text: 'রাশিয়া', correct: false },
            { text: 'চীন', correct: false },
            { text: 'কিরগিজস্তান', correct: false }
        ]
    },
    {
        question: '৯ মার্চ ২০২২ দক্ষিণ কোরিয়ার প্রেসিডেন্ট নির্বাচন হন কে?',
        answers: [
            { text: 'ইউন সুক-ইওল', correct: true },
            { text: 'মুন জে-ইন', correct: false },
            { text: 'লিম জং-হুন', correct: false },
            { text: 'পাক কিয়ং-জি', correct: false }
        ]
    },
    {
        question: 'হাইপারসনিক ক্ষেপণাস্ত্র Kinzhal কোন দেশের তৈরি?',
        answers: [
            { text: 'রাশিয়া', correct: true },
            { text: 'মার্কিন যুক্তরাষ্ট্র', correct: false },
            { text: 'চীন', correct: false },
            { text: 'ভারত', correct: false }
        ]
    },
    {
        question: '১৮ মার্চ ২০২২ রাশিয়া কোথায় প্রথম হাইপারনসিক ক্ষেপণাস্ত্র হামলা চালায়?',
        answers: [
            { text: 'ইউক্রেন', correct: true },
            { text: 'জর্জিয়া', correct: false },
            { text: 'বেলারুশ', correct: false },
            { text: 'সিরিয়া', correct: false }
        ]
    },
    {
        question: 'সম্প্রতি রাশিয়া ইউক্রেনে কোন নিষিদ্ধ ঘোষিত বোমা ব্যবহার করে?',
        answers: [
            { text: 'ভ্যাকুয়াম বা থার্মোব্যারিক বোমা', correct: true },
            { text: 'নেপালম বোমা', correct: false },
            { text: 'সিরিজ বোমা', correct: false },
            { text: 'মার্ক ৮ বোমা', correct: false }
        ]
    },
    {
        question: 'জে-১০সি কোন দেশের তৈরি অত্যাধুনিক যুদ্ধবিমান?',
        answers: [
            { text: 'চীন', correct: true },
            { text: 'ভারত', correct: false },
            { text: 'রাশিয়া', correct: false },
            { text: 'যুক্তরাষ্ট্র', correct: false }
        ]
    },
    {
        question: 'বিশ্ব পর্যটন সংস্থার (UNWTO) বর্তমান সদস্য কত?',
        answers: [
            { text: '১৬০টি', correct: true },
            { text: '১৫০টি', correct: false },
            { text: '১৭০টি', correct: false },
            { text: '১৮০টি', correct: false }
        ]
    }
];


// Shuffle questions randomly
questions.sort(() => Math.random() - 0.5);

let currentQuestionIndex = 0;
let timer;
let timeLeft = 20;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    totalQuestionsDisplay.innerText = questions.length;
    scoreDisplay.innerText = score.toFixed(2);
    nextButton.classList.add('hide');
    startTimer();
    showQuestion(questions[currentQuestionIndex]);
}

function startTimer() {
    timeLeft = 20;
    timerCount.innerText = timeLeft;
    timerBar.style.width = '100%';

    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(() => {
        timeLeft--;
        timerCount.innerText = timeLeft;
        timerBar.style.width = `${(timeLeft / 20) * 100}%`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion(); // Automatically go to the next question when time runs out
        }
    }, 1000);
}

function showQuestion(question) {
    questionText.innerText = question.question;
    answerButtons.innerHTML = '';
    const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);
    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-button');
        button.addEventListener('click', () => selectAnswer(answer, button));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer, button) {
    const allButtons = Array.from(answerButtons.children);

    // Prevent multiple clicks
    allButtons.forEach(btn => {
        btn.removeEventListener('click', () => selectAnswer(answer, button));
        btn.disabled = true;
    });

    if (answer.correct) {
        button.classList.add('correct');
        score += 1;
    } else {
        button.classList.add('incorrect');
        allButtons.forEach(btn => {
            if (btn.innerText === getCorrectAnswerText()) {
                btn.classList.add('correct');
            }
        });
        score -= 0.25;
    }

    scoreDisplay.innerText = score.toFixed(2);
    clearInterval(timer);
    nextButton.classList.remove('hide'); // Show the Next button
}

function getCorrectAnswerText() {
    return questions[currentQuestionIndex].answers.find(a => a.correct).text;
}

nextButton.addEventListener('click', nextQuestion); // Set up event listener for Next button

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
        startTimer();
    } else {
        alert('Quiz completed! Your score is ' + score.toFixed(2));
        startGame(); // Restart the game after completion
    }
}

startGame(); // Start the quiz
