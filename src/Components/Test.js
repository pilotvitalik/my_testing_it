import { Link } from 'react-router-dom';
import ListItem from './ListItem.js';
import ShowNumQuest from './ShowNumQuest.js';
import style from './test.module.css';

function Test(props){
	let displayEl;
	const quest = props.questions;

	if (quest.[quest.length - 1] === 'commonArray'){
		quest.pop();
	}

	const defStatus = (status, ind) => {
		quest[ind].status_answer = status;
	}

	const listItems = quest.map((item, index) => 
		index === props.startInd ?
		<ListItem 
			dataInd={ index }
			question={item.name_quest}
			key={ item.id_quest }
			title={ item.name_quest }
			answers={ item.answers }
			rightAns={ item.rightAnswer }
			idQuest={ item.id_quest }
			changeItem={ props.changeItem }
			statusAnswer={ defStatus }
			titleQuest={ item.vis_name_test }/>
		: ''
	);

	const testDone = <h2>Тест пройден</h2>;

	props.startInd !== quest.length ? displayEl = listItems : displayEl = testDone;

	return (
		<div className={ style.common }>
			<ShowNumQuest quest={ quest } startQuest={ props.startQuest }/>
			{ displayEl }
			<button
				type='button'>
				<Link to='/'>Главная</Link>
			</button>
		</div>
	);
}

export default Test;