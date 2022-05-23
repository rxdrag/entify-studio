import React, { memo } from "react";
import { Box } from "@mui/material";
import { TreeView } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useChildrenScrollStyles } from "theme/useChildrenScrollStyles";
import { useSelectedService } from "components/ModelBoard/hooks/useSelectedService";
import { useEntities } from "components/ModelBoard/hooks/useEntities";
import { useSelectedServiceId } from "components/ModelBoard/hooks/useSelectedServiceId";
import { ClassNode } from "./ClassNode";
import { RoleSelectList } from "./RoleSelectList";
import { useSelectedRole } from "./hooks/useSelectedRole";
import { useInitAuth } from "./hooks/useInitAuth";
import { useShowServerError } from "hooks/useShowServerError";
import Loading from "components/common/loading";

export const AuthBoard = memo(() => {
  const scrollStyles = useChildrenScrollStyles();
  const selectedServie = useSelectedService();
  const selectedServiceId = useSelectedServiceId();
  const selectedRole = useSelectedRole();
  const entities = useEntities(selectedServiceId);

  const { loading, error } = useInitAuth();
  useShowServerError(error);

  return selectedServie ? (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexFlow: "row",
        height: 0,
        color: (theme) => theme.palette.text.primary,
        ...scrollStyles,
      }}
    >
      <RoleSelectList />
      {loading ? (
        <Loading />
      ) : (
        selectedRole && (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexFlow: "column",
              height: "100%",
            }}
          >
            <Box
              sx={{
                flex: 1,
                overflow: "auto",
                height: 0,
                p: 2,
                pr: 4,
              }}
            >
              <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                selected=""
              >
                {entities.map((entity) => {
                  return <ClassNode key={entity.uuid} entityMeta={entity} />;
                })}
              </TreeView>
            </Box>
          </Box>
        )
      )}
    </Box>
  ) : (
    <></>
  );
});
