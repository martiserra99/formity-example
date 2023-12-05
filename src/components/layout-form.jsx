import { Grid, Flex, Heading, Text } from "@radix-ui/themes";

export default function LayoutForm({ heading, text, fields, buttons }) {
  return (
    <Flex direction="column" gap="5">
      <Flex direction="column" gap="1">
        <Heading>{heading}</Heading>
        <Text>{text}</Text>
      </Flex>
      <Flex direction="column" gap="4">
        {fields}
      </Flex>
      <Grid columns={buttons.length} gap="4">
        {buttons}
      </Grid>
    </Flex>
  );
}
