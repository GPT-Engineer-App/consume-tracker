import React, { useState } from "react";
import { Box, Divider, HStack, Input, IconButton, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import FriendsList from "../components/FriendsList.jsx";

const Index = () => {
  const [friends, setFriends] = useState([]);
  const [newFriend, setNewFriend] = useState("");

  const handleAddFriend = () => {
    if (newFriend.trim()) {
      setFriends([...friends, newFriend.trim()]);
      setNewFriend("");
    }
  };

  return (
    <Box>
      <Divider marginY={8} />
      <Box marginBottom={8}>
        <Text fontSize="xl" fontWeight="bold" marginBottom={2}>
          Add a friend:
        </Text>
        <HStack>
          <Input placeholder="Enter friend's name..." value={newFriend} onChange={(e) => setNewFriend(e.target.value)} />
          <IconButton icon={<FaPlus />} onClick={handleAddFriend} colorScheme="blue" />
        </HStack>
      </Box>
      <FriendsList friends={friends} />
    </Box>
  );
};

export default Index;
