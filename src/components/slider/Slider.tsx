// import React, {Children, cloneElement, FC, ReactElement, useEffect, useState} from 'react';
// import styled from 'styled-components';
// import {Button} from "../button/Button";
//
// // Стилизованные компоненты
// const SliderContainer = styled.div`
//   width: 100%;
//   overflow: hidden;
// `;
//
// type SliderPropsType = {
//     children: React.ReactNode
// }
//
// const PAGE_WIDTH = 450
//
// export const Slider: FC<SliderPropsType> = ({ children }) => {
//     // Define the state with the correct type using ReactElement[]
//     const [pages, setPages] = useState<ReactElement[]>([]);
//     const [offset, setOffset] = useState(0);
//
//     console.log('Children', Children)
//
//     useEffect(() => {
//         // Use Children.map to transform the children and filter out null values
//         Children.toArray.length !==0 ? setPages(
//             Children?.map(children, (child) => {
//                 if (React.isValidElement(child)) {
//                     return cloneElement(child, {
//                         style: {
//                             height: '100%',
//                             minWidth: `${PAGE_WIDTH}px`,
//                             maxWidth: `${PAGE_WIDTH}px`,
//                         },
//                     });
//                 }
//                 : return null;
//             }).filter((child)=> child !== null) as ReactElement[]
//         );
//     }, [children]);
//
//     const nextSlide = (): void => {
//         setOffset(currentOffset => currentOffset - PAGE_WIDTH);
//     };
//
//     const prevSlide = (): void => {
//         setOffset(currentOffset => currentOffset + PAGE_WIDTH);
//     };
//
//     return (
//         <SliderContainer>
//             <div>
//                 {/* Fix the inline style for transform to use template literals correctly */}
//                 <div style={{ transform: `translateX(${offset}px)`}}>{pages}</div>
//             </div>
//             <WrapperBtn>
//                 <SliderBtn onClick={prevSlide} name={'Prev'}/>
//                 <SliderBtn onClick={nextSlide} name={'Next'}/>
//             </WrapperBtn>
//         </SliderContainer>
//     );
// };
//
// // Styled components for WrapperBtn, SliderBtn
// // ...
//
//
// const WrapperBtn = styled.div`
//   position: absolute;
//   top: 510px;
//   left: 110px;
// `
//
// const SliderBtn = styled(Button)`
//   width: 45px;
//   height: 45px;
// `


import React, {useState} from 'react';
import styled from "styled-components";
import Countertops from '../assets/images/countertops.png'
import WindowSills from '../assets/images/windowSills.png'
import Sink from '../assets/images/sink.png'
import {Icon} from "../icon/Icon";

interface Slide {
    id: number;
    image: string;
    caption: string;
}

export const Slider: React.FC = () => {
    const slides: Slide[] = [
        {
            id: 1,
            image: `${Countertops}`,
            caption: 'Slide 1',
        },
        {
            id: 2,
            image: `${WindowSills}`,
            caption: 'Slide 2',
        },
        {
            id: 3,
            image: `${Sink}`,
            caption: 'Slide 3',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    console.log('slides[currentSlide].image', slides[currentSlide].image)

    return (
        <StyledSlider>
            <ContainerBtn>
                <Button onClick={goToPrevSlide}><Icon iconId='arrow' width={'16.67'} height={'16.67'}/></Button>
                <Button onClick={goToNextSlide}><RightIcon iconId='arrow' width={'16.67'} height={'16.67'}/></Button>
            </ContainerBtn>
            <ImageContainer>
                <img src={slides[currentSlide].image} alt={slides[currentSlide].caption}/>
                <div className="caption">{slides[currentSlide].caption}</div>
            </ImageContainer>
        </StyledSlider>
    );
};


const StyledSlider = styled.div`
  position: absolute;
  top: 0;
`

const ContainerBtn = styled.div`
  display: flex;
  position: absolute;
  top: 525px;
  left: 110px;
`

const Button = styled.button`
  cursor: pointer;
  width: 45px;
  height: 45px;
  border: 0.5px solid rgba(255, 255, 255, 1);
  background-color: transparent;

  &:last-child {
    margin-left: 7px;

    svg {
      transform: rotate(180deg);
    }
  }
  
  &:active {
    background-color: rgba(40, 85, 63, 1);
    border: none;
    box-sizing: border-box;
  }
`

const ImageContainer = styled.div`
  //position: absolute;
  //top: 0;
  //right: 0;
`

const RightIcon = styled(Icon)`
  svg {
    transform: rotate(180deg);
  }
`
