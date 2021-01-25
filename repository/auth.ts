import User from '../domain/user';

export function saveUser(user: User): void {
  window.localStorage.setItem('user', user.toJson());
}

export function loadUser(): User | null {
  const userJson = window.localStorage.getItem('user');

  if (userJson === null) {
    return null;
  }

  return User.fromJson(userJson);
}
