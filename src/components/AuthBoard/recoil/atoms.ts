import { atomFamily } from "recoil";
import { Ability } from "../meta/Ability";
import { EntityAuthSettings } from "../meta/EntityAuthSettings";
import { ID } from "../meta/id";

export const selectedRoleIdState = atomFamily<ID | undefined, number>({
  key: "selectedRoleId",
  default: undefined,
});

// 索引格式：${serviceId}-${roleId}
// export const authChangedState = atomFamily<boolean, string>({
//   key: "authChanged",
//   default: false,
// });

export const abilitiesState = atomFamily<Ability[], number>({
  key: "abilities",
  default: [],
});

export const entityAuthSettingsState = atomFamily<EntityAuthSettings[], number>({
  key: "entityAuthSettings",
  default: [],
});
