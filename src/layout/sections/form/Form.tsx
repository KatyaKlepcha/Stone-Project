import React from 'react';
import BgFormImg from '../../../components/assets/images/BgFormImg.png'
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";


export const Form = () => {
    return (
        <StyledFormWrapper>
            <Container>
                <FlexWrapper>
                    <BgFormImage/>
                    <BgGradient/>
                    <FormBlock><Title>Остались вопросы? <div>свяжитесь с нами, <span>мы вам поможем!</span></div>
                    </Title>
                        <Text>Заполните форму и мы свяжемся с <span>Вами в ближайшее время</span></Text>
                        <StyledForm>
                            <InputWrapper>
                                <input type={'text'} placeholder={'Ваше имя'} name={'userName'}/>
                                <input type={'text'} placeholder={'Ваш телефон'} name={'telephone'}/>
                                <input type={'submit'} value={'Отправить'}/>
                            </InputWrapper>
                            <label><input type={'checkbox'}/>Согласен на обработку <a
                                onClick={(event) => event.preventDefault()}>персональных данных</a></label>
                        </StyledForm>
                    </FormBlock>
                </FlexWrapper>
            </Container>
        </StyledFormWrapper>
    );
};

const StyledFormWrapper = styled.section`
  position: relative;

  ${Container} {
    padding: 70px 0;

    @media screen and (max-width: 1330px) {
      padding: 50px 20px;
    }
  }
`

const BgFormImage = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${
          BgFormImg
  });
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const BgGradient = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(89.82deg, rgba(0, 0, 0, 0.93) 40.01%, rgba(0, 0, 0, 0.7) 66.12%, rgba(255, 255, 255, 0) 87.98%);
`

const FormBlock = styled.div`
  position: relative;

  @media ${theme.media.tablet} {
    width: 100%;
  }
`

const Title = styled.h4`
  ${font({lineHeight: '32px', weight: 500, Fmax: 28, Fmin: 24})}
  text-transform: uppercase;

  div {
    margin-top: 10px;
  }

  @media ${theme.media.tablet} {
    line-height: 28px;

    div > span {
      display: block;
    }
  }
`

const Text = styled.p`
  ${font({lineHeight: '20px', Fmax: 18, Fmin: 17})}
  margin: 15px 0 30px;

  @media ${theme.media.tablet} {
    line-height: 18px;

    span {
      display: block;
    }
  }
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    border: 1px solid rgba(243, 243, 243, 0.7);
    color: ${theme.colors.font};

    &::placeholder {
      color: rgba(243, 243, 243, 1);
      font-size: 14px;
      line-height: 18px;
    }

    &:focus-visible {
      outline: 1px solid rgba(243, 243, 243, 0.7);
    }
  }

  input[type='text'] {
    padding: 16px 0 15px 20px;
  }

  input[type='checkbox'] {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }

  input[type='submit'] {
    padding: 15px 80px 17px;
    background-color: ${theme.colors.font};
    color: rgba(0, 0, 0, 1);

    &::placeholder {
      font-size: 15px;
      line-height: 18px;
    }
  }

  label {
    ${font({lineHeight: '16px', Fmax: 14, Fmin: 13, color: 'rgba(243, 243, 243, 1)'})}
    a {
      border-bottom: 1px solid rgba(243, 243, 243, 1)
    }
  ;
  }

  @media ${theme.media.tablet} {
    line-height: 15px;
  }
}
`

const InputWrapper = styled.div`
  display: flex;
  gap: 20px;

  input {
    background: transparent;
  }

  @media ${theme.media.tablet} {
    flex-direction: column;
  }
`
