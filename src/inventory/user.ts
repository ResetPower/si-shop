// read user info from local storage first
const primitiveInfo = localStorage.getItem("userinfo");

export interface UserInfo {
  grade: string;
  clazz: string;
  name: string;
}

export const userInfo: UserInfo = primitiveInfo
  ? JSON.parse(primitiveInfo)
  : {
      grade: String(),
      clazz: String(), // `class` is a keyword, use `clazz` instead
      name: String(),
    };

export function applyChanges() {
  localStorage.setItem("userinfo", JSON.stringify(userInfo));
}
