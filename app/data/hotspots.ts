import type { HotspotConfig } from '../types/portfolio'

export const aucklandBackground = {
  // Replace this file with your final Auckland aerial image, or point this
  // value at a new file you add under public/images.
  src: '/images/auckland-main.jpg',
  alt: 'Auckland skyline across the harbour with Sky Tower and central city buildings',
}

export const hotspots: HotspotConfig[] = [
  {
    id: 'career',
    title: 'Career',
    location: 'Sky Tower',
    x: 26.4,
    y: 45.6,
    detailImage: {
      src: '/images/sky-tower-detail.png',
      alt: 'Close-up view of Sky Tower in Auckland',
    },
    content: {
      summary:
        'Senior Front-End Engineer with 8+ years of experience building scalable, customer-facing web applications using React and TypeScript. You can find my resume here: [Steven Zhang Resume](https://drive.google.com/drive/folders/0B6n2fFw009PyeTdDVVV3OWVHc3M?resourcekey=0-wV7naV1cACQj_2vhoV64rQ&usp=sharing).',
      stackLabel: 'Tech Stack',
      technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Azure', 'GCP'],
    },
  },
  {
    id: 'about',
    title: 'About Me',
    location: 'Vero Centre',
    x: 38.8,
    y: 60.8,
    detailImage: {
      src: '/images/vero-centre-detail.png',
      alt: 'Close-up view of Vero Centre in Auckland',
    },
    content: {
      summary:
        'Senior Front-End Engineer focused on building reliable, customer-facing products with strong usability and performance. I bring 8+ years of experience delivering scalable React and TypeScript applications, collaborating across product, design, and engineering teams, and mentoring developers to raise team capability.',
    },
  },
  {
    id: 'community',
    title: 'Volunteer Work',
    location: 'PWC Tower',
    x: 53.6,
    y: 59.2,
    detailImage: {
      src: '/images/pwc-tower-detail.png',
      alt: 'Close-up view of PWC Tower in Auckland',
    },
    content: {
      summary:
        'When you help someone, you help everyone. I have been involved in various community and volunteer work, including Toastmasters, CITA, church groups, and local community initiatives.',
      stackLabel: 'Volunteer Work',
      technologies: [
        'Toastmaster: https://www.facebook.com/photo?fbid=1343258371178520&set=a.459610599543306',
        'CITA: https://www.linkedin.com/feed/update/urn:li:activity:7490641344399470592/',
        'Church group',
        'Local community',
      ],
    },
  },
  {
    id: 'contact',
    title: 'Contact',
    location: 'Harbour edge',
    x: 33.8,
    y: 76.2,
    detailImage: {
      src: '/images/harbour-edge.png',
      alt: 'Close-up view of Harbour Edge in Auckland',
    },
    content: {
      summary:
        'Open to front-end and full-stack opportunities, technical collaboration, and community initiatives. The best way to reach me is by email, phone or LinkedIn, and I am happy to discuss projects, roles, and ideas.',
      stackLabel: 'Contact Channels',
      technologies: [
        'Email: 626306349steven@gmail.com',
        'Phone: 021 186 2838',
        'LinkedIn: linkedin.com/in/chao-zhang-32855210a',
        'GitHub: github.com/goldenshooter',
      ],
    },
  },
]
