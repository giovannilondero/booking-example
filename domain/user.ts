interface UserProps {
  name: string;
  email: string;
}

export default class User {
  private constructor(private props: UserProps) {}

  public static create(props: UserProps): User {
    return new User(props);
  }

  public get name() {
    return this.props.name;
  }

  public get email() {
    return this.props.email;
  }
}
