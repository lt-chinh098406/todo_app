import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: #4d4d4d;
  min-height: var(--header);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <h3 className="text-white">Todo List</h3>
    </HeaderWrapper>
  )
}
