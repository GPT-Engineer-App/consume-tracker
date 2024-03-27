import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from "@chakra-ui/react";

const AddItemForm = ({ onAddItem }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && type.trim()) {
      onAddItem({ title: title.trim(), type: type.trim() });
      setTitle("");
      setType("");
    }
  };

  return (
    <Box marginTop={8}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Select a type</option>
              <option value="Book">Book</option>
              <option value="Podcast">Podcast</option>
              <option value="Movie">Movie</option>
              <option value="TV Show">TV Show</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Add Item
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default AddItemForm;
