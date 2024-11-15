import { FaWhatsapp } from "react-icons/fa";
import { Facebook } from "lucide-react";
import youtube from '../animation/youtube.json'
import google from '../animation/googleAds.json'
import facebook from '../animation/facebookAds.json'
import SEO from '../animation/SEO.json'
import { BsCalendar2Date } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone, MdWorkHistory } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";
import { GiStarsStack } from "react-icons/gi";



export const social = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/dmmizanur05",
        icons: Facebook
    },
    {
        name: "WhatsApp",
        url: "https://wa.me/message/4YHCTPT5AK5XI1",
        icons: FaWhatsapp
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dmmizanur05/",
        icons: CiLinkedin
    }
];

export const navMenu = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "About",
        url: "#about"
    },
    {
        name: "Skills",
        url: "#skill"
    },
    {
        name: "Projects",
        url: "#project"
    },
    {
        name: "Contact",
        url: "#contact"
    },
]

export const workMenu = [
    {
        name: 'Youtube SEO',
        animation: SEO
    },
    {
        name: 'Optimization',
        animation: youtube
    },
    {
        name: 'Meta Ads',
        animation: facebook
    },
    {
        name: 'Google Ads',
        animation: google
    },
]

export const CommitmentData = [
    {
        title: 'Experiences',
        value: '5+ years',
        icon: BsCalendar2Date
    },
    {
        title: 'Clients',
        value: '100+',
        icon: RiTeamLine
    },
    {
        title: 'Projects',
        value: '300+',
        icon: MdWorkHistory
    },
    {
        title: 'Reviews',
        value: '5.0',
        icon: GiStarsStack
    },
]

export const InformationData = {
    name: 'Mizanur Rahman',
    description: 'For the past 5 years I have been working on YouTube video SEO, optimization, keyword research, YouTube channel creation, setup, all social media creation and setup, logo and banner design. I work according to customer needs. I have completed extensive training on Total Digital Marketing from Outsourcing Institute and participated in many practical projects. I can work for a big organization with full responsibility. I am very hardworking. So my work style is different from everyone else.',
    image: 'https://i.ibb.co.com/R39k791/334757777-613210827307396-2182082348209289555-n.jpg',
    jobTitle: 'Social Media Marketer',
    country: 'Bangladesh',
    Logo: 'Freelancer Mizan'
}

export const ProjectData = [
    {
        title: 'Social Media Marketer',
        image: 'https://i.ibb.co.com/NW1fCzp/Screenshot-83.jpg',
        url: '#'
    },
    {
        title: 'Youtube Channel Creation',
        image: 'https://i.ibb.co.com/NW1fCzp/Screenshot-83.jpg',
        url: 'https://mimfashion.xyz/'
    },
]

export const SkillsData = [
    {
        title: 'Youtube SEO',
        value: 98,
    },
    {
        title: 'Channel Optimization',
        value: 97,
    },
    {
        title: 'Google Ads',
        value: 90,
    },
    {
        title: 'Meta Ads',
        value: 90,
    },
]

export const FooterData = {
    description: 'I am Mizanur Rahman, a YouTube video SEO and optimization expert. In the last 5 years I have completed around 300+ projects with great success. I provide tailored solutions with dedication and a unique work style, ensuring client satisfaction.',
    helpLink: [
        {
            title: 'Fiverr',
            url: 'https://www.fiverr.com/mm_mizan?up_rollout=true'
        },
        {
            title: 'Up Work',
            url: 'https://www.upwork.com/freelancers/~01c6ab9301d7e9098a'
        },
    ],
    Services: [
        {
            title: 'Youtube Video SEO',
            url: '#'
        },
        {
            title: 'Youtube channel optimization',
            url: '#'
        },
        {
            title: 'Setup Google Ads',
            url: '#'
        },
        {
            title: 'Setup Meta Ads',
            url: '#'
        },
    ],
    Address: [{
        url: '', icon: AiOutlineMail, title: 'mm.mizanur2020@gmail.com'
    }, { url: '', icon: MdOutlinePhone, title: '+8801891892324' }, { url: '', icon: CiLocationOn, title: 'Sherpur, Mymensingh, Bangladesh' }]

}
