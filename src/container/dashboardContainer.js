import React from "react";
import styled from "styled-components";
import Search from "../components/search";

const StyledMain = styled.main`
	height: 100%;
	width: 100%;
`;

const StyledHeader = styled.header`
	width: 100%;
	text-align: center;
`;

const dashboardContainer = () => {
	return (
		<StyledMain>
			<StyledHeader>
				<h1> Kitab Online</h1>
				<Search />
			</StyledHeader>
		</StyledMain>
	);
};

export default dashboardContainer;
