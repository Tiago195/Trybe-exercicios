import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import AllCards from './components/AllCards';
import SelectCard from './components/SelectCard';
import gerarIds from './idGenerator';

class App extends React.Component {
  constructor() {
    super();

    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCard = this.handleCard.bind(this);
    this.deletarCard = this.deletarCard.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      myDeck: [],
      exibitionCard: '',
      hasTrunfo: false,
      id: gerarIds(),
    };
  }

  handleInputs({ target }) {
    const value = target.type === 'checkbox' ? 'checked' : 'value';
    this.setState({ [target.name]: target[value] });
    this.setState(({ cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3 }) => {
      const array = [cardAttr1, cardAttr2, cardAttr3];
      const maxNumber = 90;
      const limitSum = 210;
      const result = array.every((e) => e >= 0 && e <= maxNumber);
      const sum = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= limitSum;
      if (cardName && cardDescription && cardImage && cardRare && result && sum) {
        return { isSaveButtonDisabled: false };
      }
      return { isSaveButtonDisabled: true };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(({ cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, myDeck, id }) => {
      const newObject = {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        isSaveButtonDisabled,
        id,
      };
      return { myDeck: [...myDeck, newObject] };
    });
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      id: gerarIds(),
    }));

    this.setState(({ myDeck }) => ({
      hasTrunfo: myDeck.some((event) => event.cardTrunfo === true),
    }));
  }

  handleCard({ target }) {
    this.setState(({ myDeck }) => ({
      exibitionCard: myDeck.filter((e) => {
        if (target.checked) {
          return e.cardTrunfo;
        }
        return e.cardName.includes(target.value)
      || e.cardRare === target.value;
      }),
    }));
  }

  deletarCard(parametro) {
    const time = 500;
    this.setState(({ myDeck }) => ({
      myDeck: myDeck.filter((ey) => ey.id !== Number(parametro.id)),
    }));
    setTimeout(this.setState(({ myDeck }) => ({
      hasTrunfo: myDeck.some((e) => e.cardTrunfo === true),
    })), time);
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      exibitionCard,
      myDeck,
    } = this.state;
    return (
      <>
        <div className="form-preview-container">
          <Form
            onInputChange={ this.handleInputs }
            onSaveButtonClick={ this.handleSubmit }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <SelectCard callback={ this.handleCard } />
        <AllCards
          cartas={ exibitionCard || myDeck }
          callback={ this.deletarCard }
        />
      </>
    );
  }
}

export default App;
