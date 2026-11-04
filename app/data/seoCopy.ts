// Keyword-focused copy and FAQs. Everything here restates facts already on the site
// (packages, inclusions, prices, contact details) or widely known travel basics.
// No ratings, awards, statistics or review claims.

export type Faq = { q: string; a: string };

export const homeIntro = {
  heading: "Himachal tour packages from a travel agency in Mandi",
  paragraphs: [
    "Dream India Travel is a travel agency based in Mandi, Himachal Pradesh, planning holidays across the Himalayas. Our main trips are Himachal tour packages that combine Shimla, Kullu, Manali, Kasol, Dharamshala, Dalhousie and Amritsar, with hotels, breakfast and dinner, and sightseeing by private cab or an overnight Volvo.",
    "If you are comparing a Shimla Manali tour package for a family holiday, a honeymoon in the hills, or a short Manali getaway from Delhi, start with our Himachal packages page. Every package lists the day-wise itinerary, what is included and what is not, so you can see exactly what you are paying for. Packages can be adjusted: the hotel category, number of days, vehicle and destinations can all be changed to suit your group.",
    "Not sure which trip fits? Tell us your dates, group size and budget on WhatsApp or by phone and we will suggest the right route and send a quote. You can also read our travel journals for trip ideas before you decide.",
  ],
};

export const homeFaqs: Faq[] = [
  { q: "Which Himachal tour packages do you offer?", a: "Shimla Manali combinations by cab or Volvo, Shimla Kullu Manali tours, Kasol add-ons, honeymoon packages and Himachal tours that end in Amritsar. See the full list on our Himachal tour packages page." },
  { q: "What is included in a Dream India Travel package?", a: "Hotel stay with daily breakfast and dinner, meet and greet on arrival, pick-up and drop, sightseeing by private cab, driver allowance, fuel, parking, toll, state taxes and GST. Each package page lists its own inclusions and exclusions." },
  { q: "How do I book a Himachal tour with you?", a: "Call 9530609262 or 8360609668, message us on WhatsApp, or send an enquiry from the contact page. We confirm the itinerary and price with you before you book." },
  { q: "Can the itinerary be customised?", a: "Yes. Hotels, number of days, cab type and destinations can all be changed. Call or WhatsApp us for a custom quote." },
  { q: "What is the best time to visit Himachal Pradesh?", a: "March to June suits sightseeing and pleasant weather. December to February is best for snow in Manali, Kufri and Solang." },
];

export const hubIntro = {
  heading: "Choosing the right Himachal tour package",
  paragraphs: [
    "These Himachal tour packages cover the routes most travellers ask for: Shimla and Manali together, Shimla Kullu Manali by cab or Volvo, Manali on its own, Kasol and the Parvati Valley, Dharamshala with Dalhousie, and a longer tour that ends at the Golden Temple in Amritsar. Prices start from ₹9,999 per person on double sharing.",
    "For a first visit, a Shimla Manali tour package of 6 to 7 days is the most balanced: you spend time in the colonial hill town of Shimla, drive through the Kullu valley along the Beas river, and have a full day each for Manali and Solang Valley. If you only have a long weekend, the Manali retreat or the Volvo-based Shimla and Manali trip saves driving time. Couples can look at our honeymoon packages, and groups who want more of the mountains can add Kasol or Dharamshala and Dalhousie.",
    "Every package is on a private-cab basis with hotel, breakfast and dinner included, and each page shows the day-wise plan, inclusions and exclusions. Prices are on double sharing and can change in peak season, so call or WhatsApp us for a quote for your dates.",
  ],
};

export const hubFaqs: Faq[] = [
  { q: "What is the best time to visit Himachal?", a: "March to June suits sightseeing and pleasant weather. December to February is best for snow in Manali, Kufri and Solang." },
  { q: "Are meals included in the packages?", a: "Yes. Every package includes daily breakfast and dinner at the hotel." },
  { q: "Can I customise a package?", a: "Yes. Hotels, number of days, cab type and destinations can all be changed. Call or WhatsApp us for a custom quote." },
  { q: "Are Rohtang Pass permits included?", a: "Rohtang permits and local Solang/Rohtang taxis are paid directly and are not part of the package price. Rohtang also depends on weather and road status." },
  { q: "Which Himachal package is best for a first-time visit?", a: "A 6 or 7 day Shimla Manali or Shimla Kullu Manali package covers the main sights without too much driving. If time is short, the Volvo-based packages avoid the long drive from Delhi." },
  { q: "How do I book a Himachal tour package?", a: "Call 9530609262 or 8360609668, or message us on WhatsApp with your dates and group size. We confirm the itinerary and price before you book." },
];

// Short unique intro per package (new data-driven pages), keyed by slug.
export const packageIntro: Record<string, string> = {
  "manali-retreat-package": "A five-day Manali holiday for families and couples who want to stay in one place instead of changing hotels every night. Time goes to Manali's old temples and cafés, the snow at Solang and the Atal Tunnel side, and an easy day out to Naggar Castle and Jogini waterfall. Priced from ₹9,999 per person.",
  "shimla-manali-by-volvo": "This Shimla and Manali tour by Volvo suits travellers who would rather sleep on the overnight bus than spend a day driving from Delhi. You get Shimla's Mall Road, Kufri and the Ridge, then the drive through Kullu to Manali, with the return on the evening Volvo.",
  "best-shimla-manali-combo": "Six days covering the two classic hill stations. Shimla gives you colonial-era streets and Kufri; Manali gives you Hadimba Devi Temple, Solang Valley and a day on the Atal Tunnel route. A good first Himachal tour package for families.",
  "shimla-kullu-manali-tour": "Seven days that add breathing room to the Shimla Manali route: a full day in Shimla and Kufri, river rafting stop at Kullu (optional), two days in Manali and a day for Naggar Castle and the waterfalls. Suits couples and small families who do not want to rush.",
  "shimla-manali-kasol-tour": "Take the Shimla Manali route and finish in the Parvati Valley. After Shimla and Manali you drive to Kasol for the river and Manikaran's hot springs and gurudwara. A relaxed week for groups of friends and families who want some quiet at the end.",
  "shimla-manali-honeymoon": "A six-day honeymoon package for couples, priced per couple. It covers Shimla's Ridge and Mall Road, the drive to Manali, a day at Solang Valley and the Atal Tunnel for snow views at Sissu in Lahaul, with private-cab sightseeing.",
  "himachal-honeymoon-tour": "Seven days for couples who want Shimla, Manali and Kasol in one trip. The mix of hill-station evenings in Shimla, snow views at Sissu and Solang, and a morning by the Parvati river in Kasol makes this the longer honeymoon option, priced per couple.",
  "shimla-manali-dharamshala-dalhousie-tour": "A nine-day Himachal tour that goes beyond Shimla and Manali to the Dhauladhar side: McLeodganj and Dharamshala, then Dalhousie and the Khajjiar meadows. Ideal for travellers who have seen Shimla Manali before or want a fuller tour of the state.",
  "himachal-tour-with-amritsar-10-days": "Our longest Himachal package, ten days from Shimla to Amritsar. You cover Shimla, Manali, Dharamshala and Dalhousie, then finish in Amritsar with Jallianwala Bagh, the Wagah Border ceremony and an early-morning visit to the Golden Temple.",
};

// Classic package pages: short intro + FAQs, keyed by path.
export const classicIntro: Record<string, { heading: string; text: string; more: string }> = {
  "/tours-package/shimla/": {
    heading: "About this Shimla Manali Chandigarh honeymoon package",
    text: "A seven-day honeymoon route from Delhi through Shimla and Manali that ends in Chandigarh. You spend your first days in Shimla and Kufri, drive through the Kullu Valley to Manali, have a full day at Solang Valley for paragliding and zorbing, and finish with Chandigarh's Rock Garden and Sukhna Lake. The package adds a candlelight dinner in Manali, flower bed decoration, a honeymoon cake and a private sedan cab.",
    more: "Rates are quoted on request and depend on the season, hotel category and group size. March to June suits sightseeing, while December to February is best for snow at Kufri and Solang. Tell us your dates on WhatsApp or call 9530609262 and we will confirm availability and the final price before you book.",
  },
  "/tours-package/shimla-volvo-package/": {
    heading: "About this Shimla Volvo tour",
    text: "A four-day Shimla tour that starts with an overnight Volvo from Delhi, which means you wake up in the hills instead of spending a day on the road. You get time on Mall Road and the Ridge, a full day for Kufri and Green Valley, and a hotel stay in Shimla before the return journey. It is the shortest Shimla package we run, suitable for a long weekend.",
    more: "Prices start from ₹5,999 and depend on the season and the hotel you choose. The Volvo seat, hotel stay and local sightseeing are planned together, so you only need to tell us your dates and group size. Call 9530609262 or send a WhatsApp message and we will confirm the details before you book.",
  },
  "/tours-package/shimla-cab/": {
    heading: "About this Shimla Kullu Manali tour by cab",
    text: "A six-day Shimla Kullu Manali tour that begins and ends in Chandigarh. By private cab you see Shimla and Kufri, drive to Manali through the Kullu Valley, and spend a day each on Manali's local sights and Solang Valley. Travelling by private cab lets you move at your own pace.",
    more: "Because this route runs by private cab, it is easy to change: add a night in Manali, swap hotels or start from Delhi instead of Chandigarh. Rates depend on the season and group size, so call 9530609262 or message us on WhatsApp with your dates for a quote. March to June suits sightseeing and December to February is best for snow.",
  },
  "/tours-package/kullu-manali-tour/": {
    heading: "About this Dharamshala Dalhousie tour",
    text: "A five-day tour of the Dhauladhar foothills starting at Pathankot. You visit Dharamshala and McLeodganj, then Dalhousie and Khajjiar, often called the Mini Switzerland of India, and finish with Chamba before departure. It works well as a quieter alternative to Shimla and Manali, or as an add-on for travellers heading to Amritsar. Note that the page address still says kullu-manali-tour for historical reasons.",
    more: "The price is on request because it depends on the season, hotel and number of travellers. March to June gives pleasant weather for Khajjiar and Dharamshala. Call 9530609262 or WhatsApp us with your dates and group size and we will send a quote and confirm the itinerary before you book.",
  },
  "/tours-package/best-of-manali-volvo-package/": {
    heading: "About this Manali Volvo package",
    text: "A five-day Manali tour built around the overnight Volvo from Delhi. You arrive in Manali in the morning, spend a day on local sightseeing, and take a Solang Valley excursion before heading home. It is a simple way to see Manali without arranging your own transport.",
    more: "Prices start from ₹8,999 and depend on the season and hotel. Rohtang Pass is optional and depends on weather and permits. March to June suits sightseeing and December to February is best for snow. Call 9530609262 or WhatsApp us with your dates to confirm availability.",
  },
  "/tours-package/himachal-tour-with-amritsar/": {
    heading: "About this 6-day Himachal tour with Amritsar",
    text: "A six-day route that starts in Amritsar, goes up to Dalhousie and Khajjiar, then Dharamshala, and ends in Manali. If you want a longer itinerary that adds Shimla and Kasol and finishes at the Golden Temple, see our 10-day Himachal tour with Amritsar.",
    more: "This is the shorter route: six days from Amritsar into the hills. Rates depend on the season and group size, so call 9530609262 or message us on WhatsApp with your dates for a quote. Hotels, number of days and cab type can be changed if you want to add Shimla or end the trip at a different city.",
  },
};

export const classicFaqs = (topic: string): Faq[] => [
  { q: `Can the ${topic} be customised?`, a: "Yes. Hotels, number of days, cab type and destinations can all be changed. Call or WhatsApp us for a custom quote." },
  { q: `How do I book the ${topic}?`, a: "Call 9530609262 or 8360609668, or message us on WhatsApp with your dates and group size. We confirm the itinerary and price before you book." },
  { q: "What is the best time to visit Himachal?", a: "March to June suits sightseeing and pleasant weather. December to February is best for snow in Manali, Kufri and Solang." },
];

export const packageFaqs = (p: { title: string; price: number; priceUnit: string; nights: number; days: number; minPax: number }): Faq[] => [
  { q: `What is the price of the ${p.title} package?`, a: `It starts from ₹${p.price.toLocaleString("en-IN")} ${p.priceUnit} on double sharing for ${p.nights} nights / ${p.days} days (minimum ${p.minPax} travellers). Prices may vary by season and travel date, so call or WhatsApp us to confirm for your dates.` },
  { q: "What is included in this package?", a: "Hotel stay with daily breakfast and dinner, meet and greet, pick-up and drop, sightseeing by private cab, driver allowance, fuel, parking, toll, state taxes and GST. Entry tickets, adventure activities, lunch and personal expenses are not included." },
  { q: "Can I change the itinerary or hotel?", a: "Yes. Hotels, number of days, cab type and destinations can all be changed. Call or WhatsApp us for a custom quote." },
];
