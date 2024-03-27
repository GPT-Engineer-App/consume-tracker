import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Select, VStack, HStack, IconButton, Divider, Flex, Spacer, Image } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: "", type: "book" });

  const handleAddItem = () => {
    if (newItem.title.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem({ title: "", type: "book" });
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        My Consumption Tracker
      </Heading>
      <Box marginBottom={8}>
        <Text fontSize="xl" fontWeight="bold" marginBottom={2}>
          Add a new item:
        </Text>
        <HStack>
          <Select value={newItem.type} onChange={(e) => setNewItem({ ...newItem, type: e.target.value })} width="120px">
            <option value="book">Book</option>
            <option value="podcast">Podcast</option>
            <option value="article">Article</option>
            <option value="video">Video</option>
          </Select>
          <Input placeholder="Enter title..." value={newItem.title} onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} />
          <IconButton icon={<FaPlus />} onClick={handleAddItem} colorScheme="blue" />
        </HStack>
      </Box>
      <Divider />
      <VStack spacing={4} align="stretch" marginTop={8}>
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
            <IconButton icon={<FaTrash />} onClick={() => handleRemoveItem(index)} variant="ghost" colorScheme="red" />
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
