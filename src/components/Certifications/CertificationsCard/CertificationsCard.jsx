import './CertificationsCard.css';
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

function CertificationsCard({ companyLogo, companyName, designation, statements, iconImages, delay }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            variants={container_y(delay)}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className="ct_card_container"
        >
            <div className='ct_card_logo_container'>
                <img src={companyLogo} alt="company logo" className="ct_card_logo" />
            </div>

            <p className="ct_card_title">{companyName}</p>

            <p className="ct_card_subtitle">Title : <span className='ct_card_desig'> {designation} </span></p>

            <div className="ct_card_sentences">
                {
                    statements.map((item, index) => (
                        <p key={item} className="ct_card_sentence">
                            {item}
                        </p>
                    ))
                }
            </div>

            {/* <p className='ct_card_tech_used_title'>Technologies Used:</p>

            <div className="ct_card_icon_images_container">
                {
                    iconImages.map((icon, index) => (
                        <img key={icon} src={icon} alt="icon" className="ct_card_icon_image" />
                    ))
                }
            </div> */}
        </motion.div>
    );
}

export default CertificationsCard;
