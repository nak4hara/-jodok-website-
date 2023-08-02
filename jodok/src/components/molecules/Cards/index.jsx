import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

export default function Cards({ link, srcImage, title, description }) {
    return (
        <Card style={{ width: '27rem' }}>
            <Link
                to={`/recipe/${link}`}
                style={{ color: 'inherit', textDecoration: 'none' }}
            >
                <Card.Img variant="top"
                    src={srcImage} />
                <Card.Body bsPrefix='card-body m-3' >
                    <Card.Title style={{fontSize: '1.7rem'}}>{title}</Card.Title>
                    <Card.Text style={{fontSize: '1.3rem'}}>
                        {description}
                    </Card.Text>
                    <Button variant='dark' style={{fontSize: '1.2rem', padding: '0.7rem'}}>View Recipe</Button>
                </Card.Body>
            </Link>
        </Card>
    )
}