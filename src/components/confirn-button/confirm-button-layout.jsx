import styled from 'styled-components';
import { fontSize1, greenBoxShadow, color3 } from '../layout/layout';

export const ConfirmButtonStyled = styled.div`
	cursor: pointer;
	margin: 20px;
	color: ${color3};
	${fontSize1}
	padding: 5px;
	&:hover {
		${greenBoxShadow}
	}
`;

export const CenterDiv = styled.div`
	display: grid;
	justify-content: center;
`;
