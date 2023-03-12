const randomWords = require("random-words");

const generateUser = () => {
  const username = randomWords({ exactly: 2, join: "" });
  return {
    username: username,
    password: username,
    email: username + "@example.com",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

// Function to generate random data for a club
const generateClub = (user) => {
  const username = randomWords({ exactly: 2, join: " " });
  return {
    createdAt: new Date(),
    updatedAt: new Date(),
    clubUid: Math.random().toString(36).substring(7),
    name: username,
    imageUrl: "https://picsum.photos/200",
    description: "A description of this club",
    owner: user,
    applicationRequired: Math.random() > 0.5,
    applicationFormLink: "https://example.com/application-form",
    linkedIn: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    website: "https://example.com",
    slack: "https://slack.com",
    photoBucket: "https://example.com/photos",
    coverPhoto: "https://picsum.photos/800",
    bannerPhoto: "https://picsum.photos/1200",
    dues: Math.floor(Math.random() * 100),
    duesFrequency: ["Monthly", "Yearly"][Math.floor(Math.random() * 2)],
    popularity: Math.floor(Math.random() * 100),
  };
};

module.exports = {
  async seedClubs(x) {
    // Function to generate n random users and clubs
    const generateRandomData = async (n) => {
      // Create n random users
      const users = [];
      const newClubs = [];
      for (let i = 0; i < n; i++) {
        const user1 = generateUser();
        users.push(user1);
        newClubs.push(generateClub(user1.username));
      }
      return {
        users,
        clubs: newClubs,
      };
    };

    // Run the script

    return await generateRandomData(x);
  },
};
