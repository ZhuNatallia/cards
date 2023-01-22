import React from 'react';
import User from '../User';
import s from './style.module.css';

export default function UserContainer() {
	const users = [
		{
			id: 1,
			avatar:
				'https://cdn.pixabay.com/photo/2014/06/18/13/44/emotions-371238__340.jpg',
			name: 'Ivan',
			lastname: 'Ivanov',
			age: 30,
		},
		{
			id: 2,
			avatar:
				'https://cdn.pixabay.com/photo/2017/08/02/23/58/people-2574170__340.jpg',
			name: 'Sasha',
			lastname: 'Petrov',
			age: 3,
		},
		{
			id: 3,
			avatar:
				'https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131__340.jpg',
			name: 'Lena',
			lastname: 'Mülller',
			age: 25,
		},
		{
			id: 4,
			avatar:
				'https://cdn.pixabay.com/photo/2014/08/08/20/51/hunger-413685__340.jpg',
			name: 'Anton',
			lastname: 'Sidorov',
			age: 38,
		},
		{
			id: 5,
			avatar:
				'https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697__340.jpg',
			name: 'David',
			lastname: 'Smidt',
			age: 46,
		},
		{
			id: 6,
			avatar:
				'https://cdn.pixabay.com/photo/2017/08/06/00/44/people-2587179__340.jpg',
			name: 'Sonia',
			lastname: 'Sanny',
			age: 32,
		},
	];
	return (
		<div className={s.card}>
			{users.map((user) => (
				<User key={user.id} {...user} />
			))}
		</div>
	);
}
