import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your images
import AccentureImage from '../assets/accenture.png';
import AccentureeImage from '../assets/Accenturee.png';
import JpmorganImage from '../assets/Jp.png';
import PwcImage from '../assets/pwc.png';
import TataImage from '../assets/TATA.png';
import QuantiumImage from '../assets/quantium.png';

export default function Experience() {
  const experiences = [
    {
      role: "Developer and Technology Job Simulation",
      company: "Accenture",
      duration: "Aug 2024",
      description: [
        "Completed Accenture's Developer & Technology Job Simulation, gaining hands-on experience in web development, code debugging, and technical assessments.",
        "Developed and optimized functional applications while following industry best practices in Agile workflows and version control.",
        "Strengthened problem-solving skills through practical coding challenges and real-world debugging scenarios."
      ],
      image: AccentureImage,
      imageAlt: "Accenture Office"
    },
    {
      role: "Development and Advanced Engineering Job Simulation",
      company: "Accenture",
      duration: "Jun 2024",
      description: [
        "Completed Accenture's Advanced Engineering simulation, mastering OOP principles through hands-on coding challenges and system design exercises.",
        "Refactored and optimized legacy codebases, improving maintainability and performance while adhering to SOLID design principles.",
        "Developed scalable solutions using object-oriented patterns, with emphasis on clean architecture and efficient debugging techniques."
      ],
      image: AccentureeImage,
      imageAlt: "Accenture Office"
    },
    {
      role: "Software Engineering",
      company: "JPMorgan & Co",
      duration: "Oct 2024",
      description: [
        "Completed JPMorgan Chase's Software Engineering Simulation, interfacing with real-time stock price data feeds and implementing financial data visualization tools.",
        "Leveraged proprietary frameworks to process market data and optimize trader dashboards.",
        "Developed analytical solutions for financial data representation, gaining hands-on experience in fintech systems and agile development workflows."
      ],
      image: JpmorganImage,
      imageAlt: "JPMorgan Office"
    },
    {
      role: "Power BI",
      company: "PWC",
      duration: "Jul 2024",
      description: [
        "Analyzed key business metrics including call center trends, customer retention, and diversity & inclusion using Power BI.",
        "Transformed raw data into actionable insights through interactive dashboards and visualizations.",
        "Presented data-driven recommendations to optimize operational efficiency and strategic decision-making."
      ],
      image: PwcImage,
      imageAlt: "PWC Office"
    },
    {
      role: "Data Analytics",
      company: "Quantium",
      duration: "Aug 2024",
      description: [
        "Analyzed customer data and prepared insights.",
        "Performed A/B testing and impact measurement.",
        "Applied analytics to business solutions."
      ],
      image: QuantiumImage,
      imageAlt: "Quantium Office"
    },
    {
      role: "Data Visualization Simulation",
      company: "TATA",
      duration: "Sep 2024",
      description: [
        "Translated business data into actionable insights through strategic visualization.",
        "Designed and optimized dashboards to communicate complex analysis effectively.",
        "Delivered data-driven recommendations tailored to business scenarios."
      ],
      image: TataImage,
      imageAlt: "TATA Office"
    }
  ];

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="experience" className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          My <span className="text-primary dark:text-secondary">Experience</span>
        </motion.h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={15}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 15
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 15
              },
              1024: {
                slidesPerView: 2.1,
                spaceBetween: 15
              }
            }}
            className="!pb-10"
          >
            {experiences.map((exp, index) => (
              <SwiperSlide key={index} className="h-auto">
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden h-full flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  {/* Image Section with enhanced animations */}
                  <motion.div 
                    className="relative h-48 w-full overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    variants={imageVariants}
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  >
                    <img 
                      src={exp.image} 
                      alt={exp.imageAlt}
                      className="w-full h-full object-contain p-2"  // Changed to object-contain for full visibility
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Content Section */}
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <FiBriefcase className="text-primary dark:text-secondary text-sm" />
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        {exp.role} @ {exp.company}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 mb-3 text-gray-600 dark:text-gray-300 text-xs">
                      <FiCalendar className="flex-shrink-0" />
                      <span>{exp.duration}</span>
                    </div>

                    <ul className="mb-3 space-y-1 text-gray-700 dark:text-gray-300 text-xs flex-1">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start gap-1"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <span className="text-primary dark:text-secondary mt-1">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
