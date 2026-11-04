export type Day = { title: string; details: string };
// Day-wise plans of the six original package pages, used for schema.org TouristTrip data.
export const classicItineraries: Record<string, Day[]> = {
 "/tours-package/shimla/": [
  {
   "title": "Arrive Delhi – Shimla",
   "details": "Pickup from Delhi Airport/Railway Station. Drive to Shimla, the 'Queen of Hills'. Check-in at your honeymoon suite. Evening at leisure to explore the Mall Road."
  },
  {
   "title": "Shimla & Kufri Sightseeing",
   "details": "Visit Kufri, the winter sports capital. Explore the Himalayan Nature Park and Green Valley. Enjoy a romantic evening walk at the Ridge and Christ Church."
  },
  {
   "title": "Shimla – Kullu – Manali",
   "details": "Scenic drive to Manali via Kullu Valley. Visit the Hanogi Mata Temple and Pandoh Dam. Enjoy river rafting in Kullu (optional). Arrive in Manali for overnight stay."
  },
  {
   "title": "Manali Local Exploration",
   "details": "Visit Hadimba Devi Temple, Vashisht Hot Springs, and the Tibetan Monastery. Enjoy a special candlelight dinner at the hotel."
  },
  {
   "title": "Solang Valley Adventure",
   "details": "Full day excursion to Solang Valley. Enjoy paragliding and zorbing. Visit the Anjani Mahadev Temple. Evening at the Manali Mall Road."
  },
  {
   "title": "Manali – Chandigarh",
   "details": "Drive to Chandigarh. Visit the famous Rock Garden, Sukhna Lake, and Rose Garden. Check-in at the hotel for your final night."
  },
  {
   "title": "Chandigarh – Delhi Departure",
   "details": "After breakfast, drop back to Delhi Airport/Railway Station for your onward journey with sweet honeymoon memories."
  }
 ],
 "/tours-package/shimla-volvo-package/": [
  {
   "title": "Delhi – Shimla (Overnight Journey)",
   "details": "Report at Delhi Volvo Pickup point (Majnu Ka Tilla / RK Ashram) by 8:00 PM. Depart for Shimla. Enjoy an overnight journey in a comfortable Luxury AC Volvo."
  },
  {
   "title": "Shimla Arrival & Local Sightseeing",
   "details": "Pickup from Shimla Bus Stand and transfer to hotel. Afternoon visit to the famous Jakhu Temple (Hanuman Statue), Christ Church, The Ridge, and the bustling Mall Road for shopping."
  },
  {
   "title": "Kufri & Green Valley Excursion",
   "details": "Full day excursion to Kufri, the winter sports capital. Visit the Himalayan Nature Park and Green Valley. In the evening, return to Shimla for a relaxing dinner at your hotel."
  },
  {
   "title": "Shimla – Delhi (Departure)",
   "details": "After breakfast, check out from the hotel. Spend free time at the local market. Board the evening Volvo (approx 8:00 PM) from Shimla for your return journey to Delhi."
  }
 ],
 "/tours-package/shimla-cab/": [
  {
   "title": "Chandigarh – Shimla",
   "details": "Arrive at Chandigarh Airport/Railway Station. Our driver will pick you up for a scenic drive to Shimla. Check-in at the hotel and enjoy a peaceful evening at the Mall Road."
  },
  {
   "title": "Shimla Local & Kufri Sightseeing",
   "details": "After breakfast, visit Kufri, Green Valley, and Indira Holiday Home. In the afternoon, explore the Ridge, Christ Church, and Jakhoo Temple."
  },
  {
   "title": "Shimla – Kullu – Manali",
   "details": "Travel to Manali via the beautiful Kullu Valley. Stop for river rafting and visit the Vaishno Devi Temple in Kullu. Reach Manali by evening."
  },
  {
   "title": "Manali Local Sightseeing",
   "details": "Explore Hadimba Devi Temple, Vashisht Hot Springs, and the Tibetan Monastery. Spend your evening shopping at the Manali Mall Road."
  },
  {
   "title": "Solang Valley Excursion",
   "details": "Full day excursion to Solang Valley for adventure sports like paragliding and zorbing. Return to the hotel for dinner."
  },
  {
   "title": "Manali – Chandigarh Departure",
   "details": "After breakfast, drive back to Chandigarh for your onward journey. Tour ends with sweet memories."
  }
 ],
 "/tours-package/kullu-manali-tour/": [
  {
   "title": "Arrive Pathankot / Dharamshala",
   "details": "Pickup from Pathankot Railway Station or Dharamshala Airport. Transfer to your hotel in Mcleodganj. Spend a relaxing evening at the local market."
  },
  {
   "title": "Dharamshala Local Sightseeing",
   "details": "Visit the Dalai Lama Temple complex, Bhagsunath Temple & Waterfall, St. John in the Wilderness Church, and the scenic Dal Lake."
  },
  {
   "title": "Dharamshala – Dalhousie",
   "details": "Morning drive to Dalhousie. On arrival, check-in at the hotel. Explore the colonial charm of Dalhousie and visit Gandhi Chowk in the evening."
  },
  {
   "title": "Dalhousie – Khajjiar (Mini Switzerland)",
   "details": "Full day excursion to Khajjiar. Enjoy the cedar forests, vast meadows, and the ancient Khajji Nag Temple. Perfect for photography and nature walks."
  },
  {
   "title": "Dalhousie – Chamba – Departure",
   "details": "Visit the historic Chamba town and Lakshmi Narayan Temple. Later, drive back to Pathankot for your onward journey home."
  }
 ],
 "/tours-package/best-of-manali-volvo-package/": [
  {
   "title": "Delhi to Manali (Overnight)",
   "details": "Arrive at the Delhi Volvo Boarding point by 5:00 PM. Depart for a scenic overnight journey to Manali."
  },
  {
   "title": "Arrival & Local Sightseeing",
   "details": "Morning arrival and hotel check-in. Visit Hadimba Devi Temple, Vashisht Village, and Mall Road."
  },
  {
   "title": "Solang Valley Excursion",
   "details": "Full day excursion to Solang Valley for adventure sports. Optional Rohtang Pass visit."
  }
 ],
 "/tours-package/himachal-tour-with-amritsar/": [
  {
   "title": "Arrive Amritsar",
   "details": "Pickup from Amritsar Railway Station/Airport. Visit the Golden Temple and witness the Wagah Border ceremony in the evening. Overnight stay at Amritsar."
  },
  {
   "title": "Amritsar – Dalhousie",
   "details": "After breakfast, visit Jallianwala Bagh, then proceed to Dalhousie. Check-in at the hotel and enjoy a peaceful evening amidst the pine-clad hills."
  },
  {
   "title": "Dalhousie – Khajjiar (Mini Switzerland)",
   "details": "Full day excursion to Khajjiar. Enjoy the vast green meadows, floating island, and optional zorbing or horse riding. Return to Dalhousie."
  },
  {
   "title": "Dalhousie – Dharamshala",
   "details": "Travel to Dharamshala. Visit Mcleodganj, Bhagsunath Temple, and the Dalai Lama Temple complex. Overnight stay in Dharamshala."
  },
  {
   "title": "Dharamshala – Manali",
   "details": "A scenic drive to Manali. En route, visit the Palampur tea gardens and Baijnath temple. Reach Manali by evening and check into your hotel."
  },
  {
   "title": "Manali Local & Departure",
   "details": "Visit Hadimba Devi Temple and Vashisht Village. Later, drop at the Volvo station or continue for your onward journey."
  }
 ]
};
