import Icon from "@mdi/react";
import {
  mdiTriangle,
  mdiGithub,
  mdiLinkedin,
  mdiGmail,
  mdiOpenInNew,
} from "@mdi/js";
import { Link } from "react-router-dom";
import profile from "@assets/profile.png";
import { items, archiveItems } from "@src/data";
import { useState, useEffect } from "react";
import pdf from "@assets/resume.pdf";
import Loader from "@components/Loader";
import { motion } from "framer-motion";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageList = Array.from(document.querySelectorAll('img')); // Select all images

    const checkImagesLoaded = () => {
      const allLoaded = imageList.every((img) => img.complete);
      if (allLoaded) {
        setImagesLoaded(true);
      }
    };

    checkImagesLoaded();

    imageList.forEach((img) => {
      img.addEventListener('load', checkImagesLoaded);
    });

    return () => {
      imageList.forEach((img) => {
        img.removeEventListener('load', checkImagesLoaded);
      });
    };
  }, []);

  useEffect(() => {
    setTimeout(()=>{
      if (isLoading && imagesLoaded) {
        setIsLoading(false);
      }
    },2000)

  }, [isLoading, imagesLoaded]);

  const homeVariants = {
    initial: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <motion.div variants={homeVariants} initial="initial" animate="animate">
          <HeroSection />
          <LinkSection />
          <ProjectSection />
          <Archive />
          <Footer />
        </motion.div>
      </>
    );
  }
};

const HeroSection = () => {
  return (
    <div className="hero">
      <img src={profile} alt="profile hero" />
      <h1>Aspiring Web Developer</h1>
      <h2>i BUILD WEB APPS FOCUSED ON RESPONSIVENESS AND USER EXPERIENCE</h2>
    </div>
  );
};

const LinkSection = () => {
  return (
    <ul role="list">
      <a href={pdf} target="_blank" className="button-resume">
        <h1>View Resume</h1>
        <Icon path={mdiTriangle} size={1} />
      </a>
      <Link to="https://github.com/MelAlejandrino" target="_blank">
        <Icon path={mdiGithub} size={1.3} color="white" />
      </Link>
      <Link to="https://www.linkedin.com/in/melcarlo/" target="_blank">
        <Icon path={mdiLinkedin} size={1.3} color="white" />
      </Link>
      <Link to="mailto: alejandrino.mel002@gmail.com" target="_blank">
        <Icon path={mdiGmail} size={1.3} color="white" />
      </Link>
    </ul>
  );
};

const ProjectSection = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 770px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 770px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <div className="projects-items">
        {items.map((item) => (
          <div
            className={`projects-items-item ${isMobile ? "mobile" : ""}`}
            key={item.title}
            onClick={() => window.open(item.link, "_blank")}
          >
            {isMobile ? (
              <div
                className="picture"
                style={{
                  backgroundImage: isMobile ? `url(${item.img})` : "none",
                }}
              ></div>
            ) : (
              <picture>
                <img src={item.img} alt={item.title} />
              </picture>
            )}

            <article>
              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>
              <h2>{item.stacks}</h2>
            </article>
            <div className="item-link">
              <Link
                to={item.link}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <Icon path={mdiOpenInNew} size={1.3} color="white" />
              </Link>
              <Link
                to={item.github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <Icon path={mdiGithub} size={1.3} color="white" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Archive = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="archive">
      <button
        className="button-archive"
        onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}
      >
        View Archive
      </button>
      <div
        className={`${
          isClicked ? "container-archive  show" : "container-archive"
        }`}
      >
        {archiveItems.map((item) => (
          <div
            className="archive-item"
            key={item.title}
            onClick={() => window.open(item.github, "_blank")}
          >
            <div>
              <h1>{item.title}</h1>
              <h2>{item.stacks}</h2>
            </div>
            <div>
              <p>{item.subtitle}</p>
            </div>
            <div className="archive-item-link">
              <Link
                to={item.github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <Icon path={mdiGithub} size={1.3} color="white" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>
        Sketched out in <span>Figma</span> and brought to life in{" "}
        <span>Visual Studio Code</span>. Powered by <span>ReactJS</span>, hosted
        on <span>Vercel</span>
      </p>
    </footer>
  );
};
