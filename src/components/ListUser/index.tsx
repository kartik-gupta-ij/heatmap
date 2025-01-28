import { Box, Button, Text } from '@mantine/core';

interface User {
  id: number;
  name: string;
}

interface ListUsersProps {
  users: User[];
  setSelectedUsers: (updateFn: (users: User[]) => User[]) => void;
}

export default function ListUsers({ users, setSelectedUsers }: ListUsersProps) {
  const onClick = (user: User) => {
    setSelectedUsers((currentUsers: User[]) => {
      if (currentUsers.some((currentUser) => currentUser.id === user.id)) {
        return currentUsers.filter((currentUser) => currentUser.id !== user.id);
      }
      return [...currentUsers, user];
    });
  };

  return (
    <>
      <Box
        style={{
          padding: '10px 0px',
          borderTop: '1px solid #000',
          borderBottom: '1px solid #000',
          borderRight: '1px solid #000',
          width: 300,
        }}
      >
        <Text
          style={{
            padding: '10px 60px',
            borderBottom: '1px solid #000',
          }}
        >
          Most Recommended
        </Text>
        <Box>
          {users.map(
            (user, i) =>
              i < 3 && (
                <Button
                  variant="transparent"
                  display={'block'}
                  key={user.id}
                  onClick={() => onClick(user)}
                >
                  {user.name}
                </Button>
              )
          )}
        </Box>

        <Text
          style={{
            borderTop: '1px solid #000',
            borderBottom: '1px solid #000',
            height: '55px',
          }}
        ></Text>
        <Box>
          {users.map((user, i) => (
            <Button
              variant="transparent"
              display={'block'}
              key={user.id}
              onClick={() => onClick(user)}
            >
              {user.name}
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
}
