import React, { useEffect, useState } from 'react'
import List from '../List/List'
import Budge from '../Budge/Budge'
import axios from 'axios'

import './AddList.scss'
import closeSvg from '../../assets/img/closeSvg.svg'

const AddList = ({ colors, addLists }) => {
	// console.log(colors)
	const [visiblePupup, setVisiblePopup] = useState(false)
	const [selectedColor, selectColor] = useState(1)
	const [isLoading, setIsLoading] = useState(false)
	const [inputValue, setInputValue] = useState('')

	useEffect(() => {
		// console.log(colors)
		Array.isArray(colors) && selectColor(colors[0].id)
	}, [colors])

	const onClose = () => {
		setVisiblePopup(false)
		setInputValue('')
		selectColor(colors[0].id)
	}

	const addList = () => {
		if (!inputValue) {
			alert('Введите название')
			return
		}
		setIsLoading(true)
		let newItem = {
			name: inputValue,
			colorId: selectedColor,
		}
		axios.post('http://localhost:3003/lists', newItem)
			.then(({ data }) => {
				const colorName = colors.find(i => selectedColor === i.id).name

				const newList = {
					...data,
					color: {
						id: selectedColor,
						name: colorName
					}
				}
				console.log(data)
				addLists(newList)
				onClose()
			})
			.finally(() => {
				setIsLoading(false)

			})

	}

	return (
		<div className='add-list'>
			<List
				onClick={() => setVisiblePopup(true)}
				items={[
					{
						className: 'list__add-button',
						icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						</svg>,
						name: 'Добавить список'
					}
				]}
			/>
			{
				visiblePupup &&
				<div className={'add-list__popup'}>
					<img
						src={closeSvg}
						alt="close"
						onClick={onClose}
						className={'add-list__popup-close-btn'} />
					<input
						className={'field'}
						type="text"
						onChange={e => setInputValue(e.target.value)}
						value={inputValue}
						placeholder={'Название задачи'} />
					<div
						className={'add-list__popup-colors'}>
						{
							colors.map(({ id, name }) => <Budge
								key={id}
								onClick={() => selectColor(id)}
								color={name}
								className={selectedColor === id && 'active'}
							/>)
						}
					</div>

					<button
						className={'button'}
						onClick={addList}
					> {isLoading ? 'Добавление...' : 'Добавить'}</button>
				</div>
			}
		</div>
	)
}

export default AddList