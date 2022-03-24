import axios from 'axios'
import React, { useState } from 'react'

import addedSvg from '../../assets/img/added.svg'

const AddTaskForm = ({ currentTask, onAddTask, visibleTasksZero }) => {

	const [isVisible, setVisible] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [inputValue, setInputValue] = useState('')

	const toggleFomVisible = () => {
		setInputValue('')
		setVisible(!isVisible)
		visibleTasksZero(isVisible)
	}
	const addTask = () => {
		if (!inputValue) {
			alert('Введите название')
			return
		}

		setIsLoading(true)
		const newTask = {
			listId: currentTask,
			text: inputValue,
			completed: false
		}

		axios.post('http://localhost:3003/tasks', newTask)
			.then(({ data }) => {
				// console.log(data)
				setIsLoading(false)
				onAddTask(currentTask, data)
				toggleFomVisible()
			})
	}

	return (
		<div className={'tasks__form'}>
			{!isVisible && <div
				className={'tasks__form-new'}
				onClick={toggleFomVisible}
			>
				<img src={addedSvg} alt={'added task'} />
				<span>Новое Задание</span>
			</div>}
			{isVisible && <div className={'tasks__add'}>
				<input
					className={'field'}
					type="text"
					onChange={e => setInputValue(e.target.value)}
					value={inputValue}
					placeholder={'Текст задачи'}
				/>

				<button
					className={'button'}
					onClick={addTask}
				> {isLoading ? 'Добавление...' : 'Добавить задачу'}</button>

				<button
					className={'button button--grey'}
					onClick={toggleFomVisible}
				> Отмена</button>
			</div>}

		</div>

	)
}

export default AddTaskForm