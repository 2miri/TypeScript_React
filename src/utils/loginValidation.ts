export function validEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validPassword(password: string) {
  return password.length >= 8;
}

export function validEmailString(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "이메일이 유효하지 않습니다";
  }
}

export function validPasswordString(password: string) {
  if (password.length < 8) {
    return "비밀번호가 유효하지 않습니다";
  }
}
