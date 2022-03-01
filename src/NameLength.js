function NameLength(props) {
	return (
		<p className="name-length">
			Did you know that {props.username} is {props.username.length} characters long?!
		</p>
	);
}

export default NameLength;
