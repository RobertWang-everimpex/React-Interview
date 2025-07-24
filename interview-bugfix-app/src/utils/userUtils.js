export const fetchUserData = async (userId) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: 'John Doe',
        email: 'john@example.com',
        posts: ['Post 1', 'Post 2', 'Post 3']
      });
    }, 1000);
  });
};

export const validateUser = (user) => {
  return user && user.name && user.email;
};