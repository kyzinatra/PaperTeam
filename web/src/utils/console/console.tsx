import { add, clear } from "../../service/slices/consoleSlice";
import { add as historyAdd } from "../../service/slices/historySlice";
import { AppDispatch, useAppDispatch } from "../../service/redux/store";
import { uid } from "uid";
import { construcorChange } from "./commands";

type Dispatch = AppDispatch;
export default class ConsoleController {
  static runConsole(dispatch: Dispatch) {
    dispatch(
      add({
        id: uid(),
        data: [
          ["green", "kyzintra@Ubuntu20.04.4 "],
          ["purple", "kyzintra@Ubuntu20.04.4 "],
          ["", "~"],
        ],
        CreateTime: Date.now(),
      })
    );
  }
  static log(dispatch: Dispatch, text: [string, string][], prefix?: boolean | string) {
    dispatch(
      add({
        id: uid(),
        data: text,
        prefix,
        CreateTime: Date.now(),
      })
    );
  }
  static run(dispatch: Dispatch, command: string) {
    dispatch(historyAdd(command));
    if (/^set/i.test(command)) dispatch(add(construcorChange(command, dispatch)));
    else if (command == "clear") dispatch(clear());
    else
      dispatch(
        add({
          id: uid(),
          data: [["", `bash: ${command.split(" ")[0]}: command not found`]],
          CreateTime: Date.now(),
        })
      );
  }
  static clear(dispatch: Dispatch) {
    dispatch(clear());
  }
}
