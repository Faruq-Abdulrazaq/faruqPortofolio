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
    footerRef?: React.RefObject<HTMLDivElement>;
  };
}

export interface ProjectDataProps {
  service_name: string;
  service_slug: string;
  service_slug_note: string;
  service_title: string;
  service_title_slug: string;
  service_title_note: {
    1: [string, string];
    2: [string, string];
    3: [string, string];
    4: [string, string];
    5: [string, string];
    6: [string, string];
    7?: [string, string];
  };
  service_footer_title: string;
  service_footer_notes: [string, string];
}

export interface ProjectProps {
  data: ProjectDataProps;
}
