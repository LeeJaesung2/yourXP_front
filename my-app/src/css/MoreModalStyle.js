import styled from "styled-components";

export const MoreModalDiv = styled.div`
    padding: 5px 0px;
    width: 85px;
    height: 50px;
    border: 1px solid #bababa;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    hr {
        background-color: #BABABA;
        height: 0.5px;
        margin: 0px;
        border: none;
    }
`;

export const MoreModal = styled.button`
    display: flex;
    border: none;
    background-color: white;
    justify-content: space-evenly;
`;

export const Text = styled.span`
    font-size: 11px;
    color: #767676;    
`;
export const Icon = styled.div`
    width: 15px;
    height: 15px;
    margin-left: 3px;
`;
