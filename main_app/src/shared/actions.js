import { initGlobalState } from "qiankun";

const initialState = { accessToken: "", userInfo: {} };
//这里监听子应用传过来的数据，暂时用不到
const actions = initGlobalState(initialState);

export default actions;
