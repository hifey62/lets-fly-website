import slide1 from "../assets/images/outreach-1.jpg";
import slide2 from "../assets/images/outreach-2.jpg";
import slide3 from "../assets/images/outreach-3.jpg"


const unsplash = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1920&q=75`;

export const heroSlides = [
  {
    src: slide1,
    label: "Educational Support",
  },
  {
    src: slide2,
    label: "Career & Mentorship",
  },
  {
    src: slide3,
    label: "Global Opportunities",
  },
  {
    src: unsplash("photo-1529156069898-49953e39b3ac"),
    label: "Community Outreach",
  },
];

export const whyImage = unsplash("photo-1503676260728-1c00da094a0b");

// type: "youtube" -> set `id` to the YouTube video ID
// type: "file"    -> set `src` to an imported mp4 and give a `thumb`
export const outreachVideos = [
  {
    title: "Eagle's Guide Outreach",
    tag: "Cross River, Akure & Ondo City",
    type: "youtube",
    id: "aqz-KE-bpKQ", // demo video, replace with the real YouTube ID
    thumb: unsplash("photo-1523050854058-8df90110c9f1"),
  },
  {
    title: "Orphanage Homes Outreach",
    tag: "Ondo City",
    type: "youtube",
    id: "aqz-KE-bpKQ", // demo video, replace
    thumb: unsplash("photo-1529156069898-49953e39b3ac"),
  },
  {
    title: "Health Education Sessions",
    tag: "Rural Ondo State",
    type: "youtube",
    id: "aqz-KE-bpKQ", // demo video, replace
    thumb: unsplash("photo-1522202176988-66273c2fd55f"),
  },
];

export const ctaImage = unsplash("photo-1529156069898-49953e39b3ac");

export const aboutImage = unsplash("photo-1522202176988-66273c2fd55f");

// one per program, in the same order as `programs` in site.js
export const programImages = [
  unsplash("photo-1509062522246-3755977927d7"), // Educational Support
  unsplash("photo-1522202176988-66273c2fd55f"), // Career & Mentorship
  unsplash("photo-1509062522246-3755977927d7"), // Opportunities & Global Exposure
  unsplash("photo-1503676260728-1c00da094a0b"), // Health & Wellbeing
  unsplash("photo-1529156069898-49953e39b3ac"), // Community Outreach
];