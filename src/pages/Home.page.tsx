import { useEffect, useState } from 'react';
import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { Box, List, Text } from '@mantine/core';
import Heatmap from '@/components/Heatmap';
import ListUsers from '@/components/ListUser';

export function HomePage() {
  const [users, setUsers] = useState<any>([]);
  const [selectedUsers, setSelectedUsers] = useState<any>([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://forinterview.onrender.com/people');
      const data = await response.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <>
      <Box>
        <Text
          style={{
            color: '#999999',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 500,
            gap: 5,
            padding: '10px 50px',
          }}
        >
          <IconArrowNarrowLeft />
          Back to home jobs
        </Text>
        <Text
          style={{
            color: '#828282',
            fontSize: 34,
            fontWeight: 500,
            padding: '10px 60px',
          }}
        >
          PosK_UXdesigner_sr001
        </Text>
      </Box>
      <Box display={'flex'}>
        <ListUsers users={users} setSelectedUsers={setSelectedUsers} />
        <Heatmap selectedUsers={selectedUsers} />
      </Box>
    </>
  );
}
