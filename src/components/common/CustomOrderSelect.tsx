import styled from "styled-components";

function CustomOrderSelect({
	children,
	selectValue,
	selectOnChange,
}: {
	children: string;
	selectValue: string;
	selectOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
	return (
		<OrderSection>
			<OrderTitle>{children}</OrderTitle>
			<Select value={selectValue} onChange={selectOnChange}>
				{/*드롭다운 목록*/}
				<option value="desc">빠른 순</option>
				<option value="asc">느린 순</option>
			</Select>
		</OrderSection>
	);
}

export default CustomOrderSelect;

const OrderTitle = styled.h3`
	margin: 7px 20px auto 10px;
	font-size: 15px;
`;

const OrderSection = styled.section`
	background-color: rgb(249, 221, 198);
	width: 98%;
	height: 28px;
	display: flex;
	margin: 5px;
	padding: 10px;
	border-radius: 10px;
`;

const Select = styled.select`
	padding: 5px;
	border-radius: 10px;
`;
