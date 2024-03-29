import styled from "styled-components";

function CustomInput({
	children,
	name,
	type,
	value,
	onChange,
	placeholder,
	$style,
}: {
	children: string;
	name: string;
	type: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	$style?: string;
}) {
	return (
		<InputBox>
			<InputText>{children}</InputText>
			<Input
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				$style={$style}
			/>
		</InputBox>
	);
}

export default CustomInput;

export interface InputStyleProps {
	$style?: string;
}

const InputBox = styled.div`
	display: flex;
`;

const InputText = styled.div`
	font-size: medium;
	font-weight: bold;
	margin-right: 15px;
	margin-top: 25px;
`;

const Input = styled.input<InputStyleProps>`
	height: 30px;
	font-size: 15px;
	margin-top: 15px;
	border-radius: 5px;
	border: 0px;
	width: ${({ $style }) => ($style === "content" ? "650px" : "")};
`;
