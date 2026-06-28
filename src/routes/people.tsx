import { useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem, RevealWords } from "../components/Reveal";
import { Linkedin, GraduationCap, Book, Library, FileText, Globe, Mail, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "People — SPARKS Lab" },
      {
        name: "description",
        content:
          "Faculty, researchers, scholars and students of SPARKS Lab at NIT Tiruchirappalli.",
      },
      { property: "og:title", content: "People · SPARKS Lab" },
      // { property: "og:description", content: "Meet the researchers building the future of AI at SPARKS Lab." },
    ],
  }),
  component: PeoplePage,
});

type Person = {
  name: string;
  role: string;
  interests: ReactNode | string;
  initials: string;
  photo?: string;
  email?: string;
  personalEmail?: string;
  phone?: string;
  scholar?: string;
  linkedin?: string;
  dblp?: string;
  academia?: string;
  researchGate?: string;
  scopus?: string;
  details?: ReactNode;
};

type Variant = "large" | "medium" | "compact";

function cleanName(name: string) {
  return name.replace(/\s+/g, " ").trim();
}

const faculty: Person[] = [
  {
    name: "Dr. C. Oswald ",
    role: "Faculty Coordinator",
    interests: (
      <ul className="list-disc pl-5 space-y-1 marker:text-accent">
        <li>Machine Learning, Deep Learning, Data Mining</li>
        <li>Natural Language Processing</li>
        <li>Social Media Analytics, Computational Science for Social Good</li>
        <li>Ontology and Knowledge Graphs, Question-Answering (English and Indian Languages)</li>
        <li>Human Computer Interaction</li>
        <li>Text/Image Compression, Graph Compression</li>
      </ul>
    ),

    initials: "AA",
    photo: "images/faculty/oswald_sir.jpg",
    email: "oswald@nitt.edu",
    personalEmail: "oswald.mecse@gmail.com",
    phone: "0431-250-3223",
    scholar: "https://scholar.google.com/citations?user=6kX5pyoAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/oswald-c-bb5b37b7/",
    dblp: "https://dblp.uni-trier.de/pid/173/6662.html",
    academia: "https://vit-in.academia.edu/OswaldChristopher",
    researchGate: "https://www.researchgate.net/scientific-contributions/2111321378-C-Oswald",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=56419629800",
    details: (
      <div className="space-y-6 text-sm sm:text-base text-ink/90">
        <div className="space-y-2">
          <h4 className="font-semibold text-lg text-ink flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent inline-block"></span> Postdoctoral Fellowship
          </h4>
          <p className="leading-relaxed pl-3.5">
            In my Postdoctoral fellowship, I am blessed to be mentored by <a href="https://www.cse.iitk.ac.in/users/arnabb/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Prof. Arnab Bhattacharya</a>, Professor, Dept. of Computer Science and Engineering, IIT Kanpur from Feb 2021 - July 2022. It has been a turning point in my research career. I have been inspired to work in the field of Natural Language Processing with a passion towards Indic Languages which I continue still.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-lg text-ink flex items-start lg:items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent inline-block mt-2 lg:mt-0 shrink-0"></span>
            <div>Ph.D. in Computer Science and Engineering <span className="text-sm font-normal text-ink-soft whitespace-nowrap lg:ml-2 block lg:inline">[July 2013 - Nov 2018]</span></div>
          </h4>
          <div className="pl-3.5 space-y-1.5">
            <p className="leading-relaxed">
              <a href="http://iiitdm.ac.in/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Indian Institute of Information Technology, Design and Manufacturing Kancheepuram</a><br />
              <span className="text-sm text-ink-soft">(An Institution of National Importance, MHRD, Govt. of India)</span>
            </p>
            <p className="leading-relaxed"><strong>Dissertation Topic:</strong> Efficient Algorithms for text and image compression based on Knowledge Engineering</p>
            <p className="leading-relaxed">
              I am fortunate enough to be supervised by <a href="https://www.iiitdm.ac.in/people/faculty/sivaselvanb@iiitdm.ac.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Dr. B. Sivaselvan</a>, Associate Professor, Department of CSE, IIITDM Kancheepuram. From him, I have been blessed to learn an amalgamation of moral values, ethics, didactic, along with research. My Doctoral Committee members were <a href="https://cse.iitm.ac.in/innerfaculty.php?fname=Narayanaswamy+N+S" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Prof. NS Narayanaswamy</a>, <a href="https://www.iiitdm.ac.in/people/faculty/sadagopan@iiitdm.ac.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Dr. N. Sadagopan</a> and <a href="https://www.iiitdm.ac.in/people/faculty/shalu@iiitdm.ac.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Dr. M A Shalu</a> who have upholded and showed me the paths in various tough situations of my Ph.D. tenure. Many thanks to my thesis examiners, <a href="https://raj.cse.uconn.edu/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Prof. Sanguthevar Rajasekaran</a> and <a href="https://wsai.iitm.ac.in/~ravi/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Prof. Balaraman Ravindran</a> for their valuable advices.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-lg text-ink flex items-start lg:items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent inline-block mt-2 lg:mt-0 shrink-0"></span>
            <div>M.Tech. in Software Engineering (Rank Holder) <span className="text-sm font-normal text-ink-soft whitespace-nowrap lg:ml-2 block lg:inline">[July 2011 - May 2013]</span></div>
          </h4>
          <div className="pl-3.5 space-y-1.5">
            <p className="leading-relaxed">Karunya University, Coimbatore.</p>
            <p className="leading-relaxed"><strong>Dissertation Topic:</strong> Hybrid Particle Swarm Optimization for University Course Timetabling Problem</p>
            <p className="leading-relaxed"><strong>Advisor:</strong> <a href="https://scholar.google.com/citations?user=TGR206kAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Dr. C Anand Devadurai</a></p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-lg text-ink flex items-start lg:items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent inline-block mt-2 lg:mt-0 shrink-0"></span>
            <div>B.E. in Computer Science and Engineering <span className="text-sm font-normal text-ink-soft whitespace-nowrap lg:ml-2 block lg:inline">[June 2005 – May 2009]</span></div>
          </h4>
          <p className="leading-relaxed pl-3.5">Sona College of Technology (Anna University, Chennai)<br /><span className="text-sm text-ink-soft">(Best Co-curricular Student Awardee)</span></p>
        </div>
      </div>
    )
  },
];
const scholars: Person[] = [
  { name: "Abhijith  Balan", role: "Ph.D · Full-Time", interests: "·NLP \n·Named Entity Recognition\n ·Computational Linguistics \n ·Information Retrieval/Extraction", initials: "MI", photo: "images/Scholars/Abhijith_Balan.jpeg",linkedin:"https://www.linkedin.com/in/abhijith-balan-973259222/" },
  { name: "Anju  K  B", role: "Ph.D  · QIP Scheme ", interests: " ·NLP\n ·Brain Computer Interface", initials: "RS", photo: "images/Scholars/AnjuKB.jpg",linkedin:"a" },
  { name: "Sambasiva  Rao  Chindam", role: "Ph.D · Part-Time", interests: "·NLP \n· Speech Processing", initials: "SP", photo: "images/Scholars/sambasivarao.JPG",linkedin:"a" },
];
const PGstudents: Person[] = [
  { name: "Yash Gogoria", role: "M.Tech · CSE (2024)", interests: "·Coloring Sketches using Conditional GAN    ·Landscape Painting Generation using Generative AI Models", initials: "YG", photo: "",linkedin:"a" },
  { name: "Sachin Kumar Gupt", role: "M.Tech · CSE (2024)", interests: "·Deep Learning Approaches for Covid Chest X-Ray Image Classification \n · Generative AI Model based Hindi Text to Realistic Image Generation ", initials: "SKG", photo: "",linkedin:"a" },
  { name: "Abhisek Raj", role: "M.Tech · CSE (2025)", interests: "·Predicting Suicidal Ideation Risks and Empathetic Text Generation Using LLM \n· Predicting Suicidal Ideation Risks using LLM and Transfer Learning", initials: "AR", photo: "images/PG/Abhishek_Raj.jpg",linkedin:"a" },
  { name: "Rakesh Kumar Rakesh", role: "M.Tech · CSE (2026)", interests: "·Knowledge graph Embedding Based Biomedical Named Entity Recognition", initials: "RKR", photo: "images/PG/Rakesh Kumar Rakesh .jpeg",linkedin:"a" },
  { name: "Anurag Kadam", role: "M.Tech · CSE (2027)", interests: "", initials: "RKR", photo: "",linkedin:"a" },

];

const UGstudents: Person[] = [
  { name: "Aditya G", role: "B.Tech (2026)", interests: "", initials: "A", photo: "",linkedin:"a" },
  { name: "Vijay G", role: "B.Tech (2026)", interests: "", initials: "A", photo: "",linkedin:"a" },
  { name: "Aadit Krishna R", role: "B.Tech (2026)", interests: "", initials: "A", photo: "",linkedin:"a" },

  { name: "Srikanth V", role: "B.Tech (2025)", interests: "Enhancing Verizon Computer Support Using Dialogflow and Interaction Analytics", initials: "SV", photo: "",linkedin:"a" },
  { name: "Amarjit", role: "B.Tech (2024)", interests: "Knowledge Graph based Templatized Question Answering tool for School Level Tamil Grammar", initials: "A", photo: "",linkedin:"a" },
  { name: "Dharanish Rahul S", role: "B.Tech (2024)", interests: "Knowledge Graph based Templatized Question Answering tool for School Level Tamil Grammar", initials: "DRS", photo: "images/UG/Dharanish Rahul S.jpeg",linkedin:"a" },
  { name: "Mithilesh K", role: "B.Tech (2024)", interests: "Knowledge Graph based Templatized Question Answering tool for School Level Tamil Grammar", initials: "MK", photo: "images/UG/Mithilesh K.jpg",linkedin:"a" },
  { name: "Joshua Mahadevan", role: "B.Tech (2024)", interests: "Offensive Text Detection in Code-mixed Dravidian Languages towards Marginalised Groups and Women", initials: "JM", photo: "",linkedin:"a" },
  { name: "Lokkamithran", role: "B.Tech (2024)", interests: "Offensive Text Detection in Code-mixed Dravidian Languages towards Marginalised Groups and Women", initials: "LK", photo: "",linkedin:"a" },
  { name: "Mubeena", role: "B.Tech (2024)", interests: "Offensive Text Detection in Code-mixed Dravidian Languages towards Marginalised Groups and Women", initials: "MB", photo: "images/UG/Mubeena.jpg",linkedin:"a" },
];

const interns: Person[] = [
  { name: "Aditi Baskaran", role: "2026", interests: "Lightweight SLM-Based Academic Evaluation Assistant", initials: "IO", photo: "images/Interns/2026/Aditi Baskaran.jpeg",linkedin:"https://www.linkedin.com/in/aditi-baskaran/" },
  { name: "Nooh K ", role: "2026", interests: "Lightweight SLM-Based Academic Evaluation Assistant", initials: "IO", photo: "images/Interns/2026/Nooh_K.png",linkedin:"https://www.linkedin.com/in/nooh-k-71a8a4292/" },
  { name: "Adarsh SPL", role: "2026", interests: "Lightweight SLM-Based Academic Evaluation Assistant", initials: "IO", photo: "images/Interns/2026/Adarsh.jpeg",linkedin:"a" },
  { name: "K. Preetham Reddy", role: "2026", interests: "Lightweight SLM-Based Academic Evaluation Assistant", initials: "IO", photo: "images/Interns/2026/PreethamReddy.jpg",linkedin:"https://www.linkedin.com/in/katreddy-preetham-reddy" },
  { name: "Surya Narayan Ghosh", role: "2026", interests: "Hypergraph Guided Structural Fusion for Nested Biomedical NER", initials: "IO", photo: "images/Interns/2026/SNghosh.jpg",linkedin:"https://www.linkedin.com/in/ghosh-surya-22679b285/" },
  { name: "Golla Madhu Kiran", role: "2026", interests: "Boundary-Aware Parameter-Efficient Tuning for Nested Biomedical Named Entity Recognition", initials: "IO", photo: "images/Interns/2026/MadhuKiranGolla.jpeg",linkedin:"https://www.linkedin.com/in/golla-madhu-kiran-6b5a1b322/" },
  { name: "Madhu Parameswari Ganesan", role: "2026", interests: "Lightweight SLM-Based Academic Evaluation Assistant", initials: "IO", photo: "images/Interns/2026/Madhu Parameswari Ganesan.png",linkedin:"https://www.linkedin.com/in/madhu-parameswari-ganesan/" },
  { name: "Harsha Dhayini R", role: "2026", interests: "Transforming Tamil Ayurvedic Text to Knowledge Graph", initials: "IO", photo: "images/Interns/2026/Harsha.png",linkedin:"a" },



  { name: "Kabilan G", role: "2025", interests: "Enhancements in Nested NER", initials: "IO", photo: "",linkedin:"a" },
  { name: "Aranganathan S ", role: "2025", interests: "Nested NER in Tamil", initials: "IO", photo: "images/Interns/2025/Aranganathan S _NIT Surathkal.jpeg",linkedin:"a" },
  { name: "Rohan Jose", role: "2025", interests: "Offensive and Hate Speech Detection of Malayalam  using Deep Learning Techniques", initials: "IO", photo: "images/Interns/2025/Rohan_Jose.jpg",linkedin:"a" },
  { name: "Hrishikesh Mhaiskar", role: "2025", interests: "Thought Recognition from EEG Signals for Indic Languages.", initials: "IO", photo: "",linkedin:"a" },
  { name: "Sudhanshu Kumar", role: "2025", interests: "Automated Identification of Mind Wandering States from EEG Signals", initials: "IO", photo: "images/Interns/2025/Sudhanshu_Kumar.jpg",linkedin:"a" },
  { name: "Raushan Kumar ", role: "2025", interests: "Automated Identification of Mind Wandering States from EEG Signals", initials: "IO", photo: "",linkedin:"a" },
  { name: "Swetha N", role: "2025", interests: "An Audio Dataset for code mixed Tamil English Hate and offensive speech detection", initials: "IO", photo: "",linkedin:"a" },
  { name: "Sudharsan M ", role: "2025", interests: "KG Creation in Tamil Ayurvedic Text", initials: "IO", photo: "images/Interns/2025/Sudharsan M.png",linkedin:"a" },
  { name: "Faiq Alam", role: "2025", interests: "KG Creation and Reasoning in Indian Context ", initials: "IO", photo: "images/Interns/2025/Faiq_Alam.JPG",linkedin:"a" },
  { name: "K.Naveen Ragav ", role: "2025", interests: "", initials: "IO", photo: "" },
  { name: "Priyanka K.", role: "2025", interests: "KG Creation in Tamil Ayurvedic Text", initials: "IO", photo: "images/Interns/2025/PriyankaK.png",linkedin:"a" },
  { name: "Kalyan Sudarsan ", role: "2025", interests: "", initials: "IO", photo: "images/Interns/2025/Kalyan .heic" ,linkedin:"a"},
  { name: "VIJEYASRI T", role: "2025", interests: "REAL-TIME SPEECH ENHANCEMENT FOR DYSARTHRIA INDIVIDUALS USING NLP AND DEEP LEARNING", initials: "IO", photo: "images/Interns/2025/Vijeyasri.T.jpg",linkedin:"a" },
  { name: "Gobika R ", role: "2025", interests: "REAL-TIME SPEECH ENHANCEMENT FOR DYSARTHRIA INDIVIDUALS USING NLP AND DEEP LEARNING", initials: "IO", photo: "images/Interns/2025/Gobika_R.jpeg.jpg",linkedin:"a" },
  { name: "Vinithaa P", role: "2025", interests: "MULTI-CLASS SPEECH DISORDER DETECTION USING FRACTAL ANALYSIS AND MFCC", initials: "IO", photo: "",linkedin:"a" },




  { name: "Nagul Pranav", role: "2024", interests: "Computer Vision", initials: "IO", photo: "",linkedin:"a" },
  { name: "Balaji", role: "2024", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Gudapadi Nikhil", role: "2024", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "R Vinish Krishna", role: "2024", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Vasan R", role: "2024", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Janarthanan T", role: "2024", interests: "Computer Vision", initials: "IT", photo: "images/Interns/2024/Janarthanan_106121053.jpg",linkedin:"a" },
  { name: "Arvind Krishna", role: "2024", interests: "Computer Vision", initials: "IT", photo: "images/Interns/2024/Aravind Krishna P M.JPG",linkedin:"a" },
  { name: "Krithik", role: "2024", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Tanush Somishetty", role: "2024", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },


  { name: "Yogesh Perumal", role: "2023", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Abhijit Baidya", role: "2023", interests: "Computer Vision", initials: "IT", photo: "images/Interns/2023/Abhijit Baidya.jpg",linkedin:"a" },
  { name: "Hashim Faisal syed", role: "2023", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Isai Visaahan P M", role: "2023", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Karthik Balaji N V", role: "2023", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Kirthik B", role: "2023", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Nisha Preethika S", role: "2023", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Piyush Sonekar", role: "2023", interests: "Computer Vision", initials: "IT", photo: "" ,linkedin:"a"},
  { name: "Prabhakar", role: "2023", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Raunak Rajpal", role: "2023", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Sreenidhi N", role: "2023", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
  { name: "Vasukumar P", role: "2023", interests: "Computer Vision", initials: "IT", photo: "",linkedin:"a" },
];

function PeoplePage() {
  return (
    <>
      {/* <PageHeader
        eyebrow=""
        title={<>The people behind the <span className="italic font-light text-ink/50">research.</span></>}
      /> */}

      <Section title="Faculty" eyebrow="" people={faculty} variant="large" isFirst direction="left" />
      <Section title="PhD Scholars" eyebrow="" people={scholars} variant="medium" direction="right" />
      <Section title="PG Students" eyebrow="" people={PGstudents} variant="compact" itemsPerPage={6} direction="left" showProjectLabel />
      <Section title="UG Students" eyebrow="" people={UGstudents} variant="compact" itemsPerPage={6} direction="right" showProjectLabel />
      <Section title="Interns" eyebrow="" people={interns} variant="compact" itemsPerPage={6} direction="left" />
      <section className="container-page pt-6 pb-0">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-ink text-canvas p-10 lg:p-14 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center relative overflow-hidden"
          >
            <motion.div
              className="absolute -top-20 -right-20 size-80 rounded-full bg-accent/30 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <Link
              to="/contact"
              className="absolute top-6 right-6 inline-flex items-center rounded-full border border-canvas/20 bg-canvas/10 px-5 py-2 text-sm font-medium text-canvas backdrop-blur-sm transition-all hover:bg-accent hover:border-accent hover:text-canvas"
            >
              Join Us
              <ArrowRight className="size-4" />
            </Link>
            <div className="relative">
           
              <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight leading-[0.95]">
                We're always looking for curious minds.
              </h2>
            </div>
            <div className="space-y-2 text-sm text-canvas/70 relative">
              <p>Ph.D. positions open year-round across all research domains. Industry-funded scholarships available for exceptional candidates.</p>
              <p>M.Tech and B.Tech students from NIT Trichy can apply through the lab's internal mentorship program every semester.</p>
            </div>

          </motion.div>
        </Reveal>
      </section>
    </>
  );
}

const tierStyles: Record<
  Variant,
  {
    cardPadding: string;
    gap: string;
    photoWidth: string;
    photoMinHeight: string;
    nameSize: string;
    roleSize: string;
    interestSize: string;
    initialsSize: string;
  }
> = {
  large: {
    cardPadding: "p-5 lg:p-8",
    gap: "gap-6 lg:gap-10",
    photoWidth: "w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-56",
    photoMinHeight: "",
    nameSize: "text-2xl lg:text-3xl font-semibold",
    roleSize: "text-xs",
    interestSize: "mt-4 text-sm lg:text-base font-normal",
    initialsSize: "text-2xl font-semibold",
  },
  medium: {
    cardPadding: "p-4 sm:p-5",
    gap: "gap-4 sm:gap-5",
    photoWidth: "w-24 h-32 sm:w-32 sm:h-40 lg:w-36 lg:h-44",
    photoMinHeight: "",
    nameSize: "text-lg font-semibold",
    roleSize: "text-[11px]",
    interestSize: "mt-2 text-[13px] sm:text-sm",
    initialsSize: "text-xl font-semibold",
  },
  compact: {
    cardPadding: "p-3.5",
    gap: "gap-3.5",
    photoWidth: "w-20 h-24 sm:w-24 sm:h-28",
    photoMinHeight: "",
    nameSize: "text-base sm:text-lg font-semibold",
    roleSize: "text-xs",
    interestSize: "mt-2 text-sm",
    initialsSize: "text-lg font-semibold",
  },
};

function PersonCard({ p, variant, showProjectLabel, hideSocialLabels }: { p: Person; variant: Variant; showProjectLabel?: boolean; hideSocialLabels?: boolean }) {
  const s = tierStyles[variant];

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group h-full w-full rounded-2xl bg-surface ring-1 ring-border hover:ring-ink hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] transition-all ${variant === "large" ? "max-w-5xl" : ""
        } ${s.cardPadding}`}
    >
      <div className={`flex flex-col sm:flex-row sm:items-start items-center ${s.gap}`}>
        <div className="flex flex-col shrink-0 items-center sm:items-start gap-4">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/30 to-sage/20 ${s.photoWidth} ${s.photoMinHeight}`}
          >
            {p.photo ? (
              <img
                src={p.photo}
                alt={cleanName(p.name)}
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove("hidden");
                }}
              />
            ) : null}
            <span
              className={`absolute inset-0 grid place-items-center font-display tracking-tight text-ink ${p.photo ? "hidden" : ""
                } ${s.initialsSize}`}
            >
              {p.initials}
            </span>
          </motion.div>

          <div className="flex flex-col items-center sm:items-start gap-2 w-full mt-2">
            {p.email && (
              <a href={`mailto:${p.email}`} className="flex items-center gap-1.5 font-mono text-[12px] lg:text-[13px] text-ink hover:text-accent transition-colors font-medium">
                <Mail className="size-3.5 shrink-0" />
                <span className="text-center sm:text-left">{p.email}</span>
              </a>
            )}
            {p.personalEmail && (
              <a href={`mailto:${p.personalEmail}`} className="flex items-center gap-1.5 font-mono text-[12px] lg:text-[13px] text-ink hover:text-accent transition-colors font-medium">
                <Mail className="size-3.5 shrink-0" />
                <span className="text-center sm:text-left">{p.personalEmail}</span>
              </a>
            )}
            {p.phone && (
              <a href={`tel:${p.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-1.5 font-mono text-[12px] lg:text-[13px] text-ink hover:text-accent transition-colors font-medium">
                <Phone className="size-3.5 shrink-0" />
                <span className="text-center sm:text-left">{p.phone}</span>
              </a>
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-2">
            <div>
              <h3 className={`font-display font-semibold tracking-[0.01em] leading-snug group-hover:text-accent transition-colors [word-spacing:0.2em] ${s.nameSize}`}>
                {cleanName(p.name)}
              </h3>
              <p className={`mt-3.5 font-bold uppercase tracking-[0.18em] text-accent ${s.roleSize}`}>
                {p.role}
              </p>
            </div>
            {hideSocialLabels && (
              <a href={p.linkedin && p.linkedin !== "a" ? p.linkedin : "#"} target={p.linkedin && p.linkedin !== "a" ? "_blank" : undefined} rel="noopener noreferrer" className="flex-shrink-0 flex items-center justify-center p-2 rounded-full bg-muted text-ink-soft hover:bg-muted/80 transition-colors group">
                <Linkedin className="size-4" />
              </a>
            )}
          </div>

          {showProjectLabel ? (
            <div className="mt-2.5">
              <p className="font-mono font-bold text-[12px] uppercase tracking-[0.18em] text-ink">
                Project Title
              </p>
              <div className="mt-1 text-[12.5px] leading-snug text-ink-soft whitespace-pre-line">
                {p.interests}
              </div>
            </div>
          ) : (
            <div className={`text-ink-soft leading-relaxed whitespace-pre-line ${s.interestSize}`}>
              {p.interests}
            </div>
          )}

          {(p.scholar || p.linkedin || p.dblp || p.academia || p.researchGate || p.scopus) && (
            <div className={`flex flex-wrap gap-3 ${variant === "large" ? "mt-6" : "mt-auto pt-6"}`}>
              {(!hideSocialLabels && p.linkedin && p.linkedin !== "a") && (
                <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-ink-soft hover:bg-muted/80 transition-colors text-xs font-medium group">
                  <Linkedin className="size-3.5" />
                  <span>LinkedIn</span>
                </a>
              )}
              {p.scholar && (
                <a href={p.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-ink-soft hover:bg-accent hover:text-canvas transition-colors text-xs font-medium group">
                  <GraduationCap className="size-3.5" />
                  <span>Google Scholar</span>
                </a>
              )}
              {p.dblp && (
                <a href={p.dblp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-ink-soft hover:bg-accent hover:text-canvas transition-colors text-xs font-medium group">
                  <Book className="size-3.5" />
                  <span>DBLP</span>
                </a>
              )}
              {p.academia && (
                <a href={p.academia} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-ink-soft hover:bg-accent hover:text-canvas transition-colors text-xs font-medium group">
                  <Library className="size-3.5" />
                  <span>Academia</span>
                </a>
              )}
              {p.researchGate && (
                <a href={p.researchGate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-ink-soft hover:bg-accent hover:text-canvas transition-colors text-xs font-medium group">
                  <Globe className="size-3.5" />
                  <span>ResearchGate</span>
                </a>
              )}
              {p.scopus && (
                <a href={p.scopus} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-ink-soft hover:bg-accent hover:text-canvas transition-colors text-xs font-medium group">
                  <FileText className="size-3.5" />
                  <span>Scopus</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {p.details && (
        <div className="mt-6 pt-6 border-t border-hairline/60">
          {p.details}
        </div>
      )}
    </motion.article>
  );
}

function DirectionalCardReveal({ children, direction }: { children: React.ReactNode, direction: "left" | "right" | "up" }) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      y: direction === "up" ? 40 : 0,
      scale: 0.97,
      filter: "blur(6px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)"
    }
  };

  return (
    <motion.div
      variants={variants}
      transition={{ type: "spring", stiffness: 85, damping: 18, mass: 1.2 }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}

function Section({
  title,
  eyebrow,
  people,
  variant = "compact",
  itemsPerPage = 6,
  isFirst = false,
  direction = "up",
  showProjectLabel = false,
}: {
  title: string;
  eyebrow: string;
  people: Person[];
  variant?: Variant;
  itemsPerPage?: number;
  isFirst?: boolean;
  direction?: "left" | "right" | "up";
  showProjectLabel?: boolean;
}) {
  const [page, setPage] = useState(1);
  const usesPagination = variant === "compact" && people.length > itemsPerPage;
  const totalPages = Math.max(1, Math.ceil(people.length / itemsPerPage));
  const visiblePeople = usesPagination
    ? people.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : people;

  const gridClasses =
    variant === "large"
      ? "grid gap-6 place-items-center"
      : variant === "medium"
        ? "grid gap-4 lg:grid-cols-3"
        : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      className={`container-page py-2.5 ${isFirst ? "border-t-0 -mt-4 pt-0" : "border-t border-hairline"}`}
    >
      <Reveal className="flex items-end justify-between mb-4 flex-wrap gap-4">
        <div>
          {eyebrow && <p className="eyebrow text-accent mb-2">{eyebrow}</p>}
          <h2 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight">
            <RevealWords text={title} />
          </h2>
        </div>
        <span className="font-mono text-xs text-ink-soft">{people.length} members</span>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <Stagger className={gridClasses} stagger={0.06}>
            {visiblePeople.map((p, i) => (
              <DirectionalCardReveal key={`${p.name}-${i}`} direction={direction}>
                <PersonCard p={p} variant={variant} showProjectLabel={showProjectLabel} hideSocialLabels={title !== "Faculty"} />
              </DirectionalCardReveal>
            ))}
          </Stagger>
        </motion.div>
      </AnimatePresence>

      {usesPagination && (
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="font-mono text-xs text-ink-soft disabled:opacity-30 hover:text-accent transition-colors px-2"
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`size-8 rounded-full font-mono text-xs transition-colors ${n === page ? "bg-ink text-canvas" : "text-ink-soft hover:text-accent hover:bg-accent/10"
                }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="font-mono text-xs text-ink-soft disabled:opacity-30 hover:text-accent transition-colors px-2"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}