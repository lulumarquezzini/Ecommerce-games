import React, { Component } from 'react'
import axios from 'axios'
import "rbx/index.css";
import cart from './cart-icon.svg'
import {Container, Title, Card, Column, Select, Image, Icon} from "rbx"

class HomePage extends Component {
 
    constructor (props) {
        super(props)
        this.state = {
            games: []
        }
    }

    componentDidMount () {
        axios.get('products.json').then(response => {
            this.setState({
                games: response.data
            });
        })
    }


    render ()  {
      const games = this.state.games
      return (
          <Container>
            <Column.Group>
                <Column size="9">
                    <Column.Group>
                        <Column size="9">
                            <Title subtitle size="2" className="has-text-grey-darker has-text-weight-semibold">Games</Title>
                        </Column>
                        <Column size="3">
                            <Select.Container>
                                <Select>
                                    <Select.Option>Mais populares</Select.Option>
                                    <Select.Option>Mais baratos</Select.Option>
                                    <Select.Option>De A-Z</Select.Option>
                                </Select>
                            </Select.Container>
                        </Column>
                    </Column.Group>
                    <Column.Group multiline>
                        {games.map((game) => (
                            <Column size="one-third">
                                <Card className="has-background-grey-lighter">
                                        <Card.Content className="has-text-centered">
                                            <Image src={"./assets/" + game.image} alt={game.name}/>
                                        </Card.Content>
                                </Card>
                                <Column>
                                    <p className="has-text-centered has-text-grey">{game.name}</p>
                                    <p className="has-text-centered has-text-link">{game.price}</p>
                                </Column>
                            </Column>
                        ))
                        }
                    </Column.Group>
                </Column>
                <Column>
                    <Card>
                        <Card.Content>
                            <Title size="5">Carrinho</Title>
                            <Column size="6" offset="3">
                                <Image.Container>
                                    <Image src={cart} />
                                </Image.Container>
                            </Column>
                            <p className="has-text-centered has-text-grey">Até o momento,</p>
                            <p className="has-text-centered has-text-grey">o seu carrinho está vazio.</p>
                        </Card.Content>
                    </Card>
                </Column>
            </Column.Group>
        </Container>
      )
        
    }
}
 
export default HomePage