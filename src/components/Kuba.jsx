import "materialize-css";
import React, { useEffect } from "react";
import {
  Col,
  Divider,
  Row,
  Modal,
  Button,
  Caption,
  Card,
} from "react-materialize";
import Aos from "aos";
import "aos/dist/aos.css";

const kuba = () => {
  //   useEffect(() => {
  //     Aos.init({ duration: 1000 });
  //   }, []);

  return (
    <div className="kubabg">
      <div className="kuba">
        <Row>
          <Row />
          <Row />

          <Col s={10} m={8} l={2} push="s1 m2 l5">
            <Card className="teal darken-3 cardKuba">
              <Col s={10} m={10} l={12} push="s1 m1">
                <img
                  className="circle"
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQENE3nQYLo8XQ/profile-displayphoto-shrink_800_800/0/1517038249806?e=1666828800&v=beta&t=xp8rqLvoQaZ4ytF0ECsUUkjuL07xJzRCf1kwovpZu3Q"
                  width="100%"
                />
              </Col>
              <Row></Row>
              <div className="kubatext1">
                {" "}
                Jakub Chołuj
                <Divider />
              </div>
              <div className="kubatext2"> Architekt</div>
              <br />

              <a href="tel:+48518048983" className="kubaicon">
                ✆
              </a>
              <div className="kubatext3">+48 518 048 983 </div>
              <a href="mailto:cholujdesign@gmail.com" className="kubaicon">
                ✐
              </a>
              <div className="kubatext3">CholujDesign@gmail.com</div>
              <a href="cholujdesign.com" className="kubaicon">
                ➥
              </a>
              <div className="kubatext3">cholujdesign.com</div>
              <br/>
              <Modal
              className="red"
                actions={[<div className="red white-text center">
                  <Button className="red white-text" flat modal="close" node="button" waves="red">
                    Close ➦
                  </Button></div>,
                ]}
                bottomSheet={false}
                fixedFooter={false}
               
                id="Modal-10"
                open={false}
                options={{
                  dismissible: true,
                  endingTop: "10%",
                  inDuration: 250,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  opacity: 0.5,
                  outDuration: 250,
                  preventScrolling: true,
                  startingTop: "4%",
                }}
                trigger={
                  <Button className="rodo red z-depth-4" node="button">
                    O mnie
                  </Button>
                }
              >
                <div className="kubatext3">
                    Ukończyłem uniwersytety w Brighton i Oksfordzie, gdzie skupiłem się na budynkach zabytkowych, projektowaniu algorytmicznym i prototypowym. Posiadam doświadczenie w projektowaniu w Wielkiej Brytanii i Polsce. Specjalizuję się w restauracjach, mieszkaniach, domach, budynkach wielorodzinnych, budynkach prefabrykowanych oraz budynkach użyteczności publicznej. Posiadam również znaczne doświadczenie zdobyte na wielu budowach.
                    <br/> <br/> 
                    <div className="center">
                <a href="https://www.facebook.com/CHDarchitekci" className="center white-text">PORTFOLIO</a>
                <br/><br/>
                <a href="https://www.facebook.com/Jakub-Choluj-705647402861733/" className="center white-text">PRACE AKADEMICKIE</a>
                </div></div>

              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default kuba;
