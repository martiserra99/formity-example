import { Grid, Flex, Heading, Text } from "@radix-ui/themes";

export default function LayoutForm({ heading, text, fields, buttons }) {
  return (
    <Flex direction="column" gap="5">
      <Flex direction="column" gap="4">
        <Heading size="4" trim="both">
          {heading}
        </Heading>
        <Text size="2" color="gray" trim="both">
          {text}
        </Text>
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
