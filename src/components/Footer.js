import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/organization.svg";
import navIcon2 from "../assets/img/vendor.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.yuque.com/pacino-vcjnn/helloworld"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://cn.bing.com/search?q=%E9%9D%92%E5%B2%9B&qs=n&form=QBRE&sp=-1&pq=
              %E9%9D%92%E5%B2%9B&sc=10-2&sk=&cvid=493A6EA8A5A54944BF68C7D9647F2554&ghsh=0&ghacc=0&ghpl="><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p> 2022 </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
