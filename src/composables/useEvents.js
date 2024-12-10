import { ref } from "vue";

// Fake events data
const mockEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description:
      "Annual technology conference featuring the latest innovations",
    category: "Conference",
    date: "2024-06-15",
    location: "San Francisco, CA",
    image: "https://picsum.photos/seed/tech/400/300",
    status: "Upcoming",
    videoUrl: "https://youtube.com/watch?v=123",
    organizer: {
      name: "Tech Events Inc",
      email: "contact@techevents.com",
    },
    price: 299,
    capacity: 1000,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 2,
    title: "Digital Marketing Workshop",
    description: "Learn the latest digital marketing strategies and tools",
    category: "Workshop",
    date: "2024-07-20",
    location: "New York, NY",
    image: "https://picsum.photos/seed/marketing/400/300",
    status: "Upcoming",
    organizer: {
      name: "Marketing Pros",
      email: "info@marketingpros.com",
    },
    price: 199,
    capacity: 50,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    description: "Intensive 3-day bootcamp on modern web development",
    category: "Workshop",
    date: "2024-08-10",
    location: "Austin, TX",
    image: "https://picsum.photos/seed/webdev/400/300",
    status: "Upcoming",
    videoUrl: "https://youtube.com/watch?v=456",
    organizer: {
      name: "Code Academy",
      email: "hello@codeacademy.com",
    },
    price: 599,
    capacity: 30,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 4,
    title: "AI & Machine Learning Summit",
    description: "Explore the future of AI and machine learning",
    category: "Conference",
    date: "2024-09-05",
    location: "Seattle, WA",
    image: "https://picsum.photos/seed/ai/400/300",
    status: "Upcoming",
    organizer: {
      name: "AI Research Group",
      email: "contact@airesearch.org",
    },
    price: 399,
    capacity: 500,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 5,
    title: "Summer Music Festival",
    description: "Annual outdoor music festival featuring top artists",
    category: "Concert",
    date: "2024-07-01",
    location: "Los Angeles, CA",
    image: "https://picsum.photos/seed/music/400/300",
    status: "Upcoming",
    videoUrl: "https://youtube.com/watch?v=789",
    organizer: {
      name: "LA Events",
      email: "info@laevents.com",
    },
    price: 150,
    capacity: 5000,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 6,
    title: "Startup Networking Meetup",
    description: "Connect with fellow entrepreneurs and investors",
    category: "Meetup",
    date: "2024-06-30",
    location: "Boston, MA",
    image: "https://picsum.photos/seed/startup/400/300",
    status: "Upcoming",
    organizer: {
      name: "Startup Hub",
      email: "events@startuphub.com",
    },
    price: 0,
    capacity: 100,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 7,
    title: "Data Science Conference",
    description: "Latest trends in data science and analytics",
    category: "Conference",
    date: "2024-08-25",
    location: "Chicago, IL",
    image: "https://picsum.photos/seed/data/400/300",
    status: "Upcoming",
    videoUrl: "https://youtube.com/watch?v=101",
    organizer: {
      name: "Data Science Society",
      email: "info@datasci.org",
    },
    price: 349,
    capacity: 800,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 8,
    title: "UX Design Workshop",
    description: "Hands-on workshop on user experience design",
    category: "Workshop",
    date: "2024-07-15",
    location: "Portland, OR",
    image: "https://picsum.photos/seed/ux/400/300",
    status: "Upcoming",
    organizer: {
      name: "Design Labs",
      email: "workshop@designlabs.com",
    },
    price: 249,
    capacity: 40,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 9,
    title: "Blockchain Technology Summit",
    description: "Exploring the future of blockchain and cryptocurrencies",
    category: "Conference",
    date: "2024-09-20",
    location: "Miami, FL",
    image: "https://picsum.photos/seed/blockchain/400/300",
    status: "Upcoming",
    videoUrl: "https://youtube.com/watch?v=202",
    organizer: {
      name: "Blockchain Association",
      email: "events@blockchain.org",
    },
    price: 499,
    capacity: 600,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 10,
    title: "Photography Workshop",
    description: "Master the art of digital photography",
    category: "Workshop",
    date: "2024-07-08",
    location: "Denver, CO",
    image: "https://picsum.photos/seed/photo/400/300",
    status: "Upcoming",
    organizer: {
      name: "Creative Arts Institute",
      email: "info@creativearts.edu",
    },
    price: 199,
    capacity: 25,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 11,
    title: "Jazz Music Festival",
    description: "Three days of world-class jazz performances",
    category: "Concert",
    date: "2024-08-15",
    location: "New Orleans, LA",
    image: "https://picsum.photos/seed/jazz/400/300",
    status: "Upcoming",
    videoUrl: "https://youtube.com/watch?v=303",
    organizer: {
      name: "Jazz Foundation",
      email: "events@jazzfoundation.org",
    },
    price: 199,
    capacity: 3000,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 12,
    title: "Mobile App Development Workshop",
    description: "Learn to build iOS and Android applications",
    category: "Workshop",
    date: "2024-09-10",
    location: "San Jose, CA",
    image: "https://picsum.photos/seed/mobile/400/300",
    status: "Upcoming",
    organizer: {
      name: "App Developers Association",
      email: "training@appdev.org",
    },
    price: 399,
    capacity: 35,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 13,
    title: "Digital Art Exhibition",
    description: "Showcase of contemporary digital artworks",
    category: "Meetup",
    date: "2024-07-25",
    location: "Seattle, WA",
    image: "https://picsum.photos/seed/art/400/300",
    status: "Upcoming",
    organizer: {
      name: "Digital Arts Collective",
      email: "exhibit@digitalarts.com",
    },
    price: 25,
    capacity: 200,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 14,
    title: "Cybersecurity Conference",
    description: "Latest trends and threats in cybersecurity",
    category: "Conference",
    date: "2024-08-30",
    location: "Washington, DC",
    image: "https://picsum.photos/seed/cyber/400/300",
    status: "Upcoming",
    videoUrl: "https://youtube.com/watch?v=404",
    organizer: {
      name: "Security Experts Association",
      email: "conference@securityexperts.org",
    },
    price: 599,
    capacity: 700,
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: 15,
    title: "Content Creation Workshop",
    description: "Master social media content creation",
    category: "Workshop",
    date: "2024-09-15",
    location: "Nashville, TN",
    image: "https://picsum.photos/seed/content/400/300",
    status: "Upcoming",
    organizer: {
      name: "Content Creators Network",
      email: "workshop@contentcreators.net",
    },
    price: 149,
    capacity: 45,
    createdAt: "2024-01-15T10:00:00Z",
  },
];

export function useEvents() {
  const events = ref(mockEvents);

  const getEvent = (id) => {
    return events.value.find((event) => event.id === id);
  };

  const createEvent = (event) => {
    const newEvent = {
      ...event,
      id: Math.max(...events.value.map((e) => e.id)) + 1,
    };
    events.value.push(newEvent);
    return newEvent;
  };

  const updateEvent = (id, event) => {
    const index = events.value.findIndex((e) => e.id === id);
    if (index !== -1) {
      events.value[index] = { ...events.value[index], ...event };
      return events.value[index];
    }
    return null;
  };

  const deleteEvent = (id) => {
    events.value = events.value.filter((event) => event.id !== id);
  };

  const deleteMultipleEvents = (ids) => {
    events.value = events.value.filter((event) => !ids.includes(event.id));
  };

  return {
    events,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    deleteMultipleEvents,
  };
}
