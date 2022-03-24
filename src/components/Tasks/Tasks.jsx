import React from 'react'
import axios from 'axios'

import './Tasks.scss'
import editSvg from '../../assets/img/edit-pencil-svg.svg'
import { ReactComponent as CheckSvg } from '../../assets/img/check-svg.svg'
import AddTaskForm from './AddTaskForm'

const Tasks = ({ list, onEditTitle, onAddTask }) => {

	const editTitle = () => {
		const newTitle = window.prompt('Введите название заголовка', list.name)
		if (newTitle) {
			axios.patch(`http://localhost:3003/lists/${list.id}`, {
				name: newTitle
			})
				.then((rs) => {
					console.log(rs)
					onEditTitle(list.id, newTitle)


				})
				.catch((e) => alert('Не удалось обновить название списка, возможно нет соединения', e.message))

		}
	}

	return (
		<div className={'tasks'}>
			<h2 className={'tasks__title'}>{list.name}
				<img onClick={editTitle} src={editSvg} alt={'edit title'} />
			</h2>
			<div className={'tasks__items'}>
				{!list.tasks.length && <h2>Задачи отсутствуют</h2>}
				{
					list.tasks.map(task => (
						<div key={task.id} className={'tasks__items-row'}>
							<div className={'checkbox'}>
								<input id={task.id} type={'checkbox'} />
								<label htmlFor={task.id} ><CheckSvg /></label>
							</div>
							<input readOnly defaultValue={task.text} />
						</div>
					))
				}
				<AddTaskForm currentTask={list.id} onAddTask={onAddTask} />
			</div>
		</div>
	)
}

export default Tasks