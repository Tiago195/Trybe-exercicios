import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Headers';
import { getQuestions, getToken } from '../../helpers';
import Questions from '../../components/Questions';
import { setToken } from '../../action';

class index extends Component {
  constructor(props) {
    super(props);

    this.requestApi = this.requestApi.bind(this);

    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    this.requestApi();
  }

  async requestApi() {
    const { token, sendToToken } = this.props;
    const data = await getQuestions(token); // pegando as perguntas
    if (!data.length) { // se o token for falso, executa esse bloco de codigo do if
      sendToToken(await getToken()); // envia um novo token
      this.requestApi(); // executa a funçao dnv com o novo token
    }
    this.setState({ questions: data });
  }

  render() {
    const { questions } = this.state;
    const { indexQuestion, history } = this.props;

    return (
      <div>
        <Header />
        {console.log(questions, indexQuestion)}
        {questions.length && (
          <Questions
            category={ questions[indexQuestion].category }
            question={ questions[indexQuestion].question }
            answer={ [...questions[indexQuestion].incorrect_answers,
              questions[indexQuestion].correct_answer] }
            difficulty={ questions[indexQuestion].difficulty }
            history={ history }
          />
        )}
      </div>
    );
  }
}

index.propTypes = {
  sendToToken: PropTypes.func,
  token: PropTypes.string,

}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  sendToToken: (token) => dispatch(setToken(token)),
});

const mapStateToProps = ({ token, player }) => ({
  token,
  indexQuestion: player.indexQuestion,
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
