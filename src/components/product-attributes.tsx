import { getAttributeValue } from "../utils/get-attribute-value";

interface ProductAttributesProps {
  attributes: {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
  }[];
}

const ProductAttributes = ({ attributes }: ProductAttributesProps) => {
  const displaySize = getAttributeValue(attributes, "DISPLAY_SIZE");
  const frontCamerasResolution = getAttributeValue(
    attributes,
    "FRONT_CAMERAS_RESOLUTION"
  );
  const internalMemory = getAttributeValue(attributes, "INTERNAL_MEMORY");
  const processorModel = getAttributeValue(attributes, "PROCESSOR_MODEL");
  const rearCamerasResolution = getAttributeValue(
    attributes,
    "REAR_CAMERAS_RESOLUTION"
  );
  const ram = getAttributeValue(attributes, "RAM");

  return (
    <div>
      <p>Screen size: {displaySize}</p>
      <p>Front Cameras Resolution: {frontCamerasResolution}</p>
      <p>Internal Memory: {internalMemory}</p>
      <p>Processor Model: {processorModel}</p>
      <p>Rear Cameras Resolution: {rearCamerasResolution}</p>
      <p>RAM: {ram}</p>
    </div>
  );
};

export default ProductAttributes;
