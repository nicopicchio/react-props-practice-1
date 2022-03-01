import { reverse } from './helpers';

function NameReversed(props) {
	return (
		<p className="name-reversed">
			Also, {props.username} backwards is {reverse(props.username)}
		</p>
	);
}

export default NameReversed;
