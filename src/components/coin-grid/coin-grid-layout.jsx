import styled from 'styled-components';
import {
	subtleBoxShadow,
	lightBlueBackground,
	greenBoxShadow,
	redBoxShadow,
} from '../layout/layout';

export const CoinGridStyled = styled.div`
	display: grid;
	padding-top: 50px;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
`;

export const Tile = styled.div`
	${subtleBoxShadow}
	${lightBlueBackground}
    padding: 10px;
`;

export const SelectableTile = styled(Tile)`
	&:hover {
		cursor: pointer;
		${greenBoxShadow}
	}
`;

export const DeletableTile = styled(Tile)`
	&:hover {
		cursor: pointer;
		${redBoxShadow}
	}
`;

export const DisableTitle = styled(Tile)`
	box-shadow: 0px 0px 5px 1px #121d5b;
	background-color: #061a44;
	padding: 10px;
	pointer-events: none;
	opacity: 0.4;
`;
