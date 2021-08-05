export const USER_LIST_REQUEST = 'user list request';
export const USER_LIST_SUCCESS = 'user list success';
export const USER_LIST_ERROR = 'user list error';

export class UserListRequestAction {
  readonly type = USER_LIST_REQUEST;
}

export class UserListErrorAction {
  readonly type = USER_LIST_ERROR;
}

export class UserListSuccessAction {
  readonly type = USER_LIST_SUCCESS;

  constructor(public payload?: { data: any }) {
  }
}
