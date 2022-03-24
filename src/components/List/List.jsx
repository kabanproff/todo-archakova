import React from 'react'
import classNames from 'classname'

import './List.scss'
import Budge from '../Budge/Budge'
import removeSvg from '../../assets/img/removeSvg.svg'
import axios from 'axios'

const List = ({ items, isRemovable, onClick, onClickItem, onRemove, activeItem }) => {
	// console.log(items)
	const removeList = (id) => {
		if (window.confirm('Вы действительнo хотите удалить элемент')) {

			axios.delete(`http://localhost:3003/lists/${id}`)
				.then(() => {
					onRemove(id)
				})
		}
	}
	// console.log('onclick in list ', onClick)
	return (
		<ul
			onClick={onClick}
			className={'list'}>
			{
				items.map((i, d) => {
					// console.log('i-----------', i)
					return <li
						key={i.id || d}
						onClick={onClickItem ? () => onClickItem(i) : null}
						className={classNames(i.className, {
							active: activeItem && activeItem.id === i.id
						})}
					>

						{i.icon
							? <i>{i.icon}</i>
							: <Budge color={i.color.name} />}

						<span>
							{i.name}{i.tasks && `  (${i.tasks.length})`}
						</span>
						{isRemovable &&
							<img
								src={removeSvg}
								onClick={() => removeList(i.id)}
								className={'list__remove-icon'}
								alt={'remove icon'} />}
					</li>
				})
			}

		</ul>
	)
}

export default List