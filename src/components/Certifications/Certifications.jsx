import './Certifications.css';

import js from '../../assets/jsIcon.png';
import cpp from '../../assets/cppIcon.png';
import css from '../../assets/cssIcon.png';

import google from '../../assets/google.png';
import amazon from '../../assets/amazon.png';
import oracle from '../../assets/oracle.png';

import gfg from '../../assets/gfg.png';
import coursera from '../../assets/coursera.png';
import nptel from '../../assets/nptel.png';

import CertificationsCard from './CertificationsCard/CertificationsCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const container_y = (d) => ({
    hidden: { x: -400, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: d,
            duration: 0.3
        }
    }
});

const container_x = (d) => ({
    hidden: { x: -400, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: d,
            duration: 0.5
        }
    }
});

function Certifications() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const statements1 = [
        "Completed a 16-week self-paced course on Data Structures and Algorithms from GeeksforGeeks during my summer internship.",
        "Gained proficiency in algorithm design and problem-solving techniques through various practical assignments.",
        "The course focused on complex data structures like trees, graphs, and algorithms such as dynamic programming and greedy algorithms.",
        "Applied the knowledge to solve real-world coding challenges and improve problem-solving speed and efficiency."
    ];
    
    const statements2 = [
        "Earned a certificate in Cloud Computing from NPTEL with a consolidated score of 60%.",
        "The course covered fundamental cloud computing concepts, cloud architecture, and the use of platforms like AWS and Azure.",
        "Gained hands-on experience with cloud deployment, storage, and virtual machines, which are essential for modern web applications.",
        "This certification provided an understanding of cloud service models like SaaS, PaaS, and IaaS, with practical applications."
    ];
    
    const statements3 = [
        "Completed the 'ChatGPT for Beginners: Save Time with Microsoft Excel' course on Coursera.",
        "Learned how to leverage ChatGPT and Microsoft Excel for automating tasks and enhancing productivity in data management.",
        "Explored various Excel functionalities, from formulas to automation tools, and how ChatGPT can assist with data analysis and visualization.",
        "Developed a deeper understanding of integrating AI with everyday tools to optimize work processes and workflows."
    ];
    

    const iconImages = [js, cpp, css];

    return (
        <div id='certifications' className="certifications_container">
            <motion.p
                ref={ref}
                variants={container_x(0.2)}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                className="certifications_title"
            >
                Certifications
            </motion.p>
            <div className="certifications_cards_container">
                <CertificationsCard
                    companyLogo={gfg}
                    companyName="GeeksForGeeks"
                    designation='DSA Self-Paced'
                    statements={statements1}
                    // iconImages={iconImages}
                    delay={0.8}
                />
                <CertificationsCard
                    companyLogo={nptel}
                    companyName="NPTEL"
                    designation='Cloud Computing'
                    statements={statements2}
                    // iconImages={iconImages}
                    delay={0.6}
                />
                <CertificationsCard
                    companyLogo={coursera}
                    companyName="Coursera"
                    designation='ChatGPT for Beginners'
                    statements={statements3}
                    // iconImages={iconImages}
                    delay={0.4}
                />
            </div>
        </div>
    );
}

export default Certifications;
