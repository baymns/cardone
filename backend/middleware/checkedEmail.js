export default function (email) {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const checkEmail = email.match(reg);
  if (!checkEmail) {
    return false;
  }
  return true;
};
