import React, { useState } from 'react'
import List from '../List/List'
import Budge from '../Budge/Budge'

import './AddList.scss'
import closeSvg from '../../assets/img/closeSvg.svg'

const AddList = ({ colors }) => {

	// console.log(p)
	let [visiblePupup, setVisiblePopup] = useState(false)
	let [selectedColor, selectColor] = useState(colors[0].id)
	console.log(selectedColor)
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
					<img src={closeSvg}
						alt="close"
						onClick={() => setVisiblePopup(false)}
						className={'add-list__popup-close-btn'} />
					<input className={'field'} type="text" placeholder={'Название папки'} />
					<div className={'add-list__popup-colors'}>
						{
							colors.map(({ id, hex, name }) => <Budge
								key={id}
								onClick={() => selectColor(id)}
								color={name}
								className={selectedColor === id && 'active'}
							/>)
						}
					</div>

					<button className={'button'}>Добавить</button>
				</div>
			}
		</div>
	)
}

export default AddList