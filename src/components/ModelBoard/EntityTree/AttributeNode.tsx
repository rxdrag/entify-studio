import { IconButton, SvgIcon } from "@mui/material";
import { TreeItem } from "@mui/lab";
import { NodeText } from "./NodeText";
import { TreeNodeLabel } from "./TreeNodeLabel";
import { AttributeMeta } from "../meta/AttributeMeta";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useMemo } from "react";
import { useSetRecoilState } from "recoil";
import { selectedElementState } from "../recoil/atoms";
import { useDeleteAttribute } from "../hooks/useDeleteAttribute";
import { useSelectedServiceId } from "../hooks/useSelectedServiceId";
import { CONST_ID } from "../meta/Meta";
import { StereoType } from "../meta/ClassMeta";

export const AttributeNode = (props: {
  attribute: AttributeMeta;
  stereoType: StereoType;
}) => {
  const { attribute, stereoType } = props;
  const serviceId = useSelectedServiceId();
  const setSelectedElement = useSetRecoilState(selectedElementState(serviceId));
  const isId = useMemo(
    () => attribute.name === CONST_ID,
    [attribute.name]
  ); 
  const deletedAttribute = useDeleteAttribute(serviceId);
  const handleClick = () => {
    setSelectedElement(attribute.uuid);
  };

  const handleDelete = () => {
    deletedAttribute(attribute.uuid);
  };
  return (
    <TreeItem
      nodeId={attribute.uuid}
      label={
        <TreeNodeLabel
          action={
            !isId && (
              <IconButton size="small" onClick={handleDelete}>
                <DeleteOutlineOutlinedIcon fontSize="small" />
              </IconButton>
            )
          }
          onClick={handleClick}
        >
          <SvgIcon sx={{ fontSize: 12 }}>
            <path
              fill="currentColor"
              d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12Z"
            />
          </SvgIcon>
          <NodeText>
            {attribute.name}
            {stereoType !== StereoType.Enum && <>:{attribute.typeLabel}</>}
          </NodeText>
        </TreeNodeLabel>
      }
    ></TreeItem>
  );
};
