export const USER_IS_LOGGED_IN = {
  check: (user) => user !== undefined,
  errorMessage: 'User is not logged in.'
};

export const USER_IS_AUTHOR_OF_POST = {
  check: (user, post) => user.id === post.author_id,
  errorMessage: 'User is not the author of this post.'
};
