export const formOrder = ["volunteer", "mentor", "partner", "support"];

const lead = [
  { name: "name", label: "Full name", type: "text", required: true },
  { name: "email", label: "Email address", type: "email", required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel" },
];

export const forms = {
  volunteer: {
    label: "Volunteer",
    title: "Become a volunteer",
    intro:
      "Share your time, skills or experience to support our programs and the young people we serve.",
    submit: "Send my application",
    fields: [
      ...lead,
      { name: "location", label: "City / State", type: "text", required: true },
      {
        name: "interest",
        label: "Where would you like to help?",
        type: "select",
        required: true,
        options: [
          "Education & tutoring",
          "Health outreach",
          "Media & content",
          "Events & logistics",
          "Tech & design",
          "Anywhere I'm needed",
        ],
      },
      {
        name: "availability",
        label: "Availability",
        type: "select",
        options: ["Weekdays", "Weekends", "Flexible"],
      },
      {
        name: "message",
        label: "Tell us a little about yourself",
        type: "textarea",
        full: true,
        required: true,
      },
    ],
  },

  mentor: {
    label: "Mentor",
    title: "Become a mentor",
    intro:
      "Help a young person navigate academics, career decisions or personal development.",
    submit: "Send my application",
    fields: [
      ...lead,
      { name: "profession", label: "Profession / field", type: "text", required: true },
      {
        name: "experience",
        label: "Years of experience",
        type: "select",
        options: ["1-3 years", "4-7 years", "8-15 years", "15+ years"],
      },
      {
        name: "focus",
        label: "What would you mentor on?",
        type: "select",
        required: true,
        options: [
          "Career guidance",
          "Academics & study skills",
          "Entrepreneurship",
          "Technology",
          "Personal development",
        ],
      },
      {
        name: "availability",
        label: "Availability",
        type: "select",
        options: ["Weekly", "Every two weeks", "Monthly", "One-off sessions"],
      },
      {
        name: "message",
        label: "Anything else we should know?",
        type: "textarea",
        full: true,
      },
    ],
  },

  partner: {
    label: "Partner",
    title: "Partner with us",
    intro:
      "Schools, businesses, organizations and professionals can collaborate with us on projects and community initiatives.",
    submit: "Start the conversation",
    fields: [
      { name: "organization", label: "Organization", type: "text", required: true },
      {
        name: "orgType",
        label: "Organization type",
        type: "select",
        options: ["School", "Business", "NGO / Non-profit", "Government agency", "Individual professional", "Other"],
      },
      { name: "name", label: "Contact person", type: "text", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "phone", label: "Phone / WhatsApp", type: "tel" },
      {
        name: "message",
        label: "How would you like to work together?",
        type: "textarea",
        full: true,
        required: true,
      },
    ],
  },

  support: {
    label: "Support",
    title: "Support a project",
    intro:
      "Your financial or in-kind contribution helps us deliver educational and community interventions.",
    submit: "Send my message",
    fields: [
      ...lead,
      {
        name: "supportType",
        label: "How would you like to support?",
        type: "select",
        required: true,
        options: ["Financial contribution", "In-kind (materials / items)", "Sponsor an outreach", "Not sure yet"],
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        full: true,
      },
    ],
  },
    contact: {
    label: "Contact",
    title: "Send us a message",
    intro: "Questions, ideas or just want to say hello? We'd love to hear from you.",
    submit: "Send message",
    fields: [
      ...lead,
      {
        name: "subject",
        label: "What's it about?",
        type: "select",
        required: true,
        options: [
          "General enquiry",
          "Opportunities for students",
          "Media or press",
          "Something else",
        ],
      },
      {
        name: "message",
        label: "Your message",
        type: "textarea",
        full: true,
        required: true,
      },
    ],
  },
};