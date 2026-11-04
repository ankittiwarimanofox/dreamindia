import type { ImageKey } from "@/app/lib/images";

export type DayPlan = { title: string; details: string };

export type HimachalPackage = {
  slug: string;
  code: string;
  title: string;
  category: string;
  nights: number;
  days: number;
  price: number;
  priceUnit: "per person" | "per couple";
  minPax: number;
  img: ImageKey;
  destinations: string[];
  summary: string;
  itinerary: DayPlan[];
  inclusions: string[];
};

const IMG: Record<string, ImageKey> = {
  manali: "solang-valley",
  shimla: "shimla-town",
  valley: "kullu-valley",
  honeymoon: "snow-trail",
  mountains: "himalaya-rohtang",
  kasol: "parvati-kasol",
  temple: "hadimba-temple",
  dalhousie: "khajjiar-dalhousie",
  amritsar: "golden-temple",
};

const baseInclusions = (n: number, room = "Deluxe room on double sharing") => [
  "Meet & greet on arrival",
  `${n} breakfasts and ${n} dinners at the hotel`,
  `${n} nights accommodation – ${room}`,
  "Pick-up and drop",
  "All sightseeing by private cab",
  "Driver allowance, fuel, parking, toll & state taxes",
  "Hotel and transport taxes (GST)",
];

const D = {
  arriveShimla: { title: "Delhi / Chandigarh – Shimla", details: "Pick-up from Delhi or Chandigarh and drive to Shimla. Check in and spend the evening on Mall Road and the Ridge." },
  shimlaKufri: { title: "Shimla & Kufri Sightseeing", details: "Morning trip to Kufri for snow views and pony rides. Visit Jakhu Temple, Christ Church and the Ridge in the afternoon." },
  shimlaManali: { title: "Shimla – Kullu – Manali", details: "Scenic drive along the Beas river with stops at Pandoh Dam and Kullu for river rafting (optional) and shawl shopping. Overnight in Manali." },
  manaliLocal: { title: "Manali Local Sightseeing", details: "Hadimba Devi Temple, Vashisht hot springs, Tibetan Monastery, Van Vihar and Old Manali cafés." },
  solang: { title: "Solang Valley & Rohtang / Atal Tunnel", details: "Full-day excursion to Solang Valley for paragliding and ropeway, then on through Atal Tunnel towards Sissu or Rohtang Pass (subject to permit and weather)." },
  naggar: { title: "Naggar Castle, Jana & Jogini Waterfalls", details: "Visit the 15th-century Naggar Castle and Roerich Art Gallery, lunch at Jana waterfall, and an easy trek to Jogini waterfall." },
  manaliDelhi: { title: "Manali – Delhi / Chandigarh Drop", details: "After breakfast, check out and drive back. Drop at Delhi or Chandigarh with happy memories." },
  kasol: { title: "Manali – Kasol & Manikaran", details: "Drive to the Parvati Valley. Visit Manikaran Gurudwara and hot springs, then relax by the river in Kasol." },
};

export const himachalPackages: HimachalPackage[] = [
  {
    slug: "manali-retreat-package",
    code: "DIT-MR-05",
    title: "Manali Retreat Package",
    category: "Couple / Family Special",
    nights: 4, days: 5, price: 9999, priceUnit: "per person", minPax: 4,
    img: IMG.manali,
    destinations: ["Manali", "Rohtang Pass", "Solang", "Naggar Castle", "Jogini Waterfall"],
    summary: "A relaxed Manali-only holiday covering snow points, old temples and waterfalls – ideal for a short family break.",
    itinerary: [
      { title: "Arrival in Manali", details: "Overnight Volvo or cab arrival in Manali. Check in, rest, and stroll Mall Road in the evening." },
      D.manaliLocal, D.solang, D.naggar,
      { title: "Departure from Manali", details: "After breakfast, check out and transfer to the bus stand for your return journey." },
    ],
    inclusions: baseInclusions(4),
  },
  {
    slug: "shimla-manali-by-volvo",
    code: "DIT-SMV-05",
    title: "Mystic Shimla & Manali By Volvo",
    category: "Group / Family Special",
    nights: 4, days: 5, price: 12500, priceUnit: "per person", minPax: 4,
    img: IMG.shimla,
    destinations: ["Shimla", "Kullu", "Manali", "Rohtang Pass", "Solang"],
    summary: "Budget-friendly Shimla and Manali combo with Volvo tickets from Delhi included and private cab for sightseeing.",
    itinerary: [
      { title: "Delhi – Shimla by Volvo", details: "Board the overnight Volvo from Delhi. Arrive in Shimla, check in and visit Mall Road and the Ridge." },
      D.shimlaKufri, D.shimlaManali, D.solang,
      { title: "Manali Local & Volvo to Delhi", details: "Hadimba Temple, Vashisht and Tibetan Monastery, then board the evening Volvo to Delhi." },
    ],
    inclusions: [...baseInclusions(4), "Volvo bus tickets Delhi – Shimla and Manali – Delhi"],
  },
  {
    slug: "best-shimla-manali-combo",
    code: "DIT-SMC-06",
    title: "Best Shimla & Manali Combo",
    category: "Couple / Family Special",
    nights: 5, days: 6, price: 13500, priceUnit: "per person", minPax: 4,
    img: IMG.valley,
    destinations: ["Shimla", "Kullu", "Manali", "Rohtang Pass", "Naggar Castle", "Jana Waterfall", "Jogini Waterfall", "Solang"],
    summary: "Our most popular Himachal trip – two nights in Shimla and three in Manali with every major sight covered.",
    itinerary: [D.arriveShimla, D.shimlaKufri, D.shimlaManali, D.solang, D.naggar, D.manaliDelhi],
    inclusions: baseInclusions(5),
  },
  {
    slug: "shimla-kullu-manali-tour",
    code: "DIT-SKM-07",
    title: "Shimla Kullu Manali Tour Package",
    category: "Couple / Family Special",
    nights: 6, days: 7, price: 13999, priceUnit: "per person", minPax: 2,
    img: IMG.mountains,
    destinations: ["Shimla", "Kullu", "Manali", "Rohtang Pass", "Solang", "Naggar Castle", "Jana Waterfall", "Jogini Waterfall"],
    summary: "A slower-paced week in the hills with an extra free day in Manali. Bookable for just 2 travellers.",
    itinerary: [
      D.arriveShimla, D.shimlaKufri, D.shimlaManali, D.manaliLocal, D.solang, D.naggar,
      { ...D.manaliDelhi, title: "Manali – Delhi / Chandigarh Drop" },
    ],
    inclusions: baseInclusions(6),
  },
  {
    slug: "shimla-manali-kasol-tour",
    code: "DIT-SMK-07",
    title: "Shimla Manali Kasol Tour Package",
    category: "Couple / Family / Group",
    nights: 6, days: 7, price: 16999, priceUnit: "per person", minPax: 4,
    img: IMG.kasol,
    destinations: ["Shimla", "Manali", "Kasol", "Manikaran"],
    summary: "Shimla and Manali classics plus the Parvati Valley – Kasol cafés, riverside stays and Manikaran hot springs.",
    itinerary: [
      D.arriveShimla, D.shimlaKufri, D.shimlaManali, D.manaliLocal, D.solang, D.kasol,
      { title: "Kasol – Delhi / Chandigarh Drop", details: "Morning by the Parvati river, then drive back for your drop." },
    ],
    inclusions: baseInclusions(6),
  },
  {
    slug: "shimla-manali-honeymoon",
    code: "DIT-HSM-06",
    title: "Honeymoon in Shimla and Manali",
    category: "Honeymoon Special",
    nights: 5, days: 6, price: 21999, priceUnit: "per couple", minPax: 2,
    img: IMG.honeymoon,
    destinations: ["Shimla", "Kufri", "Manali", "Solang Valley", "Lahaul", "Naggar Castle", "Jana Waterfall", "Jogini Waterfall"],
    summary: "A romantic getaway with private cab, cosy deluxe rooms and couple-friendly experiences in Shimla and Manali.",
    itinerary: [
      D.arriveShimla, D.shimlaKufri, D.shimlaManali,
      { title: "Solang Valley & Lahaul via Atal Tunnel", details: "Cross the Atal Tunnel into Lahaul for snow views at Sissu, with a stop at Solang Valley on the way back." },
      D.naggar, D.manaliDelhi,
    ],
    inclusions: [...baseInclusions(5, "Deluxe room"), "Honeymoon cake and flower bed decoration (once)"],
  },
  {
    slug: "himachal-honeymoon-tour",
    code: "DIT-HH-07",
    title: "Himachal Honeymoon Tour Package",
    category: "Honeymoon Special",
    nights: 6, days: 7, price: 25999, priceUnit: "per couple", minPax: 2,
    img: IMG.temple,
    destinations: ["Shimla", "Kufri", "Manali", "Solang Valley", "Lahaul", "Kasol", "Manikaran", "Naggar Castle"],
    summary: "Our full honeymoon circuit – Shimla, Manali, Lahaul and a peaceful riverside night in Kasol.",
    itinerary: [
      D.arriveShimla, D.shimlaKufri, D.shimlaManali,
      { title: "Solang Valley & Lahaul via Atal Tunnel", details: "Snow views at Sissu in Lahaul and adventure activities at Solang Valley." },
      D.naggar, D.kasol,
      { title: "Kasol – Delhi / Chandigarh Drop", details: "After breakfast, drive back for your drop." },
    ],
    inclusions: [...baseInclusions(6, "Deluxe room"), "Honeymoon cake and flower bed decoration (once)"],
  },
  {
    slug: "shimla-manali-dharamshala-dalhousie-tour",
    code: "DIT-SMDD-09",
    title: "Shimla Manali Dharamshala Dalhousie Tour",
    category: "Couple / Family / Group",
    nights: 8, days: 9, price: 19999, priceUnit: "per person", minPax: 4,
    img: IMG.dalhousie,
    destinations: ["Shimla", "Manali", "Dharamshala", "McLeodganj", "Dalhousie", "Khajjiar"],
    summary: "The grand Himachal loop – hill stations, Tibetan culture in McLeodganj and the meadows of Khajjiar.",
    itinerary: [
      D.arriveShimla, D.shimlaKufri, D.shimlaManali, D.manaliLocal, D.solang,
      { title: "Manali – Dharamshala", details: "Drive to Dharamshala. Evening at leisure in McLeodganj." },
      { title: "Dharamshala & McLeodganj Sightseeing", details: "Dalai Lama Temple, Bhagsu waterfall, St. John's Church and the cricket stadium. Drive to Dalhousie." },
      { title: "Dalhousie & Khajjiar", details: "Visit Khajjiar, the 'Mini Switzerland of India', plus Panchpula and Dalhousie's Mall Road." },
      { title: "Dalhousie – Pathankot / Delhi Drop", details: "After breakfast, drop at Pathankot railway station or drive on to Delhi." },
    ],
    inclusions: baseInclusions(8),
  },
  {
    slug: "himachal-tour-with-amritsar-10-days",
    code: "DIT-HTA-10",
    title: "Himachal Tour Package With Amritsar",
    category: "Couple / Family / Group",
    nights: 9, days: 10, price: 22999, priceUnit: "per person", minPax: 4,
    img: IMG.amritsar,
    destinations: ["Shimla", "Kufri", "Manali", "Rohtang Pass", "Dharamshala", "Dalhousie", "Amritsar"],
    summary: "Ten days from the Himalayas to the Golden Temple, including the Wagah Border ceremony.",
    itinerary: [
      D.arriveShimla, D.shimlaKufri, D.shimlaManali, D.manaliLocal, D.solang,
      { title: "Manali – Dharamshala", details: "Drive to Dharamshala and explore McLeodganj in the evening." },
      { title: "Dharamshala – Dalhousie", details: "Dalai Lama Temple and Bhagsu in the morning, then drive to Dalhousie." },
      { title: "Khajjiar & Dalhousie", details: "Day trip to Khajjiar meadows and lake. Evening on Dalhousie Mall Road." },
      { title: "Dalhousie – Amritsar", details: "Drive to Amritsar. Visit Jallianwala Bagh and the Wagah Border Beating Retreat ceremony." },
      { title: "Golden Temple & Departure", details: "Early-morning visit to the Golden Temple, then drop at Amritsar airport or railway station." },
    ],
    inclusions: baseInclusions(9),
  },
];

export const formatINR = (n: number) => "₹" + n.toLocaleString("en-IN");
