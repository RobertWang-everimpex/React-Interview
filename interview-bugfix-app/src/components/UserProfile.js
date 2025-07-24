import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../utils/userUtils';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        console.log('Fetching user data, count:', fetchCount);
        const userData = await fetchUserData(userId);
        setUser(userData);
        setLoading(false);
        setFetchCount(fetchCount + 1);
      } catch (error) {
        console.error('Error loading user data:', error);
        setLoading(false);
      }
    };

    loadUserData();
  }, [userId, fetchCount]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Posts: {user.posts?.length || 0}</p>
    </div>
  );
};

export default UserProfile;