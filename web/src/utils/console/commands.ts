import { uid } from "uid";
import { useAppDispatch } from "../../service/redux/store";
import { setAxis } from "../../service/slices/construcorSlice";

export function construcorChange(
  command: string,
  dispatch: ReturnType<typeof useAppDispatch>
): {
  id: string;
  data: [string, string][];
  CreateTime: number;
} {
  if (/^set ([A-Z])\s*:\s*([10]+)$/i.test(command)) {
    const match = command.match(/^set ([A-Z])\s*:\s*([10]+)$/i) as string[];
    dispatch(
      setAxis({
        axisName: match[1],
        value: match[2],
      })
    );
    return {
      id: uid(),
      data: [
        ["", `Axis ${match[1]} is `],
        ["green", "successfuly "],
        ["", "changed"],
      ],
      CreateTime: Date.now(),
    };
  }

  return {
    id: uid(),
    data: [
      ["red", "Constructor Set Error: "],
      ["", "wrong input"],
    ],
    CreateTime: Date.now(),
  };
}
