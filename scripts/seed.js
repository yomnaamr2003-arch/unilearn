const BASE_URL = 'https://6aaed711606bd915d11115c8.mockapi.io/courses';

const courses = [
  { title: "Data Structures and Algorithms", code: "CSE 201", instructor: "Dr. Amir Fathy", department: "Computer Science", level: "Undergraduate", credits: 3, duration: "14 weeks", description: "Core data structures, algorithm design, and complexity analysis with hands-on implementation.", enrolled: 78 },
  { title: "Database Systems", code: "CSE 305", instructor: "Dr. Mona Sherif", department: "Computer Science", level: "Undergraduate", credits: 3, duration: "14 weeks", description: "Relational database design, SQL, normalization, and transaction management.", enrolled: 64 },
  { title: "Machine Learning Fundamentals", code: "CSE 410", instructor: "Dr. Karim Aboulnaga", department: "Computer Science", level: "Graduate", credits: 4, duration: "16 weeks", description: "Supervised and unsupervised learning, model evaluation, and practical ML pipelines.", enrolled: 41 },
  { title: "Structural Engineering Principles", code: "ENG 220", instructor: "Dr. Rania Kamal", department: "Engineering", level: "Undergraduate", credits: 3, duration: "14 weeks", description: "Load analysis, material behavior, and design of structural systems.", enrolled: 55 },
  { title: "Thermodynamics II", code: "ENG 330", instructor: "Dr. Tarek Hosny", department: "Engineering", level: "Undergraduate", credits: 3, duration: "14 weeks", description: "Advanced thermodynamic cycles, entropy analysis, and energy systems.", enrolled: 47 },
  { title: "Fluid Mechanics", code: "ENG 250", instructor: "Dr. Nadia El-Sayed", department: "Engineering", level: "Undergraduate", credits: 4, duration: "14 weeks", description: "Fluid statics, dynamics, and applications in engineering systems.", enrolled: 60 },
  { title: "Principles of Marketing", code: "BUS 210", instructor: "Dr. Youssef Adel", department: "Business", level: "Undergraduate", credits: 3, duration: "12 weeks", description: "Market analysis, consumer behavior, branding, and marketing strategy.", enrolled: 92 },
  { title: "Financial Accounting", code: "BUS 150", instructor: "Dr. Salma Ibrahim", department: "Business", level: "Undergraduate", credits: 3, duration: "14 weeks", description: "Fundamentals of financial statements, bookkeeping, and reporting standards.", enrolled: 88 },
  { title: "Business Strategy", code: "BUS 401", instructor: "Dr. Omar Hassan", department: "Business", level: "Graduate", credits: 4, duration: "16 weeks", description: "Competitive analysis, strategic planning, and corporate decision-making.", enrolled: 33 },
  { title: "Web Application Development", code: "CSE 340", instructor: "Dr. Lamia Farouk", department: "Computer Science", level: "Undergraduate", credits: 3, duration: "14 weeks", description: "Full-stack web development covering frontend frameworks and backend APIs.", enrolled: 70 },
  { title: "Operating Systems", code: "CSE 315", instructor: "Dr. Hazem Mostafa", department: "Computer Science", level: "Undergraduate", credits: 4, duration: "14 weeks", description: "Process management, memory allocation, file systems, and concurrency.", enrolled: 58 },
  { title: "Circuit Analysis", code: "ENG 180", instructor: "Dr. Dina Elwan", department: "Engineering", level: "Undergraduate", credits: 3, duration: "12 weeks", description: "Fundamentals of electrical circuits, AC/DC analysis, and network theorems.", enrolled: 66 },
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function seed() {
  console.log('Fetching existing records from:', BASE_URL);

  const listRes = await fetch(BASE_URL);
  if (!listRes.ok) {
    console.error('Could not fetch course list:', listRes.status);
    return;
  }

  const existing = await listRes.json();
  console.log(`Found ${existing.length} existing records.`);
  console.log('First few IDs:', existing.slice(0, 3).map(c => c.id));

  const count = Math.min(courses.length, existing.length);

  for (let i = 0; i < count; i++) {
    const realId = existing[i].id;
    try {
      const res = await fetch(`${BASE_URL}/${realId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(courses[i]),
      });

      if (res.ok) {
        console.log(`Updated course ${realId}: ${courses[i].title}`);
      } else {
        const errorText = await res.text();
        console.error(`Failed to update course ${realId}: ${res.status} — ${errorText}`);
      }
    } catch (err) {
      console.error(`Network error on course ${realId}:`, err.message);
    }

    await delay(500);
  }
}

seed();