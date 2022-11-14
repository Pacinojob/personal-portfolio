import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Github",
      description: "有(SpringBoot,Web,Python,C的相关项目,还有我的收藏项目欢迎Start!)",
      imgUrl: projImg1,
      Url: " https://github.com/Pacinojob",

    },
    {
      title: "Gitee",
      description: "不会科学上网的朋友点这里！",
      imgUrl: projImg2,
      Url: "https://gitee.com/pacinojob10",
    },
    {
      title: "CSDN",
      description: "可以通过我的文章快速了解我！",
      imgUrl: projImg3,
      Url: "https://blog.csdn.net/m0_63450706?spm=1000.2115.3001.5343",
    },
    {
      title: "Wechat",
      description: "Wechat ID: RobertPacino",
      imgUrl: projImg4,

    },
    {
      title: "QQ",
      description: "Id:2690564987",
      imgUrl: projImg5,
    },
    {
      title: "Email",
      description: "pacino163@outlook.com",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects | 项目</h2>
                <p>我的Gitee和Github上，有SpringBoot,Web,SpringCloud的相关项目,All projects Open Source!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>正在建设中.....</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> 如果你有好的想法帮我补充，通过下面的Email联系我！</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
