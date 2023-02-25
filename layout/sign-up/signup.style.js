import styled from 'styled-components'

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 800px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(153, 153, 153, 0.1);

  @media(max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const Title = styled.h1`
  display: flex;
  color: #555555;
  font-size: 30px;
  align-items: center;
  justify-content: center;
`

export const Box = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.strong`
  color: #555555;
  font-size: 20px;
`

export const Form = styled.form`
  gap: 30px;
  display: flex;
  margin-top: 60px;
  align-items: center;
  margin-bottom: 100px;
  flex-direction: column;
  justify-content: center;
`

export const P = styled.p`
margin-top: 10px;
color: rgba(255, 0, 0, 0.90);
`

export const Label = styled.label`
  width: 90%;
  display: flex;
  flex-direction: column;
`

export const TextLabel = styled.p`
  color: #555555;
  font-size: 20px;
  font-weight: 100px;
  margin-bottom: 10px;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  height: 50px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(217, 217, 217, 0.1);
`

export const Button = styled.button`
  color: #fff;
  width: 90%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: rgba(153, 153, 153, 0.2);
  &:hover,
  &:focus {
    background-color: rgba(153, 153, 153, 0.4);
  }
`

export const TextButton = styled.p`
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  background: none;
`
