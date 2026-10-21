import { Card } from "react-bootstrap";

interface CursoCardProps {
    titulo: string;
    descripcion: string;
}

const CursoCard = ({ titulo, descripcion }: CursoCardProps) => (
    <Card className="h-100 shadow-sm">
        <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>{descripcion}</Card.Text>
        </Card.Body>
    </Card>
);
export default CursoCard;