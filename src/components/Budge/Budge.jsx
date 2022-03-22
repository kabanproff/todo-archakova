import React from 'react'
import classNames from 'classname'
import './Budge.scss'

const Budge = ({ color, onClick, className }) => (
	<i onClick={onClick} className={classNames(`badge`, { [`badge--${color}`]: color }, className)} />
)

export default Budge