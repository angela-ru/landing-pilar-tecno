import { Container, Row, Col } from "react-bootstrap";
import BotonColor from "../BotonColor/BotonColor";

const SeccionHero = () => {
    return (
        <section id="inicio" className="py-5 bg-light">
            <Container className="py-5">
                <Row className="align-items-center g-4">
                    <Col md={6}>
                        <h1 className="display-5 fw-bold">Pilar Tecno</h1>
                        <p className="lead text-secondary">
                            Bienvenidos al curso de React.
                        </p>
                        <BotonColor texto="Cambiar color" />
                    </Col>
                    <Col md={6}>
                        <div
                            className="rounded-4 bg-white shadow-sm d-flex align-items-center justify-content-center"
                            style={{ height: "220px" }}
                        >
                            <span className="text-secondary">
                                {/* Acá podés ubicar la img del curso */}
                                Próximamente: Cursos
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SeccionHero;