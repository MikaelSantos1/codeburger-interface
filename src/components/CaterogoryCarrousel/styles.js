import styled from 'styled-components'

export const Container = styled.div`
  background: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
  .rec.rec-arrow {
    background: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const CategoryImage = styled.img``

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled.button`
  margin-top: 16px;
  background: #9758a6;
  border-radius: 8px;
  height: 50px;
  border: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  color: #fff;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
