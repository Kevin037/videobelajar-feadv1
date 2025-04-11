const items = [
    {
        id: 1,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item1.svg",
        avatar: "../assets/avatar1.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "marketing"
    },
    {
        id: 2,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item2.svg",
        avatar: "../assets/avatar2.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "design"
    },
    {
        id: 3,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item3.svg",
        avatar: "../assets/avatar3.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "marketing"
    },
    {
        id: 4,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item4.svg",
        avatar: "../assets/avatar4.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "design"
    },
    {
        id: 5,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item5.svg",
        avatar: "../assets/avatar5.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "marketing"
    },
    {
        id: 6,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item6.svg",
        avatar: "../assets/avatar6.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "self_development"
    },
    {
        id: 7,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item7.svg",
        avatar: "../assets/avata7.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "business"
    },
    {
        id: 8,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item8.svg",
        avatar: "../assets/avatar8.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "self_development"
    },
    {
        id: 9,
        title: "Big 4 Auditor Financial Analyst",
        desc: "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik",
        photo: "../assets/item9.svg",
        avatar: "../assets/avatar9.svg",
        user: "Jenna Ortega",
        user_position: "Senior Accountant",
        user_company: "Gojek",
        type: "business"
    },
];

const tabs = [
    {
        key:"all",
        name:"Semua Kelas"
    },
    {
        key:"marketing",
        name:"Pemasaran"
    }, 
    {
        key:"design",
        name:"Desain"
    }, 
    {
        key:"self_development",
        name:"Pengembangan Diri"
    }, 
    {
        key:"business",
        name:"Bisnis"
    }
];

const courseSections = [
    {
      title: "Introduction to Course 1: Foundations of User Experience Design",
      lessons: [
        { title: "The basics of user experience design", duration: "12 Menit" },
        { title: "Jobs in the field of user experience", duration: "12 Menit" },
        { title: "The product development life cycle", duration: "12 Menit" },
      ],
    },
    {
      title: "Universal design, inclusive design, and equity-focused design",
      lessons: [],
    },
    {
      title: "Introduction to design sprints",
      lessons: [],
    },
    {
      title: "Introduction to UX research",
      lessons: [],
    },
  ];

  const facilities = [
    {
        id:1,
        img:"check.svg",
        name:"Ujian Akhir"
    },
    {
        id:2,
        img:"video.svg",
        name:"49 Video"
    },
    {
        id:3,
        img:"document.svg",
        name:"7 Dokumen"
    },
    {
        id:4,
        img:"certificate.svg",
        name:"Sertifikat"
    },
    {
        id:5,
        img:"pretest.svg",
        name:"Pretest"
    }
];

const paymentMethods = {
    "Transfer Bank": [
        { name: "Bank BCA", key: "bca", number:"11739 081234567890", icon: "../assets/bca.svg" },
        { name: "Bank BNI", key: "bni", number:"11739 081234567890", icon: "../assets/bni.svg" },
        { name: "Bank BRI", key: "bri", number:"11739 081234567890", icon: "../assets/bri.svg" },
        { name: "Bank Mandiri", key: "mandiri", number:"11739 081234567890", icon: "../assets/mandiri.svg" },
    ],
    "E-Wallet": [
        { name: "Dana", key: "dana", number:"", icon: "../assets/dana.svg" },
        { name: "OVO", key: "ovo", number:"", icon: "../assets/ovo.svg" },
        { name: "LinkAja", key: "linkaja", number:"", icon: "../assets/linkaja.svg" },
        { name: "Shopee Pay", key: "shopee", number:"", icon: "../assets/shopee.svg" },
    ],
    "Kartu Kredit/Debit": [
        { name: "", key: "credit", number:"", icon: "/assets/credit.svg" },
    ]
};

const howToPay = {
    "Transfer Bank": "Bayar dengan transfer bank",
    "E-Wallet": "Bayar dengan e-wallet",
    "Kartu Kredit/Debit": "Bayar dengan kartu kredit/debit",
};

export const getItem = (params) => {
    if(params !== "all"){
        return items.filter(item => item.type === params);
    } else {
        return items;
    }
}

export const getTabs = () => {
    return tabs;
}

export const getToken = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 20; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export const getCourseSections = () => {
    return courseSections;
}

export const getFacilities = () => {
    return facilities;
}

export const getPaymentMethods = (key="") => {
    if(key == "") { return paymentMethods; }

    let found = null;
    for (const group in paymentMethods) {
        const method = paymentMethods[group].find(item => item.key === key);
        if (method) {
            found = method;
            break;
        }
    }
    return found;
}

export const getPaymentMethodGroup = (key) => {
    let found = null;
    for (const group in paymentMethods) {
        const method = paymentMethods[group].find(item => item.key === key);
        if (method) {
            found = group;
            break;
        }
    }
    return found;
}

export const getTransaction = () => {
    return JSON.parse(localStorage.getItem("transaction"));
}

export const getHowToPay = () => {
    return howToPay;
}