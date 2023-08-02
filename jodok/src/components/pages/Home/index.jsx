import Recipes from '../../../json/recipes.json'
import Cards from '../../molecules/Cards';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default function Home() {
  const cardRecipes = Recipes.sort(() => { return Math.random() - 0.5 });

  return (

    <Container>
      <Row xs={1} md={2} lg={3} xl={4} className='g-4'>
        {cardRecipes.map((recipe) => (
          <Col key={recipe.id} bsPrefix='d-flex justify-content-around'>
            <Cards
              link={recipe.link}
              srcImage={recipe.img}
              title={recipe.title}
              description={recipe.description}
            />
          </Col>
        ))}
      </Row>
    </Container>

  )
}