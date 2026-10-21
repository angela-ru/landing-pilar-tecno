import { Container, Row, Col } from "react-bootstrap";

const SeccionContacto = () => {
    return (
        <section id="contacto" className="py-5 bg-light">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={8}>
                        <h2 className="mb-3">Contacto</h2>
                        <p className="text-secondary">
                            ¿Querés saber más sobre los cursos? Escribinos a
                            contacto@pilartecno.com
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SeccionContacto;