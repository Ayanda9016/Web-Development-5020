# WEDE-Part-1
# Alluring Florals - WEDE5020 Part 1
### Part 1 - 12 August 2026
- Initial build with 5 HTML pages.
### [Part 1] - Initial Structure
- Created 5 pages Home Shop About Enquiry Contact(Mozilla Developer Network, 2024)."  
Project Title: Alluring Florals.
Student Information: Ayanda Zondo.

Student Number: ST10466695.

Project Overview:  Alluring florals began in 2021 as a kitchen-table business in Durban 

Website Goals and Objectives:
Drive sales & bookings, build brand trust, Improve convenience. (Chaffey and Ellis-Chadwick, 2022)."  

Key Features and Functionality: Hero banner with featured bouquets, quick links to shop, testimonials, and "Order Now" CTA. Mobile responsive.(Nielsen Norman Group, 2024) and visual hierarchy (Krug, 2014)." 

Timelines and Milestones: Project proposal, target audience, competitor analysis.
### Feedback Edits from Part 1
- Fixed: Broken images on Cart page
- Fixed: Navigation not highlighting active page
- Improved: Contact page was empty - added full content
- Added: Required animations for Part 2 rubric
Reference List - Harvard Anglia
Duckett, J., 2011. HTML and CSS: Design and Build Websites. Indianapolis: John Wiley & Sons.
Robbins, J.N., 2018. Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics. 5th ed. Sebastopol: O'Reilly Media.
Mozilla Developer Network, 2024. HTML: HyperText Markup Language - Introduction to HTML. Available at: developer.mozilla.org [Accessed 27 Oct 2026].
World Wide Web Consortium, 2023. HTML5 Specification - The Structure of HTML Documents. Available at: w3.org [Accessed 27 Oct 2026].
Krug, S., 2014. Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability. 3rd ed. Berkeley: New Riders.
Nielsen, J. and Budiu, R., 2012. Mobile Usability. Berkeley: New Riders. And: Nielsen Norman Group, 2024. E-Commerce UX: Top 10 Design Guidelines. Available at: nngroup.com [Accessed 27 Oct 2026].
Marcotte, E., 2011. Responsive Web Design. New York: A Book Apart.
Chaffey, D. and Ellis-Chadwick, F., 2022. Digital Marketing: Strategy, Implementation and Practice. 8th ed. Harlow: Pearson. - For your Website Goals: Drive sales & bookings, build brand trust.
W3Schools, 2024. HTML Responsive Web Design and CSS Navigation Bar Tutorial. Available at: w3schools.com [Accessed 27 Oct 2026].
Laudon, K.C. and Traver, C.G., 2023. E-commerce 2023: Business, Technology, Society. 17th ed. Harlow: Pearson. - For key features: hero banner, CTA, testimonials.[online]   
# WEDE-Part-2
# Alluring Florals - WEDE5020 Part 2
## New Features Added in Part 2
- Animations:** Added fade-in, slide-up, float animations to About page (Style 2 - luxury editorial)
- Fixed Image Paths:** Converted absolute paths (C:/Users/...) to relative paths (images/rose.jpg) to fix broken images
- Contact Page Redesign:** Added business address, trading hours, delivery info
- UI Improvements:** Hover effects, active nav states, responsive layout

## Sitemap
- Home.html - Landing page with hero banner
- Shop.html - Product catalogue
- About.html - Brand story with animations
- Contact.html - Contact form and store info
- Cart.html - Shopping cart with fixed images

## Changelog
### Part 2 - 16 September 2026
- Added: CSS keyframe animations to About page
- Added: Contact page info-box (45 Florida Road, Durban)
- Fixed: Image display bug - renamed "Romantic Roses" to "rose.jpg" to remove spaces
- Fixed: Changed src from C:/Users/... to images/rose.jpg
- Improved: Button hover effects and cart layout.
 Part 2 Reference List - Harvard Anglia Style
Mozilla Developer Network, 2024. CSS Animations - Using CSS animations. Available at: developer.mozilla.org [Accessed 27 Oct 2026].
Mozilla Developer Network, 2024. @keyframes - CSS at-rule to control animation steps. Available at: developer.mozilla.org [Accessed 27 Oct 2026].
Meyer, E.A. and Weyl, E., 2023. CSS: The Definitive Guide. 5th ed. Sebastopol: O'Reilly Media.
Duckett, J., 2011. HTML and CSS: Design and Build Websites. Indianapolis: John Wiley & Sons. - For fade-in, slide-up effects Chapter 15.
W3Schools, 2024. HTML File Paths - Absolute vs Relative Paths. Available at: w3schools.com [Accessed 27 Oct 2026].
World Wide Web Consortium, 2021. Web Content File Naming and Path Best Practices. Available at: w3.org [Accessed 27 Oct 2026].

- PART 3-WEDE5020
## Features Implemented
#### 2.1 Interactive Elements
- **Tabs:** Our Story, Mission, Flower Care on About page using vanilla JavaScript DOM manipulation (W3Schools, 2023a)
- **Accordion:** FAQs with jQuery slideToggle method (jQuery Foundation, 2023)
 **Gallery Lightbox:** Click to enlarge flowers with modal overlay
- **Leaflet Map:** Interactive map with Durban markers using Leaflet.js library (Agafonkin, 2023)
#### 2.2 Dynamic Content
- Products loaded dynamically from JS array not hardcoded in HTML using fetch API (MDN Web Docs, 2023b)
- **Search:** Live filter by name and type using array filter method
- **Filter:** By flower type Rose, Tulip, Sunflower
- **Sort:** Price Low to High, High to Low, Name using array sort
#### JavaScript Form Validation
- Client Side Validation using regular expressions for email and phone validation (W3Schools, 2023b)
- Error Handling with visual feedback pattern (Flanagan, 2020)
- AJAX Submission using fetch API to jsonplaceholder for asynchronous form handling without page reload (MDN Web Docs, 2023c)
 - Search Engine Optimisation
#### 3.1 On-Page SEO
- **Title Tags:** Descriptive titles with primary keywords as recommended by Google Search Central (2023a)
- **Meta Descriptions:** Unique for each page under 160 characters (Moz, 2023)
- **Header Tags:** Single H1 per page with proper H2 and H3 hierarchy for content structure (Google Search Central, 2023b)
- **Image Optimisation:** Descriptive filenames, alt text with keywords, max-width 100 percent for responsive images (Google Search Central, 2023c)
- **URL Structure:** Clean lowercase hyphen separated URLs (Google Search Central, 2023a)
- **Internal Linking:** Footer links between pages with keyword rich anchor text to distribute link equity (Chaffey and Ellis-Chadwick, 2019)
- **Mobile Friendliness:** Viewport meta tag, responsive grid, tested with Google Lighthouse (Google Developers, 2023)
#### 3.2 Off-Page SEO
- **Backlinks:** Partner badge code for other sites, listed on local directories for domain authority (Moz, 2023)
- **Social Media:** Facebook and WhatsApp share buttons, Instagram link, Open Graph tags for social sharing (Meta Developers, 2023)
- **Local SEO:** LocalBusiness Schema markup with geo coordinates and opening hours as per Schema.org standards (Schema.org, 2023)
    - Google Map embed for location verification
    - Keywords: flowers Durban, flower delivery Durban, buy bouquets KZN
    - Service areas: Durban Central, Umhlanga, Ballito, Musgrave, Berea
#### 3.3 Technical SEO
- **sitemap.xml:** Lists all 6 pages with priority values for crawler efficiency (Google Search Central, 2023d)
- **robots.txt:** Directs crawlers and blocks cart page from indexing
## Forms Explanation

**enquiry.html:** For product, service, volunteer and sponsor enquiries. Validates input then processes and presents response with cost and availability. Example: Sunflower R280 x 2 equals R560, In Stock, Same day delivery. Volunteer: Free, Weekends availability. Implements progressive disclosure principle (Krug, 2014).

**contact.html:** For general messages. Validates basic contact info, type of message, full message then compiles into email and provides mailto link. Follows form usability guidelines (Nielsen Norman Group, 2023).
## Changelog

### [Part 3] - SEO Implementation

#### Added - On-Page SEO
- Added unique title tags for all 6 pages: home.html, about.html, shop.html, cart.html, contact.html, enquiry.html
- Added meta descriptions under 160 characters for each page
- Added meta keywords for Durban flower delivery
- Implemented single H1 per page with proper H2 and H3 hierarchy
- Added alt text for all images with descriptive keywords
- Renamed images to SEO friendly format: classic-red-roses-bouquet-delivery-durban.jpg
- Added viewport meta tag for mobile responsiveness
- Added internal linking between pages with anchor text Buy Bouquets Online

#### Added - Off-Page SEO
- Added LocalBusiness Schema markup with geo coordinates for Durban Central
- Added Open Graph tags for Facebook and WhatsApp sharing
- Added Twitter Card tags
- Added Facebook and WhatsApp share buttons on shop.html
- Added service areas: Durban Central, Umhlanga, Ballito, Musgrave, Berea
- Added keywords: flowers Durban, flower delivery Durban, buy bouquets KZN

#### Added - Technical SEO
- Created sitemap.xml with 6 URLs and priority values
- Created robots.txt with Allow all and Disallow cart.html
- Added canonical tags
- Optimized site for Lighthouse performance
- Tested mobile friendliness with Google Lighthouse

#### Changed
- Updated README.md with Part 3 documentation and Harvard Anglia references
- Updated home.html to include structured data for LocalBusiness
- Improved site navigation for crawler efficiency

#### Fixed
- Fixed duplicate H1 tags on about.html
- Fixed missing alt attributes on gallery images
- Fixed page load speed by compressing images to max-width 100 percent
- Fixed broken internal links in footer

### [Part 2.2]  - Dynamic Content
- Implemented dynamic product loading from JS array
- Added search filter and sort functionality on shop.html
- Added cart functionality with localStorage

### [Part 2.1] - JavaScript Enhancements
- Added tabs on about.html Our Story Mission Flower Care
- Added accordion for FAQs
- Added gallery lightbox
- Added Leaflet map with Durban markers
- Added animations fadeIn zoomIn slideUp
## Reference List - Harvard Anglia Style

Agafonkin, V., 2023. Leaflet - an open-source JavaScript library for mobile-friendly interactive maps. [online] Available at: https://leafletjs.com/ [Accessed 10 May 2025].

Chaffey, D. and Ellis-Chadwick, F., 2019. Digital Marketing. 7th ed. Harlow: Pearson Education.

Flanagan, D., 2020. JavaScript: The Definitive Guide. 7th ed. Sebastopol: OReilly Media.

Google Developers, 2023. Lighthouse - Web performance auditing tool. [online] Available at: https://developers.google.com/web/tools/lighthouse [Accessed 10 May 2025].

Google Search Central, 2023a. Search Engine Optimization Starter Guide. [online] Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 10 May 2025].

Google Search Central, 2023b. Use heading tags to emphasize important text. [online] Available at: https://developers.google.com/search/docs/crawl-indexing-best-practices [Accessed 10 May 2025].

Google Search Central, 2023c. Image SEO best practices. [online] Available at: https://developers.google.com/search/docs/appearance/google-images [Accessed 10 May 2025].

Google Search Central, 2023d. Build and submit a sitemap. [online] Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap [Accessed 10 May 2025].

jQuery Foundation, 2023. jQuery API Documentation. [online] Available at: https://api.jquery.com/ [Accessed 10 May 2025].

Krug, S., 2014. Dont Make Me Think Revisited: A Common Sense Approach to Web Usability. 3rd ed. Berkeley: New Riders.

MDN Web Docs, 2023a. CSS Flexible Box Layout. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout [Accessed 10 May 2025].

MDN Web Docs, 2023b. Fetch API. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API [Accessed 10 May 2025].

MDN Web Docs, 2023c. Client-side form validation. [online] Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed 10 May 2025].

Meta Developers, 2023. Open Graph Protocol. [online] Available at: https://developers.facebook.com/docs/sharing/webmasters/ [Accessed 10 May 2025].

Moz, 2023. The Beginners Guide to SEO. [online] Available at: https://moz.com/beginners-guide-to-seo [Accessed 10 May 2025].

Nielsen Norman Group, 2023. Website Forms Usability. [online] Available at: https://www.nngroup.com/articles/web-form-design/ [Accessed 10 May 2025].

Schema.org, 2023. LocalBusiness Schema. [online] Available at: https://schema.org/LocalBusiness [Accessed 10 May 2025].

W3Schools, 2023a. JavaScript HTML DOM. [online] Available at: https://www.w3schools.com/js/js_htmldom.asp [Accessed 10 May 2025].
