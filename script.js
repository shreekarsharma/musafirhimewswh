// --- Mobile menu ---
function toggleMenu() {
  const nav = document.getElementById("nav");
  const btn = document.querySelector(".mobile-toggle");
  const expanded = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open");
}
function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// --- Data (replace with your real content or fetch from CMS) ---
const destinations = [
  {
    name: "Bali, Indonesia",
    img: "https://images.unsplash.com/photo-1506343760170-4e404ee25c06?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Maldives",
    img: "https://images.unsplash.com/photo-1501117716987-c8e0bdde6651?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Paris, France",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Kashmir, India",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Goa, India",
    img: "https://images.unsplash.com/photo-1599058945522-28d584b1f6b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Swiss Alps",
    img: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1200&auto=format&fit=crop",
  },
];

const packages = [
  {
    id: "bali-6n",
    title: "Bali Bliss (6N7D)",
    place: "Bali",
    days: 7,
    price: 59999,
    currency: "INR",
    budget: "40-80k",
    duration: "5-7",
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
    inc: ["4★ Hotels", "Breakfast", "Private Transfers", "Nusa Penida Tour"],
    desc: "Romantic villas + waterfalls + island day trip. Perfect for couples.",
  },
  {
    id: "maldives-4n",
    title: "Maldives Escape (4N5D)",
    place: "Maldives",
    days: 5,
    price: 109999,
    currency: "INR",
    budget: "80k+",
    duration: "3-4",
    img: "https://images.unsplash.com/photo-1503197979108-c824168d51a8?q=80&w=1200&auto=format&fit=crop",
    inc: ["OW Villa Option", "Half Board", "Speedboat Transfer"],
    desc: "Turquoise lagoons and lazy luxury. Honeymooner favorite.",
  },
  {
    id: "kashmir-5n",
    title: "Kashmir Spring (5N6D)",
    place: "Kashmir",
    days: 6,
    price: 34999,
    currency: "INR",
    budget: "under-40k",
    duration: "5-7",
    img: "https://images.unsplash.com/photo-1604933762160-96fa2a6cc4f5?q=80&w=1200&auto=format&fit=crop",
    inc: ["Houseboat", "Breakfast & Dinner", "Gulmarg & Pahalgam Tours"],
    desc: "Valley blooms, shikara rides, and snow-capped serenity.",
  },
  {
    id: "paris-7n",
    title: "Paris & Beyond (7N8D)",
    place: "Paris",
    days: 8,
    price: 129999,
    currency: "INR",
    budget: "80k+",
    duration: "8-12",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",
    inc: ["City Pass", "Louvre Entry", "Seine Cruise"],
    desc: "Classic Europe starter with art, cafes, and countryside jaunts.",
  },
  {
    id: "goa-3n",
    title: "Goa Weekend (3N4D)",
    place: "Goa",
    days: 4,
    price: 14999,
    currency: "INR",
    budget: "under-40k",
    duration: "3-4",
    img: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1200&auto=format&fit=crop",
    inc: ["3★ Resort", "Breakfast", "Airport Transfers"],
    desc: "Beachy breather with flea markets, forts, and seafood trails.",
  },
  {
    id: "alps-6n",
    title: "Swiss Alps Trails (6N7D)",
    place: "Swiss Alps",
    days: 7,
    price: 159999,
    currency: "INR",
    budget: "80k+",
    duration: "5-7",
    img: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1200&auto=format&fit=crop",
    inc: ["Swiss Pass", "Mountain Excursions", "Breakfast"],
    desc: "Postcard vistas, lakes, and trains that run like clockwork.",
  },
];

const galleryImgs = [
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500534314210-9b6d0f9e1e0b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503197979108-c824168d51a8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604933762160-96fa2a6cc4f5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
];

// --- Render Destinations ---
const destGrid = document.getElementById("destGrid");
destinations.forEach((d) => {
  const card = document.createElement("article");
  card.className = "card item";
  card.innerHTML = `<img src="${d.img}" alt="${d.name}"><span class="label">${d.name}</span>`;
  destGrid.appendChild(card);
});

// --- Render Packages (with filtering by quick search) ---
const pkgGrid = document.getElementById("pkgGrid");
function renderPackages(filter = {}) {
  pkgGrid.innerHTML = "";
  const list = packages.filter((p) => {
    const q = (filter.q || "").toLowerCase();
    const okQ =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.place.toLowerCase().includes(q);
    const okDur = !filter.duration || p.duration === filter.duration;
    const okBudget = !filter.budget || p.budget === filter.budget;
    return okQ && okDur && okBudget;
  });
  list.forEach((p) => {
    const el = document.createElement("article");
    el.className = "card pkg";
    el.innerHTML = `
          <div class="media"><img src="${p.img}" alt="${p.title}"></div>
          <div class="body">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
              <h3 style="margin:0">${p.title}</h3>
              <span class="badge">${p.days} days</span>
            </div>
            <p class="lead">${p.desc}</p>
            <div class="inc">${p.inc
              .map((i) => `<span class='chip'>${i}</span>`)
              .join("")}</div>
            <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:6px">
              <span class="price">₹${p.price.toLocaleString("en-IN")}</span>
              <a class="btn" href="#contact" onclick="prefill('${p.title}','${
      p.place
    }')">Enquire</a>
            </div>
          </div>`;
    pkgGrid.appendChild(el);
  });
  if (!list.length) {
    pkgGrid.innerHTML = `<div class="card" style="padding:20px"><p>No packages found. Try clearing filters.</p></div>`;
  }
}

renderPackages();

// Search form interactions
document.querySelector(".search").addEventListener("submit", () => {
  const filter = {
    q: document.getElementById("q").value,
    duration: document.getElementById("days").value,
    budget: document.getElementById("budget").value,
  };
  renderPackages(filter);
});

// --- Gallery ---
const galleryGrid = document.getElementById("galleryGrid");
galleryImgs.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Trip photo ${i + 1}`;
  galleryGrid.appendChild(img);
});

// --- Testimonials slider ---
let slideIndex = 0;
const slides = () => Array.from(document.querySelectorAll(".slide"));
function showSlide(i) {
  const s = slides();
  s.forEach((el, idx) => el.classList.toggle("active", idx === i));
}
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides().length;
  showSlide(slideIndex);
}
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides().length) % slides().length;
  showSlide(slideIndex);
}
setInterval(nextSlide, 6000);

// --- Contact form (demo-only) ---
function prefill(title, place) {
  document.getElementById("destination").value = place;
  document.getElementById("notes").value = `Interested in: ${title}`;
  scrollToId("contact");
}
function submitForm(e) {
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    email: document.getElementById("email").value.trim(),
    people: document.getElementById("people").value,
    from: document.getElementById("from").value.trim(),
    destination: document.getElementById("destination").value.trim(),
    dates: document.getElementById("dates").value.trim(),
    notes: document.getElementById("notes").value.trim(),
  };
  // Integrate with Formspree/EmailJS or your API here.
  // Example (Formspree): fetch('https://formspree.io/f/yourid', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)})
  document.getElementById("formStatus").textContent =
    "Thanks! We'll get back within a few hours.";
  // Optional: open WhatsApp with prefilled message
  const msg = encodeURIComponent(
    `Trip Enquiry\nName: ${data.name}\nPhone: ${data.phone}\nFrom: ${data.from}\nDestination: ${data.destination}\nDates: ${data.dates}\nPeople: ${data.people}\nNotes: ${data.notes}`
  );
  // window.open(`https://wa.me/910000000000?text=${msg}`,'_blank');
  e.target.reset();
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
