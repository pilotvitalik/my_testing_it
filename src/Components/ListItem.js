import ItemAnswer from './ItemAnswer.js';
import React, { useState } from 'react';
import style from './listItem.module.css';

function ListItem(props){
	let mes;
	const answers = props.answers;

	const [answerRight, isAnswerRight] = useState('');
	const [questNumber, setQuestNum] = useState('');
	const [num, setNum] = useState();

	const checkAnswer = () => {
		if (num === props.rightAns){
			isAnswerRight(true);
			return false;
		}
		isAnswerRight(false);
	}

	const nextQuest = () => {
		const nextInd = props.dataInd + 1;
		props.changeItem(nextInd);
	}

	const changeNum = (event) => {
		setQuestNum(+event.target.value);
	}

	const updateQuest = (event) => {
		if (event.keyCode === 13){
			props.changeItem(questNumber - 1);
		}
	}

	const checkVal = (val) => {
		console.log(num);
	}

	switch(answerRight){
		case true:
			mes = <React.Fragment><p className={ style.trueAnswer }>Верно</p><button type='button' onClick={ nextQuest }>Следующий вопрос</button></React.Fragment>;
			break;
		case false:
			mes = <React.Fragment><p>Не верно</p><button type='button' onClick={ nextQuest }>Следующий вопрос</button></React.Fragment>;
			break;
		default:
			mes = '';
			break;
	}

	const listAnswer = answers.map((answer) => 
		<ItemAnswer
			key={ answer.id }
			val={ answer.answer }
			idQuest={ props.idQuest }
			idAnsw={ answer.id }
			func={ setNum }/>
	);

	return <div data-ind={ props.dataInd }>
		<input
			name='questNumber'
			type='text'
			value={ questNumber }
			onChange={ changeNum }
			onKeyDown={ updateQuest }/>
		<h3>Вопрос № { props.idQuest }. { props.question }</h3>
		<form>
			{ listAnswer }
		</form>
		<button
			type='button'
			onClick={ checkAnswer }>
			Проверить
		</button>
		{ mes }
	</div>
}

export default ListItem;