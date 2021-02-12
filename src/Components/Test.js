
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem.js';
import ShowNumQuest from './ShowNumQuest.js';
import style from './test.module.css';

class Test extends Component{
	constructor(props){
		super(props);
		this.state = {
			quest: this.props.questions,
		}
		this.defStatus = this.defStatus.bind(this);
	}

	componentDidMount(){
		if (this.state.quest.[this.state.quest.length - 1] === 'commonArray'){
			this.state.quest.pop();
		}
	}

	defStatus(status, ind){
		const arrQuest = this.state.quest;
		const tempArr = arrQuest.map((item, index) => {
			if (index === ind) {
				item.status_answer = status;
				return item;
			}
			return item;
		});
		this.setState({
			quest: tempArr,
		});
	}

	render(){
		console.log(this.props.startQuest);
		console.log(this.props.startInd);
		let displayEl;
		const testDone = <h2>Тест пройден</h2>;

		const arrQuest = this.state.quest;

		const listItems = arrQuest.map((item, index) => 
			index === this.props.startInd ?
			<ListItem 
				dataInd={ index }
				question={item.name_quest}
				key={ item.id_quest }
				title={ item.name_quest }
				answers={ item.answers }
				rightAns={ item.rightAnswer }
				idQuest={ item.id_quest }
				changeItem={ this.props.changeItem }
				statusAnswer={ this.defStatus }
				titleQuest={ item.vis_name_test }/>
			: ''
		);

		this.props.startInd !== this.state.quest.length ? displayEl = listItems : displayEl = testDone;

		return(
			<div className={ style.common }>
				<ShowNumQuest quest={ this.state.quest } startQuest={ this.props.startInd }/>
				{ displayEl }
				<Link to='/'>Главная</Link>
			</div>
		);
	}
}

export default Test;