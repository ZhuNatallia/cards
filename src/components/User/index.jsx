import React from 'react';
import s from './style.module.css';

export default function User({ avatar, name, lastname, age }) {
	return (
		<div className={s.card}>
			<img src={avatar} alt='avatar' />
			<p>{name}</p>
			<p>{lastname}</p>
			<p>{age}</p>
		</div>
	);
}
