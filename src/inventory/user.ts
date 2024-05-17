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

export function updateUserGrade(grade: string) {
  userInfo.grade = grade;
  applyChanges();
}

export function updateUserClazz(clazz: string) {
  userInfo.clazz = clazz;
  applyChanges();
}

export function updateUserName(name: string) {
  userInfo.name = name;
  applyChanges();
}

export function isUserInfoComplete() {
  return userInfo.clazz && userInfo.grade && userInfo.name;
}
