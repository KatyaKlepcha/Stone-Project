import React from 'react';
import BgFormImg from '../../../components/assets/images/BgFormImg.png'
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme.styled";


export const Form = () => {
    return (
        <StyledFormWrapper>
            <Container>
                <FlexWrapper>
                    <BgFormImage/>
                    <BgGradient/>
                    <Cont><Title>Остались вопросы? <div>свяжитесь с нами, мы вам поможем!</div></Title>
                        <Text>Заполните форму и мы свяжемся с Вами в ближайшее время</Text>
                        <StyledForm>
                            <InputWrapper>
                                <input type={'text'} placeholder={'Ваше имя'} name={'userName'}/>
                                <input type={'text'} placeholder={'Ваш телефон'} name={'telephone'}/>
                                <input type={'submit'} value={'Отправить'}/>
                            </InputWrapper>
                            <label> <input type={'checkbox'}/>Согласен на обработку персональных данных</label>
                        </StyledForm>
                    </Cont>
                </FlexWrapper>
            </Container>
        </StyledFormWrapper>
    );
};

const StyledFormWrapper = styled.section`
  position: relative;

  ${Container} {
    padding: 70px 0;
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

const Cont = styled.div`
  position: relative;
`

const Title = styled.h4`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
`

const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  margin: 15px 0 30px;
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

  }
`

const InputWrapper = styled.div`
  display: flex;
  gap: 20px;

  input {
    background: transparent;
  }
`
