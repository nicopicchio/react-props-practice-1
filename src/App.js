import { useState } from 'react';

import Title from './Title'
import NameLength from './NameLength'
import NameReversed from './NameReversed'
import './styles.css';

export default function App() {
	const [name, setName] = useState('Nico');

	return (
		<div className="app">
			<Title username={name} />
			<NameLength username={name} />
			<NameReversed username={name} />
		</div>
	);
}
