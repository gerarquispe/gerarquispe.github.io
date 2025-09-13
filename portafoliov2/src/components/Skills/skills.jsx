
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle"> What I Do </span>
        <span className="skillDesc">I am a Data Scientist, Developer and Professor. I have experience in data analysis, machine learning, software development, and teaching. I enjoy solving complex problems and sharing knowledge with others. My goal is to leverage data to drive insights and create impactful solutions. I am proficient in HTML, CSS, and Javascript, as well as design software such as Gimp and Inkscape. My professional goal is to develop innovative technological solutions that positively transform user experiences and create real value in their daily lives.</span>
        <div className="skillBars">

            <div className="skillBar">
                <div className='skillBarTop'>
                    <img src={UIDesign} alt="UI Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Data Scientist</h2>
                        <p>Specialized in Machine Learning and Deep Learning, I have experience in video processing for computer vision models, building lending risk prediction model and data lake construction. I've developed publicly funded projects with INNOVATEPERU and LAAD-UNSAAC. Also implementing end-to-end model APIs using Azure.</p>
                    </div>
                </div>
                <progress value="90" max="100" className="skillBarProgress"></progress>
            </div>

            <div className="skillBar">
                <div className='skillBarTop'>
                    <img src={WebDesign} alt="Web Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Developer</h2>
                        <p>With solid experience in web development, I specialize in building comprehensive web pages and systems while combining advanced technical skills with team leadership. My expertise spans from frontend development with ReactJS and TypeScript to implementing data extraction solutions through web scraping. As a software developer and team leader, I integrate UX/UI principles to create functional and engaging digital experiences that deliver exceptional user value.</p>
                    </div>
                </div>
                <progress value="85" max="100" className="skillBarProgress"></progress>
            </div>

            <div className="skillBar">
                <div className='skillBarTop'>
                    <img src={AppDesign} alt="App Design" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Professor</h2>
                        <p>With 4 years of experience teaching computer science subjects for undergraduate programs at Universidad Nacional de San Antonio Abad del Cusco (UNSAAC), I have also served as a visiting researcher at Universidade Federal de Minas Gerais in Brazil. This academic background combines practical teaching expertise with international research experience, strengthening my ability to bridge theoretical knowledge with real-world applications.</p>
                    </div>
                </div>
                <progress value="80" max="100" className="skillBarProgress"></progress>
            </div>

        </div>
    </section>
  );
}

export default Skills