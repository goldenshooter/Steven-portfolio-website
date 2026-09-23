import type { HotspotConfig } from '../types/portfolio'

export const aucklandBackground = {
  src: '/images/auckland-main.webp',
  alt: 'Auckland skyline across the harbour with Sky Tower and central city buildings',
  blurDataURL:
    'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoQAAoAA4BaJbACdADpJ0Fu8oAA/utv5usFKf2/MHf9Ce0ibH73SjLr4esIhaiTkeMWH7ha4AA=',
}

export const hotspots: HotspotConfig[] = [
  {
    id: 'career',
    title: 'Career',
    location: 'Sky Tower',
    x: 26.4,
    y: 45.6,
    detailImage: {
      src: '/images/sky-tower-detail.webp',
      alt: 'Close-up view of Sky Tower in Auckland',
      blurDataURL:
        'data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAADwAwCdASoQABgAPu1iqU2ppaOiMAgBMB2JbACdMoAC9YdLA1R435c4AN/hnnTg5lpg3GfXRxDCURbG0iSgdf50782QutdfVse1S0CNNXL6Ur7zl0JOw7OZ5EMaJo94fe+ERoUKa9A5HFgnMfxKq93I3g1GMmw8YBSXfWY6TerELdAA',
    },
    content: {
      summary:
        'Senior Front-End Engineer with 8+ years of experience building scalable, customer-facing web applications using React and TypeScript. You can find my resume by clicking: [Steven Zhang Resume](https://drive.google.com/drive/folders/0B6n2fFw009PyeTdDVVV3OWVHc3M?resourcekey=0-wV7naV1cACQj_2vhoV64rQ&usp=sharing).',
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
      src: '/images/vero-centre-detail.webp',
      alt: 'Close-up view of Vero Centre in Auckland',
      blurDataURL:
        'data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAQCdASoQAAwAA4BaJbACdADcNM8QmgD+lJtSAE0YkWL8J0CqEyH1DIuH2vfF5DMUONpjNXO0RcQlfFKBoCRnXUrKzHg3C5hVcG5YERXAAA==',
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
      src: '/images/pwc-tower-detail.webp',
      alt: 'Close-up view of PWC Tower in Auckland',
      blurDataURL:
        'data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAABwAgCdASoQAAwAA4BaJbACdAEXutnXkwAWEG4AAP2jv+H7vUJe+keoQvdNqDd3+DO4G5qHm2bynxv3G8R1P+MCPVcCz8m+tXqP/ZOssCEAAA==',
    },
    content: {
      summary:
        'When you help someone, you help everyone. I have been involved in various community and volunteer work, including Toastmasters, CITA, and local community initiatives.',
      stackLabel: 'Volunteer Work',
      technologies: [
        'Toastmaster: https://www.facebook.com/photo?fbid=1343258371178520&set=a.459610599543306',
        'CITA: https://www.linkedin.com/feed/update/urn:li:activity:7490641344399470592/',
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
      src: '/images/harbour-edge.webp',
      alt: 'Close-up view of Harbour Edge in Auckland',
      blurDataURL:
        'data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAAAQBACdASoQABcAPu1iqU2ppaQiMAgBMB2JZgCdLwAB0X4eqFjSwLW+IAD+w07PP2SLxfNQkzPzItN8UgIo+KYrjD4D4wIv+Vu42We7WkjXL5AtoZIfQwSkXe2p9IqUSeQy0Ix6lc6vgAAA',
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
