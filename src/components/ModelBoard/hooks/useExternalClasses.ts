import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { StereoType } from "../meta/ClassMeta";
import { classesState } from "../recoil/atoms";

export function useExternalClasses(serviceId: number) {
  const classes = useRecoilValue(classesState(serviceId));
  const entities = useMemo(() => {
    return classes.filter((cls) => cls.stereoType === StereoType.External);
  }, [classes]);

  return entities;
}
