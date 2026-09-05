/**
 * Apex Engineering Concern — central site data.
 * Single source of truth for company info, navigation, hero slides,
 * product categories, products, capabilities and strengths.
 * Product catalogue below is the full Metrix+ range supplied by Apex,
 * sourced from the company's own product sheet.
 * All pages/components read from this file instead of hardcoding content.
 */
(function (global) {
  "use strict";

  var company = {
    name: "Apex Engineering Concern",
    shortName: "Apex Concern",
    legalName: "Apex Engineering Concern",
    since: 2008,
    city: "Kolkata",
    tagline: "Test, measurement & inspection instruments",
    descriptionShort:
      "Genuine Metrix+ electrical, environmental, surveying and NDT test & measurement instruments — with competitive pricing and reliable technical support for industrial and commercial customers.",
    phonePrimary: "+91 33 46019249",
    phonePrimaryHref: "+913346019249",
    phoneMobile: "9903468068",
    phoneMobileHref: "+919903468068",
    whatsapp: "918697623530",
    email: "apexconcern@hotmail.com",
    address: "38, Netaji Subhas Road, Ground Floor",
    addressCity: "Kolkata - 700001, West Bengal, India",
    gst: "19AAFFA6911P1Z1",
    mapEmbed:
      "https://maps.google.com/maps?q=38%20Netaji%20Subhas%20Road%20Kolkata%20700001&t=&z=16&ie=UTF8&iwloc=&output=embed",
  };

  var brand = {
    name: "Metrix+",
    logo: "images/brand/metrix-logo.png",
    logoTransparent: "images/brand/metrix-logo-transparent.png",
    line: "Authorised Metrix+ Instrument Dealer",
  };

  // Brands carried by the site. Each product/category may declare a "brand"
  // slug; when absent, it defaults to "metrix" (the site's original, sole
  // brand) so none of the existing Metrix+ data needs to be touched.
  var brands = [
    { slug: "metrix", name: "Metrix+", logo: "images/brand/metrix-logo-transparent.png" },
    { slug: "multispan", name: "Multispan", logo: "images/brand/multispan-logo.png" },
    { slug: "micro", name: "MICRO", logo: "https://www.microprocesscontrols.com/xhtml/images/logo.png" },
  ];

  // Primary navigation. Products carries a dropdown built from productCategories below.
  var nav = [
    { label: "Home", href: "index.html", key: "home" },
    { label: "About Us", href: "about.html", key: "about" },
    { label: "Products", href: "products.html", key: "products", dropdownFrom: "categories" },
    { label: "Contact Us", href: "contact.html", key: "contact" },
  ];

  // Hero slider — 3 slides, each paired with a real Metrix+ product photo
  // (kept whole via object-fit: contain, never cropped).
  var heroSlides = [
    {
      id: "slide-1",
      variant: "navy",
      image: "https://www.metrixinstrument.in/products/large/31_51.jpg",
      imageAlt: "Metrix+ 603A+ Digital Multimeter",
      eyebrow: "Kolkata \u00b7 Since " + company.since,
      heading: "Genuine Metrix+ instruments you can depend on.",
      subtitle:
        "Apex Engineering Concern supplies the full Metrix+ range of electrical, environmental, surveying and NDT test instruments, with competitive pricing and technical support for industrial and commercial customers.",
      ctaPrimary: { label: "View Products", href: "products.html" },
      ctaSecondary: { label: "Talk To Our Team", href: "contact.html" },
    },
    {
      id: "slide-2",
      variant: "steel",
      image: "https://www.metrixinstrument.in/products/large/13_32.jpg",
      imageAlt: "Metrix+ MT 16 Infrared Thermometer",
      eyebrow: "85+ Instruments",
      heading: "Electrical, environmental, surveying & NDT.",
      subtitle:
        "From clamp meters and insulation testers to infrared thermometers, moisture meters and ultrasonic thickness gauges — one catalogue, one trusted supplier.",
      ctaPrimary: { label: "Browse Categories", href: "index.html#categories" },
      ctaSecondary: { label: "Request A Quote", href: "contact.html" },
    },
    {
      id: "slide-4",
      variant: "navy",
      image: "https://multispanindia.com/document/images/611892_1766664351_479f6d.jpg",
      imageAlt: "Multispan Universal Temperature Controller",
      eyebrow: "Now Stocking Multispan",
      heading: "Multispan process control & panel instrumentation, too.",
      subtitle:
        "Temperature controllers, power & energy meters, protection relays, programmable timers/counters, power supplies and process control instruments — the full Multispan range, alongside Metrix+.",
      ctaPrimary: { label: "Browse Multispan", href: "products.html#multispan" },
      ctaSecondary: { label: "Enquire Now", href: "contact.html" },
    },
    {
      id: "slide-5",
      variant: "deep",
      image: "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/precision-test-master/4.jpg",
      imageAlt: "MICRO Precision Test Master Pressure Gauge",
      eyebrow: "Now Stocking MICRO",
      heading: "MICRO pressure, temperature & flow instruments, too.",
      subtitle:
        "Pressure gauges, differential pressure gauges, temperature gauges, thermowells, rotameters and flow switches — the MICRO (Micro Process Controls) range, alongside Metrix+ and Multispan.",
      ctaPrimary: { label: "Browse MICRO", href: "products.html#micro" },
      ctaSecondary: { label: "Enquire Now", href: "contact.html" },
    },
  ];

  // The three post-hero information blocks.
  var featureBoxes = [
    {
      icon: "fa-solid fa-user-tie",
      heading: "Experienced Team",
      text: "A responsive team backed by " + (new Date().getFullYear() - company.since) + "+ years supplying test, measurement and inspection instruments to industrial and commercial customers.",
      meta: { icon: "fa-solid fa-phone", label: company.phonePrimary, href: "tel:" + company.phonePrimaryHref },
    },
    {
      icon: "fa-solid fa-industry",
      heading: "Genuine Metrix+ Range",
      text: "The full Metrix+ catalogue across electrical, environmental, surveying and NDT instruments, supplied and supported with technical know-how.",
      meta: null,
    },
    {
      icon: "fa-solid fa-file-invoice",
      heading: "Request A Quote",
      text: "Tell us the instrument or application and get a prompt, no-obligation quote from our team.",
      cta: { label: "Get A Quote", href: "contact.html" },
    },
  ];

  // Standout instrument families, shown as alternating image/text rows.
  var subcategoryHighlights = [
  {
    "category": "electrical-instruments",
    "subCategory": "Digital Clamp Meter",
    "heading": "Digital Clamp Meters",
    "icon": "fa-solid fa-bolt",
    "image": "https://www.metrixinstrument.in/products/large/3_19.jpg",
    "text": "AC/DC clamp meters with sturdy 52mm jaws, True RMS and inrush current measurement for electrical installation and maintenance work."
  },
  {
    "category": "surveying-equipments",
    "subCategory": "Infrared Thermometers",
    "heading": "Infrared Thermometers",
    "icon": "fa-solid fa-temperature-three-quarters",
    "image": "https://www.metrixinstrument.in/products/large/14_33.jpg",
    "text": "Non-contact temperature guns measuring up to 1850\u00b0C, with adjustable emissivity and data storage for plant-floor and maintenance rounds."
  },
  {
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "heading": "Liquid Filled Pressure Gauges",
    "icon": "fa-solid fa-gauge",
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/liquid-filled/5.jpg",
    "text": "Glycerin-filled Bourdon tube pressure gauges from \u00d840mm to \u00d8300mm dial sizes, with SS 316 wetted parts and ranges up to 3500 bar, for vibration-prone process and hydraulic applications.",
    "brand": "micro"
  },
  {
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "heading": "Digital Multi-Function Meters",
    "icon": "fa-solid fa-gauge-high",
    "image": "https://multispanindia.com/document/images/53972em-1p-regular.jpg",
    "text": "Panel-mount meters covering voltage, current, power and energy parameters, used across LT/HT panels, motor control centres and electrical control panels.",
    "brand": "multispan"
  },
  {
    "category": "programmable-timers-counters",
    "subCategory": "Din Rail Timer - Electronics Time Relay",
    "heading": "Din Rail Timers & Time Relays",
    "icon": "fa-solid fa-stopwatch",
    "image": "https://multispanindia.com/document/images/89037cyl-22u-regular.jpg",
    "text": "DIN rail mounted programmable timers and electronic time relays for control & relay panels, DG set panels and energy management systems.",
    "brand": "multispan"
  },
  {
    "category": "protection-relays",
    "subCategory": "Voltage Protection Relay",
    "heading": "Voltage Protection Relays",
    "icon": "fa-solid fa-shield-halved",
    "image": "https://multispanindia.com/document/images/925519_1773478094_652f65.jpg",
    "text": "Voltage protection relays for control panels, distribution panels and DG set panels, safeguarding connected loads from abnormal supply conditions.",
    "brand": "multispan"
  },
  {
    "category": "temperature",
    "subCategory": "Thermowell",
    "heading": "Thermowells",
    "icon": "fa-solid fa-temperature-half",
    "image": "https://microprocesscontrols.com/xhtml/images/products/thermowell/2.jpg",
    "text": "Solid bar stock and fabricated thermowells in straight, tapered and stepped types, with threaded, weld-in and flanged mounting, protecting temperature sensors from direct process contact.",
    "brand": "micro"
  }
];

  // Product categories, derived from the full Metrix+ catalogue below.
  var productCategories = [
  {
    "slug": "electrical-instruments",
    "name": "Electrical Instruments",
    "shortDesc": "Digital multimeters, clamp meters, voltage testers, earth resistance and insulation testers for installation, service and panel work.",
    "image": "https://www.metrixinstrument.in/products/large/34_54.jpg"
  },
  {
    "slug": "environmental-testers",
    "name": "Environmental Testers",
    "shortDesc": "Temperature & humidity meters, anemometers, lux meters and sound level meters for site and lab conditions monitoring.",
    "image": "https://www.metrixinstrument.in/products/large/83_109.jpg"
  },
  {
    "slug": "surveying-equipments",
    "name": "Surveying Equipments",
    "shortDesc": "Infrared thermometers, tachometers, laser distance meters, stroboscopes and vibration meters for field measurement.",
    "image": "https://www.metrixinstrument.in/products/large/13_32.jpg"
  },
  {
    "slug": "ndt-instruments",
    "name": "NDT Instruments",
    "shortDesc": "Moisture meters, gloss meters, hardness testers, ultrasonic thickness and flaw detectors, coating thickness gauges for inspection and QA.",
    "image": "https://www.metrixinstrument.in/products/large/78_104.jpg"
  },
  {
    "slug": "temperature-controller",
    "name": "Temperature Controller",
    "shortDesc": "Multispan Temperature Controller range — Basic Temperature Controller, PID Temperature Controller, Universal PID Controller and more, for industrial process control, monitoring and automation.",
    "image": "https://multispanindia.com/document/images/41417utc-114-regular.jpg",
    "brand": "multispan"
  },
  {
    "slug": "process-control-instruments",
    "name": "Process Control Instruments",
    "shortDesc": "Multispan Process Control Instruments range — Process Indicators / Process Controllers, Scanners & Data Loggers, Flow Totalizer and more, for industrial process control, monitoring and automation.",
    "image": "https://multispanindia.com/document/images/77857pi-38-regular.jpg",
    "brand": "multispan"
  },
  {
    "slug": "programmable-timers-counters",
    "name": "Programmable Timers & Counters",
    "shortDesc": "Multispan Programmable Timers & Counters range — Sequential Timer, Programmable Timer, Thumbwheel Timer and more, for industrial process control, monitoring and automation.",
    "image": "https://multispanindia.com/document/images/8603sqt-regular.jpg",
    "brand": "multispan"
  },
  {
    "slug": "power-energy-meter",
    "name": "Power & Energy Meter",
    "shortDesc": "Multispan Power & Energy Meter range — Digital Multi-Function Meter, Digital Energy Meters, Digital AVF Meter and more, for industrial process control, monitoring and automation.",
    "image": "https://multispanindia.com/document/images/356761_1777638061_83521b.jpg",
    "brand": "multispan"
  },
  {
    "slug": "protection-relays",
    "name": "Protection Relays",
    "shortDesc": "Multispan Protection Relays range — Automatic Power Factor Controller - APFC, Demand Controller, Motor Protection Relay - MPD and more, for industrial process control, monitoring and automation.",
    "image": "https://multispanindia.com/document/images/76837apfc-9608-regular.jpg",
    "brand": "multispan"
  },
  {
    "slug": "power-supplies",
    "name": "Power Supplies",
    "shortDesc": "Multispan Power Supplies range — 240W, 156W, 120W and more, for industrial process control, monitoring and automation.",
    "image": "https://multispanindia.com/document/images/33148smps-category-image.jpg",
    "brand": "multispan"
  },
  {
    "slug": "cryo",
    "name": "CRYO",
    "shortDesc": "Multispan CRYO range — CRYO Cooling Controller, for industrial process control, monitoring and automation.",
    "image": "https://multispanindia.com/document/images/50038cc-548-regular.jpg",
    "brand": "multispan"
  },
  {
    "slug": "pressure",
    "name": "Pressure",
    "shortDesc": "MICRO (Micro Process Controls) Pressure instruments — genuine catalogue range imported category- and subcategory-wise from the manufacturer.",
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/precision-test-master/4.jpg",
    "brand": "micro"
  },
  {
    "slug": "temperature",
    "name": "Temperature",
    "shortDesc": "MICRO (Micro Process Controls) Temperature instruments — genuine catalogue range imported category- and subcategory-wise from the manufacturer.",
    "image": "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/bi-metallic/3.jpg",
    "brand": "micro"
  },
  {
    "slug": "flow",
    "name": "Flow",
    "shortDesc": "MICRO (Micro Process Controls) Flow instruments — genuine catalogue range imported category- and subcategory-wise from the manufacturer.",
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/acrylic-glass-tube/4.jpg",
    "brand": "micro"
  }
];

  // Multispan categories added above. Full product catalogue — sourced from Apex's Metrix+ product sheet (85 SKUs).
  var products = [
  {
    "id": "metrix-cd-1-voltage-testers",
    "name": "Metrix+ CD 1 Voltage Testers",
    "category": "electrical-instruments",
    "subCategory": "Voltage Testers (Pen Type)",
    "image": "https://technocart.com/cdn/shop/products/Metrix-CD1-00.jpg",
    "shortDesc": "Economical pen type line voltage tester with range 90V ~ 1000V AC",
    "features": [
      "LED and beep indications",
      "90VAC ~ 1000VAC",
      "Altitude upto 2000m",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "CD 1",
      "Power & Supply": "2 x 1.5V AAA batteries",
      "Humidity": "<=95%",
      "Measuring Range": "90VAC ~ 1000VAC",
      "Storage Temperature & Humidity": "10 ~ 50\u00b0C",
      "Operating Temperature & Humidity": "-10 ~ 50\u00b0C",
      "Measurement Category": "Category IV 1000V per IEC61010",
      "Altitude": "2000m",
      "Pollution": "Degree 2"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/cd-1_76_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-th-01-indoor-digital-thermometer",
    "name": "Metrix+ TH 01 Indoor Digital Thermometer",
    "category": "environmental-testers",
    "subCategory": "Temperature & Humidity Meters",
    "image": "https://www.metrixinstrument.in/products/large/83_109.jpg",
    "shortDesc": "Indoor temperature and humidity display with clock, alarm and date features in a table-top design",
    "features": [
      "High precision thermometer with 19999 counts.",
      "K-type thermocouple.",
      "Data storage and recall.",
      "High and low temperature alarms.",
      "\u00b0C to \u00b0F convertible",
      "Auto power off.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "Metrix TH 01"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/th-01_83_catalogue.pdf",
    "featured": true
  },
  {
    "id": "metrix-cd-3-voltage-testers",
    "name": "Metrix+ CD 3 Voltage Testers",
    "category": "electrical-instruments",
    "subCategory": "Voltage Testers (Pen Type)",
    "image": "https://www.metrixinstrument.in/products/large/77_101.jpg",
    "shortDesc": "Pen type line voltage tester with range 12 ~ 1000V AC, bar display and changeable sensitivity",
    "features": [
      "Bar-graph display and beep indications",
      "High/low sensitive setting with range 12 ~ 1000V, 50/60Hz",
      "Flashlight",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "CD 3",
      "Power & Supply": "2 x 1.5V AAA batteries",
      "Humidity": "<=95%",
      "Measuring Range": "High sensitivity: 12 ~ 1000V, 50/60Hz, Low sensitivity: 48 ~ 1000V, 50/60Hz",
      "Storage Temperature & Humidity": "-10 ~ 50\u00b0C",
      "Operating Temperature & Humidity": "0 ~ 40\u00b0C",
      "Altitude": "2000m",
      "Safety compliance": "CAT III 1000V, CAT IV 600V"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/cd-3_77_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-31c-digital-multimeter",
    "name": "Metrix+ 31C Digital Multimeter",
    "category": "electrical-instruments",
    "subCategory": "Digital Multimeter",
    "image": "https://www.metrixinstrument.in/products/large/29_49.jpg",
    "shortDesc": "Economical multimeter with temperature test and backlit display",
    "features": [
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "31_C"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/31c_29_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-603-digital-multimeter",
    "name": "Metrix+ 603+ Digital Multimeter",
    "category": "electrical-instruments",
    "subCategory": "Digital Multimeter",
    "image": "https://www.metrixinstrument.in/products/large/30_50.jpg",
    "shortDesc": "Digital Multimeter with IR Test and live wire detection",
    "features": [
      "IR Test and live wire detection",
      "Self-recovery fuse",
      "Data hold and auto power off",
      "Low battery indication",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "603+"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/603_30_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-dt-305-s-environmental-testers",
    "name": "Metrix+ DT 305 S Environmental Testers",
    "category": "environmental-testers",
    "subCategory": "Temperature & Humidity Meters",
    "image": "https://metrixinstrument.in/products/large/61_85.jpg",
    "shortDesc": "Digital Thermometer with K-type thermocouple as measuring sensor with measuring range upto 250\u00b0C",
    "features": [
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "DT 305-S",
      "Sampling Rate": "2.5 times per second",
      "Power & Supply": "2 x 1.5V LR03 AAA",
      "Accuracy": "\u00b1(0.5% + 1\u2103), \u00b1(0.5% + 2oF)",
      "Resolution": "0.1\u00b0C / 0.1\u00b0F",
      "Measuring Range": "TP 01 probe (standard) : -50 ~ 250 \u00b0C, TP 03 probe (optional) : -50 ~ 1300 \u00b0C",
      "Data Storage": "100 sets"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-125a-ac-digital-clamp-meter",
    "name": "Metrix+ 125A AC Digital Clamp Meter",
    "category": "electrical-instruments",
    "subCategory": "Digital Clamp Meter",
    "image": "https://www.metrixinstrument.in/products/large/3_19.jpg",
    "shortDesc": "1000A Digital AC Clamp Meter with sturdy 52mm jaw size.",
    "features": [
      "Double Insulation Protection Class Ii",
      "Auto Negative Polarity Indication",
      "Low Battery Indication",
      "Overload Protection",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "125A",
      "LCD Display": "31/2 Digit, 1999 Count",
      "Range": "Manual",
      "AC Ampere": "2000m/20/200/600A   + (2% + 10d)",
      "Resistance": "2000\u03a9   \u00b1 (1% + 5d)",
      "Jaw Diameter": "30mm",
      "Storage Temperature & Humidity": "-20oC ~ 60oC, <80% RH",
      "Operating Temperature & Humidity": "0oC ~ 40oC, <70% RH",
      "Battery": "AAA 1.5V x 2",
      "AC Voltage": "600V   + (0.8% + 5d)",
      "DC Voltage": "600V   + (1.2% + 5d)"
    },
    "catalogueUrl": null,
    "featured": true
  },
  {
    "id": "metrix-603a-digital-multimeter",
    "name": "Metrix+ 603A+ Digital Multimeter",
    "category": "electrical-instruments",
    "subCategory": "Digital Multimeter",
    "image": "https://www.metrixinstrument.in/products/large/31_51.jpg",
    "shortDesc": "Digital Multimeter with IR Test, live wire detection and temperature test",
    "features": [
      "IR Test and live wire detection",
      "Self-recovery fuse",
      "Data hold and auto power off",
      "Low battery indication",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "603_A+"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/603a_31_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-pg-08",
    "name": "Metrix PG 08",
    "category": "ndt-instruments",
    "subCategory": "Misc",
    "image": "https://www.zillionsbuyer.com/uploads/product_image/product_8013_1_thumb.jpg",
    "shortDesc": "Warranty: 6 Months",
    "features": [
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "PG_08"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-125a-ac-digital-clamp-meter-2",
    "name": "Metrix+ 125A+ AC Digital Clamp Meter",
    "category": "electrical-instruments",
    "subCategory": "Digital Clamp Meter",
    "image": "https://www.metrixinstrument.in/products/small/4_20.jpg",
    "shortDesc": "600A Digital AC Clamp Meter with backlight",
    "features": [
      "AC/DC V, AC A",
      "Continuity, Diode",
      "Data Hold, Auto Power Off",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "125A+",
      "LCD Display": "1999 count, Backlight",
      "Range": "Manual",
      "AC Ampere": "2/20/200/600A   \u00b1 (2.5% \u00b1 8)",
      "Resistance": "2k\u03a9/2000k\u03a9   \u00b1 (1.2% \u00b1 3)",
      "Jaw Diameter": "28mm",
      "Storage Temperature & Humidity": "-20oC ~ 60oc,  <80%RH",
      "Operating Temperature & Humidity": "0oC ~ 40oc,  <70%RH",
      "Battery": "AAA 1.5V x 2",
      "LCD Size": "24.3 x 34.6mm",
      "AC Voltage": "600V   + (1.5% + 5)",
      "DC Voltage": "600V   + (1.0% + 3)"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-avm-01-digital-anemometer",
    "name": "Metrix+ AVM 01 Digital Anemometer",
    "category": "environmental-testers",
    "subCategory": "Digital Anemometer",
    "image": "https://www.metrixinstrument.in/products/small/39_59.jpg",
    "shortDesc": "Fixed head Digital Anemometer to measure wind speed upto 30m/s",
    "features": [
      "\u00b0C/\u00b0F Selection",
      "Low Battery Indication",
      "Data Hold Function",
      "Wind Speed Units: M/S, Ft/Min, Knots, Km/Hr., Mph",
      "Current/Average Measuring",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "AVM 01",
      "Display": "Large backlit LCD",
      "Temperature Measuring Range": "0 ~ 50\u00b0C",
      "Temperature Resolution": "0.1\u00b0C",
      "Wind speed measuring range": "0.3 ~ 30m/s",
      "Power & Supply": "3 x 1.5V AAA batteries",
      "Accuracy": "+5% + 0.1",
      "Resolution": "0.1m/s"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-lx-101-digital-lux-meter",
    "name": "Metrix+ LX 101+ Digital Lux Meter",
    "category": "environmental-testers",
    "subCategory": "Digital Lux Meter",
    "image": "https://www.metrixinstrument.in/products/large/36_56.jpg",
    "shortDesc": "Flexible sensor economic Lux Meter with measuring range upto 2L lux",
    "features": [
      "Separate light sensor for measuring at the most optimum position.",
      "Data hold and range switch.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "LX 101+",
      "Display": "4-digit LCD  with 1999 max count",
      "Power & Supply": "1 x 9V battery",
      "Accuracy": "< 2,00,000 lux : \u00b1 (3%rdg + 0.5%), >= 2,00,000 lux : \u00b1 (4%rdg + 10dgt)",
      "Resolution": "0 ~ 19  : 0.01 lux, 20 ~ 199 : 0.1 lux, 200 ~ 1,999 : 1lux, 2,000  ~ 1,99,999 : 10 lux",
      "Measuring Range": "0 ~ 2,00,000 lux",
      "Storage Temperature & Humidity": "-10 ~ 50oC",
      "Operating Temperature & Humidity": "0 ~ 40oC"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/lx-101_36_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-mt-2-c-infrared-thermometer-temperature-gun",
    "name": "Metrix+ MT 2-C Infrared Thermometer (Temperature Gun)",
    "category": "surveying-equipments",
    "subCategory": "Infrared Thermometers",
    "image": "https://www.metrixinstrument.in/products/large/10_28.jpg",
    "shortDesc": "Economical palm-sized Infrared Thermometer to measure upto 380\u00b0C",
    "features": [
      "Color display for better readability.",
      "\u00b0C / \u00b0F convertible.",
      "Selectable laser pointer operation.",
      "Auto Power off and Data hold functionality.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "MT 2-C",
      "Power & Supply": "2 x AAA battery",
      "Accessories": "Battery, Operational Manual ; Blister Packing",
      "Accuracy": "-50\u00b0C (-58\u00b0F) ~ 0\u00b0C (32\u00b0F) : +3\u00b0C, 0\u00b0C(32\u00b0F) ~ 100\u00b0C(212\u00b0F) : +2\u00b0C, Above 100\u00b0C (212\u00b0F) : +2\u00b0C or +2% whichever is greater",
      "Storage Temperature & Humidity": "-20 ~ 60\u00b0C (-4 ~ 140\u00b0F) without battery",
      "Response Time": "500 ms, 95% responsive",
      "Measurement Range": "-50\u00b0C ~ 380\u00b0C ( -58\u00b0F ~ 716\u00b0F )",
      "Spectral Response": "8-14 um",
      "Emissivity": "preset 0.95"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/mt-2-c_10_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-dt-2234bl-digital-tachometer",
    "name": "Metrix+ DT 2234BL Digital Tachometer",
    "category": "surveying-equipments",
    "subCategory": "Tachometers",
    "image": null,
    "shortDesc": "Non-contact photo tachometer with measuring range upto 99999RPM",
    "features": [
      "Store last measured value",
      "Backlit display",
      "Ergonomic compact design",
      "Low battery indication",
      "Auto power off",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "DT2234BL",
      "LCD Display": "5-digit large screen LCD display, with word height of 18mm",
      "Laser Power & Wavelength": "CLASS II 2\u20145m",
      "Resolution Ratio": "0.1rpm(2.5~999.9rpm), 1rpm(1000~99999rpm)"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-mt-4xl-infrared-thermometer-temperature-gun",
    "name": "Metrix+ MT 4xL Infrared Thermometer (Temperature Gun)",
    "category": "surveying-equipments",
    "subCategory": "Infrared Thermometers",
    "image": null,
    "shortDesc": "Economical Infrared Thermometer to measure upto 550\u00b0C",
    "features": [
      "Economic",
      "Backlight Display",
      "Auto Power OFF, Data Hold.",
      "Laser Target Pointer Selection.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "MT 4xL",
      "Backlight Display": "Backlight Display",
      "Power & Supply": "2 x 1.5V AAA battery",
      "Accessories": "Battery, Operational Manual ; Carry Case & Gift Box",
      "Temperature": "-32\u2103 ~ 550\u2103(-26\u00b0F ~ 1022\u00b0F)",
      "Resolution": "0.1\u00b0C or 0.1\u00b0F (<1000\u00b0C)",
      "Response Time": "200 ms",
      "Spectral Response": "8-14 um",
      "Emissivity": "preset 0.95"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/mt-4xl_11_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-1250a-ac-digital-clamp-meter",
    "name": "Metrix+ 1250A AC Digital Clamp Meter",
    "category": "electrical-instruments",
    "subCategory": "Digital Clamp Meter",
    "image": null,
    "shortDesc": "1000A Digital AC Clamp Meter with sturdy 52mm jaw size.",
    "features": [
      "Resistance, Diode Continuity, Data Hold & Apo, Inrush Current",
      "Non Contact Voltage, AC/DC V, AC/DC A, Diode, Continuity",
      "Jaw Diameter: 52 Mm",
      "Overload Protection",
      "Auto Negative Polarity Indication",
      "Low Battery Indication",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "1250A",
      "LCD Display": "3 \u00bd Digit 1999 count",
      "Range": "Manual",
      "Temperature": "-50oC ~ 300oc,   \u00b11%\u00b15d, 301oC ~ 1000oc,   \u00b11.9%\u00b15d",
      "AC Ampere": "2/20/200/1000A ,   \u00b12%\u00b110d",
      "Resistance": "2k\u03a9,    \u00b11%\u00b15d",
      "Jaw Diameter": "52mm",
      "Storage Temperature & Humidity": "-20\u00b0C ~ 60\u00b0c,  <80%RH",
      "Operating Temperature & Humidity": "0\u00b0C ~ 40\u00b0c,  <70%RH",
      "Battery": "9V",
      "AC Voltage": "700V ,   \u00b11.2%\u00b15d",
      "DC Voltage": "1000V,    \u00b10.8%\u00b12d"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-dt-2235bl-digital-tachometer",
    "name": "Metrix+ DT 2235BL Digital Tachometer",
    "category": "surveying-equipments",
    "subCategory": "Tachometers",
    "image": null,
    "shortDesc": "Contact type Tachometer with measuring range upto 19999 RPM",
    "features": [
      "Contact Type",
      "Max, min and average value",
      "Low Battery Indication",
      "Data Hold",
      "Large backlit LCD display",
      "Compact design",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "DT 2235BL",
      "Range": "0.5-19,999rpm",
      "Power & Supply": "2 x 1.5V AAA batteries",
      "Accuracy": "+(0.05%+1word)",
      "Resolution": "0.1rpm, 1rpm"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-dm-40-digital-distance-meter",
    "name": "Metrix+ DM 40 Digital Distance Meter",
    "category": "surveying-equipments",
    "subCategory": "Laser Distance Meters",
    "image": "https://www.metrixinstrument.in/products/large/45_65.jpg",
    "shortDesc": "40m Laser Distance Meter with area/volume calculations, bi axis spirit level, data storage and clear OLED display",
    "features": [
      "Pocket type.",
      "Area/volume calculations",
      "Clear display for better readability from all angles.",
      "Historical data review.",
      "Bi-axis spirit bubble for checking level.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "DM 40",
      "Accuracy": "\u00b12.0mm",
      "Measuring Range": "0.05 ~ 40m",
      "Measuring Units": "Distance : m, ft, in, Area : m2, ft2, Volume : m3, ft4",
      "Single Measurement Time": "0.25s",
      "Laser Type": "620 \u2013 690nm,  Class II, <1mW",
      "Storage Temperature & Humidity": "-20 to 65\u2103",
      "Operating Temperature & Humidity": "0 to 40\u2103",
      "Battery": "2 x AAA 1.5V ; >5000 times working time(fully charged)"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/dm-40_45_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-mm-2a-digital-moisture-meter",
    "name": "Metrix+ MM 2A+ Digital Moisture Meter",
    "category": "ndt-instruments",
    "subCategory": "Moisture Meter",
    "image": "https://www.metrixinstrument.in/products/large/63_87.jpg",
    "shortDesc": "Digital Moisture Meter for wood and wood construction material, with measuring range upto 70%",
    "features": [
      "Selection among 4 types of wood species.",
      "Reading lock.",
      "Auto temperature compensation for varying environment.",
      "Battery volume alert",
      "Large non-parallax LCD with legible display",
      "Automatic/manual power off.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "MM 2A+",
      "Temperature": "-10 ~ 60\u00b0C; +1\u00b0C; 0.1\u00b0C",
      "Humidity": "20 ~ 95% RH; +5% RH; 0.1% RH",
      "Resolution": "0.50%",
      "Operating Temperature & Humidity": "0\u2103-40\u2103, 20% ~ 95%RH",
      "Battery": "2*1.5V AAA Battery"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/mm-2a_63_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-171trms-digital-multimeter",
    "name": "Metrix+ 171TRMS+ Digital Multimeter",
    "category": "electrical-instruments",
    "subCategory": "Digital Multimeter",
    "image": null,
    "shortDesc": "6000 count True RMS Digital multimeter with large backlit display, NCV and flashlight function",
    "features": [
      "6000 count",
      "True RMS",
      "NCV",
      "Flashlight",
      "Data hold and auto power off",
      "Low battery indication",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "171TRMS+"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-451-digital-multimeter",
    "name": "Metrix+ 451 Digital Multimeter",
    "category": "electrical-instruments",
    "subCategory": "Digital Multimeter",
    "image": "https://www.metrixinstrument.in/products/large/33_53.jpg",
    "shortDesc": "Digital Panel Calibrate LCR Multimeter with large backlit display",
    "features": [
      "Large backlit display",
      "Low battery indication",
      "Auto power off",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "451"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/451_33_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-2250t-aca-digital-clamp-meter",
    "name": "Metrix+ 2250T ACA Digital Clamp Meter",
    "category": "electrical-instruments",
    "subCategory": "Digital Clamp Meter",
    "image": null,
    "shortDesc": "1000A Digital AC True RMS Clamp Meter with sturdy 52mm jaw, inrush current and auto ranging features",
    "features": [
      "Jaw Diameter: 25 Mm",
      "Double Insulation Protection Class Ii",
      "Overload Protection",
      "Auto Negative Polarity Indication",
      "Low Battery Indication",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "2250T",
      "LCD Display": "3 3/4 Digit 3999 count",
      "Range": "Auto Range",
      "Temperature": "-50oC ~ 300oc   \u00b1 (1.0% + 4), 301oC ~ 1000oc   \u00b1 (1.9% + 5)",
      "AC Ampere": "4/40/400/1000A ,   \u00b12%\u00b110d",
      "Resistance": "400/4k/40k/400k/4m\u03a9,    \u00b11%\u00b13d, 40m\u03a9,   \u00b11.5%\u00b15d",
      "Frequency Range": "100Hz/1k/10k/100k/1M/10M/40MHz,    \u00b10.5%\u00b13d",
      "Duty": "1% ~ 99%,   \u00b10.5%\u00b13d",
      "Jaw Diameter": "52mm",
      "Storage Temperature & Humidity": "-20oC ~ 60oc,  <80%RH",
      "Operating Temperature & Humidity": "0oC ~ 40oc,  <70%RH",
      "Battery": "1.5V x 2 AA",
      "AC Voltage": "400mV/4/40/400/700V,  \u00b11.5%\u00b15d",
      "DC Voltage": "400mV/4/40/400/1000V,  \u00b11%\u00b13d"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-lx-1330a-digital-lux-meter",
    "name": "Metrix+ LX 1330A Digital Lux Meter",
    "category": "environmental-testers",
    "subCategory": "Digital Lux Meter",
    "image": "https://www.metrixinstrument.in/products/large/37_57.jpg",
    "shortDesc": "360\u00b0 rotatable head sensor Lux Meter with measuring range upto 2L lux.",
    "features": [
      "3 Measuring Ranges: 0-2000/2000-19990/20000- 100000",
      "Repeatability: + 2%",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "LX 1330A+",
      "Display": "4-digit LCD with 9999 max count, automatic switching of ranges",
      "Power & Supply": "3 x 1.5V AAA battery",
      "Accuracy": "0 ~ 9999 lux : \u00b1 (4%rdg + 8dgts), >= 10,000 lux : \u00b1 (5%rdg + 10dgts)",
      "Resolution": "0 ~ 9999 lux : 1 lux, 10,000 ~ 99,990 : 10lux, 1,00,000 ~ 1,99,990 : 100lux",
      "Sampling Time": "0.5 s",
      "Measuring Range": "0 ~ 1,99,990 lux (1 FC = 10.76 lux)"
    },
    "catalogueUrl": null,
    "featured": true
  },
  {
    "id": "metrix-ag-900",
    "name": "Metrix AG 900",
    "category": "ndt-instruments",
    "subCategory": "Misc",
    "image": "https://marketplace.shakedeal.com/images/detailed/418/SDMTP0009500_wdie-gg.png",
    "shortDesc": "Warranty: 6 Months",
    "features": [
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "AG_900",
      "Display": "LCD Backlight",
      "Power & Supply": "9V Battery",
      "Resolution": "0.1"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-sl-4001-digital-sound-level-meter",
    "name": "Metrix+ Sl 4001 Digital Sound Level Meter",
    "category": "environmental-testers",
    "subCategory": "Digital Sound Level Meter",
    "image": null,
    "shortDesc": "Digital Sound Level meter with A & C weightings, upto 135dB measuring range and analog bar graph.",
    "features": [
      "Linearity Range: 50 DB",
      "Low Battery Indication",
      "Over Range Indication",
      "Measuring Level Selection",
      "Max. Hold Function",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "SL 4001",
      "Digital display": "4-digit, resolution 0.1dB, sampling rate 2 times/sec",
      "Bar Graph Display": "Each analog bar represents 1dB, sampling rate 20times/sec",
      "Power & Supply": "3 x 1.5V AAA battery",
      "Accuracy": "\u00b11.5dB(sound pressure std, 94dB @ 1KHz), +1.5dB(sound pressure std, 94dB @ 8KHz)",
      "Measuring Range": "35 ~ 135dB"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-fh-2-infrared-thermometer-temperature-gun",
    "name": "Metrix+ FH 2 Infrared Thermometer (Temperature Gun)",
    "category": "surveying-equipments",
    "subCategory": "Infrared Thermometers",
    "image": "https://www.metrixinstrument.in/products/large/9_25.png",
    "shortDesc": "Contactless Infrared Thermometer to measure elevated skin temperatures with simple operation",
    "features": [
      "Non-contact forehead temperature measurement.",
      "Backlight display .",
      "Data hold.",
      "\u00b0C / \u00b0F convertible.",
      "Auto power off.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "FH 2",
      "Power & Supply": "9V 6F22",
      "Accessories": "Main unit, Battery, Operational Manual",
      "Accuracy": "< \u00b10.3\u00b0C / 0.5\u00b0F",
      "Resolution": "0.1\u00b0C / 0.1 \u00b0F",
      "Storage Temperature & Humidity": "-20 ~ 60oC ,  < 85% RH",
      "Tetst Distance": "5 ~ 15cm",
      "Ambient operating range": "10 ~ 40oC , < 85% RH"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/fh-2_9_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-725a-ac-dc-digital-clamp-meter",
    "name": "Metrix+ 725A+ AC/DC Digital Clamp Meter",
    "category": "electrical-instruments",
    "subCategory": "Digital Clamp Meter",
    "image": null,
    "shortDesc": "600A Digital True RMS AC/DC Clamp Meter with backlight and auto & manual ranging",
    "features": [
      "AC/DC V, AC/DC A",
      "Continuity, Diode",
      "Data Hold, Auto Power Off",
      "Data Hold, Auto Power Off",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "725A",
      "LCD Display": "5999 count, Backlight Display , 24.3 x 34.6mm",
      "Range": "Manual + Auto",
      "AC Ampere": "60/600A   \u00b1(2.5%  + 8)",
      "DC Ampere": "60/600A   \u00b1(2.0%  + 10)",
      "Resistance": "600/6k/60k/600k   \u00b1 (0.8% + 3), 6M/60M\u03a9   \u00b1 (1.2% + 3)",
      "Frequency Range": "10kHz ~ 100kHz   \u00b1 (0.3% + 5)",
      "Duty": "10 ~ 90%   \u00b1 (0.5% + 3)",
      "Jaw Diameter": "28mm",
      "Battery": "AAA 1.5V x 2",
      "AC Voltage": "6/60V   + (1.2% + 5), 600V   \u00b1 (1.5% + 5)",
      "DC Voltage": "6/60V   + (0.8% + 5), 600V   \u00b1 (1.0% + 5)"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-ht-9a-digital-thermo-humidty-meter",
    "name": "Metrix+ HT 9A Digital Thermo-Humidty Meter",
    "category": "environmental-testers",
    "subCategory": "Temperature & Humidity Meters",
    "image": null,
    "shortDesc": "Temperature and Humidity Meter with dew point temperature pickup",
    "features": [
      "Data Logger Usb Interface",
      "Dew Point Temperature Pick Up",
      "Wide Measuring Range & High Resolution",
      "Digital Display Gives Exact Reading With No Guessing Or Errors",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "HT 9A",
      "Sampling Rate": "1 time/second",
      "Power & Supply": "1 x 9V(6F22) battery"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-avm-03-digital-anemometer",
    "name": "Metrix+ AVM 03 Digital Anemometer",
    "category": "environmental-testers",
    "subCategory": "Digital Anemometer",
    "image": "https://www.metrixinstrument.in/products/small/40_60.jpg",
    "shortDesc": "Separate sensor Digital Anemometer to measure wind speed upto 30m/s and air temperature",
    "features": [
      "Measurement Units: M/S, Km/H, Ft/Min, Knots, Deg C, Deg F",
      "Built In Temperature Measurement",
      "Resistance Sensor For Fast Temp. Response Time",
      "Low-Friction Ball-Bearing Design Allows Free Vane Movement",
      "A Sensitive Balanced Vane Wheel Rotates Freely In",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "AVM 03",
      "Display": "10mm 4-digits LCD",
      "Power & Supply": "1 x 9V 6F22 battery",
      "Operating conditions": "0 ~ 50\u00b0C; Humidity < 85%RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-dm-60-digital-distance-meter",
    "name": "Metrix+ DM 60 Digital Distance Meter",
    "category": "surveying-equipments",
    "subCategory": "Laser Distance Meters",
    "image": "https://www.metrixinstrument.in/products/small/46_66.jpg",
    "shortDesc": "60m Laser Distance Meter with area/volume calculations, bi axis spirit level, data storage and clear OLED display",
    "features": [
      "Leser Class: 2 Class",
      "Data Store: 30 Groups",
      "Simple Operation",
      "Area/Volume Measurement Function",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "DM 60",
      "Accuracy": "\u00b12.0mm",
      "Measuring Range": "0.05 ~ 60m",
      "Measuring Units": "Distance : m, ft, in, Area : m2, ft2, Volume : m3, ft3",
      "Single Measurement Time": "0.25s",
      "Laser Type": "620 \u2013 690nm,  Class II, <1mW",
      "Storage Temperature & Humidity": "-20 to 65\u2103",
      "Operating Temperature & Humidity": "0 to 40\u2103",
      "Battery": "2 x AAA 1.5V ; >5000 times working time(fully charged)"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-ht-9-digital-thermo-humidty-meter",
    "name": "Metrix+ HT 9 Digital Thermo-Humidty Meter",
    "category": "environmental-testers",
    "subCategory": "Temperature & Humidity Meters",
    "image": "https://4.imimg.com/data4/AR/AK/MY-4927770/humidity-500x500.jpg",
    "shortDesc": "Temperature and Humidity meter with wet bulb temperature measurement",
    "features": [
      "Wide Measuring Range & High Resolution",
      "The Last Values I Max. Values I Min. Values Of Both Humidity And Temperature Will Be Automatically Stored In Memory And Can Be Displayed By Turn",
      "Data Logger Usb Interface Mod: Ht 9A",
      "Dew Point Temperature Pick Up For Mod: Ht 9A",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "HT9",
      "Sampling Rate": "0.4 seconds",
      "Power & Supply": "4 x 1.5V AAA(UM-4) batteries"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-sl-4005-digital-sound-level-meter",
    "name": "Metrix+ Sl 4005 Digital Sound Level Meter",
    "category": "environmental-testers",
    "subCategory": "Digital Sound Level Meter",
    "image": "https://www.metrixinstrument.in/products/small/55_79.jpg",
    "shortDesc": "Digital Sound Level meter with A, C & F weightings, upto 130dB measuring range and built in calibration mode.",
    "features": [
      "This Instrument Is Compatible With Several Standards Of Gb/T 3785,Iec 651 Type 2,Ansis 1.4 Type 2. It Is Widely Used To Test The Sound Level Of Environment, Mechanic, Vehicle, Ship And Other Noise. Fit For Industry Environment Protecting, Working, Sanitation, Teaching Search And Other Departments And Aircraft Noise",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "SL 4005",
      "Calibration": "Built in 94dB at 1kHz(sinusoidal)",
      "Alarm value set": "30 ~ 130dB",
      "Power & Supply": "1.5V AAA batteries",
      "Accuracy": "\u00b11dB",
      "Resolution": "0.1dB",
      "Measuring Range": "LP : 30 ~ 130dBA, 35 ~ 130dBC, 35 ~ 130dBF; Leq : 30 ~ 130dB; LN : 0 - 100%",
      "Frequency Range": "20 Hz ~ 12.5 kHz"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-tm-4005-digital-tachometer",
    "name": "Metrix+ TM 4005 Digital Tachometer",
    "category": "surveying-equipments",
    "subCategory": "Tachometers",
    "image": "https://www.metrixinstrument.in/products/small/60_84.jpg",
    "shortDesc": "Combine, contact type and non-contact photo tachometer with measuring range upto 99999 RPM",
    "features": [
      "Contact: 2.5-19999 Rpm",
      "Linear Rolling Speed: 0.05-1999.9 M/Min",
      "Surface Speed: 0.2-6560 Ft/Min",
      "Sampling Frequency: 0.8 Sec",
      "Operating Temperature: 0-50 Deg C",
      "Storing Temperature: -20-60 Deg C",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "TM 4005",
      "Type": "Photo - Contact Tachometer",
      "Range": "2.5 ~ 99,999rpm  Photo, 2.5-19,999rpm  Contact, 0.05 ~ 1999.9m/min, 0.2 ~ 6560Ft/min",
      "Power & Supply": "AA x 4 battery",
      "Accuracy": "+ (0.05% + 1word)",
      "Resolution": "0.1rpm, 1rpm  Photo, 0.1rpm, 1rpm  Contact, 0.01m/min, 0.1m/min, 1Ft/min",
      "Storage Temperature & Humidity": "-20 ~ 60\u00b0C",
      "Operating Temperature & Humidity": "0 ~ 50\u00b0"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-4250t-ac-dc-digital-clamp-meter",
    "name": "Metrix+ 4250T AC/DC Digital Clamp Meter",
    "category": "electrical-instruments",
    "subCategory": "Digital Clamp Meter",
    "image": "https://www.metrixinstrument.in/products/large/7_153.jpg",
    "shortDesc": "1000A Digital True RMS AC/DC Clamp Meter with 52mm sturdy jaw, inrush current and auto ranging",
    "features": [
      "Jaw Diameter: 52 Mm",
      "Double Insulation Protection Class Ii",
      "Overload Protection",
      "Auto Negative Polarity Indication",
      "Low Battery Indication",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "4250T",
      "LCD Display": "3 3/4 Digit 3999 count",
      "Range": "Auto Range",
      "Temperature": "-50oC ~ 300oc,   \u00b11%\u00b15d, 301oC ~ 1000oc,   \u00b11.9%\u00b15d",
      "AC Ampere": "400/1000A ,   \u00b12%\u00b15d",
      "DC Ampere": "400/1000A ,   \u00b12%\u00b15d",
      "Resistance": "400/4k/40k/400k/4m\u03a9,    \u00b11%\u00b13d, 40m\u03a9,   \u00b11.5%\u00b15d",
      "Frequency Range": "100Hz/1k/10k/100k/1M/10M/40MHz,    \u00b10.5%\u00b13d",
      "Duty": "1% ~ 99%,   \u00b10.5%\u00b13d",
      "Jaw Diameter": "52mm",
      "Storage Temperature & Humidity": "-20oC ~ 60oc,  <80%RH",
      "Operating Temperature & Humidity": "0oC ~ 40oc,  <70%RH",
      "Battery": "9V",
      "AC Voltage": "400mV/4/40/400/700V,  \u00b11.5%\u00b15d",
      "DC Voltage": "400mV/4/40/400/1000V,  \u00b11%\u00b13d"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-gmm-7002a-soil-moisture-meter",
    "name": "Metrix+ GMM 7002A Soil Moisture Meter",
    "category": "ndt-instruments",
    "subCategory": "Moisture Meter",
    "image": "https://www.metrixinstrument.in/products/large/69_93.jpg",
    "shortDesc": "Economical grain moisture meter with measuring range upto 30% and temperature measurement as well",
    "features": [
      "It can measure temperature of grains.",
      "4 species of grain varieties.",
      "Data hold, low battery indication and automatic power off.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "GMM 7002A",
      "Display": "Backlit LCD",
      "Range": "Moisture : 5 ~ 30%, Temperature : -10 ~ 60oC",
      "Power & Supply": "3 x 1.5V AAA (UM \u2013 4) batteries",
      "Resolution": "50.00%",
      "Operating conditions": "Temperature 0 ~ 40oC; Humidity <85% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-mm-wa-digital-moisture-meter",
    "name": "Metrix+ MM-WA Digital Moisture Meter",
    "category": "ndt-instruments",
    "subCategory": "Moisture Meter",
    "image": "https://www.metrixinstrument.in/products/small/64_88.jpg",
    "shortDesc": "Digital Moisture Meter for wood and wood fibre construction, with inbuilt probe and separate long pin probe",
    "features": [
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "MM-WA",
      "Temperature": "-10 ~ 60\u00b0C; +1\u00b0C; 0.1\u00b0C",
      "Humidity": "20 ~ 95% RH; +5% RH; 0.1% RH",
      "Measuring Range": "Type 1 : 2 ~ 40%;, Type 2 : 2 ~ 50%, Type 3 : 2 ~ 60%, Type 4 : 2 ~ 70%"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-2003-digital-clamp-meter",
    "name": "Metrix+ 2003 Digital Clamp Meter",
    "category": "electrical-instruments",
    "subCategory": "Digital Clamp Meter",
    "image": null,
    "shortDesc": "2000A AC/DC Digital Clamp Meter with panel calibrate and sturdy 52mm jaw",
    "features": [
      "Panel Calibrate Clamp Meter",
      "PH, DH, MAX and Backlight",
      "Over Load Protection.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "2003",
      "AC Ampere": "200/2000A    \u00b1 1.9%\u00b15",
      "Resistance": "2k\u03a9    \u00b1 0.8%\u00b12",
      "Jaw Diameter": "52mm",
      "Battery": "6F22 or NEDA 9V x 1",
      "AC Voltage": "700V \u00b1 1%\u00b15",
      "DC Voltage": "1000V    \u00b1 0.5%\u00b12"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-lx-1336a-digital-lux-meter",
    "name": "Metrix+ LX 1336A Digital Lux Meter",
    "category": "environmental-testers",
    "subCategory": "Digital Lux Meter",
    "image": "https://www.metrixinstrument.in/products/large/38_58.jpg",
    "shortDesc": "Flexible sensor Lux Meter with measuring range upto 5L lux",
    "features": [
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "LX_1336A",
      "Display": "4-digit LCD",
      "Power & Supply": "4 x 1.5V AAA battery",
      "Accuracy": "\u00b1 (5%n + 5%d)",
      "Resolution": "0 ~ 4999 lux : 1 lux, 5,000 ~ 49,999 : 10lux, 50,000 ~ 5,00,000 : 100lux, 0 ~ 20,000 FC : 1 FC",
      "Measuring Range": "0 ~ 5,00,000 lux",
      "Operating conditions": "Temperature : 0 ~ 50oC (<80% RH)"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-det-1501-digital-earth-resistance-tester",
    "name": "Metrix+ DET 1501 Digital Earth Resistance Tester",
    "category": "electrical-instruments",
    "subCategory": "Digital Earth Resistance Tester",
    "image": "https://www.metrixinstrument.in/products/small/56_80.jpg",
    "shortDesc": "Basic Earth Resistance Tester upto 2000\u03a9",
    "features": [
      "An Earth Resistance Tester Is Used To Measure Grounding Resistance For Grounding Pole Connected To Some Conductive Part Of Facility In The Power Distribution Unit Of Power Circuit Or Building Structure, For Working Grounding, For Safeguard Grounding. The Tester Used For The Furnish Power, Transformer Station, Power Distribution Lines, In-House Wiring System, Electrical Appliances Etc",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "DET 1501",
      "Measuring method": "2/3 wire test",
      "Earth Resistance": "0 ~ 2000\u03a9",
      "Earth voltage": "600V +2%rdg + 5dgt",
      "Power & Supply": "6 x 1.5V batteries"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-mm-w-digital-moisture-meter",
    "name": "Metrix+ MM-W Digital Moisture Meter",
    "category": "ndt-instruments",
    "subCategory": "Moisture Meter",
    "image": "https://www.metrixinstrument.in/products/small/65_89.jpg",
    "shortDesc": "General purpose digital moisture meter with wide measuring range upto 80%",
    "features": [
      "Calibration: Automatic",
      "Battery Indicator: Low Battery Indicator",
      "Data Output: Usb, Rs-232, Bluetooth",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "MM-W",
      "Display": "10mm LCD",
      "LED Indicator": "Green LED represents a safe, air-dry state, Yellow LED represents a borderline state, Red LED represents a damp state",
      "Calibration": "Automatic",
      "Range": "0 ~ 80%",
      "Power & Supply": "4 x 1.5V AAA (UM \u2013 4) batteries",
      "Accuracy": "+(0.5%n + 0.5)",
      "Operating Temperature & Humidity": "0\u2103-40\u2103, 20% ~ 95%RH",
      "Battery": "2*1.5V AAA Battery",
      "Operating conditions": "Temperature 0 ~ 50oC, Humidity <90% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-mm-s-digital-moisture-meter",
    "name": "Metrix+ MM-S Digital Moisture Meter",
    "category": "ndt-instruments",
    "subCategory": "Moisture Meter",
    "image": "https://www.metrixinstrument.in/products/small/66_90.jpg",
    "shortDesc": "Search type moisture measurement which is non-intrusive and wide measuring range upto 80%",
    "features": [
      "Measurement Codes: 20",
      "Two Presentations, Digital Display And Colour Coded Led Indication",
      "Optional Use Usb/Rs-232 Data Output To Connect With Pc",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "MOISTURE MEASURER-S (MM-S)",
      "Display": "LCD",
      "LED Indicator": "Green LED represents a safe, air-dry state, Yellow LED represents a borderline state, Red LED represents a damp state",
      "Sensor Type": "MM-S : Search (non-contact), MM-S+ : Search (non-contact) & pin type (contact)",
      "Range": "0 ~ 80%",
      "Power & Supply": "4 x 1.5V AAA (UM \u2013 4) batteries",
      "Accuracy": "+(0.5%n + 0.5)",
      "Resolution": "0.1",
      "Operating conditions": "Temperature 0 ~ 50oC, Humidity <90% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-mm-s-digital-moisture-meter-2",
    "name": "Metrix+ MM-S+ Digital Moisture Meter",
    "category": "ndt-instruments",
    "subCategory": "Moisture Meter",
    "image": "https://www.metrixinstrument.in/products/small/67_91.jpg",
    "shortDesc": "Search type(non-intrusive) and pin type combined moisture measurement and wide measuring range upto 80%",
    "features": [
      "Measurement Codes: 10+20",
      "Two Measuring Principles: Pin Type & Search Type",
      "Two Presentations, Digital Display And Colour Coded Led Indication",
      "Optional Use Usb/Rs-232 Data Output To Connect With Pc",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "MM-S+",
      "Display": "LCD",
      "LED Indicator": "Green LED represents a safe, air-dry state, Yellow LED represents a borderline state, Red LED represents a damp state",
      "Sensor Type": "MM-S : Search (non-contact), MM-S+ : Search (non-contact) & pin type (contact)",
      "Range": "0 ~ 80%",
      "Power & Supply": "4 x 1.5V AAA (UM \u2013 4) batteries",
      "Accuracy": "+(0.5%n + 0.5)",
      "Resolution": "0.1",
      "Operating conditions": "Temperature 0 ~ 50oC, Humidity <90% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-mm-g-digital-moisture-meter",
    "name": "Metrix+ MM-G Digital Moisture Meter",
    "category": "ndt-instruments",
    "subCategory": "Moisture Meter",
    "image": "https://www.metrixinstrument.in/products/small/70_94.jpg",
    "shortDesc": "Digital grain moisture meter with pin type measurement to measure 36 species of grains with range upto 30%",
    "features": [
      "Grains: 20 Species",
      "Calibration: Automatic",
      "Battery Indicator: Low Battery Indicator",
      "Data Output: Usb, Rs-232, Bluetooth",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "MM-G",
      "Display": "4 digit backlit LCD",
      "LED Indicator": "Green LED represents a safe, air-dry state, Yellow LED represents a borderline state, Red LED represents a damp state",
      "Range": "6 ~ 30%",
      "Power & Supply": "4 x 1.5V AAA (UM \u2013 4) batteries",
      "Accuracy": "\u00b1(0.5%n + 1)",
      "Resolution": "0.1",
      "Operating conditions": "Temperature 0 ~ 50oC; Humidity <90% R"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-det-1503-digital-earth-resistance-tester",
    "name": "Metrix+ DET 1503 Digital Earth Resistance Tester",
    "category": "electrical-instruments",
    "subCategory": "Digital Earth Resistance Tester",
    "image": "https://www.metrixinstrument.in/products/small/57_81.jpg",
    "shortDesc": "Versatile Earth Resistance Tester upto 2000\u03a9 with large backlit display and timer function.",
    "features": [
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "OET 1503",
      "Earth Resistance": "20/200/2000\u03a9",
      "Earth voltage": "0~200V +2%rdg + 5dgt",
      "Earth resistance measuring time": "10 sec ~ 10min",
      "Power & Supply": "6 x 1.5V \"AA\" batteries",
      "Resolution": "0.01\u03a9(20\u03a9), 0.1\u03a9(200\u03a9), 1\u03a9(2000\u03a9); 0.1V",
      "Response Time": "Earth ressitance ~5 sec, Earth voltage ~2 sec",
      "Operating conditions": "0 ~ 40\u00b0C, RH > 85%",
      "Storage conditions": "-20 ~ 60\u00b0C, RH > 75%"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-dt-2239-digital-stroboscope",
    "name": "Metrix+ DT 2239 Digital Stroboscope",
    "category": "surveying-equipments",
    "subCategory": "Digital Stroboscope",
    "image": "https://www.metrixinstrument.in/products/small/50_74.jpg",
    "shortDesc": "Digital Stroboscope with fine tuning and measuring range upto 12,000 FPM",
    "features": [
      "Wide Measuring Range And High Resolution",
      "Digital Display Gives Exact Reading With No Guessing Or Errors",
      "Automatic Stop Flashing To Save Electricity And Improve Flash Tube Lifetime",
      "Internal/External Triggering Fast Conversion; X2 And /2 For Fast Adjustment",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "DT 2239",
      "Display": "10mm 5-digits LCD",
      "Power & Supply": "AC 220V",
      "Accuracy": "\u00b1(0.05%n + 1d)",
      "Resolution": "0.1FPM(50 ~ 999.9FPM), 1FPM(over 1000FPM)",
      "Sampling Time": "3 sec",
      "External Trigger Level": "3 ~ 24V  with x2, /2 for fast check",
      "Measuring Range": "50 ~ 12,000FPM",
      "Operating conditions": "Temperature : 0 ~ 40\u00b0C, Humidity : <85% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-mm-soil-moisture-meter",
    "name": "Metrix+ MM Soil Moisture Meter",
    "category": "ndt-instruments",
    "subCategory": "Moisture Meter",
    "image": "https://www.metrixinstrument.in/products/large/68_92.jpg",
    "shortDesc": "Soil moisture measurement meter with measuring range upto 80%",
    "features": [
      "Wide measuring range and high resolution",
      "Statistics display on screen",
      "Data storage and recall",
      "LED indication for moisture content",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "MM Soil",
      "Display": "LCD",
      "LED Indicator": "Green LED represents a safe, air-dry state, Yellow LED represents a borderline state, Red LED represents a damp state",
      "Statistics": "Last Value/ Mean Value/ Max Value/ Min Value/ Number of readings",
      "Range": "0 ~ 80%",
      "Power & Supply": "4 x 1.5V AAA (UM \u2013 4) batteries",
      "Accuracy": "+(0.5%n + 1)",
      "Resolution": "0.1",
      "Operating conditions": "Temperature 0 ~ 50oC, Humidity <90% RH"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/mm-soil_68_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-dt-2259a-digital-stroboscope",
    "name": "Metrix+ DT 2259A Digital Stroboscope",
    "category": "surveying-equipments",
    "subCategory": "Digital Stroboscope",
    "image": "https://www.metrixinstrument.in/products/small/51_75.jpg",
    "shortDesc": "Digital Stroboscope with fine tuning and measuring range upto 40,000 FPM",
    "features": [
      "Wide Measuring Range And High Resolution",
      "Digital Display Gives Exact Reading With No Guessing Or Errors",
      "Automatic Stop Flashing To Save Electricity And Improve Flash Tube Lifetime",
      "Internal/External Triggering Fast Conversion; X2 And /2 For Fast Adjustment",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "OT 2239",
      "Display": "10mm 5-digits LCD",
      "Power & Supply": "AC 220V",
      "Accuracy": "\u00b1(0.05%n + 1d)",
      "Resolution": "0.1FPM(50 ~ 999.9FPM), 1FPM(over 1000FPM)",
      "Sampling Time": "3 sec",
      "External Trigger Level": "3 ~ 24V  with x2, /2 for fast check",
      "Measurement Range": "50 ~ 40,000FPM",
      "Operating conditions": "Temperature : 0 ~ 40\u00b0C, Humidity : <85% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-dm-620-digital-multimeter",
    "name": "Metrix+ DM 620 Digital Multimeter",
    "category": "electrical-instruments",
    "subCategory": "Digital Multimeter",
    "image": "https://www.metrixinstrument.in/products/large/34_54.jpg",
    "shortDesc": "50000 Count Programmable Data logger Digital Multimeter with True RMS measurement, multi display with analog bar graph, data storage and 1000C AC/DC V measurement range",
    "features": [
      "50000 count data logger",
      "True RMS",
      "Multi display and analog bar graph",
      "Data storage",
      "Auto calibration and full auto ranging",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "DM_620"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/dm-620_34_catalogue.pdf",
    "featured": true
  },
  {
    "id": "metrix-mm-gc-digital-moisture-meter",
    "name": "Metrix+ MM-GC Digital Moisture Meter",
    "category": "ndt-instruments",
    "subCategory": "Moisture Meter",
    "image": "https://www.metrixinstrument.in/products/small/71_95.jpg",
    "shortDesc": "Digital Grain moisture meter with cup type accurate measurement to measure 36 species with range upto 50%",
    "features": [
      "Grains: 22 Species",
      "Calibration: Automatic",
      "Battery Indicator: Low Battery Indicator",
      "Data Output: Usb, Rs-232, Bluetooth",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "MM-GC",
      "Display": "4 digit backlit LCD",
      "LED Indicator": "Green LED represents a safe, air-dry state, Yellow LED represents a borderline state, Red LED represents a damp state",
      "Statistics": "Last Value/ Mean Value/ Max Value/ Min Value/ Number of readings",
      "Power & Supply": "4 x 1.5V AAA (UM \u2013 4) batteries",
      "Accuracy": "\u00b1(0.5%n + 1)",
      "Resolution": "0.1",
      "Operating conditions": "Temperature 0 ~ 50oC; Humidity <90% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-vm-8200p-digital-vibration-meter",
    "name": "Metrix+ VM 8200P Digital Vibration Meter",
    "category": "surveying-equipments",
    "subCategory": "Vibration Meters",
    "image": "https://www.metrixinstrument.in/products/small/72_96.jpg",
    "shortDesc": "Pen type probe vibration meter with simple operation",
    "features": [
      "Measuring Principle: Piezoelectric Ceramic Accelerometer",
      "Acceleration Range: 0.1-199.9 M/S2",
      "Velocity Range: 0.1-199.9 M/S",
      "Displacement Range: 0.001-1.999 Mm",
      "Acceleration Frequency Range: 10 Hz-1 Khz (Lo)/1 Khz-15 Khz (Hi)",
      "Velocity Frequency Range: 10 Hz-1 Khz",
      "Velocity Frequency Range: 10 Hz-1 Khz",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "VM 8200P",
      "Display": "4-digit backlit LCD",
      "Transducer": "Piezo electric ceramic accelerometer(shear type)",
      "Velocity": "0.1 ~ 199.9 m/s",
      "Acceleration": "0.1 ~ 199.9 m/s2",
      "Power & Supply": "1 x 9V battery",
      "Accuracy": "+5% of reading + 2d",
      "Operating conditions": "Temperature : 0-40oC ; Humidity : 30 ~ 90% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-gls-09-digital-gloss-meter",
    "name": "Metrix+ GLS 09 Digital Gloss Meter",
    "category": "ndt-instruments",
    "subCategory": "Gloss Meter",
    "image": "https://www.metrixinstrument.in/products/small/42_62.jpg",
    "shortDesc": "60\u00b0 Gloss meter with measuring range upto 200GU.",
    "features": [
      "Gloss Units: Gu",
      "Repeatability: 0.5 Gu",
      "Measuring Area: 7\u00d714 Mm (Ellipse)",
      "Data Memorized: 254 Groups",
      "Accurate Measurement, Good Repetitiveness",
      "Small In Size",
      "Auto Calibration",
      "Intelligent Design, Rapid Measurement",
      "Intelligent Design, Rapid Measurement",
      "Intelligent Design, Rapid Measurement",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "GLS 09",
      "Display": "Backlit LCD",
      "Power & Supply": "3.7V Lithium Ion rechargeable battery",
      "Accuracy": "+1.0 GU",
      "Resolution": "0.1",
      "Measuring Range": "0.1 ~ 200 Gloss Units",
      "Operating conditions": "Temperature : 0 ~ 40oC ; Humidity : <85% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-mt-16-infrared-thermometer-temperature-gun",
    "name": "Metrix+ MT 16 Infrared Thermometer (Temperature Gun)",
    "category": "surveying-equipments",
    "subCategory": "Infrared Thermometers",
    "image": "https://www.metrixinstrument.in/products/large/13_32.jpg",
    "shortDesc": "Rugged Infrared Thermometer to measure upto 1650\u00b0C with 50:1 DS ratio and data storage",
    "features": [
      "Data Storage",
      "Backlight Display",
      "Adjustable Emissivity",
      "50:1 Distance to Spot Ratio",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "MT 16",
      "Backlight Display": "Backlight Display",
      "Power & Supply": "9V Battery",
      "Accessories": "Battery, Operational Manual, Carry case ; Gift Box Packing",
      "Temperature": "-18oC ~ 1650oC (0\u00b0F ~ 3002\u00b0F",
      "Resolution": "0.1oC or 0.1 oF (<1000 oC), 1 oC or 1 oF (>=1000 oC)",
      "Measuring Range": "32.0 ~ 42.9\u00b0C ( 89.6oF ~ 109.22oF )",
      "Response Time": "500 ms",
      "Data Storage": "100 units of memory",
      "Spectral Response": "8-14 um",
      "Emissivity": "0.10 ~ 1.00 Adjustable"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/mt-16_13_catalogue.pdf",
    "featured": true
  },
  {
    "id": "metrix-rht-a-hardness-tester",
    "name": "Metrix+ RHT A Hardness Tester",
    "category": "ndt-instruments",
    "subCategory": "Hardness Tester",
    "image": "https://www.metrixinstrument.in/products/large/78_104.jpg",
    "shortDesc": "Shore A Rubber Hardness Tester with backlit display.",
    "features": [
      "Integrated probe and light weight design.",
      "Average value function and max data hold.",
      "Automatic power-off and low battery indication.",
      "Metric to imperial conversion.",
      "Inbuilt software calibration.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "RHT A",
      "Display": "Backlit LCD",
      "Accuracy": "<+1H",
      "Resolution": "0.1H",
      "Measuring Range": "0 \u2013 100 / 10 ~ 90H"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/rht-a_78_catalogue.pdf",
    "featured": true
  },
  {
    "id": "metrix-vm-8200-digital-vibration-meter",
    "name": "Metrix+ VM 8200+ Digital Vibration Meter",
    "category": "surveying-equipments",
    "subCategory": "Vibration Meters",
    "image": null,
    "shortDesc": "Digital Vibration Meter with measuring range upto 200mm/s and wide frequency range in acceleration mode",
    "features": [
      "Transducer: Piezo Electric Accelerometer",
      "Acceleration(Peak Value): 0.1-200.0 M/S2, 0.3-656.2 Ft/S2",
      "Velocity (True-Rms): 0.01-20.00 Cm/S",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "VM 8200+"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-rht-d-hardness-tester",
    "name": "Metrix+ RHT D Hardness Tester",
    "category": "ndt-instruments",
    "subCategory": "Hardness Tester",
    "image": "https://www.metrixinstrument.in/products/large/79_105.jpg",
    "shortDesc": "Shore D Rubber Hardness Tester with backlit display",
    "features": [
      "Integrated probe and light weight design.",
      "Average value function and max data hold.",
      "Automatic power-off and low battery indication.",
      "Metric to imperial conversion.",
      "Inbuilt software calibration.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "RHT D",
      "Display": "Backlit LCD",
      "Power & Supply": "2 x 1.5V AAA (UM-4) Battery",
      "Accuracy": "<+1H",
      "Resolution": "0.1H",
      "Measuring Range": "0 \u2013 100 / 10 ~ 90H"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/rht-d_79_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-utg-27-digital-ultrasonic-thickness-gauge",
    "name": "Metrix+ UTG 27 Digital Ultrasonic Thickness Gauge",
    "category": "ndt-instruments",
    "subCategory": "Ultrasonic Thickness Gauge",
    "image": "https://www.metrixinstrument.in/products/small/27_47.jpg",
    "shortDesc": "Digital Ultrasonic Thickness Meter to measure 0.75 ~ 400mm with sturdy metal body and better resolution",
    "features": [
      "Sound Velocity: 500-900 M/S",
      "Used The Exclusive Micro-Computer Lsi Circuit And Crystal Time Base To Offer High Accuracy Measurement",
      "High Power Of Emission And Broad Band Of Receiving Sensitivity, The Gauge Can Match",
      "Probes Of Different Frequencies",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "UTG 27",
      "Display": "4 digit Backlit LCD",
      "Power & Supply": "1.5V x 2 AA batteries",
      "Accuracy": "\u00b10.5%n + 0.1mm",
      "Resolution": "0.1mm / 0.01mm switchable",
      "Measuring Range": "0.75 - 400mm (45# Steel) inch/mm switchable",
      "Operating conditions": "0 ~ 40oC, Humidity < 80%"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-gls-09m-digital-gloss-meter",
    "name": "Metrix+ GLS 09M Digital Gloss Meter",
    "category": "ndt-instruments",
    "subCategory": "Gloss Meter",
    "image": "https://www.metrixinstrument.in/products/small/43_63.jpg",
    "shortDesc": "Multi angle Digital gloss meter with measuring range uptp 200GU",
    "features": [
      "Accurate Measurement, Good Repetitiveness",
      "Small In Size, Easy To Carry, Auto Calibration",
      "Intelligent Design, Rapid Measurement",
      "Able To Store 254 Groups Of Measurements",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "GLS 09M (MULTI ANGLE)",
      "Display": "Backlit LCD",
      "Power & Supply": "3.7V Lithium Ion rechargeable battery",
      "Accuracy": "+1.0 GU",
      "Measuring Range": "0.1 ~ 200 Gloss Units",
      "Operating conditions": "Temperature : 0 ~ 40oC ; Humidity : <85% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-col-45",
    "name": "Metrix+ COL 45",
    "category": "ndt-instruments",
    "subCategory": "Misc",
    "image": "https://www.metrixinstrument.in/products/large/81_107.jpg",
    "shortDesc": "Digital color meter to measure color and color differences in six color spaces for no lighting, non-fluorescent materials.",
    "features": [
      "Six color spaces for measurement and comparison : (L*,a*,b*), L*, C*ab, hab), (Y, x, y), (X, Y, Z), (Rs, Gs, Bs) or (WI, YI, Tw).",
      "Statistics of max, min, avg and standard deviation displayed.",
      "Color difference tolerance can be set for PASS/WARN/FAIL tests.",
      "9 different color targets can be stored for comparison.",
      "User calibration function.",
      "Data storage and recall.",
      "Low battery indication and auto power off.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "COL 45",
      "Display": "Triple 4-digit LCD display",
      "Power & Supply": "4 x 1.5V AAA (UM-4) batteries",
      "Measuring Range": "L* : 5 to 100",
      "Operating conditions": "Temperature : 0 ~ 40\u00b0C, Humidity : <85% RH",
      "Storage conditions": "Temperature : -10 ~ 40\u00b0C, Humidity : <70% RH"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/col-45_81_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-coat-scope-i-digital-coating-thickness-gauge-meter",
    "name": "Metrix+ Coat Scope-I Digital Coating Thickness Gauge Meter",
    "category": "ndt-instruments",
    "subCategory": "Coating Thickness Gauge Meter",
    "image": null,
    "shortDesc": "Digital Coating Thickness Meter for ferrous and non-ferrous substrates.",
    "features": [
      "Min. Radius Work Piece: Ferrous Convex 1.5 MM/ Concave 25 MM, Non-Ferrous: Convex 3 MM / Concave 50 MM",
      "Min. Measuring Area: 6 MM",
      "MIN. SAMPLE THICKNESS: 0.3 MM",
      "Metric / Imperial: Selectable",
      "Battery Indicator: Low Battery Indicator",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "COAT SCOPE \u2013 I (INTEGRATED PROBE) J",
      "Display": "4 digits backlit LCD",
      "Minimum curvature radius": "F : 1.5mm(convex) ; 25mm(concave), NF : 3mm(convex) ; 50mm(concave)",
      "Minimum measuring area": "Diameter 6mm",
      "Minimum thickness of substrate": "0.3mm",
      "Power & Supply": "2 x 1.5V AAA(UM 4) battery",
      "Accuracy": "\u00b11-3%n or +2.5um",
      "Resolution": "0.1um(0~99.9um); 1um(over 100um)",
      "Measuring Range": "0 - 2000um (0 - 80mils)"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-mt-18-infrared-thermometer-temperature-gun",
    "name": "Metrix+ MT 18 Infrared Thermometer (Temperature Gun)",
    "category": "surveying-equipments",
    "subCategory": "Infrared Thermometers",
    "image": "https://www.metrixinstrument.in/products/large/14_33.jpg",
    "shortDesc": "Rugged Infrared Thermometer upto 1850\u00b0C with 80:1 DS ratio and data storage",
    "features": [
      "Data Storage",
      "PC Interface for Data Logging",
      "Backlight Display",
      "Adjustable Emissivity",
      "Special for metallurgy, forging, furnaces, high temperature fields, etc.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "MT 18",
      "Backlight Display": "Backlight Display",
      "Temperature": "200oC ~ 1850oC (392\u00b0F ~ 3362\u00b0F)",
      "Resolution": "0.1oC or 0.1 oF (<1000 oC), 1 oC or 1 oF (>=1000 oC)",
      "Response Time": "500 ms",
      "Spectral Response": "900-1700nm"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/mt-18_14_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-coat-scope-27-digital-coating-thickness-gauge-meter",
    "name": "Metrix+ Coat Scope 27 Digital Coating Thickness Gauge Meter",
    "category": "ndt-instruments",
    "subCategory": "Coating Thickness Gauge Meter",
    "image": null,
    "shortDesc": "Flexible probe Digital Coating Thickness Meter to measure the thickness of coatings on ferrous and non-ferrous substrates upto 2000um.",
    "features": [
      "Min. Radius Work Piece: Ferrous Convex 1.5 MM/ Concave 25 MM, Non-Ferrous: Convex 3 MM/ Concave 50 MM",
      "Min. Measuring Area: 6 Mm",
      "Min. Sample Thickness: 0.3 MM",
      "Metric / Imperial: Selectable",
      "Battery Indicator: Low Battery Indicator",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "COAT SCOPE 27",
      "Display": "4 digits backlit LCD",
      "Minimum curvature radius": "F : 1.5mm(convex) ; 25mm(concave), NF : 3mm(convex) ; 50mm(concave)",
      "Minimum measuring area": "Diameter 6mm",
      "Minimum thickness of substrate": "0.3mm",
      "Statistics": "Max, min and avg value of readings",
      "Power & Supply": "2 x 1.5V AAA(UM 4) battery",
      "Accuracy": "\u00b11-3%n or +2.5um",
      "Resolution": "0.1um(0~99.9um); 1um(over 100um)",
      "Measuring Range": "0 - 2000um (0 - 80mils)"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-vm-8200-mk-ii-digital-vibration-meter",
    "name": "Metrix+ VM 8200+Mk Ii Digital Vibration Meter",
    "category": "surveying-equipments",
    "subCategory": "Vibration Meters",
    "image": null,
    "shortDesc": "Sturdy metal body Vibration Meter with measuring range upto 400mm/s and wide frequency range in acceleration mode",
    "features": [
      "Transducer: Piezo Electric Accelerometer",
      "Acceleration(Peak Value): 0.1-400.0 M/S2, 0.3-1312 Ft/S2",
      "Velocity (True-Rms): 0.01-40.00 Cm/S, 0.000-16 Inch/S",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "VM 8200+",
      "Display": "4-digit backlit LCD",
      "Transducer": "Piezo electric accelerometer",
      "Velocity": "0.01 ~ 400.0 mm/s ; 0.000 ~ 16 inch/s",
      "Acceleration": "0.1 ~ 400.0 m/s2, 0.3 ~ 1312 ft/s2 equivalent peak",
      "Power & Supply": "1.5V x 2 AA battery",
      "Accuracy": "+5% of reading + 2d",
      "Frequency Range": "1 ~ 20kHz",
      "Operating conditions": "Temperature : 0-50oC ; Humidity : below 95% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-vb-8202a-digital-vibration-meter",
    "name": "Metrix+ VB 8202A Digital Vibration Meter",
    "category": "surveying-equipments",
    "subCategory": "Vibration Meters",
    "image": null,
    "shortDesc": "Vibration meter with measuring range upto 400mm/s and simultaneous display of displacement, velocity and acceleration values",
    "features": [
      "Analogue Output Ac Output: 0-2.0 V Peak Full Scale",
      "Individual High Quality Accelerometer For Accurate And Repeatable Measurements",
      "Wide Frequency Range (10Hz~10Khz) In Acceleration Mode",
      "Ac Output Socket For Headphones And Recording",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "VB 8202A",
      "Display": "4-digit backlit LCD",
      "Transducer": "Piezo electric accelerometer",
      "Velocity": "0.01 ~ 400.0 mm/s true RMS ; 0.000 ~ 16 inch/s",
      "Acceleration": "0.1 ~ 400.0 m/s2 equivalent peak, 0.3 ~ 1312 ft/s2, 0 ~ 40g",
      "Power & Supply": "1.5V x 2 AA(UM-3) battery",
      "Accuracy": "+5% of reading + 2d",
      "Operating conditions": "Temperature : 0-50oC ; Humidity : below 95% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-uld-30",
    "name": "Metrix+ ULD 30",
    "category": "ndt-instruments",
    "subCategory": "Misc",
    "image": "https://www.metrixinstrument.in/products/large/82_108.jpg",
    "shortDesc": "Ultrasonic Leakage Detector for fast detection of gas or air leaks by detection of ultrasonic emissions, useful in HVAC systems, steam transfers, engine seals, electrical arcing, etc.",
    "features": [
      "LED indication and audible tone.",
      "Audible sound can be identified by internal buzzer or optional external headphones.",
      "Compact size and simple operation.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "ULD_30",
      "Power & Supply": "4 x 1.5V AAA (UM-4) batteries",
      "Operating conditions": "Temperature : 0 ~ 50\u00b0C, Humidity : <= 80% RH"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/uld-30_82_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-coat-scope-27-4k-digital-coating-thickness-gauge-meter",
    "name": "Metrix+ Coat Scope 27-4K Digital Coating Thickness Gauge Meter",
    "category": "ndt-instruments",
    "subCategory": "Coating Thickness Gauge Meter",
    "image": null,
    "shortDesc": "Flexible probe Digital Coating Thickness Meter to measure the thickness of coatings on ferrous and non-ferrous substrates upto 4000um F and 3000um NF.",
    "features": [
      "Min. Radius Work Piece: Ferrous Convex 1.5 MM/ Concave 25 MM, Non-Ferrous: Convex 3 MM/ Concave 50 MM",
      "Min. Measuring Area: 6 MM",
      "Min. Sample Thickness: 0.3 MM",
      "Metric / Imperial: Selectable",
      "Battery Indicator: Low Battery Indicator",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "COAT SCOPE 27- 4K",
      "Display": "4 digits backlit LCD",
      "Minimum curvature radius": "F : 1.5mm(convex) ; 25mm(concave), NF : 3mm(convex) ; 50mm(concave)",
      "Minimum measuring area": "Diameter 6mm",
      "Minimum thickness of substrate": "0.3mm",
      "Calibration": "Max, min and avg value of readings",
      "Power & Supply": "2 x 1.5V AAA(UM 4) battery",
      "Accuracy": "\u00b11-3%n or +2.5um",
      "Resolution": "0.1um(0~99.9um); 1um(over 100um)",
      "Measuring Range": "F : 0 - 4000um (0 - 160mils), NF : 0 - 3000um (0 - 120mils)"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-coat-scope-27-5k-digital-coating-thickness-gauge-meter",
    "name": "Metrix+ Coat Scope 27-5K Digital Coating Thickness Gauge Meter",
    "category": "ndt-instruments",
    "subCategory": "Coating Thickness Gauge Meter",
    "image": null,
    "shortDesc": "Flexible probe Digital Coating Thickness Meter to measure the thickness of coatings on ferrous and non-ferrous substrates upto 5000um F and 3000um NF.",
    "features": [
      "Min. Radius Work Piece: Ferrous Convex 1.5 MM/ Concave 25 MM, Non-Ferrous: Convex 3 MM/ Concave 50 MM",
      "Min. Measuring Area: 6 Mm",
      "Min. Sample Thickness: 0.3 MM",
      "Metric / Imperial: Selectable",
      "Battery Indicator: Low Battery Indicator",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "COAT SCOPE 27 \u2013 SK",
      "Display": "4 digits backlit LCD",
      "Minimum curvature radius": "F : 1.5mm(convex) ; 25mm(concave), NF : 3mm(convex) ; 50mm(concave)",
      "Minimum measuring area": "Diameter 6mm",
      "Minimum thickness of substrate": "0.3mm",
      "Statistics": "Max, min and avg value of readings",
      "Power & Supply": "2 x 1.5V AAA(UM 4) battery",
      "Accuracy": "\u00b11-3%n or +2.5um",
      "Resolution": "0.1um(0~99.9um); 1um(over 100um)",
      "Measuring Range": "F : 0 - 5000um (0 - 160mils), NF : 0 - 3000um (0 - 120mils)"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-microglass-digital-gloss-meter",
    "name": "Metrix+ Microglass Digital Gloss Meter",
    "category": "ndt-instruments",
    "subCategory": "Gloss Meter",
    "image": null,
    "shortDesc": "Multi angle digital gloss meter with measuring range upto 1000GU and one-button operation",
    "features": [
      "One-button operation",
      "Simultaneous measurement in all three angles",
      "Data storage.",
      "Added functions with PC interface.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "Microgloss",
      "Display": "TFT 3.5\u201d",
      "Humidity": "<85% RH, no condensation",
      "Resolution": "0.1 GU",
      "Measuring Range": "20o : 0 ~ 1000 Gloss Units, 60o : 0 ~ 1000 Gloss Units, 85o : 0 ~ 160 Gloss Units",
      "Storage Temperature & Humidity": "-20 ~ 50oC",
      "Operating Temperature & Humidity": "0 ~ 40oC",
      "Battery": "3200mAh Li-ion battery ; >10000 times(within 8 hrs)"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-microsurf-10-surface-roughness-tester",
    "name": "Metrix+ MIcrosurf 10 Surface Roughness Tester",
    "category": "ndt-instruments",
    "subCategory": "Surface Roughness Tester",
    "image": null,
    "shortDesc": "Integrated probe compact Surface Roughness Tester with measuring range Ra upto 16um.",
    "features": [
      "Multi-parameter measurement of Ra, Rq, Rz and Rt.",
      "Backlit LCD display with indication for proper probe alignment.",
      "Data storage and recall.",
      "Metric/Imperial conversion.",
      "Compact and low volume structure for convenient storage.",
      "Warranty: 6 Months"
    ],
    "specs": {
      "Model No": "Microsurf 10A",
      "Power & Supply": "Li-ion rechargeable battery",
      "Accuracy": "< + 10%",
      "Resolution": "0.001um when reading <10um, 0.01um when reading >= 10um and <100um, 0.1um when reading >= 100um",
      "Measuring Range": "Ra, Rq : 0.005 ~ 16.00 um / 0.020 ~ 629.9 uinch, Rz, Rt : 0.020 ~ 160.0 um / 0.078 ~ 6299 uinch"
    },
    "catalogueUrl": "https://metrixinstrument.in/products/catalogue/surftest-10_49_catalogue.pdf",
    "featured": false
  },
  {
    "id": "metrix-utfd-80-ultrasonic-flaw-detector",
    "name": "Metrix+ UTFD 80 Ultrasonic Flaw Detector",
    "category": "ndt-instruments",
    "subCategory": "Ultrasonic Flaw Detector",
    "image": null,
    "shortDesc": "Portable ultrasonic flaw detector for weld and material flaw inspection.",
    "features": [
      "AWS D1.1,DAC (6dBDAC), AVG, TCG & B scan, 28 DGS curves",
      "Automated display of precise flaw location(Depth d, level p, distance s, amplitude, sz dB, \u0444).",
      "Knob design for fast operation.",
      "Solid metal housing (IP65), rubber plastic dust cover included.",
      "Li battery, with working time up to 10 hrs",
      "Small size and light weight for portability",
      "High-speed capture and very low noise.",
      "Lock and unlock function of system parameters and display freeze"
    ],
    "specs": {
      "Model No": "UTFD 80",
      "Measuring Range": "0 ~ 10000",
      "Frequency Range": "0.5 ~ 20",
      "Operating Temperature & Humidity": "-20~50"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-utm5a-ultrasonic-thickness-gauges",
    "name": "Metrix+ UTM5A+ Ultrasonic Thickness Gauges",
    "category": "ndt-instruments",
    "subCategory": "Ultrasonic Thickness Gauge",
    "image": null,
    "shortDesc": "Digital Ultrasonic Thickness Meter to measure 1 ~ 300mm with user-friendly menu interface and type C charging",
    "features": [
      "User friendly menu operation with dot matrix display",
      "DC 5V/1A type C charging with 2000mAh battery",
      "Memory storage with each set of measured value, sound velocity, max, min and avg value.",
      "Measure material sound velocity using 1 point calibration",
      "Option for silent operation and auto power off for conserving battery."
    ],
    "specs": {
      "Model No": "Metrix+ UTM 5A+",
      "Display": "240 x 320 Dot matrix display with adjustable backlight and user friendly menu operation.",
      "Accuracy": "H < 10mm, +0.1mmH >= 10mm, +(0.1 + 1.0%H)mmH = real thickness of sample",
      "Resolution": "0.1mm/0.01mm/0.01inch",
      "Measuring Range": "1 ~ 300mm (in steel)",
      "Altitude": "\u042420 * 3mm (steel)",
      "Memory": "1000 ~ 9999 m/s",
      "Auto switch off": "300 sets of records"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-utm-5-digital-ultrasonic-thickness-gauge",
    "name": "Metrix+ Utm 5 Digital Ultrasonic Thickness Gauge",
    "category": "ndt-instruments",
    "subCategory": "Ultrasonic Thickness Gauge",
    "image": null,
    "shortDesc": "Digital Ultrasonic Thickness Meter to measure 1 ~ 200mm",
    "features": [
      "Preset material velocities for easy selection with custom velocity input.",
      "Inbuilt self-calibrator and simple calibration function.",
      "Automatic power off."
    ],
    "specs": {
      "Model No": "Metrix+ UTM 5",
      "Power & Supply": "1.5V x 4 AAA(UM 4) batteries",
      "Accuracy": "\u00b10.5%n + 0.1mm",
      "Resolution": "0.1mm",
      "Measuring Range": "1 \u2013 200mm (45# Steel)",
      "Operating conditions": "0 ~ 40oC, Humidity < 80%",
      "Memory": "500 ~ 9000 m/s"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-utm-9-digital-ultrasonic-thickness-gauge",
    "name": "Metrix+ UTM 9 Digital Ultrasonic Thickness Gauge",
    "category": "ndt-instruments",
    "subCategory": "Ultrasonic Thickness Gauge",
    "image": null,
    "shortDesc": "Digital Ultrasonic Thickness Meter to measure 0.9 ~ 350mm",
    "features": [
      "Preset material velocities for easy selection with custom velocity input. .",
      "Inbuilt self-calibrator and simple calibration function.",
      "Automatic power off."
    ],
    "specs": {
      "Model No": "UTM 9",
      "Display": "4-digit backlit LCD",
      "Power & Supply": "1.5V x 4 AAA(UM 4) batteries",
      "Accuracy": "\u00b10.5%n + 0.01mm",
      "Resolution": "0.01mm(<100mm), 0.1mm(>100mm)",
      "Measuring Range": "0.9 \u2013 350mm (45# Steel)",
      "Operating conditions": "0 ~ 40oC, Humidity < 80%",
      "Memory": "500 ~ 9000 m/s"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-coat-measurer-f-n-digital-coating-thickness-gauge-meter",
    "name": "Metrix+ Coat Measurer F+N Digital Coating Thickness Gauge Meter",
    "category": "ndt-instruments",
    "subCategory": "Coating Thickness Gauge Meter",
    "image": null,
    "shortDesc": "Flexible probe Digital Coating Thickness Meter to measure the thickness of coatings on ferrous and non-ferrous substrates upto 1250um",
    "features": [
      "Flexible probe for smaller surfaces",
      "Backlit display for better readability",
      "Zero-point calibration and multi-point calibration",
      "Two measure modes: single and continuous",
      "Selectable um/mil measuring units"
    ],
    "specs": {
      "Model No": "COAT MEASURER F+N (COMBINE)",
      "Display": "4 digits backlit LCD",
      "Minimum curvature radius": "F : 1.5mm(convex) ; 25mm(concave)NF : 3mm(convex) ; 50mm(concave)",
      "Minimum measuring area": "Diameter 6mm",
      "Minimum thickness of substrate": "0.3mm",
      "Power & Supply": "4 x 1.5V AAA battery",
      "Accuracy": "\u00b11-3%n or +2.5um",
      "Resolution": "0.1um(0~99.9um); 1um(over 100um)",
      "Measuring Range": "0 - 1250um (0 - 50mils)",
      "Measuring Units": "um /mils",
      "Operating environment": "Temperature: 0 to 50\u2103 ;  Humidity: < 95%"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-coat-measurer-f-digital-coating-thickness-gauge-meter",
    "name": "Metrix+ Coat Measurer F Digital Coating Thickness Gauge Meter",
    "category": "ndt-instruments",
    "subCategory": "Coating Thickness Gauge Meter",
    "image": null,
    "shortDesc": "Flexible probe Digital Coating Thickness Meter to measure the thickness of coatings on ferrous substrates upto 1250um.",
    "features": [
      "Flexible probe for smaller surfaces",
      "Backlit display for better readability",
      "Zero-point calibration and multi-point calibration",
      "Two measure modes: single and continuous",
      "Selectable um/mil measuring units"
    ],
    "specs": {
      "Model No": "COAT MEASURER F (FERROUS)",
      "Display": "4 digits backlit LCD",
      "Minimum curvature radius": "1.5mm(convex), 25mm(concave)",
      "Minimum measuring area": "Diameter 6mm",
      "Minimum thickness of substrate": "0.3mm",
      "Power & Supply": "4 x 1.5V AAA battery",
      "Accuracy": "\u00b11-3%n or +2.5um",
      "Resolution": "0.1um(0~99.9um); 1um(over 100um)",
      "Measuring Range": "0 - 1250um (0 - 50mils)",
      "Measuring Units": "um /mils"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-coat-gauge-fnxl-digital-coating-thickness-gauge-meter",
    "name": "Metrix+ Coat Gauge FNxl Digital Coating Thickness Gauge Meter",
    "category": "ndt-instruments",
    "subCategory": "Coating Thickness Gauge Meter",
    "image": null,
    "shortDesc": "Integrated probe Digital Coating Thickness Meter to measure the thickness of coatings on ferrous and non-ferrous substrates upto 1500um",
    "features": [
      "Large Display for better readability",
      "Zero-point calibration and multi-point calibration",
      "Two measure modes: single and continuous",
      "Selectable um/mil measuring units"
    ],
    "specs": {
      "Model No": "COAT GAUGE FNxL",
      "Minimum curvature radius": "1.5mm(convex), 25mm(concave)",
      "Minimum measuring area": "Diameter 6mm",
      "Minimum thickness of substrate": "0.5mm(0.02\u201d)(F)",
      "Calibration": "Zero Calibration, Multi-Points Calibration",
      "Power & Supply": "4 x 1.5V AAA battery",
      "Accuracy": "\u00b1(2.5%+2um), \u00b1(2.5%+0.08mil)",
      "Resolution": "0.1um/0.01mil",
      "Measuring Range": "0 to 1500um (0 to 59mils)",
      "Operating environment": "Temperature: 0 to 40\u2103(32 to 104\u2109)Humidity: 20% to 90%rh",
      "Measurement Range": "0 to 1500um (0 to 59mils)"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-coat-gauge-fxl-digital-coating-thickness-gauge-meter",
    "name": "Metrix+ Coat Gauge Fxl Digital Coating Thickness Gauge Meter",
    "category": "ndt-instruments",
    "subCategory": "Coating Thickness Gauge Meter",
    "image": null,
    "shortDesc": "Integrated probe Digital Coating Thickness Meter to measure the thickness of coatings on ferrous substrates upto 1500um.",
    "features": [
      "Large Display for better readability",
      "Zero-point calibration and multi-point calibration",
      "Two measure modes: single and continuous",
      "Selectable um/mil measuring units"
    ],
    "specs": {
      "Model No": "COAT GAUGE FxL",
      "Minimum curvature radius": "1.5mm(convex), 25mm(concave)",
      "Minimum measuring area": "Diameter 6mm",
      "Minimum thickness of substrate": "0.5mm(0.02\u201d)(F)",
      "Calibration": "Zero Calibration, Multi-Points Calibration",
      "Power & Supply": "4 x 1.5V AAA battery",
      "Accuracy": "\u00b1(2.5%+2um), \u00b1(2.5%+0.08mil)",
      "Resolution": "0.1um/0.01mil",
      "Measuring Range": "0 to 1500um (0 to 59mils)",
      "Measuring Units": "um , mils",
      "Operating environment": "Temperature: 0 to 40\u2103(32 to 104\u2109Humidity: 20% to 90%rh"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-hardmaster-p",
    "name": "Metrix+ Hardmaster P",
    "category": "ndt-instruments",
    "subCategory": "Hardness Tester",
    "image": null,
    "shortDesc": "Leeb Hardness Tester with range 170 ~ 960 HLD, convertible to other scales, clear dot matrix display and inbuilt calibration process.",
    "features": [
      "Converts to all common scales of HV, HB, HRC, HRB, HRA, HS.",
      "128\u00d764 dot-matrix backlit LCD display.",
      "Inbuilt function of Software Calibration.",
      "Memory storage of 600 groups of data.",
      "Material of \u201ccast steel\u201d is added; HB values can be read out directly when D/DC impact device is used to measure \u201ccast steel\u201d work piece."
    ],
    "specs": {
      "Model No": "HARDMASTER-P",
      "Power & Supply": "3 x  AA Battery",
      "Accuracy": "\u00b16HLD (760\u00b130HLD) error of displayed value , 6HLD (760\u00b130HLD) repeatability of displayed value",
      "Measuring Range": "HLD\uff08170\uff5e960)",
      "Operating Temperature & Humidity": "approx. 100 h (with backlight)",
      "Memory": "48\uff5e600 groups \uff08impact times: 32\uff5e1)"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-surftest-10-surface-roughness-tester",
    "name": "Metrix+ Surftest 10 Surface Roughness Tester",
    "category": "ndt-instruments",
    "subCategory": "Surface Roughness Tester",
    "image": null,
    "shortDesc": "Separate, flexible probe Surface Roughness Tester with measuring range Ra upto 10um.",
    "features": [
      "Parameter measurement of Ra and Rz.",
      "Extended cable probe for flexible measurement.",
      "Backlit LCD display with indication for proper probe alignment.",
      "Data storage and recall.",
      "Metric/Imperial conversion."
    ],
    "specs": {
      "Model No": "Surftest 10",
      "Power & Supply": "Li-ion rechargeable batteryv",
      "Accuracy": "< + 15%",
      "Resolution": "0.001um when reading <10u, 0.01um when reading >= 10um and <100um, 0.1um when reading >= 100um",
      "Measuring Range": "Ra : 0.05 ~ 10.00 um / 1.000 ~ 400.0 uinch, Rz : 0.1 ~ 50.0 um / 4.000 ~ 2000 uinch",
      "Working conditions": "Temperature  : 0 ~ 50oC ; Humidity : <85%",
      "Evaluation length": "1 ~ 2 selectable"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-microsurf-10a-surface-roughness-testers",
    "name": "Metrix+ Microsurf 10A Surface Roughness Testers",
    "category": "ndt-instruments",
    "subCategory": "Surface Roughness Tester",
    "image": null,
    "shortDesc": "Integrated probe compact Surface Roughness Tester with measuring range Ra upto 16um.",
    "features": [
      "Multi-parameter measurement of Ra, Rq, Rz and Rt.",
      "Backlit LCD display with indication for proper probe alignment.",
      "Data storage and recall.",
      "Metric/Imperial conversion.",
      "Compact and low volume structure for convenient storage"
    ],
    "specs": {
      "Model No": "Microsurf 10A",
      "Accuracy": "< + 10%",
      "Resolution": "0.001um when reading <10um0.01um when reading >= 10um and <100um0.1um when reading >= 100um",
      "Measuring Range": "Ra, Rq : 0.005 ~ 16.00 um / 0.020 ~ 629.9 uinchRz, Rt : 0.020 ~ 160.0 um / 0.078 ~ 6299 uinch",
      "Working conditions": "Temperature  : 0 ~ 50oC ; Humidity : <85%",
      "Fluctuation of display value": "<=6%",
      "Profile Digital Filter": "Filter contour : RC, PC-RC, GaussNon-filter contour : D-P"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-avm-05-digital-anemometer",
    "name": "Metrix+ AVM 05 Digital Anemometer",
    "category": "environmental-testers",
    "subCategory": "Digital Anemometer",
    "image": null,
    "shortDesc": "Separate sensor digital anemometer to measure wind speed upto 45m/s, air flow and air temperature.",
    "features": [
      "Built in temperature measurement.",
      "A sensitive balance vane wheel rotates freely in response to air flow",
      "Reading convertible to different measurement units.",
      "Data memory for storing and recalling values later.",
      "Data hold and auto power off.",
      "Backlit display"
    ],
    "specs": {
      "Model No": "AVM 05",
      "Display": "13mm 4-digits LCD",
      "Sensor Type": "Air velocity/flow sensor : conventional angled vane arms with low friction ball bearingTemperaure sensor : Precision thermistor",
      "Sampling Rate": "per second approx",
      "Power & Supply": "4 x 1.5V AAA(UM-4) batteries",
      "Measuring Units": "Air velocity : m/s, ft/min, knots, km/hr; Air flow : CMM, CFM; Beaufort scale : force; Wave height : m; Air temperature : \u00b0C/\u00b0F",
      "Operating conditions": "0 ~ 50\u00b0C; Humidity < 80%RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-dit-3125a-eco-digital-insulation-tester",
    "name": "Metrix+ DIT 3125A Eco Digital Insulation Tester",
    "category": "electrical-instruments",
    "subCategory": "Digital Insulation Tester",
    "image": null,
    "shortDesc": "5kV Digital Insulation Tester with DC Adapter or batteries for power supply",
    "features": [
      "Backlit LCD display.",
      "Auto discharge.",
      "Timer measurement function and PI measurement",
      "DC Adapter or batteries for power",
      "Live circuit warning symbol with audio sound",
      "Low voltage indication",
      "Auto power off"
    ],
    "specs": {
      "Model No": "DIT 3125A Eco",
      "Display": "999 count (1000 count only at 1T\u03a9)",
      "Test range": "DC/AC 30 ~ 600V (50/60Hz)",
      "Sampling Rate": "0.5 ~ 10 times/sec",
      "Power & Supply": "External power supply: DC adapter 12V/1A; or 8x1.5V LR14 battery",
      "Accuracy": "0~99.9G\u03a9: \u00b12%rdg +3dgt; >100G\u03a9: +20% +3dgt",
      "Resolution": "1.0V",
      "Operating conditions": "0 ~ 40C, <85%RH",
      "Storage conditions": "-20 ~ 60C, <90%RH",
      "Repeatability": "500V / 1000V / 2500V / 5000V"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-dit-918-digital-insulation-tester",
    "name": "Metrix+ DIT 918 Digital Insulation Tester",
    "category": "electrical-instruments",
    "subCategory": "Digital Insulation Tester",
    "image": null,
    "shortDesc": "Economical Digital Insulation Tester with test range upto 2.5kV",
    "features": [
      "Backlit LCD display",
      "Auto discharge.",
      "Live wire warning system with audio sound.",
      "Auto power off."
    ],
    "specs": {
      "Model No": "DIT 918",
      "Test range": "100V: 0 ~ 199.9M\u03a9, 250V: 0 ~ 499.9M\u03a9, 500V: 0 ~ 999.9M\u03a9, 1000V: 0 ~ 19.9G\u03a9, 2500V: 0 ~ 49.9G\u03a9",
      "Overload Protection": "AC 1200V/10sec",
      "Withstand Voltage": "AC 8320V/5sec",
      "Power & Supply": "6 x AA batteries",
      "Accuracy": "\u00b15%rdg \u00b1 5dgt",
      "Resolution": "1.0V",
      "Storage Temperature & Humidity": "-20 ~ 70C",
      "Operating Temperature & Humidity": "0 ~ 50C",
      "AC Voltage": "30 ~ 600V",
      "DC Voltage": "30 ~ 600V"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-mt-12a-infrared-thermometer-temperature-gun",
    "name": "Metrix+ MT 12A Infrared Thermometer (Temperature Gun)",
    "category": "surveying-equipments",
    "subCategory": "Infrared Thermometers",
    "image": null,
    "shortDesc": "Rugged Infrared Thermometer to measure upto 1150\u00b0C with 50:1 DS ratio and data storage",
    "features": [
      "Data Storage",
      "Backlight Display",
      "Adjustable Emissivity",
      "50:1 Distance to Spot Ratio"
    ],
    "specs": {
      "Model No": "MT 12A",
      "Display": "Backlight Display",
      "Temperature Measuring Range": "-18\u00b0C ~ 1150\u00b0C (28 to 2102\u00b0F)",
      "Test range": "DC/AC 30 ~ 600V (50/60Hz)",
      "Power & Supply": "1x 9V battery",
      "Accuracy": "\u00b12% or \u00b12\u00b0C",
      "Response Time": "500msec, 95% response",
      "Spectral Response": "8-14 um",
      "Emissivity": "0.1 ~ 1.00 adjustable",
      "Operating conditions": "Temperature : 0 to 40\u00b0C; Humidity : 10-95%RH noncondensing @ upto 30\u00b0C",
      "Storage conditions": "-20 to 60\u00b0C; <=85% RH; without battery"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-dm-100-digital-distance-meter",
    "name": "Metrix+ DM 100 Digital Distance Meter",
    "category": "surveying-equipments",
    "subCategory": "Laser Distance Meters",
    "image": null,
    "shortDesc": "100m Laser Distance Meter with area/volume calculations, bi axis spirit level, data storage and clear OLED display",
    "features": [
      "Pocket type.",
      "Area/volume calculations",
      "Clear display for better readability from all angles.",
      "Historical data review.",
      "Bi-axis spirit bubble for checking level."
    ],
    "specs": {
      "Model No": "DM 100",
      "Accuracy": "\u00b12.0mm",
      "Measuring Range": "0.05 ~ 100m",
      "Measuring Units": "Distance : m, ft, in Area : m2, ft2 Volume : m3, ft3",
      "Single Measurement Time": "0.25s",
      "Laser Type": "620 \u2013 690nm, Class II, <1mW",
      "Storage Temperature & Humidity": "-20 to 65\u2103",
      "Operating Temperature & Humidity": "0 to 40\u2103",
      "Battery": "2 x AAA 1.5V ; >5000 times working time(fully charged)",
      "Rated voltage": "Laser : 30sInstrument : 180s"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "metrix-mm2-digital-moisture-meter",
    "name": "Metrix+ MM2 Digital Moisture Meter",
    "category": "ndt-instruments",
    "subCategory": "Moisture Meter",
    "image": null,
    "shortDesc": "Pin type moisture meter that measures electrical conductivity between two pins to gauge material moisture content.",
    "features": [
      "Dedicated modes for wood, paper, wall",
      "Reading lock",
      "3 color backlit LCD display with buzzer",
      "Battery volume alert",
      "Large non-parallax LCD with legible display",
      "Automatic/manual power off."
    ],
    "specs": {
      "Model No": "MM 2",
      "Range": "Paper: 4 ~ 90%Wall: 1.5 ~ 30%Wood: 4 ~ 75%",
      "Power & Supply": "2 x 1.5V AAA (UM \u2013 4) batteries",
      "Resolution": "0.1",
      "Storage Temperature & Humidity": "-10 ~ 50C",
      "Operating Temperature & Humidity": "Temperature 0 ~ 40oCHumidity 5 ~ 95% RH"
    },
    "catalogueUrl": null,
    "featured": false
  },
  {
    "id": "multispan-1-energy-meter",
    "name": "Multispan 1Ø Energy Meter",
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "image": "https://multispanindia.com/document/images/53972em-1p-regular.jpg",
    "shortDesc": "Model EM-1P — Digital Multi-Function Meter.",
    "features": [],
    "applications": [],
    "baseModel": "EM-1P",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "EM-1P"
          ],
          [
            "Display",
            "8-Digit, 7-Segment, 0.5” Red Display"
          ],
          [
            "Size (mm)",
            "96(H) X 96 (W) X 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ],
          [
            "Voltage Input",
            "30 To 300V AC VLN CAT III"
          ],
          [
            "Current Input",
            "5-Amp or Higher Through External CT"
          ],
          [
            "Active Power (KW)",
            "0.000 To 9999 KW"
          ],
          [
            "Active energy (KWh)",
            "0.000 To 99999999 KWH"
          ],
          [
            "Power Supply",
            "100 To 270V AC,50/60Hz,Approx 3VA"
          ],
          [
            "Frequency",
            "45 To 65 Hz"
          ],
          [
            "Wiring System",
            "1Ø-2Wire"
          ],
          [
            "Protection Level (As Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ],
          [
            "Operating Temperature",
            "0°C To 50°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Supply"
        ],
        "rows": [
          [
            "EM-1P-A2-00",
            "Network Selection :1Ø-2Wire Voltage Input: 30 To 300V AC",
            "CT Primary: 5A to 9999A CT Secondary: 5A",
            "100 to 270V AC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "EM-1P-A2-03",
            "CT Input: 30A with Din 30-1CT"
          ],
          [
            "EM-1P-A2-04",
            "CT Input: 60A with DIN 60-1CT"
          ],
          [
            "Note:",
            "Modbus Available on Request"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-1-frequency-meter",
    "name": "Multispan 1Ø Frequency Meter",
    "category": "power-energy-meter",
    "subCategory": "Digital 1Ø AC Panel Meter",
    "image": "https://multispanindia.com/document/images/102389frq-11-regular.jpg",
    "shortDesc": "Model FRQ-11 — Digital 1Ø AC Panel Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "Process Control",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "FRQ-11",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "FRQ-11"
          ],
          [
            "Dimension (mm)",
            "96 (H) x 96 (W) x 43 (D)"
          ],
          [
            "Panel Cutout ( mm )",
            "92 (H) x 92 (W)"
          ],
          [
            "Input Signal Voltage ( AC )",
            "1Ø-2W 50V - 300V AC ( L-N )"
          ],
          [
            "Measuring Range",
            "45.0 to 65.0 Hz"
          ],
          [
            "Accuracy",
            "Class 0.5"
          ],
          [
            "Power Supply",
            "230V AC ±10%, 50 Hz"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Size(H X W X D)mm",
          "Voltage",
          "Frequency",
          "Auxillary"
        ],
        "rows": [
          [
            "FRQ-11-B1-00",
            "96 X 96 X 43",
            "Network Selection :1Ø-2Wire Voltage Input: 0-300V AC",
            "45.0 to 65.0 Hz",
            "230V AC"
          ],
          [
            "FRQ-21-A2-00",
            "72 X 72 X 34",
            "100 to 270V AC"
          ],
          [
            "FRQ-31-B1-00",
            "48 X 96 X 26",
            "230V AC"
          ],
          [
            "FRQ-41-A2-00",
            "48 X 48 X 46",
            "100 to 270V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-1-multifunction-meter",
    "name": "Multispan 1Ø Multifunction Meter",
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "image": "https://multispanindia.com/document/images/50023pm-11-regular.jpg",
    "shortDesc": "Model PM-11 — Digital Multi-Function Meter. Typical applications: Electrical Control Panel, Power Distribution, Instrumentation Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Power Distribution",
      "Instrumentation Panel",
      "Transformer training"
    ],
    "baseModel": "PM-11",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "1Ø-2 Wire"
          ],
          [
            "CT Primary",
            "UP to 9999A (Programm.)"
          ],
          [
            "CT Secondary",
            "5A/1Amp Selectable"
          ],
          [
            "PF",
            "0.100 - 1.000"
          ],
          [
            "Frequency",
            "45.0 to 65.0 Hz"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY, KEY & LED"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4-Digit, 3-Line, 7-Seg, 0.56” Red LED"
          ],
          [
            "Key",
            "Set, Inc, Dec"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ACCURACY"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "AUXILIARY POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "100 to 270V AC/DC, 50/60Hz"
          ],
          [
            "Burden",
            "3VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "95 % RH NonCondensing"
          ],
          [
            "Protection Level ( As per Request )",
            "IP-65 (Front side As per IS/IEC 60529 : 2001)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Supply"
        ],
        "rows": [
          [
            "PM-11-E3-00",
            "Network Selection :1Ø2W Voltage : 30V to 300V AC",
            "CT Primary : 5A to 9999A CT Secondary : 5A & 1A Selectable",
            "100 to 270V AC/DC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "Note:",
            "Modbus Available on Request"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-1-relay-digital-timer",
    "name": "Multispan 1-Relay Digital Timer",
    "category": "programmable-timers-counters",
    "subCategory": "Programmable Timer",
    "image": "https://multispanindia.com/document/images/56921utr-433-regular.jpg",
    "shortDesc": "Model UTR-433 — Programmable Timer. Typical applications: Packaging Machine, Printing Machine, Stone Cutting Industry, and more.",
    "features": [],
    "applications": [
      "Packaging Machine",
      "Printing Machine",
      "Stone Cutting Industry",
      "Injection Moulding Machine"
    ],
    "baseModel": "UTR-433",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input (Start Pulse)",
            "NPN Proximity Micro Switch"
          ],
          [
            "Time Range",
            "Sec (9.99/99.9/999)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Min (9.59/99.9/999)"
      },
      {
        "type": "divider",
        "text": "Hour (9.59/99.9/999)"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 3-Digit, 7-Segment, 0.6” Red"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Lower: 3-Digit, 7-Segment, 0.3” Green"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "SET, SHIFT, INC, ENT/RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "48 (H) x 48 (W) x 70 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "45 (H) x 45 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Mode",
            "Cyclic On Timer"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Cyclic Off Timer"
      },
      {
        "type": "divider",
        "text": "Delay On Timer"
      },
      {
        "type": "divider",
        "text": "Delay Off Timer"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Counting Direction",
            "Up/ Down"
          ],
          [
            "Reset Option",
            "Front Panel Reset"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Terminal Reset"
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 nos."
          ],
          [
            "Relay Type",
            "2-C/O"
          ],
          [
            "Rating",
            "5A, 230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC, 50-60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 4 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Output",
          "Aux Supply",
          "Size"
        ],
        "rows": [
          [
            "1",
            "UTR-1033-A2-00",
            "1Relay 2C/O",
            "100-270V AC",
            "96x96x43(HxWxD)mm"
          ],
          [
            "2",
            "UTR-2033-A2-00",
            "1Relay 2C/O",
            "100-270V AC",
            "72x72x45(HxWxD)mm"
          ],
          [
            "3",
            "UTR-433-A2-N-RG",
            "1Relay 2C/O",
            "100-270V AC",
            "48x48x70(HxWxD)mm"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-1-watt-meter",
    "name": "Multispan 1Ø Watt Meter",
    "category": "power-energy-meter",
    "subCategory": "Digital 1Ø AC Panel Meter",
    "image": "https://multispanindia.com/document/images/66123wm-11-regular.jpg",
    "shortDesc": "Model WM-11 — Digital 1Ø AC Panel Meter.",
    "features": [],
    "applications": [],
    "baseModel": "WM-11",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "WM-11"
          ],
          [
            "Display",
            "8-Digit, 7-Segment, 0.5” Red display"
          ],
          [
            "Size (mm)",
            "96 (H) X 96 (W) X 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ],
          [
            "Voltage Input",
            "20 To 300V AC VLN CAT III"
          ],
          [
            "Current Input",
            "30mA To 5 Amp or higher through external CT"
          ],
          [
            "Active Power (KW)",
            "0.000 Watt To 9999 KW"
          ],
          [
            "Power Supply",
            "100 To 270V AC/DC,50/60Hz,Approx 3VA"
          ],
          [
            "Frequency",
            "45 To 65 Hz"
          ],
          [
            "Wiring System",
            "1Ø-2W"
          ],
          [
            "Protection Level (As Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ],
          [
            "Operating Temperature",
            "0°C To 50°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Auxillary"
        ],
        "rows": [
          [
            "WM-11-E3-N0",
            "Network Selection :1Ø-2Wire Voltage Input: 20-300V AC",
            "CT Primary :5A to 50A CT Secondary : 5A",
            "100 to 270V AC/DC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "Note:",
            "Modbus Available on Request"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-16-channel-scanner",
    "name": "Multispan 16 Channel Scanner",
    "category": "process-control-instruments",
    "subCategory": "Scanners & Data Loggers",
    "image": "https://multispanindia.com/document/images/25032ms-5716-ru-m1-regular.jpg",
    "shortDesc": "Model MS-5716RU-M1 — Scanners & Data Loggers. Typical applications: Motor Protection, Generator Monitoring & Protection, Electrical Sub-station monitoring, and more.",
    "features": [],
    "applications": [
      "Motor Protection",
      "Generator Monitoring & Protection",
      "Electrical Sub-station monitoring",
      "Metal and Mining applications",
      "Machine Condition Monitoring",
      "Gas Detection",
      "Laboratory Equipment Monitoring"
    ],
    "baseModel": "MS-5716RU-M1",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "MS-5716 RU-M1"
          ],
          [
            "Display",
            "UPPER: 4-Digit, 7-Seg 0.70”, RED LED Display LOWER: 4-Digit, 7-Seg 0.50”, GREEN LED Display"
          ],
          [
            "Size (mm)",
            "192 (H) X 96 (W) X 169 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "188 (H) X 92 (W)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Inputs and Range",
          "Thermocouple",
          "RTD",
          "Analog input",
          "Range"
        ],
        "rows": [
          [
            "J: 0 to 600℃",
            "PT-100/3W -99 to 400℃",
            "0 - 10V DC",
            "-999 To 9999"
          ],
          [
            "K: 0 to 1200℃",
            "PT.1/3W -99.9 to 400.0℃",
            "0 - 20mA DC",
            "-999 To 9999"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "4 - 20mA DC",
            "-999 To 9999"
          ],
          [
            "Output",
            "8-Relay, (NO-C) 1C/O 5A@230V AC USB Data Logger Facility RS-485 RTU MODBUS Note :- 1C/O 5A@230V AC for resistive load."
          ],
          [
            "Power Supply",
            "100 to 270V AC/DC, 50/60 Hz, Approx 11VA"
          ],
          [
            "Operating Temperature",
            "0 To 55℃"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Output Relay",
          "RS-485 Modbus",
          "USB Port"
        ],
        "rows": [
          [
            "1",
            "MS-5716",
            "",
            "",
            ""
          ],
          [
            "2",
            "MS-5716-M1",
            "",
            "YES",
            ""
          ],
          [
            "3",
            "MS-5716U",
            "",
            "",
            "YES"
          ],
          [
            "4",
            "MS-5716U-M1",
            "",
            "YES",
            "YES"
          ],
          [
            "5",
            "MS-5716R",
            "8",
            "",
            ""
          ],
          [
            "6",
            "MS-5716R-M1",
            "8",
            "YES",
            ""
          ],
          [
            "7",
            "MS-5716RU",
            "8",
            "",
            "YES"
          ],
          [
            "8",
            "MS-5716RU-M1",
            "8",
            "YES",
            "YES"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/687796Datasheet%20MS-5716RU-M1.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-3-ampere-meter",
    "name": "Multispan 3Ø Ampere Meter",
    "category": "power-energy-meter",
    "subCategory": "Digital 3Ø AC Panel Meter",
    "image": "https://multispanindia.com/document/images/62221amp-19-regular.jpg",
    "shortDesc": "Model AMP-19 — Digital 3Ø AC Panel Meter. Typical applications: Electrical Control Panel, Power Distribution, Instrumentation Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Power Distribution",
      "Instrumentation Panel",
      "Transformer testing"
    ],
    "baseModel": "AMP-19",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "AMP-19"
          ],
          [
            "Display",
            "3-Digit, 3-Line, 7-Seg 0.56”,red LED Display"
          ],
          [
            "Size (mm)",
            "96(H) X 96 (W) X 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ],
          [
            "Input Current",
            "0.1 to 5AMP AC, (PRIMARY) CAT III"
          ],
          [
            "LED Indication",
            "Kilo Ampere Reading"
          ],
          [
            "Power Supply",
            "230V AC,50 Hz, Approx 4VA"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Current",
          "Auxillary"
        ],
        "rows": [
          [
            "AMP-19-B1-00",
            "CT Primary :Upto 6000A CT Secondary : 5A",
            "230V AC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "AMP-19-B1-06",
            "CT Input: 60A with DIN 60AX CT"
          ],
          [
            "AMP-19-B1-07",
            "CT Input: 30A with DIN 30AX CT"
          ],
          [
            "AMP-19-B1-08",
            "CT Input: 125A with DIN 125AX CT"
          ],
          [
            "Note:",
            "Modbus Available on Request in AMP-13"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet_AMP-199573.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-3-ampere-meter-amp-1911",
    "name": "Multispan 3Ø Ampere Meter - AMP 1911",
    "category": "power-energy-meter",
    "subCategory": "Digital 3Ø AC Panel Meter",
    "image": "https://multispanindia.com/document/images/349718_1788170924_8aab63.jpg",
    "shortDesc": "Model AMP-1911 — Digital 3Ø AC Panel Meter. Typical applications: Electrical Control Panel, Power Distribution, Instrumentation Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Power Distribution",
      "Instrumentation Panel",
      "Transformer testing"
    ],
    "baseModel": "AMP-1911",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "AMP-1911"
          ],
          [
            "Display",
            "4-Digit, 3-Line, 7-Seg 0.56”,red LED Display"
          ],
          [
            "Size (mm)",
            "96(H) X 96 (W) X 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ],
          [
            "Input Current",
            "50mA to 5AMP AC, (PRIMARY) CAT III"
          ],
          [
            "LED Indication",
            "Kilo Ampere Reading"
          ],
          [
            "Power Supply",
            "100-270V AC/DC,50 Hz, Approx 2VA"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/AMP%201911776366.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-3-digit-dual-display-single-output-pid-controller",
    "name": "Multispan 3-Digit Dual Display Single Output PID Controller",
    "category": "temperature-controller",
    "subCategory": "PID Temperature Controller",
    "image": "https://multispanindia.com/document/images/87472utc-421p-regular.jpg",
    "shortDesc": "Model UTC-421P — PID Temperature Controller. Typical applications: Packaging Machinery, Extrusion Machinery, Furnace & Boilers, and more.",
    "features": [],
    "applications": [
      "Packaging Machinery",
      "Extrusion Machinery",
      "Furnace & Boilers",
      "Ovens & Incubators",
      "Food Industry"
    ],
    "baseModel": "UTC-421P",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Input Types",
            "Input",
            "Range"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "J",
            "0 to 600°C,"
          ],
          [
            "K",
            "0 to 999°C,"
          ],
          [
            "PT-100",
            "-99 to 400°C,"
          ],
          [
            "PT.1",
            "-19.9 to 99.9°C,"
          ],
          [
            "Resolution",
            "J,K,PT-100 = 1°C,PT.1 = 0.1°C"
          ],
          [
            "Indication Accuracy",
            "±1% of FSD ± 1°C"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(FSD:-Full Scale Deflection)"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 3-Digit, 7-Segment, 0.63”"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Lower: 3-Digit, 7-Segment, 0.30”"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "SET, INC, DEC, ENT"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "48 (H) x 48 (W) x 70 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "45 (H) x 45 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CONTROL METHOD:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Heating",
            "1. PID control with Auto-Tuning"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2. (TP) Time Proportional"
      },
      {
        "type": "divider",
        "text": "3. ON-OFF control"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Cooling",
            "ON-OFF control"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 Nos"
          ],
          [
            "Relay Type",
            "1C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "10A, 230V AC / 28V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "SSR Drive Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Signal",
            "12V DC, 30mA DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(On-Off condition)"
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC, 50-60Hz"
          ],
          [
            "Power Consumption (VA Rating)",
            "4VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(non-condensing)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(As per request)"
      },
      {
        "type": "grid",
        "header": [
          "Model No",
          "Display",
          "Input",
          "Output",
          "Aux Supply"
        ],
        "rows": [
          [
            "UTC-421P-A2-3-RS",
            "Red + Green",
            "J/K/Pt-100 (Selectable)",
            "Relay || SSR",
            "100-270V AC"
          ],
          [
            "UTC-421P-A2-3-WS",
            "White + Green",
            "J/K/Pt-100 (Selectable)",
            "Relay || SSR",
            "100-270V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet%20UTC%20421P1514.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-3-energy-meter",
    "name": "Multispan 3Ø Energy Meter",
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "image": "https://multispanindia.com/document/images/85451epm-14-m1-regular.jpg",
    "shortDesc": "Model EPM-14-M1 — Digital Multi-Function Meter. Typical applications: Electrical Control Panel, Power Distribution, Instrumentation Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Power Distribution",
      "Instrumentation Panel",
      "Transformer training"
    ],
    "baseModel": "EPM-14-M1",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "EPM-14-M1"
          ],
          [
            "Display",
            "UPPER: 7-Seg, 8-Digit,0.39”, RED LED Display for KWH LOWER: 7-Seg, 4-Digit,0.39”, GREEN LED Display for KW"
          ],
          [
            "Size (mm)",
            "96(H) X 96 (W) X 54 (D)"
          ],
          [
            "Panel Cutout",
            "92 (H) X 92 (W)"
          ],
          [
            "Voltage Input",
            "50 To 520V AC L-L CAT III"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "30 To 300V AC L-N"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Current Input",
            "50mA To 5Amp AC direct or C.T Selectable up to 6000/5 ratio"
          ],
          [
            "Active Power (KW)",
            "0000-9999 KW"
          ],
          [
            "Active Energy (KWh)",
            "0-99999999 KWH"
          ],
          [
            "Power Supply",
            "100 to 270V AC, 50/60Hz, Approx 4VA"
          ],
          [
            "Output",
            "Pulse Output : Voltage range 24V DC Max (External) Pulse Width : 10 to 500ms Selectable & With Modbus"
          ],
          [
            "Frequency",
            "45 To 65 Hz"
          ],
          [
            "Wiring System",
            "3Ø-4W"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ],
          [
            "Operating Temperature",
            "0°C To 50°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Supply"
        ],
        "rows": [
          [
            "EPM-14-E3-00",
            "Network Selection :3Ø-4Wire Voltage Input (L-N):30 To 300V AC Voltage Input (L-L): 50 To 520V AC",
            "CT Primary : 5A to 6000A CT Secondary : 5A",
            "100 to 270V AC/DC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "EPM-14-E3-02",
            "CT Input: 30A with DIN 30AX CT"
          ],
          [
            "EPM-14-E3-03",
            "CT Input: 60A with DIN 60AX CT"
          ],
          [
            "EPM-14-E3-04",
            "CT Input: 100A with DIN 100AX CT"
          ],
          [
            "Note:",
            "2-Relay Available on Request in \"EPM-14\" Modbus Available on Request"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/EPM-14-M111488.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-3-power-meter",
    "name": "Multispan 3Ø Power Meter",
    "category": "power-energy-meter",
    "subCategory": "Digital AVF Meter",
    "image": "https://multispanindia.com/document/images/13763pm-133-regular.jpg",
    "shortDesc": "Model PM-133 — Digital AVF Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "PM-133",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT"
      },
      {
        "type": "divider",
        "text": "Voltage AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct Voltage AC",
            "50 to 300V (L - N)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "87 to 519V (L - L)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Burden",
            "< 0.2 VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Current AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Primary CT Ratio",
            "5 to 3000 Selectable"
          ],
          [
            "Secondary Current Ac",
            "5 Amp"
          ],
          [
            "Burden",
            "< 0.2 VA"
          ],
          [
            "Overload",
            "Upto 6A Continuous"
          ],
          [
            "Frequency",
            "45.0 to 65.0 HZ"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CALCULATED PARAMETERS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Voltage",
            "VLL, VLN, Avg"
          ],
          [
            "Current",
            "L1, L2, L3, Avg"
          ],
          [
            "Frequency",
            "System Frequency"
          ],
          [
            "Load Hour, No load hour",
            "Upto 9999Hr, 59 Min"
          ],
          [
            "Power Factor",
            "L1, L2, L3, Avg"
          ],
          [
            "Kilo Watt",
            "L1, L2, L3, Total"
          ],
          [
            "RPM",
            "2 to 100 Pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "100 to 270V AC/DC, 50/60Hz"
          ],
          [
            "Burden",
            "4VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY, KEY & LED"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "3-Digit, 6-Line, 7-Seg White Display 0.36” LED"
          ],
          [
            "Key",
            "Set, PF/W, Inc, Dec"
          ],
          [
            "LED Indication",
            "A, KA, VLL, VLN, PF, Hz, Kw"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "95 % RH Non - Condensing"
          ],
          [
            "Protection Leval",
            "IP-65 (Front side As per IS/IEC 60529 : 2001)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Auxillary"
        ],
        "rows": [
          [
            "PM-133-E3-00",
            "Network Selection :3Ø4W Voltage Input: 87 to 519V AC (P-P) 50 to 300V AC (P-N)",
            "CT Primary :Upto 3000A CT Secondary : 5A",
            "100 to 270V AC/DC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "PM-133-E3-06",
            "CT Input: 60A with DIN 60AX CT"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/PM%20-1335155.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-3-voltmeter",
    "name": "Multispan 3Ø Voltmeter",
    "category": "power-energy-meter",
    "subCategory": "Digital 3Ø AC Panel Meter",
    "image": "https://multispanindia.com/document/images/65483volt-19-regular.jpg",
    "shortDesc": "Model VOLT-19 — Digital 3Ø AC Panel Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "Process Control",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "VOLT-19",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "divider",
        "text": "Voltage AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Rated voltage Ac (Direct voltage AC)",
            "50 to 520V (L - L)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "30 to 300V (L - N)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Primary PT Ratio",
            "100V to 520KV (Programmable)"
          ],
          [
            "Secondary PT Ratio",
            "100V to 520V (Programmable)"
          ],
          [
            "Burden",
            "< 0.2 VA"
          ],
          [
            "Frequency",
            "45.0 to 65.0 Hz"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "3-Digit, 3-Line, 7-Seg, 0.56” RED LED"
          ],
          [
            "Keys",
            "INC, DEC (Scroll)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Dimension (mm)",
            "96 (H) x 96 (W) x 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ],
          [
            "Measure Parameter",
            "VLL - VLN (3Ø - 4W) VLL (3Ø - 3W)"
          ],
          [
            "ACCURACY",
            "Class 0.5 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC/DC,50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "3VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ],
          [
            "NETWORK CONNECTION",
            "3Ø-3W/3Ø-4W"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Auxillary"
        ],
        "rows": [
          [
            "VOLT-19-E3-N0",
            "Network Selection :3Ø3W/4W PT Primary: 100V to 520kV (Programmable) PT Secondary: 100V to 520V (L-L) (Programmable)",
            "100 to 270V AC/DC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/VOLT%20191279.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-3-voltmeter-volt-1911",
    "name": "Multispan 3Ø Voltmeter - VOLT 1911",
    "category": "power-energy-meter",
    "subCategory": "Digital 3Ø AC Panel Meter",
    "image": "https://multispanindia.com/document/images/100346_1788171232_82956b.jpg",
    "shortDesc": "Model VOLT-1911 — Digital 3Ø AC Panel Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "Process Control",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "VOLT-1911",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "divider",
        "text": "Voltage AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Rated voltage Ac (Direct voltage AC)",
            "5 to 520V (L - L)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "3 to 300V (L - N)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Primary PT Ratio",
            "100V to 999KV (Programmable)"
          ],
          [
            "Secondary PT Ratio",
            "100V to 520V (Programmable)"
          ],
          [
            "Burden",
            "< 0.2 VA"
          ],
          [
            "Frequency",
            "45.0 to 65.0 Hz"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4-Digit, 3-Line, 7-Seg, 0.56” RED LED"
          ],
          [
            "Keys",
            "INC, DEC (Scroll)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Dimension (mm)",
            "96 (H) x 96 (W) x 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ],
          [
            "Measure Parameter",
            "VLL - VLN (3Ø - 4W) (1Ø - 2W) VLL (3Ø - 3W)"
          ],
          [
            "ACCURACY",
            "Class 0.5 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC/DC,50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "2VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ],
          [
            "NETWORK CONNECTION",
            "3Ø-3W/3Ø-4W/1Ø - 2W"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/VOLT-1911675982.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-4-channel-scanner-with-usb-data-logger",
    "name": "Multispan 4 Channel Scanner with USB Data Logger",
    "category": "process-control-instruments",
    "subCategory": "Scanners & Data Loggers",
    "image": "https://multispanindia.com/document/images/877765_1766743600_6200eb.jpg",
    "shortDesc": "Model PSC 9044U-M1 — Scanners & Data Loggers. Typical applications: Pharma & Chemical Industry application, Generator Monitoring & Protection, Machine Condition Monitoring, and more.",
    "features": [],
    "applications": [
      "Pharma & Chemical Industry application",
      "Generator Monitoring & Protection",
      "Machine Condition Monitoring",
      "As a distributed I/O module for interface with PLC/DCS/SCADA",
      "Compressor/Pump/DG set monitoring Remote terminal unit (RTU) For SCADA",
      "Laboratory Equipment Monitoring"
    ],
    "baseModel": "PSC 9044U-M1",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "PSC 9044U-M1"
          ],
          [
            "Display",
            "UPPER: 4 Digit 7 seg 0.70”, WHITE LED Display"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LOWER: 4 Digit 7 seg 0.50”, GREEN LED Display"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "98 (H) X 98 (W) X 76 (D) mm"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Inputs and Range",
            "Thermocouple",
            "Thermocouple"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "J -200 to 800°C J.1 -200.0 to 800.0°C K -200 to 1200°C K.1 -200.0 to 950.0°C R 0°C to 1800°C S 0°C to 1850°C E 0°C to 600°C N -200°C to 1350°C T -200°C to 400°C B 150°C to 1800°C C 0°C to 2350°C L -200°C to 800°C U -200°C to 800°C",
            "-328 to 1472°F -199.9 to 999.9°F -328 to 2192°F -199.9 to 999.9°F 32°C to 3272°F 32°C to 3362°F 32°C to 1112°F -328°C to 2462°F -328°C to 752°F 302°C to 3272°F 32°C to 4262°F -328°C to 1472°F -328°C to 1472°F"
          ],
          [
            "RTD",
            "RTD"
          ],
          [
            "PT-100/3W -200 to 600°C PT.1/3W -199.9 to 600.0°C",
            "PT-100/3W -328 to 1112°F PT.1/3W -199.9 to 999.9°F"
          ],
          [
            "Accuracy",
            "J, J.1, K, K.1, R, S, PT, PT.1 : ±0.25% Full Scale ± 1 Digit T, E, N, B, C, L, U : ±0.5% Full Scale ± 1 Digit ANALOG I/P : ±0.25% Full Scale ± 1 Count"
          ],
          [
            "Output",
            "4 Relay (NO-C-NC) 1C/O 5A@230V AC, 5A for resistive load USB Data Logging Facility with RS-485 RTU MODBUS"
          ],
          [
            "Power Supply",
            "100 to 270V AC/DC,50/60 Hz, Approx 6VA"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Up to 95% RH Non Condensing"
          ],
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-4812-channel-sequential-timer",
    "name": "Multispan 4/8/12 Channel Sequential Timer",
    "category": "programmable-timers-counters",
    "subCategory": "Sequential Timer",
    "image": "https://multispanindia.com/document/images/8603sqt-regular.jpg",
    "shortDesc": "Model SQT-1044 — Sequential Timer.",
    "features": [],
    "applications": [],
    "baseModel": "SQT-1044",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input",
            "Trigger"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Enable"
      },
      {
        "type": "divider",
        "text": "Power ON"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 4-Digit, 7-Segment, 0.56”"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Lower: 4-Digit, 7-Segment, 0.40”"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "SET, SHIFT, INC, ENT/RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Range"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Range",
            "99.99 Sec"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "999.9 Sec"
      },
      {
        "type": "divider",
        "text": "99.59 Min"
      },
      {
        "type": "divider",
        "text": "99.59 Hrs"
      },
      {
        "type": "divider",
        "text": "999.9 Hrs"
      },
      {
        "type": "divider",
        "text": "Timer Mode:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Timer Mode",
            "Delayed ON"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Delayed OFF"
      },
      {
        "type": "divider",
        "text": "Cycle Timer"
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "8 Relay + Cascade"
          ],
          [
            "LED Indication",
            "1. Relay Status"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2. Time Unit"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Rating",
            "5A, 230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC, 50-60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 5 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Output",
          "Aux Supply"
        ],
        "rows": [
          [
            "1",
            "SQT-1022-A2-00",
            "4 Relay",
            "100-270V AC"
          ],
          [
            "2",
            "SQT-1044-A2-00",
            "8 Relay",
            "100-270V AC"
          ],
          [
            "3",
            "SQT-1244-A2-00",
            "12 Relay",
            "100-270V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-8-channel-process-scanner",
    "name": "Multispan 8-channel Process Scanner",
    "category": "process-control-instruments",
    "subCategory": "Scanners & Data Loggers",
    "image": "https://multispanindia.com/document/images/997982_1764148524_9cb5b1.jpg",
    "shortDesc": "Model MS L14-M1 — Scanners & Data Loggers. Typical applications: Pharma & Chemical Industry application, Generator Monitoring & Protection, Machine Condition Monitoring, and more.",
    "features": [],
    "applications": [
      "Pharma & Chemical Industry application",
      "Generator Monitoring & Protection",
      "Machine Condition Monitoring",
      "As a distributed I/O module for interface with PLC/DCS/SCADA",
      "Compressor/Pump/DG set monitoring Remote terminal unit (RTU) For SCADA",
      "Laboratory Equipment Monitoring"
    ],
    "baseModel": "MS L14-M1",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Input Types",
            "Input",
            "Range"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "J",
            "0 to 600°C,"
          ],
          [
            "K",
            "0 to 1200°C"
          ],
          [
            "PT-100",
            "-99 to 400°C,"
          ],
          [
            "PT.1",
            "-99.9 to 400.0°C"
          ],
          [
            "0 - 10V DC 0 - 20mA DC 4 - 20mA DC",
            "-999 To 9999"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "320 x 240 px Resistive Touch screen Display"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 70 (D) mm"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W) mm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "4 nos."
          ],
          [
            "Relay Type",
            "1 C/O , (NO-C-NC)"
          ],
          [
            "Rating",
            "5A, 230V AC / 28 V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "20V To 36V DC"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 5 VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "COMMUNICATION :"
      },
      {
        "type": "divider",
        "text": "RS - 485 MODBUS"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(non-condensing)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(As per request)"
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-8-channel-scanner-with-usb-data-logger",
    "name": "Multispan 8 Channel Scanner with USB Data Logger",
    "category": "process-control-instruments",
    "subCategory": "Scanners & Data Loggers",
    "image": "https://multispanindia.com/document/images/474975_1764153512_669d4e.jpg",
    "shortDesc": "Model PSC 9084U-M1 — Scanners & Data Loggers. Typical applications: Pharma & Chemical Industry application, Generator Monitoring & Protection, Machine Condition Monitoring, and more.",
    "features": [],
    "applications": [
      "Pharma & Chemical Industry application",
      "Generator Monitoring & Protection",
      "Machine Condition Monitoring",
      "As a distributed I/O module for interface with PLC/DCS/SCADA",
      "Compressor/Pump/DG set monitoring Remote terminal unit (RTU) For SCADA",
      "Laboratory Equipment Monitoring"
    ],
    "baseModel": "PSC 9084U-M1",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "PSC 9084U-M1"
          ],
          [
            "Display",
            "UPPER: 4 Digit 7 seg 0.70”, WHITE LED Display"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LOWER: 4 Digit 7 seg 0.50”, GREEN LED Display"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "98 (H) X 98 (W) X 76 (D) mm"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Inputs and Range",
          "Thermocouple",
          "Thermocouple",
          "Analog input",
          "Range"
        ],
        "rows": [
          [
            "J -200 to 800°C J.1 -200.0 to 800.0°C K -200 to 1200°C K.1 -200.0 to 950.0°C R 0°C to 1800°C S 0°C to 1850°C E 0°C to 600°C N -200°C to 1350°C T -200°C to 400°C B 150°C to 1800°C C 0°C to 2350°C L -200°C to 800°C U -200°C to 800°C",
            "-328 to 1472°F -199.9 to 999.9°F -328 to 2192°F -199.9 to 999.9°F 32°C to 3272°F 32°C to 3362°F 32°C to 1112°F -328°C to 2462°F -328°C to 752°F 302°C to 3272°F 32°C to 4262°F -328°C to 1472°F -328°C to 1472°F",
            "0 - 10V DC 0 - 20mA DC 4 - 20mA DC 1 - 5V DC",
            "-1999 To 9999"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "-1999 To 9999"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "RTD",
            "RTD",
            "-1999 To 9999"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "PT-100/3W -200 to 600°C PT.1/3W -199.9 to 600.0°C",
            "PT-100/3W -328 to 1112°F PT.1/3W -199.9 to 999.9°F"
          ],
          [
            "Accuracy",
            "J, J.1, K, K.1, R, S, PT, PT.1 : ±0.25% Full Scale ± 1 Digit T, E, N, B, C, L, U : ±0.5% Full Scale ± 1 Digit ANALOG I/P : ±0.25% Full Scale ± 1 Count"
          ],
          [
            "Output",
            "4 Relay (NO-C-NC) 1C/O 5A@230V AC, 5A for resistive load USB Data Logging Facility with RS-485 RTU MODBUS"
          ],
          [
            "Power Supply",
            "100 to 270V AC/DC,50/60 Hz, Approx 6VA"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Up to 95% RH Non Condensing"
          ],
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-8-channel-scanner-with-usb-data-logger-tsc",
    "name": "Multispan 8 Channel Scanner with USB Data Logger- TSC",
    "category": "process-control-instruments",
    "subCategory": "Scanners & Data Loggers",
    "image": "https://multispanindia.com/document/images/415439_1764154961_2231fd.jpg",
    "shortDesc": "Model TSC 9084U-M1 — Scanners & Data Loggers. Typical applications: Pharma & Chemical Industry application, Generator Monitoring & Protection, Machine Condition Monitoring, and more.",
    "features": [],
    "applications": [
      "Pharma & Chemical Industry application",
      "Generator Monitoring & Protection",
      "Machine Condition Monitoring",
      "As a distributed I/O module for interface with PLC/DCS/SCADA",
      "Compressor/Pump/DG set monitoring Remote terminal unit (RTU) For SCADA",
      "Laboratory Equipment Monitoring"
    ],
    "baseModel": "TSC 9084U-M1",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "UPPER: 4 Digit 7 seg 0.70”, WHITE LED Display"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LOWER: 4 Digit 7 seg 0.50”, GREEN LED Display"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "98 (H) X 98 (W) X 76 (D) mm"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Inputs and Range",
            "Thermocouple",
            "Thermocouple"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "J -200 to 800°C J.1 -200.0 to 800.0°C K -200 to 1200°C K.1 -200.0 to 950.0°C R 0°C to 1800°C S 0°C to 1850°C E 0°C to 600°C N -200°C to 1350°C T -200°C to 400°C B 150°C to 1800°C C 0°C to 2350°C L -200°C to 800°C U -200°C to 800°C",
            "-328 to 1472°F -199.9 to 999.9°F -328 to 2192°F -199.9 to 999.9°F 32°C to 3272°F 32°C to 3362°F 32°C to 1112°F -328°C to 2462°F -328°C to 752°F 302°C to 3272°F 32°C to 4262°F -328°C to 1472°F -328°C to 1472°F"
          ],
          [
            "RTD",
            "RTD"
          ],
          [
            "PT-100/3W -200 to 600°C PT.1/3W -199.9 to 600.0°C",
            "PT-100/3W -328 to 1112°F PT.1/3W -199.9 to 999.9°F"
          ],
          [
            "Accuracy",
            "J, J.1, K, K.1, R, S, PT, PT.1 : ±0.25% Full Scale ± 1 Digit T, E, N, B, C, L, U : ±0.5% Full Scale ± 1 Digit"
          ],
          [
            "Output",
            "4 Relay (NO-C-NC) 1C/O 5A@230V AC, 5A for resistive load USB Data Logging Facility with RS-485 RTU MODBUS"
          ],
          [
            "Power Supply",
            "100 to 270V AC/DC,50/60 Hz, Approx 6VA"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Up to 95% RH Non Condensing"
          ],
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-analog-din-rail-earth-leakage-relay",
    "name": "Multispan Analog Din Rail Earth Leakage Relay",
    "category": "protection-relays",
    "subCategory": "Earth Leakage Relay",
    "image": "https://multispanindia.com/document/images/806085_1783071146_d10ec2.jpg",
    "shortDesc": "Model ER-2K — Earth Leakage Relay. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "ER-2K",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Current",
            "30mA To 30A AC From CBCT"
          ],
          [
            "Set Currant Range",
            "0.03A To 30Amp"
          ],
          [
            "Trip Delay Time",
            "0 to 10 Second"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "KEYS :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "Test, Rst"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 Nos."
          ],
          [
            "Relay Type",
            "NO - C - NC"
          ],
          [
            "Rating",
            "5A,230V AC Resistive Load"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 To 270 V AC"
          ],
          [
            "Power Consumption (VA Rating)",
            "2VA @ 230 VAC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0 - 55°C"
          ],
          [
            "Relative Humidity",
            "95% RH"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/7647ER-2K.pdf",
    "brand": "multispan",
    "featured": true
  },
  {
    "id": "multispan-analog-voltage-protection-relay-din-rail-mount",
    "name": "Multispan Analog Voltage Protection Relay - Din Rail Mount",
    "category": "protection-relays",
    "subCategory": "Voltage Protection Relay",
    "image": "https://multispanindia.com/document/images/925519_1773478094_652f65.jpg",
    "shortDesc": "Model VR-3K — Voltage Protection Relay. Typical applications: DG Set Panels, Motor Control Center Panels, Control Panels, and more.",
    "features": [],
    "applications": [
      "DG Set Panels",
      "Motor Control Center Panels",
      "Control Panels",
      "Distribution Panels",
      "Process Control"
    ],
    "baseModel": "VR-3K",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Specification"
          ],
          [
            "Power Supply",
            "Self Power"
          ],
          [
            "Input Voltage",
            "280 to 520V AC (L-L) 3Ø -3W"
          ],
          [
            "Rated Voltage",
            "415V AC (L-L)"
          ],
          [
            "Output",
            "1-Relay, 1-C/O, 5A 230V AC Resistive Load"
          ],
          [
            "Tripping Parameters",
            "Under Voltage"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Over Voltage"
      },
      {
        "type": "divider",
        "text": "Phase Asymmetry"
      },
      {
        "type": "divider",
        "text": "Phase Sequence"
      },
      {
        "type": "divider",
        "text": "Phase Loss"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Reset Mode",
            "Auto"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Size(mm)",
          "Network",
          "Input",
          "Output",
          "Supply"
        ],
        "rows": [
          [
            "VR-3K-00",
            "90 x 35 x 62.5",
            "3Ø-3W",
            "280V AC to 520V AC",
            "1-Relay, 2-C/O",
            "Self Powered"
          ],
          [
            "VR-3KN-00",
            "90 x 35 x 62.5",
            "3Ø-4W",
            "160V AC to 300V AC",
            "1-Relay, 2-C/O",
            "Self Powered"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-automatic-power-factor-controller-8-stage",
    "name": "Multispan Automatic Power Factor Controller 8 Stage",
    "category": "protection-relays",
    "subCategory": "Automatic Power Factor Controller - APFC",
    "image": "https://multispanindia.com/document/images/315248_1781501821_14d9e7.jpg",
    "shortDesc": "Model APFC-308 — Automatic Power Factor Controller - APFC. Typical applications: PF Management using 3 CT Method, For 3Ø Balanced Industrial Loads, Energy Monitoring System, and more.",
    "features": [],
    "applications": [
      "PF Management using 3 CT Method",
      "For 3Ø Balanced Industrial Loads",
      "Energy Monitoring System",
      "DG Set Panels",
      "Process Control",
      "Power Factor Correction Panels",
      "Commercial Buildings"
    ],
    "baseModel": "APFC-308",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT:"
      },
      {
        "type": "divider",
        "text": "Voltage AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input voltage AC",
            "20 to 300V AC (L - N) 35 to 520V AC (L - L)"
          ],
          [
            "Burden",
            "< 5 VA"
          ],
          [
            "Frequency",
            "50/60 Hz"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Current AC(3 CT Sensing)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Primary CT Ratio",
            "5 to 9999 Amp Selectable"
          ],
          [
            "Secondary Current Ac",
            "0.01 To 5.0 Amp (Without CT)"
          ],
          [
            "Burden",
            "< 0.4 VA"
          ],
          [
            "Overload",
            "Upto 6A Continuous"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY, KEY & LED:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 4 Digit,7 seg,0.60\" Lower: 7 Digit,7 seg,0.38\""
          ],
          [
            "Key",
            "SET/ENT, INC, DEC, EXIT"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size",
            "144 (H) x 144 (W) x 80 (D) mm"
          ],
          [
            "Panel Cutout",
            "137 (H) x 137 (W) mm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CONTROLLING RANGE:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Mode",
            "Kvar / Intel / Manual"
          ],
          [
            "Programmable Hysteresis",
            "0 to 25 KVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "8 Stage Capacitor Relay"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay Type",
            "(NO-C)"
          ],
          [
            "Rating",
            "7A, 250V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100V To 270V AC (L-N)"
          ],
          [
            "Power consumption (VA RATING)",
            "Approximately 5VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ACCURACY:"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/958105Datasheet_APFC-308.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-automatic-power-factor-controller-apfc",
    "name": "Multispan Automatic Power Factor Controller- APFC",
    "category": "protection-relays",
    "subCategory": "Automatic Power Factor Controller - APFC",
    "image": "https://multispanindia.com/document/images/76837apfc-9608-regular.jpg",
    "shortDesc": "Model APFC-9608 — Automatic Power Factor Controller - APFC. Typical applications: PF Management using 1 CT Method, For 3Ø Balanced Industrial Loads, Energy Monitoring System, and more.",
    "features": [],
    "applications": [
      "PF Management using 1 CT Method",
      "For 3Ø Balanced Industrial Loads",
      "Energy Monitoring System",
      "DG Set Panels",
      "Process Control",
      "Power Factor Correction Panels",
      "Commercial Buildings"
    ],
    "baseModel": "APFC-9608",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT:"
      },
      {
        "type": "divider",
        "text": "Voltage AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input voltage AC",
            "30 to 320V AC (L - N)"
          ],
          [
            "Burden",
            "< 6 VA"
          ],
          [
            "Frequency",
            "50/60 Hz"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Current AC(1 CT Sensing)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Primary CT Ratio",
            "5 to 9999 Amp Selectable"
          ],
          [
            "Secondary Current Ac",
            "0.01 To 5.0 Amp (Without CT)"
          ],
          [
            "Burden",
            "< 0.4 VA"
          ],
          [
            "Overload",
            "Up to 6A Continuous"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY, KEY & LED:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 4 Digit,7 seg,0.60\" Lower: 7 Digit,7 seg,0.38\""
          ],
          [
            "Key",
            "SET/ENT, INC, DEC, SCROLL"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size",
            "96 (H) x 96 (W) x 54 (D) mm"
          ],
          [
            "Panel Cutout",
            "92 (H) x 92 (W) mm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CONTROLLING RANGE:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Mode",
            "Kvar / Intel / Manual"
          ],
          [
            "Programmable Hysteresis",
            "0 to 25 KVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "8 Stage Capacitor Relay"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay Type",
            "(NO-C)"
          ],
          [
            "Rating",
            "7A, 250V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approximately 6VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ACCURACY:"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "UP to 95% RH (non-condensing)"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/6465Datasheet_APFC-9608.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-avf-meter-3-3-line-display",
    "name": "Multispan AVF Meter - 3 + 3 Line Display",
    "category": "power-energy-meter",
    "subCategory": "Digital AVF Meter",
    "image": "https://multispanindia.com/document/images/99798nmgj.png",
    "shortDesc": "Model AVF-133 — Digital AVF Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "AVF-133",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT"
      },
      {
        "type": "divider",
        "text": "Voltage AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct Voltage AC",
            "30 to 300V (L - N)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "50 to 520V (L - L)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Burden",
            "< 0.2 VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Current AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Primary CT Ratio",
            "5 to 9999 Selectable"
          ],
          [
            "Secondary Current Ac",
            "0.1 To 5 Amp"
          ],
          [
            "Burden",
            "< 0.2 VA"
          ],
          [
            "Overload",
            "Upto 6A Continuous"
          ],
          [
            "Frequency",
            "45.0 to 65.0 HZ"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CALCULATED PARAMETERS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Voltage",
            "VLL ,VLN , Avg"
          ],
          [
            "Current",
            "All Phase Amp, Avg Amp"
          ],
          [
            "Frequency",
            "System Frequency"
          ],
          [
            "Phase Sequence",
            "Indication"
          ],
          [
            "Load Hour",
            "Up to 9999 Hr 59 min"
          ],
          [
            "ACCURACY",
            "Class 0.5 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "100 to 270V AC/DC ,50/60Hz"
          ],
          [
            "Burden",
            "4VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY, KEY & LED"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "3-Digit, 6-Line, 7-Seg 0.36” LED"
          ],
          [
            "Key",
            "Scroll, Set, Inc ,Dec"
          ],
          [
            "LED Indication",
            "A , KA , VLL , VLN , Avg, PS, Hz"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "95 % RH Non - Condensing"
          ],
          [
            "Protection Leval",
            "IP-65 (Front side As per IS/IEC 60529 : 2001)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Auxillary"
        ],
        "rows": [
          [
            "AVF-133-E3-00",
            "Network Selection :3Ø3W/4W, 1Ø2W Voltage Input: 50-520V AC (P-P) 30-300V AC (P-N)",
            "CT Primary :Upto 9999A CT Secondary : 5A",
            "100 to 270V AC/DC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "Note:",
            "Modbus Available on Request"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet_AVF-1331155.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-avf-meter-3-line-display",
    "name": "Multispan AVF Meter - 3 Line Display",
    "category": "power-energy-meter",
    "subCategory": "Digital AVF Meter",
    "image": "https://multispanindia.com/document/images/1082737567avf-19d-regular.jpg",
    "shortDesc": "Model AVF-19D — Digital AVF Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "AVF-19D",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT"
      },
      {
        "type": "divider",
        "text": "Voltage AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct voltage AC",
            "30 to 300V (L - N) 50 to 520V (L - L)"
          ],
          [
            "Burden",
            "< 0.2 VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Current AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Primary CT Ratio",
            "5 to 9999A Selectable"
          ],
          [
            "Secondary Current Ac",
            "0.1 To 5 Amp"
          ],
          [
            "Burden",
            "< 0.2 VA"
          ],
          [
            "Overload",
            "Upto 6A Continuous"
          ],
          [
            "Frequency",
            "45.0 to 65.0 Hz"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY, KEY & LED"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "3-Digit, 3-Line, 7-Segment, 0.59” RED LED"
          ],
          [
            "Key",
            "Set/Ent, Inc, Dec/Scroll"
          ],
          [
            "LED Indication",
            "A, KA, VLL, VLN, Avg, HZ, L1, L2, L 3"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CALCULATED PARAMETERS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Voltage",
            "VLL, VLN, Avg"
          ],
          [
            "Current",
            "All Phase Ampere, Avg. Ampere"
          ],
          [
            "Frequency",
            "System Frequency"
          ],
          [
            "Load hour",
            "Upto 9999 Hr 59 min"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "RPM"
      },
      {
        "type": "divider",
        "text": "ACCURACY"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "AUXILIARY POWER SUPPLYv"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "230V AC, 50Hz ± 20%"
          ],
          [
            "Burden",
            "3VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non-Condensing"
          ],
          [
            "Protection Level ( As per Request )",
            "IP-65 (Front side As per IS/IEC 60529 : 2001)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Auxillary"
        ],
        "rows": [
          [
            "AVF-19D-B1-N1",
            "Network Selection :3Ø3W/4W, 1Ø2W Voltage Input: 50-520V AC (P-P) 30-300V AC (P-N)",
            "CT Primary :Upto 9999A CT Secondary : 5A",
            "230V AC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "AVF-19D-B1-N3",
            "CT Input: 30A with DIN 30AX CT"
          ],
          [
            "AVF-19D-B1-N6",
            "CT Input: 60A with DIN 60AX CT"
          ],
          [
            "AVF-19D-B1-N8",
            "CT Input: 125A with DIN 125AX CT"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet_AVF-19D11638.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-batch-counter",
    "name": "Multispan Batch Counter",
    "category": "programmable-timers-counters",
    "subCategory": "Functional Counters",
    "image": "https://multispanindia.com/document/images/92036Bc-1046d-regular.png",
    "shortDesc": "Model BC-1046D — Functional Counters. Typical applications: Pharmaceutical Machinery, Product Counting Machinery, Packaging Machinery.",
    "features": [],
    "applications": [
      "Pharmaceutical Machinery",
      "Product Counting Machinery",
      "Packaging Machinery"
    ],
    "baseModel": "BC-1046D",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "BC-1046D"
          ],
          [
            "Display",
            "UPPER: 6-Digit, 7-Seg 0.56\", RED LED Display"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LOWER: 4-Digit, 7-Seg 0.4\", GREEN LED Display"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) X 96 (W) X 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (w)"
          ],
          [
            "Output",
            "1-Relay, 1-C/O, 230V AC, 5A & Buzzer"
          ],
          [
            "Power Supply",
            "100 To 270V AC/DC,50/60Hz,2.5VA"
          ],
          [
            "Sensor",
            "Proximity PNP/NPN (Selectable) & Micro Switch"
          ],
          [
            "Memory",
            "Nonvolatile"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529:2001"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-color-mark-sensor",
    "name": "Multispan Color mark sensor",
    "category": "programmable-timers-counters",
    "subCategory": "Color Mark Sensors",
    "image": "https://multispanindia.com/document/images/539741.jpg",
    "shortDesc": "Model CMS-5X — Color Mark Sensors. Typical applications: Printing Machinery, Packaging Machinery, Food & Beverage, and more.",
    "features": [],
    "applications": [
      "Printing Machinery",
      "Packaging Machinery",
      "Food & Beverage",
      "Pharmaceutical Applications"
    ],
    "baseModel": "CMS-5X",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "CMS 5X"
          ],
          [
            "Power Supply",
            "12 - 24V DC"
          ],
          [
            "Current Consumption",
            "35 mA max.@ 24 V DC"
          ],
          [
            "Output",
            "NPN/PNP Output"
          ],
          [
            "Output Current",
            "25 mA max"
          ],
          [
            "Response Time",
            "2 Millisecond"
          ],
          [
            "Indications",
            "LED 1 : Mark LED(Green)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LED 2 : Output LED(Red)"
      },
      {
        "type": "divider",
        "text": "LED 3 : Background LED (Yellow)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Push Buttons",
            "Button 1 : Mark Button"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Button 2 : Background Button"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Min. Mark Output Delay",
            "20 ms"
          ],
          [
            "Operating Temp.",
            "-10 to 50 C"
          ],
          [
            "Storage Temp.",
            "-20 to 70 C"
          ],
          [
            "Operating Distance",
            "10 to 15 mm"
          ],
          [
            "Minimum Spot Diameter",
            "5 mm"
          ],
          [
            "Emission type",
            "RED (630 nm)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GREEN (520 nm)"
      },
      {
        "type": "divider",
        "text": "BLUE (465 nm)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Ambient Light Rejection",
            "Yes"
          ],
          [
            "Vibration",
            "0.5 mm amplitude,"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "10 to 55 Hz Frequency"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Housing Material",
            "ABS"
          ],
          [
            "Lens Material",
            "Glass"
          ],
          [
            "Connection",
            "Shielded 4 Wire Cable"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/664251Datasheet_CMS-5X.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-cooling-controller",
    "name": "Multispan Cooling Controller",
    "category": "cryo",
    "subCategory": "CRYO Cooling Controller",
    "image": "https://multispanindia.com/document/images/7245cc-524-regular2.jpg",
    "shortDesc": "Model CC-524 — CRYO Cooling Controller. Typical applications: Air Conditioner Panel, Deep freezer, Display Cabinet, and more.",
    "features": [],
    "applications": [
      "Air Conditioner Panel",
      "Deep freezer",
      "Display Cabinet",
      "Chillers",
      "Heat Pump",
      "Portable Chillers"
    ],
    "baseModel": "CC-524",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "CC-524"
          ],
          [
            "Display",
            "3 Digit 0.62” 7 Segment RED / WHITE Display"
          ],
          [
            "Size (mm)",
            "37 (H) x 78 (W) x 70 (D) mm"
          ],
          [
            "Panel Cutout (mm)",
            "30 (H) X 71 (W)"
          ],
          [
            "Input",
            "2NTC Thermistor & Pulse"
          ],
          [
            "Output",
            "3 Relay 1st Relay (NO-C-NC) For Compressor 2nd Relay(NO-C) For Fan 10A ( Resistive load ) 3rd Relay(NO-C) For Defrost 10A ( Resistive load )"
          ],
          [
            "Range",
            "-50.0°C To 99.9°C"
          ],
          [
            "Power Supply",
            "230V AC,50/60Hz,Approx 3VA"
          ],
          [
            "Operating Temperature",
            "0°C TO 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part No.",
          "Input",
          "Display Color",
          "Relay",
          "Power Supply"
        ],
        "rows": [
          [
            "CC-524-B1-01-R",
            "2 NTC sensor",
            "Red",
            "3",
            "230V AC"
          ],
          [
            "CC-524-B1-01-W",
            "2 NTC sensor",
            "Red",
            "3",
            "230V AC"
          ],
          [
            "CC-524-B1-01-W-BL",
            "2 NTC sensor",
            "White",
            "3",
            "230V AC"
          ],
          [
            "CC-524-D1-01-W-BL",
            "2 NTC sensor",
            "White",
            "3",
            "24V DC"
          ],
          [
            "CC-524-D2-01-W-BL",
            "2 NTC sensor",
            "White",
            "3",
            "12V DC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/5074Datasheet_CC524.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-counter-rpm",
    "name": "Multispan Counter + RPM",
    "category": "programmable-timers-counters",
    "subCategory": "Functional Counters",
    "image": "https://multispanindia.com/document/images/34239mmc-1046rd-regular.png",
    "shortDesc": "Model MMC-1046RD — Functional Counters. Typical applications: Dust Collector, Bag Filteration, Hydrophonic, and more.",
    "features": [],
    "applications": [
      "Dust Collector",
      "Bag Filteration",
      "Hydrophonic",
      "Pharmaceutical",
      "Food Processing"
    ],
    "baseModel": "MMC-1046RD",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "MMC-1046RD"
          ],
          [
            "Display",
            "UPPER:- 6 Digit 7 seg 0.56”, White LED Display LOWER:- 4 Digit 7 seg 0.4”, Green LED Display"
          ],
          [
            "Size (mm)",
            "96 (H) X 96 (W) X 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ],
          [
            "Range",
            "Counter : 0 - 999999, RPM : 0 - 9999"
          ],
          [
            "Output",
            "1-Relay, 1-C/O,230V AC,5A"
          ],
          [
            "Power Supply",
            "100 to 270V AC/DC,50/60Hz, Approx 2.5VA"
          ],
          [
            "Sensor",
            "Proximity PNP/NPN (Selectable) & Micro Switch"
          ],
          [
            "Memory",
            "Nonvolatile"
          ],
          [
            "Reset",
            "Reset at Both Front & Back"
          ],
          [
            "Protection Level (As per request)",
            "IP-65(Front side) AS per IS/IEC 60529:2001"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-cryo-10a-single-output",
    "name": "Multispan CRYO -10A Single Output",
    "category": "cryo",
    "subCategory": "CRYO Cooling Controller",
    "image": "https://multispanindia.com/document/images/69329cc-510-regular.jpg",
    "shortDesc": "Model CC-510 — CRYO Cooling Controller.",
    "features": [],
    "applications": [],
    "baseModel": "CC-510",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "CC-510"
          ],
          [
            "Display",
            "3 Digit 0.56” 7 Segment RED / WHITE Display"
          ],
          [
            "Size (mm)",
            "37 (H) x 78 (W) x 70 (D) mm"
          ],
          [
            "Panel Cutout",
            "30(H) X 71(W) mm"
          ],
          [
            "Input",
            "NTC Thermistor"
          ],
          [
            "Output",
            "1 Relay, 1 C/O contact, 10A (Resistive)"
          ],
          [
            "Range",
            "-50°C To 99.9°C"
          ],
          [
            "Power Supply",
            "230V AC,50/60Hz,Approx 3VA"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "sr.no",
          "Model Number",
          "Output 1",
          "Keypad",
          "Display Color",
          "Body color"
        ],
        "rows": [
          [
            "1",
            "CC-510-B1-01-W",
            "10A Relay",
            "Key",
            "White",
            "White"
          ],
          [
            "2",
            "CC-510-B1-01-R",
            "10A Relay",
            "Key",
            "Red",
            "White"
          ],
          [
            "3",
            "CC-510-B1-01-W-BL",
            "10A Relay",
            "Key",
            "White",
            "Black"
          ],
          [
            "4",
            "CC-510-B1-01-R-BL",
            "10A Relay",
            "Key",
            "Red",
            "Black"
          ],
          [
            "5",
            "CC-510T-B1-01-W",
            "10A Relay",
            "Touch",
            "White",
            "White"
          ],
          [
            "6",
            "CC-510T-B1-01-R",
            "10A Relay",
            "Touch",
            "Red",
            "White"
          ],
          [
            "7",
            "CC-510T-B1-01-W-BL",
            "10A Relay",
            "Touch",
            "White",
            "Black"
          ],
          [
            "8",
            "CC-510T-B1-01-R-BL",
            "10A Relay",
            "Touch",
            "Red",
            "Black"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/9398Datasheet_CC510.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-cryo-20a-single-output",
    "name": "Multispan CRYO -20A Single Output",
    "category": "cryo",
    "subCategory": "CRYO Cooling Controller",
    "image": "https://multispanindia.com/document/images/24984cc-520-regular.jpg",
    "shortDesc": "Model CC-520 — CRYO Cooling Controller.",
    "features": [],
    "applications": [],
    "baseModel": "CC-520",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "CC-520"
          ],
          [
            "Display",
            "3 Digit 0.56” 7 Segment RED / WHITE Display"
          ],
          [
            "Size (mm)",
            "37 (H) x 78 (W) x 78 (D) mm"
          ],
          [
            "Panel Cutout",
            "30(H) X 71(W) mm"
          ],
          [
            "Input",
            "NTC Thermistor"
          ],
          [
            "Output",
            "1 Relay, No - C/O contact, 20A (Resistive)"
          ],
          [
            "Range",
            "-50°C To 99.9°C"
          ],
          [
            "Power Supply",
            "230V AC,50/60Hz,Approx 3VA"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "sr.no",
          "Model Number",
          "Output 1",
          "Keypad",
          "Display Color",
          "Body color"
        ],
        "rows": [
          [
            "1",
            "CC-520-B1-01-W",
            "20A Relay",
            "Key",
            "White",
            "White"
          ],
          [
            "2",
            "CC-520-B1-01-R",
            "20A Relay",
            "Key",
            "Red",
            "White"
          ],
          [
            "3",
            "CC-520-B1-01-W-BL",
            "20A Relay",
            "Key",
            "White",
            "Black"
          ],
          [
            "4",
            "CC-520-B1-01-R-BL",
            "20A Relay",
            "Key",
            "Red",
            "Black"
          ],
          [
            "5",
            "CC-520T-B1-01-W",
            "20A Relay",
            "Touch",
            "White",
            "White"
          ],
          [
            "6",
            "CC-520T-B1-01-R",
            "20A Relay",
            "Touch",
            "Red",
            "White"
          ],
          [
            "7",
            "CC-520T-B1-01-W-BL",
            "20A Relay",
            "Touch",
            "White",
            "Black"
          ],
          [
            "8",
            "CC-520T-B1-01-R-BL",
            "20A Relay",
            "Touch",
            "Red",
            "Black"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/5461Datasheet_CC520.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-cryo-air-dryer-application",
    "name": "Multispan CRYO – Air Dryer Application",
    "category": "cryo",
    "subCategory": "CRYO Cooling Controller",
    "image": "https://multispanindia.com/document/images/41738cc-521-regular.jpg",
    "shortDesc": "Model CC-521 — CRYO Cooling Controller. Typical applications: Refrigerated Air Dryer.",
    "features": [],
    "applications": [
      "Refrigerated Air Dryer"
    ],
    "baseModel": "CC-521",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "CC-521"
          ],
          [
            "Display",
            "3 Digit 0.62” 7 Segment RED / WHITE Display"
          ],
          [
            "Size (mm)",
            "37 (H) x 78 (W) x 70 (D) mm"
          ],
          [
            "Panel Cutout",
            "30(H) X 71(W) mm"
          ],
          [
            "Input",
            "NTC Thermistor"
          ],
          [
            "Output",
            "2 Relay, (NO-C-NC) 1st Relay For Compressor } 10A ( Resistive load ) 2nd Relay for Heater } 10A ( Resistive load )"
          ],
          [
            "Range",
            "-50.0°C To 99.9°C"
          ],
          [
            "Power Supply",
            "230V AC,50/60Hz,Approx 3VA"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "sr.no",
          "Model Number",
          "Output 1",
          "Output 2 (Defrost)",
          "Keypad",
          "Display Color",
          "Body color"
        ],
        "rows": [
          [
            "1",
            "CC-521-B1-01-W",
            "10A Relay",
            "10A Relay",
            "Key",
            "White",
            "White"
          ],
          [
            "2",
            "CC-521-B1-01-W-BL",
            "10A Relay",
            "10A Relay",
            "Key",
            "White",
            "Black"
          ],
          [
            "3",
            "CC-521T-B1-01-W",
            "10A Relay",
            "10A Relay",
            "Touch",
            "White",
            "White"
          ],
          [
            "4",
            "CC-521T-B1-01-W-BL",
            "10A Relay",
            "10A Relay",
            "Touch",
            "White",
            "Black"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/11382Datasheet_CC521.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-cryo-dual-compressor-output",
    "name": "Multispan CRYO – Dual Compressor Output",
    "category": "cryo",
    "subCategory": "CRYO Cooling Controller",
    "image": "https://multispanindia.com/document/images/87459cc-552-regular.jpg",
    "shortDesc": "Model CC-552 — CRYO Cooling Controller.",
    "features": [],
    "applications": [],
    "baseModel": "CC-552",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "CC-552"
          ],
          [
            "Display",
            "3 Digit 0.62” 7 Segment RED / WHITE Display"
          ],
          [
            "Size (mm)",
            "37 (H) x 78 (W) x 70 (D) mm"
          ],
          [
            "Panel Cutout",
            "30(H) X 71(W) mm"
          ],
          [
            "Input",
            "NTC Thermistor"
          ],
          [
            "Output",
            "2 Relay, 1 C/O(NO-C-NC) 1st Relay For Compressor } 10A ( Resistive load ) 2nd Relay For Compressor } 10A ( Resistive load )"
          ],
          [
            "Range",
            "-50.0°C To 99.9°C"
          ],
          [
            "Power Supply",
            "230V AC,50/60Hz,Approx 3VA"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model Number",
          "Output 1",
          "Output 2",
          "Keypad",
          "Display Color",
          "Body color"
        ],
        "rows": [
          [
            "1",
            "CC-552-B1-01-W",
            "10A Relay",
            "10A Relay",
            "Key",
            "White",
            "White"
          ],
          [
            "2",
            "CC-552-B1-01-W-BL",
            "10A Relay",
            "10A Relay",
            "Key",
            "White",
            "Black"
          ],
          [
            "3",
            "CC-552T-B1-01-W",
            "10A Relay",
            "10A Relay",
            "Touch",
            "White",
            "White"
          ],
          [
            "4",
            "CC-552T-B1-01-W-BL",
            "10A Relay",
            "10A Relay",
            "Touch",
            "White",
            "Black"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/231Datasheet_CC552.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-cryo-panel-ac-application",
    "name": "Multispan CRYO – Panel AC Application",
    "category": "cryo",
    "subCategory": "CRYO Cooling Controller",
    "image": "https://multispanindia.com/document/images/50038cc-548-regular.jpg",
    "shortDesc": "Model CC-548 — CRYO Cooling Controller. Typical applications: Air Conditioner Panel.",
    "features": [],
    "applications": [
      "Air Conditioner Panel"
    ],
    "baseModel": "CC-548",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "CC-548"
          ],
          [
            "Display",
            "3 Digit 0.62” 7 Segment RED / WHITE Display"
          ],
          [
            "Size (mm)",
            "37 (H) x 78 (W) x 70 (D) mm"
          ],
          [
            "Panel Cutout (mm)",
            "30 (H) X 71 (W)"
          ],
          [
            "Input",
            "NTC Thermistor Pulse Input"
          ],
          [
            "Output",
            "2-Relay 1st Relay for Compressor 20A ( Resistive Load ) 2nd Relay for Alarm & Door 5A ( Resistive Load )"
          ],
          [
            "Range",
            "-50.0°C To 99.9°C"
          ],
          [
            "Power Supply",
            "230V AC, 50/60Hz, Approx 3VA"
          ],
          [
            "Operating Temperature",
            "0°C TO 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "sr.no",
          "Model Number",
          "Output 1",
          "Output 2 (Alarm)",
          "Keypad",
          "Display Color",
          "Body color"
        ],
        "rows": [
          [
            "1",
            "CC-548-B1-01-W-BL",
            "20A Relay",
            "5A Relay",
            "Key",
            "White",
            "Black"
          ],
          [
            "2",
            "CC-548T-B1-01-W-BL",
            "20A Relay",
            "5A Relay",
            "Touch",
            "White",
            "Black"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/4004Datasheet_CC548.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-cryo-with-alarm-function",
    "name": "Multispan CRYO - With Alarm Function",
    "category": "cryo",
    "subCategory": "CRYO Cooling Controller",
    "image": "https://multispanindia.com/document/images/75284cc-512-regular.jpg",
    "shortDesc": "Model CC-512 — CRYO Cooling Controller.",
    "features": [],
    "applications": [],
    "baseModel": "CC-512",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "CC-512"
          ],
          [
            "Display",
            "3 Digit 0.62” 7 Segment RED / WHITE Display"
          ],
          [
            "Size (mm)",
            "37 (H) x 78 (W) x 70 (D) mm"
          ],
          [
            "Panel Cutout",
            "30(H) X 71(W) mm"
          ],
          [
            "Input",
            "NTC Thermistor"
          ],
          [
            "Output",
            "2 Relay, (NO-C-NC) 1st Relay For Compressor } 10A ( Resistive load ) 2nd Relay for Alarm contact } 10A ( Resistive load )"
          ],
          [
            "Range",
            "-50.0°C To 99.9°C"
          ],
          [
            "Power Supply",
            "230V AC,50/60Hz,Approx 3VA"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "sr.no",
          "Model Number",
          "Output 1",
          "Output 2 (Alarm)",
          "Keypad",
          "Display Color",
          "Body color"
        ],
        "rows": [
          [
            "1",
            "CC-512-B1-01-W",
            "10A Relay",
            "10A Relay",
            "Key",
            "White",
            "White"
          ],
          [
            "2",
            "CC-512-B1-01-W-BL",
            "10A Relay",
            "10A Relay",
            "Key",
            "White",
            "Black"
          ],
          [
            "3",
            "CC-512T-B1-01-W",
            "10A Relay",
            "10A Relay",
            "Touch",
            "White",
            "White"
          ],
          [
            "4",
            "CC-512T-B1-01-W-BL",
            "10A Relay",
            "10A Relay",
            "Touch",
            "White",
            "Black"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/4428Datasheet_CC512.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-current-scanner",
    "name": "Multispan Current Scanner",
    "category": "process-control-instruments",
    "subCategory": "Scanners & Data Loggers",
    "image": "https://multispanindia.com/document/images/42941rcs-63-regular.jpg",
    "shortDesc": "Model RCS-63 — Scanners & Data Loggers. Typical applications: Road Construction Panel, Injection Moulding, Plastic Process Industry, and more.",
    "features": [],
    "applications": [
      "Road Construction Panel",
      "Injection Moulding",
      "Plastic Process Industry",
      "Feeder Panel",
      "Industrial Automation Panel"
    ],
    "baseModel": "RCS-63",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Current AC",
            "0.6 To 60 Amp."
          ],
          [
            "Burden",
            "< 0.2VA"
          ],
          [
            "Overload",
            "Upto 65A continuous"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CALCULATED PARAMETERS"
      },
      {
        "type": "divider",
        "text": "6 Different CT Current"
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEYS :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "3-Digit, 7-Seg, 0.36”, Red."
          ],
          [
            "Keys",
            "SET, INC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "76(H) x 28(W) x 118(D)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "COMMUNICATION SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Protocol",
            "Modbus RTU Serial"
          ],
          [
            "Standard",
            "RS - 485"
          ],
          [
            "Communication method",
            "2-Wire Half Duplex"
          ],
          [
            "Data frame",
            "N-8-0,N-8-1,N-8-2"
          ],
          [
            "Communication rate",
            "2400,4800,9600,19200, 38400, 115200"
          ],
          [
            "Slave Address",
            "1 to 127"
          ],
          [
            "Data type",
            "Integer, Float"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY POWER SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "24 V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "95 % RH Non - Condensing"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet%20RCS%2063-86010855.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-current-transducer",
    "name": "Multispan Current Transducer",
    "category": "process-control-instruments",
    "subCategory": "Isolator",
    "image": "https://multispanindia.com/document/images/90893ctr-632-regular.jpg",
    "shortDesc": "Model CTR-632 — Isolator. Typical applications: Field Interface Device, Impedance Matching of Transmitters and Receiver, Isolation of Field Signals, and more.",
    "features": [],
    "applications": [
      "Field Interface Device",
      "Impedance Matching of Transmitters and Receiver",
      "Isolation of Field Signals",
      "Distribution of Signals",
      "Factory Automation",
      "Powering of Field Transmitters"
    ],
    "baseModel": "CTR-632",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input",
            "0 to 5Amp AC (True RMS)"
          ],
          [
            "CMRR",
            ">120dp (Typical)"
          ],
          [
            "Temperature Co-efficient",
            "<100 PPM"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "76 (H) X 27 (W) X 85 (D)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ACCURACY"
      },
      {
        "type": "divider",
        "text": "Class 0.2"
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output 1 & 2",
            "0 to 20mA DC, 4 to 20mA DC, 0 to 10V DC (Factory Set)"
          ],
          [
            "Response Type",
            "<550ms"
          ],
          [
            "Output Inpedance",
            "<500Ω"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Auxiliary Voltage",
            "100 to 270V AC/DC,50/60Hz"
          ],
          [
            "Power Consumption ( VA Rating )",
            "4VA @230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ISOLATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation Type",
            "Optical - 3 way"
          ],
          [
            "Isolation between supply, input & Output",
            "At least 1.5KV AC for 1 min"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "sr.no",
          "Model No",
          "Input",
          "Output 1",
          "Output 2",
          "Aux.supply"
        ],
        "rows": [
          [
            "1",
            "CTR-63-A2-A",
            "0-5A AC",
            "4-20mA",
            "",
            "100-270V AC"
          ],
          [
            "2",
            "CTR-63-A2-A-01",
            "0-1A AC",
            "4-20mA",
            ""
          ],
          [
            "3",
            "CTR-63-A2-V",
            "0-5A AC",
            "0-10V DC",
            ""
          ],
          [
            "4",
            "CTR-63-A2-V-01",
            "0-1A AC",
            "0-10V DC",
            ""
          ],
          [
            "5",
            "CTR-63-24-A",
            "0-5A AC",
            "4-20mA",
            "",
            "24V DC"
          ],
          [
            "6",
            "CTR-63-24-A-01",
            "0-1A AC",
            "4-20mA",
            ""
          ],
          [
            "7",
            "CTR-63-24-V",
            "0-5A AC",
            "0-10V DC",
            ""
          ],
          [
            "8",
            "CTR-63-24-V-01",
            "0-1A AC",
            "0-10V DC",
            ""
          ],
          [
            "9",
            "CTR-632-A2-AA",
            "0-5A AC",
            "4-20mA",
            "4-20mA",
            "100-270V AC"
          ],
          [
            "10",
            "CTR-632-A2-A-01",
            "0-1A AC",
            "4-20mA",
            "4-20mA"
          ],
          [
            "11",
            "CTR-632-A2-VV",
            "0-5A AC",
            "0-10V DC",
            "0-10V DC"
          ],
          [
            "12",
            "CTR-632-A2-V-01",
            "0-1A AC",
            "0-10V DC",
            "0-10V DC"
          ],
          [
            "13",
            "CTR-632-24-AA",
            "0-5A AC",
            "4-20mA",
            "4-20mA",
            "24V DC"
          ],
          [
            "14",
            "CTR-632-24-A-01",
            "0-1A AC",
            "4-20mA",
            "4-20mA"
          ],
          [
            "15",
            "CTR-632-24-VV",
            "0-5A AC",
            "0-10V DC",
            "0-10V DC"
          ],
          [
            "16",
            "CTR-632-24-V-01",
            "0-1A AC",
            "0-10V DC",
            "0-10V DC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/11739Datasheet%20CTR-632.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-cyclic-timer",
    "name": "Multispan Cyclic Timer",
    "category": "programmable-timers-counters",
    "subCategory": "Din Rail Timer - Electronics Time Relay",
    "image": "https://multispanindia.com/document/images/89037cyl-22u-regular.jpg",
    "shortDesc": "Model CYL-22U — Din Rail Timer - Electronics Time Relay.",
    "features": [],
    "applications": [],
    "baseModel": "CYL-22U",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Specification"
          ],
          [
            "Power Supply",
            "12V DC to 240V DC & 20 to 240V AC, 50/60 Hz"
          ],
          [
            "Output",
            "1-Relay O/P (2-C/O, 5A 230 VAC Resistive Load)"
          ],
          [
            "Time Range",
            "0.1 Sec to 10 Hours"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/72970CYL-22U.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-dc-142-amp-volt-combined-meter",
    "name": "Multispan DC Amp+ Volt Combined Meter",
    "category": "power-energy-meter",
    "subCategory": "DC Panel Meters",
    "image": "https://multispanindia.com/document/images/507808_1764414942_87c299.jpg",
    "shortDesc": "Model DC-142 — DC Panel Meters. Typical applications: Electrical Control Panel, Instrumentation Panel, Solar Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Instrumentation Panel",
      "Solar Panel",
      "EV Charging Station"
    ],
    "baseModel": "DC-142",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "divider",
        "text": "Current"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Current",
            "Through external shunt (-75mV To+75mV DC)"
          ],
          [
            "Shunt Selectable",
            "1 to 9999 Amp"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Voltage"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct voltage DC",
            "-1500 to 1500V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CALCULATED PARAMETERS"
      },
      {
        "type": "grid",
        "header": [
          "Parameter",
          "Range",
          "Accuracy"
        ],
        "rows": [
          [
            "DC Voltage",
            "-1500 - 1500V DC",
            "0.5 % OF FSD"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "DC Current",
            "-999 - 9999 A DC"
          ],
          [
            "WATT",
            "-999 - 9999 kW"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEYS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4 Digit, 1 Line 7 seg. 0.76\" RED"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "4 Digit, 1 Line 7 seg. 0.76\" White"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Key",
            "Set, INC, DEC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D) mm"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W) mm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "24V to 270V AC/DC,50/60Hz"
          ],
          [
            "Burden",
            "Approx 6VA @ 270V AC"
          ],
          [
            "ACCURACY",
            "Class 0.5"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 Nos"
          ],
          [
            "Relay Type",
            "1C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "10A, 230V AC / 28V DC (Reg. Load)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "95 % RH Non-Condensing"
          ],
          [
            "Protection Level ( As per Request )",
            "IP-65 (Front side As per IS/IEC 60529 : 2001)"
          ],
          [
            "Protection Parameter",
            "Over Voltage Under Voltage Over Current Under Current"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Auxillary"
        ],
        "rows": [
          [
            "DC-142-M1-D7-No",
            "Voltage Input : -1500V to 1500V DC",
            "Shunt Primary :-999A DC to 9999A DC Shunt Secondary : -75mV DC to 75mV DC",
            "24V to 270V AC/DC,50/60Hz"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-dc-amp-volt-combined-meter-dc-24",
    "name": "Multispan DC Amp+ Volt Combined Meter-DC 24",
    "category": "power-energy-meter",
    "subCategory": "DC Panel Meters",
    "image": "https://multispanindia.com/document/images/58671_1779258647_093c14.jpg",
    "shortDesc": "Model DC-24 — DC Panel Meters. Typical applications: Electrical Control Panel, Instrumentation Panel, Solar Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Instrumentation Panel",
      "Solar Panel",
      "EV Charging Station"
    ],
    "baseModel": "DC-24",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "divider",
        "text": "Current"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Current",
            "Through external shunt (-75mV To+75mV DC)"
          ],
          [
            "Shunt Selectable",
            "1 to 9999 Amp"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Voltage"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct voltage DC",
            "-1500 to 1500V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CALCULATED PARAMETERS"
      },
      {
        "type": "grid",
        "header": [
          "Parameter",
          "Range",
          "Accuracy"
        ],
        "rows": [
          [
            "DC Voltage",
            "-1500 - 1500V DC",
            "0.5 % OF FSD"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "DC Current",
            "-999 - 9999 A DC"
          ],
          [
            "WATT",
            "-999 - 9999 kW"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEYS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4 Digit, 1 Line 7 seg. 0.76\" RED"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "4 Digit, 1 Line 7 seg. 0.76\" White"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Key",
            "Set, INC, DEC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "72 (H) x 72 (W) x 45 (D) mm"
          ],
          [
            "Panel Cutout (mm)",
            "68 (H) x 68 (W) mm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "24V to 270V AC/DC,50/60Hz"
          ],
          [
            "Burden",
            "Approx 6VA @ 270V AC"
          ],
          [
            "ACCURACY",
            "Class 0.5"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "95 % RH Non-Condensing"
          ],
          [
            "Protection Level ( As per Request )",
            "IP-65 (Front side As per IS/IEC 60529 : 2001)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Auxillary"
        ],
        "rows": [
          [
            "DC-24-D7-N0",
            "Voltage Input : -1500V to 1500V DC",
            "Shunt Primary :-999A DC to 9999A DC Shunt Secondary : -75mV DC to 75mV DC",
            "24V to 270V AC/DC,50/60Hz"
          ],
          [
            "DC-24-M1-D7-N0",
            "Voltage Input : -1500V to 1500V DC",
            "Shunt Primary :-999A DC to 9999A DC Shunt Secondary : -75mV DC to 75mV DC",
            "24V to 270V AC/DC,50/60Hz"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/5172DC%2024.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-dc-amp-volt-combined-meter-dc14",
    "name": "Multispan DC Amp+ Volt Combined Meter-DC14",
    "category": "power-energy-meter",
    "subCategory": "DC Panel Meters",
    "image": "https://multispanindia.com/document/images/826265_1784268906_9f62dd.jpg",
    "shortDesc": "Model DC-14 — DC Panel Meters. Typical applications: Electrical Control Panel, Instrumentation Panel, Solar Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Instrumentation Panel",
      "Solar Panel",
      "EV Charging Station"
    ],
    "baseModel": "DC-14",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "divider",
        "text": "Current"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Current",
            "Through external shunt (-75mV To+75mV DC)"
          ],
          [
            "Shunt Selectable",
            "1 to 9999 Amp"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Voltage"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct voltage DC",
            "-1500 to 1500V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CALCULATED PARAMETERS"
      },
      {
        "type": "grid",
        "header": [
          "Parameter",
          "Range",
          "Accuracy"
        ],
        "rows": [
          [
            "DC Voltage",
            "-1500 - 1500V DC",
            "0.5 % OF FSD"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "DC Current",
            "-999 - 9999 A DC"
          ],
          [
            "WATT",
            "-999 - 9999 kW"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEYS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4 Digit, 1 Line 7 seg. 0.76\" RED"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "4 Digit, 1 Line 7 seg. 0.76\" White"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Key",
            "Set, INC, DEC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D) mm"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W) mm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "24V to 270V AC/DC,50/60Hz"
          ],
          [
            "Burden",
            "Approx 6VA @ 270V AC"
          ],
          [
            "ACCURACY",
            "Class 0.5"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "95 % RH Non-Condensing"
          ],
          [
            "Protection Level ( As per Request )",
            "IP-65 (Front side As per IS/IEC 60529 : 2001)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Auxillary"
        ],
        "rows": [
          [
            "DC-14-D7-N0",
            "Voltage Input : -1500V to 1500V DC",
            "Shunt Primary :-999A DC to 9999A DC Shunt Secondary : -75mV DC to 75mV DC",
            "24V to 270V AC/DC,50/60Hz"
          ],
          [
            "DC-14-M1-D7-N0",
            "Voltage Input : -1500V to 1500V DC",
            "Shunt Primary :-999A DC to 9999A DC Shunt Secondary : -75mV DC to 75mV DC",
            "24V to 270V AC/DC,50/60Hz"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/11963DC%2014.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-dc-ampere-meter",
    "name": "Multispan DC Ampere Meter",
    "category": "power-energy-meter",
    "subCategory": "DC Panel Meters",
    "image": "https://multispanindia.com/document/images/59483av-14da-regular.png",
    "shortDesc": "Model AV-14DA — DC Panel Meters. Typical applications: Electrical Control Panel, Power Distribution, Instrumentation Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Power Distribution",
      "Instrumentation Panel",
      "Transformer training"
    ],
    "baseModel": "AV-14DA",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Value"
          ],
          [
            "Model",
            "AV 14DA"
          ],
          [
            "Display",
            "4-Digit, Single Display"
          ],
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ],
          [
            "Input",
            "-75mV DC to +75mV DC"
          ],
          [
            "Current Range",
            "-999 to 9999 Ampere"
          ],
          [
            "Power Supply",
            "100 to 270V AC/DC, 50/60 Hz, Approx 2VA"
          ],
          [
            "Protection Level",
            "IP-65 (Front side)"
          ],
          [
            "Compliance",
            "AS per IS/IEC 60529:2001"
          ],
          [
            "Operating Temperature Range",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non-Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Size(H X W X D)mm",
          "Current",
          "Auxillary"
        ],
        "rows": [
          [
            "AV-14DA-E3-00",
            "96 X 96 X 43",
            "Shunt Primary :-999A DC to 9999A DC Shunt Secondary : -75mV DC to 75mV DC",
            "100 to 270V AC/DC"
          ],
          [
            "AV-41DA-A2-00",
            "48 X 48 X 70",
            "Shunt Primary : 0 to 999A DC Shunt Secondary : 0-75mV DC",
            "100 to 270V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/2835AV-14DA.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-dc-ampere-meter-direct-20a-dc",
    "name": "Multispan DC Ampere Meter- Direct 20A DC",
    "category": "power-energy-meter",
    "subCategory": "DC Panel Meters",
    "image": "https://multispanindia.com/document/images/25594av-14dz-regular.jpg",
    "shortDesc": "Model AV-14DZ — DC Panel Meters.",
    "features": [],
    "applications": [],
    "baseModel": "AV-14DZ",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "AV 14DZ"
          ],
          [
            "Display",
            "4-Digit, 7-Seg 0.56”,Red LED Display"
          ],
          [
            "Size (mm)",
            "96 (H) X 96 (W) X 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ],
          [
            "Range",
            "20.0A DC"
          ],
          [
            "Power Supply",
            "100-270V AC/DC, 50/60 Hz, Approx 4VA"
          ],
          [
            "Protection Level (As per request)",
            "IP-65(Front side) AS per IS/IEC 60529:2001"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Size(H X W X D)mm",
          "Current",
          "Auxillary"
        ],
        "rows": [
          [
            "AV-14DZ-E3-00",
            "96 X 96 X 43",
            "Direct: 0 to 20.0A DC",
            "100 to 270V AC/DC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "AV-14DZ-E3-01",
            "Direct: 0 to 5.00A DC"
          ]
        ]
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "AV-24DZ-E3-00",
            "72 X 72 X 36",
            "Direct: 0 to 20.0A DC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "AV-24DZ-E3-01",
            "Direct: 0 to 5.00A DC"
          ],
          [
            "AV-24DZ-E3-03",
            "Direct: 0 to 2.000A DC"
          ]
        ]
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "AV-34DZ-E3-00",
            "48 X 96 X 26",
            "Direct: 0 to 20.0A DC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "AV-34DZ-E3-01",
            "Direct: 0 to 5.00A DC"
          ],
          [
            "AV-34DZ-E3-03",
            "Direct: 0 to 2.000A DC"
          ],
          [
            "AV-34DZ-E3-04",
            "Direct: 0 to 10.00A DC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/AV-14DZ3701.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-dc-energy-meter",
    "name": "Multispan DC Energy Meter",
    "category": "power-energy-meter",
    "subCategory": "Digital Energy Meters",
    "image": "https://multispanindia.com/document/images/1034183_1778587708_683ecd.jpg",
    "shortDesc": "Model EDC-351 — Digital Energy Meters. Typical applications: Electrical Control Panel, Instrumentation Panel, Solar Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Instrumentation Panel",
      "Solar Panel",
      "EV Charging Station"
    ],
    "baseModel": "EDC-351",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION :"
      },
      {
        "type": "divider",
        "text": "Current"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Current",
            "Through external shunt (-75mV To+75mV DC)"
          ],
          [
            "Shunt Selectable",
            "1 to 9999 Amp"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Voltage"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct voltage DC",
            "-1000 to 1000V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "LCD"
          ],
          [
            "Keys",
            "SET, INC, DEC/RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "90 (H) x 35 (W) x 72 (D) mm"
          ],
          [
            "Mounting Type",
            "DIN Rail Mount"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY POWER SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "24V To 270V AC/DC"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 5 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CALCULATED PARAMETERS :"
      },
      {
        "type": "grid",
        "header": [
          "Parameter",
          "Range",
          "Accuracy"
        ],
        "rows": [
          [
            "DC Voltage",
            "-1000 - 1000 V DC",
            "0.2 % OF FS"
          ],
          [
            "DC Current",
            "-999 - 9999 A DC",
            "0.2 % OF FS"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "WATT",
            "-999 - 9999 kW"
          ]
        ]
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "kWh Total (Imp. Exp. Energy)",
            "0.000 - 99999 MWh",
            "Class 0.2"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ACCURACY:"
      },
      {
        "type": "divider",
        "text": "Class 0.2 (Standard)"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "UP to 95% RH (non-condensing)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Communication :"
      },
      {
        "type": "divider",
        "text": "RS-485 Modbus"
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-dc-multifunction-meter",
    "name": "Multispan DC Multifunction Meter",
    "category": "power-energy-meter",
    "subCategory": "DC Panel Meters",
    "image": "https://multispanindia.com/document/images/265118_1784268732_3f4ec8.jpg",
    "shortDesc": "Model MFM-14DC-M1 — DC Panel Meters. Typical applications: Electrical Control Panel, Instrumentation Panel, Solar Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Instrumentation Panel",
      "Solar Panel",
      "EV Charging Station"
    ],
    "baseModel": "MFM-14DC-M1",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "divider",
        "text": "Current"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Current",
            "Through External Shunt (-75mV To+75mV DC)"
          ],
          [
            "Shunt Selectable",
            "1 To 9999 Amp DC (Through Shunt)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Voltage"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct voltage DC",
            "-1500 to 1500V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CALCULATED PARAMETERS"
      },
      {
        "type": "grid",
        "header": [
          "Parameter",
          "Range",
          "Accuracy"
        ],
        "rows": [
          [
            "DC Voltage",
            "-1500 - 1500V DC",
            "0.5 % OF FSD"
          ],
          [
            "DC Current",
            "-999 - 9999 A DC",
            "0.5 % OF FSD"
          ],
          [
            "WATT",
            "-999 - 9999 kW",
            "0.5 % OF FSD"
          ],
          [
            "IMPORT kWh",
            "0 - 999999 kWh",
            "0.5 % OF FSD"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "EXPORT kWh",
            "0 - 999999 kWh"
          ],
          [
            "TOTAL kWh",
            "0 - 999999 kWh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEYS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "6-Digit, 7-Seg. 0.40\" RED"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "4-Digit, 3-Line, 7-Seg. 0.40\" RED"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Key",
            "RESET, PRG, INC, DEC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "24V to 270V AC/DC , 50/60 Hz"
          ],
          [
            "Burden",
            "Approx 6VA"
          ],
          [
            "ACCURACY",
            "Class 0.5 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "95 % RH Non-Condensing"
          ],
          [
            "Protection Level ( As per Request )",
            "IP-65 (Front side As per IS/IEC 60529 : 2001)"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-dc-volt-meter",
    "name": "Multispan DC Volt Meter",
    "category": "power-energy-meter",
    "subCategory": "DC Panel Meters",
    "image": "https://multispanindia.com/document/images/97873av-14dv-regular.png",
    "shortDesc": "Model AV-14DV — DC Panel Meters. Typical applications: Electrical Control Panel, Power Distribution, Instrumentation Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Power Distribution",
      "Instrumentation Panel",
      "Transformer training"
    ],
    "baseModel": "AV-14DV",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "AV 14DV"
          ],
          [
            "Display",
            "4 Digit, Single Display"
          ],
          [
            "Size (mm)",
            "96 (H) X 96 (W) X 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ],
          [
            "Input",
            "-750V DC to 750V DC"
          ],
          [
            "Power Supply",
            "100-270V AC/DC, 50/60 Hz, Approx 4VA"
          ],
          [
            "Protection Level (As per request)",
            "IP-65(Front side) AS per IS/IEC 60529:2001"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Up to 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Size(H X W X D)mm",
          "Voltage",
          "Auxillary"
        ],
        "rows": [
          [
            "AV-14DV-E3-00",
            "96 X 96 X 43",
            "Voltage Input : -750V DC to 750V DC",
            "100 to 270V AC/DC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "AV-14DV-E3-01",
            "Voltage Input : -20.0V DC to 20.0V DC"
          ],
          [
            "AV-14DV-E3-02",
            "Voltage Input : -50.0V DC to 50.0V DC"
          ],
          [
            "AV-14DV-E3-03",
            "Voltage Input : -200V DC to 200.0V DC"
          ],
          [
            "AV-14DV-E3-04",
            "Voltage Input : -100V DC to 100.0V DC"
          ]
        ]
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "AV-41DV-A2-00",
            "48 X 48 X 70",
            "Voltage Input : 0V DC -750V DC",
            "100 to 270V AC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "AV-41DV-A2-02",
            "Voltage Input : 0V DC to 49.9V DC"
          ],
          [
            "AV-41DV-A2-03",
            "Voltage Input : 0V DC to 99.9V DC"
          ],
          [
            "AV-41DV-A2-04",
            "Voltage Input : 0V DC to 200V DC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/7209AV-14DV.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-demand-controller",
    "name": "Multispan Demand Controller",
    "category": "protection-relays",
    "subCategory": "Demand Controller",
    "image": "https://multispanindia.com/document/images/37029_1763627688_69a15d.jpg",
    "shortDesc": "Model DMR-162 — Demand Controller. Typical applications: Demand Controlling & Monitoring, Original Equipment Manufacturers, Energy Management System, and more.",
    "features": [],
    "applications": [
      "Demand Controlling & Monitoring",
      "Original Equipment Manufacturers",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "DMR-162",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø-3Wire / 3Ø-4Wire / 1Ø-2Wire"
          ],
          [
            "CT Primary",
            "up to 9999A (Programmable)"
          ],
          [
            "CT Secondary",
            "5 Amp/1 Amp selectable"
          ],
          [
            "PT Primary",
            "100V to 520kV (Programmable)"
          ],
          [
            "PT Secondary",
            "100V to 520V (L-L) (Programmable)"
          ],
          [
            "PF Avg. & Per Phase",
            "0.100 - 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ],
          [
            "Load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "No load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "RPM",
            "3600 RPM @ 60 Hz & 2-Pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "KW Total",
            "0.000 - 9999 MW"
          ],
          [
            "kW Per Phase",
            "0.000 - 9999 MW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 MVA"
          ],
          [
            "kVA Per Phase",
            "0.000 - 9999 MVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 MVAr"
          ],
          [
            "kVAr Per Phase",
            "0.000 - 9999 MVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENERGY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Import kWh",
            "000.000 - 99999999 MWh"
          ],
          [
            "Export kWh",
            "000.000 - 99999999 MWh"
          ],
          [
            "kVAh Total",
            "000.000 - 99999999 MVAh"
          ],
          [
            "Import kVArh",
            "000.000 - 99999999 MVArh"
          ],
          [
            "Export kVArh",
            "000.000 - 99999999 MVArh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 8 Digit, 7 Seg 0.40”,RED LED"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Lower: 4 Digit, 3 Line 7 Seg 0.40”,RED"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Key",
            "PROGRAM, VAF, POWER /POWER FACTOR ,ENERGY, THD%"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 Nos"
          ],
          [
            "Relay Type",
            "1 relay (NO-C) 2 relay (NO-C)"
          ],
          [
            "Rating",
            "1 relay 7A, 250V AC 2 relay 7A, 250V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "98 (H) x 98 (W) x 61.5 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 300V AC/DC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 4 VA @ 230V AC MAX"
          ],
          [
            "ACCURACY",
            "Class 0.5 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part No.",
          "Input",
          "ModBus",
          "Display Color",
          "Relay",
          "Power Supply"
        ],
        "rows": [
          [
            "DMR-162-E5-00",
            "CT input : 3Ø [2] Voltage Input : 3Ø3W/4W ,1Ø2W",
            "-",
            "Red",
            "2",
            "100 to 300V AC/DC"
          ],
          [
            "DMR-162-M1-E5-00",
            "CT input : 3Ø [2] Voltage Input : 3Ø3W/4W ,1Ø2W",
            "RS-485",
            "Red",
            "2",
            "100 to 300V AC/DC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/3203Datasheet%20DMR%20162.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-dg-monitoring-relay",
    "name": "Multispan DG Monitoring Relay",
    "category": "protection-relays",
    "subCategory": "Voltage Protection Relay",
    "image": "https://multispanindia.com/document/images/89478DGMR-132-regular.jpg",
    "shortDesc": "Model DGMR-132 — Voltage Protection Relay. Typical applications: DG Set Panel, Motor Control Center Panel, Control Panel, and more.",
    "features": [],
    "applications": [
      "DG Set Panel",
      "Motor Control Center Panel",
      "Control Panel",
      "Distribution Panel"
    ],
    "baseModel": "DGMR-132",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct Voltage AC",
            "300 to 500V AC (L - L) 3Ø-4W"
          ],
          [
            "Resolution",
            "1 Volt"
          ],
          [
            "Accuracy",
            "Class 1.0"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4 digit, 1line, 7 seg, 0.8” RED LED"
          ],
          [
            "Key",
            "Set, Inc, Dec"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION"
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 45 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ],
          [
            "Trip Setting",
            "Under Voltage : 300-380V AC 3Ø-4W Over Voltage : 430-500V AC 3Ø-4W Phase Asymmetry : 1-100V"
          ],
          [
            "Time Parameter",
            "R1D : 1 To 999 Sec. R2D : 1 To 999 Sec. R3D : 1 To 999 Sec. I+D : 1 To 999 Sec. Trip : 1 To 999 Sec."
          ],
          [
            "ACCURACY",
            "Class 1.0 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "3 nos."
          ],
          [
            "Relay Type",
            "2 C/O (NO-C), (NO-C-NC)"
          ],
          [
            "Rating",
            "5A, 230V AC Resistive Load"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "Main Supply : 415V AC DG Supply : 1P-2W,230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "UP to 95% RH (non-condensing)"
          ],
          [
            "Protection Level ( As per Request )",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "NETWORK CONNECTION"
      },
      {
        "type": "divider",
        "text": "3Ø-4W"
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-digital-din-rail-mount-current-protection-relay",
    "name": "Multispan Digital Din Rail Mount – Current Protection Relay",
    "category": "protection-relays",
    "subCategory": "Current Protection Relay",
    "image": "https://multispanindia.com/document/images/30321cpr-35-regular.jpg",
    "shortDesc": "Model CPR-35 — Current Protection Relay. Typical applications: DG Set Panels, Motor Control Center Panels, Control Panels, and more.",
    "features": [],
    "applications": [
      "DG Set Panels",
      "Motor Control Center Panels",
      "Control Panels",
      "Distribution Panels",
      "Process Control"
    ],
    "baseModel": "CPR-35",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Primary CT value",
            "5 to 999 Selectable"
          ],
          [
            "Secondary current AC",
            "0.1 to 5 Amp AC"
          ],
          [
            "Resolution",
            "0.01A, 0.1A, 1A"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "UPPER : 3-Digit, 7-Seg 0.4” LOWER : 3-Digit, 7-Seg 0.28”"
          ],
          [
            "Keys",
            "SET, INC, DEC/ RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 nos."
          ],
          [
            "Relay Type",
            "1 C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "5A, 250V AC/30 V DC"
          ],
          [
            "ACCURACY",
            "Class 1.0 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Dimension (mm)",
            "90 (H) x 35 (W) x 61.5 (D)"
          ],
          [
            "Trip Setting",
            "Under current: 0.00 to 100% of primary C.T value Over current: 0.00 - 120% of primary C.T value"
          ],
          [
            "Time parameter",
            "Trip delay time : 0 to 999 sec Power on time : 0 to 99 sec Initial time delay : 0 to 99 sec Recovery time : 0 to 99 sec"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC/DC, 50-60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "3 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Size(mm)",
          "Network",
          "Input",
          "Output",
          "Supply"
        ],
        "rows": [
          [
            "CPR-35-E3-00",
            "90 x 35 x 61.5",
            "3Ø",
            "5A to 999A",
            "1R, 1-C/O",
            "100-270V AC/DC"
          ],
          [
            "CPR-35-1C-E3-00",
            "90 x 35 x 61.5",
            "1Ø",
            "5A to 999A",
            "1R, 1-C/O",
            "100-270V AC/DC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/9537CPR-35.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-digital-panel-mount-current-protection-relay",
    "name": "Multispan Digital Panel Mount – Current Protection Relay",
    "category": "protection-relays",
    "subCategory": "Current Protection Relay",
    "image": "https://multispanindia.com/document/images/89917cc-12-regular.jpg",
    "shortDesc": "Model CC-12 — Current Protection Relay. Typical applications: Electrical Control Panel, Submersible Pump, Road Construction Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Submersible Pump",
      "Road Construction Panel",
      "MCC Panel",
      "Industrial Chiller And HV AC System",
      "D.G. Set"
    ],
    "baseModel": "CC-12",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Primary CT value",
            "5 to 4000 Selectable"
          ],
          [
            "Secondary current AC",
            "0.5 to 5 Amp AC"
          ],
          [
            "Resolution",
            "0.1A, 1A"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 4-Digit, 7-Segment, 0.70” White Lower: 4-Digit, 7-Segment, 0.50” Green"
          ],
          [
            "Keys",
            "SET, INC, DEC, ENTER/RESET"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 Nos"
          ],
          [
            "Relay Type",
            "1-C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "10A, 230V AC / 28V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC, 50-60Hz"
          ],
          [
            "Power Consumption (VA Rating)",
            "4VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "TIME PARAMETER :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Time 1",
            "It is a minimum relay off delay, where relay 1 is on for minimum time when Amp. reach to the set 1"
          ],
          [
            "Time 2",
            "It is a trip delay, if Amp. value is greater than set 2 for the amount of trip time than relay 1 is on after trip time"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Size",
          "Network",
          "Input",
          "Output",
          "Supply"
        ],
        "rows": [
          [
            "CC-12-A2-N0",
            "96(H)x96(W)x43(D) mm",
            "1Ø-2W",
            "CT up to 4000/5",
            "1R 1C/O",
            "100 to 270V AC"
          ],
          [
            "CC-122-A2-00",
            "96(H)x96(W)x43(D) mm",
            "1Ø-2W",
            "CT up to 4000/5",
            "2R 1C/O",
            "100 to 270V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/DATASHEET%20CC%20125038.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-din-rail-digital-multifunction-meter",
    "name": "Multispan DIN Rail Digital Multifunction Meter",
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "image": "https://multispanindia.com/document/images/32275epm-70-regular.jpg",
    "shortDesc": "Model EPM-70 — Digital Multi-Function Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "EPM-70",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø 3 Wire / 3Ø 4Wire / 1Ø 2Wire"
          ],
          [
            "CT Primary",
            "up to 9999A (Programmable)"
          ],
          [
            "CT Secondary",
            "5 Amp/1 Amp selectable"
          ],
          [
            "PT Primary",
            "100V to 520kV (Programmable)"
          ],
          [
            "PT Secondary",
            "100V to 520V (L-L) (Programmable)"
          ],
          [
            "PF Avg. & Per Phase",
            "0.100 - 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ],
          [
            "Load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "No load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "On Hour",
            "9999 Hour"
          ],
          [
            "RPM",
            "3600 RPM @ 60 Hz & 2 pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "kW Total",
            "0.000 - 9999 MW"
          ],
          [
            "kW Per Phase",
            "0.000 - 9999 MW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 MVA"
          ],
          [
            "kVA Per Phase",
            "0.000 - 9999 MVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 MVAr"
          ],
          [
            "kVAr Per Phase",
            "0.000 - 9999 MVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENERGY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Import kWh",
            "000.000 - 999999 MWh"
          ],
          [
            "Export kWh",
            "000.000 - 999999 MWh"
          ],
          [
            "Net kWh",
            "000.000 - 999999 MWh"
          ],
          [
            "Total kWh",
            "000.000 - 999999 MWh"
          ],
          [
            "kVAh Total",
            "000.000 - 999999 MVAh"
          ],
          [
            "Import kVArh",
            "000.000 - 999999 MVArh"
          ],
          [
            "Export kVArh",
            "000.000 - 999999 MVArh"
          ],
          [
            "Lag kVArh",
            "000.000 - 999999 MVArh"
          ],
          [
            "Lead kVArh",
            "000.000 - 999999 MVArh"
          ],
          [
            "Total kVArh",
            "000.000 - 999999 MVArh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Display",
            "Upper",
            "4 Digit, 2 Line 7 Seg 0.31”, LED"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "Lower",
            "6 Digit, 1 Line 7 Seg 0.31”, LED"
          ],
          [
            "Key",
            "PROGRAM, VAF, POWER/ENERGY THD%"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 300V AC/DC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 3 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LED Indication"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Optical Output",
            "32000 Imp/kWh & kVArh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "COMMUNICATION"
      },
      {
        "type": "divider",
        "text": "RS-485 MODBUS"
      },
      {
        "type": "divider",
        "text": "ACCURACY"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp",
            "5°C to 50°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size",
            "90 (H) x 70 (W) x 62 (D) mm"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/DATASHEET%20EPM-709117.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-din-rail-earth-leakage-relay",
    "name": "Multispan Din Rail Earth leakage Relay",
    "category": "protection-relays",
    "subCategory": "Earth Leakage Relay",
    "image": "https://multispanindia.com/document/images/894921_1783071480_d1fa1f.jpg",
    "shortDesc": "Model ELR-35 — Earth Leakage Relay. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "ELR-35",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Current",
            "0.03 A To 30.0 Amp AC"
          ],
          [
            "Display Current Range",
            "0.03 To 30.0 Amp AC"
          ],
          [
            "Resolution",
            "If Current in Amp = 0.01A If Current in 10 A Above = 0.1 A"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 3 digit, 7 segment, 0.4” (White) Lower: 3 digit, 7 segment, 0.28” (Green)"
          ],
          [
            "Keys",
            "SET, INC, DEC/ RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 Nos."
          ],
          [
            "Relay Type",
            "NO-C-NC, NO-C"
          ],
          [
            "Rating",
            "5A, 250V AC/30 V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "90 (H) x 35 (W) x 61.5 (D)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC/DC, 50-60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "3 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Size",
          "Input",
          "Range",
          "Output",
          "Supply"
        ],
        "rows": [
          [
            "ELR-63-A2-11",
            "76(H)x28(W)x85(D) mm",
            "External CBCT",
            "30mA to 30AAC",
            "1R 1C/O",
            "100 to 270V AC"
          ],
          [
            "ELR-35-A2-00",
            "90(H) x 35(W) x 61.5(D) mm",
            "External CBCT",
            "30mA to 30AAC",
            "2R 1C/O",
            "100 to 270V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/11085ELR-35.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-din-rail-mount",
    "name": "Multispan Din Rail Mount",
    "category": "protection-relays",
    "subCategory": "Motor Protection Relay",
    "image": "https://multispanindia.com/document/images/63345mpd-152-regular.jpg",
    "shortDesc": "Model MPD-152 — Motor Protection Relay. Typical applications: Electrical Control Panel, Submersible Pump, Road Construction Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Submersible Pump",
      "Road Construction Panel",
      "MCC Panel",
      "Industrial Chiller And HV AC System",
      "D.G. Set"
    ],
    "baseModel": "MPD-152",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT:"
      },
      {
        "type": "divider",
        "text": "Voltage AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct Voltage AC",
            "30 to 300V(L - N) 50 to 520V(L - L)"
          ],
          [
            "Burden",
            "< 0.2VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Current AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Primary CT Ratio",
            "5 to 6000 Amp selectable"
          ],
          [
            "Secondary Current AC",
            "0.5 to 5 Amp"
          ],
          [
            "Burden",
            "< 0.2VA"
          ],
          [
            "Overload",
            "Up to 6A continuous"
          ],
          [
            "Frequency",
            "45.0 to 65.0 Hz"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "3 Digit, 3 Line 7 Seg 0.28”, RED LED"
          ],
          [
            "Keys",
            "SET, INC, DEC, RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "75(H)X 55(W)X110(D)"
          ],
          [
            "NETWORK SELECTION :",
            "3 Phase - 4 Wire,3 Phase - 3 Wire,"
          ],
          [
            "ACCURACY:",
            "Class 0.5 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "TRIP SETTING:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Under Current",
            "0.00 to CTR"
          ],
          [
            "Over Current",
            "0.00 to CTR"
          ],
          [
            "Under Voltage",
            "50 to 520V For 3Ø - 3W 30 to 300V For 3Ø - 4W"
          ],
          [
            "Over Voltage",
            "50 to 550V For 3Ø - 3W 30 to 330V For 3Ø - 4W"
          ],
          [
            "Over / Under Frequency",
            "45.0 to 65.0 Hz"
          ],
          [
            "Short Circut",
            "1 - 9 Scale"
          ],
          [
            "Lock Rotor Point",
            "0.5 to 9.0 Scale"
          ],
          [
            "Unbalance",
            "5 - 60%"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "TIME PARAMETER:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power On Delay",
            "0 to 99 Sec"
          ],
          [
            "Initial Time Delay",
            "0 to 99 Sec"
          ],
          [
            "Trip Delay Time(Voltage, Current, Frequency, SSP, Unbalance)",
            "0 to 999 Sec"
          ],
          [
            "Scrolling Time",
            "1 to 99 Sec"
          ],
          [
            "Reset Time",
            "0 to 99 Sec"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 Nos"
          ],
          [
            "Relay Type",
            "1 C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "10Amp, 250V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC, 50Hz"
          ],
          [
            "Power Consuption",
            "3VA @ 230 AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "95 % RH Non-Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Voltage Input",
          "Ampere Input",
          "Output",
          "Supply"
        ],
        "rows": [
          [
            "MPD-152-A2-00",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "CT Selectable up to 6000/5A AC",
            "1R 1 C/O",
            "100 to 270V AC"
          ],
          [
            "MPD-152-A2-07",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "Fixed Multispan 30A- 3 Ph CT Module",
            "1R 1 C/O",
            "100 to 270V AC"
          ],
          [
            "MPD-152-A2-06",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "Fixed Multispan 60A- 3 Ph CT Module",
            "1R 1 C/O",
            "100 to 270V AC"
          ],
          [
            "MPD-152-A2-08",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "Fixed Multispan 125A- 3 Ph CT Module",
            "1R 1 C/O",
            "100 to 270V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-din-rail-mount-earth-fault-relay",
    "name": "Multispan Din Rail Mount – Earth Fault Relay",
    "category": "protection-relays",
    "subCategory": "Earth Fault Relay",
    "image": "https://multispanindia.com/document/images/74788EFR-35-regular1.jpg",
    "shortDesc": "Model EFR-35 — Earth Fault Relay. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "EFR-35",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Current",
            "5 Amp. AC From CBCT OR CT"
          ],
          [
            "Range",
            "10% to 100%"
          ],
          [
            "Resolution",
            "1%"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEYS :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 3 digit, 7 segment, 0.4” (White) Lower: 3 digit, 7 segment, 0.28” (Green)"
          ],
          [
            "Keys",
            "SET, INC, DEC / RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "90(H) X 35(W) X 61.5(D)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 Nos."
          ],
          [
            "Relay Type",
            "NO-C-NC, NO-C"
          ],
          [
            "Rating",
            "5A,250V AC / 30V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 To 270 V AC/DC,50/60Hz"
          ],
          [
            "Power Consumption (VA Rating)",
            "3VA @ 230 VAC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0 - 55°C"
          ],
          [
            "Relative Humidity",
            "UP to 95% RH (non-condensing)"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-din-rail-mount-overload-relay-3phase-ct-built-in",
    "name": "Multispan Din Rail Mount – Overload Relay 3Phase-CT Built-in",
    "category": "protection-relays",
    "subCategory": "3Ø AC Overload Relays",
    "image": "https://multispanindia.com/document/images/526493_1773477174_b38bcc.jpg",
    "shortDesc": "Model OLR-50100 — 3Ø AC Overload Relays.",
    "features": [],
    "applications": [],
    "baseModel": "OLR-50100",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Specification"
          ],
          [
            "Power Supply",
            "230V AC, 50Hz"
          ],
          [
            "Input Current",
            "50 to 100A AC"
          ],
          [
            "Output",
            "1 Relay NO/C/NC, 5A 230V AC, 30V DC Resistive load"
          ],
          [
            "Tripping Parameters",
            "Over Current, SPP"
          ],
          [
            "Delay Time",
            "Power ON Delay: 0 To 9 Sec Selectable"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Initial Time Delay: 5 Sec"
      },
      {
        "type": "divider",
        "text": "Reset Mode: Manually"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Trip Time",
            "Trip Time Delay: 0 To 9 Sec Selectable"
          ],
          [
            "Keys",
            "Test, Reset"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Range",
          "Output",
          "Supply"
        ],
        "rows": [
          [
            "OLR-05A-B1-N1",
            "0.1 to 5A AC",
            "1R 1C/O",
            "230V AC"
          ],
          [
            "OLR-110-B1-N1",
            "1 to 10A AC",
            "1R 1C/O",
            "230V AC"
          ],
          [
            "OLR-530-B1-N1",
            "5 to 30A AC",
            "1R 1C/O",
            "230V AC"
          ],
          [
            "OLR-1030-B1-N1",
            "10 to 30A AC",
            "1R 1C/O",
            "230V AC"
          ],
          [
            "OLR-1060-B1-N1",
            "10 to 60A AC",
            "1R 1C/O",
            "230V AC"
          ],
          [
            "OLR-3060-B1-N1",
            "30 to 60A AC",
            "1R 1C/O",
            "230V AC"
          ],
          [
            "OLR-25100-B1-N1",
            "25 to 100A AC",
            "1R 1C/O",
            "230V AC"
          ],
          [
            "OLR-50100-B1-N1",
            "50 to 100A AC",
            "1R 1C/O",
            "230V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/2376Datasheet%20OLR%2050100.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-din-rail-phase-sequence-relay",
    "name": "Multispan Din Rail Phase Sequence Relay",
    "category": "protection-relays",
    "subCategory": "Phase Sequence Relay",
    "image": "https://multispanindia.com/document/images/106125v22-ryb-regular.jpg",
    "shortDesc": "Model V22-RYB — Phase Sequence Relay. Typical applications: Electrical Control Panel, Submersible  Pump, Road Construction Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Submersible  Pump",
      "Road Construction Panel",
      "MCC Panel",
      "Industrial Chiller And HVAC System",
      "D.G. Set"
    ],
    "baseModel": "V22-RYB",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "System",
            "3Ø - 3W"
          ],
          [
            "Supply Voltage",
            "280 to 520V AC (L-L)"
          ],
          [
            "Phase Loss",
            "< 280V AC (L-L)"
          ],
          [
            "Phase Asymmetry",
            ">40V AC (L-L)"
          ],
          [
            "Hysteresis",
            "6 V Fix (For Auto Reset)"
          ],
          [
            "Reset",
            "Auto Reset on Healthy Condition"
          ],
          [
            "Output",
            "1 C/O, 5 A 230V AC 5A, 28V DC (Resistive Load)"
          ],
          [
            "Power ON Delay",
            "5 Second"
          ],
          [
            "Trip Delay",
            "PS & PL < 200ms Asy : 5 Sec."
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Network",
          "Input Range",
          "Output",
          "Phase Sequence",
          "Phase Loss",
          "Phase Asymmetry"
        ],
        "rows": [
          [
            "SPP-22-00",
            "3Ph-3W",
            "280V AC to 520V AC",
            "1R 1C/O",
            "yes",
            "yes",
            "yes"
          ],
          [
            "SPP-22-1-00",
            "3Ph-3W",
            "280V AC to 520V AC",
            "1R 1C/O",
            "",
            "yes",
            "yes"
          ],
          [
            "SPP-22-2-00",
            "3Ph-3W",
            "154V AC TO 400V AC",
            "1R 1C/O",
            "yes",
            "yes",
            "yes"
          ],
          [
            "SPP-22-3-00",
            "3Ph-3W",
            "280V AC to 520V AC",
            "1R 1C/O",
            "yes",
            "yes",
            ""
          ],
          [
            "V22-RYB-00",
            "3Ph-3W",
            "280V AC to 520V AC",
            "1R 1C/O",
            "yes",
            "yes",
            "yes"
          ],
          [
            "V22-RYB-1-00",
            "3Ph-3W",
            "280V AC to 520V AC",
            "1R 1C/O",
            "",
            "yes",
            "yes"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/6738V22-RYB.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-earth-leakage-relay-built-in-cbct-id-35-mm",
    "name": "Multispan Earth Leakage Relay- BUILT IN CBCT ID 35 mm",
    "category": "protection-relays",
    "subCategory": "Earth Leakage Relay",
    "image": "https://multispanindia.com/document/images/6525ect-35d-regular.jpg",
    "shortDesc": "Model ECT-35D — Earth Leakage Relay. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "ECT-35D",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Current",
            "0.00 To 3.00 A AC in CBCT"
          ],
          [
            "Display Currant Range",
            "30mA To 3.00 Amp"
          ],
          [
            "Resolution",
            "If Current in mA = 1 mA If Current is Amp = 0.01A"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEYS :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "3-Digit, 7-Seg., 0.28”, Red."
          ],
          [
            "Keys",
            "Test, Rst"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 Nos."
          ],
          [
            "Relay Type",
            "NO - C- NC"
          ],
          [
            "Rating",
            "5A,230V AC Resistive Load"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 To 270 V AC/DC"
          ],
          [
            "Power Consumption (VA Rating)",
            "3VA @ 250 VAC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0 - 55°C"
          ],
          [
            "Relative Humidity",
            "95% RH"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Model",
          "Size",
          "Input",
          "Range",
          "Output",
          "Supply"
        ],
        "rows": [
          [
            "EC-35D-A1-00",
            "Digital",
            "76(H) x 40(W) x 103(D) mm",
            "CBCT",
            "30mA to 3A AC",
            "1R, 1-C/O",
            "100-250V AC"
          ],
          [
            "ECT-35-A1-00",
            "Analog",
            "76(H) x 40(W) x 103(D) mm",
            "CBCT",
            "30mA to 3A AC",
            "1R, 1-C/O",
            "100-250V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet_ECT%2035D2896.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-energy-power-meter",
    "name": "Multispan Energy Power Meter",
    "category": "power-energy-meter",
    "subCategory": "Digital Energy Meters",
    "image": "https://multispanindia.com/document/images/50495EPM-35-regular.jpg",
    "shortDesc": "Model EPM-35 — Digital Energy Meters. Typical applications: Electrical Control Panel, Power Distribution, Instrumentation Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Power Distribution",
      "Instrumentation Panel",
      "Transformer training"
    ],
    "baseModel": "EPM-35",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø 3 Wire / 3Ø 4Wire / 1Ø 2Wire"
          ],
          [
            "CT Primary",
            "up to 9999A (Programmable)"
          ],
          [
            "CT Secondary",
            "5 Amp/1 Amp selectable"
          ],
          [
            "PT Primary",
            "100V to 520kV (Programmable)"
          ],
          [
            "PT Secondary",
            "100V to 520V (L-L) (Programmable)"
          ],
          [
            "Sys. PF & Per Phase",
            "0.100 - 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "kW Total",
            "0.000 - 9999 MW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 MVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 MVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Energy"
      },
      {
        "type": "kv",
        "rows": [
          [
            "kWh Import",
            "000.000 - 99999999 MWh"
          ],
          [
            "kWh Export",
            "000.000 - 99999999 MWh"
          ],
          [
            "kVAh Total",
            "000.000 - 99999999 MVAh"
          ],
          [
            "kVArh Import",
            "000.000 - 99999999 MVArh"
          ],
          [
            "kVArh Export",
            "000.000 - 99999999 MVArh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "LCD"
          ],
          [
            "Key",
            "SET, INC, DEC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "90 (H) x 35 (W) x 72 (D) mm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC/DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ACCURACY"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(non-condensing)"
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-flow-totalizer",
    "name": "Multispan Flow Totalizer",
    "category": "process-control-instruments",
    "subCategory": "Flow Totalizer",
    "image": "https://multispanindia.com/document/images/13121mfc-1058-regular.jpg",
    "shortDesc": "Model MFC-1058 — Flow Totalizer. Typical applications: Water Sewage Plant, Chemical & Pharma.",
    "features": [],
    "applications": [
      "Water Sewage Plant",
      "Chemical & Pharma"
    ],
    "baseModel": "MFC-1058",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input",
            "Current : 4 TO 20mA DC"
          ],
          [
            "Resolution",
            "Decimal Point Selectable: 00000/0.0000/00.000/000.00/0000.0 (For Flow rate) & Total Flow"
          ],
          [
            "Range Limits",
            "0 to 99999999 For Total Flow 0 to 99999 For Flow Rate"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 8-Digit, 7-Seg, 0.5” Red (For Total Flow) Lower: 5-Digit, 7-Seg, 0.4” Green (For Flow rate)"
          ],
          [
            "Keys",
            "SET, ENT , SHIFT , UP"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Memory",
            "Non Volatile"
          ],
          [
            "Reset Option",
            "Front Panel Reset & Back Terminal Reset"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 nos."
          ],
          [
            "Relay Type",
            "1 C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "5A, 230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Modbus Output"
      },
      {
        "type": "divider",
        "text": "RS-485 Modbus Communication"
      },
      {
        "type": "divider",
        "text": "Transmitter Supply"
      },
      {
        "type": "divider",
        "text": "24V DC"
      },
      {
        "type": "divider",
        "text": "Retransmission"
      },
      {
        "type": "divider",
        "text": "4 to 20mA DC"
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC, 50-60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 6VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Input",
          "Output Relay",
          "RS-485 Modbus",
          "Retransmission"
        ],
        "rows": [
          [
            "1",
            "MFC-1058-A2-00",
            "4-20mA",
            "1",
            "",
            ""
          ],
          [
            "2",
            "MFC-1058-A2-01",
            "2",
            "",
            ""
          ],
          [
            "3",
            "MFC-1058-A2-02",
            "1",
            "",
            "YES"
          ],
          [
            "4",
            "MFC-1058-A2-04",
            "1",
            "YES",
            ""
          ],
          [
            "5",
            "MFC-1058-A2-06",
            "1",
            "YES",
            "YES"
          ],
          [
            "6",
            "MFC-1058-A2-07",
            "2",
            "YES",
            "YES"
          ],
          [
            "7",
            "MFC-1058P-A2-00",
            "Pulse",
            "1",
            "",
            ""
          ],
          [
            "8",
            "MFC-1058P-A2-01",
            "2",
            "",
            ""
          ],
          [
            "9",
            "MFC-1058P-A2-02",
            "1",
            "",
            "YES"
          ],
          [
            "10",
            "MFC-1058P-A2-04",
            "1",
            "YES",
            ""
          ],
          [
            "11",
            "MFC-1058P-A2-06",
            "1",
            "YES",
            "YES"
          ],
          [
            "12",
            "MFC-1058P-A2-07",
            "2",
            "YES",
            "YES"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/7576MFC%201058.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-flow-totalizer-lc-1058",
    "name": "Multispan Flow Totalizer LC-1058",
    "category": "programmable-timers-counters",
    "subCategory": "Functional Counters",
    "image": "https://multispanindia.com/document/images/1006243_1783413340_455756.jpg",
    "shortDesc": "Model LC-1058 — Functional Counters. Typical applications: Textile Industries, Pipe Extrusion Machine, Printing Machinery.",
    "features": [],
    "applications": [
      "Textile Industries",
      "Pipe Extrusion Machine",
      "Printing Machinery"
    ],
    "baseModel": "LC-1058",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input",
            "NPN/PNP PROXIMITY"
          ],
          [
            "Resolution",
            "Total Meters (DP Selectable), MTR/MIN. (DP Auto Shift)"
          ],
          [
            "Range Limits",
            "0- 99999999 Total Meters (DP Selectable) 0 - 99999 MTR/MIN. (DP Auto Shift)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 8-Digit, 7-Seg, 0.5” Red (For Total Meter) Lower: 5-Digit, 7-Seg, 0.4” Green (For MTR/MIN)"
          ],
          [
            "Keys",
            "SET, ENT/RST , SHIFT , UP"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Memory",
            "Non Volatile"
          ],
          [
            "Reset Option",
            "Front Panel Reset & Back Terminal Reset"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 nos."
          ],
          [
            "Relay Type",
            "1 C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "5A, 230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Modbus Output"
      },
      {
        "type": "divider",
        "text": "RS-485 Modbus Communication"
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC/DC, 50-60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 5VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-forward-reverse-timer",
    "name": "Multispan Forward Reverse Timer",
    "category": "programmable-timers-counters",
    "subCategory": "Din Rail Timer - Electronics Time Relay",
    "image": "https://multispanindia.com/document/images/30590frt-22u-regular.jpg",
    "shortDesc": "Model FRT-22U — Din Rail Timer - Electronics Time Relay.",
    "features": [],
    "applications": [],
    "baseModel": "FRT-22U",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Specification"
          ],
          [
            "Power Supply",
            "12 V DC to 240 V DC & 20 to 240 V AC, 50/60 Hz"
          ],
          [
            "Output",
            "2-Relay O/P, 1-C/O, 5A 230 VAC (Resistive Load) - 1st Relay for forward time & 2nd Relay for reverse time"
          ],
          [
            "Time Range",
            "Forward & Reverse Time: 0.1 sec to 10 hours Pause Time: 1 sec to 100 sec"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/454185FRT-22U.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-humidity-controller",
    "name": "Multispan Humidity Controller",
    "category": "temperature-controller",
    "subCategory": "Humidity Controller",
    "image": "https://multispanindia.com/document/images/13641mhc-1202-regular.jpg",
    "shortDesc": "Model MHC-1202 — Humidity Controller. Typical applications: Process industries, Lab Testing equipment, Testing Chambers, and more.",
    "features": [],
    "applications": [
      "Process industries",
      "Lab Testing equipment",
      "Testing Chambers",
      "HVAC & Refrigeration industries"
    ],
    "baseModel": "MHC-1202",
    "specTables": [
      {
        "type": "divider",
        "text": "Technical Specification"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper display, 7-Seg, Red 0.56” LED for Process Value"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Lower display, 7-Seg, White 0.56” LED for Process Set Value"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Dimension",
            "Size (mm): 96(H) X 96(W) X 54(D)"
          ],
          [
            "Panel Cutout",
            "92 (H) X 92 (W)"
          ],
          [
            "Input",
            "RH-100 ( Humidity)"
          ],
          [
            "Range",
            "PT-100(0.0 To 400.0°C) Humidity (0.0 TO 100.0 % RH)"
          ],
          [
            "Supply",
            "100 To 270V AC, 50/60 Hz, Approx 4VA"
          ],
          [
            "Output",
            "2Relay 1C/O (On-Off)"
          ],
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Input",
          "Output",
          "Aux Supply",
          "Size"
        ],
        "rows": [
          [
            "1",
            "MHC-1202-A2-02",
            "Humidity Sensor (RH-100)",
            "2 Relay",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "2",
            "MHC-1101-A2-01",
            "Humidity Sensor (RH-85)",
            "1 Relay",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "3",
            "MHC-1101-A2-02",
            "Humidity Sensor (RH-100)",
            "1 Relay",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "4",
            "MHC-1101-A2-04",
            "Humidity Sensor (RH-100)",
            "1Relay + 4-20mA Retransmission",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "5",
            "MHC-512-A2-00",
            "Humidity Sensor (RH-100)",
            "2 Relay",
            "100-270V AC",
            "37x78x70(HxWxD)mm"
          ],
          [
            "6",
            "MHC-512-A2-01",
            "Humidity Sensor (RH-85)",
            "2 Relay",
            "100-270V AC",
            "37x78x70(HxWxD)mm"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/6263DATASHEET.MHC%201202.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-humidity-temperature-controller",
    "name": "Multispan Humidity + Temperature Controller",
    "category": "temperature-controller",
    "subCategory": "Humidity Controller",
    "image": "https://multispanindia.com/document/images/34199mht-1202-regular.jpg",
    "shortDesc": "Model MHT-1202 — Humidity Controller. Typical applications: Process Industries, Lab Testing Equipment, Testing Chambers, and more.",
    "features": [],
    "applications": [
      "Process Industries",
      "Lab Testing Equipment",
      "Testing Chambers",
      "HVAC & Refrigeration Industries"
    ],
    "baseModel": "MHT-1202",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Specification"
          ],
          [
            "Micro Controller",
            "Based, Double Display"
          ],
          [
            "Display",
            "Upper Display, 7-Seg, Red 0.56” LED for Process Value-1 Lower Display, 7-Seg, White 0.56” LED for Process Value-2"
          ],
          [
            "Dimension",
            "Size (mm): 96(H) X 96(W) X 54(D) Panel Cutout (mm): 92 (H) X 92 (W)"
          ],
          [
            "Input",
            "PT-100/3W & Humidity Sensor(RH-100)"
          ],
          [
            "Range",
            "PT-100 (0.0°C to 400.0°C) Humidity (0.0 TO 100.0% RH)"
          ],
          [
            "Supply",
            "100 To 270V AC, 50/60 Hz, Approx 4VA"
          ],
          [
            "Output",
            "2-Relay 1C/O (On-Off)"
          ],
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529:2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Input",
          "Output",
          "RS-485 Modbus",
          "Aux Supply",
          "Size"
        ],
        "rows": [
          [
            "1",
            "MHT-1202-A2-00",
            "Humidity Sensor (RH-100) + PT-100",
            "2 Relay",
            "",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "2",
            "MHT-1202-A2-01",
            "Humidity Sensor (RH-85) + PT-100",
            "2 Relay",
            "",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "3",
            "MHT-1202-M1-A2-00",
            "Humidity Sensor (RH-100) + PT-100",
            "2 Relay",
            "yes",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "4",
            "MHT-1202-M1-A2-01",
            "Humidity Sensor (RH-85) + PT-100",
            "2 Relay",
            "yes",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/DATASHEET.MHT%20120211665.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-jumbo-display-process-indicator",
    "name": "Multispan Jumbo Display Process indicator",
    "category": "process-control-instruments",
    "subCategory": "Jumbo Display Indicator",
    "image": "https://multispanindia.com/document/images/100958pic6004a-regular.jpg",
    "shortDesc": "Model PIC-6004A — Jumbo Display Indicator.",
    "features": [],
    "applications": [],
    "baseModel": "PIC-6004A",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model No",
            "PIC-6004A"
          ],
          [
            "Description",
            "Micro Controller Based, Single Side & Dual Side Display"
          ],
          [
            "Display",
            "4-Digit, 7-Seg, 4-Inch”, Red LED Display"
          ],
          [
            "Size (mm)",
            "Single Display:- 165 (H) X 392 (W) X 55 (D)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Dual display :- 165 (H) X 392 (W) X 75 (D)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Range",
            "-999 to 9999 (selectable)"
          ],
          [
            "Input",
            "0 To 10V DC, 0 To 20mA DC, 4 To 20mA DC ( Selectable)"
          ],
          [
            "Power Supply",
            "Single:- 100 To 250V AC, 50/60 Hz Approx 4VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Dual:- 100 To 250V AC, 50/60 Hz Approx 7VA"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Protection Level (As per request)",
            "IP-65(Front side) AS per IS/IEC 60529:2001"
          ],
          [
            "Note",
            "Range & Decimal Point Selectable Reverse Scalling Possible"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "sr.no",
          "Model",
          "Input",
          "Display",
          "Output Relay",
          "Transmitter supply"
        ],
        "rows": [
          [
            "1",
            "PIC-6004A-A2-N0-S",
            "4-20mA DC/0-20mA DC/0-10V DC",
            "Single Side",
            "",
            "24V DC"
          ],
          [
            "2",
            "PIC-6004A-A2-N1-S",
            "Single Side",
            "2",
            "24V DC"
          ],
          [
            "3",
            "PIC-6004A-A2-N0-D",
            "4-20mA DC/0-20mA DC/0-10V DC",
            "Dual Side",
            "",
            "24V DC"
          ],
          [
            "4",
            "PIC-6004A-A2-N1-D",
            "Dual Side",
            "2",
            "24V DC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/9848Datasheet_PIC-6004A%20FINAL%20WITH%20UKCA.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-jumbo-display-process-indicator-ptc-8004",
    "name": "Multispan Jumbo Display Process indicator - PTC-8004",
    "category": "process-control-instruments",
    "subCategory": "Jumbo Display Indicator",
    "image": "https://multispanindia.com/document/images/419908_1784882616_e7e328.jpg",
    "shortDesc": "Model PTC-8004 — Jumbo Display Indicator. Typical applications: Temperature & Process Indication, Pressure/Level/Flow Monitoring, Plastic molding/extrusion, and more.",
    "features": [],
    "applications": [
      "Temperature & Process Indication",
      "Pressure/Level/Flow Monitoring",
      "Plastic molding/extrusion",
      "temperature monitoring",
      "Remote Process Supervision",
      "Heat treatment – furnace temperature monitoring"
    ],
    "baseModel": "PTC-8004",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model No",
            "PTC-8004"
          ],
          [
            "Description",
            "Micro Controller Based, Display"
          ],
          [
            "Display",
            "4-Digit, 7-Seg, 4-Inch”, Red LED Display"
          ],
          [
            "Size (mm)",
            "Display: 325 (H) x 630 (W) x 50 (D) mm"
          ],
          [
            "Range",
            "-999 to 9999 (selectable)"
          ],
          [
            "Input",
            "J/K, RTD : PT-100 ,0 To 10V DC, 0 To 20mA DC, 4 To 20mA DC ( Selectable)"
          ],
          [
            "Power Supply",
            "Single:- 100 To 250V AC, 50/60 Hz Approx 4VA"
          ],
          [
            "Protection Level (As per request)",
            "IP-65(Front side) AS per IS/IEC 60529:2001"
          ],
          [
            "Note",
            "Range & Decimal Point Selectable Reverse Scalling Possible"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet_PTC-80041699.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-jumbo-display-programmable-counters",
    "name": "Multispan Jumbo Display Programmable counters",
    "category": "process-control-instruments",
    "subCategory": "Jumbo Display Indicator",
    "image": "https://multispanindia.com/document/images/73715pc6006-regular.jpg",
    "shortDesc": "Model PC-6006 — Jumbo Display Indicator. Typical applications: Product Count Application.",
    "features": [],
    "applications": [
      "Product Count Application"
    ],
    "baseModel": "PC-6006",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "PC-6006"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Micro Controller Based, Single Side Display"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "6-Digit, 7-Segment LED Display 4” in red color"
          ],
          [
            "Size (mm)",
            "165 (H) X 577 (W) X 55 (D)"
          ],
          [
            "Input",
            "Proximity-NPN/PNP & Micro Switch (configurable)"
          ],
          [
            "Output",
            "1Relay-1C/O, 230V AC,5A"
          ],
          [
            "Power Supply",
            "100 TO 270V AC,50/60Hz,Approx 5VA"
          ],
          [
            "Reset",
            "Front and back side"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "sr.no",
          "Model",
          "Input",
          "Display",
          "Display Digit",
          "Output Relay"
        ],
        "rows": [
          [
            "1",
            "PC-6004-A2-00-S",
            "NPN/PNP Proximity",
            "Single Side",
            "4",
            ""
          ],
          [
            "2",
            "PC-6004-A2-00-D",
            "NPN/PNP Proximity",
            "Dual Side",
            "4",
            ""
          ],
          [
            "3",
            "PC-6004-A2-01-S",
            "NPN/PNP Proximity",
            "Single Side",
            "4",
            "1"
          ],
          [
            "4",
            "PC-6006-A2-00-S",
            "NPN/PNP Proximity",
            "Single Side",
            "6",
            ""
          ],
          [
            "5",
            "PC-6006-A2-01-S",
            "NPN/PNP Proximity",
            "Single Side",
            "6",
            "1"
          ],
          [
            "6",
            "RS-6004-A2-00-S",
            "RS-485 Modbus",
            "Single Side",
            "4",
            ""
          ],
          [
            "7",
            "RS-6006-A2-00-S",
            "RS-485 Modbus",
            "Single Side",
            "6",
            ""
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-jumbo-display-temperature-indicator",
    "name": "Multispan Jumbo Display Temperature indicator",
    "category": "process-control-instruments",
    "subCategory": "Jumbo Display Indicator",
    "image": "https://multispanindia.com/document/images/15796uti6004-regular.jpg",
    "shortDesc": "Model UTI-6004 — Jumbo Display Indicator.",
    "features": [],
    "applications": [],
    "baseModel": "UTI-6004",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model No",
            "UTI-6004"
          ],
          [
            "Description",
            "Micro Controller Based, Single Side Display"
          ],
          [
            "Display",
            "4-Digit, 7-Segment, 4-Inch in Red Led Display"
          ],
          [
            "Size (mm)",
            "Single display:- 165 (H) X 392 (W) X 55 (D)mm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Dual display:- 165 (H) X 392 (W) X 75 (D)mm"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Range",
            "J Type: 0 to 400°C K Type: 0 to 1200°C PT: -99 to 400°C PT.1: -99.9 to 400.0°C"
          ],
          [
            "Input",
            "J, K, PT, PT.1"
          ],
          [
            "Power Supply",
            "100 To 270V AC, 50/60 Hz, Approx 3VA"
          ],
          [
            "Protection Level (As per request)",
            "IP-65(Front side) AS per IS/IEC 60529:2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "sr.no",
          "Model",
          "Input",
          "Display",
          "Output Relay"
        ],
        "rows": [
          [
            "1",
            "UTI-6004-A2-00-S",
            "J/K/Pt-100",
            "Single Side",
            ""
          ],
          [
            "2",
            "UTI-6004-A2-01-S",
            "",
            "1"
          ],
          [
            "3",
            "UTI-6004-A2-02-S",
            "",
            "2"
          ],
          [
            "4",
            "UTI-6004-A2-00-D",
            "Dual Side",
            ""
          ],
          [
            "5",
            "UTI-6004-A2-03-S",
            "R type",
            "Single Side",
            ""
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/6712Datasheet_UTI-6004%20FINAL%20WITH%20UKCA.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-length-counter",
    "name": "Multispan Length Counter",
    "category": "programmable-timers-counters",
    "subCategory": "Functional Counters",
    "image": "https://multispanindia.com/document/images/49336lc-1046d-regular.png",
    "shortDesc": "Model LC-1046D — Functional Counters. Typical applications: Textile Industries, Pipe Extrusion Machine, Printing Machinery.",
    "features": [],
    "applications": [
      "Textile Industries",
      "Pipe Extrusion Machine",
      "Printing Machinery"
    ],
    "baseModel": "LC-1046D",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input",
            "NPN/PNP Proximity"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Micro Switch"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 6-Digit, 7-Segment, 0.56” Red"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Lower: 4-Digit, 7-Segment, 0.40” Green"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "SET/ENT, SHIFT, INC, RESET"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Memory",
            "Nonvolatile"
          ],
          [
            "Counting Direction",
            "UP/ DOWN"
          ],
          [
            "Reset Option",
            "Front Panel Reset"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Terminal Reset"
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 nos."
          ],
          [
            "Relay Type",
            "1 C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "5A, 230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "230V AC, 50Hz"
          ],
          [
            "Power Consumption (VA RATING)",
            "Approx 2.5 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Description",
          "Auxillary"
        ],
        "rows": [
          [
            "LC-1046D-B1-00",
            "Input: NPN/PNP Proximity Range: 0 to 999999 Meters, 0 to 999.9 MPM Output: 1 Relay 1C/O",
            "230V AC"
          ],
          [
            "LC-1046D-D1-00",
            "Input: NPN/PNP Proximity Range: 0 to 999999 Meters, 0 to 999.9 MPM Output: 1 Relay 1C/O",
            "24V DC"
          ],
          [
            "MMC-1000-A2-00",
            "Input: NPN/PNP Proximity Range: 0 to 999999 Meters, 0 to 999.9 MPM Output: 2 Relay 1C/O",
            "100 to 270V AC"
          ],
          [
            "MMC-1000-B1-01",
            "Input: Dual Channel NPN Encoder Range: 0 to 999999 Meters, 0 to 999.9 MPM Output: 1 Relay 1C/O",
            "230V AC"
          ],
          [
            "MMC-1000-B1-02",
            "Input: Dual Channel PNP Encoder Range: 0 to 999999 Meters, 0 to 999.9 MPM Output: 1 Relay 1C/O",
            "230V AC"
          ],
          [
            "MMC-1000-B1-03",
            "Input: NPN/PNP Single Channel Encoder Range: 0 to 999999 Meters, 0 to 999.9 MPM Output: 1 Relay 1C/O",
            "230V AC"
          ],
          [
            "MMC-1000-B1-04",
            "Input: NPN/PNP Single Channel Encoder Range: 0 to 999999 Meters, 0 to 999.9 MPM Output: 2 Relay 1C/O",
            "230V AC"
          ],
          [
            "LC-1048-M1-A2-00",
            "Input: NPN/PNP Proximity Range: 0 to 99999999 Meters, 0 to 999.9 MPM Output: 1 Relay 1C/O Comminication: RS-485 MODBUS",
            "100 to 270V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/LC-1046D3622.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-load-cell-controller",
    "name": "Multispan Load Cell Controller",
    "category": "process-control-instruments",
    "subCategory": "Load Cell Indicators",
    "image": "https://multispanindia.com/document/images/72115LD-1252A-M1-regular.jpg",
    "shortDesc": "Model LD-1252A-M1 — Load Cell Indicators. Typical applications: Industrial feeding system, Filling machine, Testing Equipments, and more.",
    "features": [],
    "applications": [
      "Industrial feeding system",
      "Filling machine",
      "Testing Equipments",
      "Pressure measurement",
      "Weight based batch control system",
      "Weight Indication"
    ],
    "baseModel": "LD-1252A-M1",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "LD-1252A-M1"
          ],
          [
            "Display",
            "Upper : 5-Digit,7-Seg 0.56” RED LED Lower : 5-Digit,7-Seg 0.56” WHITE LED"
          ],
          [
            "Size(mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Input",
            "0 to 20mV DC"
          ],
          [
            "Output",
            "1R-1C/O & 10V DC Excitation Voltage + 4 to 20 Retransmission + RS-485 Modbus"
          ],
          [
            "PowerSupply",
            "100-270VAC(SMPS)"
          ],
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condition"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Input",
          "Output Relay",
          "RS-485 Modbus",
          "Retransmission"
        ],
        "rows": [
          [
            "1",
            "LD-1252-A2-00",
            "0-20mV DC",
            "1",
            "",
            ""
          ],
          [
            "2",
            "LD-1252-A2-01",
            "2",
            "",
            ""
          ],
          [
            "3",
            "LD-1252-M1-A2-00",
            "1",
            "YES",
            ""
          ],
          [
            "4",
            "LD-1252-M1-A2-01",
            "2",
            "YES",
            ""
          ],
          [
            "5",
            "LD-1252A-A2-00A",
            "1",
            "",
            "YES"
          ],
          [
            "6",
            "LD-1252A-M1-A2-00A",
            "1",
            "YES",
            "YES"
          ],
          [
            "7",
            "LD-1252A-A2-01A",
            "0-30mV DC",
            "1",
            "",
            "YES"
          ],
          [
            "8",
            "LD-1252-A2-12",
            "2",
            "",
            ""
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/993103Datasheet%20LD%201252A-M1.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-load-sharing-relay",
    "name": "Multispan load sharing relay",
    "category": "protection-relays",
    "subCategory": "Load Sharing Relay",
    "image": "https://multispanindia.com/document/images/1010187_1773476828_56e301.jpg",
    "shortDesc": "Model LR-35 — Load Sharing Relay.",
    "features": [],
    "applications": [],
    "baseModel": "LR-35",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "LR-35"
          ],
          [
            "Power Supply",
            "100 - 270V AC,50/60 Hz,3VA"
          ],
          [
            "Input Sensor",
            "2 Micro Input"
          ],
          [
            "Indications",
            "LED 1 : Main"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LED 2 : Relay 1"
      },
      {
        "type": "divider",
        "text": "LED 3 : Relay 2"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Time Delay",
            "1 Sec"
          ],
          [
            "Output",
            "2 Relay,1C/O (NO-C-NC)"
          ],
          [
            "Output Rating",
            "5Amp,230V AC(Res.)"
          ],
          [
            "Dimension(mm)",
            "90(H) x 35(W) x 60(D)"
          ],
          [
            "Mounting",
            "Din Rail Mounting"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part code",
          "Size(mm)",
          "Input",
          "Output",
          "Aux. Supply"
        ],
        "rows": [
          [
            "LR-35-E3-00",
            "90(H) x 35(W) x 60(D)",
            "2 Microswitch",
            "2 Relay",
            "100-270V AC/DC"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-motor-protection-device",
    "name": "Multispan Motor Protection Device",
    "category": "protection-relays",
    "subCategory": "Motor Protection Relay - MPD",
    "image": "https://multispanindia.com/document/images/101695mpd-194-regular.jpg",
    "shortDesc": "Model MPD-194 — Motor Protection Relay - MPD. Typical applications: Electrical Control Panel, Submersible Pump, Road Construction Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Submersible Pump",
      "Road Construction Panel",
      "MCC Panel",
      "Industrial Chiller And HV AC System",
      "D.G. Set"
    ],
    "baseModel": "MPD-194",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø-3Wire / 3Ø-4Wire / 1Ø-2Wire"
          ],
          [
            "Current Input",
            "Up To 9999"
          ],
          [
            "Voltage",
            "30 To 320V AC"
          ],
          [
            "Input",
            "50 To 550V AC"
          ],
          [
            "System PF",
            "0.100 - 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ],
          [
            "Load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "No load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "RPM",
            "3600 RPM @ 60 Hz & 2 pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "kW Total",
            "0.000 - 9999 kW"
          ],
          [
            "kW Per Phase",
            "0.000 - 9999 kW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 kVA"
          ],
          [
            "kVA Per Phase",
            "0.000 - 9999 kVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 kVAr"
          ],
          [
            "kVAr Per Phase",
            "0.000 - 9999 kVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENERGY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "kWh Total",
            "000.000 - 999999999.999 kWh"
          ],
          [
            "kVAh Total",
            "000.000 - 999999999.999 kVAh"
          ],
          [
            "kVArh Total",
            "000.000 - 999999999.999 kVArh"
          ],
          [
            "Input",
            "PTC Thermistor"
          ],
          [
            "Setting for PTC",
            ""
          ],
          [
            "1. Sensor Short",
            "0-39 ohm"
          ],
          [
            "2. Sensor Healthy",
            "40 ohm - 4K ohm"
          ],
          [
            "3. Sensor Trip",
            "4.1K ohm - 5.5K ohm"
          ],
          [
            "4. Sensor Open",
            "5.6K ohm & Above"
          ],
          [
            "5. Sensor Cut in",
            "1.5K ohm - 1.8K ohm"
          ],
          [
            "Temperature range for Thermisto",
            "70°C to 180°C ( for PTC)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4 Digit,4 Line 0.50\" RED"
          ],
          [
            "Key",
            "PROGRAM , FLT, RST, UP, DOWN"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size",
            "98 (H) x 98 (W) x 61.5 (D) mm"
          ],
          [
            "Panel Cutout",
            "92 (H) x 92 (W) mm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "50 to 550V AC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 6 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "TIME PARAMETER:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power On Delay",
            "2.0 to 999.9 Sec"
          ],
          [
            "Initial Time Delay",
            "0.0 to 999.9 Sec"
          ],
          [
            "Trip Delay Time",
            "0.0 to 999.9 Sec"
          ],
          [
            "Reset Time",
            "0.0 to 999.9 Sec"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 Nos"
          ],
          [
            "Relay Type",
            "1st Relay ( NO - C - NC ) 2nd Relay ( NO - C - NC )"
          ],
          [
            "Rating",
            "1st Relay 10Amp, 250V AC 2nd Relay 10 Amp, 250V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ACCURACY:"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part No.",
          "Input Current",
          "Ampere Range"
        ],
        "rows": [
          [
            "MPD-194-M1-E2-N0",
            "Up to 9999 Amp Primary CT Selectable",
            "10mA to 5.00A"
          ],
          [
            "MPD-194-M1-E2-N7",
            "30A with DIN 30AX CT",
            "1 to 30.0A"
          ],
          [
            "MPD-194-M1-E2-N6",
            "60A with DIN 60AX CT",
            "2 to 60.0A"
          ],
          [
            "MPD-194-M1-E2-N8",
            "100A with DIN 100AX CT",
            "4 to 100A"
          ],
          [
            "MPD-194-M1-E2-60A",
            "60A with MCT 60A",
            "2 to 60.0A"
          ],
          [
            "MPD-194-M1-E2-125A",
            "125A with MCT 125A",
            "4 to 125A"
          ],
          [
            "MPD-194-M1-E2-250A",
            "250A with MCT 250A",
            "10A to 250A"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-motor-protection-device-mpd-198a",
    "name": "Multispan Motor Protection Device - MPD-198A",
    "category": "protection-relays",
    "subCategory": "Motor Protection Relay - MPD",
    "image": "https://multispanindia.com/document/images/627954_1787979869_892df7.jpg",
    "shortDesc": "Model MPD-198A — Motor Protection Relay - MPD. Typical applications: Electrical Control Panel, Submersible Pump, Road Construction Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Submersible Pump",
      "Road Construction Panel",
      "MCC Panel",
      "Industrial Chiller And HV AC System",
      "D.G. Set"
    ],
    "baseModel": "MPD-198A",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø-3Wire / 3Ø-4Wire / 1Ø-2Wire"
          ],
          [
            "Current Input",
            "Up To 9999"
          ],
          [
            "Voltage",
            "30 To 320V AC"
          ],
          [
            "Input",
            "50 To 550V AC"
          ],
          [
            "System PF",
            "-1.000 - 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ],
          [
            "Load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "No load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "RPM",
            "3600 RPM @ 60 Hz & 2 pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "kW Total",
            "0.000 - 9999 kW"
          ],
          [
            "kW Per Phase",
            "0.000 - 9999 kW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 kVA"
          ],
          [
            "kVA Per Phase",
            "0.000 - 9999 kVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 kVAr"
          ],
          [
            "kVAr Per Phase",
            "0.000 - 9999 kVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENERGY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "kWh Total",
            "000.000 - 999999999.999 kWh"
          ],
          [
            "kVAh Total",
            "000.000 - 999999999.999 kVAh"
          ],
          [
            "kVArh Total",
            "000.000 - 999999999.999 kVArh"
          ],
          [
            "Input",
            "PTC Thermistor"
          ],
          [
            "Setting for PTC",
            ""
          ],
          [
            "1. Sensor Short",
            "0-39 ohm"
          ],
          [
            "2. Sensor Healthy",
            "40 ohm - 4K ohm"
          ],
          [
            "3. Sensor Trip",
            "4.1K ohm - 5.5K ohm"
          ],
          [
            "4. Sensor Open",
            "5.6K ohm & Above"
          ],
          [
            "5. Sensor Cut in",
            "1.5K ohm - 1.8K ohm"
          ],
          [
            "Temperature range for Thermisto",
            "70°C to 180°C ( for PTC)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4 Digit,4 Line 0.50\" RED"
          ],
          [
            "Key",
            "PROGRAM , FLT, RST, UP, DOWN"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size",
            "98 (H) x 98 (W) x 61.5 (D) mm"
          ],
          [
            "Panel Cutout",
            "92 (H) x 92 (W) mm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "50 to 550V AC/DC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 6 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "TIME PARAMETER:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power On Delay",
            "2.0 to 999.9 Sec"
          ],
          [
            "Initial Time Delay",
            "0.0 to 999.9 Sec"
          ],
          [
            "Trip Delay Time",
            "0.0 to 999.9 Sec"
          ],
          [
            "Reset Time",
            "0.0 to 999.9 Sec"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 Nos"
          ],
          [
            "Relay Type",
            "1st Relay ( NO - C - NC ) 2nd Relay ( NO - C - NC )"
          ],
          [
            "Rating",
            "1st Relay 10Amp, 250V AC 2nd Relay 10 Amp, 250V AC"
          ],
          [
            "Analog Output",
            "4 To 20mA DC (±1% OFF FS)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ACCURACY:"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part No.",
          "Input Current",
          "Ampere Range"
        ],
        "rows": [
          [
            "MPD-198A-E9-01-P1",
            "Up to 9999 Amp Primary CT Selectable",
            "10mA to 5.00A"
          ],
          [
            "MPD-198A-E9-01-P2-30AX",
            "30A with DIN 30AX CT",
            "1 to 30.0A"
          ],
          [
            "MPD-198A-E9-01-P2-60AX",
            "60A with DIN 60AX CT",
            "2 to 60.0A"
          ],
          [
            "MPD-198A-E9-01-P2-100AX",
            "100A with DIN 100AX CT",
            "4 to 100A"
          ],
          [
            "MPD-198A-E9-01-P2-30A",
            "30A with MCT 30A",
            "1 to 30.0A"
          ],
          [
            "MPD-198A-E9-01-P2-125A",
            "125A with MCT 125A",
            "4 to 125A"
          ],
          [
            "MPD-198A-E9-01-P2-250A",
            "250A with MCT 250A",
            "10A to 250A"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-multi-channel-current-scanner",
    "name": "Multispan Multi Channel Current Scanner",
    "category": "process-control-instruments",
    "subCategory": "Scanners & Data Loggers",
    "image": "https://multispanindia.com/document/images/581377_1763547590_9a0930.jpg",
    "shortDesc": "Model MCS-63-860 — Scanners & Data Loggers. Typical applications: Road Construction Panel, Injection Moulding, Plastic Process Industry, and more.",
    "features": [],
    "applications": [
      "Road Construction Panel",
      "Injection Moulding",
      "Plastic Process Industry",
      "Feeder Panel",
      "Industrial Automation Panel"
    ],
    "baseModel": "MCS-63-860",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Current AC",
            "1 To 60 Amp."
          ],
          [
            "Burden",
            "< 0.2VA"
          ],
          [
            "Overload",
            "Upto 65A continuous"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CALCULATED PARAMETERS"
      },
      {
        "type": "divider",
        "text": "6 Different CT Current"
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEYS :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "3-Digit, 7-Seg, 0.36”, Red."
          ],
          [
            "Keys",
            "SET, INC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "76(H) x 28(W) x 118(D)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "COMMUNICATION SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Protocol",
            "Modbus RTU Serial"
          ],
          [
            "Standard",
            "RS - 485"
          ],
          [
            "Communication method",
            "2-Wire Half Duplex"
          ],
          [
            "Data frame",
            "N-8-0,N-8-1,N-8-2"
          ],
          [
            "Communication rate",
            "2400,4800,9600,19200, 38400"
          ],
          [
            "Slave Address",
            "1 to 127"
          ],
          [
            "Data type",
            "Integer, Float"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY POWER SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "24 V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "95 % RH Non - Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.No",
          "Model No",
          "No. of Channel",
          "Range"
        ],
        "rows": [
          [
            "1",
            "MCS-63-3-100-D1-00",
            "3",
            "100A AC"
          ],
          [
            "2",
            "MCS-63-360-D1-N0",
            "3",
            "60A AC"
          ],
          [
            "3",
            "MCS-63-460-D1-N0",
            "4",
            "60A AC"
          ],
          [
            "4",
            "MCS-63-660-D1-N0",
            "6",
            "60A AC"
          ],
          [
            "5",
            "MCS-63-860-D1-00",
            "8",
            "60A AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/9600Datasheet%20MCS%2063-860.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-multi-output-photo-electric-controller",
    "name": "Multispan Multi output Photo Electric Controller",
    "category": "programmable-timers-counters",
    "subCategory": "Photo Electric Controller",
    "image": "https://multispanindia.com/document/images/18776pflc-regular.jpg",
    "shortDesc": "Model PFLC-68 — Photo Electric Controller.",
    "features": [],
    "applications": [],
    "baseModel": "PFLC-68",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input",
            "Clutch Proxy"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Unwinding Motor Start Proxy"
      },
      {
        "type": "divider",
        "text": "Eye Mark Sensor Proxy"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "320 x 240 px Resistive Touch screen Display"
          ],
          [
            "Keys",
            "Reset"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "8-nos RLY-1 Horizontal Seal RLY-2 Vertical Seal RLY-3 Cutter RLY-4 Nitrogen Fill RLY-5 Batch Cutter RLY-6 Batch Coding RLY-7 Auger RLY-8 Unwinding"
          ],
          [
            "Relay Type",
            "NO-C"
          ],
          [
            "Rating",
            "5A, 230V AC/30V DC"
          ],
          [
            "Clutch & Brake Output",
            "24 V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 To 270V AC,50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 6 VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-multifunction-meter-3-line-display",
    "name": "Multispan Multifunction Meter - 3 Line Display",
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "image": "https://multispanindia.com/document/images/1723mdm-13-m1-regular.png",
    "shortDesc": "Model MFM-13-M1 — Digital Multi-Function Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "MFM-13-M1",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø-3Wire / 3Ø-4Wire / 1Ø-2Wire"
          ],
          [
            "CT Primary",
            "Upto 6000A (Programmable)"
          ],
          [
            "CT Secondary",
            "5 Amp/1 Amp selectable"
          ],
          [
            "PT Primary",
            "100V to 520kV (Programmable)"
          ],
          [
            "PT Secondary",
            "100V to 520V (L-L) (Programmable)"
          ],
          [
            "PF Avg. & Per Phase",
            "0.100 - 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ],
          [
            "Load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "No load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "RPM",
            "3600 RPM @ 60 Hz & 2-Pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "KW Total",
            "0.000 - 9999 MW"
          ],
          [
            "kW Per Phase",
            "0.000 - 9999 MW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 MVA"
          ],
          [
            "kVA Per Phase",
            "0.000 - 9999 MVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 MVAr"
          ],
          [
            "kVAr Per Phase",
            "0.000 - 9999 MVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENERGY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "kWH Total",
            "000.000 - 999999999.999 kWh"
          ],
          [
            "kVAh Total",
            "000.000 - 999999999.999 kVAh"
          ],
          [
            "kVArh Total",
            "000.000 - 999999999.999 kVArh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4-Digit, 3-Line 0.57\" RED"
          ],
          [
            "Key",
            "SET/ENT,VAF,P/E, INC, DEC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC/DC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 4 VA @ 230V AC MAX"
          ],
          [
            "ACCURACY",
            "Class 0.5 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529: 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Supply"
        ],
        "rows": [
          [
            "MFM-13-M1-E3-01-32",
            "Network Selection :3Ø3W/4W, 1Ø2W PT Primary: 100V to 520kV (Programmable) PT Secondary: 100V to 520V (L-L) (Programmable)",
            "CT Primary : Upto 6000A CT Secondary : 5A & 1A AC",
            "100 to 270V AC/DC"
          ],
          [
            "MFM-13-M1-A2-02-32",
            "CT Input: 30A with DIN 30AX CT",
            "100 to 270V AC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "MFM-13-M1-A2-03-32",
            "CT Input: 60A with DIN 60AX CT"
          ],
          [
            "MFM-13-M1-A2-04-32",
            "CT Input: 100A with DIN 100AX CT"
          ],
          [
            "Note:",
            "Modbus Available on Request"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/DATASHEET_MFM-13-M110339.pdf",
    "brand": "multispan",
    "featured": true
  },
  {
    "id": "multispan-multifunction-meter-3-line-display-mfm-13m1",
    "name": "Multispan Multifunction Meter - 3 Line Display-MFM-13M1",
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "image": "https://multispanindia.com/document/images/643482_1777973652_c953b7.jpg",
    "shortDesc": "Model MFM 13-M1 — Digital Multi-Function Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "MFM 13-M1",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø-3Wire / 3Ø-4Wire / 1Ø-2Wire"
          ],
          [
            "CT Primary",
            "Upto 9999A (Programmable)"
          ],
          [
            "CT Secondary",
            "5 Amp/1 Amp selectable"
          ],
          [
            "PT Primary",
            "100V to 520kV (Programmable)"
          ],
          [
            "PT Secondary",
            "100V to 520V (L-L) (Programmable)"
          ],
          [
            "PF Avg. & Per Phase",
            "0.100 - 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ],
          [
            "Load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "No load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "RPM",
            "3600 RPM @ 60 Hz & 2-Pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "KW Total",
            "0.000 - 9999 MW"
          ],
          [
            "kW Per Phase",
            "0.000 - 9999 MW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 MVA"
          ],
          [
            "kVA Per Phase",
            "0.000 - 9999 MVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 MVAr"
          ],
          [
            "kVAr Per Phase",
            "0.000 - 9999 MVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENERGY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "kWH Total",
            "000.000 - 999999999.999 kWh"
          ],
          [
            "kVAh Total",
            "000.000 - 999999999.999 kVAh"
          ],
          [
            "kVArh Total",
            "000.000 - 999999999.999 kVArh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4-Digit, 3-Line 0.57\" RED"
          ],
          [
            "Key",
            "PRG, VAF, PF, POWER , ENERGY"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "98 (H) x 98 (W) x 46 (D) mm"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 300V AC/DC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 4 VA @ 230V AC MAX"
          ],
          [
            "ACCURACY",
            "Class 0.5 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529: 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Supply"
        ],
        "rows": [
          [
            "MFM-13-E5-00",
            "Network Selection :3Ø3W/4W, 1Ø2W PT Primary: 100V to 520kV (Programmable) PT Secondary: 100V to 520V (L-L) (Programmable)",
            "CT Primary : Upto 9999A CT Secondary : 5A & 1A AC",
            "100 to 300V AC/DC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "MFM-13-E5-03",
            "CT Input: 60A With DIN 60AX"
          ],
          [
            "MFM-13-E5-04",
            "CT Input: 100A with DIN 100AX"
          ],
          [
            "MFM-13-E5-250A",
            "CT Input: 250A with MCT 250A CT"
          ],
          [
            "Note:",
            "Modbus Available on Request"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-multifunction-meter-4-line-display",
    "name": "Multispan Multifunction Meter - 4 Line Display",
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "image": "https://multispanindia.com/document/images/709097_1778564422_78824b.jpg",
    "shortDesc": "Model PQM-14 — Digital Multi-Function Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "PQM-14",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø-4Wire / 1Ø 2Wire"
          ],
          [
            "CT Primary",
            "up to 9999A (Programmable)"
          ],
          [
            "CT Secondary",
            "5 Amp/1 Amp selectable"
          ],
          [
            "PT Primary",
            "100V to 520kV (Programmable)"
          ],
          [
            "PT Secondary",
            "100V to 520V (L-L) (Programmable)"
          ],
          [
            "PF Avg. & Per Phase",
            "0.100 - 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ],
          [
            "Load hours",
            "9999.59 Hrs/Min"
          ],
          [
            "No load hours",
            "9999.59 Hrs/Min"
          ],
          [
            "RPM",
            "3600 RPM @ 60 Hz & 2 pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "KW Total",
            "0.000 - 9999 MW"
          ],
          [
            "kW Per Phase",
            "0.000 - 9999 MW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 MVA"
          ],
          [
            "kVA Per Phase",
            "0.000 - 9999 MVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 MVAr"
          ],
          [
            "kVAr Per Phase",
            "0.000 - 9999 MVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENERGY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "kWh Total",
            "000.000 - 99999999 MWh"
          ],
          [
            "kVAh Total",
            "000.000 - 99999999 MVAh"
          ],
          [
            "kVArh Total",
            "000.000 - 99999999 MVArh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Key",
            "PROGRAM, VAF, POWER, ENERGY"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 300V AC/DC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 3 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "COMMUNICATION"
      },
      {
        "type": "divider",
        "text": "RS-485 MODBUS"
      },
      {
        "type": "divider",
        "text": "ACCURACY"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "98 (H) x 98 (W) x 46 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Supply"
        ],
        "rows": [
          [
            "PQM-14-E5-00",
            "NPrimary 100V to 520kV Secondary 100V to 520 (L-L Programmable)",
            "5A to 9999A (Programmable) Secondary : 5A,1A (Programmable)",
            "100 to 300V AC/DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "PQM-14-M1-E5-00"
      },
      {
        "type": "kv",
        "rows": [
          [
            "PQM-14-M1-E5-06",
            "CT Input : 60A with DIN 60AX CT"
          ],
          [
            "Note:",
            "Modbus Available on Request"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-multifunction-meter-avh-14-m1",
    "name": "Multispan Multifunction Meter - AVH 14-M1",
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "image": "https://multispanindia.com/document/images/881915_1784276744_a30285.jpg",
    "shortDesc": "Model AVH 14-M1 — Digital Multi-Function Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "AVH 14-M1",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø-3/4Wire / 1Ø 2Wire"
          ],
          [
            "CT Primary",
            "up to 6000A (Programmable)"
          ],
          [
            "CT Secondary",
            "5 Amp/1 Amp selectable"
          ],
          [
            "PT Primary",
            "100V to 520kV (Programmable)"
          ],
          [
            "PT Secondary",
            "100V to 520V (L-L) (Programmable)"
          ],
          [
            "PF Avg. & Per Phase",
            "0.100 - 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ],
          [
            "Load hours",
            "9999.59 Hrs/Min"
          ],
          [
            "No load hours",
            "9999.59 Hrs/Min"
          ],
          [
            "RPM",
            "3600 RPM @ 60 Hz & 2 pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "kW Total",
            "0.000 - 9999 MW"
          ],
          [
            "kW Per Phase",
            "0.000 - 9999 MW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 MVA"
          ],
          [
            "kVA Per Phase",
            "0.000 - 9999 MVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 MVAr"
          ],
          [
            "kVAr Per Phase",
            "0.000 - 9999 MVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENERGY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "WH Total",
            "000.000 - 999999 MWh"
          ],
          [
            "Vah Total",
            "000.000 - 999999999.999 MVAh"
          ],
          [
            "Varh Total",
            "000.000 - 999999999.999 MVArh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Display",
            "Upper",
            "8 Digit, 7 Seg 0.40”,RED LED"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "Lower",
            "4 Digit, 3 Line 7 Seg 0.39”,RED"
          ],
          [
            "Key",
            "PROGRAM, VAF, POWER, ENERGY"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC/DC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 4 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "COMMUNICATION"
      },
      {
        "type": "divider",
        "text": "RS-485 MODBUS"
      },
      {
        "type": "divider",
        "text": "ACCURACY"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Supply"
        ],
        "rows": [
          [
            "AVH-14-E3-N1",
            "Network Selection :3Ø3W/4W, 1Ø2W Primary Voltage : 100V to 520KV AC Secondary Voltage : 100V to 520V AC",
            "CT Primary : Upto 6000A CT Secondary : 5A/1A Selectable",
            "100 to 270V AC/DC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "AVH-14-E3-N3",
            "CT Input: 30A with DIN 30AX CT"
          ],
          [
            "AVH-14-E3-N2",
            "CT Input: 60A with DIN 60AX CT"
          ],
          [
            "AVH-14-E3-N4",
            "CT Input: 100A with DIN 100AX CT"
          ],
          [
            "Note:",
            "Modbus Available on Request"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-multifunction-meter-thd-imp-exp",
    "name": "Multispan Multifunction Meter - THD & IMP-EXP",
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "image": "https://multispanindia.com/document/images/67230tuyte.png",
    "shortDesc": "Model AVH-16 — Digital Multi-Function Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "AVH-16",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø-3Wire/4Wire / 1Ø 2Wire"
          ],
          [
            "CT Primary",
            "Up to 9999A (Programmable)"
          ],
          [
            "CT Secondary",
            "5 Amp/1 Amp selectable"
          ],
          [
            "PT Primary",
            "100V to 520kV (Programmable)"
          ],
          [
            "PT Secondary",
            "100V to 520V (L-L) (Programmable)"
          ],
          [
            "PF Avg. & Per Phase",
            "0.100 - 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ],
          [
            "Load hours",
            "9999.59 Hrs/Min"
          ],
          [
            "No load hours",
            "9999.59 Hrs/Min"
          ],
          [
            "On Hour",
            "9999 Hour"
          ],
          [
            "RPM",
            "3600 RPM @ 60 Hz & 2 pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "KW Total",
            "0.000 - 9999 MW"
          ],
          [
            "kW Per Phase",
            "0.000 - 9999 MW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 MVA"
          ],
          [
            "kVA Per Phase",
            "0.000 - 9999 MVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 MVAr"
          ],
          [
            "kVAr Per Phase",
            "0.000 - 9999 MVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENERGY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Import Kwh",
            "000.000 - 99999999 MWh"
          ],
          [
            "Export Kwh",
            "000.000 - 99999999 MWh"
          ],
          [
            "Net Kwh",
            "000.000 - 99999999 MWh"
          ],
          [
            "Total Kwh",
            "000.000 - 99999999 MWh"
          ],
          [
            "Kvah Total",
            "000.000 - 99999999 MVAh"
          ],
          [
            "Import Kvarh",
            "000.000 - 99999999 MVArh"
          ],
          [
            "Export Kvarh",
            "000.000 - 99999999 MVArh"
          ],
          [
            "Lag Kvarh",
            "000.000 - 99999999 MVArh"
          ],
          [
            "Lead Kvarh",
            "000.000 - 99999999 MVArh"
          ],
          [
            "Total Kvarh",
            "000.000 - 99999999 MVArh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Display",
            "Upper",
            "8 Digit, 7 Seg 0.40”,RED LED"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "Lower",
            "4 Digit, 3 Line 7 Seg 0.40”,RED"
          ],
          [
            "Key",
            "PROGRAM, VAF, POWER, ENERGY, THD%"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC/DC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 4 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "COMMUNICATION"
      },
      {
        "type": "divider",
        "text": "RS-485 MODBUS"
      },
      {
        "type": "divider",
        "text": "ACCURACY"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Supply"
        ],
        "rows": [
          [
            "AVH-16-E3-N0",
            "Network Selection :3Ø3W/4W, 1Ø2W PT Primary: 100V to 520kV (Programmable) PT Secondary: 100V to 520V (L-L) (Programmable)",
            "CT Primary : Upto 9999A CT Secondary : 5A & 1A AC",
            "100 to 270V AC/DC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "AVH-16-E3-N2",
            "CT Input: 60A with DIN 60AX CT"
          ],
          [
            "AVH-16-E3-N3",
            "CT Input: 30A with DIN 30AX CT"
          ],
          [
            "AVH-16-E3-N4",
            "CT Input: 100A with DIN 100AX CT"
          ],
          [
            "Note:",
            "Modbus Available on Request"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet_AVH-162016.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-multifunction-meter-thd-imp-exp-avh-16-m1",
    "name": "Multispan Multifunction Meter - THD & IMP-EXP-AVH-16+-M1",
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "image": "https://multispanindia.com/document/images/267953_1776679568_6db28d.jpg",
    "shortDesc": "Model AVH 16+-M1 — Digital Multi-Function Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "AVH 16+-M1",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø-3Wire/4Wire / 1Ø 2Wire"
          ],
          [
            "CT Primary",
            "Up to 9999A (Programmable)"
          ],
          [
            "CT Secondary",
            "5 Amp/1 Amp selectable"
          ],
          [
            "PT Primary",
            "100V to 520kV (Programmable)"
          ],
          [
            "PT Secondary",
            "100V to 520V (L-L) (Programmable)"
          ],
          [
            "PF Avg. & Per Phase",
            "0.100 - 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ],
          [
            "Load hours",
            "9999.59 Hrs/Min"
          ],
          [
            "No load hours",
            "9999.59 Hrs/Min"
          ],
          [
            "On Hour",
            "9999 Hour"
          ],
          [
            "RPM",
            "3600 RPM @ 60 Hz & 2 pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "KW Total",
            "0.000 - 9999 MW"
          ],
          [
            "kW Per Phase",
            "0.000 - 9999 MW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 MVA"
          ],
          [
            "kVA Per Phase",
            "0.000 - 9999 MVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 MVAr"
          ],
          [
            "kVAr Per Phase",
            "0.000 - 9999 MVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENERGY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Import Kwh",
            "000.000 - 99999999 MWh"
          ],
          [
            "Export Kwh",
            "000.000 - 99999999 MWh"
          ],
          [
            "Net Kwh",
            "000.000 - 99999999 MWh"
          ],
          [
            "Total Kwh",
            "000.000 - 99999999 MWh"
          ],
          [
            "Kvah Total",
            "000.000 - 99999999 MVAh"
          ],
          [
            "Import Kvarh",
            "000.000 - 99999999 MVArh"
          ],
          [
            "Export Kvarh",
            "000.000 - 99999999 MVArh"
          ],
          [
            "Lag Kvarh",
            "000.000 - 99999999 MVArh"
          ],
          [
            "Lead Kvarh",
            "000.000 - 99999999 MVArh"
          ],
          [
            "Total Kvarh",
            "000.000 - 99999999 MVArh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Display",
            "Upper",
            "8 Digit, 7 Seg 0.40”,RED LED"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "Lower",
            "4 Digit, 3 Line 7 Seg 0.40”,RED"
          ],
          [
            "Key",
            "PROGRAM, VAF, POWER, ENERGY, THD%"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC/DC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 4 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "COMMUNICATION"
      },
      {
        "type": "divider",
        "text": "RS-485 MODBUS"
      },
      {
        "type": "divider",
        "text": "ACCURACY"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "98 (H) x 98 (W) x 61.5 (D) mm"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-multifunction-timer",
    "name": "Multispan Multifunction Timer",
    "category": "programmable-timers-counters",
    "subCategory": "Programmable Timer",
    "image": "https://multispanindia.com/document/images/16798mdt-17u-regular.jpg",
    "shortDesc": "Model MDT-17U — Programmable Timer. Typical applications: Electrical Appliances, Control of Lights, Fans, and Heaters, Automation panels, and more.",
    "features": [],
    "applications": [
      "Electrical Appliances",
      "Control of Lights, Fans, and Heaters",
      "Automation panels",
      "Special purpose machine",
      "Air conditioning - HVAC"
    ],
    "baseModel": "MDT-17U",
    "specTables": [
      {
        "type": "divider",
        "text": "Input"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input",
            "A1 & 25 Terminal Potential Free Contact"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LED Indication"
      },
      {
        "type": "kv",
        "rows": [
          [
            "LED",
            "Main LED, Relay LED"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "SUPPLY VOLTAGE"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Auxiliary Supply",
            "12 to 240V DC & 20 to 240V AC, 50/60Hz"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay contact",
            "1 Relay 1C/O"
          ],
          [
            "Contact Rating",
            "5@250V AC, Resistive Load"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Environmental Characteristics"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 70°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ],
          [
            "Protection (As per Request)",
            "IP-65 (Front Side)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Mechanical Characteristics"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Bezel (HXW)",
            "90 x 17.5"
          ],
          [
            "Depth of Installation",
            "62"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part No.",
          "Input",
          "Relay",
          "Power Supply"
        ],
        "rows": [
          [
            "MDT-17U-00",
            "Start Pulse M/S",
            "1",
            "12 to 240V DC & 20V to 240V AC"
          ],
          [
            "MDT-17U-51",
            "Start Pulse M/S",
            "1",
            "12 to 240V DC & 20V to 240V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet_MDT-17U11374.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-on-off-delay-timer-universal-supply-and-time-range-di-17",
    "name": "Multispan On- Off Delay timer- Universal Supply and Time Range- DI-17",
    "category": "programmable-timers-counters",
    "subCategory": "Din Rail Timer - Electronics Time Relay",
    "image": "https://multispanindia.com/document/images/752621_1784884800_0051cd.jpg",
    "shortDesc": "Model DI-17 — Din Rail Timer - Electronics Time Relay.",
    "features": [],
    "applications": [],
    "baseModel": "DI-17",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Specification"
          ],
          [
            "Power Supply",
            "24V AC/DC or 230V AC, 50/60 Hz"
          ],
          [
            "Output",
            "1 Relay O/P (1 C/O, 5A 230 VAC)"
          ],
          [
            "Time Range",
            "0.5 sec to 30 Sec/Min/hour"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-onoff-delay-timer",
    "name": "Multispan On/Off Delay timer",
    "category": "programmable-timers-counters",
    "subCategory": "Din Rail Timer - Electronics Time Relay",
    "image": "https://multispanindia.com/document/images/92041dt-60s1.png",
    "shortDesc": "Model DT-60S — Din Rail Timer - Electronics Time Relay.",
    "features": [],
    "applications": [],
    "baseModel": "DT-60S",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Specification"
          ],
          [
            "Power Supply",
            "415 V AC ±20%, 50 Hz"
          ],
          [
            "Output",
            "1-Relay O/P (1-C/O, 5A 230 VAC Resistive Load)"
          ],
          [
            "Time Range",
            "0 to 60 SEC (For DT 60S)"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/531604DT-60s.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-panel-mount-earth-leakage-relay",
    "name": "Multispan Panel Mount Earth Leakage Relay",
    "category": "protection-relays",
    "subCategory": "Earth Leakage Relay",
    "image": "https://multispanindia.com/document/images/82557elr-19n-regular.jpg",
    "shortDesc": "Model ELR-19N — Earth Leakage Relay. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "ELR-19N",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Current",
            "30 mA To 30.00 Amp AC from CBCT"
          ],
          [
            "Display Currant Range",
            "0.030 To 30.00 Amp AC"
          ],
          [
            "Resolution",
            "If Current in mA = 0.001 A If Current in 10A Above = 0.01A"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEYS :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 4-Digit ,7-Seg, 0.56”, Red Lower: 4-Digit ,7-Seg, 0.56”,White"
          ],
          [
            "Keys",
            "SET, RST, INC/TEST, DEC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) X 96 (W) X 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 Nos."
          ],
          [
            "Relay Type",
            "(NO-C-NC) (NO-C-NC)"
          ],
          [
            "Rating",
            "10A,230V AC Resistive Load"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 To 270 V AC/DC,50/60Hz"
          ],
          [
            "Power Consumption (VA Rating)",
            "4VA @ 230 VAC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Range",
          "Set by",
          "Input",
          "Output",
          "Supply"
        ],
        "rows": [
          [
            "ELR-19-A2-00",
            "30mA AC to 30A AC",
            "Keypdad",
            "CBCT",
            "1 Relay",
            "100-270V AC"
          ],
          [
            "ELR-11-A2-00",
            "30mA AC to 30A AC",
            "Knob",
            "CBCT",
            "1 Relay",
            "100-270V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/ELR-19N6706.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-panel-mount-earth-leakage-relay-elr-11",
    "name": "Multispan Panel Mount Earth Leakage Relay - ELR 11",
    "category": "protection-relays",
    "subCategory": "Earth Leakage Relay",
    "image": "https://multispanindia.com/document/images/985159_1781606747_38e109.jpg",
    "shortDesc": "Model ELR-11 — Earth Leakage Relay. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "ELR-11",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Current",
            "30 mA To 30.00 Amp AC from CBCT"
          ],
          [
            "Display Currant Range",
            "0.030 To 30.00 Amp AC"
          ],
          [
            "Resolution",
            "If Current in mA = 0.001 A If Current in 10A Above = 0.01A"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEYS :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4-Digit ,7-Seg, 0.8”, Red"
          ],
          [
            "Keys",
            "TEST, I n A , t sec , RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) X 96 (W) X 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 Nos."
          ],
          [
            "Relay Type",
            "(NO-C-NC) (NO-C-NC)"
          ],
          [
            "Rating",
            "10A,230V AC Resistive Load"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 To 270 V AC,50/60Hz"
          ],
          [
            "Power Consumption (VA Rating)",
            "4VA @ 230 VAC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Range",
          "Set by",
          "Input",
          "Output",
          "Supply"
        ],
        "rows": [
          [
            "ELR-11-A2-00",
            "30mA AC to 30A AC",
            "Knob",
            "CBCT",
            "2 Relay",
            "100-270V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/ELR-11349372.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-panel-mount-earth-to-neutral-relay",
    "name": "Multispan (Panel Mount) Earth to Neutral Relay",
    "category": "protection-relays",
    "subCategory": "Earth to Neutral Relay",
    "image": "https://multispanindia.com/document/images/10757en19n-regular.jpg",
    "shortDesc": "Model EN-19N — Earth to Neutral Relay. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "EN-19N",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Voltage",
            "0 To 10 V AC"
          ],
          [
            "Display Voltage Range",
            "0.00 To 10.00 V AC"
          ],
          [
            "Resolution",
            "0.01 V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEYS :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 4 Digit , 7 Seg. 0.56” Red Lower: 4 Digit , 7 Seg. 0.56”Green"
          ],
          [
            "Keys",
            "SET, ENT/RST, INC, DEC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96(H) X 96(W) X 54(D)"
          ],
          [
            "Panel Cutout",
            "92(H) X 92(W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 Nos."
          ],
          [
            "Relay Type",
            "1 C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "10A,230V AC Resistive Load"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 To 270 V AC"
          ],
          [
            "Power Consumption (VA Rating)",
            "4VA @ 230 VAC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "UP to 95% RH (non-condensing)"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Mounting",
          "Size",
          "Input",
          "Range",
          "Output",
          "Supply",
          "Communication"
        ],
        "rows": [
          [
            "EN-19N-A2-00",
            "Panel",
            "96(H)x96(W)x54(D) mm",
            "AC Voltage",
            "0-10V AC",
            "1R 1C/O",
            "100-270V AC",
            "RS-485 MODBUS"
          ],
          [
            "EN-63-A2-00",
            "Din Rail",
            "76(H)x28(W)x85(D) mm",
            "AC Voltage",
            "0-10V AC",
            "1R 1C/O",
            "100-270V AC",
            ""
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/EN-19N3911.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-panel-mount-multifunction-3-phase-protection-relay",
    "name": "Multispan (Panel Mount)  Multifunction 3 Phase Protection Relay",
    "category": "protection-relays",
    "subCategory": "Motor Protection Relay",
    "image": "https://multispanindia.com/document/images/63858mpd-192-regular.jpg",
    "shortDesc": "Model MPD-192 — Motor Protection Relay. Typical applications: Electrical Control Panel, Submersible Pump, Road Construction Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Submersible Pump",
      "Road Construction Panel",
      "MCC Panel",
      "Industrial Chiller And HV AC System",
      "D.G. Set"
    ],
    "baseModel": "MPD-192",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT:"
      },
      {
        "type": "divider",
        "text": "Voltage AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct Voltage AC",
            "30 to 300V(L - N) 50 to 520V(L - L)"
          ],
          [
            "Burden",
            "< 0.2VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Current AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Primary CT Ratio",
            "5 to 6000 Amp selectable"
          ],
          [
            "Secondary Current AC",
            "0.1 to 5 Amp"
          ],
          [
            "Burden",
            "< 0.2VA"
          ],
          [
            "Overload",
            "Up to 6A continuous"
          ],
          [
            "Frequency",
            "45.0 to 65.0 Hz"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "3 Digit, 3 Line 7 Seg 0.56”, RED LED"
          ],
          [
            "Keys",
            "Scroll, SET, RST, INC, DEC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) X 96 (W) X 54 (D) mm"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W) mm"
          ],
          [
            "Network Selection",
            "3 Phase - 4 Wire,3 Phase - 3 Wire"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "TRIP SETTING:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Under Current",
            "0.00 to CTR"
          ],
          [
            "Over Current",
            "0.00 to CTR"
          ],
          [
            "Under Voltage",
            "50 to 520V For 3Ø - 3W 30 to 300V For 3Ø - 4W"
          ],
          [
            "Over Voltage",
            "50 to 550V For 3Ø - 3W 30 to 330V For 3Ø - 4W"
          ],
          [
            "Over / Under Frequency",
            "45.0 to 65.0 Hz"
          ],
          [
            "Short Circut",
            "1 - 9 Scale"
          ],
          [
            "Lock Rotor Point",
            "0.5 to 9.0 Scale"
          ],
          [
            "Unbalance",
            "5 - 60%"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "TIME PARAMETER:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power On Delay",
            "0 to 99 Sec"
          ],
          [
            "Initial Time Delay",
            "0 to 99 Sec"
          ],
          [
            "Trip Delay Time(Voltage, Current, Frequency, SSP, Unbalance)",
            "0 to 999 Sec"
          ],
          [
            "Scrolling Time",
            "1 to 99 Sec"
          ],
          [
            "Reset Time",
            "0 to 99 Sec"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 Nos"
          ],
          [
            "Relay Type",
            "1st Relay ( NO - C - NC ) 2nd Relay ( NO - C )"
          ],
          [
            "Rating",
            "1st Relay 10Amp, 230V AC (Resistive Load) 2nd Relay 5 Amp (With Simultaneous Actuation)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC/DC, 50/60Hz"
          ],
          [
            "Power Consumption",
            "3VA @ 230 AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "95 % RH Non-Condensing"
          ],
          [
            "Protection Level (As Per request)",
            "IP-65 (Front side As per IS/IEC 60529 : 2001)"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Voltage Input",
          "Ampere Input",
          "Other Input",
          "Supply"
        ],
        "rows": [
          [
            "MPD-192-E3-N0",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "60mA to 5A AC CT Selectable, CT Selectable up to 6000/5",
            "",
            "100-270V AC/DC"
          ],
          [
            "MPD-192-E2-N0",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "60mA to 5A AC CT Selectable, CT Selectable up to 6000/5",
            "",
            "50-550V AC"
          ],
          [
            "MPD-19EL-E3-N0",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "60mA to 5A AC CT Selectable, CT Selectable up to 6000/5",
            "ELR CBCT",
            "100-270V AC/DC"
          ],
          [
            "MPD-192-E3-N7",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "Fixed Multispan 30A- 3 Ph CT Module",
            "",
            "100-270V AC/DC"
          ],
          [
            "MPD-192-E3-N6",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "Fixed Multispan 60A- 3 Ph CT Module",
            "",
            "100-270V AC/DC"
          ],
          [
            "MPD-192-E3-N8",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "Fixed Multispan 125A- 3 Ph CT Module",
            "",
            "100-270V AC/DC"
          ],
          [
            "MPD-19EF-E3-N0",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "60mA to 5A AC CT Selectable, CT Selectable up to 6000/5",
            "EFR CBCT",
            "100-270V AC/DC"
          ],
          [
            "MPD-192-M1-E3-N0",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "60mA to 5A AC CT Selectable, CT Selectable up to 6000/5",
            "",
            "100-270V AC/DC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/MPD%201927891.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-phase-sequence-relay",
    "name": "Multispan Phase Sequence Relay",
    "category": "protection-relays",
    "subCategory": "Phase Sequence Relay",
    "image": "https://multispanindia.com/document/images/43616psr-17-regular.jpg",
    "shortDesc": "Model PSR-17 — Phase Sequence Relay. Typical applications: Electrical Control Panel, Submersible Pump, Road Construction Panel, and more.",
    "features": [],
    "applications": [
      "Electrical Control Panel",
      "Submersible Pump",
      "Road Construction Panel",
      "MCC Panel",
      "D.G. Set"
    ],
    "baseModel": "PSR-17",
    "specTables": [
      {
        "type": "divider",
        "text": "SUPPLY VOLTAGE"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Voltage",
            "154 to 500V AC,3Ø3W"
          ],
          [
            "Burden",
            "2VA @ 415V AC Max"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Tripping Parameters"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Phase Sequence",
            "500ms"
          ],
          [
            "Phase Loss",
            "500ms"
          ],
          [
            "Phase Asymmetry",
            "5 Second 40V Fix"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LED Indication"
      },
      {
        "type": "divider",
        "text": "Phase Sequence"
      },
      {
        "type": "divider",
        "text": "Phase Loss"
      },
      {
        "type": "divider",
        "text": "Phase Asymmetry"
      },
      {
        "type": "divider",
        "text": "OUTPUT"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 Relay 1C/O, 5A, 230V AC (Resistive Load)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Dimensions"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting",
            "Din Rail Mounting"
          ],
          [
            "Bezel (HXW)",
            "90 x 17.5 mm"
          ],
          [
            "Depth of Installation",
            "62 mm"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Data%20sheet%20PSR%20179947.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-pid-controller-modules-2-output",
    "name": "Multispan PID Controller Modules-2 Output",
    "category": "temperature-controller",
    "subCategory": "PID Controller Modules",
    "image": "https://multispanindia.com/document/images/54918utc-1x-2x-regular.jpg",
    "shortDesc": "Model UTC-1X/2X — PID Controller Modules. Typical applications: Packaging Machinery, Extrusion Machinery, Furnace & Boilers, and more.",
    "features": [],
    "applications": [
      "Packaging Machinery",
      "Extrusion Machinery",
      "Furnace & Boilers",
      "Ovens & Incubators",
      "Food Industry"
    ],
    "baseModel": "UTC-1X/2X",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Input Types",
            "Input",
            "Range"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "J",
            "0 to 600°C"
          ],
          [
            "K",
            "0 to 1200°C"
          ],
          [
            "PT-100",
            "-99 to 400°C"
          ],
          [
            "PT.1",
            "-99.9 to 400.0°C"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "76 (H) x 28 (W) x 85 (D)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 nos."
          ],
          [
            "Relay Type",
            "1 C/O (NO-C)"
          ],
          [
            "Rating",
            "5A, 230V AC"
          ],
          [
            "Modbus Communication",
            "RS-485"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "24V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/828717Datasheet%20UTC%201X,%20UTC%202X.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-pid-controller-with-ampere-indication-1-output",
    "name": "Multispan PID Controller with Ampere Indication-1 OUTPUT",
    "category": "temperature-controller",
    "subCategory": "PID Controller with Ampere Indication",
    "image": "https://multispanindia.com/document/images/1055498_1788254818_60c684.jpg",
    "shortDesc": "Model PID-2301-1C — PID Controller with Ampere Indication. Typical applications: Packaging Machinery, Extrusion Machinery, Furnace & Boilers, and more.",
    "features": [],
    "applications": [
      "Packaging Machinery",
      "Extrusion Machinery",
      "Furnace & Boilers",
      "Ovens & Incubators",
      "Food Industry"
    ],
    "baseModel": "PID-2301-1C",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Input Types",
            "Input",
            "Range"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "J",
            "0 to 600°C"
          ],
          [
            "K",
            "0 to 900°C"
          ],
          [
            "1 CT",
            "0.0 to 60.0 A"
          ],
          [
            "Resolution",
            "J,K = 1°C"
          ],
          [
            "Indication Accuracy",
            "±0.5% of FS ± 1°C"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(FS:- full scale)"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 3 digit, 7 seg 0.70” white LED"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Middle: 3 digit, 7 seg, 0.39” green LED"
      },
      {
        "type": "divider",
        "text": "Lower: 3 digit, 7 seg, 0.33” red LED"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "SET, INC, DEC, ENT"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "72 (H) x 72 (W) x 45 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "68 (H) x 68 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CONTROL METHOD:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Heating",
            "1. PID control with Auto-Tuning"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2. ON-OFF control"
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 Nos"
          ],
          [
            "Relay Type",
            "1 Relay 1C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "5A, 230V AC / 28V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "SSR Drive Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Signal",
            "12V DC, 30mA DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(On-Off Condition)"
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC/DC, 50-60Hz"
          ],
          [
            "Power Consuption (VA Rating)",
            "Approx 3VA @ 230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(non-condensing)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Input",
          "Output",
          "Aux Supply",
          "Size"
        ],
        "rows": [
          [
            "1",
            "PID-2301-1C-E3-60AN-XO",
            "J/K+60A 1CT",
            "Relay||SSR",
            "100-270V AC/DC",
            "72x72x45(HxWxD)mm"
          ],
          [
            "2",
            "PID-2301-1C-E3-60AN-X1",
            "J/K+60A 1CT",
            "Relay||SSR",
            "100-270V AC/DC",
            "72x72x45(HxWxD)mm"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-pid-controller-with-ampere-indication-2-output",
    "name": "Multispan PID Controller with Ampere Indication-2 OUTPUT",
    "category": "temperature-controller",
    "subCategory": "PID Controller with Ampere Indication",
    "image": "https://multispanindia.com/document/images/104573pid-2302-1c-regular.jpg",
    "shortDesc": "Model PID-2302-1C — PID Controller with Ampere Indication. Typical applications: Packaging Machinery, Extrusion Machinery, Furnace & Boilers, and more.",
    "features": [],
    "applications": [
      "Packaging Machinery",
      "Extrusion Machinery",
      "Furnace & Boilers",
      "Ovens & Incubators",
      "Food Industry"
    ],
    "baseModel": "PID-2302-1C",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Input Types",
            "Input",
            "Range"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "J",
            "0 to 400°C"
          ],
          [
            "K",
            "0 to 500°C"
          ],
          [
            "1 CT",
            "0.0 to 60.0 A"
          ],
          [
            "Resolution",
            "J,K = 1°C"
          ],
          [
            "Indication Accuracy",
            "±1% of FSD ± 1°C"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(FSD:- full scale deflection)"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 3 digit, 7 seg 0.70” white LED"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Middle: 3 digit, 7 seg, 0.39” green LED"
      },
      {
        "type": "divider",
        "text": "Lower: 3 digit, 7 seg, 0.33” red LED"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "SET, INC, DEC, ENT"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "72 (H) x 72 (W) x 85 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "68 (H) x 68 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CONTROL METHOD:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Heating",
            "1. PID control with Auto-Tuning"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2. ON-OFF control"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Cooling",
            "1. BL.TP ( Blower Time Proportion)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2. ON-OFF control"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Alarm",
            "Heater break alarm, Cold start, High, Absolute low, Inband, Absolute outband, OFF, Outband, Low"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 Nos"
          ],
          [
            "Relay Type",
            "1 Relay 1C/O (NO-C-NC) , 2 Relay (NO-C)"
          ],
          [
            "Rating",
            "10A, 230V AC / 28V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "SSR Drive Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Signal",
            "24V DC, 30mA DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(On-Off Condition)"
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC, 50-60Hz"
          ],
          [
            "Power Consuption (VA Rating)",
            "Approx 6VA @ 230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(non-condensing)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Input",
          "Output",
          "RS-485 Modbus",
          "Aux Supply",
          "Size"
        ],
        "rows": [
          [
            "1",
            "PID-2303-1C-A2-60AN-X0",
            "J/K+60A 1CT",
            "Relay||SSR + 2 Relay",
            "",
            "100-270V AC",
            "72x72x85(HxWxD)mm"
          ],
          [
            "2",
            "PID-2303-3C-A2-60AX-X0",
            "J/K+60A 3CT",
            "Relay||SSR + 2 Relay",
            "",
            "100-270V AC",
            "72x72x85(HxWxD)mm"
          ],
          [
            "3",
            "PID-2303-1C-M1-A2-60AN-X0",
            "J/K+60A 1CT",
            "Relay||SSR + 2 Relay",
            "yes",
            "100-270V AC",
            "72x72x85(HxWxD)mm"
          ],
          [
            "4",
            "PID-2303-3C-M1-A2-60AN-X0",
            "J/K+60A 3CT",
            "Relay||SSR + 2 Relay",
            "yes",
            "100-270V AC",
            "72x72x85(HxWxD)mm"
          ],
          [
            "5",
            "PID-2302-1C-A2-60AN-X0",
            "J/K+60A 1CT",
            "Relay||SSR + 1 Relay",
            "",
            "100-270V AC",
            "72x72x85(HxWxD)mm"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/835296DATASHEET%20PID-2302-1C.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-pid-controller-with-ampere-indication-3-output",
    "name": "Multispan PID Controller with Ampere Indication-3 OUTPUT",
    "category": "temperature-controller",
    "subCategory": "PID Controller with Ampere Indication",
    "image": "https://multispanindia.com/document/images/92954pid-2303-3c-regular.jpg",
    "shortDesc": "Model PID-2303-3C — PID Controller with Ampere Indication. Typical applications: Packaging Machinery, Extrusion Machinery, Furnace & Boilers, and more.",
    "features": [],
    "applications": [
      "Packaging Machinery",
      "Extrusion Machinery",
      "Furnace & Boilers",
      "Ovens & Incubators",
      "Food Industry"
    ],
    "baseModel": "PID-2303-3C",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Input Types",
            "Input",
            "Range"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "J",
            "0 to 400°C"
          ],
          [
            "K",
            "0 to 500°C"
          ],
          [
            "3 CT",
            "0.0 to 60.0 A"
          ],
          [
            "Resolution",
            "J,K = 1°C"
          ],
          [
            "Indication Accuracy",
            "±1% of FSD ± 1°C"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(FSD:- full scale deflection)"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 3-Digit, 7-Seg 0.70” White LED"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Middle: 3-Digit, 7-Seg, 0.39” Green LED"
      },
      {
        "type": "divider",
        "text": "Lower: 3-Digit, 7-Seg, 0.33” Red LED"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "SET, INC, DEC, ENT"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "72 (H) x 72 (W) x 85 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "68 (H) x 68 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CONTROL METHOD:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Heating",
            "1. PID Control with Auto-Tuning"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2. ON-OFF Control"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Cooling",
            "1. BL.TP ( Blower Time Proportion)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2. ON-OFF Control"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Alarm",
            "Heater break alarm, Cold start, High, Absolute low, Inband, Absolute outband, OFF, Outband, Low"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relays",
            "3 Nos"
          ],
          [
            "Relay Type",
            "1st Relay 1C/O (NO-C-NC) , 2nd & 3rd Relay (NO-C)"
          ],
          [
            "Rating",
            "5A,230V AC/28V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "SSR Drive Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Signal",
            "24V DC, 30mA DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(On-Off condition)"
      },
      {
        "type": "divider",
        "text": "MODBUS"
      },
      {
        "type": "divider",
        "text": "RS-485 Modbus Communication"
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC, 50-60Hz"
          ],
          [
            "Power Consumption (VA Rating)",
            "Approx 6VA @ 230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(non-condensing)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Input",
          "Output",
          "RS-485 Modbus",
          "Aux Supply",
          "Size"
        ],
        "rows": [
          [
            "1",
            "PID-2303-1C-A2-60AN-X0",
            "J/K+60A 1CT",
            "Relay || SSR + 2 Relay",
            "",
            "100-270V AC",
            "72x72x85(HxWxD)mm"
          ],
          [
            "2",
            "PID-2303-3C-A2-60AX-X0",
            "J/K+60A 3CT",
            "Relay || SSR + 2 Relay",
            "",
            "100-270V AC",
            "72x72x85(HxWxD)mm"
          ],
          [
            "3",
            "PID-2303-1C-M1-A2-60AN-X0",
            "J/K+60A 1CT",
            "Relay || SSR + 2 Relay",
            "yes",
            "100-270V AC",
            "72x72x85(HxWxD)mm"
          ],
          [
            "4",
            "PID-2303-3C-M1-A2-60AN-X0",
            "J/K+60A 3CT",
            "Relay || SSR + 2 Relay",
            "yes",
            "100-270V AC",
            "72x72x85(HxWxD)mm"
          ],
          [
            "5",
            "PID-2302-1C-A2-60AN-X0",
            "J/K+60A 1CT",
            "Relay || SSR + 1 Relay",
            "",
            "100-270V AC",
            "72x72x85(HxWxD)mm"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/DATASHEET%20PID-2303C%20(3CT)3869.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-pid-temperature-controller",
    "name": "Multispan PID temperature Controller",
    "category": "temperature-controller",
    "subCategory": "PID Temperature Controller",
    "image": "https://multispanindia.com/document/images/88176utc-2202gplusregular.jpg",
    "shortDesc": "Model UTC-2202G+ — PID Temperature Controller. Typical applications: Packaging Machinery, Extrusion Machinery, Furnace & Boilers, and more.",
    "features": [],
    "applications": [
      "Packaging Machinery",
      "Extrusion Machinery",
      "Furnace & Boilers",
      "Ovens & Incubators",
      "Food Industry"
    ],
    "baseModel": "UTC-2202G+",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "grid",
        "header": [
          "Input",
          "Range (°C)",
          "Range (°F)"
        ],
        "rows": [
          [
            "J",
            "0 to 600°C",
            "32 to 1112°F"
          ],
          [
            "J.1",
            "0.0 to 600.0°C",
            "32.0 to 1112.0°F"
          ],
          [
            "K",
            "0 to 1200°C",
            "32 to 2192°F"
          ],
          [
            "K.1",
            "0.0 to 950.0°C",
            "32.0 to 1742.0°F"
          ],
          [
            "PT-100",
            "-200 to 400°C",
            "-328 to 752°F"
          ],
          [
            "PT.1",
            "-199.9 to 400.0°C",
            "-199.9 to 752.0°F"
          ],
          [
            "R",
            "0 to 1600°C",
            "32 to 2912°F"
          ],
          [
            "S",
            "0 to 1800°C",
            "32 to 3272°F"
          ],
          [
            "E",
            "0 to 650°C",
            "32 to 1202°F"
          ],
          [
            "N",
            "0 to 1250°C",
            "32 to 2282°F"
          ],
          [
            "T",
            "0 to 350°C",
            "32 to 662°F"
          ],
          [
            "B",
            "150 to 1800°C",
            "302 to 3272°F"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "Resolution",
            "J,K,PT-100,R,S,E,N,T,B = 1°C"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "J.1,K.1,PT.1 = 0.1°C"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Indication Accuracy",
            "±0.5% Full Scale ± 1 Digit"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 4 digit, 7 segment, 0.70”"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Lower: 4 digit, 7 segment, 0.43”"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "SET, ENT, INC, DEC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CONTROL METHOD"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Heating",
            "1) PID control with Auto-Tuning"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2) (TP) Time Proportional"
      },
      {
        "type": "divider",
        "text": "3) ON-OFF control"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Cooling",
            "1) BL.TP (Blower Time Proportional)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2) ON-OFF control"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Alarm",
            "High /Low /Absolute Low/ Inband /Absolute Outband/Outband/End Alarm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size",
            "72 (H) x 72 (W) x 85 (D) mm"
          ],
          [
            "Panel Cutout",
            "68 (H) x 68 (W) mm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "24V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 nos."
          ],
          [
            "Relay Type",
            "1 C/O , (NO-C-NC)"
          ],
          [
            "Rating",
            "5A, 230V AC / 28 V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "SSR Drive Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Signal",
            "12V DC, 30mA DC (ON-OFF Condition)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Relay 1 Parallel to SSR"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "UP to 95% RH (non-condensing)"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Input",
          "Output",
          "Aux Supply",
          "Display"
        ],
        "rows": [
          [
            "1",
            "UTC-2202G+ -RG-D1-00",
            "J/K/Pt-100/R/S/T/N/B/E Selectable",
            "1R ||1SSR+1R",
            "24V DC",
            "Red + Green"
          ],
          [
            "2",
            "UTC-2202G+ -RG-E3-00",
            "J/K/Pt-100/R/S/T/N/B/E Selectable",
            "1R ||1SSR+1R",
            "100-270V AC/DC",
            "Red + Green"
          ],
          [
            "3",
            "UTC-2202G+ -WG-E3-00",
            "J/K/Pt-100/R/S/T/N/B/E Selectable",
            "1R ||1SSR+1R",
            "100-270V AC/DC",
            "White + Green"
          ],
          [
            "4",
            "UTC-2202G+ -WG-E3-01",
            "J/K/Pt-100/R/S/T/N/B/E Selectable",
            "1R || 1 SSR + SSR",
            "100-270V AC/DC",
            "White + Green"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/UTC-2202G+5292.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-factor-indicator",
    "name": "Multispan Power Factor Indicator",
    "category": "power-energy-meter",
    "subCategory": "Digital 1Ø AC Panel Meter",
    "image": "https://multispanindia.com/document/images/35194pf-11-regular.jpg",
    "shortDesc": "Model PF-11 — Digital 1Ø AC Panel Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "Process Control",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "PF-11",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "PF-11"
          ],
          [
            "Display",
            "8-Digit, 1-Line, 7-Seg 0.5”, Red LED Display"
          ],
          [
            "Size (mm)",
            "96(H) X 96 (W) X 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ],
          [
            "Power Factor",
            "0.1 To 1.000 PF"
          ],
          [
            "Voltage Input",
            "30 To 300V AC VLN CAT III"
          ],
          [
            "Current Input",
            "5 Amp or higher through external CT"
          ],
          [
            "Power Supply",
            "100 To 270V AC/DC,50/60Hz,Approx 4VA"
          ],
          [
            "Frequency",
            "45 To 65 Hz"
          ],
          [
            "Wiring System",
            "1Ph-2W"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ],
          [
            "Operating Temperature",
            "0°C To 50°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Voltage",
          "Current",
          "Auxillary"
        ],
        "rows": [
          [
            "PF-11-E3-N0",
            "Network Selection :1Ø-2Wire Voltage Input: 30-300V AC",
            "CT Primary: 5 to 9999A CT Secondary: 5A",
            "100 to 270V AC/DC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/PF-119472.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-quality-meter",
    "name": "Multispan Power Quality Meter",
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "image": "https://multispanindia.com/document/images/356761_1777638061_83521b.jpg",
    "shortDesc": "Model PQM-16+-M1 — Digital Multi-Function Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "PQM-16+-M1",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø-3Wire / 3Ø-4Wire / 1Ø-2Wire"
          ],
          [
            "CT Primary",
            "Upto 9999A (Programmable)"
          ],
          [
            "CT Secondary",
            "5 Amp/1 Amp selectable"
          ],
          [
            "PT Primary",
            "100V to 520kV (Programmable)"
          ],
          [
            "PT Secondary",
            "100V to 520V (L-L) (Programmable)"
          ],
          [
            "True PF Avg. & Per Phase",
            "-1.000 to 1.000"
          ],
          [
            "Displacement PF",
            "-1.000 to 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ],
          [
            "Load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "No load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "On Hour",
            "9999 Hour"
          ],
          [
            "RPM",
            "3600 RPM @ 60 Hz & 2-Pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "KW Total",
            "0.000 - 9999 MW"
          ],
          [
            "kW Per Phase",
            "0.000 - 9999 MW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 MVA"
          ],
          [
            "kVA Per Phase",
            "0.000 - 9999 MVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 MVAr"
          ],
          [
            "kVAr Per Phase",
            "0.000 - 9999 MVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENERGY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Import kWh",
            "000.000 - 999999999 MWh"
          ],
          [
            "Export kWh",
            "000.000 - 999999999 MWh"
          ],
          [
            "Net kWh",
            "000.000 - 999999999 MWh"
          ],
          [
            "Total kWh",
            "000.000 - 999999999 MWh"
          ],
          [
            "kVAh Total",
            "000.000 - 999999999 MVAh"
          ],
          [
            "Import kVArh",
            "000.000 - 999999999 MVArh"
          ],
          [
            "Export kVArh",
            "000.000 - 999999999 MVArh"
          ],
          [
            "Lag kVArh",
            "000.000 - 999999999 MVArh"
          ],
          [
            "Lead kVArh",
            "000.000 - 999999999 MVArh"
          ],
          [
            "Total kVArh",
            "000.000 - 999999999 MVArh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display Upper",
            "4 Digit, 4 Line 7 Seg 0.37”,LCD"
          ],
          [
            "Lower",
            "9 Digit, 1 Line 7 Seg 0.26”,LCD"
          ],
          [
            "Key",
            "PROGRAM, VAF, THD%, POWER/PF, ENERGY"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "98 (H) x 98 (W) x 46 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 300V AC/DC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 3 VA @ 230V AC"
          ],
          [
            "ACCURACY",
            "Class 0.5 (Standard)/ 0.5s/ 0.2s (optional as per required)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "COMMUNICATION"
      },
      {
        "type": "divider",
        "text": "RS-485 MODBUS"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet%20PQM-16+%20M1929.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-quality-meter-pqm-18-m1",
    "name": "Multispan Power Quality Meter - PQM 18-M1",
    "category": "power-energy-meter",
    "subCategory": "Digital Multi-Function Meter",
    "image": "https://multispanindia.com/document/images/848684_1785150365_81454b.jpg",
    "shortDesc": "Model PQM 18-M1 — Digital Multi-Function Meter. Typical applications: Control & Relay Panel, Original Equipment Manufacturers ( OEMs ), Energy Management System, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Original Equipment Manufacturers ( OEMs )",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "PQM 18-M1",
    "specTables": [
      {
        "type": "divider",
        "text": "PARAMETER SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø-3Wire / 3Ø-4Wire / 1Ø-2Wire"
          ],
          [
            "CT Primary",
            "Upto 9999A (Programmable)"
          ],
          [
            "CT Secondary",
            "5 Amp/1 Amp selectable"
          ],
          [
            "PT Primary",
            "100V to 520kV (Programmable)"
          ],
          [
            "PT Secondary",
            "100V to 520V (L-L) (Programmable)"
          ],
          [
            "True PF Avg. & Per Phase",
            "-1.000 to 1.000"
          ],
          [
            "Displacement PF",
            "-1.000 to 1.000"
          ],
          [
            "Frequency (Hz)",
            "45.00 - 60.00 Hz"
          ],
          [
            "Load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "No load hours",
            "9999.59 Hrs/Min."
          ],
          [
            "On Hour",
            "9999 Hour"
          ],
          [
            "RPM",
            "3600 RPM @ 60 Hz & 2-Pole"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "KW Total",
            "0.000 - 9999 MW"
          ],
          [
            "kW Per Phase",
            "0.000 - 9999 MW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 MVA"
          ],
          [
            "kVA Per Phase",
            "0.000 - 9999 MVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 MVAr"
          ],
          [
            "kVAr Per Phase",
            "0.000 - 9999 MVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENERGY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Import kWh",
            "000.000 - 999999999 MWh"
          ],
          [
            "Export kWh",
            "000.000 - 999999999 MWh"
          ],
          [
            "Net kWh",
            "000.000 - 999999999 MWh"
          ],
          [
            "Total kWh",
            "000.000 - 999999999 MWh"
          ],
          [
            "kVAh Total",
            "000.000 - 999999999 MVAh"
          ],
          [
            "Import kVArh",
            "000.000 - 999999999 MVArh"
          ],
          [
            "Export kVArh",
            "000.000 - 999999999 MVArh"
          ],
          [
            "Lag kVArh",
            "000.000 - 999999999 MVArh"
          ],
          [
            "Lead kVArh",
            "000.000 - 999999999 MVArh"
          ],
          [
            "Total kVArh",
            "000.000 - 999999999 MVArh"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY & KEY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "320 x 240 Px Resistive Touch Screen Display"
          ],
          [
            "Key",
            "PROGRAM, VAF, THD%, POWER/PF, ENERGY"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "98 (H) x 98 (W) x 49 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 300V AC/DC, 50/60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 3 VA @ 230V AC"
          ],
          [
            "ACCURACY",
            "Class 0.2s"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "COMMUNICATION"
      },
      {
        "type": "divider",
        "text": "RS-485 MODBUS"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (AS Per Request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet%20PQM%2018-M1725763.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-12v-10a-p-plastic-body",
    "name": "Multispan Power Supply 12V-10A-P (Plastic Body)",
    "category": "power-supplies",
    "subCategory": "120W",
    "image": "https://multispanindia.com/document/images/59011_1763121989_9a315d.jpg",
    "shortDesc": "Model PS12-10A-P — 120W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS12-10A-P",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC (L-N) 127 to 350V DC"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "AC Current (TYP.)",
            "2.1A@100V AC 1.1A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            ">85%@230VAC"
          ],
          [
            "Start UP time",
            "<1 sec@230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "12-14V DC"
          ],
          [
            "Output Current",
            "10A at 12V; 8.5A at 14V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100V AC (Full Load)"
      },
      {
        "type": "divider",
        "text": "LED Indication"
      },
      {
        "type": "kv",
        "rows": [
          [
            "LED 1",
            "Power On"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Protection:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fused",
            "3.15A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 120% of rated output Current protection Protection Type : hiccup mode;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "recover automatically after fault condition is removed"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "SMPS Latches off if output voltage Exceeds the specified output voltage Limits."
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit; Turns on automatically after temperature goes back to Normal operating conditions."
          ],
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Environmental"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "-25°C to 50°C * De-rate output power at 3w/°C above +50°C Ambient"
          ],
          [
            "Storage Temperature",
            "-40°C to 85°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Mechanical Characteristics"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "110 (H) x 48 (W) x 111 (D)"
          ],
          [
            "Material Body",
            "Polycarbonate (PC)"
          ],
          [
            "Terminal Screw Size",
            "M3"
          ],
          [
            "Screw Torque (N.m)",
            "0.5"
          ],
          [
            "Wire Gauge (AWG)",
            "28-12"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.No",
          "Model Number",
          "Input Voltage",
          "Output Voltage",
          "Current Capacity"
        ],
        "rows": [
          [
            "1",
            "PS12-10A-P",
            "100-270V AC",
            "12V DC",
            "10A"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-12v-1a",
    "name": "Multispan Power Supply 12V-1A",
    "category": "power-supplies",
    "subCategory": "12W",
    "image": "https://multispanindia.com/document/images/82738ps12-1a-regular1.jpg",
    "shortDesc": "Model PS12-1A — 12W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS12-1A",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC±10%,(L-N)"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "AC Current (TYP.)",
            "0.450A@100V AC, 0.24A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            ">85%@230V AC"
          ],
          [
            "Start UP time",
            "<1 sec@230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "12V DC"
          ],
          [
            "Output Current",
            "1A at 12V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100V AC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Protection:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fused",
            "2A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% of rated output Current protection Protection Type : hiccup mode;recover automatically after fault condition is removed"
          ],
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Physical :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "90 (H) x 22.5 (W) x 75 (D)"
          ],
          [
            "Material",
            "Polycarbonate"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/714Datasheet%20PS12-1A.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-12v-2a",
    "name": "Multispan Power Supply 12V-2A",
    "category": "power-supplies",
    "subCategory": "24W",
    "image": "https://multispanindia.com/document/images/612493_1763185615_6d982e.jpg",
    "shortDesc": "Model PS12-2A — 24W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS12-2A",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC (L-N) 127 to 350V DC"
          ],
          [
            "Frequency Range",
            "50/60 Hz"
          ],
          [
            "AC Current (TYP.)",
            "0.450A@100V AC 0.24A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            ">85%@230VAC"
          ],
          [
            "Start UP time",
            "<1 sec@230VAC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "12V DC"
          ],
          [
            "Output Current",
            "2A at 12V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230VAC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "LED Indication"
      },
      {
        "type": "kv",
        "rows": [
          [
            "LED 1",
            "Power On"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Protection:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fused",
            "2A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% of rated Output Current protection Protection Type :Hiccup mode;recover automatically after fault condition is removed"
          ],
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Environmental"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "-25°C to 50°C * De-rate output power at 3w/°C above +50°C Ambient"
          ],
          [
            "Storage Temperature",
            "-40°C to 85°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Mechanical Characteristics"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "90 (H) x 22.5 (W) x 75 (D)"
          ],
          [
            "Material Body",
            "Polycarbonate (PC)"
          ],
          [
            "Terminal Screw Size",
            "M3.5"
          ],
          [
            "Screw Torque (N.m)",
            "0.5"
          ],
          [
            "Wire Gauge (AWG)",
            "26-14"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.No",
          "Model Number",
          "Input Voltage",
          "Output Voltage",
          "Current Capacity"
        ],
        "rows": [
          [
            "1",
            "PS12-2A",
            "100-270V AC",
            "12V DC",
            "2A"
          ],
          [
            "2",
            "PS12-1A",
            "100-270V AC",
            "12V DC",
            "1A"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-12v-5a-p",
    "name": "Multispan Power Supply 12V-5A-P",
    "category": "power-supplies",
    "subCategory": "60W",
    "image": "https://multispanindia.com/document/images/107351ps12-5A-p-regular.jpg",
    "shortDesc": "Model PS12-5A-P — 60W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS12-5A-P",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC±10%,(L-N)"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "AC Current (TYP.)",
            "1.1A@100V AC, 0.49A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            ">86%@230V AC"
          ],
          [
            "Start UP time",
            "<1 sec@230V AC & <3 sec@100VAC (Full Load)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "12V - 14V DC"
          ],
          [
            "Output Current",
            "5A at 12V ; 4.2A at 14V DC"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230V AC & >15ms at 100V AC (Full Load)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Protection Parameters:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fuse",
            "3.15A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 120% of rated Output Current protection Protection Type :Hiccup mode;recover automatically after fault condition is removed"
          ],
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "SMPS Latches off if output voltage Exceeds the specified output voltage limit"
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Physical :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "90 x 45 x 84mm"
          ],
          [
            "Material",
            "Polycarbonate (PC)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Environmental:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "-25°C to 50°C * De-rate output power at 3w/°C above +50°C Ambient"
          ],
          [
            "Storage Temperature",
            "-40°C to 85°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/6384Datasheet%20PS12-5A-P.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-15v-8a-p-plastic-body",
    "name": "Multispan Power Supply 15V-8A-P (Plastic Body)",
    "category": "power-supplies",
    "subCategory": "120W",
    "image": "https://multispanindia.com/document/images/720287_1763118810_72e96c.jpg",
    "shortDesc": "Model PS15-8A-P — 120W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS15-8A-P",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC (L-N) 127 to 350V DC"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "AC Current (TYP.)",
            "2.2A@100V AC 0.83A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            "<89%@230VAC"
          ],
          [
            "Start UP time",
            "<1 sec@230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "15-18V DC"
          ],
          [
            "Output Current",
            "8A at 15V; 6.67A at 18V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100V AC (Full Load)"
      },
      {
        "type": "divider",
        "text": "LED Indication"
      },
      {
        "type": "kv",
        "rows": [
          [
            "LED 1",
            "Power On"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Protection:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fused",
            "3.15A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 120% of rated output Current protection Protection Type : hiccup mode;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "recover automatically after fault condition is removed"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "SMPS Latches off if output voltage Exceeds the specified output voltage Limits."
          ],
          [
            "Over Temperature",
            "SMPS Latches off if the transformer temperature exceeds 120°C"
          ],
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Environmental"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "-25°C to 50°C * De-rate output power at 3w/°C above +50°C Ambient"
          ],
          [
            "Storage Temperature",
            "-40°C to 85°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Mechanical Characteristics"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "110 (H) x 48 (W) x 111 (D)"
          ],
          [
            "Material Body",
            "Polycarbonate (PC)"
          ],
          [
            "Terminal Screw Size",
            "M3"
          ],
          [
            "Screw Torque (N.m)",
            "0.5"
          ],
          [
            "Wire Gauge (AWG)",
            "28-12"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.No",
          "Model Number",
          "Input Voltage",
          "Output Voltage",
          "Current Capacity"
        ],
        "rows": [
          [
            "1",
            "PS15-8A-P",
            "100-270V AC",
            "15V DC",
            "8A"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-24v-10a",
    "name": "Multispan Power Supply 24V-10A",
    "category": "power-supplies",
    "subCategory": "240W",
    "image": "https://multispanindia.com/document/images/33148smps-category-image.jpg",
    "shortDesc": "Model PS24-10A — 240W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS24-10A",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC (L-N) / 127 to 370V DC"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "Power Factor",
            "> 0.95 @ Full Load"
          ],
          [
            "AC Current (TYP.)",
            "2.7A@100V AC, 1.2A@230V AC"
          ],
          [
            "Efficiency (TYP.)",
            ">93%@230V AC"
          ],
          [
            "Start UP time",
            "<2 sec@230V AC (Full Load)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Nominal DC Voltage",
            "24V DC"
          ],
          [
            "Output Voltage",
            "24 - 28V DC"
          ],
          [
            "Output Current",
            "10A at 24; 8.57A at 28V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            ">13ms at 24V @ 100 /230V AC (Full Load)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Protection Parameters:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fuse",
            "4A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 140% of rated output Current protection Protection Type : hiccup mode;recover automatically after fault condition is removed"
          ],
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "SMPS Latches off if output voltage 31V DC ± 0.5V DC"
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "divider",
        "text": "Physical :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "125 (H) x 55 (W) x 135 (D)"
          ],
          [
            "Material",
            "Polycarbonate (PC)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Environmental:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "-25°C to 50°C * De-rate output power at 3w/°C above +50°C Ambient"
          ],
          [
            "Storage Temperature",
            "-40°C to 85°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/8448Datasheet%20PS24-10A.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-24v-15a",
    "name": "Multispan Power Supply 24V-1.5A",
    "category": "power-supplies",
    "subCategory": "36W",
    "image": "https://multispanindia.com/document/images/59956ps24-1.5-regular.jpg",
    "shortDesc": "Model PS24-1.5A — 36W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS24-1.5A",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC±10%,(L-N)"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "AC Current (TYP.)",
            "0.650A@100V AC, 0.320A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            ">85%@230V AC"
          ],
          [
            "Start UP time",
            "<1 sec@230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "24V DC"
          ],
          [
            "Output Current",
            "1.5A at 24V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100V AC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Protection Parameters:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fuse",
            "3.15A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% of rated output Current protection Protection Type : hiccup mode; recover automatically after fault condition is removed"
          ],
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Physical :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "76 (H) x 27 (W) x 85 (D)"
          ],
          [
            "Material",
            "Polycarbonate"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/7227Datasheet%20PS24-1.5A.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-24v-1a",
    "name": "Multispan Power Supply 24V-1A",
    "category": "power-supplies",
    "subCategory": "24W",
    "image": "https://multispanindia.com/document/images/96944ps24-1a-regular.jpg",
    "shortDesc": "Model PS24-1A — 24W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS24-1A",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC±10%,(L-N)"
          ],
          [
            "Frequency Range",
            "50/60 Hz"
          ],
          [
            "AC Current (TYP.)",
            "0.49A@100V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "0.24A@270V AC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Efficiency (TYP.)",
            ">85%@230VAC"
          ],
          [
            "Start UP time",
            "<1 sec@230VAC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "24V DC"
          ],
          [
            "Output Current",
            "1A at 24V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230VAC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Protection:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fused",
            "2A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 120% of rated output Current protection Protection Type : hiccup mode;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "recover automatically after fault condition is removed"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "divider",
        "text": "Physical :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size (H) x (W) x (D)(mm)",
            "90 x 22.5 x 75"
          ],
          [
            "Material",
            "Polycarbonate (PC)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Environmental:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "-25°C to 50°C * De-rate output power at 3w/°C above +50°C Ambient"
          ],
          [
            "Storage Temperature",
            "-40°C to 85°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ],
          [
            "Warm up time",
            "5 minutes"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.No",
          "Model Number",
          "Input Voltage",
          "Output Voltage",
          "Current Capacity"
        ],
        "rows": [
          [
            "1",
            "PS24-1A",
            "100-270V AC",
            "24V DC",
            "1A"
          ],
          [
            "2",
            "PS12-2A",
            "100-270V AC",
            "12V DC",
            "2A"
          ],
          [
            "3",
            "PS12-1A",
            "100-270V AC",
            "12V DC",
            "1A"
          ],
          [
            "4",
            "PS24-1.5A",
            "100-270V AC",
            "24V DC",
            "1.5A"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/4575Datasheet%20PS24-1A.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-24v-25a",
    "name": "Multispan Power Supply 24V-2.5A",
    "category": "power-supplies",
    "subCategory": "60W",
    "image": "https://multispanindia.com/document/images/84499ps24-2.5a-regular11.jpg",
    "shortDesc": "Model PS24-2.5A — 60W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS24-2.5A",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC±10%,(L-N)"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "AC Current (TYP.)",
            "0.930A@100V AC, 0.470A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            ">89%@230V AC"
          ],
          [
            "Start UP time",
            "<1 sec@230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "23 - 28V DC"
          ],
          [
            "Output Current",
            "2.5A at 24; 2.1A at 28V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100V AC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Protection Parameters:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fuse",
            "3.15A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 120% of rated output Current protection Protection Type : hiccup mode;recover automatically after fault condition is removed"
          ],
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "SMPS Latches off if output voltage Exceeds the specified output voltage Limits."
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Physical :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "90 (H) x 45 (W) x 84 (D)"
          ],
          [
            "Material",
            "Polycarbonate"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/5701Datasheet%20PS24-2.5A.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-24v-5a",
    "name": "Multispan Power Supply 24V-5A",
    "category": "power-supplies",
    "subCategory": "120W",
    "image": "https://multispanindia.com/document/images/31063ps24-5a-regular.jpg",
    "shortDesc": "Model PS24-5A — 120W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS24-5A",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC±10%,(L-N)"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "AC Current (TYP.)",
            "2.1A@100V AC, 0.95A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            ">89%@230V AC"
          ],
          [
            "Start UP time",
            "<1 sec@230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "23 - 28V DC"
          ],
          [
            "Output Current",
            "5A at 24; 4.29A at 28V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100V AC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Protection:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fused",
            "3.15A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 120% of rated output Current protection Protection Type : hiccup mode;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "recover automatically after fault condition is removed"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "SMPS Latches off if output voltage Exceeds the specified output voltage Limits."
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "divider",
        "text": "Physical :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size (H) x (W) x (D)(mm)",
            "105 x 45 x 110"
          ],
          [
            "Material Front",
            "ABS"
          ],
          [
            "Enclosure",
            "Aluminium"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Environmental:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "-25°C to 50°C * De-rate output power at 3w/°C above +50°C Ambient"
          ],
          [
            "Storage Temperature",
            "-40°C to 85°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ],
          [
            "Warm up time",
            "5 minutes"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.No",
          "Model Number",
          "Input Voltage",
          "Output Voltage",
          "Current Capacity"
        ],
        "rows": [
          [
            "1",
            "PS24-5A",
            "100-270V AC",
            "24V DC",
            "5A"
          ],
          [
            "2",
            "PS24-6.5A",
            "100-270V AC",
            "24V DC",
            "6.5A"
          ],
          [
            "3",
            "PS12-8A",
            "100-270V AC",
            "12V DC",
            "8A"
          ],
          [
            "4",
            "PS12-5A",
            "100-270V AC",
            "12V DC",
            "5A"
          ],
          [
            "5",
            "PS48-2.5A",
            "100-270V AC",
            "48V DC",
            "2.5A"
          ],
          [
            "6",
            "PS15-5A",
            "100-270V AC",
            "15V DC",
            "5A"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/2969Datasheet%20PS24-5A.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-24v-5a-p-plastic-body",
    "name": "Multispan Power Supply 24V-5A-P (Plastic Body)",
    "category": "power-supplies",
    "subCategory": "120W",
    "image": "https://multispanindia.com/document/images/1077910_1763117144_ae516d.jpg",
    "shortDesc": "Model PS24V-5A-P — 120W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS24V-5A-P",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC (L-N) 127 to 350V DC"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "AC Current (TYP.)",
            "2.1A@100V AC, 0.95A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            "<89%@230VAC"
          ],
          [
            "Start UP time",
            "<1 sec@230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "24 - 28V DC"
          ],
          [
            "Output Current",
            "5A at 24; 4.29A at 28V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100V AC (Full Load)"
      },
      {
        "type": "divider",
        "text": "LED Indication"
      },
      {
        "type": "kv",
        "rows": [
          [
            "LED 1",
            "Power On"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Protection:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fused",
            "3.15A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 120% of rated output Current protection Protection Type : hiccup mode;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "recover automatically after fault condition is removed"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "SMPS Latches off if output voltage Exceeds the specified output voltage Limits."
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "divider",
        "text": "Environmental"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "-25°C to 50°C * De-rate output power at 3w/°C above +50°C Ambient"
          ],
          [
            "Storage Temperature",
            "-40°C to 85°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Mechanical Characteristics"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "110 (H) x 48 (W) x 111 (D)"
          ],
          [
            "Material Body",
            "Polycarbonate (PC)"
          ],
          [
            "Terminal Screw Size",
            "M3"
          ],
          [
            "Screw Torque (N.m)",
            "0.5"
          ],
          [
            "Wire Gauge (AWG)",
            "28-12"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.No",
          "Model Number",
          "Input Voltage",
          "Output Voltage",
          "Current Capacity"
        ],
        "rows": [
          [
            "1",
            "PS24-5A-P",
            "100-270V AC",
            "24V DC",
            "5A"
          ],
          [
            "2",
            "PS24-6.5A-P",
            "100-270V AC",
            "24V DC",
            "6.5A"
          ],
          [
            "3",
            "PS12-8A-P",
            "100-270V AC",
            "12V DC",
            "8A"
          ],
          [
            "4",
            "PS12-5A-P",
            "100-270V AC",
            "12V DC",
            "5A"
          ],
          [
            "5",
            "PS48-2.5A-P",
            "100-270V AC",
            "48V DC",
            "2.5A"
          ],
          [
            "6",
            "PS15-5A-P",
            "100-270V AC",
            "15V DC",
            "5A"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-24v-65a",
    "name": "Multispan Power Supply 24V-6.5A",
    "category": "power-supplies",
    "subCategory": "156W",
    "image": "https://multispanindia.com/document/images/55483ps24-6.5a-regular.jpg",
    "shortDesc": "Model PS24-6.5A — 156W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS24-6.5A",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC±10%,(L-N)"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "AC Current (TYP.)",
            "2.5A@100V AC, 1.1A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            ">90%@230V AC"
          ],
          [
            "Start UP time",
            "<1 sec@230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "23 - 28V DC"
          ],
          [
            "Output Current",
            "6.5A at 24V; 5.57A at 28V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100V AC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Protection Parameters:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fuse",
            "5A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 120% of rated output Current protection Protection Type : hiccup mode; recover automatically after fault condition is removed"
          ],
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted; Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "SMPS Latches off if output voltage exceeds the specified output voltage limit."
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Physical Data:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "105 (H) x 45 (W) x 110 (D)"
          ],
          [
            "Material",
            "Front - ABS"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Enclosure - Aluminium"
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/3092Datasheet%20PS24-6.5A.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-24v-65a-p-plastic-body",
    "name": "Multispan Power Supply 24V-6.5A-P (Plastic Body)",
    "category": "power-supplies",
    "subCategory": "156W",
    "image": "https://multispanindia.com/document/images/820394_1763117772_7a9b48.jpg",
    "shortDesc": "Model PS24-6.5A-P — 156W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS24-6.5A-P",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC±10%,(L-N) 127 to 350V DC"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "AC Current (TYP.)",
            "2.9A@100V AC 1.2A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            "<89%@230VAC"
          ],
          [
            "Start UP time",
            "<1 sec@230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "24-28V DC"
          ],
          [
            "Output Current",
            "6.5A at 24V; 5.57A at 28V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100V AC (Full Load)"
      },
      {
        "type": "divider",
        "text": "LED Indication"
      },
      {
        "type": "kv",
        "rows": [
          [
            "LED 1",
            "Power On"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Protection Parameters:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fuse",
            "5A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 120% of rated output Current protection Protection Type : hiccup mode; recover automatically after fault condition is removed"
          ],
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted; Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "SMPS Latches off if output voltage exceeds the specified output voltage limit."
          ],
          [
            "Over Temperature",
            "SMPS Latches off if the transformer temperature exceeds 120°C"
          ],
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Mechanical Characteristics"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "110 (H) x 48 (W) x 111 (D)"
          ],
          [
            "Material Body",
            "Polycarbonate (PC)"
          ],
          [
            "Terminal Screw Size",
            "M3"
          ],
          [
            "Screw Torque (N.m)",
            "0.5"
          ],
          [
            "Wire Gauge (AWG)",
            "28-12"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet%20PS24-6.5A-P699334.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-48v-25a-p-plastic-body",
    "name": "Multispan Power Supply 48V-2.5A-P (Plastic Body)",
    "category": "power-supplies",
    "subCategory": "120W",
    "image": "https://multispanindia.com/document/images/915124_1763450397_74cf3c.jpg",
    "shortDesc": "Model PS48-2.5A-P — 120W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS48-2.5A-P",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC (L-N) 127 to 350V DC"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "AC Current (TYP.)",
            "2.1A@100V AC 0.95A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            ">89%@230VAC"
          ],
          [
            "Start UP time",
            "<1 sec@230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "46-55V DC"
          ],
          [
            "Output Current",
            "2.5A at 48V; 2.2A at 55V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100V AC (Full Load)"
      },
      {
        "type": "divider",
        "text": "LED Indication"
      },
      {
        "type": "kv",
        "rows": [
          [
            "LED 1",
            "Power On"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Protection:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fused",
            "3.15A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 120% of rated output Current protection Protection Type : hiccup mode;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "recover automatically after fault condition is removed"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "62V DC ±1V DC Protection type: Latched: Input AC Power has to be recycled to recover the power supply."
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit; Turns on automatically after temperature goes back to Normal operating conditions."
          ],
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Environmental"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "-25°C to 50°C * De-rate output power at 3w/°C above +50°C Ambient"
          ],
          [
            "Storage Temperature",
            "-40°C to 85°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Mechanical Characteristics"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "110 (H) x 48 (W) x 111 (D)"
          ],
          [
            "Material Body",
            "Polycarbonate (PC)"
          ],
          [
            "Terminal Screw Size",
            "M3"
          ],
          [
            "Screw Torque (N.m)",
            "0.5"
          ],
          [
            "Wire Gauge (AWG)",
            "28-12"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.No",
          "Model Number",
          "Input Voltage",
          "Output Voltage",
          "Current Capacity"
        ],
        "rows": [
          [
            "1",
            "PS48-2.5A-P",
            "100-270V AC",
            "48V DC",
            "2.5A"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/5540Datasheet%20PS48-2.5A-P.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-48v-5a",
    "name": "Multispan Power Supply 48V-5A",
    "category": "power-supplies",
    "subCategory": "240W",
    "image": "https://multispanindia.com/document/images/7609ps48-5a-regular.jpg",
    "shortDesc": "Model PS48-5A — 240W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "PS48-5A",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC (L-N) / 127 to 370V DC"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "Power Factor",
            "> 0.95 @ Full Load"
          ],
          [
            "Current Consumption",
            "2.7A@100V AC, 1.2A@230V AC 220V DC, < 1.2A"
          ],
          [
            "Efficiency (TYP.)",
            ">93%@230V AC"
          ],
          [
            "Start UP time",
            "<2 sec@230V AC (Full Load)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Nominal DC Voltage",
            "48V DC"
          ],
          [
            "Output Voltage",
            "48V - 56V DC"
          ],
          [
            "Output Current",
            "5A at 48V; 4.28A at 56V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line Regulation",
            "±0.5%"
          ],
          [
            "Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            ">13ms at 24V @ 100 /230V AC (Full Load)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Protection Parameters:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fuse",
            "4A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 140% of rated output Current protection Protection Type : hiccup mode;recover automatically after fault condition is removed"
          ],
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "SMPS Latches off if output voltage 60V DC ± 1V DC"
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Physical :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "125 (H) x 55 (W) x 135 (D)"
          ],
          [
            "Material",
            "Polycarbonate (PC)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Environmental:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "-25°C to 50°C * De-rate output power at 3w/°C above +50°C Ambient"
          ],
          [
            "Storage Temperature",
            "-40°C to 85°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet%20PS48-5A928829.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply-dps-24v-25a",
    "name": "Multispan Power Supply-DPS 24V-2.5A",
    "category": "power-supplies",
    "subCategory": "60W",
    "image": "https://multispanindia.com/document/images/170623_1763116580_129ec4.jpg",
    "shortDesc": "Model DPS24-2.5A — 60W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "DPS24-2.5A",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC (L-N) 127 to 350V DC"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "AC Current (TYP.)",
            "0.930A@100V AC, 0.470A@270V AC"
          ],
          [
            "Efficiency (TYP.)",
            ">89%@230V AC"
          ],
          [
            "Start UP time",
            "<1 sec@230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "<3 sec@100VAC (Full Load)"
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Voltage",
            "23 - 28V DC"
          ],
          [
            "Output Current",
            "2.5A at 24; 2.1A at 28V"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line & Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            "<60ms at 230V AC &"
          ]
        ]
      },
      {
        "type": "divider",
        "text": ">15ms at 100V AC (Full Load)"
      },
      {
        "type": "divider",
        "text": "LED Indication"
      },
      {
        "type": "kv",
        "rows": [
          [
            "LED 1",
            "Power On"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Protection Parameters:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fuse",
            "3.15A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "110% to 120% of rated output Current protection Protection Type : hiccup mode;recover automatically after fault condition is removed"
          ],
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "SMPS Latches off if output voltage Exceeds the specified output voltage Limits."
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ],
          [
            "Surge Protection",
            "Pulse 1.2/50μS Line To Neutral : 2 KV Line To Earth : 2 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Environmental"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "-25°C to 50°C * De-rate output power at 3w/°C above +50°C Ambient"
          ],
          [
            "Storage Temperature",
            "-40°C to 85°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Mechanical Characteristics"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "90 (H) x 70 (W) x 60 (D)"
          ],
          [
            "Material Body",
            "Polycarbonate (PC)"
          ],
          [
            "Terminal Screw Size",
            "M3"
          ],
          [
            "Screw Torque (N.m)",
            "0.5"
          ],
          [
            "Wire Gauge (AWG)",
            "28-12"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-power-supply24v-10a",
    "name": "Multispan Power Supply_24V-10A",
    "category": "power-supplies",
    "subCategory": "240W",
    "image": "https://multispanindia.com/document/images/37165_1763120691_42b5c2.jpg",
    "shortDesc": "Model LPS24-10A — 240W. Typical applications: Robotics, Elevators, Automation panel, and more.",
    "features": [],
    "applications": [
      "Robotics",
      "Elevators",
      "Automation panel",
      "Special purpose machine"
    ],
    "baseModel": "LPS24-10A",
    "specTables": [
      {
        "type": "divider",
        "text": "Input Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "180 to 270V AC (L-N) 250 to 370V DC"
          ],
          [
            "Frequency Range",
            "50 / 60Hz"
          ],
          [
            "Power Factor",
            "> 0.95 @ Full Load"
          ],
          [
            "Current Consumption",
            "2.5A@180V AC 1.9A@230V AC"
          ],
          [
            "Efficiency (TYP.)",
            "Up to 87%@230VAC"
          ],
          [
            "Start UP time",
            "<2 sec@230V AC (Full Load)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Output Specification :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Nominal DC Voltage",
            "24V DC"
          ],
          [
            "Output Voltage",
            "24-28V DC"
          ],
          [
            "Output Current",
            "0 - 10A"
          ],
          [
            "Ripple & noise",
            "<1% of V out"
          ],
          [
            "Line Regulation",
            "±1%"
          ],
          [
            "Load Regulation",
            "±1%"
          ],
          [
            "Hold UP Time",
            ">30ms at 24 V @ 230V AC (Full Load)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LED Indication"
      },
      {
        "type": "kv",
        "rows": [
          [
            "LED 1",
            "Power On"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Protection Parameters:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Fuse",
            "4A-250V AC Internal"
          ],
          [
            "Output Over Load",
            "11A to 11.5A of Constant type down to 15V DC Output ; Hiccup mode for heavy overload; autorecovery"
          ],
          [
            "Output Short Circuit",
            "Hiccup mode when output is shorted;Recovers automatically after fault condition is removed."
          ],
          [
            "Output Over Voltage",
            "SMPS Latches off if output voltage 31V DC ± 0.5V DC"
          ],
          [
            "Over Temperature",
            "Power supply shuts down when the temperature goes above specified limit;"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Turns on automatically after temperature goes back to Normal operating conditions."
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation between Input and Output :",
            "2.5 KV"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Environmental"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "-25°C to 50°C * De-rate output power at 3w/°C above +50°C Ambient"
          ],
          [
            "Storage Temperature",
            "-40°C to 85°C"
          ],
          [
            "Relative Humidity",
            "95% RH Non-condensing"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Mechanical Characteristics"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting Type",
            "Din Rail Mount"
          ],
          [
            "Size",
            "125(H) x 55 (W) x 135 (D)"
          ],
          [
            "Material Body",
            "Polycarbonate (PC)"
          ],
          [
            "Terminal Screw Size",
            "M3"
          ],
          [
            "Screw Torque (N.m)",
            "0.5"
          ],
          [
            "Wire Gauge (AWG)",
            "28-12"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/240286Datasheet%20LPS-24-10A.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-process-controller",
    "name": "Multispan Process controller",
    "category": "process-control-instruments",
    "subCategory": "Process Indicators / Process Controllers",
    "image": "https://multispanindia.com/document/images/47781pic-38-regular.jpg",
    "shortDesc": "Model PIC-38 — Process Indicators / Process Controllers. Typical applications: Pressure, Level, Flow, and more.",
    "features": [],
    "applications": [
      "Pressure",
      "Level",
      "Flow",
      "Temp."
    ],
    "baseModel": "PIC-38",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "PIC-38"
          ],
          [
            "Display",
            "4-Digit 7-Seg 0.8”,Red LED Display"
          ],
          [
            "Size (mm)",
            "48 (H) X 96 (W) X 68 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "46 (H) X 92 (W)"
          ],
          [
            "Input",
            "0-10V DC, 0-20mA DC, 4-20mA DC (configurable)"
          ],
          [
            "Output",
            "1 Relay 1 C/O & 24V DC Transmitter"
          ],
          [
            "Range",
            "-999 To 9999 Selectable"
          ],
          [
            "Power Supply",
            "100 to 270V AC, 50 / 60 Hz, Approx 4VA"
          ],
          [
            "Protection Level (As per request)",
            "IP-65(Front side) AS per IS/IEC 60529:2001"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Output",
          "Size"
        ],
        "rows": [
          [
            "1",
            "PIC-38-A2-00",
            "1 Relay",
            "48x96x76(HxWxD)mm"
          ],
          [
            "2",
            "PIC-38-A2-01",
            "2 Relay",
            "48x96x76(HxWxD)mm"
          ],
          [
            "3",
            "PIC-1101-A2-00",
            "1 Relay",
            "96x96x54(HxWxD)mm"
          ],
          [
            "4",
            "PIC-1102-A2-00",
            "2 Relay",
            "96x96x54(HxWxD)mm"
          ],
          [
            "5",
            "PIC-4202-A2-00",
            "2 relay",
            "48x48x95(HxWxD)mm"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/5706PIC%2038-E3-00.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-process-indicator",
    "name": "Multispan Process Indicator",
    "category": "process-control-instruments",
    "subCategory": "Process Indicators / Process Controllers",
    "image": "https://multispanindia.com/document/images/77857pi-38-regular.jpg",
    "shortDesc": "Model PI-38 — Process Indicators / Process Controllers. Typical applications: Pressure, Level, Flow, and more.",
    "features": [],
    "applications": [
      "Pressure",
      "Level",
      "Flow",
      "Temperature"
    ],
    "baseModel": "PI-38",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Types",
            "Voltage: 0 to 10V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Current: 0 to 20mA DC,"
      },
      {
        "type": "divider",
        "text": "4 to 20mA DC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "I/P Filter Time",
            "0.1 Sec to 10.0 Sec"
          ],
          [
            "Resolution",
            "Decimal Point Selectable: 0.1, 0.01, 0.001, 0001"
          ],
          [
            "Range",
            "-999 to 9999 (For all I/P)"
          ],
          [
            "Indication Accuracy",
            "±1% FSD ± 1 digit"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(FSD - Full Scale Deflection)"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4-Digit, 7-Segment, 0.8” RED LED"
          ],
          [
            "Keys",
            "SET, SHIFT, INC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "48 (H) x 96 (W) x 26 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "45 (H) x 92(W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC, 50-60Hz"
          ],
          [
            "Power Consuption (VA Rating)",
            "2VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Aux Supply",
          "Display Color",
          "Size"
        ],
        "rows": [
          [
            "1",
            "PI-11-A2-00",
            "100-270V AC",
            "Red",
            "96x96x43(HxWxD)mm"
          ],
          [
            "2",
            "PI-21-A2-00",
            "100-270V AC",
            "Red",
            "72X72x45(HxWxD)mm"
          ],
          [
            "3",
            "PI-38-A2-00",
            "100-270V AC",
            "Red",
            "48x96x26(HxWxD)mm"
          ],
          [
            "4",
            "PI-38-A2-00-W",
            "100-270V AC",
            "White",
            "48x96x26(HxWxD)mm"
          ],
          [
            "5",
            "PI-38-D1-00",
            "24V DC",
            "Red",
            "48x96x26(HxWxD)mm"
          ],
          [
            "6",
            "PI-41-A2-00",
            "100-270V AC",
            "Red",
            "48x48x46(HxWxD)mm"
          ],
          [
            "7",
            "PI-54-A2-00",
            "100-270V AC",
            "Red",
            "38x62x63(HxWxD)mm"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/DATASHEET%20.PI.%20-384831.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-programmable-2-relay",
    "name": "Multispan Programmable 2 Relay",
    "category": "programmable-timers-counters",
    "subCategory": "Photo Electric Controller",
    "image": "https://multispanindia.com/document/images/383260_1764393997_9a379e.jpg",
    "shortDesc": "Model MPC-1062L — Photo Electric Controller. Typical applications: Dust Collector, Food Processing, Bag Filteration, and more.",
    "features": [],
    "applications": [
      "Dust Collector",
      "Food Processing",
      "Bag Filteration",
      "Hydrophonic",
      "Pharmaceutical"
    ],
    "baseModel": "MPC-1062L",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "MPC-1062L"
          ],
          [
            "Display",
            "Graphical Display"
          ],
          [
            "Size (mm)",
            "96 (H) X 96 (W) X 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ],
          [
            "Range",
            "0 - 999999 Batch Count"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "0 - 99 Milli Second Forward & Reverse"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input",
            "2-NPN Proxy for Forward & Reverse"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "NPN/PNP Color Mark Sensor"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output",
            "230V AC for Control Winding"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "230V AC for Main Winding & Buzzer"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "230V AC,50/60 Hz"
          ],
          [
            "Reset",
            "Reset at Front"
          ],
          [
            "memory",
            "Non Volatile"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condition"
          ],
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-programmable-2-relay-timer",
    "name": "Multispan Programmable 2-Relay Timer",
    "category": "programmable-timers-counters",
    "subCategory": "Programmable Timer",
    "image": "https://multispanindia.com/document/images/2066utr-1244-regular.jpg",
    "shortDesc": "Model UTR-1244 — Programmable Timer.",
    "features": [],
    "applications": [],
    "baseModel": "UTR-1244",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "UTR-1244"
          ],
          [
            "Dimension (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ],
          [
            "Input",
            "NPN/PNP Proximity Micro Switch Limit Switch"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Time Range"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Sec",
            "9.999/ 999.9/ 9999"
          ],
          [
            "Min",
            "99.59/ 999.9/ 9999"
          ],
          [
            "Hour",
            "99.59/ 999.9/ 9999"
          ],
          [
            "Output",
            "2-Relay, 1-C/O, 5A, 230V AC For Resistive Load"
          ],
          [
            "Operating Mode",
            "Forward - Reverse Timer"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Cyclic Timer"
      },
      {
        "type": "divider",
        "text": "Sequential Timer"
      },
      {
        "type": "divider",
        "text": "Combination Timer"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Power Supply",
            "100-270V AC, 50/60 Hz, Approx 4VA"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Output",
          "Aux Supply",
          "Size"
        ],
        "rows": [
          [
            "1",
            "UTR-1244-A2-00",
            "2 Relay",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "2",
            "UTR-2244-A2-00",
            "2 Relay",
            "100-270V AC",
            "72x72x45(HxWxD)mm"
          ],
          [
            "3",
            "UTR-4244-A2-00",
            "2 Relay",
            "100-270V AC",
            "48x48x70(HxWxD)mm"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-programmable-counter",
    "name": "Multispan Programmable counter",
    "category": "programmable-timers-counters",
    "subCategory": "Functional Counters",
    "image": "https://multispanindia.com/document/images/10543pc-1044-regular.jpg",
    "shortDesc": "Model PC-1044 — Functional Counters. Typical applications: Pharmaceutical Machinery, Product Counting Machinery, Packaging Machinery.",
    "features": [],
    "applications": [
      "Pharmaceutical Machinery",
      "Product Counting Machinery",
      "Packaging Machinery"
    ],
    "baseModel": "PC-1044",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Specification"
          ],
          [
            "Model",
            "PC-1044"
          ],
          [
            "Display UPPER",
            "4-Digit, 7-seg 0.70\", Red LED"
          ],
          [
            "Display LOWER",
            "4-Digit 7-Seg 0.50\", Green LED"
          ],
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ],
          [
            "Input",
            "NPN/PNP Proximity & Micro Switch"
          ],
          [
            "Output",
            "1-Relay, 2-C/O Contact, 5A 230V AC"
          ],
          [
            "Power Supply",
            "230V AC, 50Hz, Approx 4VA"
          ],
          [
            "Memory Selectable",
            "Yes/No"
          ],
          [
            "Reset",
            "Front Reset Key"
          ],
          [
            "Protection Level",
            "IP-65 (Front side) as per IS/IEC 60529:2001"
          ],
          [
            "Operating Temperature",
            "0°C to 55°C"
          ],
          [
            "Humidity",
            "Upto 95% RH, Non-Condensing"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Description",
          "Auxillary"
        ],
        "rows": [
          [
            "PC-1044-B1-00",
            "Input: NPN/PNP Proximity Range: 0 to 9999 Count Output: 1 Relay 2C/O Front Reset & Back Reset",
            "230V AC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "Note",
            "2 Relay Available on Request"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-rpm-controller",
    "name": "Multispan RPM Controller",
    "category": "programmable-timers-counters",
    "subCategory": "Functional Counters",
    "image": "https://multispanindia.com/document/images/76177rpm-1044-regular.jpg",
    "shortDesc": "Model RPM-1044 — Functional Counters.",
    "features": [],
    "applications": [],
    "baseModel": "RPM-1044",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "RPM- 1044"
          ],
          [
            "Display",
            "UPPER:- 4-Digit, 7-Seg 0.70”,red LED Display LOWER:- 4-Digit 7-Seg 0.50”,green LED Display"
          ],
          [
            "Size (mm)",
            "96 (H) X 96 (W) X 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ],
          [
            "Input",
            "NPN/PNP Proximity"
          ],
          [
            "Range",
            "4 to 9999 RPM"
          ],
          [
            "Rate Mode",
            "RPS, RPM, RPH (Programmable)"
          ],
          [
            "Output",
            "1st Relay as a low alarm 2nd Relay as a high alarm"
          ],
          [
            "Power Supply",
            "100 to 270V AC,50/60Hz,Approx 4VA"
          ],
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Description",
          "Auxillary"
        ],
        "rows": [
          [
            "RPM-1044-A2-00",
            "Input: NPN/PNP Proximity Range: 4 to 9999 RPM Output: 2 Relay 1C/O Unit Selection RPM, RPS, RPH",
            "100 to 270V AC"
          ],
          [
            "RPM-1044-A2-01",
            "Input: NPN/PNP Proximity Range: 4 to 9999 RPM Output: 1 Relay 2C/O Unit Selection RPM, RPS, RPH",
            "100 to 270V AC"
          ],
          [
            "RPM-1044-D1-00",
            "Input: NPN/PNP Proximity Range: 4 to 9999 RPM Output: 2 Relay 1C/O Unit Selection RPM, RPS, RPH",
            "24V DC"
          ],
          [
            "RPM-1044RT-A2-00",
            "Input: NPN/PNP Proximity Range: 4 to 5000 RPM Output: 4-20mA DC Retransmission Unit Selection RPM, RPS, RPH",
            "100 to 270V AC"
          ],
          [
            "RPM-1044RT-A2-01",
            "Input: NPN/PNP Proximity Range: 4 to 5000 RPM Output: 1 Relay 1C/O & 4-20mA DC Retransmission Unit Selection RPM, RPS, RPH",
            "100 to 270V AC"
          ],
          [
            "RPM-1044RT-A2-02",
            "Input: NPN/PNP Proximity Range: 4 to 5000 RPM Output: 0 to 10V DC Retransmission Unit Selection RPM, RPS, RPH",
            "100 to 270V AC"
          ],
          [
            "RPM-1044RT-D1-02",
            "Input: NPN/PNP Proximity Range: 4 to 5000 RPM Output: 0 to 10V DC Retransmission Unit Selection RPM, RPS, RPH",
            "24V DC"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-signal-isolator",
    "name": "Multispan Signal Isolator",
    "category": "process-control-instruments",
    "subCategory": "Isolator",
    "image": "https://multispanindia.com/document/images/12262mi-632-regular.jpg",
    "shortDesc": "Model MI-632 — Isolator. Typical applications: Field Interface device, Impedance matching of transmitters and receiver, Isolation of field signals, and more.",
    "features": [],
    "applications": [
      "Field Interface device",
      "Impedance matching of transmitters and receiver",
      "Isolation of field signals",
      "Distribution of signals",
      "Factory automation",
      "Powering of field Transmitters"
    ],
    "baseModel": "MI-632",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input",
            "0-20 mA DC, 4-20 mA DC, 0-10 V DC (Factory Set)"
          ],
          [
            "Input Inpedance",
            "<100Ω"
          ],
          [
            "CMRR",
            ">120dp (Typical)"
          ],
          [
            "Temperature Co-efficient",
            "<100 PPM"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "76 (H) X 28 (W) X 85 (D)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output 1 & 2",
            "0-20 mA DC, 4-20 mA DC, 0-10 V DC (Factory Set)"
          ],
          [
            "Response Type",
            "<150ms"
          ],
          [
            "Output Inpedance",
            "<500Ω"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Auxiliary Voltage",
            "100 to 270V AC,50/60Hz or 24 V DC (Factory Set)"
          ],
          [
            "Power Consumption ( VA Rating )",
            "5VA @230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ISOLATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation Type",
            "Optical - 3 way"
          ],
          [
            "Isolation between supply, input & Output",
            "At least 1.5KV AC for 1 min"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "sr.no",
          "Model No",
          "Input",
          "Output 1",
          "Output 2",
          "Aux.supply"
        ],
        "rows": [
          [
            "1",
            "MI-631-E3-AA",
            "4-20mA DC",
            "4-20mA DC",
            "",
            "100-270V AC/DC"
          ],
          [
            "2",
            "MI-631-E3-AV",
            "4-20mA DC",
            "0-10V DC",
            "",
            "100-270V AC/DC"
          ],
          [
            "3",
            "MI-631-E3-VA",
            "0-10V DC",
            "4-20mA DC",
            "",
            "100-270V AC/DC"
          ],
          [
            "4",
            "MI-631-E3-VV",
            "0-10V DC",
            "0-10V DC",
            "",
            "100-270V AC/DC"
          ],
          [
            "5",
            "MI-631-24-AA",
            "4-20mA DC",
            "4-20mA DC",
            "",
            "24V DC"
          ],
          [
            "6",
            "MI-631-24-AV",
            "4-20mA DC",
            "0-10V DC",
            "",
            "24V DC"
          ],
          [
            "7",
            "MI-631-24-VA",
            "0-10V DC",
            "4-20mA DC",
            "",
            "24V DC"
          ],
          [
            "8",
            "MI-631-24-VV",
            "0-10V DC",
            "0-10V DC",
            "",
            "24V DC"
          ],
          [
            "9",
            "MI-632-E3-A-AA",
            "4-20mA DC",
            "4-20mA DC",
            "4-20mADC",
            "100-270V AC/DC"
          ],
          [
            "10",
            "MI-632-E3-A-VV",
            "4-20mA DC",
            "0-10V DC",
            "0-10V DC",
            "100-270V AC/DC"
          ],
          [
            "11",
            "MI-632-E3-A-AV",
            "4-20mA DC",
            "4-20mA DC",
            "0-10V DC",
            "100-270V AC/DC"
          ],
          [
            "12",
            "MI-632-E3-V-VV",
            "0-10V DC",
            "0-10V DC",
            "0-10V DC",
            "100-270V AC/DC"
          ],
          [
            "13",
            "MI-632-E3-V-AA",
            "0-10V DC",
            "4-20mA DC",
            "4-20mA DC",
            "100-270V AC/DC"
          ],
          [
            "14",
            "MI-632-E3-V-AV",
            "0-10V DC",
            "4-20mA DC",
            "0-10V DC",
            "100-270V AC/DC"
          ],
          [
            "15",
            "MI-632-24-A-AA",
            "4-20mA DC",
            "4-20mA DC",
            "4-20mADC",
            "24V DC"
          ],
          [
            "16",
            "MI-632-24-A-VV",
            "4-20mA DC",
            "0-10V DC",
            "0-10V DC",
            "24V DC"
          ],
          [
            "17",
            "MI-632-24-A-AV",
            "4-20mA DC",
            "4-20mA DC",
            "0-10V DC",
            "24V DC"
          ],
          [
            "18",
            "MI-632-24-V-VV",
            "0-10V DC",
            "0-10V DC",
            "0-10V DC",
            "24V DC"
          ],
          [
            "19",
            "MI-632-24-V-AA",
            "0-10V DC",
            "4-20mA DC",
            "4-20mA DC",
            "24V DC"
          ],
          [
            "20",
            "MI-632-24-V-AV",
            "0-10V DC",
            "4-20mA DC",
            "0-10V DC",
            "24V DC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/4929MI-632.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-signal-isolator-temperature-input",
    "name": "Multispan Signal Isolator-Temperature Input",
    "category": "process-control-instruments",
    "subCategory": "Isolator",
    "image": "https://multispanindia.com/document/images/38274mi-532p-regular-image.jpg",
    "shortDesc": "Model MI-532P — Isolator. Typical applications: Field Interface Device, Impedance Matching of Transmitters and Receiver, Isolation of Field Signals, and more.",
    "features": [],
    "applications": [
      "Field Interface Device",
      "Impedance Matching of Transmitters and Receiver",
      "Isolation of Field Signals",
      "Distribution of Signals",
      "Factory Automation",
      "Powering of Field Transmitters"
    ],
    "baseModel": "MI-532P",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input",
            "PT-100/3W"
          ],
          [
            "Input Range",
            "0 to 400 °C"
          ],
          [
            "CMRR",
            ">120dp (Typical)"
          ],
          [
            "Temperature Co-efficient",
            "<100 PPM"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "100 (H) X 17.5 (W) X 115 (D)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output 1 & 2",
            "4 to 20mA DC, 4 to 20mA DC, 0 to 10V DC (Factory Set)"
          ],
          [
            "Response Type",
            "<150ms"
          ],
          [
            "Output Inpedance",
            "<500Ω"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Auxiliary Voltage",
            "100 to 270V AC or 24V DC (Factory Set)"
          ],
          [
            "Power Consumption ( VA Rating )",
            "5VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ISOLATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation Type",
            "Optical - 3 way"
          ],
          [
            "Isolation between supply, input & Output",
            "At least 1.5KV AC for 1 min"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/7686MI-532P.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-slim-signal-isolator",
    "name": "Multispan Slim Signal Isolator",
    "category": "process-control-instruments",
    "subCategory": "Isolator",
    "image": "https://multispanindia.com/document/images/68634mi-431-regular.jpg",
    "shortDesc": "Model MI-431 — Isolator. Typical applications: Field Interface device, Impedance matching of, transmitters and receiver, and more.",
    "features": [],
    "applications": [
      "Field Interface device",
      "Impedance matching of",
      "transmitters and receiver",
      "Isolation of field signals",
      "Distribution of signals",
      "Factory automation",
      "Powering of field Transmitters"
    ],
    "baseModel": "MI-431",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input",
            "4- 20mA DC"
          ],
          [
            "Input Inpedance",
            ">100Ω"
          ],
          [
            "CMRR",
            ">120dp (Typical)"
          ],
          [
            "Temperature Co-efficient",
            "<100 PPM"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Dimension"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (HxWxD) mm",
            "100 X 12.5 X 115"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ACCURACY"
      },
      {
        "type": "divider",
        "text": "Class 0.2"
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output",
            "4 to 20mA DC"
          ],
          [
            "Response Type",
            "<150ms"
          ],
          [
            "Transmitter Supply",
            "24V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Auxiliary Voltage",
            "100 to 270V AC,50/60Hz"
          ],
          [
            "Power Consumption ( VA Rating )",
            "5VA @230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ISOLATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation Type",
            "Optical - 3 way"
          ],
          [
            "Isolation between supply, input & Output",
            "At least 1.5KV AC for 1 min"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "sr.no",
          "Model No",
          "Input",
          "Output 1",
          "Output 2",
          "Aux.supply"
        ],
        "rows": [
          [
            "1",
            "MI-431-A2-AA",
            "4-20mA DC",
            "4-20mA DC",
            "",
            "100-270V AC"
          ],
          [
            "2",
            "MI-431-A2-AV",
            "4-20mA DC",
            "0-10V DC",
            ""
          ],
          [
            "3",
            "MI-431-A2-VA",
            "0-10V DC",
            "4-20mA DC",
            ""
          ],
          [
            "4",
            "MI-431-A2-VV",
            "0-10V DC",
            "0-10V DC",
            ""
          ],
          [
            "5",
            "MI-431-24-AA",
            "4-20mA DC",
            "4-20mA DC",
            "",
            "24V DC"
          ],
          [
            "6",
            "MI-431-24-AV",
            "4-20mA DC",
            "0-10V DC",
            ""
          ],
          [
            "7",
            "MI-431-24-VA",
            "0-10V DC",
            "4-20mA DC",
            ""
          ],
          [
            "8",
            "MI-431-24-VV",
            "0-10V DC",
            "0-10V DC",
            ""
          ],
          [
            "9",
            "MI-532-A2-A-AA",
            "4-20mA DC",
            "4-20mA DC",
            "4-20mADC",
            "100-270V AC"
          ],
          [
            "10",
            "MI-532-A2-A-VV",
            "4-20mA DC",
            "0-10V DC",
            "0-10V DC"
          ],
          [
            "11",
            "MI-532-A2-A-AV",
            "4-20mA DC",
            "4-20mA DC",
            "0-10V DC"
          ],
          [
            "12",
            "MI-532-A2-V-VV",
            "0-10V DC",
            "0-10V DC",
            "0-10V DC"
          ],
          [
            "13",
            "MI-532-A2-V-AA",
            "0-10V DC",
            "4-20mA DC",
            "4-20mA DC"
          ],
          [
            "14",
            "MI-532-A2-V-AV",
            "0-10V DC",
            "4-20mA DC",
            "0-10V DC"
          ],
          [
            "15",
            "MI-532-24-A-AA",
            "4-20mA DC",
            "4-20mA DC",
            "4-20mADC",
            "24V DC"
          ],
          [
            "16",
            "MI-532-24-A-VV",
            "4-20mA DC",
            "0-10V DC",
            "0-10V DC"
          ],
          [
            "17",
            "MI-532-24-A-AV",
            "4-20mA DC",
            "4-20mA DC",
            "0-10V DC"
          ],
          [
            "18",
            "MI-532-24-V-VV",
            "0-10V DC",
            "0-10V DC",
            "0-10V DC"
          ],
          [
            "19",
            "MI-532-24-V-AA",
            "0-10V DC",
            "4-20mA DC",
            "4-20mA DC"
          ],
          [
            "20",
            "MI-532-24-V-AV",
            "0-10V DC",
            "4-20mA DC",
            "0-10V DC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/7781MI-431.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-star-delta-timer",
    "name": "Multispan Star Delta Timer",
    "category": "programmable-timers-counters",
    "subCategory": "Din Rail Timer - Electronics Time Relay",
    "image": "https://multispanindia.com/document/images/43372sdx-22-regular.jpg",
    "shortDesc": "Model SDX-22 — Din Rail Timer - Electronics Time Relay.",
    "features": [],
    "applications": [],
    "baseModel": "SDX-22",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Specification"
          ],
          [
            "Power Supply",
            "230 V AC ±20%, 50 Hz 415 V AC ±20%, 50 Hz"
          ],
          [
            "Output",
            "2-Relay O/P (1-C/O, 5A 230 VAC Resistive Load) - 1st Relay for Star Connection & 2nd Relay for Delta Connection"
          ],
          [
            "Time Range",
            "0 to 60 sec"
          ],
          [
            "Pause Time",
            "50 ms or 100 ms selection by front key"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/427158SDX-22-02.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-star-delta-timers",
    "name": "Multispan Star Delta Timers",
    "category": "programmable-timers-counters",
    "subCategory": "Din Rail Timer - Electronics Time Relay",
    "image": "https://multispanindia.com/document/images/90621sd-22-regular.jpg",
    "shortDesc": "Model SD-22 — Din Rail Timer - Electronics Time Relay.",
    "features": [],
    "applications": [],
    "baseModel": "SD-22",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Specification"
          ],
          [
            "Power Supply",
            "230 V AC ±20%, 50 Hz"
          ],
          [
            "Output",
            "2-Relay O/P (1-C/O, 5A 230 VAC Resistive Load) - 1st Relay for Star Connection & 2nd Relay for Delta Connection"
          ],
          [
            "Time Range",
            "0 to 60 sec"
          ],
          [
            "Pause Time",
            "50 ms or 100 ms selection by front key"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Model",
          "Description",
          "Supply"
        ],
        "rows": [
          [
            "SD-22-B1-00",
            "Range: 0 to 60 Sec Output: 2 Relay",
            "230V AC"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "SD-224-E1-00",
            "415V AC"
          ],
          [
            "SD-221-00",
            "110V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-star-delta-timers-sd-17",
    "name": "Multispan Star Delta Timers - SD-17",
    "category": "programmable-timers-counters",
    "subCategory": "Din Rail Timer - Electronics Time Relay",
    "image": "https://multispanindia.com/document/images/852082_1784884465_8a2070.jpg",
    "shortDesc": "Model SD-17 — Din Rail Timer - Electronics Time Relay.",
    "features": [],
    "applications": [],
    "baseModel": "SD-17",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Specification"
          ],
          [
            "Power Supply",
            "230 V AC ±20%, 50 Hz"
          ],
          [
            "Output",
            "2-Relay O/P (1-C/O, 5A 230 VAC Resistive Load) - 1st Relay for Star Connection & 2nd Relay for Delta Connection"
          ],
          [
            "Time Range",
            "0 to 60 sec"
          ],
          [
            "Pause Time",
            "50ms, 100ms 150ms or 200ms selection by front Knob"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-three-phase-power-analyzer",
    "name": "Multispan Three Phase Power Analyzer",
    "category": "power-energy-meter",
    "subCategory": "Digital AVF Meter",
    "image": "https://multispanindia.com/document/images/39589pm-112-regular.jpg",
    "shortDesc": "Model PM-112 — Digital AVF Meter. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "PM-112",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Signal",
            "3Ø 4 Wire"
          ],
          [
            "CT Primary",
            "UP to 9999A (Programmable)"
          ],
          [
            "System PF",
            "0.100 - 1.000"
          ],
          [
            "Frequency",
            "45.0 to 65.0 Hz"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY, KEY & LED"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4 Digit , 3 Line 7 Seg. 0.56”Red LED"
          ],
          [
            "Key",
            "PRG , Amp, Volt"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 43 (D) mm"
          ],
          [
            "Panel Cutout",
            "92 (H) x 92 (W) mm"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ACCURACY"
      },
      {
        "type": "divider",
        "text": "Class 0.5 (Standard)"
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Self Powered",
            "100 to 270V AC (VL1 & N)"
          ],
          [
            "Burden",
            "3VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER"
      },
      {
        "type": "kv",
        "rows": [
          [
            "kW Total",
            "0.000 - 9999 kW"
          ],
          [
            "kVA Total",
            "0.000 - 9999 kVA"
          ],
          [
            "kVAr Total",
            "0.000 - 9999 kVAr"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENTAL CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Working Temperature",
            "0 to 55°C"
          ],
          [
            "Storage Temperature",
            "0 to 55°C"
          ],
          [
            "Relative Humidity",
            "95 % RH Non-Condensing"
          ],
          [
            "Protection Level ( As per Request )",
            "IP-65 (Front side As per IS/IEC 60529 : 2001)"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-thumbwheel-counter",
    "name": "Multispan Thumbwheel Counter",
    "category": "programmable-timers-counters",
    "subCategory": "Functional Counters",
    "image": "https://multispanindia.com/document/images/106974tws-1400f-regular.jpg",
    "shortDesc": "Model TWS-1400F — Functional Counters.",
    "features": [],
    "applications": [],
    "baseModel": "TWS-1400F",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "TWS - 1400F"
          ],
          [
            "Display",
            "4-Digit, 7-Seg 0.56”,RED LED Display"
          ],
          [
            "Size (mm)",
            "96 (H) X 96 (W) X 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ],
          [
            "Input",
            "Proximity NPN / PNP (Selectable) & Micro Switch"
          ],
          [
            "Output",
            "1-Relay, 2-C/O Contact, 230V AC, 5A"
          ],
          [
            "Power Supply",
            "100 to 270V AC, 50 Hz, Approx 4VA"
          ],
          [
            "Memory",
            "Yes / No (Selectable)"
          ],
          [
            "Delay ON/Delay OFF",
            "Selectable"
          ],
          [
            "Over Counting /No Over Counting",
            "Selectable"
          ],
          [
            "Speed Selection",
            "Selectable"
          ],
          [
            "Protection Level (As per request)",
            "IP-65(Front side) AS per IS/IEC 60529:2001"
          ],
          [
            "Operating Temperature",
            "0°C To 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH Non Condensing"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-thumbwheel-onoff-timer",
    "name": "Multispan Thumbwheel –On/Off Timer",
    "category": "programmable-timers-counters",
    "subCategory": "Thumbwheel Timer",
    "image": "https://multispanindia.com/document/images/65553mdt-1310f-regular.jpg",
    "shortDesc": "Model MDT-1310F — Thumbwheel Timer. Typical applications: Packaging Machinery, Printing Industries, Furnace & Boilers, and more.",
    "features": [],
    "applications": [
      "Packaging Machinery",
      "Printing Industries",
      "Furnace & Boilers",
      "Automation Panel",
      "Food Industry"
    ],
    "baseModel": "MDT-1310F",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Description",
            "MDT-1310F"
          ],
          [
            "Dimension (mm)",
            "96 (H) X 96 (W) X 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) X 92 (W)"
          ],
          [
            "Display",
            "7-Segment, 3-Digit, 0.56\", RED LED"
          ],
          [
            "Timer Type",
            "Multi-Range Timer"
          ],
          [
            "Resetting Timer",
            "RST key in Front and Back"
          ],
          [
            "Counting Direction",
            "Up or Down Counting"
          ],
          [
            "Output",
            "1-Relay, 2-C/O"
          ],
          [
            "Input (Range)",
            "Start pulse M/S"
          ],
          [
            "Relay Rating",
            "230V AC, 5Amp"
          ],
          [
            "Supply",
            "230V AC, 50Hz, 4VA"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Output",
          "Aux Supply",
          "Size"
        ],
        "rows": [
          [
            "1",
            "MDT-1310F-B1-00",
            "1Relay 2C/O",
            "230V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "2",
            "MDT-2312F-A2-00",
            "1Relay 2C/O",
            "100-270V AC",
            "72x72x45(HxWxD)mm"
          ],
          [
            "3",
            "MDT-4310-A2-00",
            "1Relay 2C/O",
            "100-270V AC",
            "48x48x102(HxWxD)mm"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-time-control-switch",
    "name": "Multispan Time Control Switch",
    "category": "programmable-timers-counters",
    "subCategory": "Time Control Switch",
    "image": "https://multispanindia.com/document/images/173906_1765178678_3dddd0.jpg",
    "shortDesc": "Model TCS-35 — Time Control Switch. Typical applications: Home Automation, Commercial Buildings, Irrigation Systems:, and more.",
    "features": [],
    "applications": [
      "Home Automation",
      "Commercial Buildings",
      "Irrigation Systems:",
      "Security Systems:",
      "Public Utilities"
    ],
    "baseModel": "TCS-35",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Voltage",
            "230 AC ± 10%"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Frequency"
      },
      {
        "type": "divider",
        "text": "50 Hz to 60 Hz"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Text LCD (Without Backlight)"
          ],
          [
            "Keys",
            "PRG, SHIFT, UP, DOWN, ENT, ESC, RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Dimension (mm)",
            "90 (H) x 35 (W) x 62 (D) mm"
          ],
          [
            "Weekly Program",
            "For Relay 1 Total 50 On Steps And 50 Off Steps"
          ],
          [
            "Holiday Setting",
            "24 Date Maximum"
          ],
          [
            "Clock",
            "12 Hr (AM / PM) And 24 Hr Selection"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 nos."
          ],
          [
            "Relay Type",
            "1 C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "16A, 230V AC Resistive Load 24V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/DATA%20SHEET%20TCS-35760837.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-universal-input-pid-controller-with-analog-output-rs-485-modbus-facility",
    "name": "Multispan Universal Input PID Controller with Analog Output & RS-485 Modbus Facility",
    "category": "temperature-controller",
    "subCategory": "Universal PID Controller",
    "image": "https://multispanindia.com/document/images/101463ptc-1202a-m1-regular.jpg",
    "shortDesc": "Model PTC-1202A-M1 — Universal PID Controller. Typical applications: Scientific Industry, Boiler Industry, Food Process Industry, and more.",
    "features": [],
    "applications": [
      "Scientific Industry",
      "Boiler Industry",
      "Food Process Industry",
      "Power Plant"
    ],
    "baseModel": "PTC-1202A-M1",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Input Types",
            "Input",
            "Range"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "J",
            "0 to 600°C"
          ],
          [
            "K",
            "0 to 1200°C"
          ],
          [
            "R",
            "0 to 1800°C"
          ],
          [
            "E",
            "0 to 600°C"
          ],
          [
            "PT-100",
            "-99 to 400°C"
          ],
          [
            "PT.1",
            "-99.9 to 400.0°C"
          ],
          [
            "0-10V DC",
            "-1999 to 9999"
          ],
          [
            "0-20mA DC",
            "-1999 to 9999"
          ],
          [
            "4-20mA DC",
            "-1999 to 9999"
          ],
          [
            "Resolution",
            "J,K,R,E,PT-100 = 1°C"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "PT.1 = 0.1°C"
      },
      {
        "type": "divider",
        "text": "0-10V DC,0-20mA DC,4-20mA DC"
      },
      {
        "type": "divider",
        "text": "= 0.1,0.01,0.001,0001"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Indication Accuracy",
            "±1% of FSD ± 1 Count"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(FSD : full scale deflection)"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper : 4-Digit,7-Seg 0.8” RED LED Lower : 4-Digit,7-Seg 0.56” Green LED"
          ],
          [
            "Keys",
            "SET, INC, DEC, ENT"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 54 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CONTROL METHOD:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Heating",
            "1. PID Control with Auto-Tuning"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2. ON-OFF Control"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Cooling",
            "1. BL.TP (Blower Time Proportion)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2. ON-OFF Control"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Alarm",
            "High/Low/Inband/Outband/ Absolute Low/Absolute Outband"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 nos."
          ],
          [
            "Relay Type",
            "1 C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "5A, 230V AC/30V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Analog Output"
      },
      {
        "type": "divider",
        "text": "4 to 20mA DC"
      },
      {
        "type": "divider",
        "text": "Transmitter supply"
      },
      {
        "type": "divider",
        "text": "24V DC"
      },
      {
        "type": "divider",
        "text": "Modbus Communication"
      },
      {
        "type": "divider",
        "text": "RS-485"
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC, 50-60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 7 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(non-condensing)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Protection Level",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Input",
          "Output",
          "RS-485 Modbus",
          "Aux Supply",
          "Size"
        ],
        "rows": [
          [
            "1",
            "PTC-1202-A2-00",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "2 Relay",
            "",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "2",
            "PTC-1202-M1-A2-00",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "2 Relay",
            "yes",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "3",
            "PTC-1202A-A2-00A",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "4-20mA DC + 2 relay",
            "",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "4",
            "PTC-1202A-A2-00V",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "0-10V DC + 2 relay",
            "",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "5",
            "PTC-1202A-M1-A2-00A",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "4-20mA DC + 2 relay",
            "yes",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "6",
            "PTC-1202A-M1-A2-00V",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "0-10V DC + 2 relay",
            "yes",
            "100-270V AC",
            "96x96x54(HxWxD)mm"
          ],
          [
            "7",
            "PTC-4202-A2-00",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "2 Relay",
            "",
            "100-270V AC",
            "48x48x95(HxWxD)mm"
          ],
          [
            "8",
            "PTC-4202-M1-A2-00",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "2 Relay",
            "yes",
            "100-270V AC",
            "48x48x95(HxWxD)mm"
          ],
          [
            "9",
            "PTC-4202A-A2-00A",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "4-20mA DC + 2 relay",
            "",
            "100-270V AC",
            "48x48x95(HxWxD)mm"
          ],
          [
            "10",
            "PTC-4202A-A2-00V",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "0-10V DC + 2 relay",
            "",
            "100-270V AC",
            "48x48x95(HxWxD)mm"
          ],
          [
            "11",
            "PTC-4202A-M1-A2-00A",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "4-20mA DC + 2 relay",
            "yes",
            "100-270V AC",
            "48x48x95(HxWxD)mm"
          ],
          [
            "12",
            "PTC-4202A-M1-A2-00V",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "0-10V DC + 2 relay",
            "yes",
            "100-270V AC",
            "48x48x95(HxWxD)mm"
          ],
          [
            "13",
            "PTC-382-A2-00",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "2 Relay",
            "",
            "100-270V AC",
            "48x96x76(HxWxD)mm"
          ],
          [
            "14",
            "PTC-382-M1-A2-00",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "2 Relay",
            "yes",
            "100-270V AC",
            "48x96x76(HxWxD)mm"
          ],
          [
            "15",
            "PTC-382A-A2-00A",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "4-20mA DC + 2 relay",
            "",
            "100-270V AC",
            "48x96x76(HxWxD)mm"
          ],
          [
            "16",
            "PTC-382A-A2-00V",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "0-10V DC + 2 relay",
            "",
            "100-270V AC",
            "48x96x76(HxWxD)mm"
          ],
          [
            "17",
            "PTC-382A-M1-A2-00A",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "4-20mA DC + 2 relay",
            "yes",
            "100-270V AC",
            "48x96x76(HxWxD)mm"
          ],
          [
            "18",
            "PTC-382A-M1-A2-00V",
            "J/K/Pt-100/4-20mA DC/0-20mA DC/0-10V DC (Selectable)",
            "0-10V DC + 2 relay",
            "yes",
            "100-270V AC",
            "48x96x76(HxWxD)mm"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/9579PTC-1202A-M1.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-universal-input-single-display-pid-controller",
    "name": "Multispan Universal Input Single Display PID Controller",
    "category": "temperature-controller",
    "subCategory": "Basic Temperature Controller",
    "image": "https://multispanindia.com/document/images/41417utc-114-regular.jpg",
    "shortDesc": "Model UTC-114 — Basic Temperature Controller. Typical applications: Packaging Machinery, Extrusion Machinery, Furnace & Boilers, and more.",
    "features": [],
    "applications": [
      "Packaging Machinery",
      "Extrusion Machinery",
      "Furnace & Boilers",
      "Ovens & Incubators",
      "Food Industry"
    ],
    "baseModel": "UTC-114",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Input Types",
            "Input",
            "Range"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "J",
            "0 to 600°C"
          ],
          [
            "K",
            "0 to 1200°C"
          ],
          [
            "PT-100",
            "-99 to 400°C"
          ],
          [
            "PT.1",
            "-99.9 to 400.0°C"
          ],
          [
            "Resolution",
            "J,K,PT-100 = 1°C, PT.1 = 0.1°C"
          ],
          [
            "Indication Accuracy",
            "±1% of FSD ± 1°C"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(FSD:- Full Scale Deflection)"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4-Digit, 7-Segment, 0.8” Red"
          ],
          [
            "Keys",
            "SET, INC, DEC, ENT"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "96 (H) x 96 (W) x 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CONTROL METHOD:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Heating",
            "1. PID control with Auto-Tuning"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2. (TP) Time Proportional"
      },
      {
        "type": "divider",
        "text": "3. On-Off Control"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Cooling",
            "ON-OFF control"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1 Nos"
          ],
          [
            "Relay Type",
            "1C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "10A, 230V AC / 28V DC (Reg. Load)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "SSR Drive Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output Signal",
            "12V DC, 30mA DC (On-Off condition)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply Voltage",
            "100 to 270V AC, 50-60Hz"
          ],
          [
            "Power Consumption (VA Rating)",
            "4VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity(As per request)",
            "Upto 95% RH (non-condensing)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "IP-65 (Front side) As per IS/IEC 60529 : 2001"
      },
      {
        "type": "divider",
        "text": "Protection Level"
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Input",
          "Output",
          "Aux Supply",
          "Display",
          "Size"
        ],
        "rows": [
          [
            "1",
            "UTC-114-A2-R",
            "J/K/Pt-100 (Selectable)",
            "Relay || SSR",
            "100-270V AC",
            "Red",
            "96x96x43(HxWxD)mm"
          ],
          [
            "2",
            "UTC-114-A2-W",
            "J/K/Pt-100 (Selectable)",
            "Relay || SSR",
            "100-270V AC",
            "White",
            "96x96x43(HxWxD)mm"
          ],
          [
            "3",
            "UTC-214-A2-R",
            "J/K/Pt-100 (Selectable)",
            "Relay || SSR",
            "100-270V AC",
            "Red",
            "72x72x45(HxWxD)mm"
          ],
          [
            "4",
            "UTC-214-A2-W",
            "J/K/Pt-100 (Selectable)",
            "Relay || SSR",
            "100-270V AC",
            "White",
            "72x72x45(HxWxD)mm"
          ],
          [
            "5",
            "UTC-413P-A2-R",
            "J/K/Pt-100 (Selectable)",
            "Relay || SSR",
            "100-270V AC",
            "Red",
            "48x48x70(HxWxD)mm"
          ],
          [
            "6",
            "UTC-413P-A2-W",
            "J/K/Pt-100 (Selectable)",
            "Relay || SSR",
            "100-270V AC",
            "White",
            "48x48x70(HxWxD)mm"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/Datasheet%20UTC%201143889.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-universal-temperature-controller",
    "name": "Multispan Universal temperature controller",
    "category": "temperature-controller",
    "subCategory": "PID Temperature Controller",
    "image": "https://multispanindia.com/document/images/611892_1766664351_479f6d.jpg",
    "shortDesc": "Model UTC-4204A-M1 — PID Temperature Controller. Typical applications: Pharmaceutical Industries, Extrusion Machinery, Furnace & Boilers, and more.",
    "features": [],
    "applications": [
      "Pharmaceutical Industries",
      "Extrusion Machinery",
      "Furnace & Boilers",
      "Ovens & Incubators",
      "Process Industry"
    ],
    "baseModel": "UTC-4204A-M1",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION:"
      },
      {
        "type": "grid",
        "header": null,
        "rows": [
          [
            "Input Types",
            "Input",
            "Range"
          ]
        ]
      },
      {
        "type": "kv",
        "rows": [
          [
            "J",
            "0 to 600°C"
          ],
          [
            "K",
            "0 to 1200°C"
          ],
          [
            "R",
            "0 to 1600°C,"
          ],
          [
            "S",
            "0 to 1800°C,"
          ],
          [
            "PT-100",
            "-99 to 400°C,"
          ],
          [
            "PT.1",
            "-99.9 to 400.0°C,"
          ],
          [
            "Resolution",
            "J,K,R,S,PT-100 = 1°C PT.1 = 0.1°C"
          ],
          [
            "Indication Accuracy",
            "0.5% Full Scale ± 1 Digit"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEYS:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 4 digit, 7 segment, 0.54”"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Lower: 4 digit, 7 segment, 0.30”"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "SET, ENT, INC, DEC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "48 (H) x 48 (W) x 103 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "45 (H) x 45 (W)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "CONTROL METHOD:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Heating",
            "1. PID control with Auto-Tuning"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2. ON-OFF control"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Cooling",
            "1) BL.TP (Blower Time Proportion)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "2) ON-OFF control"
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC, 50-60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 7 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION :"
      },
      {
        "type": "divider",
        "text": "Relay Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "4 Nos"
          ],
          [
            "Relay Type",
            "1R(NO-C-NC),2, 3 & 4R(NO-C)"
          ],
          [
            "Rating",
            "5A, 230V AC/30 V DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Analog Output"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Controlling Output",
            "4 to 20mA DC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Modbus Communication"
      },
      {
        "type": "divider",
        "text": "RS-485"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(non-condensing)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Sr.no",
          "Model No",
          "Input",
          "Output",
          "Analog O/P",
          "Aux Supply",
          "Display"
        ],
        "rows": [
          [
            "1",
            "UTC-4204A-M1-E3-00A",
            "J/K/Pt-100/R/S Selectable",
            "4 Relay",
            "4-20mA DC",
            "100-270V AC/DC",
            "White + Green"
          ],
          [
            "2",
            "UTC-4204A-M1-E3-00V",
            "J/K/Pt-100/R/S Selectable",
            "4 Relay",
            "0-10V DC",
            "100-270V AC/DC",
            "White + Green"
          ],
          [
            "3",
            "UTC-4204A-M1-E3-01A",
            "J/K/Pt-100/R/S Selectable",
            "1 SSR + 3 Relay",
            "4-20mA DC",
            "100-270V AC/DC",
            "White + Green"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": true
  },
  {
    "id": "multispan-universal-timer-relay",
    "name": "Multispan Universal Timer Relay",
    "category": "programmable-timers-counters",
    "subCategory": "Din Rail Timer - Electronics Time Relay",
    "image": "https://multispanindia.com/document/images/27171utr-35regular1.jpg",
    "shortDesc": "Model UTR-35 — Din Rail Timer - Electronics Time Relay. Typical applications: Control & Relay Panel, Energy Management System, DG Set Panels, and more.",
    "features": [],
    "applications": [
      "Control & Relay Panel",
      "Energy Management System",
      "DG Set Panels",
      "LT / HT Panel",
      "Power Control Center Panels",
      "Motor Control Center Panels"
    ],
    "baseModel": "UTR-35",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input (Start Pulse)",
            "Start / Rst Micro switch"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Micro Switch"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Time Range",
            "Sec (9.99/99.9/999)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Min (9.59/99.9/999)"
      },
      {
        "type": "divider",
        "text": "Hour (9.59/99.9/999)"
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "Upper: 3 digit, 7 segment, 0.4”"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Lower: 3 digit, 7 segment, 0.28”"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "SET , UP, DOWN/RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Dimension (mm)",
            "90 (H) x 35 (W) x 61.5 (D)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Mode",
            "Cyclic On Timer"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Cyclic Off Timer"
      },
      {
        "type": "divider",
        "text": "Delay On Timer"
      },
      {
        "type": "divider",
        "text": "Delay Off Timer"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Counting Direction",
            "UP/ DOWN"
          ],
          [
            "Reset Option",
            "Front Panel Reset"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Terminal Reset"
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "1Relay 1 C/O"
          ],
          [
            "Rating",
            "5A, 230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "100 to 270V AC, 50-60Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "Approx 4 VA @ 230V AC MAX"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(non-condensing)"
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-vibrator-controller",
    "name": "Multispan Vibrator Controller",
    "category": "programmable-timers-counters",
    "subCategory": "Vibrator Controller",
    "image": "https://multispanindia.com/document/images/92466mvc-regular.jpg",
    "shortDesc": "Model MVC-72N — Vibrator Controller. Typical applications: Packaging Machinery, Furnace & Boilers, Ovens & Incubators, and more.",
    "features": [],
    "applications": [
      "Packaging Machinery",
      "Furnace & Boilers",
      "Ovens & Incubators",
      "Food Industry"
    ],
    "baseModel": "MVC-72N",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "MVC-72N"
          ],
          [
            "Display",
            "2-Digit, 7-Seg 0.56” RED LED Display"
          ],
          [
            "Size (mm)",
            "72 (H) X 72 (W) X 45 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "68 (H) X 68 (W)"
          ],
          [
            "Input",
            "NPN/PNP Proximity (Selectable)"
          ],
          [
            "Power Supply",
            "230V AC, 50 Hz, Approx 4VA"
          ],
          [
            "Output",
            "Vibration Control Output (1 to 99%) 5A"
          ],
          [
            "Indication",
            "Power ON, Run, STOP"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/MVC-72N5246.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-voltage-monitoring-relay-panel-mount",
    "name": "Multispan Voltage Monitoring Relay- Panel Mount",
    "category": "protection-relays",
    "subCategory": "Voltage Protection Relay",
    "image": "https://multispanindia.com/document/images/76301vmr-132-regular.jpg",
    "shortDesc": "Model VMR-132 — Voltage Protection Relay. Typical applications: DG Set Panels, Motor Control Center Panels, Control Panels, and more.",
    "features": [],
    "applications": [
      "DG Set Panels",
      "Motor Control Center Panels",
      "Control Panels",
      "Distribution Panels"
    ],
    "baseModel": "VMR-132",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct Voltage AC",
            "50 to 300V AC (L - N) 3Ø-4W/1Ø-2W 85 to 520V AC (L - L) 3Ø-3W"
          ],
          [
            "Frequency",
            "45.0 Hz to 65.0 Hz"
          ],
          [
            "Resolution",
            "0.1 Volt"
          ],
          [
            "Accuracy",
            "Class 0.5"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "4-Digit, 1-Line, 7-Seg, 0.8” RED LED"
          ],
          [
            "Keys",
            "SET/ENT, INC, DEC/RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Dimension (mm)",
            "96 (H) x 96 (W) x 43 (D)"
          ],
          [
            "Panel Cutout (mm)",
            "92 (H) x 92 (W)"
          ],
          [
            "Trip Setting",
            "Under Voltage : 85-520V AC 3Ø-3W 50-300V AC 3Ø-4W/1Ø-2W"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Over Voltage : 85-550V AC 3Ø-3W 50-330V AC 3Ø4W/1Ø2W"
      },
      {
        "type": "divider",
        "text": "Under Frequency : 45.0 Hz To 65.0 Hz"
      },
      {
        "type": "divider",
        "text": "Over Frequency : 45.0 Hz To 65.0 Hz"
      },
      {
        "type": "divider",
        "text": "Phase Asymmetry : 2-30%"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Time Parameter",
            "Power ON Delay Time : 0 To 99 Sec."
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Trip Delay Time : 0 To 999 Sec."
      },
      {
        "type": "divider",
        "text": "Recovery Time : 0 To 99 Sec."
      },
      {
        "type": "kv",
        "rows": [
          [
            "ACCURACY",
            "Class 1.0 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 nos."
          ],
          [
            "Relay Type",
            "1-C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "1st Relay 10A, 230V AC 2nd Relay 5A, 230V AC"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "AUXILIARY SUPPLY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Supply voltage",
            "230V AC, ±20%,50Hz"
          ],
          [
            "Power consumption (VA RATING)",
            "3VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH (non-condensing)"
          ],
          [
            "Protection Level (As per request)",
            "IP-65 (Front side) As per IS/IEC 60529 : 2001"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "NETWORK CONNECTION"
      },
      {
        "type": "divider",
        "text": "3Ø-3W/3Ø-4W/1Ø-2W"
      },
      {
        "type": "grid",
        "header": [
          "Part code",
          "Size(H X W X D)mm",
          "Network",
          "Input",
          "Output",
          "Aux Supply"
        ],
        "rows": [
          [
            "VMR-13-B1-00",
            "96 X 96 X 54",
            "3Ø3W/4W ,1Ø2W,",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "1-Relay, 1-C/O",
            "230V AC"
          ],
          [
            "VMR-132-B1-00",
            "96 X 96 X 54",
            "3Ø3W/4W ,1Ø2W,",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "2-Relay, 1-C/O",
            "230V AC"
          ],
          [
            "VMR-23-E2-00",
            "72 X 72 X 45",
            "3Ø3W/4W ,1Ø2W,",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "1-Relay, 1-C/O",
            "50-520V AC"
          ],
          [
            "VMR-232-E2-00",
            "72 X 72 X 45",
            "3Ø3W/4W ,1Ø2W,",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "2-Relay, 1-C/O",
            "50-520V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/VMR-1324614.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-voltage-protection-relay-4-knob",
    "name": "Multispan Voltage Protection Relay - 4 Knob",
    "category": "protection-relays",
    "subCategory": "Voltage Protection Relay",
    "image": "https://multispanindia.com/document/images/1058934_1764325570_dd7038.jpg",
    "shortDesc": "Model VPR-17U — Voltage Protection Relay. Typical applications: Electrical LV panels, Distribution boxes, Automation panels, and more.",
    "features": [],
    "applications": [
      "Electrical LV panels",
      "Distribution boxes",
      "Automation panels",
      "Special purpose machine",
      "Air conditioning - HVAC"
    ],
    "baseModel": "VPR-17U",
    "specTables": [
      {
        "type": "divider",
        "text": "SUPPLY VOLTAGE"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input Voltage",
            "180 to 528V AC, 3Ø3W"
          ],
          [
            "Burden",
            "2VA @ 415V AC Max"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Tripping Parameters"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Rated Voltage",
            "220 to 480V AC (L-L)"
          ],
          [
            "Under Voltage",
            "2% to 20%"
          ],
          [
            "Over Voltage",
            "2% to 20%"
          ],
          [
            "Phase Sequence",
            "500ms"
          ],
          [
            "Phase Loss",
            "500ms"
          ],
          [
            "Phase Asymmetry",
            "40V Fix"
          ],
          [
            "Trip Delay",
            "0.2 to 10 Sec"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LED Indication"
      },
      {
        "type": "divider",
        "text": "Under Voltage LED"
      },
      {
        "type": "divider",
        "text": "Over Voltage LED"
      },
      {
        "type": "divider",
        "text": "Phase Sequence LED"
      },
      {
        "type": "divider",
        "text": "Phase Loss : PL/PA LED ON"
      },
      {
        "type": "divider",
        "text": "Phase Asymmetry : PL/PA LED Blinking"
      },
      {
        "type": "divider",
        "text": "Dimensions"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Mounting",
            "Din Rail Mounting"
          ],
          [
            "Bezel (HXW)",
            "90 x 17.5 mm"
          ],
          [
            "Depth of Installation",
            "62 mm"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/VPR-17U10504.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-voltage-protection-relay-digital-din-rail-mount",
    "name": "Multispan Voltage Protection Relay- Digital Din Rail Mount",
    "category": "protection-relays",
    "subCategory": "Voltage Protection Relay",
    "image": "https://multispanindia.com/document/images/69423vpr-33-35-regular.jpg",
    "shortDesc": "Model VPR-33 — Voltage Protection Relay. Typical applications: DG Set Panels, Motor Control Center Panels, Control Panels, and more.",
    "features": [],
    "applications": [
      "DG Set Panels",
      "Motor Control Center Panels",
      "Control Panels",
      "Distribution Panels"
    ],
    "baseModel": "VPR-33",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct Voltage AC",
            "160 to 300V AC (L - N) 3Ø-4W"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "280 to 520V AC (L - L) 3Ø-3W"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Frequency",
            "45.0 Hz to 65.0 Hz"
          ],
          [
            "Resolution",
            "1 Volt"
          ],
          [
            "Accuracy",
            "Class 1.0"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "UPPER: 3-Digit, 7-Seg, 0.4\""
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LOWER: 3-Digit, 7-Seg, 0.28\""
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "SET, INC, DEC/RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Dimension (mm)",
            "90 (H) x 35 (W) x 61.5 (D)"
          ],
          [
            "Trip Setting",
            "Under Voltage: 260-520V AC 3Ø-3W 160-300V AC 3Ø-4W"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Over Voltage: 260-520V AC 3Ø-3W 160-300V AC 3Ø4W"
      },
      {
        "type": "divider",
        "text": "Under Frequency: 45.0 Hz To 65.0 Hz"
      },
      {
        "type": "divider",
        "text": "Over Frequency: 45.0 Hz To 65.0 Hz"
      },
      {
        "type": "divider",
        "text": "Phase Asymmetry : (2-30%)"
      },
      {
        "type": "divider",
        "text": "Hysteresis: (0-99V)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Time Parameter",
            "Power ON Delay Time : 0.0 To 99.9 Sec."
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Trip Delay Time : 0.0 To 999 Sec."
      },
      {
        "type": "divider",
        "text": "Recovery Time : 0.0 To 99.9 Sec."
      },
      {
        "type": "kv",
        "rows": [
          [
            "Accuracy",
            "Class 1.0 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 nos."
          ],
          [
            "Relay Type",
            "1-C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "5A, 230V AC Resistive Load"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "24V DC"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(non-condensing)"
      },
      {
        "type": "divider",
        "text": "NETWORK CONNECTION"
      },
      {
        "type": "divider",
        "text": "3Ø-3W/3Ø-4W"
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Size(mm)",
          "Network",
          "Input",
          "Output",
          "Aux Supply"
        ],
        "rows": [
          [
            "VPR-33-00",
            "90 x 35 x 61.5",
            "3Ø3W/4W",
            "160V-300V AC (L-N), 280-520V AC (L-L)",
            "2 Relay",
            "Self Powered"
          ],
          [
            "VPR-35-A2-00",
            "90 x 35 x 61.5",
            "3Ø3W/4W",
            "30 to 300V AC (L-N), 50 to 520V AC (L-L)",
            "2 Relay",
            "100-270V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/8260VPR-33-02A.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-voltage-protection-relay-din-rail-mount-analog",
    "name": "Multispan Voltage Protection Relay Din Rail Mount - Analog",
    "category": "protection-relays",
    "subCategory": "Voltage Protection Relay",
    "image": "https://multispanindia.com/document/images/72320vpr-22u-regular.jpg",
    "shortDesc": "Model VPR-22U — Voltage Protection Relay. Typical applications: DG Set Panels, Motor Control Center Panels, Control Panels, and more.",
    "features": [],
    "applications": [
      "DG Set Panels",
      "Motor Control Center Panels",
      "Control Panels",
      "Distribution Panels",
      "Process Control"
    ],
    "baseModel": "VPR-22U",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Parameter",
            "Specification"
          ],
          [
            "Power Supply",
            "No Power Supply to be Given Separately"
          ],
          [
            "Input Voltage",
            "280 to 520V AC (L-L) 3Ø -3W"
          ],
          [
            "Rated Voltage",
            "415V AC (L-L)"
          ],
          [
            "Output",
            "1-Relay, 1-C/O, 5A 230V AC Resistive Load"
          ],
          [
            "Tripping Parameters",
            "Under Voltage, Over Voltage, Phase Asymmetry, Phase Sequence, Phase Loss"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Size",
          "Network",
          "Under Voltage",
          "Over Voltage",
          "Phase Loss",
          "Phase Sequence",
          "Phase Asymmetry",
          "Power On& Trip Delay Selection",
          "Input",
          "Output",
          "Supply"
        ],
        "rows": [
          [
            "VPR-22-01",
            "90(H)x22.5(W)x72(D) mm",
            "3Ø3W,",
            "yes",
            "yes",
            "yes",
            "yes",
            "yes",
            "",
            "280V AC to 520V AC",
            "1R, 1-C/O",
            "Self Powered"
          ],
          [
            "VPR-22U-01",
            "90(H)x22.5(W)x72(D) mm",
            "3Ø3W,",
            "yes",
            "yes",
            "yes",
            "yes",
            "yes",
            "yes",
            "280V AC to 520V AC",
            "1R, 1-C/O",
            "Self Powered"
          ],
          [
            "VPR-22-1-01",
            "90(H)x22.5(W)x72(D) mm",
            "3Ø3W,",
            "yes",
            "yes",
            "yes",
            "",
            "yes",
            "",
            "280V AC to 520V AC",
            "1R, 1-C/O",
            "Self Powered"
          ],
          [
            "VPR-22U-1-01",
            "90(H)x22.5(W)x72(D) mm",
            "3Ø3W,",
            "yes",
            "yes",
            "yes",
            "",
            "yes",
            "yes",
            "280V AC to 520V AC",
            "1R 1-C/O",
            "Self Powered"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/1316Data%20sheet%20VPR-22U.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-voltage-protection-relay-vpr-33n",
    "name": "Multispan Voltage Protection Relay  VPR-33N",
    "category": "protection-relays",
    "subCategory": "Voltage Protection Relay",
    "image": "https://multispanindia.com/document/images/249663_1781607128_51dfbd.jpg",
    "shortDesc": "Model VPR-33N — Voltage Protection Relay. Typical applications: DG Set Panels, Motor Control Center Panels, Control Panels, and more.",
    "features": [],
    "applications": [
      "DG Set Panels",
      "Motor Control Center Panels",
      "Control Panels",
      "Distribution Panels"
    ],
    "baseModel": "VPR-33N",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Direct Voltage AC",
            "140 to 300 V AC (L - N) 3Ø-4W"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "240 to 520 V AC (L - L) 3Ø-3W"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Frequency",
            "45.0 Hz to 65.0 Hz"
          ],
          [
            "Resolution",
            "1 Volt"
          ],
          [
            "Accuracy",
            "Class 1.0"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DISPLAY AND KEY :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Display",
            "UPPER: 3-Digit, 7-Seg, 0.4\""
          ]
        ]
      },
      {
        "type": "divider",
        "text": "LOWER: 3-Digit, 7-Seg, 0.28\""
      },
      {
        "type": "kv",
        "rows": [
          [
            "Keys",
            "SET, INC, DEC/RST"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "GENERAL SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Dimension (mm)",
            "90 (H) x 35 (W) x 61.5 (D)"
          ],
          [
            "Trip Setting",
            "Under Voltage: 240-520V AC 3Ø-3W 140-300V AC 3Ø-4W"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Over Voltage: 240-520V AC 3Ø-3W 140-300V AC 3Ø4W"
      },
      {
        "type": "divider",
        "text": "Under Frequency: 45.0 Hz To 65.0 Hz"
      },
      {
        "type": "divider",
        "text": "Over Frequency: 45.0 Hz To 65.0 Hz"
      },
      {
        "type": "divider",
        "text": "Phase Asymmetry : (2-30%)"
      },
      {
        "type": "divider",
        "text": "Hysteresis: (0-99V)"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Time Parameter",
            "Power ON Delay Time : 0.0 To 99.9 Sec."
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Trip Delay Time : 0.0 To 999 Sec."
      },
      {
        "type": "divider",
        "text": "Recovery Time : 0.0 To 99.9 Sec."
      },
      {
        "type": "kv",
        "rows": [
          [
            "Accuracy",
            "Class 1.0 (Standard)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Relay",
            "2 nos."
          ],
          [
            "Relay Type",
            "1-C/O (NO-C-NC)"
          ],
          [
            "Rating",
            "5A, 230V AC Resistive Load"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "24V DC"
      },
      {
        "type": "divider",
        "text": "ENVIRONMENT CONDITION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Operating Temp.",
            "0°C to 55°C"
          ],
          [
            "Relative Humidity",
            "Upto 95% RH"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "(non-condensing)"
      },
      {
        "type": "divider",
        "text": "NETWORK CONNECTION"
      },
      {
        "type": "divider",
        "text": "3Ø-3W/3Ø-4W"
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Size(mm)",
          "Network",
          "Input",
          "Output",
          "Aux Supply"
        ],
        "rows": [
          [
            "VPR-33N-00",
            "90 x 35 x 61.5",
            "3Ø3W/4W",
            "160V-300V AC (L-N), 280-520V AC (L-L)",
            "2 Relay",
            "Self Powered"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/VPR-33N-00746595.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-voltage-transducer",
    "name": "Multispan Voltage Transducer",
    "category": "process-control-instruments",
    "subCategory": "Isolator",
    "image": "https://multispanindia.com/document/images/2270vtr-632-regular.jpg",
    "shortDesc": "Model VTR-632 — Isolator.",
    "features": [],
    "applications": [],
    "baseModel": "VTR-632",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Input",
            "AC Voltage"
          ],
          [
            "Input Inpedance",
            ">100KΩ"
          ],
          [
            "CMRR",
            ">120dp (Typical)"
          ],
          [
            "Temperature Co-efficient",
            "<100 PPM"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "DIMENSION"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Size (mm)",
            "76 (H) X 27 (W) X 85 (D)"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "OUTPUT SPECIFICATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Output",
            "0 to 20mA DC, 4 to 20mA DC, 0 to 10V DC"
          ],
          [
            "Response Type",
            "<500ms"
          ],
          [
            "Output Inpedance",
            ">220Ω"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "POWER SUPPLY:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Auxiliary Voltage",
            "100 TO 270V AC, 50/60Hz or 24V DC"
          ],
          [
            "Power Consumption ( VA Rating )",
            "3 VA"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "ISOLATION:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Isolation Type",
            "Optical - 3 way"
          ],
          [
            "Isolation between supply, input & Output",
            "At least 1.5KV AC for 1 min"
          ]
        ]
      }
    ],
    "catalogueUrl": "https://multispanindia.com/document/pdf/images/3036VTR-632.pdf",
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-water-level-controller",
    "name": "Multispan Water Level Controller",
    "category": "protection-relays",
    "subCategory": "Water Level Controller",
    "image": "https://multispanindia.com/document/images/25789bghhfghfh.jpg",
    "shortDesc": "Model WLC-35 — Water Level Controller. Typical applications: Perfect for Drain & Fill Control, Water Distribution Pump Stations, Submersible Pump Panels, and more.",
    "features": [],
    "applications": [
      "Perfect for Drain & Fill Control",
      "Water Distribution Pump Stations",
      "Submersible Pump Panels",
      "Soda Machines",
      "Textile Industry Setups",
      "Boiler Panels"
    ],
    "baseModel": "WLC-35",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "WLC 35"
          ],
          [
            "Mounting",
            "Din Rail Mounting"
          ],
          [
            "Input Sensor",
            "6 nos. prods"
          ],
          [
            "",
            "S1: Common S1: Common (Upper) S2: Low S2: Low (Upper) S3: High S3: High (Upper)"
          ],
          [
            "Indications",
            "LED 1: Relay LED 2: High Level (Lower) LED 3: Low Level (Lower) LED 4: Mains LED 5: High Level (Upper) LED 6: Low Level (Upper)"
          ],
          [
            "Power Supply",
            "100 270V AC, 50/60 Hz, 3VA"
          ],
          [
            "Output Rating",
            "5Amp, 230V AC (Resistive)"
          ],
          [
            "Dimension",
            "90 x 35 x 62.5 mm"
          ],
          [
            "Output",
            "1 Relay, 1 C/O (NO-C-NC)"
          ],
          [
            "Sensitivity",
            "1 to 1Mega ohms"
          ],
          [
            "Reset",
            "Auto"
          ],
          [
            "Trip Delay",
            "0 to 10 sec (Selectable)"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-water-level-controllers",
    "name": "Multispan water level controllers",
    "category": "protection-relays",
    "subCategory": "Water Level Controller",
    "image": "https://multispanindia.com/document/images/98323wlc-22-regular.png",
    "shortDesc": "Model WLC-22 — Water Level Controller. Typical applications: Perfect for Drain & Fill Control, Water Distribution Pump Stations, Submersible Pump Panels, and more.",
    "features": [],
    "applications": [
      "Perfect for Drain & Fill Control",
      "Water Distribution Pump Stations",
      "Submersible Pump Panels",
      "Soda Machines",
      "Textile Industry Setups",
      "Boiler Panels"
    ],
    "baseModel": "WLC-22",
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Model",
            "WLC 22"
          ],
          [
            "Mounting",
            "Din Rail Mounting"
          ],
          [
            "Input Sensor",
            "3 nos. prods"
          ],
          [
            "",
            "S1: Common S2: Low S3: High"
          ],
          [
            "Indications",
            "LED 1: Relay LED 2: High Level (Lower) LED 3: Low Level (Lower) LED 4: Mains"
          ],
          [
            "Power Supply",
            "100 270V AC, 50/60 Hz, 3VA"
          ],
          [
            "Output Rating",
            "5Amp, 230V AC (Resistive)"
          ],
          [
            "Dimension",
            "90 x 22.5 x 72 mm"
          ],
          [
            "Output",
            "1 Relay, 1 C/O (NO-C-NC)"
          ],
          [
            "Sensitivity",
            "1K to 200K ohms"
          ],
          [
            "Reset",
            "Auto"
          ],
          [
            "Trip Delay",
            "0.5 sec (Approx.)"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "multispan-winding-temperature-relay-thermistor-relay",
    "name": "Multispan Winding Temperature Relay (Thermistor Relay)",
    "category": "protection-relays",
    "subCategory": "Winding Temperature Relay",
    "image": "https://multispanindia.com/document/images/34063wtr-35-regular.jpg",
    "shortDesc": "Model WTR-35 — Winding Temperature Relay. Typical applications: Transformer winding protection, Motor winding protection, Generator winding protection.",
    "features": [],
    "applications": [
      "Transformer winding protection",
      "Motor winding protection",
      "Generator winding protection"
    ],
    "baseModel": "WTR-35",
    "specTables": [
      {
        "type": "divider",
        "text": "INPUT SPECIFICATION :"
      },
      {
        "type": "kv",
        "rows": [
          [
            "Auxiliary Supply",
            "50 To 550V AC 50/60Hz"
          ],
          [
            "Output contact",
            "1Relay 2 CO"
          ],
          [
            "contact rating(resistive)",
            "5 Amp 230V AC (resistive)"
          ],
          [
            "Input",
            "PTC Thermistor"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Setting for PTC"
      },
      {
        "type": "kv",
        "rows": [
          [
            "1. Sensor Short",
            "0-39 ohm"
          ],
          [
            "2. Sensor Healthy",
            "40 ohm - 4K ohm"
          ],
          [
            "3. Sensor Trip",
            "4.1K ohm - 5.5K ohm"
          ],
          [
            "4. Sensor Open",
            "5.6K ohm & Above"
          ],
          [
            "5. Sensor Cut in",
            "1.5K ohm - 1.8K ohm"
          ],
          [
            "Temperature range for Thermistor",
            "70°C to 180°C ( for PTC)"
          ],
          [
            "Trip time delay",
            "Less than 1 sec."
          ],
          [
            "Resetting",
            "Auto / Manual(Remote)"
          ],
          [
            "Mode of operation",
            "Fail safe / Non-fail safe"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Indications:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "1. Power on",
            "LED"
          ],
          [
            "2. Sensor Short",
            "LED"
          ],
          [
            "3. Sensor Healthy",
            "LED"
          ],
          [
            "4. Sensor Trip",
            "LED"
          ],
          [
            "5. Sensor Open",
            "Sensor Short, Healthy & Trip LED Blink"
          ],
          [
            "Enclosure",
            "ABS / PC ABS"
          ],
          [
            "Dimensions (mm)",
            "90(H) X 35(W) X 60(D)"
          ],
          [
            "Mounting",
            "35 mm Din Rail Mounting"
          ]
        ]
      },
      {
        "type": "divider",
        "text": "Indications:"
      },
      {
        "type": "kv",
        "rows": [
          [
            "1. Power on",
            "-5°C to +60°C"
          ],
          [
            "2. Sensor faulty/Healthy",
            "Up to 95% Rh"
          ]
        ]
      },
      {
        "type": "grid",
        "header": [
          "Part Code",
          "Voltage Input",
          "Output",
          "Supply"
        ],
        "rows": [
          [
            "WTR-35-E2-00",
            "PTC Sensor",
            "1R 1C/O",
            "50V-520V AC"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "brand": "multispan",
    "featured": false
  },
  {
    "id": "micro-pressure-gauges-precision-test-master",
    "name": "MICRO Precision Test Master",
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "brand": "micro",
    "shortDesc": "Precision Test Master — Pressure Gauges from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 150, 200 & 250 mm"
          ],
          [
            "Accuracy",
            "±0.5% of FS (For Test Gauges)±0.25% of FS (For Master Gauges)"
          ],
          [
            "Case & Bezel",
            "SS 304 case with Snap Action bayonet lock type bezel (SS 316 Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529 IP 68 as per IS/IEC 60 529 for Ø 150 mm – Optional"
          ],
          [
            "Pressure element — Bourdon Tube",
            "SS 316 / SS 316L / SS 316Ti / Phosphorus Bronze / Monel 400 / Beryllium Copper (< 100 bar 'C' shape / ≥ 100 bar helical shape)"
          ],
          [
            "Over pressure limit",
            "≤ 100 bar - 125% of FS; 100 bar < 600 bar - 115% of FS; 600 bar < 1600 bar - 110% of FS"
          ],
          [
            "Movement",
            "SS 316 / Cu-Alloy High Precision Jeweled bearing with Bi-metal link for Temperature Compensation"
          ],
          [
            "Socket",
            "Brass / SS 316 / SS 316L / Monel 400"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with Mirror band & black marking"
          ],
          [
            "Pointer",
            "Aluminium —Black Finish Knife edge Micro Zero Adjustment"
          ],
          [
            "Window",
            "4 mm thick Toughened Glass (Safety / Shatter Proof Optional)"
          ],
          [
            "Joints",
            "Argon welded"
          ],
          [
            "Sealing gasket",
            "Neoprene Rubber (EPDM Optional)"
          ],
          [
            "Blow out protection",
            "Neoprene Rubber on Back of Case (EPDM Optional)"
          ],
          [
            "Pressure relief",
            "Top of Case with Vent Valve (On Request)"
          ],
          [
            "Process Connection",
            "1/4” / 3/8” / 1/2” BSP / NPT / BSPT (Male) M20 X 1.5 (Male), Other Male or Female connection on request"
          ],
          [
            "Permissible temperature",
            "Ambient : -25'C to 65'C; Process : Maximum 650C"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Back Connection Direct Mounting; Bottom Connection Surface Mounting; Back Connection Panel Mounting; Back Connection Bracket Mounting; Back Connection Panel + Bracket Mounting"
          ],
          [
            "Pressure range",
            "-30” Hg … 0 … 1000 bar"
          ],
          [
            "Optional Available features",
            "• Liquid Fillable Case for Test Gauges • Customized Scale with different Unit of Measurement or logo • Solid front case (Safety Pattern) • Externally zero adjustable from side or front"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": true,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/precision-test-master/4.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/precision-test-master/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/precision-test-master/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/precision-test-master/6.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/precision-test-master/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/precision-test-master/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/precision-test-master/3.jpg"
    ]
  },
  {
    "id": "micro-pressure-gauges-electrical-contact",
    "name": "MICRO Electrical Contact",
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "brand": "micro",
    "shortDesc": "Electrical Contact — Pressure Gauges from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 100 & 150 mm"
          ],
          [
            "Accuracy",
            "Gauge: ±1% of FS; Switching: ±2% of FS"
          ],
          [
            "Case & Bezel",
            "SS 304 case with Snap Action bayonet lock type bezel (SS 316 Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529; IP 68 as per IS/IEC 60 529 – Optional"
          ],
          [
            "Pressure element — Bourdon Tube",
            "SS 316 / SS 316L / SS 316Ti (Monel 400 Optional) (< 100 bar 'C' shape / ≥ 100 bar helical shape)"
          ],
          [
            "Over pressure limit",
            "≤ 100 bar - 125% of FS; > 100 bar < 600 bar - 115% of FS; > 600 bar < 1600 bar - 110% of FS"
          ],
          [
            "Movement",
            "SS 304 (SS 316 optional)"
          ],
          [
            "Socket",
            "SS 304 / SS 316 / SS 316L (Monel 400 Optional)"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium —Black Finish Center zero / Micro Zero Adjustment"
          ],
          [
            "Window",
            "Extended Clear Poly Carbonate Hood / Transparent Acrylic"
          ],
          [
            "Joints",
            "Argon welded"
          ],
          [
            "Sealing gasket",
            "Neoprene Rubber (EPDM Optional)"
          ],
          [
            "Blow out protection",
            "Neoprene Rubber (EPDM Optional) On Back of Case"
          ],
          [
            "Pressure relief",
            "Top of Case with Vent Valve (On Request)"
          ],
          [
            "Process Connection",
            "1/4” / 3/8” / 1/2” BSP / NPT / BSPT (Male) M20 X 1.5 (Male), Other Male or Female Connection On Request"
          ],
          [
            "Permissible temperature",
            "Ambient : -25'C to 65'C; Process : Maximum 1000C"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Back Connection Direct Mounting; Bottom Connection Surface Mounting; Back Connection Panel Mounting; Back Connection Bracket Mounting"
          ],
          [
            "Pressure range",
            "-30” Hg … 0 … 2500 bar"
          ],
          [
            "Contact Type —(Internal / External)",
            "Magnetic Snap Action with Silver Nickel Alloy Contact Standard (Palladium Contact Optional)"
          ],
          [
            "No. of Contact & Configuration",
            "Single ( 1NO, 1NC) / Double (1NO+NC, 1NC+NO, 2NO, 2NC)"
          ],
          [
            "Contact Rating",
            "380 V AC/DC, 50 VA, 1 Amp (Standard) / Max. 5 Amp (Optional)"
          ],
          [
            "Contact Set Point",
            "Between 10 to 90 % of FS"
          ],
          [
            "Optional Available features",
            "• Customized Scale with different Unit of Measurement or logo • Electrical Contact gauge attached with Diaphragm Seal • Electrical Contact with Differential Pressure Gauge • Electrical Contact with Schaffer or Low Pressure Diaphragm Operated Gauge • Triple / Quadruple Contact • Inductive Contact, Potential Free Contact"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/electrical-contact/4.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/electrical-contact/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/electrical-contact/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/electrical-contact/6.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/electrical-contact/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/electrical-contact/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/electrical-contact/3.jpg"
    ]
  },
  {
    "id": "micro-pressure-gauges-capsule-schaffer-low-pressure-diaphragm",
    "name": "MICRO Capsule Schaffer Low Pressure Diaphragm",
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "brand": "micro",
    "shortDesc": "Capsule Schaffer Low Pressure Diaphragm — Pressure Gauges from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø63, 100 & 150 mm (For CC); Ø 100 & 150 mm (For SCH & LPD); Rectangular (80 x 150mm front panel & 68 x 135mm cutout)"
          ],
          [
            "Accuracy",
            "±1.6% of FS (for SCH & LPD) (±1% of FS Optional); ±2% of FS (For CC & ED)"
          ],
          [
            "Case & Bezel",
            "SS 304 case with Snap Action bayonet lock type bezel (SS 316 Optional); MS Black coated (For ED)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529; IP 68 as per IS/IEC 60 529 for Ø 100 & 150 mm – Optional"
          ],
          [
            "Pressure element",
            "SS 316 Diaphragm (For SCH & LPD); Cu-Alloy / SS 316 Capsule (For CC & ED)"
          ],
          [
            "Over pressure limit",
            "125% of FS & 110% of FS for ED"
          ],
          [
            "Movement",
            "SS 304 (For SCH & LPD); Brass / SS 304 with Zero Adj. Provision (For CC)"
          ],
          [
            "Socket",
            "SS 304 / SS 316 / SS 316L"
          ],
          [
            "Diaphragm Unit —(For SCH & LPD)Top Chamber",
            "MS Powder Coated (Standard) / SS 304 / SS 316"
          ],
          [
            "Lower Chamber",
            "SS 316 (Standard) / SS 316L / PTFE or PFA Coating or 3mm Lining & Others on request"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium —Black finish fix type (For CC); Aluminium —Center / Micro Zero Adjustment (For SCH & LPD); Tin or Aluminium Red finished (For ED)"
          ],
          [
            "Window",
            "4 mm thick Toughened Glass (Safety / Shatter Proof Optional); Transparent Acrylic for CC & ED"
          ],
          [
            "Joints",
            "Argon welded"
          ],
          [
            "Sealing gasket",
            "Neoprene Rubber (EPDM Optional)"
          ],
          [
            "Blow out protection",
            "(Not applicable for ED); Neoprene Rubber (EPDM Optional); For Ø 63 mm : On Top of Case; For ≥ Ø 100 mm : On Back of Case"
          ],
          [
            "Pressure relief",
            "(Not applicable for ED)Top of Case with Vent Valve (On Request)"
          ],
          [
            "Process Connection",
            "1/4” / 3/8” / 1/2” BSP / NPT / BSPT (Male) M12 X 1 (For 63 mm), M20 X 1.5 (Male) ≥ Ø 100 mm; Flanged to specific standard & Ratings (For SCH & LPD) (Other connection on Request)"
          ],
          [
            "Permissible temperature",
            "Ambient : -25'C to 65'C; Process : Maximum 150'C"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting (For CC, SCH & LPD); Back Connection Direct Mounting (For CC); Bottom Connection Surface Mounting (For CC); Back Connection Panel Mounting (For CC); Back Connection Bracket Mounting (For CC & ED)"
          ],
          [
            "Pressure range",
            "30” Hg … 0 … 21 bar (For SCH) 250… 6000 mmWc (Pressure / Vacuum / Compound) (For LPD & CC) 50... 6000 mmWc (Pressure / Vacuum / Compound) (For ED)"
          ],
          [
            "Optional Available features",
            "• Liquid (Silicon Oil) Filled Case (For CC) • Electrical Contact gauge attached with Diaphragm Seal • Electrical Contact for 100 & 150 mm (For SCH & LPD) • Customised scale/logo"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/7.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/7.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/8.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/9.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/10.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/11.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/12.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/capsule-schaffer-low-pressure-diaphragm/6.jpg"
    ]
  },
  {
    "id": "micro-pressure-gauges-diaphragm-sealed-exposed-diaphragm-type",
    "name": "MICRO Diaphragm Sealed Exposed Diaphragm Type",
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "brand": "micro",
    "shortDesc": "Diaphragm Sealed Exposed Diaphragm Type — Pressure Gauges from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 50, 63, 100, 115, 150, 200, 250 & 300 mm"
          ],
          [
            "Accuracy",
            "±1% of FS (From 1 to 70 bar); ±1.6% of FS (≥ 100 bar) (±1% Optional); ±1.6% of FS (For Vacuum)"
          ],
          [
            "Case & Bezel",
            "SS 304 Case with Snap Action bayonet lock type bezel (SS 316 Optional); SS 304 Case with Crimped Bezel (Hermetically Sealed) (For Ø 50, 63 & 100 mm Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529; IP 68 as per IS/IEC 60 529 for Ø 100 & 150 mm-Optional"
          ],
          [
            "Pressure element — Bourdon Tube",
            "SS 316 / SS 316L / SS 316Ti (Monel 400 Optional) (< 100 bar 'C' shape / ≥ 100 bar helical shape)"
          ],
          [
            "Over pressure limit",
            "≤ 100 bar - 125% of FS; > 100 bar < 600 bar - 115% of FS; > 600 bar < 1600 bar - 110% of FS"
          ],
          [
            "Movement",
            "SS 304 (SS 316 optional)"
          ],
          [
            "Socket",
            "SS 304 / SS 316 / SS 316L (Monel 400 Optional)"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium —Black Finish Center / Micro Zero Adjustment"
          ],
          [
            "Window",
            "4 mm thick Toughened Glass (Safety / Shatter Proof Optional) Transparent Acrylic Window for Hermetically Sealed Glycerin Filled Case"
          ],
          [
            "Joints",
            "Argon welded"
          ],
          [
            "Sealing gasket",
            "Neoprene Rubber (EPDM Optional); Nitrile Rubber for Glycerin Filled Case"
          ],
          [
            "Blow out protection",
            "Neoprene Rubber (EPDM Optional); For Ø 50 & 63 mm : On Top of Case; For ≥ Ø 100 mm : On Back of Case"
          ],
          [
            "Pressure relief",
            "Top of Case with Vent Valve (On Request)"
          ],
          [
            "Sealed Unit",
            "Seal Body : SS 316 (Standard) / SS 316L; Diaphragm : SS 316L (Standard) / Hastealloy C / (Welded to Monel / Tantalum / Nickle (200/400) seal Body) / PTFE Coating protection / Other on request; Transmitting Fluid : Silicon Oil (Standard) / Halocarbon / Food Grade Glycerin/Vegetable Oil etc."
          ],
          [
            "Process Connection",
            "1/2” / 3/4” / 1”/ 1 ”/ 2” BSP (Male) with Flush Diaphragm; 1 ” / 2” / 2 ” Triclover; 1 ” / 2” / 2 ” SMS; 1/2” / 3/4” / 1” / 1 ” / 2” / 3” Flanged with Flush Diaphragm; Sandwich Flange (Cell Type) With Capillary ExtensionFlanged type Extended Diaphragm; Homogenizer without Flange or With 7/8” thick 2 bolt flange; Special connection for Pulp & Paper Industries; Saddle flange type to be welded on pipe"
          ],
          [
            "Permissible temperature",
            "Ambient : -25'C to 65'CProcess : Maximum 1500C (Direct Reading); Maximum 3500C (Remote Reading)"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Back Connection Direct Mounting; Bottom Connection Surface Mounting with Capillary Extension; Back Connection Panel Mounting with Capillary Extension; Back Connection Bracket Mounting with Capillary Extension"
          ],
          [
            "Pressure range",
            "30” Hg … 0 … 60 bar; For Homogenizer seals 400 bar Standard (600, 1000 & 1600 bar Optional)"
          ],
          [
            "Optional Available features",
            "• Liquid Fillable Case / Glycerin (99.7%) Filled Case • Solid front case (Safety Pattern) for 100 & 150 mm • External Zero Adj. for ≥ Ø 100 mm • Electrical Contact for 100 & 150 mm • Cooling Tower Assembly • Over Range Protection above pressure Range Phenolic Solid Front safety design case for 115 mm"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/7.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/7.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/8.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/9.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/10.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/11.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/12.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/13.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed-exposed-diaphragm-type/6.jpg"
    ]
  },
  {
    "id": "micro-pressure-gauges-diaphragm-sealed",
    "name": "MICRO Diaphragm Sealed",
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "brand": "micro",
    "shortDesc": "Diaphragm Sealed — Pressure Gauges from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 50, 63, 100, 115, 150, 200, 250 & 300 mm"
          ],
          [
            "Accuracy",
            "±1% of FS (From 1 to 70 bar); ±1.6% of FS (≥ 100 bar) (±1% Optional); ±1.6% of FS (For Vacuum)"
          ],
          [
            "Case & Bezel",
            "SS 304 Case with Snap Action bayonet lock type bezel (SS 316 Optional); SS 304 Case with Crimped Bezel (Hermetically Sealed) (For Ø 50, 63 & 100 mm Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529; IP 68 as per IS/IEC 60 529 for Ø 100 & 150 mm-Optional"
          ],
          [
            "Pressure element — Bourdon Tube",
            "SS 316 / SS 316L / SS 316Ti (Monel 400 Optional) (< 100 bar 'C' shape / ≥ 100 bar helical shape)"
          ],
          [
            "Over pressure limit",
            "≤ 100 bar - 125% of FS; > 100 bar < 600 bar - 115% of FS; > 600 bar < 1600 bar - 110% of FS"
          ],
          [
            "Movement",
            "SS 304 (SS 316 optional)"
          ],
          [
            "Socket",
            "SS 304 / SS 316 / SS 316L (Monel 400 Optional)"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium —Black Finish Center / Micro Zero Adjustment"
          ],
          [
            "Window",
            "4 mm thick Toughened Glass (Safety / Shatter Proof Optional); Transparent Acrylic Window for Hermetically Sealed Glycerin Filled Case"
          ],
          [
            "Joints",
            "Argon welded"
          ],
          [
            "Sealing gasket",
            "Neoprene Rubber (EPDM Optional); Nitrile Rubber for Glycerin Filled Case"
          ],
          [
            "Blow out protection",
            "Neoprene Rubber (EPDM Optional); For Ø 50 & 63 mm : On Top of Case; For ≥ Ø 100 mm : On Back of Case"
          ],
          [
            "Pressure relief",
            "Top of Case with Vent Valve (On Request)"
          ],
          [
            "Sealed Unit",
            "Upper Chamber : SS 304 (Standard) / SS 316; Diaphragm : SS 316L (Standard) / Hastealloy C / (Welded to Monel / Tantalum / Nickle (200/400) / Upper Chamber) PTFE Coating protection/Other on request; Lower Chamber : SS 316 (Standard) / SS 316L / Tantalum / Monel / Hastealloy C / PTFE or PFA Coating or Lining (3mm) protection; Transmitting Fluid : Silicon Oil (Standard) / Halocarbon / Glycerin / Vegetable Oil etc."
          ],
          [
            "Process Connection",
            "1/4”/ 3/8”/ 1/2”/ 3/4”/ 1”/ 1 ”/ 2” BSP / NPT / BSPT (Male), M20 X 1.5 (Male); 1/2” / 3/4” / 1” / 1 ” / 2” / 3” Flanged / I-Section Flanged (Others on Request)"
          ],
          [
            "Permissible temperature",
            "Ambient : -25'C to 65'C; Process : Maximum 150'C (Direct Reading); Maximum 3500C (Remote Reading)"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Back Connection Direct Mounting; Bottom Connection Surface Mounting with Capillary Extension; Back Connection Panel Mounting with Capillary Extension; Back Connection Bracket Mounting with Capillary Extension"
          ],
          [
            "Pressure range",
            "-30” Hg … 0 … 1000 bar"
          ],
          [
            "Optional Available features",
            "• Liquid Fillable Case / Glycerin (99.7%) Filled Case • Solid front case (Safety Pattern) for 100 & 150 mm • External Zero Adj. for ≥ Ø 100 mm • Electrical Contact for 100 & 150 mm • Cooling Tower Assembly • Over Range Protection above pressure Range • Flushing Arrangement (1/4” NPT Plug) • Welded Compact Seal up to Pressure range 70 bar • Phenolic Solid Front safety design case for 115 mm"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed/5.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed/6.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed/7.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed/8.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed/9.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/diaphragm-sealed/4.jpg"
    ]
  },
  {
    "id": "micro-pressure-gauges-liquid-filled",
    "name": "MICRO Liquid Filled",
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "brand": "micro",
    "shortDesc": "Liquid Filled — Pressure Gauges from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 40, 50, 63, 100, 115, 150, 200, 250 & 300 mm"
          ],
          [
            "Accuracy",
            "≤ 63 mm - ±1.6% of FS (±1% of FS Optional); ≥ Ø 100 mm - ±1% of FS (±0.5% of FS Optional)"
          ],
          [
            "Case & Bezel",
            "SS 304 Case with Crimped Bezel (Hermetically Sealed) (For Ø 50, 63 & 100 mm); SS 304 Case with Snap Action bayonet lock type bezel (SS 316 Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529 IP 68 as per IS/IEC 60 529 for Ø 100 & 150 mm – Optional"
          ],
          [
            "Pressure element — Bourdon Tube",
            "SS 316 / SS 316L / SS 316Ti (Monel 400 Optional) (< 100 bar 'C' shape / ≥ 100 bar helical shape)"
          ],
          [
            "Over pressure limit",
            "100 bar - 125% of FS; > 100 bar < 600 bar - 115% of FS; > 600 bar < 1600 bar - 110% of FS"
          ],
          [
            "Movement",
            "Plated Brass / SS 304 (SS 316 optional)"
          ],
          [
            "Socket",
            "Brass / SS 304 / SS 316 / SS 316L (Monel 400 Optional)"
          ],
          [
            "Dial",
            "Aluminium : Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium —Black finish fix type (Center / Micro Zero Adjustment Optional)"
          ],
          [
            "Window",
            "3 mm thick transparent Acrylic /Toughened for ≤ Ø 63 mm; 4 mm thick Acrylic / Toughened / Shatter Proof Glass for ≥ Ø 100 mm"
          ],
          [
            "Joints",
            "Argon welded"
          ],
          [
            "Sealing gasket",
            "Neoprene Rubber (EPDM Optional)"
          ],
          [
            "Blow out protection",
            "Neoprene Rubber (EPDM Optional); For Ø 50 & 63 mm : On Top of Case; For ≥ Ø 100 mm : On Back of Case"
          ],
          [
            "Pressure relief",
            "Top of Case with Vent Valve (On Request)"
          ],
          [
            "Process Connection",
            "For Ø 40 mm - 1/8” BSP / NPT / BSPT (Male); For 50 & 63 mm - 1/8” / 1/4” BSP / NPT / BSPT (Male), M12 X 1 (Male); For ≥ Ø100 mm - 1/4” / 3/8” / 1/2” BSP / NPT / BSPT (Male) M20 X 1.5 (Male); Other Male or Female on Request"
          ],
          [
            "Permissible temperature",
            "Ambient : -25'C to 65'C; Process : Maximum 65'C"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Back Connection Direct Mounting; Bottom Connection Surface Mounting; Back Connection Panel Mounting; Back Connection Bracket Mounting; Back Connection Panel + Bracket Mounting"
          ],
          [
            "Pressure range",
            "40 mm : -30” Hg … 0 … 40 bar; 50 mm : -30” Hg … 0 … 400 bar; 63 mm : -30” Hg … 0 … 1000 bar; ≥ Ø 100 mm : -30” Hg … 0 … 3500 bar"
          ],
          [
            "Case Filling Fluid",
            "Glycerin (Purity 99.7%) (Silicon Oil for Higher Temperature Optional)"
          ],
          [
            "Optional Available features",
            "• Ammonia (NH3), Freon Scale, customized scale with different unit of measurement or logo • For Oxygen (O2) Application degreased wetted parts • Eco model for 50, 63, 100 & 150 mm • Solid front case (Safety Pattern) for 100 & 150 mm • Phenolic Solid Front safety design Case for 115mm • External Zero Adj. for ≥ Ø 100 mm"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/liquid-filled/5.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/liquid-filled/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/liquid-filled/6.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/liquid-filled/7.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/liquid-filled/8.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/liquid-filled/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/liquid-filled/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/liquid-filled/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/liquid-filled/4.jpg"
    ]
  },
  {
    "id": "micro-pressure-gauges-weather-proof-dry",
    "name": "MICRO Weather Proof Dry",
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "brand": "micro",
    "shortDesc": "Weather Proof Dry — Pressure Gauges from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 50, 63, 100, 115, 150, 200, 250 & 300 mm"
          ],
          [
            "Accuracy",
            "≤ Ø 63 mm - ±1.6% of FS (±1% of FS Optional); ≥ Ø 100 mm - ±1% of FS (±0.5% of FS Optional)"
          ],
          [
            "Case & Bezel",
            "SS 304 case with Snap Action bayonet lock type bezel (SS 316 Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529; IP 68 as per IS/IEC 60 529 for Ø 100 & 150 mm – Optional"
          ],
          [
            "Pressure element — Bourdon Tube",
            "SS 316 / SS 316L / SS 316Ti (Monel 400 Optional) (< 100 bar 'C' shape / ≥ 100 bar helical shape)"
          ],
          [
            "Over pressure limit",
            "≤ 100 bar - 125% of FS; > 100 bar < 600 bar - 115% of FS; > 600 bar < 1600 bar - 110% of FS"
          ],
          [
            "Movement",
            "Plated Brass / SS 304 (SS 316 optional)"
          ],
          [
            "Socket",
            "Brass / SS 304 / SS 316 / SS 316L (Monel 400 Optional)"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium : Black finish fix type for Ø50 mm (Center Zero Adjustment Optional); Aluminium : Black Finish Center zero Adjustment for Ø 63 mm; Center / Micro Zero Adjustment ≥ Ø 100 mm"
          ],
          [
            "Window",
            "4 mm thick Toughened Glass (Safety / Shatter Proof Optional"
          ],
          [
            "Joints",
            "Argon welded for"
          ],
          [
            "Sealing gasket",
            "Neoprene Rubber (EPDM Optional)"
          ],
          [
            "Blow out protection",
            "Neoprene Rubber (EPDM Optional); For Ø 50 & 63 mm : On Top of Case; For ≥ Ø 100 mm : On Back of Case"
          ],
          [
            "Pressure relief",
            "Top of Case with Vent Valve (On Request)"
          ],
          [
            "Process Connection",
            "For 50 & 63 mm : 1/8” / 1/4” BSP / NPT / BSPT (Male), M12 X 1 (Male); For ≥ Ø100 mm : 1/4” / 3/8” / 1/2” BSP / NPT / BSPT (Male), M20 X 1.5 (Male); Other Male or Female Conn. on Request"
          ],
          [
            "Permissible temperature",
            "Ambient : -25'C to 65'C; Process : Maximum 270'C (SS 316 Internals); Maximum 400'C (SS 316L internals)"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Back Connection Direct Mounting; Bottom Connection Surface Mounting; Back Connection Panel Mounting; Back Connection Bracket Mounting; Back Connection Panel + Bracket Mounting"
          ],
          [
            "Pressure range",
            "40 mm : -30” Hg … 0 … 40 bar; 50 mm : -30” Hg … 0 … 400 bar; 63 mm : -30” Hg … 0 … 1000 bar; ≥ Ø 100 mm : -30” Hg … 0 … 3500 bar"
          ],
          [
            "Optional Available features",
            "• Liquid Fillable Case • Ammonia (NH3), Freon Scale, Customized Scale with different Unit of Measurement or logo • For Oxygen (O2) Application degreased wetted parts • Eco model for 100 & 150 mm • Maximum pointer Follower for 63, 100 & 150 mm • Solid front case (Safety Pattern) for 100 & 150 mm • Phenolic Solid Front safety design Case for 115mm • External Zero Adj. for ≥ Ø 100 mm • Electrical Contact for 100 & 150 mm"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/weather-proof-day/5.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/weather-proof-day/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/weather-proof-day/6.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/weather-proof-day/7.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/weather-proof-day/8.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/weather-proof-day/9.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/weather-proof-day/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/weather-proof-day/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/weather-proof-day/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/weather-proof-day/4.jpg"
    ]
  },
  {
    "id": "micro-pressure-gauges-commercial-weather-proof",
    "name": "MICRO Commercial Weather Proof",
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "brand": "micro",
    "shortDesc": "Commercial Weather Proof — Pressure Gauges from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 63, 100 & 150 mm"
          ],
          [
            "Accuracy",
            "±1.6% of FS (±1% of FS for ≥ Ø 100 mm Optional)"
          ],
          [
            "Case & Bezel",
            "Drawn Steel Silver Powder Coated Case with Snap Action bayonet lock type bezel"
          ],
          [
            "Pressure element",
            "Cu-Alloy (< 100 bar 'C' Shaped Bourdon Tube); SS 316 (≥ 100 bar Helical Shape Bourdon tube)"
          ],
          [
            "Over pressure limit",
            "≤ 100 bar - 125% of FS; > 100 bar < 600 bar - 115% of FS; > 600 bar < 1600 bar - 110% of FS"
          ],
          [
            "Movement",
            "Brass / Plated Brass (SS 304 Optional)"
          ],
          [
            "Socket",
            "Brass (SS 304 Optional)"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium - Black finish fix type (Center / Micro Zero Adjustment Optional)"
          ],
          [
            "Window",
            "3 mm thick Clear Plain Glass"
          ],
          [
            "Joints",
            "Hard Soldered (For 'C' Shape Bourdon Tube); Silver Brazing (For Helical Bourdon Tube)"
          ],
          [
            "Sealing gasket",
            "Neoprene Rubber"
          ],
          [
            "Process Connection",
            "For Ø 63 mm: 1/8” / 1/4” BSP / NPT / BSPT (Male), M12 X 1 (Male); For ≥ Ø100 mm: 1/4” / 3/8” BSP / NPT / BSPT (Male)"
          ],
          [
            "Permissible temperature",
            "Ambient: -25'C to 65'C; Process: Maximum 800C (For Soldered Joints); Maximum 1500C (Silver Brazed Joints)"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Bottom Connection Surface Mounting; Back Connection Panel Mounting ( 63 mm only)"
          ],
          [
            "Pressure range",
            "-30” Hg … 0 … 700 bar (1000 bar Optional)"
          ],
          [
            "Optional Available features",
            "• Ammonia (NH3), Freon Scale • Customized Scale with different Unit of Measurement or logo • For Oxygen (O2) Application degreased wetted parts"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/commercial-weather-proof/2.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/commercial-weather-proof/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/commercial-weather-proof/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/commercial-weather-proof/1.jpg"
    ]
  },
  {
    "id": "micro-pressure-gauges-commercial-utility",
    "name": "MICRO Commercial Utility",
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "brand": "micro",
    "shortDesc": "Commercial Utility — Pressure Gauges from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 40, 50, 63, 80, 100, 150, 200 & 250 mm"
          ],
          [
            "Accuracy",
            "±2% of FS (±1% of FS for ≥ Ø 100 mm Optional)"
          ],
          [
            "Case & Bezel",
            "Drawn Steel Powder Coated Case and Press Fit Bezel (Drawn Steel Chrome Plated Bezel Optional) (SS 304 Case & Press Fit Bezel Optional)"
          ],
          [
            "Pressure element",
            "Cu-Alloy (< 100 bar 'C' Shaped Bourdon Tube); SS 316 (≥ 100 bar Helical Shape Bourdon tube)"
          ],
          [
            "Over pressure limit",
            "≤ 100 bar - 125% of FS; > 100 bar < 600 bar - 115% of FS; > 600 bar < 1600 bar - 110% of FS"
          ],
          [
            "Movement",
            "Brass / Plated Brass (SS 304 Optional)"
          ],
          [
            "Socket",
            "Brass / SS 304"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium - Black finish fix type"
          ],
          [
            "Window",
            "Clear Plain Glass, Clear Poly Carbonate for Ø 50 & 63 mm Back Connection Panel Mounting"
          ],
          [
            "Joints",
            "Hard Soldered (For 'C' Shape Bourdon Tube); Silver Brazing (For Helical Bourdon Tube)"
          ],
          [
            "Sealing gasket",
            "White Plastic Ring"
          ],
          [
            "Process Connection",
            "For Ø 40 mm : 1/8” BSP / NPT / BSPT (Male); For Ø 50 & 63 mm : 1/8” / 1/4\" BSP / NPT / BSPT (Male) M12 X 1 (Male); For Ø80, 100 & 150 mm : 1/4” / 3/8” / BSP / NPT / BSPT (Male); For Ø200, & 250 mm : 1/4” / 3/8” / 1/2\" / BSP / NPT / BSPT (Male) M20 X 1.5 (Male); Other Male or Female on Request"
          ],
          [
            "Permissible temperature",
            "Ambient : -25'C to 65'C; Process : Maximum 800C (For Soldered Joints); Maximum 1500C (Silver Brazed Joints)"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Back Connection Direct Mounting; Bottom Connection Surface Mounting; Back Connection Panel Mounting; Back Connection Bracket Mounting"
          ],
          [
            "Pressure range",
            "40 mm : -30” Hg … 0 … 40 bar; Ø 50 mm : -30” Hg … 0 … 400 bar; Ø 63 mm : -30” Hg … 0 … 1000 bar; ≥ Ø 100 mm : -30” Hg … 0 … 3500 bar"
          ],
          [
            "Optional Available features",
            "• Ammonia (NH3), Freon Scale • Customized Scale with different Unit of Measurement or logo • For Oxygen (O2) Application degreased wetted parts"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/commercial-utility/4.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/commercial-utility/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/commercial-utility/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/commercial-utility/6.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/commercial-utility/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/commercial-utility/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/commercial-utility/3.jpg"
    ]
  },
  {
    "id": "micro-pressure-gauges-melt-high-temperature",
    "name": "MICRO Melt High Temperature",
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "brand": "micro",
    "shortDesc": "Melt High Temperature — Pressure Gauges from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 100 mm"
          ],
          [
            "Accuracy",
            "±2% of FS"
          ],
          [
            "Case & Bezel",
            "SS 304 case with Snap Action bayonet lock type bezel (SS 316 Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529"
          ],
          [
            "Pressure element — Bourdon Tube",
            "SS 316 helical shape"
          ],
          [
            "Over pressure limit",
            "115% of FS"
          ],
          [
            "Rigid Stem & Length",
            "Made of SS 316 having 150 or 300 mm length"
          ],
          [
            "Diaphragm",
            "15-5 pH Stainless Steel"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium —Black finish Center / Micro Zero Adjustment"
          ],
          [
            "Window",
            "Safety / Shatter Proof"
          ],
          [
            "Joints",
            "Argon welded"
          ],
          [
            "Sealing gasket",
            "Neoprene Rubber (EPDM Optional)"
          ],
          [
            "Blow out protection",
            "Neoprene Rubber (EPDM Optional) On Back of Case"
          ],
          [
            "Pressure relief",
            "Top of Case with Vent Valve (On Request)"
          ],
          [
            "Process Connection",
            "1/2” —20 UNF Male threads (Standard); M18 X 1.5 mm & Others on Request"
          ],
          [
            "Permissible temperature",
            "Ambient : -25'C to 85'C; Process : Maximum 400'C"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Bottom Connection Surface Mounting for capillary extension"
          ],
          [
            "Pressure range",
            "0 … 5000 PSI or 0 … 10000 PSI"
          ],
          [
            "Liquid Filling",
            "Glycerin 99.87%"
          ],
          [
            "Optional Available features",
            "• Gauge head rotate 300 angular • Type 'J' (Standard) & 'K' type Thermocouple for temperature measurement output • External Zero Adjustment • Customized Scale with different Unit of Measurement or logo • Surface Mounting type capillary extn. with armour protection available"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/melt-high-temperature/3.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/melt-high-temperature/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/melt-high-temperature/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/melt-high-temperature/1.jpg"
    ]
  },
  {
    "id": "micro-pressure-gauges-mcleod",
    "name": "MICRO McLeod",
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "brand": "micro",
    "shortDesc": "McLeod — Pressure Gauges from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Accuracy",
            "±2.5% of Span"
          ],
          [
            "Metering Tube",
            "Borosilicate Glass"
          ],
          [
            "Filling Fluid",
            "Mercury"
          ],
          [
            "Case",
            "M. S. Powder Coated"
          ],
          [
            "Window",
            "Transparent Acrylic"
          ],
          [
            "Mounting",
            "M.S. Stand"
          ],
          [
            "Entry",
            "Back side"
          ],
          [
            "Connection",
            "M. S. nickel plated Hose Connection"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/mcleod/1.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/mcleod/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/mcleod/2.jpg"
    ]
  },
  {
    "id": "micro-pressure-gauges-mud-gauges",
    "name": "MICRO Mud Gauges",
    "category": "pressure",
    "subCategory": "Pressure Gauges",
    "brand": "micro",
    "shortDesc": "Mud Gauges — Pressure Gauges from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 150 mm"
          ],
          [
            "Accuracy",
            "±1% of FS"
          ],
          [
            "Case & Bezel",
            "SS 304 case (SS 316 Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529"
          ],
          [
            "Case Filling Fluid",
            "Glycerin (99.7%)"
          ],
          [
            "Pressure element (Bourdon Tube)",
            "SS 316L"
          ],
          [
            "Over pressure limit",
            "110% of FS"
          ],
          [
            "Movement",
            "SS 304 (SS 316 optional)"
          ],
          [
            "Sealing gasket",
            "Nitrile Rubber"
          ],
          [
            "Blow out protection",
            "Neoprene Rubber (EPDM Optional)"
          ],
          [
            "Sealed Unit",
            "SS 316"
          ],
          [
            "Diaphragm",
            "SS 316L with Viton Ring sealing (Mud Protection – Nitrile Rubber Pad)"
          ],
          [
            "Sealing Fluid",
            "Silicon Oil"
          ],
          [
            "Process Connection",
            "2” NPT / BSPT(Male) or Flanged"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting"
          ],
          [
            "Pressure range",
            "0 … 1000 / 1500 / 2000 bar , 0 … 5000 / 6000 / 10000 / 20000 lb/in²"
          ],
          [
            "Scale",
            "Kg/cm² / bar / KPa / MPa (Single Scale) Dual Scale markings (Optional)"
          ],
          [
            "Optional Available features",
            "External Zero Adjustment"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-gauge/mud-gauges/1.jpg"
  },
  {
    "id": "micro-differential-pressure-gauge-diaphragm-type-differential",
    "name": "MICRO Diaphragm Type Differential",
    "category": "pressure",
    "subCategory": "Differential Pressure Gauge",
    "brand": "micro",
    "shortDesc": "Diaphragm Type Differential — Differential Pressure Gauge from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 100 & 150 mm"
          ],
          [
            "Accuracy",
            "±2% of FS for Single Diaphragm (±1.6% of FS Optional); ±1.6% of FS for Double Diaphragm (±1% of FS Optional)"
          ],
          [
            "Case & Bezel",
            "SS 304 case with Snap Action bayonet lock type bezel (SS 316 Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529; IP 68 as per IS/IEC 60 529 – Optional"
          ],
          [
            "Pressure element : Diaphragm (Single / Double)",
            "SS 316L"
          ],
          [
            "Static Pressure",
            "For Single Diaphragm 10 Times (Max. 40 bar) of Pressure Range; For Double Diaphragm Up to 600 mmWc Range : 10 bar; 1000 to 2500 mmWc : 40 bar; 4000 mmWc and above : 100 bar"
          ],
          [
            "Movement",
            "SS 304"
          ],
          [
            "Low & High Pressure Chamber",
            "SS 304 Standard / SS 316 / SS 316L"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium —Black Finish Micro Zero Adjustment (External Zero Adjustment optional)"
          ],
          [
            "Window",
            "4 mm thick Toughened Glass (Safety / Shatter Proof Optional)"
          ],
          [
            "Joints",
            "Argon welded"
          ],
          [
            "Sealing gasket",
            "Viton"
          ],
          [
            "Blow out protection",
            "Top of the Case with Vent Valve for pressure releif"
          ],
          [
            "Process Connection : (HP & LP)",
            "1/4” NPT (Female) Standard (3/8” or 1/2” Optional through extra adopters)"
          ],
          [
            "Permissible temperature",
            "Ambient : -250C to 60'C; Process : Maximum 10'C"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Bottom Connection Surface Mounting; Back Connection Panel Mounting; Pipe or Yoke Mounting"
          ],
          [
            "Differential Pressure ΔP range",
            "250 mmWc to 6000 mmWc … up to 10 bar"
          ],
          [
            "Optional Available features",
            "• Liquid Filled Case • Electrical Contact • Pressure Equalizing Valve • Diaphragm Seal unit suitable to process medium with Capillary Extension • Maximum pointer Follower"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/diaphragm-type-differential/4.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/diaphragm-type-differential/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/diaphragm-type-differential/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/diaphragm-type-differential/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/diaphragm-type-differential/3.jpg"
    ]
  },
  {
    "id": "micro-differential-pressure-gauge-bourdon-type-differential",
    "name": "MICRO Bourdon Type Differential",
    "category": "pressure",
    "subCategory": "Differential Pressure Gauge",
    "brand": "micro",
    "shortDesc": "Bourdon Type Differential — Differential Pressure Gauge from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 100 & 150 mm"
          ],
          [
            "Accuracy",
            "±2% of FS"
          ],
          [
            "Case & Bezel",
            "SS 304 case with Snap Action bayonet lock type bezel (SS 316 Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529; IP 68 as per IS/IEC 60 529 – Optional"
          ],
          [
            "Pressure element : Bourdon Tube",
            "SS 316L"
          ],
          [
            "Static Pressure",
            "1.5 Times of Pressure Range"
          ],
          [
            "Movement",
            "SS 304 Double bearing friction less type"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium —Black Finish Micro Zero Adjustment"
          ],
          [
            "Window",
            "4 mm thick Toughened Glass (Safety / Shatter Proof Optional)"
          ],
          [
            "Joints",
            "Argon welded"
          ],
          [
            "Sealing gasket",
            "SS 316 / SS 316L (Monel 400 Optional)"
          ],
          [
            "Blow out protection",
            "Neoprene Rubber (EPDM Optional) On Back of Case"
          ],
          [
            "Pressure relief",
            "Top of Case with Vent Valve (On Request)"
          ],
          [
            "Process Connection : (HP & LP)",
            "1/4” / 3/8” / 1/2” BSP / NPT / BSPT (Male) M20 X 1.5 (Male), Other Male or Female Connection On Request"
          ],
          [
            "Permissible temperature",
            "Ambient : -25'C to 60'C; Process : Maximum 60'C"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Bottom Connection Surface Mounting; Pipe / Yoke Mounting"
          ],
          [
            "Differential Pressure ΔP range",
            "0.6 … up to 10 bar"
          ],
          [
            "Optional Available features",
            "• Liquid Filled Case • Electrical Contact • Pressure Equalizing Valve • Diaphragm Seal unit suitable to process medium with Capillary Extension • Maximum pointer Follower"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/bourdon-type-differential/3.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/bourdon-type-differential/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/bourdon-type-differential/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/bourdon-type-differential/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/bourdon-type-differential/2.jpg"
    ]
  },
  {
    "id": "micro-differential-pressure-gauge-magnetic-piston-type-differential",
    "name": "MICRO Magnetic Piston Type Differential",
    "category": "pressure",
    "subCategory": "Differential Pressure Gauge",
    "brand": "micro",
    "shortDesc": "Magnetic Piston Type Differential — Differential Pressure Gauge from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 40, 63, 80, 100 & 150 mm"
          ],
          [
            "Accuracy",
            "±2.5% of FS (Ascending) (±2% of FS Optional)"
          ],
          [
            "Case & Bezel",
            "SS 304 case with Nitrile Rubber sealing ring at front"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529; IP 68 as per IS/IEC 60 529 – Optional"
          ],
          [
            "Pressure element — Compression Spring",
            "SS 304"
          ],
          [
            "Magnetic Piston",
            "Hard Ferrite"
          ],
          [
            "Static Pressure",
            "100 bar (Standard) (200, 450 & 700 bar Optional)"
          ],
          [
            "Housing (Wetted Parts)",
            "Aluminium (Standard) / SS 316 / SS 316L / Aluminium Housing with SS 316 Sleeve)"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with black marking over 90° arc ± 5°"
          ],
          [
            "Pointer",
            "Aluminium —Black Finish Fix Type"
          ],
          [
            "Window",
            "Clear Acrylic"
          ],
          [
            "Sealing Material",
            "Nitrile Rubber (Standard) (EPDM & Viton Rubber Optional)"
          ],
          [
            "Process Connection : (HP & LP)",
            "1/4” BSP (Female) Standard"
          ],
          [
            "Permissible temperature",
            "Ambient : -25'C to 65'C; Process : Maximum 80'C (Standard) (200' C Optional)"
          ],
          [
            "Type of mounting",
            "Inline Mounting; Direct Bottom Mounting; Direct Back or Panel Back Mounting; Pipe or Yoke Mounting"
          ],
          [
            "Differential Pressure ΔP range",
            "0… to 10 bar"
          ],
          [
            "Optional Available features",
            "• Magnetic Reed Switch (Single SPDT Standard / Double SPDT Optional) (Between 20 to 100% of FS) • Switch Rating: 15 VA, 0.5 Amps, 230 V AC / 200 VDC or 100VA, 1.0 Amps, 230 V AC / 200 VDC • Liquid Filled Case • Maximum pointer Follower • Customized Dial • Customized Mounting"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/magnetic-piston-type-differential/4.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/magnetic-piston-type-differential/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/magnetic-piston-type-differential/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/magnetic-piston-type-differential/6.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/magnetic-piston-type-differential/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/magnetic-piston-type-differential/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/magnetic-piston-type-differential/3.jpg"
    ]
  },
  {
    "id": "micro-differential-pressure-gauge-bellow-type-differential",
    "name": "MICRO Bellow Type Differential",
    "category": "pressure",
    "subCategory": "Differential Pressure Gauge",
    "brand": "micro",
    "shortDesc": "Bellow Type Differential — Differential Pressure Gauge from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 150 mm"
          ],
          [
            "Accuracy",
            "Up to 1 bar ±1.6% of FS; 1 bar to 6 bar ±1% of FS"
          ],
          [
            "Case & Bezel",
            "SS 304 case with Snap Action bayonet lock type bezel (SS 316 Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529; IP 68 as per IS/IEC 60 529 – Optional"
          ],
          [
            "Pressure element —Bellows",
            "SS 316"
          ],
          [
            "Static Pressure",
            "Up to Ranges 0.6 bar : 6 bar; 1 bar to 2.5 bar : 25 bar; 4 to 6 bar : 40 bar"
          ],
          [
            "Movement",
            "Accurate amplifying SS 304 Movement driven by means of flexible blades attached to force balance welded frame"
          ],
          [
            "Socket",
            "SS 316"
          ],
          [
            "Dial",
            "Aluminium —Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium —Black Finish Micro Zero Adjustment"
          ],
          [
            "Window",
            "4 mm thick Toughened Glass (Safety / Shatter Proof Optional)"
          ],
          [
            "Joints",
            "Argon welded"
          ],
          [
            "Sealing gasket",
            "Neoprene Rubber (EPDM Optional)"
          ],
          [
            "Blow out protection",
            "Neoprene Rubber (EPDM Optional)"
          ],
          [
            "Pressure relief",
            "Top of Case with Vent Valve (On Request)"
          ],
          [
            "Process Connection —(HP & LP)",
            "1/4” / 3/8” / 1/2” BSP / NPT / BSPT (Male) M20 X 1.5 (Male)"
          ],
          [
            "Permissible temperature",
            "Ambient : -25'C to 6'0C; Process : Maximum 100'C"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Bottom Connection Surface Mounting; Pipe or Yoke Mounting"
          ],
          [
            "Differential Pressure ΔP range",
            "1000 mmWc… 4000 mmWc ... up to 6 bar"
          ],
          [
            "Optional Available features",
            "• Liquid Filled Case • Electrical Contact • Pressure Equalizing Valve • Maximum pointer Follower • Diaphragm Seal unit suitable to process medium with Capillary Extension"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/differntial-pressure-gauge/bellow-type-differential/1.jpg"
  },
  {
    "id": "micro-digital-pressure-gauge-digital-display",
    "name": "MICRO Digital Display",
    "category": "pressure",
    "subCategory": "Digital Pressure Gauge",
    "brand": "micro",
    "shortDesc": "Digital Pressure Gauge — model variants: MPC-05 / BPZ-2000 / TX-430 / BPZ-2006.",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Models",
            "MPC-05 / BPZ-2000 / TX-430 / BPZ-2006"
          ],
          [
            "Measurement",
            "Pressure / Pressure / Pressure / Differential Pressure (ΔP)"
          ],
          [
            "Display",
            "5 Digit, 15 mm High 2 Line Backlit LCD with Bar Graph / 4 Digit, 18 mm LCD with Bar Graph Display / 5 Digit 7 Segment single line LCD display / 5 Digit, 18 mm High LCD with Bar Graph Display"
          ],
          [
            "Resolution",
            "As per range and unit selection"
          ],
          [
            "Calibration",
            "Password Protected / N. A. / Password Protected / N. A."
          ],
          [
            "Accuracy",
            "±0.5% of FS or Better / ±0.25 of FS or Better / ±0.15 of FS / ±0.25 of FS or Better"
          ],
          [
            "Power Supply",
            "9V Alkaline Battery / 9V Alkaline Battery / 7.5 VDC (1.5 x 5 No Alkaline) / 9V Alkaline Battery"
          ],
          [
            "Battery Life",
            "2000 Hours in continues mode 2 years in sleeping mode / 2 Years in Power Saving Mode / 1000 hours in Continues Mode / 2 Years in Power Saving Mode"
          ],
          [
            "Bar Graph",
            "Pressure on percentage of dynamic display (in progress bar display) / Pressure on Percentage of dynamic display (In progress bar display) / N. A. / Pressure on Percentage of dynamic display (In progress bar display)"
          ],
          [
            "Enclosure",
            "S.S. 304 Snap Action Case with bayonet bezel Ø100 mm / ABS Ø67 mm x 116 mm Height / Aluminim Anodized Ø100 mm / ABS Ø67 mm x 116 mm Height"
          ],
          [
            "Sampling Rate",
            "4 Times / Sec."
          ],
          [
            "Key Pad",
            "Soft Touch Keypad on Front Window"
          ],
          [
            "Proof Pressure",
            "150% of FS / 200% of FS or 6000 PSI whichever is lower / 150% of FS / 200% of FS or 6000 PSI whichever is lower"
          ],
          [
            "Burst Pressure",
            "N. A. / 300% of FS or 10000 PSI whichever is lower / N. A. / 300% of FS or 10000 PSI whichever is lower"
          ],
          [
            "Media Compatibility",
            "All corrosive media compatible with SS 316"
          ],
          [
            "Temperature",
            "-20... 70 Deg C / -1... 49 Deg C / 0... 50 Deg C / -1... 49 Deg C"
          ],
          [
            "Process Connection",
            "1/4\" BSP (M) / 1/4\" NPT (M) / 1/4\" BSP (M) / 1/4\" - 1/8\" NPT (M)"
          ],
          [
            "Engineering Units",
            "Mpa, kPa, Pa, bar, psi, Tor, ATM, Kg/cm2, mmH2O, MH2O / psi, bar, Kg/cm2, kPa / Kg/cm2, bar, psi, kPa, mmHg, Inch Hg, mmH2C Inch H2O / psi, bar, Kg/cm2, Kpa"
          ],
          [
            "Pressure Ranges",
            "-1 to 700 bar / 0-1000 bar / -1 to 700 bar / 0 to 35 bar"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "baseModel": "MPC-05 / BPZ-2000 / TX-430 / BPZ-2006",
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/digital-pressure-gauge/ddigital-display/3.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/digital-pressure-gauge/ddigital-display/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/digital-pressure-gauge/ddigital-display/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/digital-pressure-gauge/ddigital-display/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/digital-pressure-gauge/ddigital-display/2.jpg"
    ]
  },
  {
    "id": "micro-pressure-switches-micro-fixed-differential-pressure-switch-series-mfd",
    "name": "MICRO MICRO Fixed Differential Pressure Switch (Series MFD)",
    "category": "pressure",
    "subCategory": "Pressure Switches",
    "brand": "micro",
    "shortDesc": "MICRO Fixed Differential Pressure Switch (Series MFD) — Pressure Switches from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Enclosure",
            "Aluminum Die Cast Weather Proof to IP-66"
          ],
          [
            "Sensing Element",
            "Diaphragm Sealed ( up to 40 bar ) / Piston type above 60 bar"
          ],
          [
            "Wetted parts",
            "S S 304 / S S 316"
          ],
          [
            "Repeatability",
            "± 1 % of Full Span"
          ],
          [
            "Scale Accuracy",
            "± 3 % of Full Span"
          ],
          [
            "Micro Switch",
            "1 SPDT Snap Action or 2 SPDT on request"
          ],
          [
            "Switch Rating",
            "15 A, 250 V AC or 0.2 A, 220 V DC / Varies based on selection of Micro Switch"
          ],
          [
            "Range",
            "Refer Standard Range Table"
          ],
          [
            "Set point",
            "Between 20 to 80% for better performance"
          ],
          [
            "Over Protection",
            "150 % of Full Span"
          ],
          [
            "Differential",
            "Fixed"
          ],
          [
            "Mounting",
            "Bottom / Panel"
          ],
          [
            "Process connection",
            "¼” NPT (F)"
          ],
          [
            "Set Point adjustment",
            "External with Locking system"
          ],
          [
            "Cable entry",
            "PG 13.5mm Standard / DIN Connector or Other optional"
          ],
          [
            "Maximum Process Temperature",
            "150° C / 300° F"
          ],
          [
            "Conformity",
            "BS 6134 Standard"
          ],
          [
            "High voltage strength",
            "0.5 to 0.6 KV between open contact 2 KV between contact & Body."
          ],
          [
            "Insulation resistance",
            "> 10 M ohms at 500 V"
          ],
          [
            "Process Media",
            "Air, water, Oil etc…."
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-switches/pic1.jpg"
  },
  {
    "id": "micro-pressure-switches-micro-adjustable-differential-pressure-switch-series-mad",
    "name": "MICRO MICRO Adjustable Differential Pressure Switch (Series MAD)",
    "category": "pressure",
    "subCategory": "Pressure Switches",
    "brand": "micro",
    "shortDesc": "MICRO Adjustable Differential Pressure Switch (Series MAD) — Pressure Switches from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Enclosure",
            "Aluminum Die Cast Weather Proof to IP-66"
          ],
          [
            "Sensing Element",
            "Diaphragm Sealed ( up to 32 bar )"
          ],
          [
            "Wetted parts",
            "S S 304 / S S 316"
          ],
          [
            "Repeatability",
            "± 1 % of Full Span"
          ],
          [
            "Scale Accuracy",
            "± 5 % of Full Span"
          ],
          [
            "Micro Switch",
            "1 SPDT Snap Action"
          ],
          [
            "Switch Rating",
            "15 A, 250 V AC or 0.4 A, 110 V DC / Varies based on selection of Micro Switch"
          ],
          [
            "Range",
            "Refer Standard Range Table"
          ],
          [
            "Set point",
            "Between 20 to 80% for better performance"
          ],
          [
            "Over Protection",
            "150 % of Full Span"
          ],
          [
            "Differential",
            "Adjustable"
          ],
          [
            "Mounting",
            "Bottom / Panel"
          ],
          [
            "Process connection",
            "¼” NPT (F)"
          ],
          [
            "Set Point adjustment",
            "External with Locking system"
          ],
          [
            "Cable entry",
            "PG 13.5mm Standard / DIN Connector or Other optional"
          ],
          [
            "Maximum Process Temperature",
            "150° C / 300° F"
          ],
          [
            "Conformity",
            "BS 6134 Standard"
          ],
          [
            "High voltage strength",
            "0.5 to 0.6 KV between open contact 2 KV between contact & Body."
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-switches/pic2.jpg"
  },
  {
    "id": "micro-pressure-switches-micro-differential-p-pressure-switches-series-mds",
    "name": "MICRO Micro Differential (ΔP) Pressure Switches (Series MDS)",
    "category": "pressure",
    "subCategory": "Pressure Switches",
    "brand": "micro",
    "shortDesc": "Micro Differential (ΔP) Pressure Switches (Series MDS) — Pressure Switches from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Enclosure",
            "Aluminum Die Cast Weather Proof to IP-66"
          ],
          [
            "Sensing Element",
            "Diaphragm Sealed ( up to 40 bar ) / Piston type above 60 bar"
          ],
          [
            "Wetted parts",
            "S S 304 / S S 316"
          ],
          [
            "Repeatability",
            "± 1 % of Full Span"
          ],
          [
            "Scale Accuracy",
            "± 3 % of Full Span"
          ],
          [
            "Micro Switch",
            "1 SPDT Snap Action or 2 SPDT on request"
          ],
          [
            "Switch Rating",
            "15 A, 250 V AC or 0.2 A, 220 V DC / Varies based on selection of Micro Switch"
          ],
          [
            "Range",
            "Refer Standard Range Table"
          ],
          [
            "Set point",
            "Between 20 to 80% for better performance"
          ],
          [
            "Over Protection",
            "150 % of Full Span"
          ],
          [
            "Differential",
            "Fixed / Adjustable"
          ],
          [
            "Mounting",
            "Bottom / Panel"
          ],
          [
            "Process connection",
            "¼” NPT (F)"
          ],
          [
            "Set Point adjustment",
            "External with Locking system"
          ],
          [
            "Cable entry",
            "PG 13.5mm Standard / DIN Connector or Other optional"
          ],
          [
            "Maximum Process Temperature",
            "150° C / 300° F"
          ],
          [
            "Conformity",
            "BS 6134 Standard"
          ],
          [
            "High voltage strength",
            "0.5 to 0.6 KV between open contact 2 KV between contact & Body."
          ],
          [
            "Insulation resistance",
            "> 10 M ohms at 500 V"
          ],
          [
            "Process Media",
            "Air, water, Oil etc…."
          ],
          [
            "DP Chamber",
            "Aluminum for Range 5 to 600 mbar; S S 316 for Range 1 to 25 bar"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/pressure-switches/pic3.jpg"
  },
  {
    "id": "micro-manometer-manometer",
    "name": "MICRO Manometer",
    "category": "pressure",
    "subCategory": "Manometer",
    "brand": "micro",
    "shortDesc": "Manometer from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Types",
            "Inclined; Single Limb; 'U' Tube"
          ],
          [
            "Housing",
            "Solid Transparent Block of Acrylic"
          ],
          [
            "Metering Tube",
            "Drilled through Solid Acrylic Block"
          ],
          [
            "Scale",
            "White Acrylic with Black Markings Standard (Red / Blue Marking Optional); Black Colored Aluminium with White Markings"
          ],
          [
            "Accuracy",
            "±2% of FS"
          ],
          [
            "Indicating Liquid",
            "Red having Specific Gravity 0.81"
          ],
          [
            "Connection",
            "PVC Standard / SS Nozzle (Optional)"
          ],
          [
            "Mounting",
            "Wall Mounting (Standard); Adjustable 3 Leg Stand Mounting (Optional)"
          ],
          [
            "Zero Adjustment",
            "By External Knob"
          ],
          [
            "Working Temperature",
            "Maximum 80°C"
          ],
          [
            "Ranges",
            "Inclined : 10, 15, 25, 50, 75, 100 mm H2O; Single Limb : 100, 150, 200, 250, 300, 400, 500 mm H2O; 'U' Tube : 100-0-100, 150-0-150, 200-0-200, 250-0-250 mm H2O"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/manometer/manometer/3.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/manometer/manometer/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/manometer/manometer/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/manometer/manometer/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/manometer/manometer/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/manometer/manometer/2.jpg"
    ]
  },
  {
    "id": "micro-transmitter-transmitter",
    "name": "MICRO Transmitter",
    "category": "pressure",
    "subCategory": "Transmitter",
    "brand": "micro",
    "shortDesc": "Transmitter from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Accuracy",
            "±0.25% of Span (combined non linearity, hysteresis, and repeatability)"
          ],
          [
            "Total Error Band",
            "±1% Span (Over compensated range)"
          ],
          [
            "Long Term Stability",
            "±0.25% of Span"
          ],
          [
            "Permissible Temperature",
            "Compensated : -200 … +85'C; Operating : -400 … +125'C; Storage : -450 … +125'C"
          ],
          [
            "Burst pressure",
            "5 Times of FS"
          ],
          [
            "Over Load Pressure",
            "2 Times of FS"
          ],
          [
            "Connection",
            "PVC Standard / SS Nozzle (Optional)"
          ],
          [
            "Media Compatibility",
            "All materials compatible with 17-4 Stainless Steel"
          ],
          [
            "Supply Voltage",
            "24 V DC"
          ],
          [
            "Output",
            "4 … 20 mA (Standard); 0.5 … 4.5 V / 1 … 5 V / 0 – 5 V / 0 – 10 V (Optional)"
          ],
          [
            "Range",
            "-1 … 0 … 1000 bar; mmWC & Absolute ranges available on request."
          ],
          [
            "Additional Services",
            "We undertake repair & Refilling & attaching Diaphragm Seal to Transmitters of any make."
          ],
          [
            "Optional Available Features",
            "Diaphragm Seal for various corrosive or contaminated liquids"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/transmitter/3.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/transmitter/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/transmitter/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/transmitter/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/transmitter/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/transmitter/2.jpg"
    ]
  },
  {
    "id": "micro-accessories-snubber-adjustable-pulsation-dampner",
    "name": "MICRO Snubber (Adjustable Pulsation Dampner)",
    "category": "pressure",
    "subCategory": "Accessories",
    "brand": "micro",
    "shortDesc": "Snubber is intended to suppress the effect of sudden pressure pulses and fluctuation of pressure peak. It is provided with adjustable needle screw to restrict the flow as per operating condition to enhance service life of a pressure instrument.",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "MOC",
            "SS 304 / SS 316 / SS 316L"
          ],
          [
            "Connection",
            "1/4\" / 3/8” / 1/2” BSP / NPT / BSPT (M X F)"
          ],
          [
            "Max. Pressure",
            "400 bar / 6000 lb/in²"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/accessories/1.jpg"
  },
  {
    "id": "micro-accessories-needle-valve-bleed-valve",
    "name": "MICRO Needle Valve / Bleed Valve",
    "category": "pressure",
    "subCategory": "Accessories",
    "brand": "micro",
    "shortDesc": "Needle Valves are intended to isolate the pressure instrument from pressure medium or to throttle and to damp pressure pulses. These are available with a variety of end connections with female ends and male-female ends.",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "MOC",
            "SS 304 / SS 316 / SS 316L"
          ],
          [
            "Connection",
            "1/4\" / 3/8” / 1/2” / 1” BSP / NPT / BSPT (M X F) / (F X F)"
          ],
          [
            "Max. Pressure",
            "400 bar / 6000 lb/in² - standard; 600 & 1000 bar – optional"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/accessories/2.jpg"
  },
  {
    "id": "micro-accessories-gauge-cocks",
    "name": "MICRO Gauge Cocks",
    "category": "pressure",
    "subCategory": "Accessories",
    "brand": "micro",
    "shortDesc": "Gauge Cocks are economical to isolate pressure instrument from process fluid. Available in 2-Way as well as 3-Way. 2-Way provides isolation of the instrument and 3-Way has an additional provision of drain (Vent).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "MOC",
            "SS 304 / SS 316 / SS 316L"
          ],
          [
            "Connection",
            "1/4\" / 3/8” / 1/2” BSP / NPT / BSPT (F X F) for 2-Way & (M X F X F) for 3-Way. Others on Request"
          ],
          [
            "Max. Pressure",
            "100 bar / 1500 lb/in²"
          ],
          [
            "Vent Hole",
            "Optional for 2-Way"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/accessories/3.jpg"
  },
  {
    "id": "micro-accessories-gauge-saver",
    "name": "MICRO Gauge Saver",
    "category": "pressure",
    "subCategory": "Accessories",
    "brand": "micro",
    "shortDesc": "Gauge Savers are intended to protect pressure instrument against the effect of pressure that exceeds the maximum pressure rating of an pressure instrument.",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "MOC",
            "SS 304 / SS 316 / SS 316L"
          ],
          [
            "Connection",
            "1/4\" / 3/8” / 1/2” BSP / NPT / BSPT (M X F)"
          ],
          [
            "Range",
            "0.2 to 400 bar"
          ],
          [
            "Max. Pressure",
            "400 bar / 6000 lb/in²"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/accessories/4.jpg"
  },
  {
    "id": "micro-accessories-gauge-siphons",
    "name": "MICRO Gauge Siphons",
    "category": "pressure",
    "subCategory": "Accessories",
    "brand": "micro",
    "shortDesc": "Siphons are intended to protect pressure instrument from the effect of high temperature pressure medium such as steam etc. and also to reduce the effect of pressure surge. The hot medium condensate inside the coil of siphon tube and prevent the direct contact.",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "MOC",
            "SS 304 / SS 316 / SS 316L / Carbon Steel"
          ],
          [
            "Connection",
            "1/4\" / 3/8” / 1/2” BSP / NPT / BSPT (M X M) Standard (M X F Optional)"
          ],
          [
            "Types",
            "U-Type, U-Flat Type, Pig Tail Type, Q-Type"
          ],
          [
            "Pipe Size",
            "3/8\" / 1/2\" SCH. 40 / 80 / 160"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/accessories/5.jpg"
  },
  {
    "id": "micro-accessories-2-valve-manifold",
    "name": "MICRO 2 Valve Manifold",
    "category": "pressure",
    "subCategory": "Accessories",
    "brand": "micro",
    "shortDesc": "These Manifolds provides direct mounting features with isolation, drain and calibration in a single unit. These types of manifolds can be directly mounted on static pressure instruments to eliminate several parts and joints.",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "MOC",
            "SS 304 / SS 316 / SS 316L"
          ],
          [
            "Connection",
            "Threaded / Flanged"
          ],
          [
            "Max. Pressure",
            "400 bar / 6000 lb/in²"
          ],
          [
            "Types",
            "'R' & 'T'"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/accessories/6.jpg"
  },
  {
    "id": "micro-accessories-3-valve-manifold",
    "name": "MICRO 3 Valve Manifold",
    "category": "pressure",
    "subCategory": "Accessories",
    "brand": "micro",
    "shortDesc": "These Manifolds are generally used in differential pressure application with DP Gauges, Switches & Transmitters. These are provided with two isolation and one equalising valve.",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "MOC",
            "SS 304 / SS 316 / SS 316L"
          ],
          [
            "Connection",
            "Threaded / Flanged"
          ],
          [
            "Max. Pressure",
            "400 bar / 6000 lb/in²"
          ],
          [
            "Types",
            "'R', 'T' & 'H'"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/accessories/7.jpg"
  },
  {
    "id": "micro-accessories-5-valve-manifold",
    "name": "MICRO 5 Valve Manifold",
    "category": "pressure",
    "subCategory": "Accessories",
    "brand": "micro",
    "shortDesc": "These Manifolds are having two isolations, one equalizer & two drain/calibration valves.",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "MOC",
            "SS 304 / SS 316 / SS 316L"
          ],
          [
            "Connection",
            "Threaded / Flanged"
          ],
          [
            "Max. Pressure",
            "400 bar / 6000 lb/in²"
          ],
          [
            "Types",
            "'R', 'T' & 'H'"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/accessories/8.jpg"
  },
  {
    "id": "micro-accessories-hydraulic-comparison-tester",
    "name": "MICRO Hydraulic Comparison Tester",
    "category": "pressure",
    "subCategory": "Accessories",
    "brand": "micro",
    "shortDesc": "These are intended to compare the reading of pressure instrument against Master / Test Pressure instrument by pressure balancing method. Available in different ranges with or without pressure priming pump.",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "MOC",
            "SS 304"
          ],
          [
            "Range",
            "0 … … 100 / 400 / 700 / 2000 bar"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/accessories/9.jpg"
  },
  {
    "id": "micro-accessories-pneumatic-comparison-tester-2-in-1",
    "name": "MICRO Pneumatic Comparison Tester (2 in 1)",
    "category": "pressure",
    "subCategory": "Accessories",
    "brand": "micro",
    "shortDesc": "These are intended to compare the reading of pressure / Vacuum of instrument against Master /Test Pressure instrument by pressure or Vacuum balancing method.",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "MOC",
            "SS 304"
          ],
          [
            "Range",
            "Full Vacuum, 0 … 35 bar"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/accessories/10.jpg"
  },
  {
    "id": "micro-accessories-hydraulic-portable-hand-pump",
    "name": "MICRO Hydraulic Portable Hand Pump",
    "category": "pressure",
    "subCategory": "Accessories",
    "brand": "micro",
    "shortDesc": "These are intended to compare the reading of pressure of instrument against Master pressure instrument and are very light weight and handy to calibrate on site instruments.",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Generation of Pressure",
            "100, 250 & 700 Bar"
          ],
          [
            "Medium",
            "Oil / water"
          ],
          [
            "End Connection",
            "Test 1/4” BSP(F) & Master 1/4” BSP(F)"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/accessories/11.jpg"
  },
  {
    "id": "micro-accessories-pneumatic-portable-hand-pump-2-in-1",
    "name": "MICRO Pneumatic Portable Hand Pump (2 in 1)",
    "category": "pressure",
    "subCategory": "Accessories",
    "brand": "micro",
    "shortDesc": "These are intended to compare the reading of pressure / Vacuum of instrument against Master instrument and are very light weight and handy to calibrate on site instruments.",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Generation of Pressure",
            "-1-0-35 Bar"
          ],
          [
            "Generation of Vacuum",
            "Better than 0.850 Bar"
          ],
          [
            "Medium",
            "Dry Air"
          ],
          [
            "End Connection",
            "1/4” BSP (F) Test & Master"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/accessories/12.jpg"
  },
  {
    "id": "micro-temperature-gauge-bi-metallic",
    "name": "MICRO BI-Metallic",
    "category": "temperature",
    "subCategory": "Temperature Gauge",
    "brand": "micro",
    "shortDesc": "BI-Metallic — Temperature Gauge from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 63, 100 & 150 mm"
          ],
          [
            "Accuracy",
            "±1.6% of FS (±1% of FS Optional)"
          ],
          [
            "Case & Bezel",
            "SS 304 case with Snap Action bayonet lock type bezel (SS 316 Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529; IP 68 as per IS/IEC 60 529 for Ø 100 & 150 mm - Optional"
          ],
          [
            "Sensor element",
            "Bi-Metal strip in Helix form"
          ],
          [
            "Stem Material",
            "SS 304 / SS 316 / SS 316L"
          ],
          [
            "Stem Length",
            "55 mm (Min.) to 1000 mm (Max.), Other on Request"
          ],
          [
            "Stem Diameter",
            "6 / 8 / 10 / 12 mm"
          ],
          [
            "Over Range Protection",
            "125 % of FS"
          ],
          [
            "Dial",
            "Aluminium – Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium – Black finish Center Zero Adjustment"
          ],
          [
            "Window",
            "4 mm thick Toughened Glass (Safety / Shatter Proof Optional)"
          ],
          [
            "Joints",
            "Argon welded"
          ],
          [
            "Sealing gasket",
            "Neoprene Rubber (EPDM Optional)"
          ],
          [
            "Process Connection",
            "Adjustable Type for Bottom Connection; Fix Type standard for Back Connection (Adjustable Optional); 1/4” / 3/8” / 1/2” BSP / NPT / BSPT (Male), M20 X 1.5 (Male) Other Connection on Request"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Back Connection Direct Mounting; Every Angle Mounting"
          ],
          [
            "Scale range",
            "-30°C … +50°C to 600°C or Equivalent °F"
          ],
          [
            "Optional Available features",
            "Liquid Filling Case; Dual Scale in °C & °F, Customized Scale or logo; TC Connection; External Zero Adjustment; Alarm Electrical Contact; Thermowells"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/bi-metallic/3.jpg",
    "images": [
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/bi-metallic/3.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/bi-metallic/4.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/bi-metallic/1.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/bi-metallic/2.jpg"
    ]
  },
  {
    "id": "micro-temperature-gauge-gas-mercury-filled-in-steel",
    "name": "MICRO Gas / Mercury Filled In Steel",
    "category": "temperature",
    "subCategory": "Temperature Gauge",
    "brand": "micro",
    "shortDesc": "Gas / Mercury Filled In Steel — Temperature Gauge from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "Ø 63, 100, 115, 150, 200 & 250 mm"
          ],
          [
            "Accuracy",
            "±1% of FS"
          ],
          [
            "Case & Bezel",
            "SS 304 case with Snap Action bayonet lock type bezel (SS 316 Optional)"
          ],
          [
            "Ingress Protection",
            "IP 65 as per EN 60 529 or IS/IEC 60 529; IP 68 as per IS/IEC 60 529 for Ø 100 & 150 mm - Optional"
          ],
          [
            "Sensor element",
            "Mercury / Inert Gas Actuated"
          ],
          [
            "Stem Material",
            "SS 316"
          ],
          [
            "Stem Length",
            "110 mm (Min.) to 600 mm (Max.) Other on Request"
          ],
          [
            "Stem Diameter",
            "6 / 8 / 10 / 12 / 14 mm Micro Bore Capillary Material : M.S. / SS 316"
          ],
          [
            "Micro Bore Capillary Material",
            "M.S. / SS 316"
          ],
          [
            "Capillary Protection",
            "SS 304 Flexible"
          ],
          [
            "Additional Capillary Protection",
            "SS 304 Flexible Armour / PVC"
          ],
          [
            "Capillary Length",
            "1 Meter to 40 Meter (Max.)"
          ],
          [
            "Over Range Protection",
            "125 % of FS"
          ],
          [
            "Dial",
            "Aluminium – Pre-coated White with black marking"
          ],
          [
            "Pointer",
            "Aluminium – Black finish Center / Micro Zero Adjustment"
          ],
          [
            "Window",
            "Toughened Glass (Safety / Shatter Proof Optional)"
          ],
          [
            "Joints",
            "Argon welded"
          ],
          [
            "Sealing gasket",
            "Neoprene Rubber (EPDM Optional)"
          ],
          [
            "Process Connection",
            "1/4” / 3/8” / 1/2” BSP / NPT / BSPT / M20 X 1.5 (Male - Adjustable Gland throughout the length) Other Connection on Request"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Back Connection Direct Mounting; Every Angle Mounting; Bottom connection Surface Mounting with Capillary Extension; Back Connection Panel Mounting with Capillary Extension"
          ],
          [
            "Scale range",
            "-30°C … +50°C to 650°C or Equivalent °F"
          ],
          [
            "Optional Available features",
            "Liquid Filling Case; Dual Scale in °C & °F, Customized Scale or logo; TC Connection; Anti Vibration Spring; Electrical Contact; Thermowells"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/gas-mercury-filled-in-steel/6.jpg",
    "images": [
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/gas-mercury-filled-in-steel/6.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/gas-mercury-filled-in-steel/7.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/gas-mercury-filled-in-steel/8.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/gas-mercury-filled-in-steel/9.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/gas-mercury-filled-in-steel/10.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/gas-mercury-filled-in-steel/11.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/gas-mercury-filled-in-steel/1.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/gas-mercury-filled-in-steel/2.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/gas-mercury-filled-in-steel/3.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/gas-mercury-filled-in-steel/4.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-gauge/gas-mercury-filled-in-steel/5.jpg"
    ]
  },
  {
    "id": "micro-thermometer-thermometer",
    "name": "MICRO Thermometer",
    "category": "temperature",
    "subCategory": "Thermometer",
    "brand": "micro",
    "shortDesc": "Thermometer from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Nominal size",
            "100, 110, 150 & 200 mm"
          ],
          [
            "Accuracy",
            "±3% of FS (±1% of FS Optional)"
          ],
          [
            "Case (Body)",
            "Die cast Aluminium, Brass finished with anticorrosive paint or Anodized"
          ],
          [
            "Sensor element",
            "Glass Capillary (Round or Prismatic) bulb filled with Red / Blue Alcohol (-40 ~ 200°C); Mercury (> 200°C)"
          ],
          [
            "Stem Material",
            "Brass Up to 300°C; SS 304 > 300°C"
          ],
          [
            "Stem Length",
            "1 ½” (40mm), 2 ½” (63mm), 3” (80mm), 4” (100mm), 6” (150mm)"
          ],
          [
            "Stem Diameter",
            "10 mm & Other on Request"
          ],
          [
            "Scale",
            "Single (°C) / Dual (°C & °F)"
          ],
          [
            "Scale Printing",
            "Glass Tube – Deeply Engraved Body Screen Printed (°C in Black & °F in Red) or Engraved"
          ],
          [
            "Supporting gasket",
            "Neoprene Rubber"
          ],
          [
            "Process Connection",
            "1/2\" BSP (Male) standard & Other Connection on Request"
          ],
          [
            "Type of mounting",
            "Bottom Connection Direct Mounting; Back Connection Direct Mounting 90° Angle"
          ],
          [
            "Scale range",
            "-40°C … +600°C or Equivalent °F"
          ],
          [
            "Optional Available features",
            "Customized Scale or logo; Thermowells"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://microprocesscontrols.com/xhtml/images/products/thermometer/2.jpg",
    "images": [
      "https://microprocesscontrols.com/xhtml/images/products/thermometer/2.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/thermometer/3.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/thermometer/1.jpg"
    ]
  },
  {
    "id": "micro-temperature-switches-temperature-switches",
    "name": "MICRO Temperature Switches",
    "category": "temperature",
    "subCategory": "Temperature Switches",
    "brand": "micro",
    "shortDesc": "Temperature Switches from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Enclosure",
            "Aluminium Die Cast Weatherproof to IP-68; Aluminium Die Cast Flameproof to Group IIA, IIB & IIC & Weatherproof to IP-67"
          ],
          [
            "Sensor",
            "Gas Filled thermal system actuating a SS 316 Diaphragm (Rigid Stem type / Capillary Type)"
          ],
          [
            "Wetted Parts",
            "SS 316 / SS 316L Bulb"
          ],
          [
            "Stem Length (Below thread) & Diameter",
            "Stem Length Below Thread Maximum 600 mm; Min. Stem Length mm : 130 120 120 120 110; Stem 0D Ømm : 6 8 9.5 10 12"
          ],
          [
            "Capillary Material",
            "SS 304 / SS 316 / Copper"
          ],
          [
            "Capillary Length",
            "Maximum up to 15 Meters"
          ],
          [
            "Capillary Protection",
            "SS 304 Flexible Armor"
          ],
          [
            "Repeatability",
            "±1% of Full Span"
          ],
          [
            "Scale Accuracy",
            "±5% of Full Span"
          ],
          [
            "Micro Switch",
            "1 SPDT Snap Action or 2 SPDT on Request"
          ],
          [
            "Switch Rating",
            "15 Amp, 250 VAC or 0.2 Amp, 220 V DC / varies based on selection of micro switch"
          ],
          [
            "Range",
            "10 to 100°C/ 20 to 160°C/ 50 to 250°C/ 50 to 400°C / 100 to 600°C"
          ],
          [
            "Set Point",
            "Between 20% to 80% of FS for better performance externally / internally adjustable with locking system"
          ],
          [
            "Over Range Protection",
            "150% of full span"
          ],
          [
            "Mounting",
            "Back Panel / Wall / Field"
          ],
          [
            "Differential",
            "Fixed or Adjustable"
          ],
          [
            "Process Connection",
            "1/4” / 3/8” / 1/2” BSP / NPT / BSPT / M20 X 1.5 (Male - Adjustable Gland throughout the length) Other Connection on Request"
          ],
          [
            "Cable entry",
            "PG 13.5 (Standard) / DIN Connector / 1/2\" NPT (F) / 3/4” ET / Others on Request"
          ],
          [
            "Maximum temperature",
            "150' C / 300' F"
          ],
          [
            "High Voltage Strength",
            "0.5 to 0.6 KV between open contact / 2 KV between contact & body"
          ],
          [
            "Insulation resistance",
            "> 10 MΩ at 500 V"
          ],
          [
            "Process Media",
            "Air, Water, Oil, etc …"
          ],
          [
            "Optional Available features",
            "Client Specific dead band; Single / Double Compression Gland (Weather / Flame Proof)"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://microprocesscontrols.com/xhtml/images/products/temperature-switches/2.jpg",
    "images": [
      "https://microprocesscontrols.com/xhtml/images/products/temperature-switches/2.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-switches/3.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/temperature-switches/1.jpg"
    ]
  },
  {
    "id": "micro-rtd-thermocouple-resistance-temperature-detector-rtd",
    "name": "MICRO Resistance Temperature Detector (RTD)",
    "category": "temperature",
    "subCategory": "RTD/Thermocouple",
    "brand": "micro",
    "shortDesc": "Resistance Temperature Detector (RTD) — RTD/Thermocouple from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Element",
            "Pt – 100 (Standard); Pt – 1000 (Optional)"
          ],
          [
            "No. of Elements",
            "Simplex / Duplex / Multipoint"
          ],
          [
            "Sheath Diameter",
            "3.2 mm, 6 mm, 8 mm, 10 mm, 12 mm; Others on request."
          ],
          [
            "Sheath Material",
            "SS 316 (Standard); SS 316 L / SS 321 / SS 310 / KER 610 or 710 (Optional)"
          ],
          [
            "Sheath Length",
            "150 mm, 300 mm (Standard) Others on request"
          ],
          [
            "Construction",
            "Straight Type; Flexible Type (Capillary length as per requirement)"
          ],
          [
            "Insulation",
            "Loose MgO (Standard); Mineral Insulated (Optional)"
          ],
          [
            "Conductor",
            "Copper"
          ],
          [
            "Insulation Resistance",
            "> 100 MΩ at 500 V DC at 25'C"
          ],
          [
            "Open End",
            "Pot Seal, Plug & Jack, Ceramic Terminal Block with SS Disc"
          ],
          [
            "Head",
            "Die Cast Aluminium (Standard); SS 304 / SS 316 (Optional); Simplex or Duplex entry"
          ],
          [
            "Protection",
            "Weatherproof IP-65; Flameproof to Group I, Group IIA, IIB & IIC"
          ],
          [
            "Cable Entry (Single or Double)",
            "Black Head – PG 11 (Standard); 1/2\" NPT (Female) (Standard) for WP & FLP; 3/4\" NPT (Female) (Optional)"
          ],
          [
            "Extensions",
            "Nipple (75 or 100 mm Long); Nipple – Union – Nipple standard 150 mm long, 1/2\" Schedule 40/80"
          ],
          [
            "Connection",
            "1/4\", 3/8”, 1/2\" BSP / NPT adjustable or fixed; Spring Loaded Connection; Bayonet Type Connection"
          ],
          [
            "Measuring Range (Joints)",
            "-200 to 4500C (Silver Brazing); -200 to 6500C (Welded)"
          ],
          [
            "Head Mounted Transmitter",
            "Input (RTD); Output (4 … 20 mA); Supply (24 V DC)"
          ],
          [
            "Thermowell",
            "(SS 304 / SS 316); Bar Stock Straight; Tapered; Threaded or Flanged"
          ],
          [
            "Compensating Cable",
            "(flexible cable); Silicon x Silicon Insulated, Silicon x S. S. Breaded; Teflon x Teflon Insulated"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/resistance-temperature-detector-rtd/4.jpg",
    "images": [
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/resistance-temperature-detector-rtd/4.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/resistance-temperature-detector-rtd/5.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/resistance-temperature-detector-rtd/6.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/resistance-temperature-detector-rtd/7.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/resistance-temperature-detector-rtd/1.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/resistance-temperature-detector-rtd/2.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/resistance-temperature-detector-rtd/3.jpg"
    ]
  },
  {
    "id": "micro-rtd-thermocouple-thermocouple",
    "name": "MICRO Thermocouple",
    "category": "temperature",
    "subCategory": "RTD/Thermocouple",
    "brand": "micro",
    "shortDesc": "Thermocouple — RTD/Thermocouple from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Element",
            "J / K / E / T / N – J Type : Fe-CuNi : 7500C (Wire Ø1.6 / 2.5 / 3.2 mm); K Type : NiCr-Ni : 12000C (Wire Ø1.6 / 2.5 / 3.2 mm); E Type: NiCr-CuNi : 8000C (Wire Ø1.6 / 2.5 / 3.2 mm); T Type: Ci-CuNi : 4000C (Wire Ø1.6 / 2.5 / 3.2 mm); N Type: NiCrSi-NiSi: 12000C (Wire Ø1.6 / 2.5 / 3.2 mm)"
          ],
          [
            "No. of Elements",
            "Simplex / Duplex / Multipoint"
          ],
          [
            "Accuracy",
            "As per ANSI MC 96.1 (Class B)"
          ],
          [
            "Sheath Diameter",
            "Ø 6 mm, 8 mm, 10 mm, 12 mm; Others on request."
          ],
          [
            "Sheath Material",
            "Metallic — Material / Normal °C / Maximum °C: SS 316 900/1000, SS 310 1000/1150, SS 446 1050/1150, Inconel 600 1100/1200; Non-Metallic — Ceramic 610 1400/1500, Ceramic 710 1700/1900"
          ],
          [
            "Sheath Length",
            "150 mm, 300 mm (Standard); Others on request (Optional)"
          ],
          [
            "Construction",
            "Straight Type; Flexible Type (Capillary length as per requirement); L Shape For Molten Metal application with hot & cold arm to keep head assembly away from the process temperature."
          ],
          [
            "Insulation",
            "Loose MgO (Standard); Mineral Insulated (Optional)"
          ],
          [
            "Junction",
            "Grounded / Ungrounded / Exposed"
          ],
          [
            "Insulation Resistance",
            "> 100 MΩ at 500 V DC at 250C"
          ],
          [
            "Open End",
            "Pot Seal, Plug & Jack, Ceramic Terminal Block with SS Disc; Others on request (Optional)"
          ],
          [
            "Head",
            "Die Cast Aluminium (Standard); SS 304/SS 316 (Optional)"
          ],
          [
            "Protection",
            "Weatherproof IP-65; Flameproof to Group l, Group llA, llB and llC"
          ],
          [
            "Cable Entry(Single or Double)",
            "Black Head - PG 11 (Standard); 1/2\" NPT (female) (Standard) for WP & FLP; 3/4\" NPT (female) (Optional)"
          ],
          [
            "Extensions",
            "Nipple (75 or 100 mm Long); Nipple - Union - Nipple standard 150 mm long, 1/2\" Schedule 40/80"
          ],
          [
            "Connection",
            "1/4\", 3/8\", 1/2\" BSP/NPT adjustable or fixed; Spring Loaded Connection; Bayonet Type Connection"
          ],
          [
            "Head Mounted Transmitter",
            "Input (Thermocouple); Output (4 … 20 mA); Supply (24 V DC)"
          ],
          [
            "Thermowell",
            "(SS 304 / SS 316); Bar Stock Straight; Tapered Threaded or Flanged"
          ],
          [
            "Compensating Cable",
            "(flexible cable); Silicon x Silicon Insulated, Silicon x S. S. Breaded; Teflon x Teflon Insulated"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/thermocouple/4.jpg",
    "images": [
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/thermocouple/4.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/thermocouple/5.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/thermocouple/6.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/thermocouple/7.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/thermocouple/1.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/thermocouple/2.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/rtd-thermocouple/thermocouple/3.jpg"
    ]
  },
  {
    "id": "micro-thermowell-thermowell",
    "name": "MICRO Thermowell",
    "category": "temperature",
    "subCategory": "Thermowell",
    "brand": "micro",
    "shortDesc": "Thermowell from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Construction of Thermowell",
            "Solid Bar Stock Type; Fabricated Type"
          ],
          [
            "Types of Thermowell",
            "Straight Type; Tapered Type; Stepped Type"
          ],
          [
            "Types of Mounting",
            "Threaded; Weld in; Flange end"
          ],
          [
            "Material of Thermowell",
            "SS 304, SS 316, SS 316L, SS 310, Inconel 600, Monel, Hestalloy; Others as per process medium requirements"
          ],
          [
            "Recommended Thermowell Insertion Length",
            "Up to 600 mm for Solid Bar Stock Type; Up to 2000 mm for Fabricated Type; Others on Request"
          ],
          [
            "Instrument Connection",
            "1/4\", 3/8”, 1/2\", 3/4\" BSP / NPT / BSPT, M20 X 1.5 (Female)"
          ],
          [
            "Process Connection",
            "1/2”/ 3/4\"/ 1” BSP / NPT / BSPT (Male); M20 X 1.5 (Male); 1/2\" / 3/4\" / 1” / 1 ½” / 2” / 3” Flange End; Weld In (Direct Weld Type)"
          ],
          [
            "Bore Diameter Size",
            "Suitable to Instrument Probe diameter"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": true,
    "image": "https://microprocesscontrols.com/xhtml/images/products/thermowell/2.jpg",
    "images": [
      "https://microprocesscontrols.com/xhtml/images/products/thermowell/2.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/thermowell/3.jpg",
      "https://microprocesscontrols.com/xhtml/images/products/thermowell/1.jpg"
    ]
  },
  {
    "id": "micro-rotameter-acrylic-glass-tube",
    "name": "MICRO Acrylic / Glass Tube",
    "category": "flow",
    "subCategory": "Rotameter",
    "brand": "micro",
    "shortDesc": "Acrylic / Glass Tube — Rotameter from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Housing",
            "Solid Transparent Block of Acrylic"
          ],
          [
            "Metering Tube",
            "Drilled through Solid Acrylic Block"
          ],
          [
            "Wetted Parts",
            "SS 304 / SS 316 / CS / PP / PTFE Lined"
          ],
          [
            "Floats",
            "SS 304 (Standard) SS 316 / PTFE / PVC / PP (Optional)"
          ],
          [
            "Packing Gaskets",
            "Neoprene / PTFE / Silicon Rubber"
          ],
          [
            "Scale",
            "Engraved on Acrylic Block itself"
          ],
          [
            "Scale Length",
            "175 – 200 mm Approximate"
          ],
          [
            "Accuracy",
            "±2% of Full Flow Standard"
          ],
          [
            "Repeatability",
            "±1% of Full Flow"
          ],
          [
            "Rangeability",
            "10:1"
          ],
          [
            "End Connection",
            "Flanged (C.C.500 mm) / Screwed / Triclover"
          ],
          [
            "Mounting",
            "Top-Bottom (Online) Flush Panel"
          ],
          [
            "Working Temperature",
            "Maximum 80°C"
          ],
          [
            "Max Pressure",
            "6 bar"
          ],
          [
            "Accessories",
            "High Low Alarm Flow Control Valve (Optional only for Flush Panel Mounting)"
          ],
          [
            "Media",
            "Air / Gas / Water & many Organic Chemicals except Petroleum products"
          ],
          [
            "Ranges",
            "0.1-1 Up to 1-30 m3/Hr for Water 0.06-0.3 Up to 300-600 m3/Hr for Air (Alternate Unit LPS / LPM / LPH available on request)"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": true,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/acrylic-glass-tube/4.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/acrylic-glass-tube/4.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/acrylic-glass-tube/5.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/acrylic-glass-tube/6.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/acrylic-glass-tube/7.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/acrylic-glass-tube/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/acrylic-glass-tube/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/acrylic-glass-tube/3.jpg"
    ]
  },
  {
    "id": "micro-rotameter-metal-tube",
    "name": "MICRO Metal Tube",
    "category": "flow",
    "subCategory": "Rotameter",
    "brand": "micro",
    "shortDesc": "Metal Tube — Rotameter from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Housing",
            "ABS Plastic (Standard) MS Powder Coated / SS (Optional)"
          ],
          [
            "Accuracy",
            "±2% of full flow (Standard) ±1.5% of Full flow (Optional)"
          ],
          [
            "Repeatability",
            "0.5%"
          ],
          [
            "Sensing Element - Floats",
            "SS 304 (Standard) SS 316, SS 316 L, PP, PTFE Lined (Optional)"
          ],
          [
            "Float Travel",
            "80 mm Approximately"
          ],
          [
            "Wetted Parts",
            "SS 304 (Standard) SS 316, SS 316 L, PP, PTFE Lined (Optional)"
          ],
          [
            "Magnet",
            "High Power Magnet"
          ],
          [
            "Rangeability",
            "10 : 1"
          ],
          [
            "Max. Pressure",
            "50 Kg/cm2 (Standard) Higher on request"
          ],
          [
            "Permissible Temperature",
            "Ambient : 0- 65'C Process : 250'C"
          ],
          [
            "Connection",
            "Flanged, Threaded, Triclover Type"
          ],
          [
            "C / C Distance",
            "0.1-1 Up to 6-60 M3/HR Range : 350 mm 8-80 Up to 20-200 M3/HR Range 500 mm Others on request"
          ],
          [
            "Connection Orientation",
            "Bottom – Top (Standard) Rear (Optional)"
          ],
          [
            "Media",
            "Air / Gas / Water & many Organic Chemicals except Petroleum products"
          ],
          [
            "Line Size",
            "15 NB … 100 NB"
          ],
          [
            "Scale Length",
            "900 Angular"
          ],
          [
            "Pressure Drop",
            "Max. 1200 mm WC"
          ],
          [
            "Flow Range",
            "0.6 … 1500 m3/Hr"
          ],
          [
            "Optional Available features",
            "• Snap Action Micro Switch (1NO / 1NC) • Switch Rating – 5 Amp, 230 V AC • Switch Setting – Adjustable over full range"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/metal-tube/2.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/metal-tube/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/metal-tube/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/rotameter/metal-tube/1.jpg"
    ]
  },
  {
    "id": "micro-electromagnetic-flow-meter-electromagnetic-flow-meter",
    "name": "MICRO Electromagnetic Flow Meter",
    "category": "flow",
    "subCategory": "Electromagnetic Flow Meter",
    "brand": "micro",
    "shortDesc": "Electromagnetic Flow Meter from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Media",
            "Liquids (Conductive)"
          ],
          [
            "Conductivity",
            "≥5 µs/cm"
          ],
          [
            "Viscosity",
            "200 cp max"
          ],
          [
            "Line size",
            "15 NB to 600 NB"
          ],
          [
            "Excitation",
            "Pulsed DC Coil"
          ],
          [
            "Type of output",
            "4 … 20 mA DC isolated, Pulse"
          ],
          [
            "Display",
            "LED 4 digit for Flow rate & 9 digits for total flow"
          ],
          [
            "Calibration range",
            "As per requirement (Factory recalibrated)"
          ],
          [
            "Accuracy",
            "±0.5% of FS (for 20 to 100% flow)"
          ],
          [
            "Linearity",
            "±0.5%"
          ],
          [
            "Repeatability",
            "±1%"
          ],
          [
            "Process Temperature",
            "850C, 1500C max."
          ],
          [
            "Max. Pressure",
            "10 Kg/cm2, max."
          ],
          [
            "Material of construction",
            "Lining: Rubber / Teflon (PTFE) Flange: CS / MS / SS Electrode: SS 316 / Hestalloy 'C' Coil Housing: MS / SS 304"
          ],
          [
            "Power Supply",
            "24 V DC external / 90-250 V AC, 50 Hz"
          ],
          [
            "Power Consumption",
            "< 10 VA"
          ],
          [
            "Isolation",
            "1.4 KV between Input, Output & power supply"
          ],
          [
            "Response Time",
            "< 100 m Sec"
          ],
          [
            "Temperature coefficient",
            "±0.1% per 0C"
          ],
          [
            "Process connection",
            "ASA 150 flanged, as per table B"
          ],
          [
            "Mounting",
            "In-Line (Horizontal / Vertical)"
          ],
          [
            "Operating condition",
            "Temperature : 0 … 550C Humidity : 5 to 95% non-condensing"
          ],
          [
            "Transmitter Enclosure",
            "Aluminium enclosure IP68/IP67"
          ],
          [
            "Optional Available features",
            "• Communication port – RS 485 supporting MODBUS RTU protocol • Transmitter enclosure – Flameproof, IP-65, IIA & IIB CMRI certified"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/electro-magnetic-flow-meter/1.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/electro-magnetic-flow-meter/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/electro-magnetic-flow-meter/2.jpg"
    ]
  },
  {
    "id": "micro-flow-switches-paddle-t-type",
    "name": "MICRO Paddle / 'T' Type",
    "category": "flow",
    "subCategory": "Flow Switches",
    "brand": "micro",
    "shortDesc": "Paddle / 'T' Type — Flow Switches from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Enclosure",
            "Engineering Plastic"
          ],
          [
            "Ingress Protection",
            "IP-55"
          ],
          [
            "Paddle Material",
            "SS 304 supplied in 5 piece packages in size of 1”, 2”, 3” 5” & 6” for Paddles only"
          ],
          [
            "Paddle Link",
            "Brass"
          ],
          [
            "Bellow Material",
            "Phosphorus Bronze"
          ],
          [
            "Base Cover",
            "Mild Steel"
          ],
          [
            "Max. Pressure",
            "10 Bar (150 PSI)"
          ],
          [
            "Operating Temperature",
            "Ambient: 0 … 60'C Process: 0 … 100'C"
          ],
          [
            "Pipe Connection",
            "SS 1/2” BSP (Female) for 'T' Type ABS 1” NPT (Male) for Paddle Standard / SS (Optional)"
          ],
          [
            "Set Point",
            "Adjustable on site. Screw provided under top cover"
          ],
          [
            "Bellow Life",
            "500000 cycles"
          ],
          [
            "Switch action",
            "SPDT snap action"
          ],
          [
            "Electrical rating",
            "250 V AC, 15 (7.5) Amp, 50/60 Hz"
          ],
          [
            "Conduit Entry",
            "22 mm diameter hole for 1/2” conduit"
          ],
          [
            "Flow range & Unit",
            "10 … 628 LPM m3/hr, US GPM units available"
          ],
          [
            "Features",
            "• As a safety device against control device failure • Do not require center adjustment • Save a lot of installation time • No leakage problem • No welding or adaptor required"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/flow-switches/paddle-t-type/1.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/flow-switches/paddle-t-type/1.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/flow-switches/paddle-t-type/2.jpg"
    ]
  },
  {
    "id": "micro-flow-switches-magnetic-piston-dial-type",
    "name": "MICRO Magnetic Piston Dial Type",
    "category": "flow",
    "subCategory": "Flow Switches",
    "brand": "micro",
    "shortDesc": "Magnetic Piston Dial Type — Flow Switches from MICRO (Micro Process Controls).",
    "features": [],
    "applications": [],
    "specTables": [
      {
        "type": "kv",
        "rows": [
          [
            "Housing Material",
            "Aluminium (Standard) / SS 316 (Optional)"
          ],
          [
            "Flow Element",
            "Stainless Steel Compression Spring"
          ],
          [
            "Magnetic Piston",
            "Hard Ferrite"
          ],
          [
            "Static Pressure",
            "200 bar"
          ],
          [
            "Wetted Parts",
            "Aluminium or SS 316, SS 302 spring, Teflon & Ceramic Magnet"
          ],
          [
            "Dial",
            "Aluminium – Pre coated white background black marking over 900 arc"
          ],
          [
            "Pointer",
            "Aluminium-Black finish"
          ],
          [
            "Window",
            "Transparent Acrylic"
          ],
          [
            "Sealing Gasket",
            "Viton & EPDM 'O' Ring"
          ],
          [
            "Process Connection",
            "1/4” NPT (F) (Standard)"
          ],
          [
            "Operating Temperature",
            "Storage: -25'C to +65'C Process: Maximum 80'C (Standard)"
          ],
          [
            "Mounting Style",
            "In-Line"
          ],
          [
            "Flow Range",
            "0 … 30 / 60 / 100 LPM 0 … 30 / 60 LPM for Oil (Viscosity ≤ 68 cst)"
          ],
          [
            "Optional",
            "• Switching Facility (Between 20 to 100% of full span), 15 VA, 0.5 Amp, 230 VAC / 200 VDC or 100 VA, 1 Amp, 230 VAC / 200 VDC"
          ]
        ]
      }
    ],
    "catalogueUrl": null,
    "featured": false,
    "image": "https://www.microprocesscontrols.com/xhtml/images/products/flow-switches/magnetic-piston-dial-type/2.jpg",
    "images": [
      "https://www.microprocesscontrols.com/xhtml/images/products/flow-switches/magnetic-piston-dial-type/2.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/flow-switches/magnetic-piston-dial-type/3.jpg",
      "https://www.microprocesscontrols.com/xhtml/images/products/flow-switches/magnetic-piston-dial-type/1.jpg"
    ]
  }
];

  // Multispan products added above. Why Choose Us — real, backed claims only (no invented certifications/coverage).
  var strengths = [
    {
      icon: "fa-solid fa-certificate",
      heading: "Genuine Instruments",
      text: "Authentic Metrix+ instruments — never grey-market substitutes.",
    },
    {
      icon: "fa-solid fa-tags",
      heading: "Competitive Pricing",
      text: "Industrial products supplied at competitive pricing without compromising on authenticity or quality.",
    },
    {
      icon: "fa-solid fa-truck-fast",
      heading: "Reliable, On-Time Fulfilment",
      text: "Consistent delivery for industrial and commercial customers, including time-bound project supply.",
    },
    {
      icon: "fa-solid fa-headset",
      heading: "Technical Support",
      text: "Responsive, knowledgeable support to help you specify and use the right instrumentation.",
    },
    {
      icon: "fa-solid fa-award",
      heading: "Established Since " + company.since,
      text: "Serving industrial and commercial customers from Kolkata for over a decade and a half.",
    },
    {
      icon: "fa-solid fa-layer-group",
      heading: "Wide Instrument Range",
      text: "85+ Metrix+ instruments spanning electrical, environmental, surveying and NDT applications, all from one supplier.",
    },
  ];

  // Testimonial data is intentionally empty — Apex has not supplied verified
  // customer testimonials. The testimonials section is not rendered until this
  // is populated with real, attributable quotes.
  var testimonials = [];

  var siteData = {
    company: company,
    brand: brand,
    brands: brands,
    nav: nav,
    heroSlides: heroSlides,
    featureBoxes: featureBoxes,
    subcategoryHighlights: subcategoryHighlights,
    productCategories: productCategories,
    products: products,
    strengths: strengths,
    testimonials: testimonials,
  };

  global.SiteData = siteData;
})(window);