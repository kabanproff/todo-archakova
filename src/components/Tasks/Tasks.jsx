import React from 'react'

import './Tasks.scss'
import editSvg from '../../assets/img/edit-pencil-svg.svg'
import { ReactComponent as CheckSvg } from '../../assets/img/check-svg.svg'

const Tasks = () => {
	return (
		<div className={'tasks'}>
			<h2 className={'tasks__title'}>Фронтенд
				<img src={editSvg} alt={'edit title'} />
			</h2>
			<div className={'tasks__items'}>
				<div className={'tasks__items-row'}>
					<div className={'checkbox'}>
						<input id={'check'} type={'checkbox'} />
						<label htmlFor={'check'} ><CheckSvg /></label>
					</div>
					<input value={'ReactJS Hooks (useState, useReducer, useEffect и т.д.)'} />
				</div>

			</div>
		</div>
	)
}

export default Tasks