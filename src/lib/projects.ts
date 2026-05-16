export interface ProjectImage {
  src: string;
  alt: string;
  type: 'photo' | 'plan' | 'render';
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  year: number;
  category: 'concept' | 'personalizat';
  status: { ro: string; en: string };
  sold: boolean;
  featured?: boolean;
  forSale?: boolean;
  location: string;
  specs: {
    teren?: string;
    casa?: string;
    util?: string;
    regim?: string;
    dormitoare?: string;
  };
  team: string;
  description: {
    ro: string;
    en: string;
  };
  cover: string;
  images: ProjectImage[];
  extras?: string[];
}

export const projects: Project[] = [
  // ===== CONCEPT =====
  {
    slug: 'casa-hh',
    name: 'Casa HH',
    subtitle: 'Spațiu generos, natură în fiecare unghi',
    year: 2026,
    category: 'concept',
    status: { ro: 'Construită · De Vânzare', en: 'Built · For Sale' },
    sold: false,
    featured: true,
    forSale: true,
    location: 'Moara Vlăsiei, Ilfov',
    specs: {
      teren: '1722 m²',
      casa: '475 m²',
      util: '553 m²',
      dormitoare: '5',
      regim: 'P+1',
    },
    team: 'LSD',
    description: {
      ro: 'Casa HH este cel mai ambițios proiect din portofoliul nostru — o rezidență de 475 m² construiți pe un teren generos de 1722 m², în inima Moarii Vlăsiei. Arhitectura contemporană cu linii curate și volume generoase creează un dialog natural între interior și peisajul înconjurător. Cu 5 dormitoare, regim P+1 și o suprafață utilă de 553 m², Casa HH oferă spațiu pentru o familie mare fără a sacrifica intimitatea. Grădina include un studio independent, bucătărie exterioară, fire pit, pistă de alergare, zonă de yoga și fitness, plus un home office separat — totul gândit pentru un mod de viață complet, la doar 20 de minute de centrul Bucureștiului.',
      en: 'Casa HH is the most ambitious project in our portfolio — a 475 sqm residence on a generous 1722 sqm plot in the heart of Moara Vlăsiei. The contemporary architecture with clean lines and generous volumes creates a natural dialogue between interior and surrounding landscape. With 5 bedrooms, P+1 configuration and 553 sqm of usable space, Casa HH provides room for a large family without sacrificing privacy. The garden includes an independent studio, outdoor kitchen, fire pit, running track, yoga & fitness area, plus a separate home office — all designed for a complete lifestyle, just 20 minutes from central Bucharest.',
    },
    cover: '/img/casa-hh_compressed.jpg',
    images: [
      { src: '/img/casa-hh_compressed.jpg', alt: 'Casa HH Exterior', type: 'photo' },
      { src: '/img/hh-parter_compressed.jpg', alt: 'Casa HH Plan Parter', type: 'plan' },
      { src: '/img/hh-etaj_compressed.jpg', alt: 'Casa HH Plan Etaj', type: 'plan' },
    ],
    extras: ['Garden Studio', 'Outdoor Kitchen', 'Fire Pit', 'Running Track', 'Yoga & Fitness', 'Home Office'],
  },
  {
    slug: 'casa-ph',
    name: 'Casa PH',
    subtitle: 'Primul nostru proiect, construit cu suflet',
    year: 2017,
    category: 'concept',
    status: { ro: 'Construită · Vândută', en: 'Built · Sold' },
    sold: true,
    location: 'Moara Vlăsiei, Ilfov',
    specs: {
      teren: '861 m²',
      casa: '350 m²',
      regim: 'P+1',
    },
    team: 'LSD × Metrick Architecture',
    description: {
      ro: 'Casa PH a fost primul proiect Living Spaces Design — o rezidență de 350 m² pe un teren de 861 m² pe Strada Paris din Moara Vlăsiei. Colaborarea cu Metrick Architecture a produs un proiect care combină volumele contemporane cu materiale naturale — lemn, sticlă și beton aparent. Planul în L creează o curte interioară intimă, protejată de vânt, cu vegetație matură și zone de relaxare. La parter, spațiul de living open-plan cu bucătărie și dining se deschide complet către grădină prin pereți de sticlă glisanți. Etajul adăpostește dormitoarele și un studiu privat, fiecare cu ferestre generoase orientate strategic pentru lumina naturală.',
      en: 'Casa PH was the first Living Spaces Design project — a 350 sqm residence on an 861 sqm plot on Strada Paris in Moara Vlăsiei. The collaboration with Metrick Architecture produced a project that combines contemporary volumes with natural materials — wood, glass and exposed concrete. The L-shaped plan creates an intimate internal courtyard, sheltered from wind, with mature vegetation and relaxation areas. On the ground floor, the open-plan living space with kitchen and dining opens fully to the garden through sliding glass walls. The upper floor houses bedrooms and a private study, each with generous windows strategically oriented for natural light.',
    },
    cover: '/img/casa-ph.jpg',
    images: [
      { src: '/img/casa-ph.jpg', alt: 'Casa PH', type: 'photo' },
      { src: '/img/ph/1.jpg', alt: 'Casa PH Exterior', type: 'photo' },
      { src: '/img/ph/2.jpg', alt: 'Casa PH Interior', type: 'photo' },
      { src: '/img/ph/3.jpg', alt: 'Casa PH Living', type: 'photo' },
      { src: '/img/ph/4.jpg', alt: 'Casa PH Detaliu', type: 'photo' },
      { src: '/img/ph/5.jpg', alt: 'Casa PH Grădină', type: 'photo' },
      { src: '/img/ph/6.jpg', alt: 'Casa PH Vedere', type: 'photo' },
      { src: '/img/ph/8.jpg', alt: 'Casa PH Noapte', type: 'photo' },
      { src: '/img/ph/9.jpg', alt: 'Casa PH Terasă', type: 'photo' },
      { src: '/img/ph/10.jpg', alt: 'Casa PH Panoramă', type: 'photo' },
      { src: '/img/ph/11.jpg', alt: 'Casa PH Ansamblu', type: 'photo' },
      { src: '/img/ph/15.jpg', alt: 'Casa PH Peisaj', type: 'photo' },
      { src: '/img/ph/plan-situatie.jpg', alt: 'Casa PH Plan Situație', type: 'plan' },
      { src: '/img/ph/plan-parter.jpg', alt: 'Casa PH Plan Parter', type: 'plan' },
      { src: '/img/ph/plan-etaj.jpg', alt: 'Casa PH Plan Etaj', type: 'plan' },
      { src: '/img/ph/axonometrie.jpg', alt: 'Casa PH Axonometrie', type: 'plan' },
      { src: '/img/ph/fatada-principala.jpg', alt: 'Casa PH Fațadă Principală', type: 'plan' },
      { src: '/img/ph/fatade.jpg', alt: 'Casa PH Fațade', type: 'plan' },
      { src: '/img/ph/fatada-laterala.jpg', alt: 'Casa PH Fațadă Laterală', type: 'plan' },
    ],
  },
  {
    slug: 'casa-ov',
    name: 'Casa OV',
    subtitle: 'Model LSD 1500 — concept disponibil',
    year: 2024,
    category: 'concept',
    status: { ro: 'Concept · Disponibil', en: 'Concept · Available' },
    sold: false,
    forSale: true,
    location: 'Moara Vlăsiei, Ilfov',
    specs: {
      teren: '1500 m²',
      casa: '350 m²',
      regim: 'P',
    },
    team: 'LSD',
    description: {
      ro: 'Casa OV este un concept rezidențial pe lotul Model LSD 1500 — un teren generos de 1500 m² care permite o dezvoltare cu amprentă la sol mare, fără etaj. Proiectul propune o locuință parter de 350 m² cu living expansiv, suite parentală separată și zone de zi deschise către grădină pe toate laturile. Conceptul este disponibil pentru personalizare — cumpărătorul poate adapta finisajele, compartimentarea interioară și amenajarea exterioară conform propriei viziuni, păstrând structura arhitecturală și calitatea materialelor LSD.',
      en: 'Casa OV is a residential concept on the LSD 1500 Model plot — a generous 1500 sqm lot that allows development with a large ground footprint, without an upper floor. The project proposes a 350 sqm ground-floor residence with expansive living areas, a separate master suite, and day zones opening to the garden on all sides. The concept is available for customization — the buyer can adapt finishes, interior layout and exterior design to their own vision, while maintaining the architectural structure and LSD material quality.',
    },
    cover: '/img/ov/casa-ov_compressed.jpg',
    images: [
      { src: '/img/ov/casa-ov_compressed.jpg', alt: 'Casa OV Render', type: 'render' },
      { src: '/img/ov/plan.jpg', alt: 'Model LSD 1500', type: 'plan' },
    ],
  },

  // ===== PERSONALIZATE =====
  {
    slug: 't503',
    name: 'Casa T503',
    subtitle: 'Compact și modern pe 500 m²',
    year: 2024,
    category: 'personalizat',
    status: { ro: 'De Vânzare', en: 'For Sale' },
    sold: false,
    forSale: true,
    location: 'Moara Vlăsiei, Ilfov',
    specs: { teren: '500 m²', casa: '178 m²', regim: 'P' },
    team: 'LSD',
    description: {
      ro: 'Casa T503 este cea mai recentă iterație din seria T — casele compacte LSD pe loturi de 500 m². Cu 178 m² construiți la parter, T503 maximizează fiecare metru pătrat prin compartimentare inteligentă și spații de zi generoase deschise către grădină. Volumul contemporan cu acoperiș plat și ferestre de la podea la tavan creează senzația unui spațiu mult mai mare decât suprafața reală. Proiectul include 3 dormitoare, 2 băi, living cu bucătărie open-plan, terasă acoperită și loc de parcare dublu.',
      en: 'Casa T503 is the latest iteration in the T series — LSD compact houses on 500 sqm plots. With 178 sqm built at ground level, T503 maximizes every square meter through intelligent layouts and generous living spaces opening to the garden. The contemporary volume with flat roof and floor-to-ceiling windows creates a sense of space much larger than the actual area. The project includes 3 bedrooms, 2 bathrooms, open-plan living with kitchen, covered terrace and double parking.',
    },
    cover: '/img/t503/b_compressed.jpg',
    images: [
      { src: '/img/t503/c_compressed.jpg', alt: 'Casa T503 Exterior', type: 'render' },
      { src: '/img/t503/a_compressed.jpg', alt: 'Casa T503 Vedere', type: 'render' },
      { src: '/img/t503/b_compressed.jpg', alt: 'Casa T503 Perspectivă', type: 'render' },
      { src: '/img/t503/d_compressed.jpg', alt: 'Casa T503 Grădină', type: 'render' },
      { src: '/img/t503/e_compressed.jpg', alt: 'Casa T503 Lateral', type: 'render' },
      { src: '/img/t503/f_compressed.jpg', alt: 'Casa T503 Noapte', type: 'render' },
      { src: '/img/t503/plan.jpg', alt: 'Casa T503 Plan', type: 'plan' },
    ],
  },
  {
    slug: 't502',
    name: 'Casa T502',
    subtitle: 'Geometrie pură pe 500 m²',
    year: 2024,
    category: 'personalizat',
    status: { ro: 'Vândută', en: 'Sold' },
    sold: true,
    location: 'Moara Vlăsiei, Ilfov',
    specs: { teren: '500 m²', casa: '136 m²', regim: 'P' },
    team: 'LSD',
    description: {
      ro: 'Casa T502 este a doua casă din seria T — un proiect de 136 m² la parter pe un teren de 500 m². Geometria clară și volumele simple definesc o locuință eficientă, cu spații deschise și lumină naturală abundentă. Living-ul se prelungește natural spre terasa acoperită, blur-ând limita dintre interior și exterior. Compartimentarea inteligentă include 2 dormitoare, baie, dressing și o zonă de zi generoasă. Proiectul a fost vândut și personalizat conform cerințelor proprietarului.',
      en: 'Casa T502 is the second house in the T series — a 136 sqm ground-floor project on a 500 sqm plot. Clear geometry and simple volumes define an efficient home with open spaces and abundant natural light. The living area extends naturally to the covered terrace, blurring the boundary between inside and outside. The intelligent layout includes 2 bedrooms, bathroom, dressing room and a generous living area. The project was sold and customized to the owner\'s requirements.',
    },
    cover: '/img/t502/a_compressed.jpg',
    images: [
      { src: '/img/t502/a_compressed.jpg', alt: 'Casa T502', type: 'render' },
      { src: '/img/t502/b_compressed.jpg', alt: 'Casa T502 Perspectivă', type: 'render' },
      { src: '/img/t502/c_compressed.jpg', alt: 'Casa T502 Lateral', type: 'render' },
      { src: '/img/t502/d_compressed.jpg', alt: 'Casa T502 Grădină', type: 'render' },
      { src: '/img/t502/e_compressed.jpg', alt: 'Casa T502 Noapte', type: 'render' },
      { src: '/img/t501/plan.jpg', alt: 'Plan T501/T502', type: 'plan' },
    ],
  },
  {
    slug: 't501',
    name: 'Casa T501',
    subtitle: 'Primul din seria T',
    year: 2024,
    category: 'personalizat',
    status: { ro: 'De Vânzare', en: 'For Sale' },
    sold: false,
    forSale: true,
    location: 'Moara Vlăsiei, Ilfov',
    specs: { teren: '500 m²', casa: '136 m²', regim: 'P' },
    team: 'LSD',
    description: {
      ro: 'Casa T501 a deschis seria T — colecția LSD de case compacte pe loturi de 500 m², concepute pentru eficiență maximă fără compromisuri de design. Cu 136 m² la parter, T501 oferă un plan deschis cu living, dining și bucătărie integrate, 2 dormitoare confortabile și o baie modernă. Terasa acoperită extinde spațiul de locuit în aer liber, iar grădina privată oferă intimitate completă. Modelul T501 este disponibil pentru personalizare — alegerea finisajelor, materialelor și detaliilor rămâne la latitudinea cumpărătorului.',
      en: 'Casa T501 launched the T series — the LSD collection of compact houses on 500 sqm plots, designed for maximum efficiency without design compromises. With 136 sqm at ground level, T501 offers an open plan with integrated living, dining and kitchen, 2 comfortable bedrooms and a modern bathroom. The covered terrace extends the living space outdoors, while the private garden provides complete privacy. The T501 model is available for customization — finishes, materials and details are chosen by the buyer.',
    },
    cover: '/img/t501/a_compressed.jpg',
    images: [
      { src: '/img/t501/a_compressed.jpg', alt: 'Casa T501', type: 'render' },
      { src: '/img/t501/b_compressed.jpg', alt: 'Casa T501 Perspectivă', type: 'render' },
      { src: '/img/t501/c_compressed.jpg', alt: 'Casa T501 Lateral', type: 'render' },
      { src: '/img/t501/d_compressed.jpg', alt: 'Casa T501 Grădină', type: 'render' },
      { src: '/img/t501/e_compressed.jpg', alt: 'Casa T501 Noapte', type: 'render' },
      { src: '/img/t501/plan.jpg', alt: 'Casa T501 Plan', type: 'plan' },
    ],
  },
  {
    slug: 'casa-615',
    name: 'Casa 615',
    subtitle: 'Eficiență pe 691 m²',
    year: 2023,
    category: 'personalizat',
    status: { ro: 'Vândută', en: 'Sold' },
    sold: true,
    location: 'Moara Vlăsiei, Ilfov',
    specs: { teren: '691 m²', casa: '171 m²', regim: 'P' },
    team: 'LSD',
    description: {
      ro: 'Casa 615 a fost proiectată pe un lot de 691 m² din Moara Vlăsiei, cu o suprafață construită de 171 m² exclusiv la parter. Proiectul a răspuns dorinței proprietarului de a avea o locuință fără scări, compactă dar generoasă, cu accent pe zona de zi. Living-ul dublu, cu tavan înalt și ferestre pe două laturi, devine centrul casei — luminat natural toată ziua. Dormitoarele sunt separate de zona de zi printr-un coridor cu dressinguri integrate, asigurând intimitate completă. Grădina de 520 m² include terasă acoperită, gazon și spații pentru plantări.',
      en: 'Casa 615 was designed on a 691 sqm plot in Moara Vlăsiei, with 171 sqm of built area exclusively at ground level. The project responded to the owner\'s desire for a stairless home, compact yet generous, with emphasis on the living area. The double living room with high ceilings and windows on two sides becomes the center of the house — naturally lit throughout the day. Bedrooms are separated from the living area by a corridor with integrated wardrobes, ensuring complete privacy. The 520 sqm garden includes a covered terrace, lawn and planting areas.',
    },
    cover: '/img/c615/render_compressed.jpg',
    images: [
      { src: '/img/c615/render_compressed.jpg', alt: 'Casa 615 Render', type: 'render' },
      { src: '/img/c615/plan.jpg', alt: 'Casa 615 Plan', type: 'plan' },
    ],
  },
  {
    slug: 'casa-700',
    name: 'Casa 700',
    subtitle: 'Spațiu fără compromis',
    year: 2023,
    category: 'personalizat',
    status: { ro: 'Vândută', en: 'Sold' },
    sold: true,
    location: 'Moara Vlăsiei, Ilfov',
    specs: { teren: '700 m²', casa: '200 m²', regim: 'P' },
    team: 'LSD',
    description: {
      ro: 'Casa 700 s-a născut din refuzul compromisului — pe un teren de 700 m², am construit 200 m² la parter, cu o distribuție care pune funcționalitatea pe primul loc. Zona de zi amplă — living, dining, bucătărie — ocupă jumătate din casă și se deschide integral către grădina de 500 m² prin uși glisante pe toată lățimea. Trei dormitoare, două băi complete și un laundry room separat completează programul. Materialele — beton șlefuit, lemn de stejar și sticlă securizată — au fost alese pentru durabilitate și estetică minimalistă. Grădina include terasă cu pergolă, zonă de grătar și spațiu verde generos.',
      en: 'Casa 700 was born from the refusal to compromise — on a 700 sqm plot, we built 200 sqm at ground level with a layout that puts functionality first. The spacious living area — living room, dining, kitchen — occupies half the house and opens fully to the 500 sqm garden through sliding doors across the entire width. Three bedrooms, two full bathrooms and a separate laundry room complete the program. Materials — polished concrete, oak wood and safety glass — were chosen for durability and minimalist aesthetics. The garden includes a terrace with pergola, barbecue area and generous green space.',
    },
    cover: '/img/c700/render_compressed.jpg',
    images: [
      { src: '/img/c700/render_compressed.jpg', alt: 'Casa 700 Render', type: 'render' },
      { src: '/img/c700/plan.jpg', alt: 'Casa 700 Plan', type: 'plan' },
    ],
  },
  {
    slug: 'casa-870',
    name: 'Casa 870',
    subtitle: 'Cel mai generos lot personalizat',
    year: 2023,
    category: 'personalizat',
    status: { ro: 'Vândută', en: 'Sold' },
    sold: true,
    location: 'Moara Vlăsiei, Ilfov',
    specs: { teren: '870 m²', casa: '260 m²', regim: 'P+1' },
    team: 'LSD',
    description: {
      ro: 'Casa 870 este cel mai generos proiect din portofoliul personalizat — 260 m² construiți în regim P+1 pe un teren de 870 m². A fost prima casă cu etaj din colecția de case personalizate, proiectată pentru o familie cu doi copii care dorea separare clară între zona de zi și dormitoare. La parter: living dublu, bucătărie cu insulă, birou și suite pentru oaspeți. La etaj: suită parentală cu dressing walk-in și baie privată, două dormitoare pentru copii cu baie comună și o terasă acoperită cu vedere către grădina de 610 m². Exteriorul include piscină, terasă de vară și zonă de joacă.',
      en: 'Casa 870 is the most generous project in the custom portfolio — 260 sqm built as P+1 on an 870 sqm plot. It was the first two-story house in the custom collection, designed for a family with two children who wanted clear separation between living and sleeping areas. Ground floor: double living room, island kitchen, office and guest suite. Upper floor: master suite with walk-in closet and private bathroom, two children\'s bedrooms with shared bathroom and a covered terrace overlooking the 610 sqm garden. The exterior includes a pool, summer terrace and play area.',
    },
    cover: '/img/c870/render_compressed.jpg',
    images: [
      { src: '/img/c870/render_compressed.jpg', alt: 'Casa 870 Render', type: 'render' },
      { src: '/img/c870/plan.jpg', alt: 'Casa 870 Plan', type: 'plan' },
    ],
  },
  {
    slug: 'casa-o',
    name: 'Casa O',
    subtitle: 'Construită în jurul familiei',
    year: 2020,
    category: 'personalizat',
    status: { ro: 'Vândută', en: 'Sold' },
    sold: true,
    location: 'Moara Vlăsiei, Ilfov',
    specs: { teren: '361 m²', casa: '200 m²', regim: 'P' },
    team: 'LSD × Metrick Architecture',
    description: {
      ro: 'Casa O a fost un proiect deeply personal — o colaborare între LSD și Metrick Architecture, construită pe un lot compact de 361 m² dar cu o amprentă generoasă de 200 m² la parter. Proiectul s-a construit în jurul modului de viață al familiei: o mamă care lucrează de acasă, doi copii activi și o pasiune comună pentru gătit. Rezultatul: o bucătărie centrală amplă cu insulă, vizibilitate directă către zona de joacă din grădină, un birou home-office cu intrare separată și dormitoare orientate spre est pentru lumina dimineții. Curte interioară tip patio aduce lumina naturală în centrul casei.',
      en: 'Casa O was a deeply personal project — a collaboration between LSD and Metrick Architecture, built on a compact 361 sqm lot but with a generous 200 sqm ground-floor footprint. The project was built around the family\'s lifestyle: a mother working from home, two active children and a shared passion for cooking. The result: a spacious central kitchen with island, direct visibility to the garden play area, a home office with separate entrance and east-facing bedrooms for morning light. An internal patio courtyard brings natural light into the center of the house.',
    },
    cover: '/img/casa-o/1_compressed.jpg',
    images: [
      { src: '/img/casa-o/1_compressed.jpg', alt: 'Casa O', type: 'photo' },
      { src: '/img/casa-o/2.jpg', alt: 'Casa O Interior', type: 'photo' },
      { src: '/img/casa-o/3.jpg', alt: 'Casa O Living', type: 'photo' },
      { src: '/img/casa-o/4.jpg', alt: 'Casa O Bucătărie', type: 'photo' },
      { src: '/img/casa-o/5.jpg', alt: 'Casa O Grădină', type: 'photo' },
      { src: '/img/casa-o/6.jpg', alt: 'Casa O Noapte', type: 'photo' },
      { src: '/img/casa-o/plan.jpg', alt: 'Casa O Plan Parter', type: 'plan' },
    ],
  },
  {
    slug: 'casa-p',
    name: 'Casa P',
    subtitle: 'Puritate formală pe lot compact',
    year: 2020,
    category: 'personalizat',
    status: { ro: 'Vândută', en: 'Sold' },
    sold: true,
    location: 'Moara Vlăsiei, Ilfov',
    specs: { teren: '361 m²', casa: '133 m²', regim: 'P' },
    team: 'LSD × Metrick Architecture',
    description: {
      ro: 'Casa P demonstrează că un lot compact de 361 m² poate găzdui o locuință elegantă de 133 m². Colaborarea cu Metrick Architecture a produs un proiect cu linii pure și volume clare — un statement arhitectural care face din simplitate o virtute. Planul la parter include living cu bucătărie open-plan, două dormitoare, baie și laundry, toate organizate eficient în jurul unui coridor central luminos. Fațadele albe cu accente de lemn și sticlă generează un contrast subtil cu vegetația din jur. Terasa acoperită din spate devine o extensie a livingului în lunile calde, iar grădina de 228 m² oferă suficient spațiu verde pentru relaxare.',
      en: 'Casa P demonstrates that a compact 361 sqm plot can host an elegant 133 sqm residence. The collaboration with Metrick Architecture produced a project with pure lines and clear volumes — an architectural statement that makes simplicity a virtue. The ground floor plan includes open-plan living with kitchen, two bedrooms, bathroom and laundry, all efficiently organized around a bright central corridor. White facades with wood and glass accents create a subtle contrast with surrounding vegetation. The covered back terrace becomes an extension of the living room in warm months, and the 228 sqm garden provides ample green space for relaxation.',
    },
    cover: '/img/casa-p/1.jpg',
    images: [
      { src: '/img/casa-p/1.jpg', alt: 'Casa P', type: 'photo' },
      { src: '/img/casa-p/2_compressed.jpg', alt: 'Casa P Render', type: 'render' },
      { src: '/img/casa-p/3.jpg', alt: 'Casa P Interior', type: 'photo' },
      { src: '/img/casa-p/4.jpg', alt: 'Casa P Living', type: 'photo' },
      { src: '/img/casa-p/5.jpg', alt: 'Casa P Grădină', type: 'photo' },
      { src: '/img/casa-p/6.jpg', alt: 'Casa P Detaliu', type: 'photo' },
      { src: '/img/casa-p/plan.jpg', alt: 'Casa P Plan Parter', type: 'plan' },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getFeaturedProject(): Project {
  return projects.find(p => p.featured) || projects[0];
}

export function getProjectsByCategory(category: 'concept' | 'personalizat'): Project[] {
  return projects.filter(p => p.category === category);
}
