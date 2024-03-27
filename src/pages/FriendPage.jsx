import React, { useEffect, useState } from "react";
import { Box, Heading, Text, VStack, Flex, Image, Spacer } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import AddItemForm from "../components/AddItemForm.jsx";

const FriendPage = () => {
  const { friendName } = useParams();
  const [friend, setFriend] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    setFriend(decodeURIComponent(friendName));
    setItems([
      { type: "Book", title: "The Great Gatsby" },
      { type: "Podcast", title: "How I Built This" },
    ]);
  }, [friendName]);
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        {friend}'s Consumption Tracker
      </Heading>
      <VStack spacing={4} align="stretch">
        {items.map((item, index) => (
          <Flex key={index} alignItems="center">
            <Image src={`https://images.unsplash.com/photo-1707759642885-42994e023046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0JpdGVtLnR5cGUlN0QlMjBpY29ufGVufDB8fHx8MTcxMTUwMTUxNnww&ixlib=rb-4.0.3&q=80&w=1080`} alt={item.type} width="40px" height="40px" marginRight={4} />
            <Box>
              <Text fontSize="lg" fontWeight="bold">
                {item.title}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {item.type}
              </Text>
            </Box>
            <Spacer />
          </Flex>
        ))}
      </VStack>
      <AddItemForm onAddItem={handleAddItem} />
    </Box>
  );
};

export default FriendPage;
