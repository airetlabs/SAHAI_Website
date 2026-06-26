import { createFileRoute } from "@tanstack/react-router";
import { useState, useId, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "../components/Reveal";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — SAHAI Lab" },
      { name: "description", content: "Peer-reviewed publications, conference papers, journal articles and patents from SAHAI Lab researchers." },
      { property: "og:title", content: "Publications · SAHAI Lab" },
      { property: "og:description", content: "152+ publications spanning the leading AI venues." },
    ],
  }),
  component: PublicationsPage,
});

type Pub = {
  venue: string;
  type: string;
  year: number;
  date: string;
  title: string;
  authors: string;
  body: string;
  citations: number;
  category: string;
  gradient: string;
  link?: string;
  fullVenue?: string;
};

const pubs: Pub[] = [
  {
    venue: "ACM Trans. on Knowledge Discovery from Data",
    type: "Journal",
    year: 2026,
    date: "2026",
    category: "Data Mining & Graph Analytics",
    title: "CGS: Configurable Graph Summarization with Bounded Neighborhood Loss and Query Support",
    authors: "Mitra, S., Elza Simon, S., Oswald, C., Bhattacharya, A. and Pal, A.",
    body: "Configurable Graph Summarization with Bounded Neighborhood Loss and Query Support.",
    citations: 0,
    gradient: "from-accent/30 via-canvas to-sage/20",
    link: "https://dl.acm.org/doi/10.1145/3786788",
  },
  {
    venue: "ACM Transactions on the Web (TWEB)",
    type: "Journal",
    year: 2022,
    date: "2022",
    category: "NLP & LLMs",
    title: "Spotspam: Intention analysis–driven sms spam detection using bert embeddings",
    authors: "Oswald, C., Simon, S.E. and Bhattacharya, A.",
    body: "Intention analysis-driven sms spam detection using bert embeddings.",
    citations: 0,
    gradient: "from-sage/30 via-canvas to-accent/20",
    link: "https://dl.acm.org/doi/10.1145/3538491",
  },
  {
    venue: "Data Science Journal",
    type: "Journal",
    year: 2018,
    date: "2018",
    category: "Multimedia Compression & Security",
    title: "Text and image compression based on data mining perspective",
    authors: "Oswald, C. and Sivaselvan, B.",
    body: "Text and image compression based on data mining perspective.",
    citations: 0,
    gradient: "from-accent/20 via-muted to-ink/10",
    link: "http://doi.org/10.5334/dsj-2018-012",
  },
  {
    venue: "The Computer Journal",
    type: "Journal",
    year: 2023,
    date: "2023",
    category: "Multimedia Compression & Security",
    title: "Smart Multimedia Compressor—Intelligent Algorithms for Text and Image Compression",
    authors: "Oswald, C. and Sivaselvan, B.",
    body: "Intelligent Algorithms for Text and Image Compression.",
    citations: 0,
    gradient: "from-sage/20 via-muted to-accent/30",
    link: "https://doi.org/10.1093/comjnl/bxab173",
  },
  {
    venue: "Concurrency and Computation: Practice and Experience",
    type: "Journal",
    year: 2021,
    date: "2021",
    category: "Multimedia Compression & Security",
    title:
      "An efficient and novel data clustering and run length encoding approach to image compression",
    authors: "C. Oswald, Haritha, E., Akash Raja, A. and Sivaselvan, B.",
    body: "An efficient and novel data clustering and run length encoding approach to image compression.",
    citations: 0,
    gradient: "from-accent/25 via-canvas to-sage/15",
    link: "https://onlinelibrary.wiley.com/doi/10.1002/cpe.6185",
  },
  {
    venue: "Journal of Ambient Intelligence and Humanized Computing",
    type: "Journal",
    year: 2018,
    date: "2018",
    category: "Multimedia Compression & Security",
    title: "An optimal text compression algorithm based on frequent pattern mining",
    authors: "Oswald, C. and Sivaselvan, B.",
    body: "An optimal text compression algorithm based on frequent pattern mining.",
    citations: 0,
    gradient: "from-muted via-canvas to-accent/20",
    link: "https://doi.org/10.1007/s12652-017-0540-2",
  },
  {
    venue: "Intl. Journal of Computer Information Systems and Industrial Management Applications",
    type: "Journal",
    year: 2023,
    date: "2023",
    category: "HCI, Usability & Security",
    title:
      "A Novel and Efficient Multilayered Approach to CAPTCHA: Design, Performance and Usability Evaluation",
    authors: "Navansh Goel, Tejaswi Kumar and C. Oswald",
    body: "A Novel and Efficient Multilayered Approach to CAPTCHA: Design, Performance and Usability Evaluation.",
    citations: 0,
    gradient: "from-sage/25 via-canvas to-accent/15",
    link: "https://www.mirlabs.org/ijcisim/regular_papers_2023/Paper39.pdf",
  },
  {
    venue: "Annals of Data Science",
    type: "In review",
    year: 2024,
    date: "In review",
    category: "NLP & LLMs",
    title:
      "Offensive Text Detection in Code-mixed Dravidian Languages Towards Marginalized Groups and Women",
    authors: "Lokkamithran M, Mubeena, Joshua Mahadevan",
    body: "Offensive Text Detection in Code-mixed Dravidian Languages Towards Marginalized Groups and Women.",
    citations: 0,
    gradient: "from-accent/20 via-canvas to-muted",
    link: "https://scholar.google.com/scholar?q=Offensive%20Text%20Detection%20in%20Code-mixed%20Dravidian%20Languages%20Towards%20Marginalized%20Groups%20and%20Women",
  },
  {
    venue: "The Expert Systems Journal",
    type: "In review",
    year: 2024,
    date: "In review",
    category: "NLP & LLMs",
    title:
      "DEFENSE: Detection of COVID-19 Fake News in Social Media Posts using Feature Engineering and Sentence Embedding",
    authors: "C. Oswald, Allen P. Alex and Arnab Bhattacharya",
    body: "Detection of COVID-19 Fake News in Social Media Posts using Feature Engineering and Sentence Embedding.",
    citations: 0,
    gradient: "from-sage/25 via-canvas to-accent/15",
    link: "https://scholar.google.com/scholar?q=Detection%20of%20COVID-19%20Fake%20News%20in%20Social%20Media%20Posts%20using%20Feature%20Engineering%20and%20Sentence%20Embedding",
  },
  {
    venue: "Annals of Data Science",
    type: "In review",
    year: 2024,
    date: "In review",
    category: "AI for Healthcare & Social Good",
    title:
      "Discovering Depression in Reddit: Addressing the Under-Represented Users in Social Media",
    authors: "C. Oswald, Suyash Chaudhary and Arnab Bhattacharya",
    body: "Discovering Depression in Reddit: Addressing the Under-Represented Users in Social Media.",
    citations: 0,
    gradient: "from-accent/15 via-muted to-sage/20",
    link: "https://scholar.google.com/scholar?q=Discovering%20Depression%20in%20Reddit%3A%20Addressing%20the%20Under-Represented%20Users%20in%20Social%20Media",
  },
  {
    venue: "ICSCST 2026",
    type: "Conference",
    fullVenue:
      "Proceedings of the 2026 International Conference on Smart Communication and Sustainable Technologies (ICSCST), 2026",
    year: 2026,
    date: "2026",
    category: "Education Technology",
    title:
      "Bridging Textbook Content and Interactive Visualizations: AI-Driven Multilingual Resources for SMART Pedagogy",
    authors: "Vasan M.L., Krishna R.V., Ragav N., Gudapati N., Sudarsan K., Philip R., Oswald C.",
    body: "Bridging Textbook Content and Interactive Visualizations: AI-Driven Multilingual Resources for SMART Pedagogy.",
    citations: 0,
    gradient: "from-accent/30 via-canvas to-sage/20",
  },
  {
    venue: "ICSCST 2026",
    type: "Conference",
    fullVenue:
      "Proceedings of the 2026 International Conference on Smart Communication and Sustainable Technologies (ICSCST), 2026",
    year: 2026,
    date: "2026",
    category: "NLP & LLMs",
    title:
      "A Study on Named Entity Recognition in Tamil Language using Multilingual Transformers and Sequence Models",
    authors: "Balan A., Aranganathan S., Oswald C.",
    body: "A Study on Named Entity Recognition in Tamil Language using Multilingual Transformers and Sequence Models.",
    citations: 0,
    gradient: "from-sage/30 via-canvas to-accent/20",
  },
  {
    venue: "ICSCST 2026",
    type: "Conference",
    fullVenue:
      "Proceedings of the 2026 International Conference on Smart Communication and Sustainable Technologies (ICSCST), 2026",
    year: 2026,
    date: "2026",
    category: "NLP & LLMs",
    title: "Attention-Based Fusion for Malayalam Hate Speech Detection Using MuRIL and XLM-R",
    authors: "Balan A., Jose R., Oswald C.",
    body: "Attention-Based Fusion for Malayalam Hate Speech Detection Using MuRIL and XLM-R.",
    citations: 0,
    gradient: "from-accent/20 via-muted to-ink/10",
  },
  {
    venue: "arXiv 2025",
    type: "Conference",
    fullVenue: "arXiv preprint arXiv:2511.00960, 2025",
    year: 2025,
    date: "2025",
    category: "NLP & LLMs",
    title:
      "The Riddle of Reflection: Evaluating Reasoning and Self-Awareness in Multilingual LLMs using Indian Riddles",
    authors: "Abhinav P.M., Saxena O., Oswald C., Krishnamurthy P.",
    body: "Evaluating Reasoning and Self-Awareness in Multilingual LLMs using Indian Riddles.",
    citations: 0,
    gradient: "from-sage/20 via-muted to-accent/30",
    link: "https://arxiv.org/abs/2511.00960",
  },
  {
    venue: "PACLIC 2025",
    type: "Conference",
    fullVenue:
      "Proceedings of the 39th Pacific Asia Conference on Language, Information and Computation (PACLIC), 2025, pp. 402-412",
    year: 2025,
    date: "2025",
    category: "NLP & LLMs",
    title:
      "VIDAI: VIDukathAI Interpretation Through Analysis of In-context Reasoning in Tamil using LLMs",
    authors: "Srinivasan R.S.M., Kesavan T., Balan A., Abhinav P.M., Krishnamurthy P., Oswald C.",
    body: "VIDukathAI Interpretation Through Analysis of In-Context Reasoning in Tamil using LLMs.",
    citations: 0,
    gradient: "from-accent/25 via-canvas to-sage/15",
    link: "https://aclanthology.org/2025.paclic-1.36/",
  },
  {
    venue: "PACLIC 2024",
    type: "Conference",
    fullVenue:
      "Proceedings of the 38th Pacific Asia Conference on Language, Information and Computation (PACLIC), 2024, pp. 838-852",
    year: 2024,
    date: "2024",
    category: "NLP & LLMs",
    title:
      "Aganittyam: Learning Tamil Grammar through Knowledge Graph based Templatized Question Answering",
    authors:
      "Mithilesh K., Madhumalararungeethayan A., Dharanish Rahul S., Balan A., Oswald C., Terdalkar H.",
    body: "Learning Tamil Grammar through Knowledge Graph based Templatized Question Answering.",
    citations: 0,
    gradient: "from-muted via-canvas to-accent/20",
    link: "https://aclanthology.org/2024.paclic-1.81/",
  },
  {
    venue: "FIRE 2024",
    type: "Conference",
    fullVenue:
      "Forum for Information Retrieval Evaluation (FIRE), Working Notes, CEUR Workshop Proceedings Vol. 4054, IIT Gandhinagar, 2024",
    year: 2024,
    date: "2024",
    category: "NLP & LLMs",
    title:
      "Indian Language Summarization and Factual Error Detection using Pretrained Sequence-to-Sequence Models and Large Language Models",
    authors: "Balan A., Karthik C., Oswald C.",
    body: "Indian Language Summarization and Factual Error Detection using Pretrained Sequence-to-Sequence Models and LLMs.",
    citations: 0,
    gradient: "from-sage/25 via-canvas to-accent/15",
    link: "https://ceur-ws.org/Vol-4054/T1-7.pdf",
  },
  {
    venue: "ICON 2024",
    type: "Conference",
    fullVenue:
      "Proceedings of the 21st International Conference on Natural Language Processing (ICON), 2024, pp. 602-606",
    year: 2024,
    date: "2024",
    category: "Generative AI",
    title: "Landscape Painter: Mimicking Human Like Art Using Generative Adversarial Networks",
    authors: "Gogoriya Y., Oswald C., Balan A.",
    body: "Mimicking Human Like Art Using Generative Adversarial Networks.",
    citations: 0,
    gradient: "from-accent/20 via-canvas to-muted",
    link: "https://aclanthology.org/2024.icon-1.71/",
  },
  {
    venue: "ORSI/ICBAI 2023",
    type: "Conference",
    fullVenue: "2023-ORSI & 2023-ICBAI, IISc Bangalore, 2023, Best Paper Award",
    year: 2023,
    date: "2023",
    category: "Predictive Analytics & Finance",
    title:
      "FoCID: Forecasting Cryptocurrency Investment Decision using Deep Learning and Ensemble Models",
    authors: "Raaj K.T., Oswald C.",
    body: "Forecasting Cryptocurrency Investment Decision using Deep Learning and Ensemble Models.",
    citations: 0,
    gradient: "from-sage/25 via-canvas to-accent/15",
  },
  {
    venue: "ORSI/ICBAI 2023",
    type: "Conference",
    fullVenue: "2023-ORSI & 2023-ICBAI, IISc Bangalore, 2023",
    year: 2023,
    date: "2023",
    category: "Predictive Analytics & Finance",
    title:
      "Data-Driven Predictive Maintenance: Machine Learning based Prediction of Machine Failures",
    authors: "Visaahan P.M.I., Balaji N.V.K., Oswald C.",
    body: "Machine Learning based Prediction of Machine Failures.",
    citations: 0,
    gradient: "from-accent/15 via-muted to-sage/20",
  },
  {
    venue: "CODS-COMAD 2022",
    type: "Conference",
    fullVenue:
      "5th Joint International Conference on Data Science & Management of Data (9th ACM IKDD CODS and 27th COMAD), 2022, pp. 292-293",
    year: 2022,
    date: "2022",
    category: "AI for Healthcare & Social Good",
    title: "Prediction of Cardiovascular Disease (CVD) using Ensemble Learning Algorithms",
    authors: "Oswald C., Sathwika G.J., Bhattacharya A.",
    body: "Prediction of cardiovascular disease (CVD) using ensemble learning algorithms.",
    citations: 0,
    gradient: "from-accent/30 via-canvas to-sage/20",
    link: "https://oswaldc.netlify.app/My%20Papers/cods.pdf",
  },
  {
    venue: "INDICON 2022",
    type: "Conference",
    fullVenue:
      "2022 IEEE 19th India Council International Conference (INDICON), 2022, pp. 1-6, IEEE",
    year: 2022,
    date: "2022",
    category: "Predictive Analytics & Finance",
    title: "Divorce Astrologer: Machine Learning based Divorce Prediction of Married Couples",
    authors: "Oswald C., Baranwal S., Narayanan S.S.S., Bhattacharya A.",
    body: "Machine Learning based Divorce Prediction of Married Couples.",
    citations: 0,
    gradient: "from-sage/30 via-canvas to-accent/20",
    link: "https://ieeexplore.ieee.org/abstract/document/10040167",
  },
  {
    venue: "ICICC 2021",
    type: "Conference",
    fullVenue:
      "International Conference on Innovative Computing and Communications (ICICC 2021), Springer Singapore, 2022, pp. 355-363, Best Paper Award",
    year: 2021,
    date: "2021",
    category: "HCI, Usability & Security",
    title: "Usability Evaluation of Novel Text CAPTCHA Schemes Based on Colors and Shapes",
    authors: "Kumar T., Goel N., Roy S., Oswald C.",
    body: "Usability Evaluation of Novel Text CAPTCHA Schemes Based on Colors and Shapes.",
    citations: 0,
    gradient: "from-accent/20 via-muted to-ink/10",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-2597-8_30",
  },
  {
    venue: "ICCCSP 2018",
    type: "Conference",
    fullVenue:
      "2018 International Conference on Computer, Communication, and Signal Processing (ICCCSP), 2018, pp. 1-6, IEEE",
    year: 2018,
    date: "2018",
    category: "Multimedia Compression & Security",
    title: "Closed Frequent Itemset Mining Approach to Image Security Enhancement",
    authors: "Swetha M.H., Sivaselvan B., Oswald C.",
    body: "Closed Frequent Itemset Mining Approach to Image Security Enhancement.",
    citations: 0,
    gradient: "from-sage/20 via-muted to-accent/30",
    link: "https://ieeexplore.ieee.org/abstract/document/8452846",
  },
  {
    venue: "ICCCSP 2018",
    type: "Conference",
    fullVenue:
      "2018 International Conference on Computer, Communication, and Signal Processing (ICCCSP), 2018, pp. 1-6, IEEE",
    year: 2018,
    date: "2018",
    category: "HCI, Usability & Security",
    title: "Emergent User Design Framework for E-Payment Mobile Application",
    authors: "Surendran S., Sivaselvan B., Oswald C.",
    body: "Emergent User Design Framework for E-Payment Mobile Application.",
    citations: 0,
    gradient: "from-accent/25 via-canvas to-sage/15",
    link: "https://ieeexplore.ieee.org/abstract/document/8452855",
  },
  {
    venue: "ICCCSP 2018",
    type: "Conference",
    fullVenue:
      "2018 International Conference on Computer, Communication, and Signal Processing (ICCCSP), 2018, pp. 1-5, IEEE",
    year: 2018,
    date: "2018",
    category: "HCI, Usability & Security",
    title: "Gamification Paradigm for WebApps Design Framework",
    authors: "Gunta K., Sivaselvan B., Oswald C.",
    body: "Gamification paradigm for WebApps design framework.",
    citations: 0,
    gradient: "from-muted via-canvas to-accent/20",
    link: "https://ieeexplore.ieee.org/abstract/document/8452840",
  },
  {
    venue: "INDICON 2017",
    type: "Conference",
    fullVenue:
      "2017 14th IEEE India Council International Conference (INDICON), 2017, pp. 1-6, IEEE",
    year: 2017,
    date: "2017",
    category: "Multimedia Compression & Security",
    title: "Lossy Image Compression using Frequent Pattern Mining based Huffman Encoding",
    authors: "Biswas S., Chennu N., Valveti H., Oswald C., Sivaselvan B.",
    body: "Lossy Image Compression using Frequent Pattern Mining based Huffman Encoding.",
    citations: 0,
    gradient: "from-sage/25 via-canvas to-accent/15",
    link: "https://ieeexplore.ieee.org/abstract/document/8487850",
  },
  {
    venue: "ICoAC 2017",
    type: "Conference",
    fullVenue:
      "2017 Ninth International Conference on Advanced Computing (ICoAC), 2017, pp. 157-164, IEEE",
    year: 2017,
    date: "2017",
    category: "HCI, Usability & Security",
    title: "A Novel Gamification Approach to Recommendation Based Mobile Applications",
    authors: "Neeraj S., Oswald C., Sivaselvan B.",
    body: "A novel gamification approach to recommendation based mobile applications.",
    citations: 0,
    gradient: "from-accent/20 via-canvas to-muted",
    link: "https://ieeexplore.ieee.org/abstract/document/8441300",
  },
  {
    venue: "INDICON 2017",
    type: "Conference",
    fullVenue:
      "2017 14th IEEE India Council International Conference (INDICON), 2017, pp. 1-6, IEEE",
    year: 2017,
    date: "2017",
    category: "HCI, Usability & Security",
    title: "Automatic Ranking of CAPTCHAs based on Usability Measures",
    authors: "Chaurasia K., Jain S., Sivaselvan B., Oswald C.",
    body: "Automatic Ranking of CAPTCHAs based on Usability Measures.",
    citations: 0,
    gradient: "from-sage/25 via-canvas to-accent/15",
    link: "https://ieeexplore.ieee.org/abstract/document/8487993",
  },
  {
    venue: "INDICON 2016",
    type: "Conference",
    fullVenue: "2016 IEEE Annual India Conference (INDICON), 2016, pp. 1-6, IEEE",
    year: 2016,
    date: "2016",
    category: "Multimedia Compression & Security",
    title:
      "Lossy Image Compression—A Frequent Sequence Mining Perspective Employing Efficient Clustering",
    authors: "Kadimisetty A., Oswald C., Sivaselvan B., Alekhya K.",
    body: "Lossy image compression—A frequent sequence mining perspective employing efficient clustering.",
    citations: 0,
    gradient: "from-accent/15 via-muted to-sage/20",
    link: "https://ieeexplore.ieee.org/abstract/document/7838977",
  },
  {
    venue: "ADCOM 2016",
    type: "Conference",
    fullVenue:
      "2016 22nd Annual International Conference on Advanced Computing and Communication (ADCOM), 2016, pp. 27-32, IEEE",
    year: 2016,
    date: "2016",
    category: "Multimedia Compression & Security",
    title: "Frequent Pattern Mining Approach to Image Compression",
    authors: "Kadimisetty A., Oswald C., Sivaselvan B.",
    body: "Frequent Pattern Mining Approach to Image Compression.",
    citations: 0,
    gradient: "from-accent/30 via-canvas to-sage/20",
    link: "https://ieeexplore.ieee.org/abstract/document/8385599",
  },
  {
    venue: "INDICON 2015",
    type: "Conference",
    fullVenue: "2015 Annual IEEE India Conference (INDICON), 2015, pp. 1-6, IEEE",
    year: 2015,
    date: "2015",
    category: "Multimedia Compression & Security",
    title: "Knowledge Engineering Perspective of Text Compression",
    authors: "Oswald C., Ghosh A.I., Sivaselvan B.",
    body: "Knowledge engineering perspective of text compression.",
    citations: 0,
    gradient: "from-sage/30 via-canvas to-accent/20",
    link: "https://ieeexplore.ieee.org/abstract/document/7443683",
  },
  {
    venue: "ICoAC 2013",
    type: "Conference",
    fullVenue:
      "2013 Fifth International Conference on Advanced Computing (ICoAC), 2013, pp. 77-85, IEEE, Best Paper Award",
    year: 2013,
    date: "2013",
    category: "Optimization",
    title:
      "Novel Hybrid PSO Algorithms with Search Optimization Strategies for a University Course Timetabling Problem",
    authors: "Oswald C.",
    body: "Novel hybrid PSO algorithms with search optimization strategies for a University Course Timetabling Problem.",
    citations: 0,
    gradient: "from-accent/20 via-muted to-ink/10",
    link: "https://ieeexplore.ieee.org/abstract/document/6921931",
  },
];

const topics = [
  "All Topics",
  "NLP & LLMs",
  "Data Mining & Graph Analytics",
  "Multimedia Compression & Security",
  "AI for Healthcare & Social Good",
  "Generative AI",
  "Predictive Analytics & Finance",
  "HCI, Usability & Security",
  "Education Technology",
  "Optimization",
];

const filters = ["All", "Conference", "Journal", "In review"];

function PublicationsPage() {
  const [filter, setFilter] = useState("All");
  const [topic, setTopic] = useState("All Topics");
  const filtered = pubs.filter((p) => {
    const typeMatch = filter === "All" || p.type === filter;
    const topicMatch = topic === "All Topics" || p.category === topic;
    return typeMatch && topicMatch;
  });
  const id = useId();

  return (
    <>
      <PageHeader
        title={
          <>
            Scholarship as <span className="italic font-light text-ink/50">contribution.</span>
          </>
        }
      >
        <ScrollIndicator />
      </PageHeader>

      <section className="container-page pb-10">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 ${
                  filter === f
                    ? "bg-ink text-canvas shadow-md"
                    : "bg-surface ring-1 ring-border text-ink-soft hover:bg-muted"
                }`}
              >
                {f}
              </button>
            ))}

            <div className="ml-2 relative">
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="appearance-none bg-surface ring-1 ring-border text-ink-soft rounded-full px-4 py-2 pr-8 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-ink"
              >
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-ink-soft">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="ml-auto font-mono text-xs text-ink-soft">{filtered.length} papers</div>
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-32">
        <ul className="grid gap-px bg-hairline ring-1 ring-hairline rounded-2xl overflow-hidden w-full">
          {filtered.map((pub, index) => (
            <motion.div
              layoutId={`card-${pub.title}-${id}`}
              key={`card-${pub.title}-${id}`}
              className="relative bg-surface p-6 lg:p-8 flex flex-col md:flex-row justify-between items-center transition-all duration-300 hover:bg-canvas hover:-translate-y-1 hover:shadow-xl hover:z-10 group"
            >
              <div className="flex gap-6 lg:gap-8 flex-col md:flex-row flex-1 min-w-0 md:items-center">
                <motion.div
                  layoutId={`image-${pub.title}-${id}`}
                  className={`relative h-40 w-full md:h-16 md:w-16 rounded-xl overflow-hidden bg-gradient-to-br ${pub.gradient} shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-500`}
                >
                  <div className="absolute inset-0 bg-dotgrid opacity-30" />
                  <div className="absolute inset-0 grid place-items-center opacity-80 scale-75">
                    <PubGlyph variant={index % 4} />
                  </div>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <motion.h3
                    layoutId={`title-${pub.title}-${id}`}
                    className="font-display font-semibold text-xl lg:text-2xl text-ink text-center md:text-left leading-snug group-hover:text-accent transition-colors"
                  >
                    {pub.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${pub.title}-${id}`}
                    className="text-[15px] lg:text-base text-ink-soft text-center md:text-left mt-2.5"
                  >
                    {pub.authors}
                  </motion.p>
                  <motion.p
                    layoutId={`fullvenue-${pub.title}-${id}`}
                    className="text-sm italic text-ink-soft text-center md:text-left mt-1"
                  >
                    {pub.fullVenue || pub.venue}
                  </motion.p>
                </div>
              </div>
              {pub.link ? (
                <motion.a
                  layoutId={`button-${pub.title}-${id}`}
                  href={pub.link}
                  target="_blank"
                  className="px-5 py-2.5 text-xs rounded-full font-medium bg-canvas ring-1 ring-border hover:bg-ink hover:text-canvas text-ink mt-4 md:mt-0 transition-colors shrink-0"
                >
                  Read Paper
                </motion.a>
              ) : (
                <div className="px-5 py-2.5 text-xs rounded-full font-medium mt-4 md:mt-0 shrink-0 invisible pointer-events-none hidden md:block">
                  Read Paper
                </div>
              )}
            </motion.div>
          ))}
        </ul>
      </section>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-ink"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

function PubGlyph({ variant }: { variant: number }) {
  const stroke = "oklch(0.18 0.012 60 / 0.5)";
  const accent = "oklch(0.68 0.165 55)";
  if (variant === 0) {
    return (
      <svg viewBox="0 0 200 120" className="w-2/3 h-2/3">
        {[0, 1, 2, 3].map((i) => (
          <circle
            key={i}
            cx={30 + i * 47}
            cy="60"
            r="14"
            fill="oklch(0.985 0.005 80)"
            stroke={accent}
            strokeWidth="1.2"
          />
        ))}
        {[0, 1, 2].map((i) => (
          <line
            key={i}
            x1={44 + i * 47}
            y1="60"
            x2={62 + i * 47}
            y2="60"
            stroke={stroke}
            strokeWidth="1"
          />
        ))}
      </svg>
    );
  }
  if (variant === 1) {
    return (
      <svg viewBox="0 0 200 120" className="w-2/3 h-2/3">
        {[20, 50, 80, 110, 140, 170].map((x, i) => (
          <rect
            key={i}
            x={x}
            y={70 - i * 6}
            width="14"
            height={20 + i * 10}
            rx="2"
            fill={accent}
            opacity={0.3 + i * 0.1}
          />
        ))}
      </svg>
    );
  }
  if (variant === 2) {
    return (
      <svg viewBox="0 0 200 120" className="w-2/3 h-2/3">
        <path d="M10,90 Q60,20 100,60 T190,40" fill="none" stroke={accent} strokeWidth="2" />
        <path
          d="M10,100 Q60,40 100,70 T190,60"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        {[10, 60, 100, 140, 190].map((x, i) => (
          <circle key={i} cx={x} cy={[90, 50, 60, 50, 40][i]} r="3" fill={accent} />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 120" className="w-2/3 h-2/3">
      <circle cx="100" cy="60" r="38" fill="none" stroke={accent} strokeWidth="1.2" />
      <circle cx="100" cy="60" r="24" fill="none" stroke={stroke} strokeWidth="1" />
      <circle cx="100" cy="60" r="10" fill={accent} />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = 38;
        const x = 100 + r * Math.cos((deg * Math.PI) / 180);
        const y = 60 + r * Math.sin((deg * Math.PI) / 180);
        return <circle key={deg} cx={x} cy={y} r="3" fill={accent} />;
      })}
    </svg>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="flex flex-col items-start gap-3 text-accent/70 hover:text-accent transition-colors w-fit pt-4"
    >
      <span className="text-[10px] uppercase tracking-widest font-mono">Scroll to explore</span>
      <div className="p-2 rounded-full border border-accent/20">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </motion.div>
  );
}
