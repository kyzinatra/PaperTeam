import { uid } from "uid";
import { useAppDispatch } from "../../service/redux/store";
import { setAxis, setSize } from "../../service/slices/construcorSlice";

type log = {
  id: string;
  data: [string, string][];
  CreateTime: number;
  prefix?: string;
};

export function construcorChange(
  command: string,
  dispatch: ReturnType<typeof useAppDispatch>
): log {
  if (/^set\s+([A-Z])\s*:\s*([10]+)$/i.test(command)) {
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
        ["", `changed (${match[2]})`],
      ],
      prefix: "🧙",
      CreateTime: Date.now(),
    };
  }
  if (/^set\s+(width|height)\s*(\d+)\s*$/i.test(command)) {
    const match = command.match(/^set\s+(width|height)\s*(\d+)\s*$/i) as string[];
    dispatch(setSize({ type: match[1] as "width" | "height", size: +match[2] }));
    return {
      id: uid(),
      data: [["blue", "Constructor request is sent"]],
      CreateTime: Date.now(),
      prefix: "📨",
    };
  }
  return {
    id: uid(),
    data: [
      ["red", "Constructor Set Error: "],
      ["", "wrong input"],
    ],
    prefix: "🤔",
    CreateTime: Date.now(),
  };
}

export function JSONLog(
  command: string,
  dispatch: ReturnType<typeof useAppDispatch>,
  info: string
): log {
  return {
    id: uid(),
    data: [
      ["green", "JSON: "],
      ["", info],
    ],
    prefix: "🙌",
    CreateTime: Date.now(),
  };
}
