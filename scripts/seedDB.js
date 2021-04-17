const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

// Needs an update to connect database
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/"
);

const bookSeed = [
  {
    park: "",
    stateCode: "",
    description:
      "",
    date: new Date(Date.now())
  },
  {
    park: "Indiana Dunes National Park",
    stateCode: "IN",
    description:
      "Indiana Dunes National Park hugs 15 miles of the southern shore of Lake Michigan and has much to offer. Whether you enjoy scouting for rare species of birds or flying kites on the sandy beach, the national park's 15,000 acres will continually enchant you.  Hikers will enjoy 50 miles of trails over rugged dunes, mysterious wetlands, sunny prairies, meandering rivers and peaceful forests.",
    date: new Date(Date.now())
  },
  {
    park: "Joshua Tree National Park",
    stateCode: "CA",
    description:
      "Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California. Come explore for yourself.",
    date: new Date(Date.now())
  },
  {
    park: "Kenai Fjords",
    stateCode: "AK",
    description:
      "At the edge of the Kenai Peninsula lies a land where the ice age lingers. Nearly 40 glaciers flow from the Harding Icefield, Kenai Fjords' crowning feature. Wildlife thrives in icy waters and lush forests around this vast expanse of ice. Sugpiaq people relied on these resources to nurture a life entwined with the sea. Today, shrinking glaciers bear witness to the effects of our changing climate.",
    date: new Date(Date.now())
  },
  {
    park: "Lassen Volcanic National Park",
    stateCode: "CA",
    description:
      "Lassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land.",
    date: new Date(Date.now())
  },
  {
    park: "Mesa Verde National Park",
    stateCode: "CO",
    description:
      "Mesa Verde National Park was established in 1906 to preserve and interpret the archeological heritage of the Ancestral Pueblo people who made it their home for over 700 years, from 600 to 1300 CE. Today, the park protects nearly 5,000 known archeological sites, including 600 cliff dwellings. These sites are some of the most notable and best preserved in the United States.",
    date: new Date(Date.now())
  },
  {
    park: "Mount Rainier National Park",
    stateCode: "WA",
    description:
      "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems. A lifetime of discovery awaits.",
    date: new Date(Date.now())
  },
  {
    park: "North Cascades National Park",
    stateCode: "WA",
    description:
      "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earth's changing climate. Help steward the ecological heart of the Cascades.",
    date: new Date(Date.now())
  },
  {
    park: "Olympic National Park",
    stateCode: "WA",
    description:
      "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!",
    date: new Date(Date.now())
  },
  {
    park: "Petrified Forest National Park",
    stateCode: "AZ",
    description:
      "Did you know that Petrified Forest is perfect for exploration and discovery? While the park has all the wonders known for a century, there are many new adventures and discoveries to share. There are backcountry hikes into areas never open before such as Red Basin. There are new exhibits that bring the stories to life. Come rediscover Petrified Forest!",
    date: new Date(Date.now())
  },
  {
    park: "Pinnacles National Park",
    stateCode: "CA",
    description:
      "Some 23 million years ago multiple volcanoes erupted, flowed, and slid to form what would become Pinnacles National Park. What remains is a unique landscape. Travelers journey through chaparral, oak woodlands, and canyon bottoms. Hikers enter rare talus caves and emerge to towering rock spires teeming with life: prairie and peregrine falcons, golden eagles, and the inspiring California condor.",
    date: new Date(Date.now())
  },
  {
    park: "Rocky Mountain National Park",
    stateCode: "CO",
    description:
      "Rocky Mountain National Park’s 415 square miles encompass and protect spectacular mountain environments. Enjoy Trail Ridge Road – which crests at over 12,000 feet including many overlooks to experience the subalpine and alpine worlds – along with over 300 miles of hiking trails, wildflowers, wildlife, starry nights, and fun times. In a world of superlatives, Rocky is on top!",
    date: new Date(Date.now())
  },
  {
    park: "Saguaro National Park",
    stateCode: "AZ",
    description:
      "Tucson, Arizona is home to the nation's largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park, to the east and west of the modern city of Tucson. Here you have a chance to see these enormous cacti, silhouetted by the beauty of a magnificent desert sunset.",
    date: new Date(Date.now())
  },
  {
    park: "Sequoia & Kings Canyon",
    stateCode: "CA",
    description:
      "This dramatic landscape testifies to nature's size, beauty, and diversity—huge mountains, rugged foothills, deep canyons, vast caverns, and the world's largest trees. The parks lie side by side in the southern Sierra Nevada east of the San Joaquin Valley. Weather varies a lot by season and elevation, which ranges from 1,370' to 14,494'.",
    date: new Date(Date.now())
  },
  {
    park: "Shenandoah National Park",
    stateCode: "VA",
    description:
      "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is a land bursting with cascading waterfalls, spectacular vistas, fields of wildflowers, and quiet wooded hollows. With over 200,000 acres of protected lands that are haven to deer, songbirds, and black bear, there's so much to explore...and your journey begins right here!",
    date: new Date(Date.now())
  },
  {
    park: "Shiloh National Military Park",
    stateCode: ["TN", "MS"],
    description:
      "Visit the sites of the most epic struggle in the Western Theater of the Civil War. Nearly 110,000 American troops clashed in a bloody contest that resulted in 23,746 casualties; more casualties than in all of America's previous wars combined. Explore both the Shiloh and Corinth battlefields to discover the impact of this struggle on the soldiers and on the nation.",
    date: new Date(Date.now())
  },
  {
    park: "Sitka National Park",
    stateCode: "AK",
    description:
      "On an island amid towering spruce and hemlock, Sitka National Historical Park preserves the site of a battle between invading Russian traders and indigenous Kiks.ádi Tlingit. Park visitors are awed by Tlingit and Haida totem poles standing along the park’s scenic coastal trail, and the restored Russian Bishop’s House speaks of Russia’s little known colonial legacy in North America.",
    date: new Date(Date.now())
  },
  {
    park: "Theodore Rooseverlt National Park",
    stateCode: "ND",
    description:
      "When Theodore Roosevelt came to Dakota Territory to hunt bison in 1883, he was a skinny, young, spectacled dude from New York. He could not have imagined how his adventure in this remote and unfamiliar place would forever alter the course of the nation. The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today.",
    date: new Date(Date.now())
  },
  {
    park: "Voyageurs National Park",
    stateCode: "MN",
    description:
      "Voyageurs is a maze of interconnected water highways. Plan ahead before coming to this water-based park by bringing your own watercraft, reserving a watercraft, or taking a park ranger boat tour.",
    date: new Date(Date.now())
  },
  {
    park: "Women's Rights National Historic Park",
    stateCode: "NY",
    description:
      "Women’s Rights National Historical Park tells the story of the first Women’s Rights Convention held in Seneca Falls, NY on July 19-20,1848.  It is a story of struggles for civil rights, human rights, and equality, global struggles that continue today.  The efforts of women’s rights leaders, abolitionists, and other 19th century reformers remind us that all people must be accepted as equals.",
    date: new Date(Date.now())
  },
  {
    park: "Yellowstone National Park",
    stateCode: ["ID","MT", "WY" ],
    description:
      "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal and geologic wonders. With the arrival of spring, rain and snowmelt rejuvenate underground systems and swell Yellowstone’s rivers and lakes, providing essential moisture for plants, animals, and people downstream.",
    date: new Date(Date.now())
  },
  {
    park: "Yosemite National Park",
    stateCode: "CA",
    description:
      "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.",
    date: new Date(Date.now())
  },
  {
    park: "Zion National Park",
    stateCode: "UT",
    description:
      "Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.",
    date: new Date(Date.now())
  }
];


// Probably won't need this code as we don't want the user to have the option to delete a park
db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });