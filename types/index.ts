export interface ImageProps {
  src?: string;
  alt?: string;
}

export interface NavProps {
  scrollToSection?: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  refs?: {
    aboutRef?: React.RefObject<HTMLDivElement>;
    servicesRef?: React.RefObject<HTMLDivElement>;
    projectsRef?: React.RefObject<HTMLDivElement>;
    testimonialsRef?: React.RefObject<HTMLDivElement>;
    blogRef?: React.RefObject<HTMLDivElement>;
  };
}
