import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	width: 60%;
	justify-content: center;
	align-items: center;
	gap: 32px;
`;

const StyledLabel = styled.label`
	font-size: ${(props) => props.theme.label.fontSize};
`;

const StyledInput = styled.input`
	background: ${({ theme: { searchInput } }) => searchInput.background};
	color: ${(props) => props.theme.searchInput.color};
	border: ${(props) => props.theme.searchInput.border};
	height: ${(props) => props.theme.searchInput.height};
`;

const StyledButton = styled.button`
	border: ${(props) => props.theme.button.border};
	background: ${(props) => props.theme.button.background};
	color: ${(props) => props.theme.button.color};
	width: ${(props) => props.theme.button.width};
	height: ${(props) => props.theme.button.minHeight};
`;

const Search = () => {
	return (
		<StyledDiv>
			<StyledLabel htmlFor="search-books">Search Books</StyledLabel>
			<StyledInput
				type="search"
				id="search-books"
				placeholder="Type book name to search"
			></StyledInput>
			<StyledButton type="submit">Search</StyledButton>
		</StyledDiv>
	);
};

export default Search;
