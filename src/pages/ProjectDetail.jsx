import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  // Project data - you can move this to constants file later
  const projectData = {
    ecommerce: {
      title: "Graphic Design Portfolio",
      description: "A comprehensive collection of graphic design works showcasing creative visual solutions, brand identity designs, and digital artwork across various mediums and styles.",
      images: [
        "/assets/projects/collection_1/tri-front.png",
        "/assets/projects/collection_1/tri-back.png",
        "/assets/projects/collection_1/ZJFuture-intro.png",
        "/assets/projects/collection_1/About-ZJFuture.png"
      ],
      longDescription: [
        "This graphic design portfolio represents a diverse collection of creative works spanning brand identity, digital artwork, and visual communication solutions.",
        "Each project demonstrates a unique approach to visual storytelling, combining traditional design principles with modern digital techniques to create compelling brand experiences.",
        "The portfolio showcases expertise in logo design, brand identity development, marketing materials, and digital content creation for various industries and clients.",
        "Key highlights include innovative use of color theory, typography, and layout design to create memorable visual identities that resonate with target audiences."
      ],
      technologies: ["Photoshop", "Branding", "Media Content Writing", "Illustrator", "Typography", "Color Theory"],
      tags: [
        { name: "Photoshop", path: "/assets/logos/photoshop.svg" },
        { name: "Branding", path: "/assets/logos/branding.svg" },
        { name: "Media Content Writing", path: "/assets/logos/content-writing.svg" }
      ]
    },
    portfolio: {
      title: "Cultural Merchandise Design",
      description: "Creative design solutions for cultural merchandise and lifestyle products, featuring unique branding concepts and innovative product packaging designs.",
      images: [
        "/assets/projects/collection_2/white_tshirt.jpg",
        "/assets/projects/collection_2/black_tshirt.jpg",
        "/assets/projects/collection_2/SMG-sweatshirt.jpg",
        "/assets/projects/collection_2/3th-champions-tshirt.png",
        "/assets/projects/collection_2/backtowork-tshirt.png",
        "/assets/projects/collection_2/triple.png"
      ],
      longDescription: [
        "This cultural merchandise design project showcases innovative approaches to creating meaningful products that connect with diverse audiences and cultural communities.",
        "Each design piece demonstrates careful consideration of cultural symbolism, modern aesthetics, and practical functionality to create merchandise that resonates with target demographics.",
        "The collection features a range of products including t-shirts, sweatshirts, and accessories, each with unique branding that reflects contemporary cultural trends and values.",
        "Key highlights include sustainable design practices, inclusive representation, and creative storytelling through visual elements that celebrate cultural diversity and community identity."
      ],
      technologies: ["Photoshop", "Creative", "Illustrator", "Brand Design", "Product Design", "Cultural Research"],
      tags: [
        { name: "Photoshop", path: "/assets/logos/photoshop.svg" },
        { name: "Creative", path: "/assets/logos/creative.svg" }
      ]
    },
    "task-app": {
      title: "Web Design & Development",
      description: "Modern web design and development projects featuring responsive layouts, interactive user experiences, and cutting-edge web technologies for optimal performance.",
      images: [
        "/assets/projects/collection_3/smg-web-hero.JPG",
        "/assets/projects/collection_3/home.png",
        "/assets/projects/collection_3/shop.png",
        "/assets/projects/collection_3/story.png",
        "/assets/projects/collection_3/news-article.png"
      ],
      longDescription: [
        "This web design and development portfolio showcases modern digital solutions that combine aesthetic excellence with functional performance across various platforms and devices.",
        "Each project demonstrates expertise in responsive design principles, user experience optimization, and implementation of cutting-edge web technologies to create engaging digital experiences.",
        "The portfolio features a diverse range of web projects including e-commerce platforms, corporate websites, and interactive applications, each tailored to meet specific client needs and business objectives.",
        "Key highlights include mobile-first design approaches, performance optimization, accessibility compliance, and seamless integration of modern frameworks and content management systems."
      ],
      technologies: ["React", "TailwindCSS", "TypeScript", "Strapi", "Next.js", "Framer Motion"],
      tags: [
        { name: "React", path: "/assets/logos/react.svg" },
        { name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
        { name: "TypeScript", path: "/assets/logos/typescript.svg" },
        { name: "Strapi", path: "/assets/logos/strapi.svg" }
      ]
    },
    "ui-ux": {
      title: "Auto Marketing Content Engine",
      description: "An intelligent content automation system that crawls trending topics, generates engaging social media posts, and automatically publishes to Xiaohongshu and WeChat platforms.",
      images: [
        "/assets/projects/collection_4/auto-marketing content.JPG"
      ],
      longDescription: [
        "This auto marketing content engine is an intelligent automation system designed to streamline social media content creation and distribution across popular Chinese platforms.",
        "The system utilizes advanced web scraping techniques to monitor trending topics and hot searches in real-time, automatically identifying viral content and trending discussions.",
        "Using natural language processing and AI-powered content generation, the engine creates engaging social media posts that are optimized for each platform's unique audience and format requirements.",
        "Key features include automated scheduling, multi-platform publishing, performance analytics, and intelligent content optimization based on engagement metrics and trending patterns."
      ],
      technologies: ["Web Scraping", "Content Generation", "Social Media API", "Python", "NLP", "Automation"],
      tags: [
        { name: "Web Scraping", path: "/assets/logos/web-scraping.svg" },
        { name: "Content Generation", path: "/assets/logos/content-generation.svg" },
        { name: "Social Media API", path: "/assets/logos/social-media-api.svg" }
      ]
    },
    "digital-marketing": {
      title: "Data Analysis",
      description: "Comprehensive data analysis projects including data cleaning, statistical calculations, and data visualization to extract meaningful insights from complex datasets.",
      images: [
        "/assets/projects/collection_5/cleaning.JPG",
        "/assets/projects/collection_5/calculate.JPG",
        "/assets/projects/collection_5/distributions.JPG",
        "/assets/projects/collection_5/plt.JPG"
      ],
      longDescription: [
        "This data analysis portfolio demonstrates expertise in transforming raw data into actionable insights through systematic data processing, statistical analysis, and compelling visualizations.",
        "Each project showcases a comprehensive approach to data science, from initial data exploration and cleaning to advanced statistical modeling and interactive dashboard creation.",
        "The portfolio includes diverse analytical projects across various industries, utilizing modern data science tools and techniques to solve complex business problems and uncover hidden patterns.",
        "Key highlights include automated data cleaning pipelines, statistical hypothesis testing, predictive modeling, and interactive data visualization dashboards that facilitate data-driven decision making."
      ],
      technologies: ["Data Cleaning", "Calculation", "Visualization", "Python", "Pandas", "Matplotlib", "Seaborn", "Statistics"],
      tags: [
        { name: "Data Cleaning", path: "/assets/logos/data-cleaning.svg" },
        { name: "Calculation", path: "/assets/logos/calculation.svg" },
        { name: "Visualization", path: "/assets/logos/visualization.svg" }
      ]
    },
    "mobile-app": {
      title: "Video Editing",
      description: "Professional video editing projects using CapCut and other advanced editing tools to create engaging visual content with dynamic transitions, effects, and storytelling techniques.",
      images: [
        "/assets/projects/collection_6/screen.JPG"
      ],
      longDescription: [
        "This video editing portfolio showcases professional expertise in creating compelling visual narratives using CapCut and other advanced editing software to produce high-quality video content.",
        "Each project demonstrates mastery of video editing techniques including dynamic transitions, color grading, audio synchronization, and creative storytelling through visual effects and motion graphics.",
        "The portfolio includes diverse video content ranging from promotional videos and social media content to educational materials and entertainment pieces, each tailored to specific audience needs and platform requirements.",
        "Key highlights include seamless timeline editing, advanced color correction, audio enhancement, motion graphics integration, and optimization for various social media platforms and viewing devices."
      ],
      technologies: ["CapCut", "Video Effects", "Storytelling", "Color Grading", "Audio Editing", "Motion Graphics", "Transitions"],
      tags: [
        { name: "CapCut", path: "/assets/logos/capcut.svg" },
        { name: "Video Effects", path: "/assets/logos/video-effects.svg" },
        { name: "Storytelling", path: "/assets/logos/storytelling.svg" }
      ]
    }
  };

  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-aqua hover:text-mint transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <div className="c-space pt-20 pb-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-aqua hover:text-mint transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-neutral-400 mb-8 max-w-3xl">{project.description}</p>
        </motion.div>
      </div>

      {/* Project Images */}
      <div className="c-space mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details */}
      <div className="c-space mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Long Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">About This Project</h2>
            <div className="space-y-4">
              {project.longDescription.map((paragraph, index) => (
                <p key={index} className="text-neutral-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Technologies Used</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {project.technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-aqua rounded-full"></div>
                  <span className="text-white">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full size image"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail; 