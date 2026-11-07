# Emerald Escapes 🍀

Emerald Escapes is a responsive travel website for a fictional Irish travel company. It helps visitors discover trips across Ireland, save their favourites, compare experiences, and prepare a booking enquiry.

Developed as part of the **Web Design & Client-Side Scripting coursework at National College of Ireland**.

## Pages

- **Home:** Introduces the company, highlights travel categories, and showcases featured experiences through an interactive carousel.
- **Experiences:** Presents 17 sample trips with filters, sorting, favourites, comparison, and detailed information in Bootstrap modals.
- **Contact & Booking:** Provides contact information and an enquiry form with input validation and personalised confirmation.

## Features

- Responsive layouts for desktop, tablet, and mobile.
- Light and dark themes, with the selected preference saved between visits.
- Favourites saved using `localStorage`, with consistent counters across pages.
- Filters for travel category, maximum price, and saved experiences.
- Sorting by recommendation, price, or name.
- Comparison of up to three experiences.
- Trip details with included activities, duration, suggested season, and estimated cost.
- Price estimates that update when the number of travellers changes.
- Booking enquiry messages automatically populated from the selected trip.
- Form validation with field-specific error messages.
- Animated statistics, image hover effects, and a back-to-top button.
- Reduced-motion styles and labelled form controls.

## Technologies

- HTML5
- CSS3, including custom properties, transitions, and animations
- JavaScript
- Bootstrap 5.3.8
- Font Awesome
- Google Fonts: DM Sans and Cormorant Garamond
- GitHub Pages for hosting

## Project Structure

```text
emerald-escapes/
├── index.html
├── experiences.html
├── contact.html
├── README.md
├── css/
│   └── style.css
├── images/
└── js/
    ├── contact-form.js
    ├── experiences.js
    ├── favourites-counter.js
    ├── featured-carousel.js
    ├── scroll-navigation.js
    ├── stats-counter.js
    ├── theme-init.js
    └── theme-toggle.js
```

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Cesargarciajr/emerald-escapes.git
   ```

2. Open the project folder in Visual Studio Code.
3. Start a local server, such as the Live Server extension.
4. Open `index.html` through that server.

No build step or package installation is required. An internet connection is needed for the external Bootstrap, icon, and font resources.

## How Data Is Stored

The experience information is defined in `js/experiences.js`.

Favourites and the theme preference are stored in the browser using `localStorage`. They remain available across page visits on the same browser and site address. Clearing the site's browser data removes these preferences.

## Demo Limitations

Emerald Escapes is a fictional company created for educational purposes.

- Trips, prices, and contact details are sample content.
- Price estimates are demonstrations, not booking quotations.
- The enquiry form validates input and displays confirmation locally; it does not send emails or create bookings.
- No payment processing or backend database is connected.

## Author

**Cesar Garcia**  
National College of Ireland  
Higher Diploma in AI/ML

[GitHub profile](https://github.com/Cesargarciajr)