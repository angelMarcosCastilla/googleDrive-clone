import { styled } from '@mui/system';
import React, { useState } from 'react';

export const AcordionStyled = styled('div')(({ theme }) => ({}));

export const AcordionItem = styled('div')(({ theme }) => ({}));


function Acordion() {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};
	return (
		<AcordionStyled>
			<button onClick={handleClick}>{active ? 'Fechar' : 'Abrir'}</button>
			<AcordionItem>

      </AcordionItem>
		</AcordionStyled>
	);
}

Acordion.Item = AcordionItem;

export default Acordion;
