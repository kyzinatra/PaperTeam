import { add, clear } from "../../service/slices/consoleSlice";
import { clear as clearsol } from "../../service/slices/solutionSlice";
import { add as historyAdd } from "../../service/slices/historySlice";
import { AppDispatch, useAppDispatch } from "../../service/redux/store";
import { uid } from "uid";
import { construcorChange, difficultyChange, JSONLog } from "./commands";

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
  static run(dispatch: Dispatch, command: string, info: string) {
    dispatch(historyAdd(command));
    if (/^set/i.test(command)) return dispatch(add(construcorChange(command, dispatch)));
    if (/^difficulty/i.test(command)) return dispatch(add(difficultyChange(command, dispatch)));
    if (/^json get$/i.test(command)) return dispatch(add(JSONLog(command, dispatch, info)));
    if (/^clear$/i.test(command)) {
      dispatch(clear());
      dispatch(clearsol());
      return;
    }

    dispatch(
      add({
        id: uid(),
        data: [["", `bash: ${command.split(" ")[0]}: command not found`]],
        CreateTime: Date.now(),
        prefix: "🙈",
      })
    );
  }
  static clear(dispatch: Dispatch) {
    dispatch(clear());
    dispatch(clearsol());
  }
}
