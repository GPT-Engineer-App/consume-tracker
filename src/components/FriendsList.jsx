import React from "react";
import { Box, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const FriendsList = ({ friends }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" marginBottom={2}>
        Friends:
      </Text>
      <VStack spacing={2} align="stretch">
        {friends.map((friend, index) => (
          <Link as={RouterLink} to={`/friend/${encodeURIComponent(friend)}`} key={index}>
            <Text>{friend}</Text>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default FriendsList;
