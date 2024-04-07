import React, {useState} from 'react';
import styled from '@emotion/styled';
import profile from './images/profile.png';
import {cards} from './lang';
import BoldedText from '../../common/BoldedText';

const Card = styled.button`
    border: 1px solid ${({theme: {color}})=>color?.gray[400]};
    height: 300px;
    width: 216px;
    position: relative;
    transition: all 0.2s ease-out;
    & div {
        pointer-events: none;
    }
`;

const TitleContainer = styled.div`
    transition: all 0.2s ease-out;
`;

const DescriptionContainer = styled.div`
    transition: all 0.2s ease-out;
    opacity: 0;
`;

/**
 * @return {Node} the project collection view
 */
export default function About() {
  const [displayedCard, setDisplayedCard] = useState(null);

  const onCardClick = (e) => {
    const [...cardList] = document.querySelectorAll('.card');
    const cardExceptThis = cardList.filter(({id: cardId})=> cardId!==e.target.id);

    const currentCard = document.querySelector(`#${e.target.id}`);
    const cardTitleList = document.querySelectorAll(`#card-title`);

    if (displayedCard) {
      currentCard.style=null;
      cardExceptThis.forEach((card)=>{
        card.style = null;
      });
      cardTitleList.forEach((title)=>{
        title.style = null;
      });

      setDisplayedCard(null);
    } else {
      currentCard.style.opacity = 1;
      currentCard.style.width = '1200px';

      cardExceptThis.forEach((card)=>{
        card.style.opacity = 0;
        card.style.width = 0;
      });

      cardTitleList.forEach((card)=>{
        card.style.opacity = 0;
      });

      setTimeout(()=>{
        setDisplayedCard(e.target.id);
      }, 200);

      setTimeout(()=>{
        const list = document.querySelectorAll('div#card-container div');
        list.forEach((copy)=>{
          copy.style.opacity=1;
        });
      }, 250);
    }
  };

  return (
    <div
      className="flex flex-column align-items-center justify-center full-vh"
      style={{overflow: 'hidden'}}
    >
      <img src={profile} style={{margin: '0 auto', width: 180}}/>
      <h1 style={{marginTop: 20}}>Welcome to my about page.</h1>
      <div
        className="flex justify-between"
        style={{width: 1200, marginTop: 50}}
        id="card-container"
      >
        {cards.map(({id, title, subtitle, img, description, bolded, italics})=>{
          return (
            <Card
              id={`card-${id}`}
              key={description}
              className="flex flex-column align-items-center align-self-center justify-center card"
              onClick={onCardClick}
            >
              <div style={{padding: 20, minHeight: 50}}>
                {displayedCard ?
                    <DescriptionContainer id={`description-container-${id}`}>
                      <i
                        style={{
                          marginRight: 10,
                          position: 'absolute',
                          top: 20,
                          right: 10,
                        }}
                        className="fa-regular fa-x"
                      />
                      <BoldedText
                        bolded={bolded}
                        italics={italics}
                        style={{
                          maxWidth: 800,
                          textAlign: 'left',
                          whiteSpace: 'pre-wrap',
                        }}
                        message={description}
                      />
                    </DescriptionContainer> :
                    <TitleContainer id="card-title">
                      <p style={{textAlign: 'center', width: 160}}><strong>{title}</strong></p>
                      {subtitle && <p style={{textAlign: 'center'}}>{subtitle}</p>}
                    </TitleContainer>
                }
                {img &&
                    <img
                      src={img}
                      style={{
                        width: 216,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1,
                      }}
                    />
                }
              </div>
            </Card>
          );
        })}
      </div>
      <div style={{height: 160}}/>
    </div>
  );
}
