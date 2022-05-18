import {environment} from "../../environments/environment";

const {APi} = environment;

export const urls = {
  users: `${APi}/users`,
  posts: `${APi}/posts`,
  comments: `${APi}/comments`,
}
