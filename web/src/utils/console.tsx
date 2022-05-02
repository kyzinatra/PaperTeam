import { add, clear } from "../service/slices/consoleSlice";
import { useAppDispatch } from "../service/types/redux/store";
import { uid } from "uid";
import css from "../sass/global.sass";

type Dispatch = ReturnType<typeof useAppDispatch>;
export default class ConsoleController {
  static runConsole(dispatch: Dispatch) {
    dispatch(
      add({
        id: uid(),
        data: (
          <>
            <span className={css.green}>kyzintra@Ubuntu20.04.4 </span>
            <span className={css.purple}>MINGW64 </span>~
          </>
        ),
        CreateTime: new Date(),
      })
    );
  }

  static log(dispatch: Dispatch, text: string | JSX.Element, prefix?: boolean | string) {
    dispatch(
      add({
        id: uid(),
        data: text,
        prefix,
        CreateTime: new Date(),
      })
    );
  }
  static clear(dispatch: Dispatch) {
    dispatch(clear());
  }
}
