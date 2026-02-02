import { ClipboardList, FolderDown, ListTodoIcon, MessageCircleMore, RefreshCcw, TvMinimalPlayIcon, VideoIcon } from 'lucide-react'
import simon from '../assets/simon.webp'
import benefitImg from '../assets/benefitsImg.jpg'
export const navLinks = ['Home', 'Features', 'Changelog']
export const hero = {
    badge: {
        dot: 'New Update',
        text: "What's New?",
    },
    title: 'A Community Powered by Knowledge and Freedom',
    description: 'Get full, ad-free access to premium courses, deep-dive guides, and practical tutorials. Forge "Forever" subscriptions and choose a simple yearly plan or a Limited Lifetime Deal for Knowledge you can actually use.',
}
export const benefits = [
    {
        title: 'All content. No distractions.',
        description: 'Unlock my premium tutorials, courses, and focused learning built to help you build your skills without the noise.',
        src: benefitImg
    },
    {
        title: 'Real people. Real answers.',
        description: 'Stop searching for help in empty forums. Join a dedicated space for open-source enthusiasts to solve problems, share scripts, and master self-hosting together.', src: benefitImg
    },
    {
        title: 'One price. Full access.',
        description: 'End the cycle of monthly billing. Secure a limited-time Lifetime Deal or monthly/yearly membership and get access to all content, guides, and resources.', src: benefitImg
    },
]

export const about = {
    greeting: 'Hey! Simon Here.',
    introduction: 'I am a cloud infrastructure specialist and the founder of WebNestify.',
    bio: [
        'My career has been dedicated to simplifying complex hosting through automation and high-performance server architecture. While I love building systems, I\'ve realized that providing the tools is only half the journey.',
        'The other half is empowering those who use them.',
        'That’s why I started my YouTube channel: to share what I know, but I\'ve learned that true mastery isn\'t just about watching videos. It\'s about understanding, asking questions, and experimenting.',
        'That\'s why I created the WebNestify Learning Hub.',
        'This isn\'t a "course factory." It\'s a distraction-free, ad-free space to move past the fluff and share real, enterprise-grade knowledge openly.',
        'Whether we\'re optimizing a server or scaling an app, we are growing together in a community built on hands-on experience and transparent workflows.',
        'Let\'s stop just watching and start building.',
    ],
    signature: 'Simon G.', // Placeholder for signature image/text
    imageSrc: simon
}
export const features = {
    title: "Here Is What You'll Find Inside the Hub",
    button: 'Get Access',
    items: [
        {
            icon: ClipboardList,
            title: 'Step-by-step tutorials for hosting, security, hardening, open-source tools, self-hosting, WordPress optimization, and more.',
        },
        {
            icon: VideoIcon,
            title: 'Monthly Live Q&A Sessions where members can ask questions, get help, discuss setups, and learn directly in real time.',
        },
        {
            icon: MessageCircleMore,
            title: 'Community Discussions and Support to share setups and learn from each other solve problems.',
        },
        {
            icon: TvMinimalPlayIcon,
            title: 'Access to premium courses, long-form deep dives, advanced topics, and practical lessons specifically for the Hub.',
        },
        {
            icon: FolderDown,
            title: 'Resource Library and Downloads to growing library of scripts, templates, configs, checklists, and technical resources.',
        },
        {
            icon: RefreshCcw,
            title: 'Frequent Updates for new lessons, new courses, add-ons, and early to keep the Hub evolving with you.',
        },
    ],
}
export const testimonial = {
    quote: 'I was tired of Udemy courses that were 30 hours long but only had 2 hours of real content. Simon\'s approach in the WebNestify Hub is completely different. It\'s zero fluff, highly practical, and actually respects my time. I went from being confused about Docker to deploying my first self-hosted containers in a weekend.',
    author: 'Alex F., Freelance Developer',
    rating: '★★★★★',
}
export const cta = {
    title: 'Get Instant Access to Enterprise-Grade Knowledge without the "course factory" fluff.',
    buttons: ['Purchase Lifetime Access', 'Subscribe & Join'],
}


export const horizontalJourney = {
    title: 'Your Journey Inside WebNestify',
    sections: [
        {
            step: '01',
            title: 'Discover Without the Noise',
            description:
                'No ads. No distractions. Just carefully crafted, real-world tutorials that respect your time and focus on what actually matters.',
            highlight: 'Pure, distraction-free learning',
        },
        {
            step: '02',
            title: 'Learn by Doing',
            description:
                'Follow step-by-step guides, deploy real systems, harden servers, and experiment with open-source tools instead of just watching.',
            highlight: 'Hands-on over hype',
        },
        {
            step: '03',
            title: 'Ask. Break. Fix.',
            description:
                'Join live Q&A sessions and community discussions where real problems are solved openly, not buried in abandoned forums.',
            highlight: 'Real people, real answers',
        },
        {
            step: '04',
            title: 'Build Production-Ready Skills',
            description:
                'Move beyond basics with deep dives into security, performance, automation, and scalable infrastructure used in real environments.',
            highlight: 'Enterprise-grade knowledge',
        },
        {
            step: '05',
            title: 'Reuse What Actually Works',
            description:
                'Download scripts, templates, configs, and checklists you can reuse instantly in your own projects and client work.',
            highlight: 'Tools you can deploy today',
        },
        {
            step: '06',
            title: 'Grow with the Platform',
            description:
                'The Hub evolves continuously with new lessons, updates, and add-ons—so your skills never fall behind.',
            highlight: 'Always moving forward',
        },
        {
            step: '07',
            title: 'Own Your Knowledge',
            description:
                'No endless subscriptions, no locked progress. Choose lifetime or flexible plans and keep access to everything you build upon.',
            highlight: 'Freedom over subscriptions',
        },
    ],
}

export const footer = {
    links: ['Terms & Conditions', 'Privacy Policy'],
    copyright: 'Copyright © 2026 WebNestify Learning Hub',
}
