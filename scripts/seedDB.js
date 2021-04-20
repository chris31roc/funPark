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
    park: "Acadia National Park",
    stateCode: "ME",
    description:
      "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 3.5 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
    date: new Date(Date.now())
  },
  {
    park: "Arches National Park",
    stateCode: "UT",
    description:
      "Visit Arches to discover a landscape of contrasting colors, land forms, and textures unlike any other in the world. The park has over 2,000 natural stone arches and hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.",
    date: new Date(Date.now())
  },
  {
    park: "Badlands National Park",
    stateCode: "SD",
    description:
      "The rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world’s richest fossil beds. Ancient horses and rhinos once roamed here. The park’s 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today.",
    date: new Date(Date.now())
  },
  {
    park: "Big Bend National Park",
    stateCode: "TX",
    description:
      "There is a place in Far West Texas where night skies are dark as coal and rivers carve temple-like canyons in ancient limestone. Here, at the end of the road, hundreds of bird species take refuge in a solitary mountain range surrounded by weather-beaten desert. Tenacious cactus bloom in sublime southwestern sun, and diversity of species is the best in the country. This magical place is Big Bend...",
    date: new Date(Date.now())
  },
  {
    park: "Biscayne National Park",
    stateCode: "FL",
    description:
      "Within sight of downtown Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Evidence of 10,000 years of human history is here too, from pirates and shipwrecks to pineapple farmers and presidents. Outdoors enthusiasts can boat, snorkel, camp, watch wildlife…or simply relax in a rocking chair gazing out over the bay.",
    date: new Date(Date.now())
  },
  {
    park: "Black Canyon of the Gunnison National Park",
    stateCode: "CO",
    description:
      "Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky.",
    date: new Date(Date.now())
  },
  {
    park: "Bryce Canyon National Park",
    stateCode: "UT",
    description:
      "Hoodoos (irregular columns of rock) exist on every continent, but here is the largest concentration found anywhere on Earth. Situated along a high plateau at the top of the Grand Staircase, the park's high elevations include numerous life communities, fantastic dark skies, and geological wonders that defy description.",
    date: new Date(Date.now())
  },
  {
    park: "Canyon Lands National Park",
    stateCode: "UT",
    description:
      "Canyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert atmosphere, but each offers different opportunities for sightseeing and adventure.",
    date: new Date(Date.now())
  },
  {
    park: "Capitol Reef National Park",
    stateCode: "UT",
    description:
      "Located in south-central Utah in the heart of red rock country, Capitol Reef National Park is a hidden treasure filled with cliffs, canyons, domes, and bridges in the Waterpocket Fold, a geologic monocline (a wrinkle on the earth) extending almost 100 miles.",
    date: new Date(Date.now())
  },
  {
    park: "Carlsbad Caverns National Park",
    stateCode: "NM",
    description:
      "High ancient sea ledges, deep rocky canyons, flowering cactus, and desert wildlife—treasures above the ground in the Chihuahuan Desert. Hidden beneath the surface are more than 119 caves—formed when sulfuric acid dissolved limestone leaving behind caverns of all sizes.",
    date: new Date(Date.now())
  },
  {
    park: "Channel Isands National Park",
    stateCode: "CA",
    description:
      "Channel Islands National Park encompasses five remarkable islands and their ocean environment, preserving and protecting a wealth of natural and cultural resources. Isolation over thousands of years has created unique animals, plants, and archeological resources found nowhere else on Earth and helped preserve a place where visitors can experience coastal southern California as it once was.",
    date: new Date(Date.now())
  },
  {
    park: "Congaree National Park",
    stateCode: "SC",
    description:
      "Astonishing biodiversity exists in Congaree National Park, the largest intact expanse of old growth bottomland hardwood forest remaining in the southeastern United States. Waters from the Congaree and Wateree Rivers sweep through the floodplain, carrying nutrients and sediments that nourish and rejuvenate this ecosystem and support the growth of national and state champion trees.",
    date: new Date(Date.now())
  },
  {
    park: "Crater Lake National Park",
    stateCode: "OR",
    description:
      "Crater Lake inspires awe. Native Americans witnessed its formation 7,700 years ago, when a violent eruption triggered the collapse of a tall peak. Scientists marvel at its purity: fed by rain and snow, it’s the deepest lake in the USA and one of the most pristine on earth. Artists, photographers, and sightseers gaze in wonder at its blue water and stunning setting atop the Cascade Mountain Range.",
    date: new Date(Date.now())
  },
  {
    park: "Cuyahoga Valley National Park",
    stateCode: "OH",
    description:
      "Though a short distance from the urban areas of Cleveland and Akron, Cuyahoga Valley National Park seems worlds away. The park is a refuge for native plants and wildlife, and provides routes of discovery for visitors. The winding Cuyahoga River gives way to deep forests, rolling hills, and open farmlands. Walk or ride the Towpath Trail to follow the historic route of the Ohio & Erie Canal.",
    date: new Date(Date.now())
  },
  {
    park: "Death Valley National Park",
    stateCode: ["CA", "NV"],
    description:
      "In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life survives in Death Valley.",
    date: new Date(Date.now())
  },
  {
    park: "Dry Tortugas National Park",
    stateCode: "FL",
    description:
      "Almost 70 miles (113 km) west of Key West lies the remote Dry Tortugas National Park. This 100-square mile park is mostly open water with seven small islands.  Accessible only by boat or seaplane, the park is known the world over as the home of magnificent Fort Jefferson, picturesque blue waters, superlative coral reefs and marine life, and the vast assortment of bird life that frequents the area.",
    date: new Date(Date.now())
  },
  {
    park: "Everglades National Park",
    stateCode: "FL",
    description:
      "Everglades National Park protects an unparalleled landscape that provides important habitat for numerous rare and endangered species like the manatee,  American crocodile, and the elusive Florida panther. An international treasure as well -  a World Heritage Site, International Biosphere Reserve, a Wetland of International Importance, and a specially protected area under the Cartagena Treaty.",
    date: new Date(Date.now())
  },
  {
    park: "Gateway Arch Natiuonal Park",
    stateCode: "MO",
    description:
      "The Gateway Arch reflects St. Louis' role in the Westward Expansion of the United States during the nineteenth century. The park is a memorial to Thomas Jefferson's role in opening the West, to the pioneers who helped shape its history, and to Dred Scott who sued for his freedom in the Old Courthouse.",
    date: new Date(Date.now())
  },
  {
    park: "Glacier National Park",
    stateCode: "MT",
    description:
      "Come and experience Glacier's pristine forests, alpine meadows, rugged mountains, and spectacular lakes. With over 700 miles of trails, Glacier is a hiker's paradise for adventurous visitors seeking wilderness and solitude. Relive the days of old through historic chalets, lodges, and the famous Going-to-the-Sun Road. Explore Glacier National Park and discover what awaits you.",
    date: new Date(Date.now())
  },
  {
    park: "Grand Canyon National Park",
    stateCode: "AZ",
    description:
      "Located in Arizona, Grand Canyon National Park encompasses 277 miles (446 km) of the Colorado River and adjacent uplands. The park is home to much of the immense Grand Canyon; a mile (1.6 km) deep, and up to 18 miles (29 km) wide. Layered bands of colorful rock reveal millions of years of geologic history. Grand Canyon is unmatched in the incomparable vistas it offers visitors from the rim.",
    date: new Date(Date.now())
  },
  {
    park: "Grand Teton",
    stateCode: "WY",
    description:
      "Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands as a monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River, and enjoy the serenity of this remarkable place.",
    date: new Date(Date.now())
  },
  {
    park: "Great Basin National Park",
    stateCode: "NV",
    description:
      "From the 13,063-foot summit of Wheeler Peak, to the sage-covered foothills, Great Basin National Park is a place to sample the stunning diversity of the larger Great Basin region. Come and partake of the solitude of the wilderness, walk among ancient bristlecone pines, bask in the darkest of night skies, and explore mysterious subterranean passages. There's a whole lot more than just desert here! ",
    date: new Date(Date.now())
  },
  {
    park: "Great Smoky Mountains National Parks",
    stateCode: ["NC", "TN"],
    description:
      "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America's most visited national park.",
    date: new Date(Date.now())
  },
  {
    park: "Guadalupe Mountains National Park",
    stateCode: "TX",
    description:
      "Come experience mountains and canyons, desert and dunes, night skies and spectacular vistas within a place unlike any other. Guadalupe Mountains National Park protects the world's most extensive Permian fossil reef, the four highest peaks in Texas, an environmentally diverse collection of flora and fauna, and the stories of lives shaped through conflict, cooperation and survival.",
    date: new Date(Date.now())
  },
  {
    park: "Haleakalā",
    stateCode: "HI",
    description:
      "This special place vibrates with stories of ancient and modern Hawaiian culture and protects the bond between the land and its people. The park also cares for endangered species, some of which exist nowhere else. Come visit this special place - renew your spirit amid stark volcanic landscapes and sub-tropical rain forest with an unforgettable hike through the backcountry.",
    date: new Date(Date.now())
  },
  {
    park: "Hawai'i National Park",
    stateCode: "HI",
    description:
      "Hawai‘i Volcanoes National Park protects some of the most unique geological, biological, and cultural landscapes in the world. Extending from sea level to 13,677 feet, the park encompasses the summits of two of the world's most active volcanoes - Kīlauea and Mauna Loa.",
    date: new Date(Date.now())
  },
  {
    park: "Homestead National Park",
    stateCode: "NB",
    description:
      "The Homestead Act of 1862 transformed the world. Millions were invited to file claims including, families, immigrants, single women, and freed slaves. Over 10 percent of the United States was homesteaded! The land, long inhabited by American Indian cultures, changed forever. Homesteaders created settlements and farms, drove industrial advancement, and built our nation chasing the American Dream.",
    date: new Date(Date.now())
  },
  {
    park: "Hopewell National Park",
    stateCode: "Oh",
    description:
      "Nearly 2000 years ago, American Indians built dozens of monumental mounds and earthen enclosures in southern Ohio. These earthwork complexes were ceremonial landscapes used for feasts, funerals, rituals, and rites of passage associated with an American Indian religious movement that swept over half the continent for almost 400 years. Come walk among the earthworks and experience the past. ",
    date: new Date(Date.now())
  },
  {
    park: "Hot Springs National Park",
    stateCode: "AR",
    description:
      "Hot Springs National Park has a rich cultural past. The grand architecture of our historic bathhouses is equally matched by the natural curiosities that have been drawing people here for hundreds of years. Ancient thermal springs, mountain views, incredible geology, forested hikes, and abundant creeks – all in the middle of town – make Hot Springs National Park a unique and beautiful destination.",
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
    park: "Isle Royale National Park",
    stateCode: "MI",
    description:
      "Explore a rugged, isolated island, far from the sights and sounds of civilization. Surrounded by Lake Superior, Isle Royale offers unparalleled solitude and adventures for backpackers, hikers, boaters, kayakers, canoeists and scuba divers. Here, amid stunning scenic beauty, you'll find opportunities for reflection and discovery, and make memories that last a lifetime.",
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