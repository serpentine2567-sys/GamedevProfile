import { AspectRatio, Badge, Card, Group, Text, Title } from '@mantine/core'

type GameDevCardProps = {
  title: string
  description: string
  tag: string
  embedUrl: string
}

function GameDevCard({ title, description, tag, embedUrl }: GameDevCardProps) {
  return (
    <Card withBorder radius="lg" padding="lg" shadow="sm">
      <Group justify="space-between" mb="sm">
        <Badge color="dark" variant="light" tt="uppercase" size="sm">
          {tag}
        </Badge>
        <Text size="xs" c="dimmed" tt="uppercase">
          YouTube
        </Text>
      </Group>

      <Title order={3} fz="1.35rem">
        {title}
      </Title>
      {/* TODO: Update the description text below. */}
      <Text size="sm" c="dimmed" mb="md">
        {description}
      </Text>

      <AspectRatio ratio={16 / 9} mb="lg">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </AspectRatio>

    </Card>
  )
}

export default GameDevCard
