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

const heritageSites = [
  {
    id: "01",
    title: "Taj Mahal",
    city: "Agra",
    distance: 200,
    address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
    price: 500,
    maxGroupSize: 15,
    desc: "A symbol of love, the Taj Mahal is a magnificent white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.",
    history:
      "The Taj Mahal was commissioned in 1632 by Shah Jahan and was completed in 1653. It is considered one of the most beautiful buildings in the world and is a UNESCO World Heritage Site.",
    geography:
      "Located on the right bank of the Yamuna River in the Indian city of Agra, Uttar Pradesh.",
    additionalDetails:
      "The Taj Mahal is known for its intricate carvings and beautiful gardens surrounding the structure.",
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
    history:
      "Construction of the Qutub Minar was started in 1193 by Qutb-ud-din Aibak and was completed by his successor Iltutmish. It is a testament to the architectural brilliance of the Mamluk dynasty.",
    geography:
      "Situated in the Mehrauli area of New Delhi, the capital city of India.",
    additionalDetails:
      "The Qutub Minar complex includes several other historically significant monuments such as the Iron Pillar and the Alai Darwaza.",
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
    history:
      "Hampi was the capital of the Vijayanagara Empire in the 14th century and was a prosperous and wealthy city known for its magnificent architecture.",
    geography:
      "Located in the Ballari district of Karnataka, near the Tungabhadra River.",
    additionalDetails:
      "Hampi is known for its stunning landscapes filled with rocky outcrops and ancient ruins.",
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
    history:
      "The Ajanta Caves were built in two phases, the first during the 2nd century BCE and the second during the 5th century CE. They were rediscovered in 1819 by a British officer.",
    geography:
      "Situated in the Aurangabad district of Maharashtra, near the Waghora River.",
    additionalDetails:
      "The caves are renowned for their stunning frescoes depicting various Jataka tales and the life of Buddha.",
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
    history:
      "Built between 950 and 1050 by the Chandela dynasty, the Khajuraho temples are known for their nagara-style architectural symbolism and erotic sculptures.",
    geography: "Located in the Chhatarpur district of Madhya Pradesh, India.",
    additionalDetails:
      "The temples are divided into three groups: Western, Eastern, and Southern, each showcasing different aspects of Hindu and Jain traditions.",
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
    history:
      "The Konark Sun Temple was built in the 13th century by King Narasimhadeva I of the Eastern Ganga dynasty. It is designed as a colossal chariot of the Sun God, Surya.",
    geography:
      "Located on the eastern coast of India in the Puri district of Odisha.",
    additionalDetails:
      "The temple is famous for its exquisite stone carvings and is a UNESCO World Heritage Site.",
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
    address:
      "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
    price: 400,
    maxGroupSize: 25,
    desc: "The Red Fort is a historic fort in the city of Delhi that served as the main residence of the Mughal Emperors for nearly 200 years.",
    history:
      "The Red Fort was built by Mughal Emperor Shah Jahan in 1638 when he decided to shift his capital from Agra to Delhi. It served as the main residence of the Mughal emperors for nearly 200 years.",
    geography: "Located in the heart of Delhi, the capital city of India.",
    additionalDetails:
      "The fort is known for its massive enclosing walls of red sandstone and houses several museums.",
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
    history:
      "The Meenakshi Temple, dedicated to Goddess Meenakshi and Lord Sundareswarar, dates back to the 6th century CE. It was expanded during the reign of the Nayak dynasty.",
    geography:
      "Situated in the temple city of Madurai, on the southern bank of the Vaigai River in Tamil Nadu.",
    additionalDetails:
      "The temple is renowned for its towering gopurams (gateway towers) and intricate carvings.",
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
    history:
      "The Mysore Palace was originally built in the 14th century but has undergone several reconstructions. The current structure was completed in 1912 by the Wodeyar dynasty.",
    geography:
      "Located in the city of Mysore, Karnataka, in the southern part of India.",
    additionalDetails:
      "The palace is famous for its Indo-Saracenic architecture and beautiful illumination during the Dasara festival.",
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
    history:
      "The Victoria Memorial was built in the early 20th century to commemorate Queen Victoria. It was designed by William Emerson and is a blend of British and Mughal architectural styles.",
    geography:
      "Situated in the city of Kolkata, West Bengal, near the eastern bank of the Hooghly River.",
    additionalDetails:
      "The memorial is surrounded by beautiful gardens and houses a museum with a large collection of artifacts from the British period.",
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

export default heritageSites;
