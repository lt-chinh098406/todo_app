import styled from 'styled-components'

const CardWrapper = styled.div`
  width: 100%;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 20px;
  overflow: hidden;
  background: white;
`

interface CardProps {
  children: React.ReactNode
  onClick: () => void
}

export const Card = ({ children, onClick }: CardProps) => {
  return <CardWrapper onClick={onClick}>{children}</CardWrapper>
}
