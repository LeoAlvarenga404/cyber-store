export function getAttributeValue(
  attributes: { id: string; value_name: string }[],
  attributeId: string
) {
  return attributes?.find((attr) => attr.id === attributeId)?.value_name;
}
