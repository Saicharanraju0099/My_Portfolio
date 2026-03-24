import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    const padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = Math.max(0, rect.width * box.length - (rectLeft + parentWidth) + padding);
  }

  setTranslateX();

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "End-to-End Data Analysis and Reporting",
              category: "Data Analysis",
              tools: "SQL, Python (Pandas, NumPy), Matplotlib, Seaborn, Excel",
              image: "/images/project_1.webp",
              bullets: [
                "Analyzed multi-year sales data to evaluate revenue trends, product performance, and regional growth patterns.",
                "Wrote optimized SQL queries (JOINs, GROUP BY, subqueries) to extract monthly, quarterly, and category-wise KPIs.",
                "Performed data cleaning, missing value treatment, and normalization using Python (Pandas).",
                "Built visual reports to communicate sales insights and business recommendations."
              ]
            },
            {
              name: "Sales and KPI Dashboard",
              category: "Tableau Dashboard",
              tools: "Tableau, SQL, Python (Pandas), Excel",
              image: "/images/project_2.webp",
              bullets: [
                "Designed interactive Tableau dashboards tracking 10+ KPIs, enabling real-time monitoring of revenue and regional performance.",
                "Extracted and aggregated data using SQL for dashboard consumption.",
                "Cleaned and prepared data using Python and Excel before visualization.",
                "Implemented filters, parameters, and drill-down views for dynamic analysis."
              ]
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <ul className="work-bullets" style={{ marginTop: '0.5rem', marginLeft: '1rem', color: '#ccc', listStyle: 'disc', fontSize: '13px' }}>
                  {project.bullets.map((bullet, i) => (
                    <li key={i} style={{ marginBottom: '0.3rem' }}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <WorkImage image={project.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
