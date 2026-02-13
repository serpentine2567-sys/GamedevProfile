import {
  AppShell,
  Badge,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import GameDevCard from './components/GameDevCard'

function App() {
  return (
    <AppShell
      padding="xl"
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(140deg, rgba(250, 245, 235, 1) 0%, rgba(231, 242, 255, 1) 55%, rgba(248, 240, 232, 1) 100%)',
      }}
    >
      <AppShell.Header>
        <Container size="lg">
          <Text>
            Portfolio
          </Text>
          
        </Container>
      </AppShell.Header>
      <Container size="lg">
        <Stack gap="xl">
          <Stack gap="sm" style={{ maxWidth: 720 }}>
            <Badge variant="gradient" gradient={{ from: 'orange', to: 'blue' }}>
              Portfolio
            </Badge>
            <Title order={1} fz="clamp(2.4rem, 4vw, 3.4rem)" c="dark">
              Game Development
            </Title>
            <Text c="dimmed" fz="md">
              I have worked on multiple prototypes and have entered several gamejams. 
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
            <GameDevCard
              title="Swingby Delivery"
              description="You are a space Delivery guy, whos job is to delivery goods along planets using hooks."
              tag="Gameplay / Explanation"
              embedUrl="https://www.youtube.com/embed/4gZSXnmVcDA?rel=0"
            />
            <GameDevCard
              title="Arctic Survival"
              description="A submarine survival horror game where you rely on sonar to navigate hostile enemies and terrains and reach the extraction Point."
              tag="Gameplay / Explanation"
              embedUrl="https://www.youtube.com/embed/wEwvnHLAWsc?rel=0"
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </AppShell>
  )
}

export default App
