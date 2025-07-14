import { minihero } from "./types";

const miniheroData: { [key: string]: minihero } = {
    'about' : {
        title: 'Who We Are',
        image: '/IMG_0310.png',
        description: 'Discover the heart and history of our community.'
    }, 
    'contact' : {
        title: 'Contact Us',
        image: '/IMG_0309.png',
        description: "We'd love to hear from you! Send us a message, find our location, or connect on social media."
    },
    'events' : {
        title: 'Upcoming events',
        image: '/IMG_0308.png',
        description: 'Connect, grow, and serve with us at our latest church gatherings.'
    },
    'sermons' : {
        title: 'Sermons & Messages',
        image: '/IMG_0308.png',
        description: "Dive deeper into God's Word with our collection of Sunday messages and special teachings. "

    },
    'youth-ministry' : {
        title: 'Youth Ministry: Ignite Your Faith',
        image: '/IMG_0308.png',
        description: 'A vibrant place for middle and high school students to connect, grow in faith, and make a real difference in the world.'
    }
};
export default miniheroData