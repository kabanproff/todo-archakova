import React from 'react'
import classNames from 'classname'

import './List.scss'
import Budge from '../Budge/Budge'
import removeSvg from '../../assets/img/removeSvg.svg'

const List = ({ items, isRemovable, onClick, onRemove }) => {
	console.log(items)
	return (
		<ul
			onClick={onClick}
			className={'list'}>
			{
				items.map((i, d) => {
					// console.log(i, i.name, i.icon)
					return <li key={i.id || d} className={classNames(i.className, { 'active': i.active })}>

						{i.icon
							? <i>{i.icon}</i>
							: <Budge color={i.color} />}

						<span>{i.name}</span>
						{isRemovable &&
							<img
								src={removeSvg}
								onClick={() => onRemove(i.id)}
								className={'list__remove-icon'}
								alt={'remove icon'} />}
					</li>
				})
			}

		</ul>
	)
}

export default List