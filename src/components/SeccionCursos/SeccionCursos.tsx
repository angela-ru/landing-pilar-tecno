import { Container, Row, Col } from "react-bootstrap";
import CursoCard from "../CursoCard/CursoCard";

const cursos = [
    { id: 1, titulo: "React", descripcion: "Componentes, hooks y más." },
    { id: 2, titulo: "TypeScript", descripcion: "Tipado para tu código." },
];

const SeccionCursos = () => {
    return (
        <section id="cursos" className="py-5">
            <Container>
                <h2 className="mb-4">Cursos</h2>
                <Row className="g-4">
                    {cursos.map((curso) => (
                        <Col md={4} key={curso.id}>
                            <CursoCard
                                titulo={curso.titulo}
                                descripcion={curso.descripcion}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default SeccionCursos;