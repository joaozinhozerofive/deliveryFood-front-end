import styled from 'styled-components'

export const Container = styled.textarea`

    height: 15rem;

    background-color: ${({theme})=> theme.COLORS.BACKGROUND_600};
    color: ${({theme})=> theme.COLORS.WHITE};

    border: none;

    resize: none;

    border-radius: 0rem 0rem 2rem 2rem;

    padding: 1.6rem;

    &::placeholder{
        color: ${({theme})=> theme.COLORS.GRAY_300};
    }
`