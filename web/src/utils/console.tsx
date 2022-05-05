import { add, clear } from "../service/slices/consoleSlice";
import { useAppDispatch } from "../service/types/redux/store";
import { uid } from "uid";

type Dispatch = ReturnType<typeof useAppDispatch>;
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
  static clear(dispatch: Dispatch) {
    dispatch(clear());
  }
}
