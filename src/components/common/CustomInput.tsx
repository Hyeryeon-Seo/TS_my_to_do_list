import styled from "styled-components";

function CustomInput({
	children,
	name,
	type,
	value,
	onChange,
	placeholder,
}: {
	children: string;
	name: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}) {
	return (
		<InputBox>
			<InputText>{children}</InputText>
			<input
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</InputBox>
	);
}

export default CustomInput;

const InputBox = styled.div`
	display: flex;
`;

const InputText = styled.div`
	font-size: medium;
	font-weight: bold;
	margin-right: 15px;
	margin-top: 25px;
`;
