import React from 'react'
import classNames from 'classname'

import './List.scss'
import Budge from '../Budge/Budge'

const List = ({ items, isRemovable, onClick }) => {

	return (
		<ul
			onClick={onClick}
			className={'list'}>
			{
				items.map((i, d) => {
					// console.log(i, i.name, i.icon)
					return <li key={d} className={classNames(i.className, { 'active': i.active })}>

						{i.icon
							? <i>{i.icon}</i>
							: <Budge color={i.color} />}

						<span>{i.name}</span>
					</li>
				})
			}

		</ul>
	)
}

export default List