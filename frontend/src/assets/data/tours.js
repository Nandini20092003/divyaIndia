import tajMahalImg from "../images/taj-mahal.jpg";
import qutubMinarImg from "../images/qutub-minar.jpg";
import hampiImg from "../images/hampi.jpg";
import ajantaCavesImg from "../images/ajanta-caves.jpg";
import khajurahoImg from "../images/khajuraho.jpg";
import konarkImg from "../images/konark.jpg";
import redFortImg from "../images/red-fort.jpg";
import meenakshiImg from "../images/meenakshi-temple.jpg";
import mysorePalaceImg from "../images/mysore-palace.jpg";
import victoriaMemorialImg from "../images/victoria-memorial.jpg";

const tours = [
  {
    id: "01",
    title: "Taj Mahal",
    city: "Agra",
    distance: 200,
    address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
    price: 500,
    maxGroupSize: 15,
    desc: "A symbol of love, the Taj Mahal is a magnificent white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
      },
      {
        name: "Jane Doe",
        rating: 5,
      },
    ],
    avgRating: 4.9,
    photo: tajMahalImg,
    featured: true,
  },
  {
    id: "02",
    title: "Qutub Minar",
    city: "Delhi",
    distance: 300,
    address: "Mehrauli, New Delhi, Delhi 110030",
    price: 300,
    maxGroupSize: 20,
    desc: "Qutub Minar is a UNESCO World Heritage Site and is one of the tallest brick minarets in the world, built in 1193 by Qutb-ud-din Aibak.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: qutubMinarImg,
    featured: true,
  },
  {
    id: "03",
    title: "Hampi",
    city: "Hampi",
    distance: 400,
    address: "Hampi, Karnataka 583239",
    price: 400,
    maxGroupSize: 12,
    desc: "Hampi is a UNESCO World Heritage Site known for its ancient temples, ruins of palaces, and the historic Virupaksha Temple.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: hampiImg,
    featured: true,
  },
  {
    id: "04",
    title: "Ajanta Caves",
    city: "Aurangabad",
    distance: 500,
    address: "Ajanta Caves Road, Aurangabad, Maharashtra 431001",
    price: 350,
    maxGroupSize: 10,
    desc: "The Ajanta Caves are rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE, famous for their beautiful frescoes and sculptures.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: ajantaCavesImg,
    featured: true,
  },
  {
    id: "05",
    title: "Khajuraho Temples",
    city: "Khajuraho",
    distance: 600,
    address: "Khajuraho, Madhya Pradesh 471606",
    price: 450,
    maxGroupSize: 15,
    desc: "The Khajuraho Group of Monuments is a group of Hindu and Jain temples in Madhya Pradesh, known for their intricate and erotic sculptures.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: khajurahoImg,
    featured: false,
  },
  {
    id: "06",
    title: "Konark Sun Temple",
    city: "Konark",
    distance: 700,
    address: "Konark, Odisha 752111",
    price: 500,
    maxGroupSize: 10,
    desc: "The Konark Sun Temple is a 13th-century CE sun temple at Konark, Odisha, built by King Narasimhadeva I and famous for its monumental representation of the Sun God's chariot.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: konarkImg,
    featured: false,
  },
  {
    id: "07",
    title: "Red Fort",
    city: "Delhi",
    distance: 800,
    address: "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
    price: 400,
    maxGroupSize: 25,
    desc: "The Red Fort is a historic fort in the city of Delhi that served as the main residence of the Mughal Emperors for nearly 200 years.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: redFortImg,
    featured: false,
  },
  {
    id: "08",
    title: "Meenakshi Temple",
    city: "Madurai",
    distance: 900,
    address: "Madurai Main, Madurai, Tamil Nadu 625001",
    price: 200,
    maxGroupSize: 30,
    desc: "The Meenakshi Temple is a historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: meenakshiImg,
    featured: false,
  },
  {
    id: "09",
    title: "Mysore Palace",
    city: "Mysore",
    distance: 1000,
    address: "Sayyaji Rao Rd, Agrahara, Chamrajpura, Mysuru, Karnataka 570001",
    price: 350,
    maxGroupSize: 20,
    desc: "Mysore Palace, also known as the Amba Vilas Palace, is a historical palace and a royal residence at Mysore in the southern Karnataka state.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: mysorePalaceImg,
    featured: false,
  },
  {
    id: "10",
    title: "Victoria Memorial",
    city: "Kolkata",
    distance: 1100,
    address: "Queen's Way, Kolkata, West Bengal 700071",
    price: 250,
    maxGroupSize: 20,
    desc: "The Victoria Memorial is a large marble building in Kolkata, built between 1906 and 1921 to commemorate Queen Victoria's 25-year reign in India.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: victoriaMemorialImg,
    featured: false,
  },
];

export default tours;
