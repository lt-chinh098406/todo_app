import styled from 'styled-components'
import { SideBar } from '@/components/layout/SideBar'
import { Header } from '~/components/layout/Header'
import { Index } from '~/modules/todo'

const Container = styled.div`
  max-width: calc(100% - (var(--sidebar)));
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default function TodoPage() {
  return (
    <main className="flex">
      <SideBar />
      <Container>
        <Header />
        <Index />
      </Container>
    </main>
  )
}
