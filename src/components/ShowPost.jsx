import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
    PostSection,
    PostTitleDiv,
    ProfileDiv,
    ProfilePic,
    Profile,
    PointDiv,
    Point,
    PointPrice,
    PostContentDiv,
    PostContent,
    PostTag,
    PostBuyDiv,
    PostBuyInfo,
    PostBuy,
    BuyPre,
    BuyPreInfo,
    BuyPreNum,
    BuyPreDiv,
} from '../css/PostStyle';
import { GreenButton, } from '../css/styledComponenet';

function ShowPost({sellpost}) {
    const sell_XP = useParams();
    console.log(sell_XP);

    const ListLink = styled(Link)`
    text-decoration: none;
    `;

    return (
        <PostSection>
            <PostTitleDiv>
                <h2>{sellpost.title}</h2>
                <ProfileDiv>
                    <ProfilePic/>
                    <Profile>
                        <p>{sellpost.user}</p>
                        <h6>{sellpost.create_time} · 조회 {sellpost.hits} · 추천 {sellpost.recommend}</h6>
                    </Profile>
                </ProfileDiv>
                <PointDiv>
                    <Point>Point</Point>
                    <PointPrice>{sellpost.price}</PointPrice>
                </PointDiv>
                <hr/>
            </PostTitleDiv>
            <PostContentDiv>
                <PostContent>
                    {sellpost.text}<br/>
                </PostContent>
                <PostTag onClick={() => {alert("준비중입니다");}}>#LA</PostTag>
                <PostTag onClick={() => {alert("준비중입니다");}}>#경험</PostTag>
                <hr/>
            </PostContentDiv>
            <PostBuyDiv>
                <PostBuyInfo>이어지는 내용이 궁금하신가요? 이 글을 구매하고 더 흥미로운 이야기를 들어보세요!</PostBuyInfo>
                <PostBuy>
                    <BuyPreDiv>
                        <BuyPre>
                            <BuyPreInfo>텍스트</BuyPreInfo>
                            <BuyPreNum>7,000자</BuyPreNum>
                            <p>공백제외</p>
                        </BuyPre>
                        <BuyPre>
                            <BuyPreInfo>이미지</BuyPreInfo>
                            <BuyPreNum>10장</BuyPreNum>
                        </BuyPre>
                    </BuyPreDiv>
                    <GreenButton><ListLink to={`/selllist/${sell_XP}/detail`}>구매하기</ListLink></GreenButton>
                </PostBuy>
            </PostBuyDiv>
        </PostSection>
    )
}

export default ShowPost