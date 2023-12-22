export default function validate({ email, password }) {
  //유효성 검사 오류를 저장하기 위한 빈 객체를 만들기 위한 코드 나중에 이를 확인하거나 처리할 수 있다.
  const errors = {};

  if(!email) {
    errors.email = "이메일이 입력되지 않았습니다.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "입력된 이메일이 유효하지 않습니다.";
  }

  if(!password) {
    errors.password = "비밀번호가 입력되지 않았습니다.";
  } else if (password.length < 8) {
    errors.password = "8자 이상의 패스워드를 사용해야 합니다.";
  }

  return errors;
}